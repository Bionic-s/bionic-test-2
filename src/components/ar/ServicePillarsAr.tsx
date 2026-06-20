import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cog, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLine {
  name: string;
  desc: string;
}

interface Pillar {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  lines: ServiceLine[];
}

const pillars: Pillar[] = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'الذكاء',
    tagline: 'ذكاء اصطناعي · تحليلات · بيانات',
    lines: [
      { name: 'الذكاء الاصطناعي المؤسسي والأتمتة', desc: 'وكلاء الذكاء الاصطناعي والمساعدون الأذكياء، أتمتة العمليات الذكية' },
      { name: 'البيانات والتحليلات والذكاء', desc: 'منصات بيانات جاهزة للذكاء الاصطناعي، لوحات معلومات تنفيذية، إدارة البيانات الرئيسية، تحليلات متقدمة' },
    ],
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: 'الأتمتة',
    tagline: 'تطبيقات · تكامل · سير العمل',
    lines: [
      { name: 'تطبيقات الأعمال وتجربة العملاء', desc: 'إدارة علاقات العملاء، مركز الاتصال، أتمتة التسويق، التجارة، تجربة الموظف' },
      { name: 'التكامل والعمليات الذكية', desc: 'معمارية API، المعمارية المدفوعة بالأحداث، تنسيق سير العمل' },
    ],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'الثقة',
    tagline: 'أمن سيبراني · سيادة · مرونة',
    lines: [
      { name: 'الأمن السيبراني والمرونة السيبرانية', desc: 'مركز العمليات الأمنية، SIEM، Zero Trust، الهوية، المرونة ضد برامج الفدية' },
      { name: 'البنية التحتية السيادية والسحابة الهجينة', desc: 'تحديث مراكز البيانات، تحديث التخزين، بنية الذكاء التحتية، السحابة الهجينة' },
    ],
  },
];

export const ServicePillarsAr = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden" ref={ref} dir="rtl">
      {/* Section title */}
      <div className="container mx-auto px-4 lg:px-12" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6"
          >
            <span className="text-small text-accent-primary font-semibold tracking-wider uppercase">
              حلولنا
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-[48px] font-bold mb-6 tracking-tight"
          >
            7 قدرات مؤسسية عبر{' '}
            <span className="gradient-text">الذكاء والأتمتة والثقة</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 text-text-muted max-w-2xl mx-auto"
          >
            7 خطوط أعمال. 3 قيم أساسية. تحول مؤسسي واحد متكامل للذكاء الاصطناعي.
          </motion.p>
        </div>

        {/* 3 Pillar columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-2xl border border-white/[0.08] bg-bg-secondary/30 p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-accent-primary/30"
            >
              {/* Pillar header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/[0.06] flex-row-reverse">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-text-primary transition-all duration-300">
                  {pillar.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-text-primary">{pillar.title}</h3>
                  <p className="text-tiny text-accent-primary/60">{pillar.tagline}</p>
                </div>
              </div>

              {/* Service lines */}
              <div className="flex-1 space-y-4 text-right">
                {pillar.lines.map((line) => (
                  <div key={line.name}>
                    <h4 className="text-small font-semibold text-text-primary mb-1">
                      {line.name}
                    </h4>
                    <p className="text-tiny text-text-muted leading-relaxed">
                      {line.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal: Managed Services delivery layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl border border-accent-primary/20 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-row-reverse">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="text-right">
                <h4 className="text-small font-bold text-text-primary">
                  خدمات التقنية والعمليات المدارة
                </h4>
                <p className="text-tiny text-text-muted">
                  3 مستويات. 24×7. متعدد المورّدين. عبر جميع خطوط الأعمال الستة.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-tiny font-semibold text-accent-primary px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5">
              خط الأعمال السابع
            </span>
          </div>
        </motion.div>

        {/* CTA: Explore all capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <Link
            to="/ar/capabilities/ai"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors group/link"
          >
            <ArrowRight className="w-5 h-5 rotate-180 group-hover/link:-translate-x-1 transition-transform" />
            <span className="text-body font-medium">استكشف جميع القدرات</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePillarsAr;
