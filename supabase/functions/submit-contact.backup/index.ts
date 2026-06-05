// Email sending function using Resend API
async function sendEmailNotification(submissionData: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  
  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not configured - email notification skipped');
    return null;
  }

  const emailContent = `
New contact form submission from Bionic Solutions website:

Name: ${submissionData.name}
Email: ${submissionData.email}
Company: ${submissionData.company || 'Not provided'}
Phone: ${submissionData.phone || 'Not provided'}

Message:
${submissionData.message}

---
Submitted at: ${new Date().toISOString()}
From: Bionic Solutions Contact Form
  `.trim();

  try {
    console.log('Attempting to send email with API key length:', resendApiKey?.length || 0);
    
    const emailPayload = {
      from: 'onboarding@resend.dev',
      to: ['m.aljawharji@bionics.com.sa'],
      subject: `New Contact Form Submission - ${submissionData.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B0D10; border-bottom: 3px solid #00BFFF; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${submissionData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${submissionData.email}">${submissionData.email}</a></p>
            <p><strong>Company:</strong> ${submissionData.company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${submissionData.phone || 'Not provided'}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #e1e4e8; border-radius: 8px;">
            <h4 style="color: #0B0D10; margin-top: 0;">Message:</h4>
            <p style="line-height: 1.6; white-space: pre-wrap;">${submissionData.message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e1e4e8; color: #666; font-size: 12px;">
            <p>Submitted: ${new Date().toLocaleString()}</p>
            <p>From: Bionic Solutions Contact Form</p>
          </div>
        </div>
      `
    };
    
    console.log('Email payload prepared');
    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload)
    });

    console.log('Email API response status:', emailResponse.status);
    
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Email sending failed with status:', emailResponse.status);
      console.error('Error response:', errorText);
      return { error: errorText, status: emailResponse.status };
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', JSON.stringify(emailResult));
    return emailResult;

  } catch (error) {
    console.error('Email sending error:', error);
    return null;
  }
}

Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'false'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      throw new Error('Name, email, and message are required fields');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Character limit validation
    if (message.length > 1000) {
      throw new Error('Message must be less than 1000 characters');
    }

    // Phone validation (if provided)
    if (phone && phone.length > 0) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(phone) || phone.length < 10) {
        throw new Error('Please enter a valid phone number');
      }
    }

    // Get Supabase credentials
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');

    if (!serviceRoleKey || !supabaseUrl) {
      throw new Error('Supabase configuration missing');
    }

    // Insert contact submission into database
    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${serviceRoleKey}`,
        'apikey': serviceRoleKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company ? company.trim() : null,
        phone: phone ? phone.trim() : null,
        message: message.trim(),
        status: 'new'
      })
    });

    if (!insertResponse.ok) {
      const errorText = await insertResponse.text();
      console.error('Database insert failed:', errorText);
      throw new Error('Failed to save contact submission');
    }

    const submissionData = await insertResponse.json();

    // Send email notification
    const emailResult = await sendEmailNotification({
      name: name.trim(),
      email: email.trim(),
      company: company ? company.trim() : undefined,
      phone: phone ? phone.trim() : undefined,
      message: message.trim()
    });

    return new Response(JSON.stringify({
      data: {
        success: true,
        message: 'Contact form submitted successfully',
        submission: submissionData[0],
        emailSent: emailResult ? true : false
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    console.error('Contact form submission error:', error);

    const errorResponse = {
      error: {
        code: 'CONTACT_SUBMISSION_FAILED',
        message: error.message || 'Failed to submit contact form'
      }
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
