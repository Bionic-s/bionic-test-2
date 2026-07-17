import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ArrowRight, Phone, Mail, Clock, Layers, BarChart3, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { trackFormSubmitted, trackFormStarted } from '../lib/analytics';
import OfficeLocations from '../components/OfficeLocations';
import { contactEmails, contactPhone, businessHours } from '../data/contactData';
import { Helmet } from 'react-helmet-async';

const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string): boolean => phone.replace(/\D/g, '').length >= 5;

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  industry?: string;
  priority?: string;
  size?: string;
  message?: string;
}

const industries = [
  'Government & Public Sector',
  'Banking & Financial Services',
  'Oil, Gas & Energy',
  'Healthcare',
  'Enterprise (Telecom, Retail, Manufacturing)',
];

const priorities = [
  'Enterprise AI & Automation',
  'Data, Analytics & Intelligence',
  'Business Applications Modernization',
  'Integration & Intelligent Operations',
  'Cybersecurity & Resilience',
  'Sovereign Infrastructure & Hybrid Cloud',
  'Technology Operations',
  'Enterprise-Wide Transformation',
];

const orgSizes = ['< 500 Employees', '500 – 2,000', '2,000 – 10,000', '10,000+'];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '+966',
    phone: '',
    role: '',
    industry: '',
    priority: '',
    size: '',
    message: '',
  });

  const countries = [
    { code: '+966', name: 'Saudi Arabia', flag: 'SA' },
    { code: '+971', name: 'UAE', flag: 'AE' },
    { code: '+965', name: 'Kuwait', flag: 'KW' },
    { code: '+973', name: 'Bahrain', flag: 'BH' },
    { code: '+974', name: 'Qatar', flag: 'QA' },
    { code: '+968', name: 'Oman', flag: 'OM' },
    { code: '+1', name: 'USA/Canada', flag: 'US' },
    { code: '+44', name: 'UK', flag: 'GB' },
    { code: '+33', name: 'France', flag: 'FR' },
    { code: '+49', name: 'Germany', flag: 'DE' },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [formStarted, setFormStarted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    if (error) setError(null);
    if (!formStarted) { setFormStarted(true); trackFormStarted(); }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, country: e.target.value, phone: '' }));
    if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field: string): boolean => {
    let msg = '';
    const required = ['name', 'email', 'company'];
    if (required.includes(field) && !formData[field as keyof typeof formData]?.trim()) msg = 'This field is required';
    else if (field === 'email' && formData.email.trim() && !validateEmail(formData.email)) msg = 'Please enter a valid email';
    else if (field === 'phone' && formData.phone.trim() && !validatePhone(formData.phone)) msg = 'Please enter a valid phone number';
    if (msg) { setFieldErrors((prev) => ({ ...prev, [field]: msg })); return false; }
    return true;
  };

  const validateForm = (): boolean => {
    const fields = ['name', 'email', 'company'];
    let valid = true;
    fields.forEach((f) => { if (!validateField(f)) valid = false; });
    setTouched(Object.fromEntries(fields.map((f) => [f, true])));
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) { setError('Please complete all required fields'); return; }
    setIsSubmitting(true); setError(null);
    try {
      const { data, error: sErr } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name, email: formData.email, company: formData.company,
          phone: `${formData.country} ${formData.phone}`,
          role: formData.role, industry: formData.industry,
          priority: formData.priority, size: formData.size, message: formData.message,
        },
      });
      if (sErr || data?.error) throw new Error(sErr?.message || data?.error?.message || 'Failed');
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackFormSubmitted(formData.industry, formData.priority, formData.size);
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message || 'An error occurred. Please try again.');
    }
  };

  const Req = () => <span className="text-red-400 ml-1">*</span>;
  const FieldErr = ({ msg, id }: { msg?: string; id: string }) => msg ? (
    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-400 flex items-center gap-1" id={id} role="alert">
      <AlertCircle className="w-3.5 h-3.5" /> {msg}
    </motion.p>
  ) : null;

  const inputCls = (name: keyof FieldErrors, extra = '') =>
    `${extra} w-full px-4 py-3.5 bg-bg-primary border rounded-lg text-text-primary focus:outline-none focus:ring-2 transition-all ${
      fieldErrors[name] && touched[name] ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-white/10 focus:border-[#00BFFF]/50 focus:ring-[#00BFFF]/15'
    }`;

  const selectCls = (name: keyof FieldErrors) =>
    `w-full px-4 py-3.5 bg-bg-primary border rounded-lg text-text-primary focus:outline-none focus:ring-2 transition-all appearance-none ${
      fieldErrors[name] && touched[name] ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-white/10 focus:border-[#00BFFF]/50 focus:ring-[#00BFFF]/15'
    }`;

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Contact | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Start a conversation with Bionic Solutions. Enterprise AI transformation, vendor assessment, or strategic briefing." />
      </Helmet>
      <div className="container mx-auto px-4 lg:px-12 max-w-3xl relative">

        {!isSubmitted ? (
          <>
            {/* ═══ HERO ═══ */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="text-tiny font-semibold tracking-wider uppercase mb-4 text-[#00BFFF]">Executive Engagement</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Talk to an<br />
                <span style={{ color: '#00BFFF' }}>Architect</span>
              </h1>
              <p className="text-text-muted text-lg max-w-[580px] mx-auto leading-relaxed">
                Enterprise AI. Business Technology Transformation. Measurable Enterprise Value. Long-Term Capability Creation.
              </p>
            </motion.section>

            {/* ═══ FORM ═══ */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12">
                <p className="text-sm text-text-muted mb-8"><span className="text-red-400">*</span> Required — all other fields help us prepare for your briefing</p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-text-muted mb-2">Full Name<Req /></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={() => handleBlur('name')}
                        aria-required="true" className={inputCls('name')} placeholder="Your full name" />
                      <FieldErr msg={touched.name ? fieldErrors.name : undefined} id="name-error" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-text-muted mb-2">Company<Req /></label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} onBlur={() => handleBlur('company')}
                        aria-required="true" className={inputCls('company')} placeholder="Your organization" />
                      <FieldErr msg={touched.company ? fieldErrors.company : undefined} id="company-error" />
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-text-muted mb-2">Email Address<Req /></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={() => handleBlur('email')}
                        aria-required="true" className={inputCls('email')} placeholder="name@company.com" />
                      <FieldErr msg={touched.email ? fieldErrors.email : undefined} id="email-error" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-text-muted mb-2">Phone Number</label>
                      <div className="flex gap-2">
                        <select id="country" name="country" value={formData.country} onChange={handleCountryChange}
                          className="w-28 flex-shrink-0 px-3 py-3.5 bg-bg-primary border border-white/10 rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/15">
                          {countries.map((c) => <option key={c.code} value={c.code} className="bg-bg-primary">{c.flag} {c.code}</option>)}
                        </select>
                        <div className="flex-1">
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={() => handleBlur('phone')}
                            aria-required="true" className={inputCls('phone')} placeholder="050 123 4567" />
                          <FieldErr msg={touched.phone ? fieldErrors.phone : undefined} id="phone-error" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Role + Organization Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm text-text-muted mb-2">Role / Title <span className="text-text-muted">(optional)</span></label>
                      <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} onBlur={() => handleBlur('role')}
                        aria-required="true" className={inputCls('role')} placeholder="e.g. CIO, CTO, Head of Procurement" />
                      <FieldErr msg={touched.role ? fieldErrors.role : undefined} id="role-error" />
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-sm text-text-muted mb-2">Organization Size <span className="text-text-muted">(optional)</span></label>
                      <select id="size" name="size" value={formData.size} onChange={handleChange} onBlur={() => handleBlur('size')}
                        aria-required="true" className={selectCls('size')}>
                        <option value="" className="bg-bg-primary text-text-muted">Select organization size...</option>
                        {orgSizes.map((s) => <option key={s} value={s} className="bg-bg-primary">{s}</option>)}
                      </select>
                      <FieldErr msg={touched.size ? fieldErrors.size : undefined} id="size-error" />
                    </div>
                  </div>

                  {/* Row 4: Industry */}
                  <div>
                    <label htmlFor="industry" className="block text-sm text-text-muted mb-2">Industry <span className="text-text-muted">(optional)</span></label>
                    <select id="industry" name="industry" value={formData.industry} onChange={handleChange} onBlur={() => handleBlur('industry')}
                      aria-required="true" className={selectCls('industry')}>
                      <option value="" className="bg-bg-primary text-text-muted">Select your industry...</option>
                      {industries.map((ind) => <option key={ind} value={ind} className="bg-bg-primary">{ind}</option>)}
                    </select>
                    <FieldErr msg={touched.industry ? fieldErrors.industry : undefined} id="industry-error" />
                  </div>

                  {/* Row 5: Meeting Focus */}
                  <div>
                    <label htmlFor="priority" className="block text-sm text-text-muted mb-2">Meeting Focus <span className="text-text-muted">(optional)</span></label>
                    <select id="priority" name="priority" value={formData.priority} onChange={handleChange} onBlur={() => handleBlur('priority')}
                      aria-required="true" className={selectCls('priority')}>
                      <option value="" className="bg-bg-primary text-text-muted">Select briefing type...</option>
                      {priorities.map((p) => <option key={p} value={p} className="bg-bg-primary">{p}</option>)}
                    </select>
                    <FieldErr msg={touched.priority ? fieldErrors.priority : undefined} id="priority-error" />
                  </div>

                  {/* Row 6: Message */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="message" className="block text-sm text-text-muted">Message <span className="text-text-muted">(optional)</span></label>
                      <span className="text-tiny text-text-muted">{formData.message.length}/500</span>
                    </div>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} maxLength={500} rows={5}
                      className={`${inputCls('message')} resize-none`}
                      placeholder="What would you like to discuss in your strategy session?" />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/15 rounded-lg text-red-400 text-sm" role="alert">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" /> {error}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-xl hover:bg-[#0099CC] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg"
                    style={{ boxShadow: '0 8px 24px #00BFFF20' }}>
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /><span>Sending...</span></>
                    ) : (
                      <><span>Send My Request</span><ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  <p className="text-tiny text-text-muted text-center">
                    By submitting, you agree to be contacted regarding your inquiry. We never share your information.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* ═══ EXECUTIVE BRIEFING CONTEXT ═══ */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }} className="mt-16 mb-12">
              <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8">
                <p className="text-lg font-semibold text-text-primary mb-3">What to expect from your Strategy Session</p>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  Every strategy session is a focused discussion — not a sales call.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Where your enterprise is on the transformation journey',
                    'Which capabilities create the most value in your sector',
                    'How our 10-layer architecture maps to your priorities',
                    'What a capability compounding strategy looks like for you',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#00BFFF' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-tiny text-text-muted mt-5 pt-5 border-t border-white/5">
                  Our team responds within 24-48 hours to schedule your briefing.
                </p>
              </div>
            </motion.div>

            {/* ═══ ALTERNATIVE CONTACT ═══ */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-1">Other Ways to Reach Us</h3>
                <p className="text-sm text-text-muted">Choose the method that works best for you</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-bg-secondary border border-white/5 rounded-xl p-6 text-center hover:border-[#00BFFF]/20 transition-all">
                  <Phone className="w-6 h-6 mx-auto mb-3" style={{ color: '#00BFFF' }} />
                  <h4 className="font-semibold text-sm text-text-primary mb-1">Call Us</h4>
                  <a href={contactPhone.href} className="text-[#00BFFF] text-sm font-medium">{contactPhone.number}</a>
                  <p className="text-tiny text-text-muted mt-1">{contactPhone.hours}</p>
                </div>
                <div className="bg-bg-secondary border border-white/5 rounded-xl p-6 text-center hover:border-[#00BFFF]/20 transition-all">
                  <Mail className="w-6 h-6 mx-auto mb-3" style={{ color: '#00BFFF' }} />
                  <h4 className="font-semibold text-sm text-text-primary mb-1">Email Us</h4>
                  <a href={`mailto:${contactEmails.general}`} className="text-[#00BFFF] text-sm font-medium">{contactEmails.general}</a>
                  <p className="text-tiny text-text-muted mt-1">We respond within 24 hours</p>
                </div>
              </div>
              <OfficeLocations variant="card" showDescription={false} />
              <div className="mt-6 bg-bg-secondary border border-white/5 rounded-xl p-6 flex items-start gap-4">
                <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#00BFFF' }} />
                <div>
                  <h4 className="font-semibold text-sm text-text-primary mb-1">Office Hours</h4>
                  <p className="text-tiny text-text-muted">{businessHours.workingDays} · {businessHours.hours} · {businessHours.timezone}</p>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          /* ═══ SUCCESS SCREEN ═══ */
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: '#00BFFF15', border: '2px solid #00BFFF' }}>
                <CheckCircle className="w-12 h-12" style={{ color: '#00BFFF' }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Meeting Request Has Been Received</h2>
              <p className="text-text-muted text-lg mb-10 max-w-[520px] mx-auto leading-relaxed">
                An enterprise transformation specialist will contact you within 24-48 hours to schedule your strategy session.
              </p>

              <p className="text-sm text-text-muted mb-6">While you wait — explore our transformation approach:</p>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {[
                  { label: 'Architecture', desc: '10 layers', path: '/architecture', icon: Layers },
                  { label: 'Enterprise Value System', desc: 'How value compounds', path: '/value', icon: BarChart3 },
                  { label: 'Blueprints', desc: '12 architectures', path: '/blueprints', icon: BookOpen },
                ].map((link) => (
                  <Link key={link.label} to={link.path}
                    className="inline-flex items-center gap-3 px-5 py-3 bg-bg-secondary border border-white/5 rounded-xl text-sm font-medium text-text-primary hover:border-[#00BFFF]/25 transition-all hover:-translate-y-0.5">
                    <link.icon className="w-4 h-4" style={{ color: '#00BFFF' }} />
                    <span>{link.label} <span className="text-tiny text-text-muted ml-1">{link.desc}</span></span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                  </Link>
                ))}
              </div>

              <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm">
                ← Return to homepage
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
