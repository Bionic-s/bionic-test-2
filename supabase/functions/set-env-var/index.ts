// Temporary edge function to set RESEND_API_KEY environment variable
Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Max-Age': '86400',
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        // This is a utility function to verify the environment variable is set
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        
        return new Response(
            JSON.stringify({
                success: true,
                message: resendApiKey ? 'RESEND_API_KEY is configured' : 'RESEND_API_KEY not found',
                hasKey: !!resendApiKey,
                keyPrefix: resendApiKey ? resendApiKey.substring(0, 5) + '...' : null
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                error: error.message
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 500
            }
        );
    }
});