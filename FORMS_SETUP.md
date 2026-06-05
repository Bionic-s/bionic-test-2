# Forms & Email Delivery — Setup Checklist

This document explains what was fixed, what you need to configure, and how to test that every form on bionic-solutions.com.sa correctly emails you when filled.

---

## What was broken (and is now fixed in code)

| # | Issue | Status |
|---|-------|--------|
| 1 | Owner notifications were going to `x8.mattuzo@gmail.com` (a personal Gmail) | Fixed — now goes to `m.aljawharji@bionics.com.sa` |
| 2 | The booking form's email contained a giant orange "FORWARD IMMEDIATELY" banner sent to customers' inboxes (it was a workaround for #1) | Fixed — removed |
| 3 | Lead-magnet modal claimed "check your email for additional resources" but never sent any auto-reply | Fixed — auto-reply now sends the PDF link |
| 4 | Progressive profiling stages 2 & 3 sent no notification — you'd never know if someone completed the funnel | Fixed — now emails you on each stage progression |
| 5 | Contact-form auto-reply linked to a dev URL (`sfqfik2njw3n.space.minimax.io`) instead of bionic-solutions.com.sa | Fixed — uses your real site URL |
| 6 | No email format validation on the booking form's edge function | Fixed |
| 7 | Replies to notification emails went to noreply rather than the lead | Fixed — `reply_to` set to lead's email so you can reply directly |

---

## What you must do (one-time setup, ~15 min)

### Step 1 — Check / create your Resend API key

1. Sign in at https://resend.com
2. Go to **API Keys** → confirm there's a key. If not, create one (full access, label it "Bionic Solutions site").
3. Copy the key (starts with `re_`).

### Step 2 — Verify the bionics.com.sa domain in Resend

This is the most important step. Until you do this, emails come from `onboarding@resend.dev` and Resend's free plan will only deliver them to your verified account email, not to actual leads.

1. In Resend, go to **Domains** → **Add Domain**
2. Enter: `bionics.com.sa`
3. Resend gives you 3-4 DNS records to add (SPF, DKIM, sometimes DMARC):
   - Add them in your domain registrar's DNS panel (where you control bionics.com.sa DNS)
   - Wait 5–60 min for propagation
4. In Resend, click **Verify** — you should see green checkmarks on all records.

### Step 3 — Set environment variables in Supabase

1. Open https://supabase.com/dashboard
2. Select your project (`vtipzfauedtdbjkbouxv`)
3. Go to **Project Settings** → **Edge Functions** → **Secrets**
4. Add these four secrets:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | `re_…` (the key from Step 1) |
| `NOTIFICATION_EMAIL` | `m.aljawharji@bionics.com.sa` |
| `FROM_EMAIL` | `Bionic Solutions <noreply@bionics.com.sa>` (only after Step 2 succeeds — otherwise leave unset and it defaults to onboarding@resend.dev) |
| `SITE_URL` | `https://bionic-solutions.com.sa` |

### Step 4 — Redeploy the edge functions

After your push goes through Vercel, the four updated Supabase functions still need to be deployed to Supabase. Two options:

**Option A — Supabase CLI (recommended, 1 command):**
```bash
cd ~/path/to/SaudiBionicSolutions-website
npx supabase functions deploy contact-form submit-contact capture-lead update-lead
```

**Option B — Manual via dashboard:**
For each of the four functions (`contact-form`, `submit-contact`, `capture-lead`, `update-lead`):
1. Go to **Edge Functions** in Supabase dashboard
2. Open the function
3. Copy the new code from `supabase/functions/<name>/index.ts` in the repo
4. Paste, save, deploy

---

## How to test (~5 min)

Once Steps 1–4 are done, run through each form on the live site and confirm an email lands in your inbox.

| Form | Where | What to expect |
|---|---|---|
| Main contact form | Homepage → "Get Your Free Enterprise Assessment" section, or `/contact` | Owner email + customer auto-reply |
| Booking form | `/book-discovery-call` | Owner email + customer confirmation with Teams link |
| Framework guide modal | Click "Download Framework Guide" anywhere | Owner email + customer auto-reply with PDF link |
| Progressive profiling popup | Open homepage, wait 45s, fill all 3 stages | Owner email after stage 1, then again on stage 2, then again on stage 3 |

Test using a real email you control (not your own work email — use a personal Gmail or similar) so you can see both sides: the lead-side auto-reply AND your owner notification.

---

## Known limitations / future work

- **Booking form does NOT prevent double-bookings.** It calls `submit-contact` for emails but doesn't write to the `discovery_call_bookings` table. Two people could book the same slot. Fix would be to enhance `submit-contact` to also insert a row into `discovery_call_bookings` (or wire the frontend to call `book-discovery-call` after sending email).
- **Two orphan edge functions** (`book-discovery-call` and `send-booking-email`) are not called from the frontend. Safe to delete to reduce noise, but harmless to leave.
- **Phone placeholders** still show `+966 XX XXX XXXX` in error messages and customer emails. Replace with your real number when you have one to publish.
- **Resend free tier** caps you at 100 emails/day, 3,000/month. If form volume grows, upgrade to Pro ($20/mo).

---

## Env-var fallback behavior (for reference)

The code is defensive: if any env var is missing, it falls back to a sensible default. So even if you forget to set `NOTIFICATION_EMAIL`, you still get emails at `m.aljawharji@bionics.com.sa`. The only env var that's strictly required is `RESEND_API_KEY` — without it, no emails are sent and the function returns an error.
