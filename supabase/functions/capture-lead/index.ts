// Shared email config (env vars with sensible defaults)
function getEmailConfig() {
  return {
    apiKey: Deno.env.get('RESEND_API_KEY'),
    notificationEmail: Deno.env.get('NOTIFICATION_EMAIL') || 'm.aljawharji@bionics.com.sa',
    fromEmail: Deno.env.get('FROM_EMAIL') || 'Bionic Solutions <onboarding@resend.dev>',
    siteUrl: Deno.env.get('SITE_URL') || 'https://bionic-solutions.com.sa',
  };
}

// Notify the business owner when a new lead is captured
async function sendLeadNotification(leadData: {
  name: string | null;
  email: string;
  magnet_type?: string;
  stage: string;
  source: string;
}) {
  const { apiKey, notificationEmail, fromEmail } = getEmailConfig();

  if (!apiKey) {
    console.warn('RESEND_API_KEY not configured - email notification skipped');
    return null;
  }

  const emailContent = `
New lead captured from Bionic Solutions website:

Name: ${leadData.name || 'Not provided'}
Email: ${leadData.email}
Lead Stage: ${leadData.stage}
Source: ${leadData.source}
${leadData.magnet_type ? `Lead Magnet: ${leadData.magnet_type}` : ''}

---
Captured at: ${new Date().toISOString()}
From: Bionic Solutions Lead Capture System
  `.trim();

  try {
    const emailPayload = {
      from: fromEmail,
      to: [notificationEmail],
      reply_to: leadData.email,
      subject: `New Lead Captured - ${leadData.name || leadData.email}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B0D10; border-bottom: 3px solid #00BFFF; padding-bottom: 10px;">
            New Lead Captured
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${leadData.name || 'Not provided'}</p>
            <p><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></p>
            <p><strong>Lead Stage:</strong> ${leadData.stage}</p>
            <p><strong>Source:</strong> ${leadData.source}</p>
            ${leadData.magnet_type ? `<p><strong>Lead Magnet:</strong> ${leadData.magnet_type}</p>` : ''}
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e1e4e8; color: #666; font-size: 12px;">
            <p>Captured: ${new Date().toLocaleString()}</p>
            <p>From: Bionic Solutions Lead Capture System</p>
          </div>
        </div>
      `
    };

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload)
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Email sending failed:', errorText);
      return { error: errorText };
    }

    const emailResult = await emailResponse.json();
    console.log('Lead notification email sent successfully');
    return emailResult;

  } catch (error) {
    console.error('Email sending error:', error);
    return null;
  }
}

// Send the lead an auto-reply with the Enterprise Framework Guide
async function sendLeadAutoReply(leadData: { name: string | null; email: string; magnet_type?: string }) {
  const { apiKey, fromEmail, siteUrl } = getEmailConfig();
  if (!apiKey) return null;

  const displayName = leadData.name || 'there';
  const guideUrl = `${siteUrl}/assets/Bionic_Enterprise_Framework_Implementation_Guide.pdf`;

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [leadData.email],
        subject: 'Your Bionic Solutions Enterprise Framework Guide',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0B0D10;">
            <h2 style="color: #00BFFF;">Thanks, ${displayName}!</h2>
            <p>Here is your copy of the <strong>Bionic Solutions Enterprise Framework Implementation Guide</strong>.</p>
            <p style="margin: 24px 0;">
              <a href="${guideUrl}" style="background: #00BFFF; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                Download the Guide (PDF)
              </a>
            </p>
            <p>If the button doesn't work, copy this link:<br><a href="${guideUrl}">${guideUrl}</a></p>
            <p>Our team will reach out within 24 hours if you'd like to discuss how the framework applies to your business.</p>
            <p style="margin-top: 32px;">Best regards,<br><strong>The Bionic Solutions Team</strong></p>
          </div>
        `,
        text: `Thanks, ${displayName}!\n\nHere is your copy of the Bionic Solutions Enterprise Framework Implementation Guide:\n${guideUrl}\n\nOur team will reach out within 24 hours if you'd like to discuss how the framework applies to your business.\n\nBest regards,\nThe Bionic Solutions Team`,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Auto-reply failed:', errorText);
      return { error: errorText };
    }

    return await emailResponse.json();
  } catch (error) {
    console.error('Auto-reply error:', error);
    return null;
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
    const { name, email, magnet_type, stage } = requestData;

    if (!email) {
      throw new Error('Email is required');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    // Check if lead exists first
    const checkResponse = await fetch(`${supabaseUrl}/rest/v1/leads?email=eq.${encodeURIComponent(email)}&select=id`, {
      headers: {
        'apikey': supabaseKey!,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    const existingLead = await checkResponse.json();
    let leadId;

    if (existingLead && existingLead.length > 0) {
      // Update existing lead
      leadId = existingLead[0].id;
      const updateResponse = await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`, {
        method: 'PATCH',
        headers: {
          'apikey': supabaseKey!,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name: name || null,
          lead_stage: stage || 'initial',
          updated_at: new Date().toISOString()
        })
      });

      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        throw new Error(`Failed to update lead: ${errorText}`);
      }
    } else {
      // Insert new lead
      const leadResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey!,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          email,
          name: name || null,
          lead_stage: stage || 'initial',
          source: requestData.source || 'website',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      });

      if (!leadResponse.ok) {
        const errorText = await leadResponse.text();
        throw new Error(`Failed to capture lead: ${errorText}`);
      }

      const leadData = await leadResponse.json();
      leadId = leadData[0]?.id;
    }



    // Track lead magnet download if magnet_type is provided
    if (magnet_type && leadId) {
      await fetch(`${supabaseUrl}/rest/v1/lead_magnets`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey!,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lead_id: leadId,
          magnet_type,
          download_time: new Date().toISOString(),
          ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
          user_agent: req.headers.get('user-agent')
        })
      });
    }

    // Send email notification to business owner
    const emailResult = await sendLeadNotification({
      name: name || null,
      email,
      magnet_type,
      stage: stage || 'initial',
      source: requestData.source || 'website'
    });

    // Send auto-reply with the framework guide to the lead
    const autoReplyResult = await sendLeadAutoReply({
      name: name || null,
      email,
      magnet_type
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead captured successfully',
        leadId,
        emailSent: emailResult ? true : false,
        autoReplySent: autoReplyResult ? true : false
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
          code: 'LEAD_CAPTURE_ERROR',
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
