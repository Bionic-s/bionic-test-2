import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar, CheckCircle, Video, Clock, ArrowRight,
  ShieldCheck, AlertCircle, Send, MapPin,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

/* ───────────────────────────────────────────
   Date helpers — KSA working days
   ─────────────────────────────────────────── */
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Return the next N working days (Sun–Thu only) starting tomorrow. */
function generateWorkingDays(count: number): Date[] {
  const days: Date[] = [];
  const now = new Date();
  // Start from tomorrow
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  while (days.length < count) {
    const dow = cursor.getDay(); // 0=Sun … 6=Sat
    if (dow >= 0 && dow <= 4) days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function formatDate(d: Date): string {
  return `${DAYS_OF_WEEK[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** Generate time slots 08:00–16:30, 30 min each */
function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 8; h < 17; h++) {
    for (const m of [0, 30]) {
      if (h === 17) continue; // last slot ends at 17:00
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return slots;
}

/* ───────────────────────────────────────────
   Form validation
   ─────────────────────────────────────────── */
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export default function BookDiscoveryCallPage() {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source') || 'direct';
  const intent = searchParams.get('intent') || 'ibm-experts';

  /* Calendar state */
  const workingDays = useMemo(() => generateWorkingDays(14), []);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  /* Form state */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [notes, setNotes] = useState('');

  /* UI state */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = useMemo(() => generateTimeSlots(), []);

  const handleDateSelect = useCallback((d: string) => {
    setSelectedDate(d);
    setSelectedTime(null);
    setError(null);
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Required';
    if (!email.trim()) errs.email = 'Required';
    else if (!validateEmail(email)) errs.email = 'Please enter a valid email';
    if (!company.trim()) errs.company = 'Required';
    if (!selectedDate) errs.date = 'Please select a date';
    if (!selectedTime) errs.time = 'Please select a time';
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) { setError('Please complete all required fields.'); return; }
    setIsSubmitting(true);
    setError(null);
    try {
      const { error: sErr } = await supabase.functions.invoke('book-discovery', {
        body: {
          name, email, company, phone, role, notes,
          selected_date: selectedDate,
          selected_time: selectedTime,
          source, intent,
          user_agent: navigator.userAgent,
        },
      });
      if (sErr) throw new Error(sErr.message || 'Failed to submit booking');
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message || 'An error occurred. Try again.');
    }
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3 bg-bg-primary border rounded-lg text-text-primary focus:outline-none focus:ring-2 transition-all ${
      fieldErrors[field] ? 'border-red-400 focus:ring-red-400/20' : 'border-white/10 focus:border-[#00BFFF]/50 focus:ring-[#00BFFF]/15'
    }`;

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl">

        {/* ═══════════════════════════════════════════
            SECTION 1 — Hero
            ═══════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-[#00BFFF]/30 text-[#00BFFF] text-tiny font-semibold rounded-full mb-6 tracking-wide">
            30-Minute Architecture Discussion · No Cost
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Speak to a Senior Architect
          </h1>
          <p className="text-text-muted text-lg max-w-[620px] mx-auto leading-relaxed mb-8">
            A technical discussion about platform fit, architecture trade-offs,
            and how your current stack evolves toward a target state.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
              Confirmed within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00BFFF]" />
              Limited weekly slots
            </span>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — What to Expect
            ═══════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                heading: 'Current State Assessment',
                body: "Walk through your platforms, integrations, and the constraints you're working around.",
              },
              {
                icon: CheckCircle,
                heading: 'Target Architecture Options',
                body: 'Trade-offs across our partner stack — Salesforce, IBM, Google Cloud, Dell, Intel, MuleSoft, Tableau, Informatica, Platform9.',
              },
              {
                icon: Video,
                heading: 'Production Readiness',
                body: 'Governance, operations, and what a credible path to production looks like for your team.',
              },
            ].map((card) => (
              <div
                key={card.heading}
                className="bg-bg-secondary border border-white/5 rounded-2xl p-6 flex flex-col"
              >
                <card.icon className="w-8 h-8 text-[#00BFFF] mb-4 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">{card.heading}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — Meeting Details
            ═══════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary text-center mb-8">Meeting Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-6 h-6 text-[#00BFFF] mx-auto mb-3" />
                <p className="text-sm text-text-muted mb-1">Duration</p>
                <p className="text-lg font-semibold text-text-primary">30 minutes</p>
              </div>
              <div className="text-center">
                <Video className="w-6 h-6 text-[#00BFFF] mx-auto mb-3" />
                <p className="text-sm text-text-muted mb-1">Format</p>
                <p className="text-lg font-semibold text-text-primary">Video conference (Zoom or Teams)</p>
              </div>
              <div className="text-center">
                <MapPin className="w-6 h-6 text-[#00BFFF] mx-auto mb-3" />
                <p className="text-sm text-text-muted mb-1">Availability</p>
                <p className="text-sm font-semibold text-text-primary leading-relaxed">
                  Sunday–Thursday<br />
                  8:00 AM – 5:00 PM<br />
                  <span className="text-text-muted font-normal">Arabian Standard Time (UTC+3)</span>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — Schedule
            ═══════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-text-primary text-center mb-2">Schedule your call</h2>
          <p className="text-text-muted text-center mb-10 max-w-[480px] mx-auto">
            Pick a date and time. You'll receive a confirmation email with calendar invite and meeting link.
          </p>

          {!submitted ? (
            <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>

                {/* ── Date Picker ── */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-3">
                    Select a date
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                    {workingDays.map((d) => {
                      const iso = toISODate(d);
                      const isSel = iso === selectedDate;
                      return (
                        <button
                          key={iso}
                          type="button"
                          onClick={() => handleDateSelect(iso)}
                          className={`px-3 py-3 rounded-xl text-sm font-medium transition-all border ${
                            isSel
                              ? 'border-[#00BFFF] bg-[#00BFFF]/10 text-[#00BFFF]'
                              : 'border-white/10 text-text-muted hover:border-white/20 hover:text-text-primary'
                          }`}
                        >
                          {formatDate(d)}
                        </button>
                      );
                    })}
                  </div>
                  {fieldErrors.date && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.date}</p>
                  )}
                </div>

                {/* ── Time Slots ── */}
                <AnimatePresence>
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-sm font-semibold text-text-primary mb-3">
                        Select a time <span className="text-text-muted font-normal">(UTC+3)</span>
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                        {timeSlots.map((slot) => {
                          const isSel = slot === selectedTime;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => { setSelectedTime(slot); setError(null); }}
                              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                                isSel
                                  ? 'border-[#00BFFF] bg-[#00BFFF]/10 text-[#00BFFF]'
                                  : 'border-white/10 text-text-muted hover:border-white/20 hover:text-text-primary'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                      {fieldErrors.time && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.time}</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Form Fields ── */}
                <div className="space-y-5 pt-4 border-t border-white/5">
                  <div>
                    <label htmlFor="bdc-name" className="block text-sm text-text-muted mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input id="bdc-name" type="text" value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputCls('name')} placeholder="Your full name" />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="bdc-email" className="block text-sm text-text-muted mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input id="bdc-email" type="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputCls('email')} placeholder="name@company.com" />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="bdc-company" className="block text-sm text-text-muted mb-2">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input id="bdc-company" type="text" value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={inputCls('company')} placeholder="Your organization" />
                    {fieldErrors.company && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.company}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="bdc-phone" className="block text-sm text-text-muted mb-2">
                      Phone Number <span className="text-text-muted">(optional)</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center px-3 py-3 bg-bg-primary border border-white/10 rounded-lg text-text-muted text-sm">+966</span>
                      <input id="bdc-phone" type="tel" value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputCls('phone')} placeholder="50 123 4567" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bdc-role" className="block text-sm text-text-muted mb-2">
                      Role / Title <span className="text-text-muted">(optional)</span>
                    </label>
                    <input id="bdc-role" type="text" value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className={inputCls('role')} placeholder="e.g. CIO, CTO, Head of Architecture" />
                  </div>
                  <div>
                    <label htmlFor="bdc-notes" className="block text-sm text-text-muted mb-2">
                      Notes <span className="text-text-muted">(optional)</span>
                    </label>
                    <textarea id="bdc-notes" value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className={`${inputCls('notes')} resize-none`}
                      placeholder="Anything you want us to review before the call — current stack, target state, compliance constraints, etc."
                    />
                  </div>
                </div>

                {/* ── Error ── */}
                {error && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/15 rounded-lg text-red-400 text-sm" role="alert">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" /> {error}
                  </motion.div>
                )}

                {/* ── Submit ── */}
                <button type="submit" disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50">
                  {isSubmitting ? (
                    <><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /><span>Booking...</span></>
                  ) : (
                    <><span>Confirm Booking</span><Send className="w-5 h-5" /></>
                  )}
                </button>

                <p className="text-tiny text-text-muted text-center">
                  By booking this call, you agree to be contacted by Bionic Solutions regarding your inquiry. We never share your information.
                </p>
              </form>
            </div>
          ) : (
            /* ── Confirmation ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-bg-secondary border border-white/5 rounded-2xl p-12"
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#00BFFF]/10 border-2 border-[#00BFFF]">
                  <CheckCircle className="w-12 h-12 text-[#00BFFF]" />
                </div>
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Booking received</h2>
              <p className="text-text-muted text-lg max-w-[480px] mx-auto mb-8">
                We'll send a calendar invite within 24 hours to <span className="text-text-primary font-medium">{email}</span>.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm">
                ← Back to home
              </Link>
            </motion.div>
          )}
        </motion.section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — How to Prepare
            ═══════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-text-primary mb-6">How to prepare</h2>
            <ul className="space-y-4">
              {[
                'Identify your current technology stack and integration constraints.',
                'Note any production targets or compliance requirements (SAMA, NCA, SDAIA, PDPL).',
                'Consider which stakeholders should join — architecture, security, operations.',
                "Bring an architecture diagram if you have one. Whiteboard works too.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
