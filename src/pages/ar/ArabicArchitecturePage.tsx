import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Layers, Target, TrendingUp, Building2, Cpu, Wrench,
  FileText, Monitor, Database, Shield, BarChart3, Gauge, Zap
} from 'lucide-react';
import { trackArchitectureView } from '../../lib/analytics';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const HERO_BG = '/test-site-2/images/enterprise-integration-hero.jpg';

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 my-12">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
  </div>
);

const layers = [
  {
    num: 1,
    icon: Target,
    title: 'نتائج الأعمال',
    subtitle: 'ما الذي يتغير حين ينجح التحول؟',
    desc: 'كل تحول يبدأ بنتيجة أعمال — نمو الإيرادات، تحسين التكاليف، خفض المخاطر، تحول التجربة، أو القدرات الوطنية.',
    items: ['نمو الإيرادات', 'تحسين التكاليف', 'خفض المخاطر', 'تحول التجربة', 'القدرات الوطنية'],
    link: { label: 'استكشف منظومة القيمة المؤسسية', to: '/ar/value' },
  },
  {
    num: 2,
    icon: TrendingUp,
    title: 'منظومة القيمة المؤسسية',
    subtitle: 'كيف تتراكم القيمة عبر أربعة آفاق؟',
    desc: 'تتراكم القيمة عبر أربعة آفاق — تحسين التكاليف (٠–١٢ شهرًا)، خفض المخاطر (٦–١٨ شهرًا)، نمو الإيرادات (١٢–٣٦ شهرًا)، والريادة السوقية (٢٤–٦٠ شهرًا).',
    items: ['تحسين التكاليف: ٠–١٢ شهرًا', 'خفض المخاطر: ٦–١٨ شهرًا', 'نمو الإيرادات: ١٢–٣٦ شهرًا', 'الريادة السوقية: ٢٤–٦٠ شهرًا'],
    link: { label: 'استكشف منظومة القيمة المؤسسية', to: '/ar/value' },
  },
  {
    num: 3,
    icon: Building2,
    title: 'القطاعات',
    subtitle: 'أين نُطبّق هذه المعمارية؟',
    desc: 'خمسة قطاعات محددة تحل فيها معماريتنا تحديات صناعية حقيقية — القطاع الحكومي، البنوك، النفط والغاز، الرعاية الصحية، والمؤسسات عبر القطاعات.',
    items: ['القطاع الحكومي', 'القطاع المصرفي والخدمات المالية', 'النفط والغاز والطاقة', 'الرعاية الصحية', 'المؤسسات عبر القطاعات'],
    link: { label: 'استكشف جميع القطاعات', to: '/ar/industries/government' },
  },
  {
    num: 4,
    icon: Cpu,
    title: 'القدرات',
    subtitle: 'ماذا نفعل فعليًا؟',
    desc: 'سبع قدرات متكاملة تغطي الذكاء والأتمتة والثقة — قابلة للتكوين عبر القطاعات، وليست منتجات منعزلة.',
    items: ['الذكاء الاصطناعي المؤسسي والأتمتة', 'البيانات والتحليلات والذكاء', 'تطبيقات الأعمال وتجربة العميل', 'التكامل والعمليات الذكية', 'الأمن السيبراني والمرونة السيبرانية', 'البنية التحتية السيادية', 'عمليات التقنية'],
    link: { label: 'استكشف جميع القدرات', to: '/ar/capabilities/ai' },
  },
  {
    num: 5,
    icon: Wrench,
    title: 'الخدمات',
    subtitle: 'كيف نُنفّذ؟',
    desc: 'ثلاثة نماذج تنفيذ — الاستشارات، والتنفيذ، والعمليات المُدارة — تتكامل حسب الحاجة عبر كل قطاع وقدرة.',
    items: ['الاستشارات والتخطيط: الاستراتيجية، المعمارية، خرائط الطريق', 'التنفيذ والتسليم: النشر، التكامل، التبني', 'العمليات المُدارة: تشغيل على مدار الساعة، هندسة موثوقية المواقع، AIOps، تحسين مستمر'],
    link: { label: 'استكشف جميع الخدمات', to: '/ar/services' },
  },
  {
    num: 6,
    icon: FileText,
    title: 'مخططات التحول',
    subtitle: 'هل يمكنك إثبات نجاح هذا؟',
    desc: 'اثنتا عشرة معمارية مرجعية تربط القطاعات ← القدرات ← الخدمات ← الشركاء ← المنتجات ← النتائج.',
    items: ['١٢ مخططًا عبر ٥ قطاعات', 'وصول مزدوج: من القطاعات ومن القدرات', 'تخطيط كامل: قطاع، قدرة، خدمات، شركاء، منتجات'],
    link: { label: 'استكشف جميع المخططات', to: '/ar/blueprints' },
  },
  {
    num: 7,
    icon: Monitor,
    title: 'التطبيقات والمنصات',
    subtitle: 'ما التقنية التي تُشغّل التحول؟',
    desc: 'نصمم وننشر وندير المنصات المؤسسية — Salesforce لإدارة علاقات العملاء، وwatsonx وVertex AI للذكاء، وMuleSoft للتكامل، وInformatica لحوكمة البيانات.',
    items: ['CRM وتجربة العميل: Salesforce (المبيعات، الخدمة، التسويق، Health Cloud)', 'الذكاء الاصطناعي وتعلم الآلة: watsonx، Vertex AI، Einstein، Agentforce', 'التكامل: MuleSoft Anypoint، معمارية بالأحداث', 'البيانات والتحليلات: Informatica MDM، Tableau، BigQuery', 'الأتمتة: Ansible، RPA، سير العمل الذكي'],
    link: { label: 'استكشف منظومتنا', to: '/ar/about' },
  },
  {
    num: 8,
    icon: Database,
    title: 'البيانات والذكاء',
    subtitle: 'من أين يأتي الذكاء؟',
    desc: 'منصات بيانات موحدة ومحكومة وجاهزة للذكاء الاصطناعي — معماريات نسيج البيانات وبحيرة البيانات، وإدارة بيانات رئيسية، وحوكمة متوافقة مع نظام حماية البيانات الشخصية، ومحركات تحليلية تغذي كل طبقة أعلاها.',
    items: ['منصات البيانات: بحيرة البيانات، النسيج، التدفق', 'MDM: رؤية شاملة للعميل، المواطن، الأصول، المريض', 'حوكمة البيانات: الجودة، النسب، الكتالوج', 'التحليلات والذكاء: لوحات معلومات، خدمة ذاتية، مضمنة', 'بيانات جاهزة للذكاء الاصطناعي: مستودعات خصائص، قواعد بيانات متجهة، مسارات بيانات'],
    link: { label: 'استكشف قدرة البيانات والتحليلات', to: '/ar/capabilities/data' },
  },
  {
    num: 9,
    icon: Shield,
    title: 'البنية التحتية والأمن',
    subtitle: 'ما أساس الثقة؟',
    desc: 'بنية تحتية سيادية مصممة للثقة — حوسبة وتخزين من Dell، وتسريع ذكاء من Intel، ومنصات سحابية من Platform9 وRed Hat، وتعافٍ سيبراني، وعمليات أمنية متوافقة مع الهيئة الوطنية للأمن السيبراني.',
    items: ['الحوسبة: Dell PowerEdge، Intel Xeon، Gaudi AI', 'التخزين: PowerStore، PowerMax، FlashSystem', 'السحابة: Platform9 K8s، Red Hat OpenShift', 'التعافي السيبراني: خزنة معزولة، ثبات البيانات', 'الأمن: QRadar SOC، Zero Trust، متوافق مع الهيئة الوطنية للأمن السيبراني'],
    link: { label: 'استكشف قدرة البنية التحتية', to: '/ar/capabilities/infra' },
  },
  {
    num: 10,
    icon: Gauge,
    title: 'العمليات والتحسين المستمر',
    subtitle: 'كيف نستمر ونراكم القيمة؟',
    desc: 'العمليات تحمي القيمة وتراكمها ربعًا بعد ربع — AIOps، وهندسة موثوقية المواقع، وFinOps، وSOC كخدمة، ومراجعات تحسين مستمر ربع سنوية.',
    items: ['AIOps والمراقبة: Instana + Turbonomic', 'هندسة موثوقية المواقع: ميزانيات الأخطاء، SLOs، تحليل postmortem', 'FinOps: رؤية التكاليف، محاسبة تناسبية، تحسين', 'SOC كخدمة: أمن على مدار الساعة، صيد التهديدات', 'التحسين المستمر: مراجعات ربع سنوية، تحسين المقاس'],
    link: { label: 'استكشف عمليات التقنية', to: '/ar/capabilities/ops' },
  },
];

