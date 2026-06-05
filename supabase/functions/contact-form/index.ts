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
        // Extract contact form data from request
        const { name, email, company, phone, message, role, industry, priority, size } = await req.json();

        // Validate required fields
        if (!name || !email) {
            throw new Error('Name and email are required');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // STEP 1: Persist lead to Supabase (MUST succeed)
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://krjgjaemysvutpwbwgst.supabase.co';
        const supabaseServiceKey = Deno.env.get('SB_SERVICE_KEY');

        if (!supabaseServiceKey) {
            throw new Error('SB_SERVICE_KEY not configured');
        }

        const insertResponse = await fetch(
            `${supabaseUrl}/rest/v1/contact_submissions`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${supabaseServiceKey}`,
                    'apikey': supabaseServiceKey,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation',
                },
                body: JSON.stringify({
                    name,
                    email,
                    company: company || null,
                    message: message || '',
                    role: role || null,
                    industry: industry || null,
                    priority: priority || null,
                    organization_size: size || null,
                    status: 'new',
                }),
            }
        );

        if (!insertResponse.ok) {
            const errText = await insertResponse.text();
            console.error('DB insert failed:', errText);
            throw new Error('Failed to save submission');
        }

        const inserted = await insertResponse.json();
        const submissionId = inserted[0]?.id;
        console.log('Contact saved to DB, id:', submissionId);

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // STEP 2: Send email notification (best-effort)
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL') || 'm.aljawharji@bionics.com.sa';
        const fromEmail = Deno.env.get('FROM_EMAIL') || 'Bionic Solutions <onboarding@resend.dev>';
        const siteUrl = Deno.env.get('SITE_URL') || 'https://bionic-solutions.com.sa';

        let emailId: string | null = null;
        let emailError: string | null = null;

        if (resendApiKey) {
            // Build email content
            const contactRows = [
                ['Name', name],
                ['Email', email],
                ...(company ? [['Company', company] as const] : []),
                ...(phone ? [['Phone', phone] as const] : []),
                ...(role ? [['Role / Title', role] as const] : []),
                ...(industry ? [['Industry', industry] as const] : []),
                ...(priority ? [['Briefing Type', priority] as const] : []),
                ...(size ? [['Organization Size', size] as const] : []),
            ];

            const contactRowsHtml = contactRows.map(([label, value]) =>
                `<tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF; width: 140px;">
                        <strong style="color: #FFFFFF;">${label}:</strong>
                    </td>
                    <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                        ${label === 'Email' ? `<a href="mailto:${value}" style="color: #00BFFF; text-decoration: none;">${value}</a>` : value}
                    </td>
                </tr>`
            ).join('');

            const messageHtml = message ? `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                <tr><td>
                    <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">Message</h2>
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #9AA4AF; white-space: pre-wrap;">${message}</p>
                </td></tr>
            </table>` : '';

            const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:#0B0D10;color:#FFFFFF;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0B0D10;">
<tr><td style="padding:40px 20px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background-color:#1A1D23;border-radius:12px;overflow:hidden;">
<tr><td style="background:linear-gradient(135deg,#00BFFF 0%,#0099CC 100%);padding:30px;text-align:center;">
<h1 style="margin:0;font-size:28px;font-weight:700;color:#FFFFFF;">New Contact Form Submission</h1>
</td></tr>
<tr><td style="padding:40px 30px;">
<p style="margin:0 0 30px 0;font-size:16px;line-height:1.5;color:#9AA4AF;">
A new contact form submission was received from the Bionic Solutions website. Submission ID: <strong style="color:#00BFFF;">#${submissionId}</strong>.
</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0B0D10;border-radius:8px;padding:20px;margin-bottom:30px;">
<tr><td>
<h2 style="margin:0 0 20px 0;font-size:18px;font-weight:600;color:#00BFFF;">Contact Information</h2>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
${contactRowsHtml}
</table>
</td></tr>
</table>
${messageHtml}
<p style="margin:0 0 10px 0;font-size:16px;line-height:1.5;color:#9AA4AF;"><strong style="color:#FFFFFF;">Suggested Next Steps:</strong></p>
<ul style="margin:0 0 30px 0;padding-left:20px;font-size:14px;line-height:1.8;color:#9AA4AF;">
<li>Review the contact information and message</li>
<li>Respond to the contact within 24 hours</li>
<li>Follow up with additional information about services</li>
<li>Schedule a discovery call if appropriate</li>
</ul>
<p style="margin:0;font-size:14px;line-height:1.5;color:#9AA4AF;">Best regards,<br><strong style="color:#FFFFFF;">Bionic Solutions Website</strong></p>
</td></tr>
<tr><td style="padding:20px 30px;background-color:#0B0D10;text-align:center;border-top:1px solid #2A2D33;">
<p style="margin:0;font-size:12px;color:#9AA4AF;">This is an automated notification from the Bionic Solutions contact form.</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`;

            const textContent = `New Contact Form Submission\n\nSubmission ID: #${submissionId}\n\nContact Information:\n${contactRows.map(([l, v]) => `- ${l}: ${v}`).join('\n')}\n${message ? `\nMessage:\n${message}\n` : ''}\nSuggested Next Steps:\n- Review the contact information and message\n- Respond to the contact within 24 hours\n- Follow up with additional information about services\n- Schedule a discovery call if appropriate\n\nBest regards,\nBionic Solutions Website`;

            try {
                const emailResponse = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        from: fromEmail,
                        to: [notificationEmail],
                        reply_to: email,
                        subject: `New Contact Form Submission - ${name} [#${submissionId}]`,
                        html: htmlContent,
                        text: textContent,
                    }),
                });

                if (emailResponse.ok) {
                    const result = await emailResponse.json();
                    emailId = result.id;
                    console.log('Notification email sent, Resend ID:', emailId);
                } else {
                    emailError = await emailResponse.text();
                    console.error('Notification email failed:', emailError);
                }
            } catch (e) {
                emailError = e instanceof Error ? e.message : 'Unknown email error';
                console.error('Notification email exception:', emailError);
            }

            // STEP 2b: Confirmation email to submitter (best-effort)
            try {
                await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        from: fromEmail,
                        to: [email],
                        subject: 'Thank you for contacting Bionic Solutions',
                        html: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                                <h2 style="color: #00BFFF;">Thank you for contacting Bionic Solutions</h2>
                                <p>Dear ${name},</p>
                                <p>Thank you for reaching out to us. We have received your inquiry and will respond within 24 hours.</p>
                                <p>In the meantime, you might find our Enterprise Framework Implementation Guide helpful:</p>
                                <p><a href="${siteUrl}/assets/Bionic_Enterprise_Framework_Implementation_Guide.pdf" style="background-color: #00BFFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Framework Guide</a></p>
                                <p>Best regards,<br>The Bionic Solutions Team</p>
                            </div>
                        `,
                        text: `Dear ${name},\n\nThank you for contacting Bionic Solutions. We have received your inquiry and will respond within 24 hours.\n\nBest regards,\nThe Bionic Solutions Team`,
                    }),
                });
                console.log('Confirmation email sent to:', email);
            } catch (e) {
                console.error('Confirmation email exception:', e instanceof Error ? e.message : 'Unknown');
            }
        } else {
            console.warn('RESEND_API_KEY not set — email notifications skipped');
        }

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // STEP 3: Return success
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        return new Response(JSON.stringify({
            data: {
                success: true,
                submissionId,
                emailId,
                emailError,
                message: 'Contact form submitted successfully!',
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error) {
        console.error('Contact form error:', error);

        const errorResponse = {
            error: {
                code: 'CONTACT_FORM_FAILED',
                message: error.message || 'Failed to submit contact form'
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});