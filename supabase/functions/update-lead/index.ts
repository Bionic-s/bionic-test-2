// Notify business owner when a lead progresses through the profiling funnel
async function notifyStageProgression(lead: any, requestData: any) {
  const apiKey = Deno.env.get('RESEND_API_KEY');
  const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL') || 'm.aljawharji@bionics.com.sa';
  const fromEmail = Deno.env.get('FROM_EMAIL') || 'Bionic Solutions <onboarding@resend.dev>';

  if (!apiKey || !lead) return;

  const stageLabel = requestData.stage === 'stage3' ? 'Stage 3 (Complete)' : requestData.stage === 'stage2' ? 'Stage 2 (Company Info)' : requestData.stage;
  const isComplete = requestData.stage === 'stage3';

  const detailsList = [
    lead.name ? `Name: ${lead.name}` : null,
    `Email: ${lead.email}`,
    lead.company_size ? `Company Size: ${lead.company_size}` : null,
    lead.industry ? `Industry: ${lead.industry}` : null,
    lead.phone ? `Phone: ${lead.phone}` : null,
    requestData.message ? `Message: ${requestData.message}` : null,
  ].filter(Boolean).join('\n');

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: lead.email,
        subject: isComplete ? `Lead completed assessment - ${lead.name || lead.email}` : `Lead progressed - ${lead.name || lead.email}`,
        text: `A lead has progressed to ${stageLabel}.\n\n${detailsList}\n\nCaptured: ${new Date().toLocaleString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00BFFF; border-bottom: 3px solid #00BFFF; padding-bottom: 10px;">
              ${isComplete ? 'Lead Completed Assessment' : 'Lead Progressed'}
            </h2>
            <p><strong>Stage:</strong> ${stageLabel}</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              ${lead.name ? `<p><strong>Name:</strong> ${lead.name}</p>` : ''}
              <p><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
              ${lead.company_size ? `<p><strong>Company Size:</strong> ${lead.company_size}</p>` : ''}
              ${lead.industry ? `<p><strong>Industry:</strong> ${lead.industry}</p>` : ''}
              ${lead.phone ? `<p><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>` : ''}
              ${requestData.message ? `<p><strong>Message:</strong><br>${requestData.message}</p>` : ''}
            </div>
            <p style="color: #666; font-size: 12px;">Captured: ${new Date().toLocaleString()}</p>
          </div>
        `,
      }),
    });
  } catch (error) {
    console.error('Stage progression notification error:', error);
  }
}

Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'false'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const requestData = await req.json();
    const { email, leadId, companySize, industry, phone, company, stage } = requestData;

    if (!email && !leadId) {
      throw new Error('Email or Lead ID is required');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    // Build update object based on provided fields
    const updateData: any = {
      updated_at: new Date().toISOString()
    };

    if (companySize) updateData.company_size = companySize;
    if (industry) updateData.industry = industry;
    if (phone) updateData.phone = phone;
    if (company) updateData.company = company;
    if (stage) updateData.lead_stage = stage;

    // Update lead by email or leadId
    let updateUrl;
    if (email) {
      updateUrl = `${supabaseUrl}/rest/v1/leads?email=eq.${encodeURIComponent(email)}`;
    } else {
      updateUrl = `${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`;
    }

    const leadResponse = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey!,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updateData)
    });

    if (!leadResponse.ok) {
      const errorText = await leadResponse.text();
      throw new Error(`Failed to update lead: ${errorText}`);
    }

    // Notify owner when lead progresses (stage 2 or stage 3)
    if (stage === 'stage2' || stage === 'stage3') {
      const updatedLeads = await leadResponse.json();
      if (updatedLeads && updatedLeads.length > 0) {
        await notifyStageProgression(updatedLeads[0], requestData);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead updated successfully'
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          code: 'LEAD_UPDATE_ERROR',
          message: error.message
        }
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});