export default function ArabicArchitecturePage() {
  useEffect(() => { trackArchitectureView(); }, []);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">

      {/* ═══ 1. HERO — مع صورة خلفية ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>

        <motion.div
          ref={heroRef} {...fadeIn}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative z-10 pt-40 pb-28 px-4"
        >
          <div className="container mx-auto max-w-4xl">
            <SectionLabel>معمارية التحول</SectionLabel>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              معمارية التحول المؤسسي<br />
              <span style={{ color: ACCENT }}>من بيونك.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              عشر طبقات مترابطة. نهج متكامل واحد. من نتائج الأعمال إلى التحسين المستمر —
              هكذا نصمم ونُنفّذ ونستدام التحول المؤسسي للمملكة العربية السعودية.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ رسم تخطيطي لتكديس الطبقات ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 -mt-8"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6" style={{ color: ACCENT }} />
              <h2 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Tajawal', sans-serif" }}>كيف تتدفق</h2>
            </div>
            <div className="text-lg text-text-muted leading-relaxed space-y-3" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <p><strong className="text-text-primary">نتائج الأعمال</strong> تُحدد <em>لماذا</em> نتحول.</p>
              <p><strong className="text-text-primary">منظومة القيمة المؤسسية</strong> تُحدد <em>كيف تتراكم القيمة</em> عبر الزمن.</p>
              <p><strong className="text-text-primary">القطاعات</strong> تُحدد <em>أين</em> — السياق التنظيمي والتنافسي.</p>
              <p><strong className="text-text-primary">القدرات</strong> تُحدد <em>ماذا</em> نفعل — سبعة مجالات متكاملة.</p>
              <p><strong className="text-text-primary">الخدمات</strong> تُحدد <em>كيف</em> نُنفّذ — ثلاثة نماذج متداخلة.</p>
              <p><strong className="text-text-primary">مخططات التحول</strong> تُثبت <em>أنها تعمل</em> — ١٢ معمارية مرجعية.</p>
              <p><strong className="text-text-primary">التطبيقات والمنصات</strong> تُقدّم <em>التقنية</em>.</p>
              <p><strong className="text-text-primary">البيانات والذكاء</strong> يُغذّي <em>كل ما فوقه</em>.</p>
              <p><strong className="text-text-primary">البنية التحتية والأمن</strong> يُوفّران <em>أساس الثقة</em>.</p>
              <p><strong className="text-text-primary">العمليات والتحسين</strong> <em>تستدام وتراكم</em> القيمة.</p>
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══ 10 طبقات — معززة بالأيقونات والتكديس البصري ═══ */}
        {layers.map((layer, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
          const isEven = i % 2 === 0;
          return (
            <motion.section
              key={layer.num}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.03 * i }}
              className="mb-10"
            >
              {/* خط ربط من الطبقة السابقة */}
              {i > 0 && (
                <div className="flex justify-center mb-2">
                  <div className="w-px h-8 bg-gradient-to-b from-[#D9770615] to-transparent" />
                </div>
              )}

              {/* بطاقة الطبقة */}
              <div
                className="rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:border-[#D9770620]"
                style={{
                  background: isEven ? 'var(--bg-secondary)' : 'linear-gradient(135deg, #D9770605, var(--bg-secondary))',
                  borderColor: isEven ? 'rgba(255,255,255,0.04)' : '#D9770610',
                }}
              >
                {/* رأس الطبقة مع الأيقونة */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#D9770615', color: ACCENT }}
                  >
                    <layer.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {layer.num}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Tajawal', sans-serif" }}>{layer.title}</h2>
                    </div>
                    <p className="text-sm text-text-muted mt-1">{layer.subtitle}</p>
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed mb-5 mr-[64px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>{layer.desc}</p>

                {/* شبكة العناصر */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-5 mr-[64px]">
                  {layer.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* رابط */}
                <div className="mr-[64px]">
                  <Link
                    to={layer.link.to}
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2 transition-all"
                    style={{ color: ACCENT }}
                  >
                    {layer.link.label} <ArrowRight className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </motion.section>
          );
        })}

        <SectionDivider />

        {/* ═══ الصورة الكاملة ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* توهج الخلفية */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #D9770605 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-7 h-7" style={{ color: ACCENT }} />
                <SectionLabel>الصورة الكاملة</SectionLabel>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>عشر طبقات. ثلاث ركائز. شريك مسؤول واحد.</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                كل صفحة أخرى في هذا الموقع هي عرض تفصيلي لواحدة أو أكثر من هذه الطبقات.
                صفحات القدرات تركّز على الطبقة ٤. صفحات القطاعات تركّز على الطبقة ٣. صفحات الخدمات تركّز على الطبقة ٥.
                المخططات تربط الطبقات ٣–٦. منظومة القيمة المؤسسية هي الطبقة ٢.
                صفحة المعمارية هذه هي النسيج الرابط — الرؤية الواحدة التي تُظهر كيف يتكامل كل شيء.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'القدرات', path: '/ar/capabilities/ai' },
                  { label: 'الخدمات', path: '/ar/services' },
                  { label: 'القطاعات', path: '/ar/industries/government' },
                  { label: 'المخططات', path: '/ar/blueprints' },
                  { label: 'منظومة القيمة المؤسسية', path: '/ar/value' },
                ].map((link) => (
                  <Link key={link.label} to={link.path}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-[#D97706]/30 transition-all">
                    {link.label} <ArrowRight className="w-3.5 h-3.5 rotate-180" style={{ color: ACCENT }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ دعوة للعمل ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-12"
        >
          <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #D977060A, var(--bg-secondary), var(--bg-secondary))',
              border: '1px solid #D9770615',
            }}
          >
            {/* توهج زخرفي */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #D9770605 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <SectionLabel>الخطوة التالية</SectionLabel>
              <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                هل أنتم مستعدون لرؤية هذه المعمارية مُطبّقة على مؤسستكم؟
              </h2>
              <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                دعونا نناقش كيف تتوافق هذه الطبقات العشر مع قطاعكم وأولويات تحولكم ونتائج أعمالكم.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/ar/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}
                >
                  ابدأ المحادثة
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Link>
                <Link
                  to="/ar/blueprints"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#D97706]/30"
                >
                  عرض مخططات التحول
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
