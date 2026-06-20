import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { trackFormSubmitted } from '../../lib/analytics';

export const ContactAr = () => {
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
      if (formData.message && formData.message.length > 1000) {
        throw new Error('يجب أن تكون الرسالة أقل من 1000 حرف');
      }
      
      if (!consent) {
        throw new Error('يرجى الموافقة على سياسة الخصوصية لتقديم طلبك.');
      }

      if (formData.phone) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
          throw new Error('يرجى إدخال رقم هاتف صحيح');
        }
      }

      const { data, error: submitError } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          message: formData.message || 'لم يتم تقديم رسالة',
        },
      });

      if (submitError) {
        throw new Error(submitError.message || 'فشل في إرسال النموذج');
      }

      if (data?.error) {
        throw new Error(data.error.message || 'فشل في إرسال النموذج');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      
      trackFormSubmitted('', '', '');

      try {
        await fetch('/api/send-guide', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email }),
        });
      } catch (e) {
        console.error('Guide send failed:', e);
      }
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'حدث خطأ. يرجى المحاولة مرة أخرى.');
      console.error('Contact form submission error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary relative scroll-mt-20" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-4"
            >
              تحدث مع مهندس الحلول
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-h4 md:text-h3 lg:text-h3 text-text-muted"
            >
              يستجيب فريقنا خلال 24 ساعة لمناقشة أولويات التحول لديكم.
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
              <h3 className="text-h4 font-semibold mb-6 text-center">كيف نعمل معًا</h3>
              <p className="text-body text-text-muted text-center mb-8">كل تحول يبدأ بمحادثة.</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: '1', title: 'جلسة استراتيجية', dur: '45 دقيقة', desc: 'نقاش مركز حول أولويات التحول لديكم. ليس عرضًا تجاريًا.' },
                  { step: '2', title: 'الاكتشاف والتقييم', dur: 'أسبوع – أسبوعين', desc: 'تحليل معمق للمعمارية والقدرات والأهداف المؤسسية.' },
                  { step: '3', title: 'المعمارية والمخطط', dur: 'أسبوعين – 4 أسابيع', desc: 'معمارية الحالة المستهدفة، خارطة الطريق، الحوكمة، وحالة الأعمال.' },
                  { step: '4', title: 'التنفيذ', dur: '8–16 أسبوعًا', desc: 'نشر المنصات، التكامل، وهندسة التبني.' },
                  { step: '5', title: 'العمليات المدارة', dur: 'مستمرة', desc: 'تحسين مستمر، مراقبة، وتطور طويل الأمد.' },
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

            {/* Book a Strategy Session */}
            <div className="mb-12 pb-12 border-b border-white/5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-bg-primary/50 rounded-xl border border-white/5">
                <div className="text-right">
                  <h4 className="text-lg font-semibold text-text-primary mb-1">تفضل الحجز الذاتي؟</h4>
                  <p className="text-sm text-text-muted">اختر التاريخ والوقت المناسبين لك — بدون مراسلات متبادلة.</p>
                </div>
                <Link
                  to="/ar/book-discovery-call?source=contact&intent=strategy-session"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all shadow-md whitespace-nowrap"
                >
                  احجز جلسة استراتيجية
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-h3 font-semibold mb-2 text-success">تم استلام طلب الاجتماع الخاص بكم</h3>
                <p className="text-body text-text-muted mb-4">
                  سيقوم فريقنا بمراجعة طلبكم والرد خلال 24 ساعة.
                </p>
                <p className="text-small text-text-muted mb-6">
                  أثناء الانتظار، استكشف كيف تقدم بيونك التحول المؤسسي.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/ar/architecture"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>استعرض المعمارية</span>
                  </Link>
                  <Link
                    to="/ar/value"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>نظام القيمة المؤسسية</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-error/10 border border-error/20 rounded-medium p-4 flex items-start space-x-3 space-x-reverse">
                    <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-body text-error">{error}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-small text-text-muted mb-2 text-right">
                      الاسم *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all text-right"
                      placeholder="محمد أحمد"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-small text-text-muted mb-2 text-right">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      placeholder="mohammed@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-small text-text-muted mb-2 text-right">
                    الشركة (اختياري)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all text-right"
                    placeholder="اسم شركتكم"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-small text-text-muted mb-2 text-right">
                    الهاتف (اختياري)
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
                    dir="ltr"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className="block text-small text-text-muted">
                      الرسالة (اختياري)
                    </label>
                    <span className="text-tiny text-text-muted" dir="ltr">
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
                    className="w-full px-5 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none text-right"
                    placeholder="أخبرنا عن احتياجاتكم..."
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start space-x-3 space-x-reverse">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary focus:ring-accent-primary/30 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-tiny text-text-muted cursor-pointer text-right">
                    أوافق على <Link to="/ar/privacy" className="text-accent-primary hover:underline">سياسة الخصوصية</Link> وأوافق على قيام شركة بيونك سوليوشنز بمعالجة معلوماتي للرد على استفساري.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 hover:shadow-button transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 space-x-reverse"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                      <span>جارٍ الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>أرسل طلبي</span>
                    </>
                  )}
                </button>

                <p className="text-tiny text-text-muted mt-4 text-right">
                  * حقول إلزامية. سيقوم فريقنا بالرد على طلب الاجتماع خلال 24 ساعة.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactAr;
