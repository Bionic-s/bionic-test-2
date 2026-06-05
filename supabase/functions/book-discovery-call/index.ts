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
        if (!name || !email || !date || !timeSlot) {
            throw new Error('Name, email, date, and time slot are required');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        // Get Supabase credentials
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        // Check if time slot is already booked
        const checkResponse = await fetch(
            `${supabaseUrl}/rest/v1/discovery_call_bookings?date=eq.${date}&time_slot=eq.${timeSlot}&status=eq.confirmed`,
            {
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!checkResponse.ok) {
            throw new Error('Failed to check availability');
        }

        const existing = await checkResponse.json();
        if (existing && existing.length > 0) {
            throw new Error('This time slot is already booked. Please select another time.');
        }

        // Create booking record
        const bookingData = {
            name,
            email,
            company: company || null,
            phone: phone || null,
            date,
            time_slot: timeSlot,
            notes: notes || null,
            status: 'confirmed',
            created_at: new Date().toISOString()
        };

        const insertResponse = await fetch(`${supabaseUrl}/rest/v1/discovery_call_bookings`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(bookingData)
        });

        if (!insertResponse.ok) {
            const errorText = await insertResponse.text();
            throw new Error(`Database insert failed: ${errorText}`);
        }

        const bookingResult = await insertResponse.json();

        // Return success response
        return new Response(JSON.stringify({
            data: {
                success: true,
                booking: bookingResult[0],
                message: 'Discovery call booked successfully! You will receive a confirmation email shortly.'
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Booking error:', error);

        const errorResponse = {
            error: {
                code: 'BOOKING_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});
