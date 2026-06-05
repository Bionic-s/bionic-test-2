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
        // Extract booking details from request
        const { name, email, company, phone, date, timeSlot, notes } = await req.json();

        // Validate required fields
        if (!name || !email) {
            throw new Error('Name and email are required');
        }

        // Get Resend API key from environment
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        
        if (!resendApiKey) {
            throw new Error('Resend API key not configured');
        }

        // Format date and time for display
        const bookingDateTime = date && timeSlot 
            ? `${date} at ${timeSlot}` 
            : 'Not specified (client will be contacted to schedule)';

        // Create professional HTML email template
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Discovery Call Booking</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0B0D10; color: #FFFFFF;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #1A1D23; border-radius: 12px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #00BFFF 0%, #0099CC 100%); padding: 30px; text-align: center;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #FFFFFF;">
                                New Discovery Call Booking
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                Hi Mohammad,
                            </p>
                            
                            <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                You have received a new discovery call booking request from the Bionic Solutions website.
                            </p>
                            
                            <!-- Client Information Box -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            Client Information
                                        </h2>
                                        
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF; width: 140px;">
                                                    <strong style="color: #FFFFFF;">Name:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Email:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    <a href="mailto:${email}" style="color: #00BFFF; text-decoration: none;">
                                                        ${email}
                                                    </a>
                                                </td>
                                            </tr>
                                            ${company ? `
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Company:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${company}
                                                </td>
                                            </tr>
                                            ` : ''}
                                            ${phone ? `
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Phone:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    <a href="tel:${phone}" style="color: #00BFFF; text-decoration: none;">
                                                        ${phone}
                                                    </a>
                                                </td>
                                            </tr>
                                            ` : ''}
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Preferred Time:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${bookingDateTime}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            ${notes ? `
                            <!-- Project Details -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            Project Details / Notes
                                        </h2>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #9AA4AF; white-space: pre-wrap;">
                                            ${notes}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            ` : ''}
                            
                            <!-- Next Steps -->
                            <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                <strong style="color: #FFFFFF;">Next Steps:</strong>
                            </p>
                            <ul style="margin: 0 0 30px 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #9AA4AF;">
                                <li>Review the client's information and requirements</li>
                                <li>Contact the client via email or phone to confirm the meeting</li>
                                <li>Send calendar invite with meeting details</li>
                                <li>Prepare discovery call agenda based on their needs</li>
                            </ul>
                            
                            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9AA4AF;">
                                Best regards,<br>
                                <strong style="color: #FFFFFF;">Bionic Solutions Website</strong>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #0B0D10; text-align: center; border-top: 1px solid #2A2D33;">
                            <p style="margin: 0; font-size: 12px; color: #9AA4AF;">
                                This is an automated notification from the Bionic Solutions booking system.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `;

        // Plain text version
        const textContent = `
New Discovery Call Booking

Hi Mohammad,

You have received a new discovery call booking request from the Bionic Solutions website.

Client Information:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
${phone ? `- Phone: ${phone}` : ''}
- Preferred Time: ${bookingDateTime}

${notes ? `Project Details / Notes:\n${notes}\n` : ''}

Next Steps:
- Review the client's information and requirements
- Contact the client via email or phone to confirm the meeting
- Send calendar invite with meeting details
- Prepare discovery call agenda based on their needs

Best regards,
Bionic Solutions Website
        `;

        // Send email via Resend API
        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Bionic Solutions <noreply@bionics.com.sa>',
                to: ['m.aljawharji@bionics.com.sa'],
                subject: `New Discovery Call Booking - ${name}`,
                html: htmlContent,
                text: textContent,
            }),
        });

        if (!emailResponse.ok) {
            const errorText = await emailResponse.text();
            console.error('Resend API error:', errorText);
            throw new Error(`Failed to send email: ${errorText}`);
        }

        const emailResult = await emailResponse.json();
        console.log('Email sent successfully:', emailResult);

        // Return success response
        return new Response(JSON.stringify({
            data: {
                success: true,
                emailId: emailResult.id,
                message: 'Booking email sent successfully!',
                bookingDetails: {
                    name,
                    email,
                    company,
                    phone,
                    date,
                    timeSlot,
                    notes
                }
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error) {
        console.error('Booking email error:', error);

        const errorResponse = {
            error: {
                code: 'EMAIL_SEND_FAILED',
                message: error.message || 'Failed to send booking confirmation email'
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});
