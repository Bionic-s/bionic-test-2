/**
 * book-discovery — Supabase Edge Function
 * DB-first: insert into discovery_bookings, then best-effort email via Resend.
 */
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const NOTIFY = Deno.env.get('NOTIFICATION_EMAIL') || 'm.aljawharji@bionics.com.sa';
const FROM = Deno.env.get('FROM_EMAIL') || 'm.aljawharji@bionics.com.sa';

serve(async (req: Request) => {
  // CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, content-type',
      },
    });
  }

  try {
    const body = await req.json();
    const { name, email, company, phone, role, notes,
      selected_date, selected_time, source, intent, user_agent } = body;

    if (!name || !email || !company || !selected_date || !selected_time) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' },
      });
    }

    // 1. Insert into DB (primary — must succeed)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || 'https://krjgjaemysvutpwbwgst.supabase.co',
      Deno.env.get('SB_SERVICE_KEY') || '',
    );

    const { data, error: dbErr } = await supabase
      .from('discovery_bookings')
      .insert({
        name, email, company, phone, role, notes,
        selected_date, selected_time,
        source: source || 'direct',
        intent: intent || 'ibm-experts',
        user_agent: user_agent || '',
      })
      .select('id')
      .single();

    if (dbErr || !data) {
      console.error('DB insert failed:', dbErr);
      return new Response(JSON.stringify({ error: 'Failed to save booking' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' },
      });
    }

    const bookingId = data.id;

    // 2. Email notification (best-effort, does not block the response)
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: FROM,
            to: NOTIFY,
            subject: `[Discovery Call] ${name} — ${company} — ${selected_date} ${selected_time} (GMT+3)`,
            text: [
              `New Discovery Call Booking #${bookingId}`,
              '',
              `Name: ${name}`,
              `Email: ${email}`,
              `Company: ${company}`,
              `Phone: ${phone || '—'}`,
              `Role: ${role || '—'}`,
              `Date: ${selected_date}`,
              `Time: ${selected_time} GMT+3`,
              `Source: ${source || 'direct'}`,
              `Intent: ${intent || 'ibm-experts'}`,
              '',
              `Notes: ${notes || '—'}`,
            ].join('\n'),
          }),
        });
      } catch (mailErr) {
        console.error('Email send failed (non-fatal):', mailErr);
      }
    }

    return new Response(JSON.stringify({ success: true, bookingId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' },
    });
  }
});
