// Simple date formatting function since we can't import external modules
function formatDate(date, format) {
    const d = new Date(date);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    if (format === 'EEEE, MMMM d, yyyy') {
        return `${dayNames[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    return date;
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
        // Extract booking details from request
        const { name, email, company, phone, date, timeSlot, notes } = await req.json();

        // Validate required fields
        if (!name || !email) {
            throw new Error('Name and email are required');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        // Get email config from environment (with sensible defaults)
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL') || 'm.aljawharji@bionics.com.sa';
        const fromEmail = Deno.env.get('FROM_EMAIL') || 'Bionic Solutions <onboarding@resend.dev>';

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
                            
                            <!-- Meeting Link -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            🎯 Teams Meeting Link
                                        </h2>
                                        <p style="margin: 0 0 15px 0; font-size: 14px; line-height: 1.6; color: #9AA4AF;">
                                            Use this Microsoft Teams link for the discovery call:
                                        </p>
                                        <a href="https://teams.microsoft.com/meet/34926287902197?p=115LYi1fzyoHHBKIG8" 
                                           style="display: inline-block; background: linear-gradient(135deg, #00BFFF 0%, #0099CC 100%); color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-bottom: 10px;">
                                            Join Teams Meeting
                                        </a>
                                        <p style="margin: 10px 0 0 0; font-size: 12px; color: #9AA4AF; word-break: break-all;">
                                            https://teams.microsoft.com/meet/34926287902197?p=115LYi1fzyoHHBKIG8
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Next Steps -->
                            <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                <strong style="color: #FFFFFF;">Next Steps:</strong>
                            </p>
                            <ul style="margin: 0 0 30px 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #9AA4AF;">
                                <li>Review the client's information and requirements</li>
                                <li>Contact the client via email or phone to confirm the meeting</li>
                                <li>Share the Teams meeting link if needed</li>
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

🎯 TEAMS MEETING LINK:
https://teams.microsoft.com/meet/34926287902197?p=115LYi1fzyoHHBKIG8

Next Steps:
- Review the client's information and requirements
- Contact the client via email or phone to confirm the meeting
- Share the Teams meeting link if needed
- Prepare discovery call agenda based on their needs

Best regards,
Bionic Solutions Website
        `;

        // Send booking notification email
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
        console.log('Admin email sent successfully:', emailResult);

        // Send customer confirmation email
        const customerHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discovery Call Booking Confirmation</title>
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
                                Discovery Call Booking Confirmed
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                Hi ${name},
                            </p>
                            
                            <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                Thank you for booking a discovery call with Bionic Solutions! Your preferred meeting time has been received.
                            </p>
                            
                            <!-- Booking Summary -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            Your Booking Details
                                        </h2>
                                        
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF; width: 140px;">
                                                    <strong style="color: #FFFFFF;">Preferred Date:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${date ? formatDate(date, 'EEEE, MMMM d, yyyy') : 'To be confirmed'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Preferred Time:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${timeSlot || 'To be confirmed'}
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
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Meeting Link -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            🎯 Teams Meeting Link
                                        </h2>
                                        <p style="margin: 0 0 15px 0; font-size: 14px; line-height: 1.6; color: #9AA4AF;">
                                            This is your Microsoft Teams link for the discovery call:
                                        </p>
                                        <a href="https://teams.microsoft.com/meet/34926287902197?p=115LYi1fzyoHHBKIG8" 
                                           style="display: inline-block; background: linear-gradient(135deg, #00BFFF 0%, #0099CC 100%); color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-bottom: 10px;">
                                            Join Teams Meeting
                                        </a>
                                        <p style="margin: 10px 0 0 0; font-size: 12px; color: #9AA4AF; word-break: break-all;">
                                            https://teams.microsoft.com/meet/34926287902197?p=115LYi1fzyoHHBKIG8
                                        </p>
                                        <p style="margin: 15px 0 0 0; font-size: 13px; color: #9AA4AF; line-height: 1.5;">
                                            <strong style="color: #FFFFFF;">Important:</strong> Please test the link before our meeting to ensure your audio and video work properly.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                <strong style="color: #FFFFFF;">Next Steps:</strong>
                            </p>
                            <ul style="margin: 0 0 30px 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #9AA4AF;">
                                <li>Our team will contact you shortly to confirm your preferred meeting time</li>
                                <li>Save the Teams meeting link for your discovery call</li>
                                <li>Prepare to discuss your project requirements and goals</li>
                            </ul>
                            
                            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                If you have any questions or need to reschedule, please contact us at:
                            </p>
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #00BFFF;">
                                📧 m.aljawharji@bionics.com.sa
                            </p>
                            <p style="margin: 0 0 30px 0; font-size: 14px; color: #00BFFF;">
                                📞 +966 XX XXX XXXX
                            </p>
                            
                            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9AA4AF;">
                                We look forward to speaking with you soon!<br>
                                <strong style="color: #FFFFFF;">Best regards,<br>The Bionic Solutions Team</strong>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #0B0D10; text-align: center; border-top: 1px solid #2A2D33;">
                            <p style="margin: 0; font-size: 12px; color: #9AA4AF;">
                                This is a confirmation email from Bionic Solutions. Please do not reply to this email.
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

        const customerTextContent = `
Discovery Call Booking Confirmation

Hi ${name},

Thank you for booking a discovery call with Bionic Solutions! Your preferred meeting time has been received.

Your Booking Details:
- Preferred Date: ${date ? formatDate(date, 'EEEE, MMMM d, yyyy') : 'To be confirmed'}
- Preferred Time: ${timeSlot || 'To be confirmed'}
${company ? `- Company: ${company}` : ''}

🎯 YOUR TEAMS MEETING LINK:
https://teams.microsoft.com/meet/34926287902197?p=115LYi1fzyoHHBKIG8

Next Steps:
- Our team will contact you shortly to confirm your preferred meeting time
- Save the Teams meeting link for your discovery call
- Prepare to discuss your project requirements and goals

If you have any questions or need to reschedule, please contact us at:
📧 m.aljawharji@bionics.com.sa
📞 +966 XX XXX XXXX

We look forward to speaking with you soon!
Best regards,
The Bionic Solutions Team
        `;

        // Send confirmation email to customer
        const customerEmailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [email],
                subject: 'Discovery Call Booking Confirmed - Bionic Solutions',
                html: customerHtmlContent,
                text: customerTextContent,
            }),
        });

        if (!customerEmailResponse.ok) {
            const errorText = await customerEmailResponse.text();
            console.error('Customer email send error:', errorText);
            // Don't throw error here, admin email was already sent successfully
        } else {
            const customerEmailResult = await customerEmailResponse.json();
            console.log('Customer confirmation email sent:', customerEmailResult);
        }

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
