import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackFormSubmitted } from '../lib/analytics';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Call Supabase edge function to submit contact form
      // Validate message length (max 1000 characters)
      if (formData.message && formData.message.length > 1000) {
        throw new Error('Message must be less than 1000 characters');
      }
      
      // Validate consent
      if (!consent) {
        throw new Error('Please agree to the Privacy Policy to submit your request.');
      }

      // Validate phone if provided
      if (formData.phone) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
          throw new Error('Please enter a valid phone number');
        }
      }

      const { data, error: submitError } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          message: formData.message || 'No message provided',
        },
      });

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit form');
      }

      // Check if the response contains an error
      if (data?.error) {
        throw new Error(data.error.message || 'Failed to submit form');
      }

      // Success
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      
      // Track conversion event (GTM)
      trackFormSubmitted('', '', '');

      // Send Enterprise Framework Guide via email
      try {
        await fetch('/api/send-guide', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email }),
        });
      } catch (e) {
        // Non-blocking — guide email is best-effort
        console.error('Guide send failed:', e);
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Contact form submission error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary relative scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-4"
            >
              Talk to an Architect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-h4 md:text-h3 lg:text-h3 text-text-muted"
            >
              Our team responds within 24 hours to discuss your transformation priorities.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-bg-secondary rounded-xlarge p-10 md:p-16 border border-white/5"
          >
            {/* How We Engage */}
            <div className="mb-12 pb-12 border-b border-white/5">
              <h3 className="text-h4 font-semibold mb-6 text-center">How We Engage</h3>
              <p className="text-body text-text-muted text-center mb-8">Every transformation begins with a conversation.</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: '1', title: 'Strategy Session', dur: '45 minutes', desc: 'A focused discussion about your transformation priorities. Not a sales presentation.' },
                  { step: '2', title: 'Discovery & Assessment', dur: '1–2 weeks', desc: 'Deep-dive into architecture, capabilities, and business objectives.' },
                  { step: '3', title: 'Architecture & Blueprint', dur: '2–4 weeks', desc: 'Target-state architecture, roadmap, governance, and business case.' },
                  { step: '4', title: 'Implementation', dur: '8–16 weeks', desc: 'Platform deployment, integration, and adoption engineering.' },
                  { step: '5', title: 'Managed Operations', dur: 'Ongoing', desc: 'Continuous optimization, monitoring, and long-term evolution.' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-tiny font-bold" style={{ backgroundColor: '#2563EB15', color: '#2563EB' }}>{item.step}</div>
                    <h4 className="text-small font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-tiny text-text-muted mb-1">{item.dur}</p>
                    <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a Strategy Session — self-service calendar */}
            <div className="mb-12 pb-12 border-b border-white/5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-bg-primary/50 rounded-xl border border-white/5">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">Prefer a self-service booking?</h4>
                  <p className="text-sm text-text-muted">Pick a date and time that works for you — no back-and-forth.</p>
                </div>
                <Link
                  to="/book-discovery-call?source=contact&intent=strategy-session"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all shadow-md whitespace-nowrap"
                >
                  Book a Strategy Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-h3 font-semibold mb-2 text-success">Your Meeting Request Has Been Received</h3>
                <p className="text-body text-text-muted mb-4">
                  Our team will review your request and respond within 24 hours.
                </p>
                <p className="text-small text-text-muted mb-6">
                  While you wait, explore how Bionic delivers enterprise transformation.
                </p>
                
                {/* Post-Submission Exploration */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Architecture</span>
                  </Link>
                  <Link
                    to="/value"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Enterprise Value System</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-error/10 border border-error/20 rounded-medium p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-body text-error">{error}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-small text-text-muted mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-small text-text-muted mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-small text-text-muted mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-small text-text-muted mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    placeholder="+966 50 XXX XXXX"
                    maxLength={20}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className="block text-small text-text-muted">
                      Message (Optional)
                    </label>
                    <span className="text-tiny text-text-muted">
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    maxLength={1000}
                    className="w-full px-5 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary focus:ring-accent-primary/30 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-tiny text-text-muted cursor-pointer">
                    I agree to the <Link to="/privacy-policy" className="text-accent-primary hover:underline">Privacy Policy</Link> and consent to Bionic Solutions processing my information to respond to my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 hover:shadow-button transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send My Request</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-tiny text-text-muted mt-4">
                  * Required fields. Our team will respond to your meeting request within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
