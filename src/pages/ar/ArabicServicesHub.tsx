import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cog, Shield, CheckCircle } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#FFFFFF';
const HERO_BG = '/test-site-2/images/professional-services-ai-hero.jpg';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4 text-text-muted">{children}</p>
);

const deliveryModels = [
  {
    title: 'الاستشارات والتخطيط الاستراتيجي',
    accent: '#0D9488',
    desc: 'الاستراتيجية، المعمارية، الامتثال، نموذج التشغيل، وحالة الأعمال — من تقييم الجاهزية إلى اعتماد المجلس.',
    highlights: ['تقييم جاهزية الذكاء الاصطناعي', 'تطوير حالة الأعمال', 'تصميم نموذج التشغيل', 'استشارات الامتثال والحوكمة', 'اختيار المنصات والتقنيات'],
    path: '/ar/services/advisory',
  },
  {
    title: 'التنفيذ والتسليم',
    accent: '#059669',
    desc: 'التطبيق والتكامل والتسليم إلى الإنتاج — مع التبني والحوكمة وتتبع القيمة.',
    highlights: ['تطبيق الذكاء الاصطناعي والأتمتة', 'تسليم المنصات والتطبيقات', 'هندسة التكامل', 'تنفيذ الحلول الأمنية', 'تحقيق القيمة'],
    path: '/ar/services/implementation',
  },
  {
    title: 'العمليات المدارة',
    accent: '#D97706',
    desc: 'تمكين التحول المستمر — عمليات منصات ٢٤×٧، SRE، AIOps، FinOps، وهندسة المنصات.',
    highlights: ['AIOps والمراقبة', 'SRE وهندسة المنصات', 'حوكمة FinOps', 'مركز عمليات أمنية كخدمة', 'تحسين مستمر وممنهج'],
    path: '/ar/services/operations',
  },
];

export default function ArabicServicesHub() {

  useEffect(() => { trackServicePageView('Services Hub'); }, []);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-24 text-center px-4"
        >
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            <p className="text-tiny font-semibold tracking-wider uppercase mb-4 text-text-muted">كيف نحقق ذلك</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              ثلاثة نماذج تنفيذ متكاملة.<br />
              <span className="text-text-muted">شريك واحد مسؤول.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-[640px] mx-auto leading-relaxed">
              كل قدرة نقدمها — من الذكاء الاصطناعي إلى الأمن السيبراني — تُنفَّذ عبر واحد أو أكثر من هذه النماذج.
              الاستشارات لصياغة الاستراتيجية. التنفيذ للتسليم. العمليات لتحقيق قيمة مستدامة.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        {/* بطاقات نماذج التنفيذ */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryModels.map((model, i) => (
              <Link
                key={i}
                to={model.path}
                className="group bg-bg-secondary border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 text-right"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${model.accent}15`, color: model.accent }}>
                  {i === 0 ? <Brain className="w-6 h-6" /> : i === 1 ? <Cog className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{model.title}</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{model.desc}</p>
                <ul className="space-y-2 mb-6">
                  {model.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-tiny text-text-muted flex-row-reverse">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: model.accent }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: model.accent }}>
                  اعرف المزيد <ArrowRight className="w-4 h-4 rotate-180" />
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* التنقل المتقاطع */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6">إلى أين تريد التوجه الآن؟</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'القدرات', path: '/ar/capabilities/ai', desc: '7 مجالات متكاملة' },
                { label: 'القطاعات', path: '/ar/industries/government', desc: '5 قطاعات' },
                { label: 'المخططات', path: '/ar/blueprints', desc: '12 معمارية' },
                { label: 'المعمارية', path: '/ar/architecture', desc: '10 طبقات' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-secondary border border-white/5 rounded-full text-sm font-medium text-text-primary hover:border-white/15 transition-all hover:-translate-y-0.5">
                  {link.label}
                  <span className="text-tiny text-text-muted">{link.desc}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted rotate-180" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* الدعوة إلى التواصل */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              لست متأكدًا أي نموذج يناسبك؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              معظم المهام تجمع بين نموذجين أو ثلاثة. دعونا نناقش ما يتطلبه تحولكم.
            </p>
            <Link
              to="/ar/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:bg-white/90"
            >
              ابدأ المحادثة
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
);
}
