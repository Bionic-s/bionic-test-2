import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cpu, BarChart3, ArrowRight, XCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Capability {
  icon: React.ReactNode;
  industry: string;
  challenge: string;
  outcome: string;
  serviceLine: string;
}

const capabilities: Capability[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    industry: 'القطاع الحكومي',
    challenge: 'تشير أبحاث القطاع إلى أن المؤسسات تقضي عادةً 40+ ساعة لكل تقديم عطاء يدوي — منصات المشتريات الرقمية تخفّض هذا بنسبة 60–80%.',
    outcome: 'مطابقة عطاءات بالذكاء الاصطناعي وامتثال آلي — سير عمل تقديم متسارع ومتحقق من الامتثال.',
    serviceLine: 'الذكاء الاصطناعي المؤسسي والأتمتة',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    industry: 'الخدمات المالية والمصرفية',
    challenge: 'التقارير التنظيمية قد تستهلك حتى 60% من قدرة فريق الامتثال — المؤسسات الرائدة تخفّض هذا بشكل ملموس عبر الأتمتة الذكية.',
    outcome: 'أتمتة ذكية + لوحات معلومات آنية — تحقق عادةً انخفاضاً بنسبة 40–60% في أعباء الامتثال اليدوية.',
    serviceLine: 'البيانات والتحليلات والذكاء',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    industry: 'النفط والغاز والقطاع الصناعي',
    challenge: 'تشير أبحاث القطاع إلى أن التوقف غير المخطط له يكلّف 4+ مليون ريال لكل خط إنتاج سنوياً — برامج الصيانة التنبؤية تخفّض الانقطاعات بنسبة 30–50%.',
    outcome: 'صيانة تنبؤية + تحليلات إنترنت الأشياء الصناعي — تحقق عادةً انخفاضاً بنسبة 30–50% في التوقف غير المخطط له.',
    serviceLine: 'البنية التحتية السيادية والسحابة الهجينة',
  },
];

export const CapabilityShowAr = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0, 191, 255, 0.06), transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-12 relative">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6"
          >
            <span className="text-small text-accent-primary font-semibold tracking-wider uppercase">
              سجلنا الحافل
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-[48px] font-bold mb-6 tracking-tight"
          >
            نفهم{' '}
            <span className="text-accent-primary">المؤسسة السعودية</span> بعمق.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 text-text-muted max-w-3xl mx-auto"
          >
            من مشتريات اعتماد إلى الأمن السيبراني للهيئة الوطنية للأمن السيبراني — نتحدث لغة التحول المؤسسي السعودي.
          </motion.p>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.industry}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-2xl border border-white/[0.08] bg-bg-primary/50 backdrop-blur-md p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-accent-primary/40 hover:-translate-y-2"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: '0 0 32px rgba(0, 191, 255, 0.15)' }}
              />

              {/* Icon + Industry */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary/20 transition-colors duration-300">
                  {cap.icon}
                </div>
                <div>
                  <span className="text-tiny text-accent-primary/70 uppercase tracking-wider">
                    {cap.serviceLine}
                  </span>
                  <h4 className="text-small font-semibold text-text-primary">
                    {cap.industry}
                  </h4>
                </div>
              </div>

              {/* Problem → Solution */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-error mt-1 shrink-0" />
                  <p className="text-tiny text-text-muted">{cap.challenge}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-1 shrink-0" />
                  <p className="text-tiny text-text-primary font-medium">{cap.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to blueprints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/ar/blueprints"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors group/link"
          >
            <span className="text-body font-medium">استعرض المخططات المرجعية</span>
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityShowAr;
