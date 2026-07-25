import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, BookOpen, FileText, Shield, Send } from 'lucide-react';

const ArabicThankYouPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const source = searchParams.get('source') || 'contact';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50" 
        style={{ backgroundImage: 'url("/images/grain.png")', backgroundRepeat: 'repeat' }} 
      />

      {/* Scroll progress */}
      <div className="fixed top-0 right-0 w-full h-[3px] z-50 bg-white/5">
        <motion.div
          className="h-full bg-accent-primary"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-36 font-arabic">
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 160, 
              damping: 12,
              delay: 0.2 
            }}
            className="flex justify-center mb-10"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-accent-primary" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-primary/30"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, repeatDelay: 1 }}
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-h1 md:text-display font-bold mb-4">
              {name ? `شكراً لك، ${name}` : 'شكراً لك'}
            </h1>
            <p className="text-h4 md:text-h3 font-light text-text-muted mb-3">
              {source === 'discovery'
                ? 'تم حجز جلستك الاستشارية'
                : 'تم استلام رسالتك بنجاح'}
            </p>
            <p className="text-body text-text-muted max-w-xl mx-auto">
              سيراجع فريقنا طلبك ويتواصل معك خلال ٢٤ ساعة.
              نتطلع إلى استكشاف كيف يمكن لبيونك سوليوشنز تسريع تحول مؤسستك.
            </p>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Send, num: '٠١', title: 'نراجع', desc: 'يراجع فريقنا طلبك ويطابقه مع الخبير الأنسب.' },
              { icon: BookOpen, num: '٠٢', title: 'نستعد', desc: 'نبحث في قطاعك ونحضّر ملخصاً مخصصاً لمناقشتك.' },
              { icon: Shield, num: '٠٣', title: 'نتواصل', desc: 'جلسة مركزة ومختصرة — ليست مكالمة مبيعات. قيمة من الدقيقة الأولى.' },
            ].map((step) => (
              <div
                key={step.title}
                className="relative group p-6 rounded-xl bg-bg-secondary border border-white/[0.06] hover:border-accent-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-body font-semibold mb-2">
                  <span className="text-accent-primary text-small ml-2">{step.num}</span>
                  {step.title}
                </h3>
                <p className="text-small text-text-muted">{step.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-body text-text-muted mb-6">
              أثناء انتظارك — اكتشف كيف نقدم القيمة للمؤسسات
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ar/architecture"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-secondary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all group"
              >
                <FileText className="w-4 h-4" />
                <span>الهندسة المعمارية</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all rtl:rotate-180" />
              </Link>
              <Link
                to="/ar/value"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-secondary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all group"
              >
                <FileText className="w-4 h-4" />
                <span>نظام القيمة المؤسسية</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all rtl:rotate-180" />
              </Link>
              <Link
                to="/ar/capabilities/ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-accent-primary/30 rounded-full text-accent-primary hover:bg-accent-primary/10 transition-all"
              >
                <span>قدرات الذكاء الاصطناعي</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>

          {/* Back home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 text-center"
          >
            <Link
              to="/ar"
              className="text-small text-text-muted hover:text-accent-primary transition-colors"
            >
              العودة للرئيسية ←
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ArabicThankYouPage;
