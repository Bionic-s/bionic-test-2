import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, BarChart3, FileText, Shield, Compass, TrendingUp } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { CANON_PARTNERS, type PartnerData } from '../../data/partnersData';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#0D9488';
const HERO_BG = '/test-site-2/images/data-analytics.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const services = [
  { title: 'استراتيجية تحول الأعمال', desc: 'تصميم تحول شامل — تقييم الوضع الحالي، رؤية الحالة المستقبلية، تحليل الفجوات، محفظة المبادرات، وخطة تحقيق قيمة متعددة السنوات.', icon: Target },
  { title: 'خارطة طريق تحول الذكاء الاصطناعي', desc: 'تشخيص لمدة ٦ أسابيع ← بنك حالات استخدام ← مصفوفة أولويات ← خارطة طريق تنفيذية لمدة ١٢ شهرًا مع توقعات عائد الاستثمار لكل مبادرة.', icon: TrendingUp },
  { title: 'دراسة القيمة التنفيذية وحالة الأعمال', desc: 'نمذجة عائد الاستثمار، تحليل التكلفة الإجمالية للملكية، تخطيط تحقيق القيمة، ودعم اتخاذ القرار التنفيذي. نبني الحالة المالية والاستراتيجية التي تحظى بموافقة مجلس الإدارة.', icon: BarChart3 },
  { title: 'تصميم نموذج التشغيل', desc: 'الأفراد · العمليات · التقنية · الحوكمة — كيف يجب أن تتطور مؤسستكم لاستدامة التحول. نماذج تشغيلية للمؤسسات القائمة على الذكاء الاصطناعي والبيانات والمنصات.', icon: Compass },
  { title: 'استشارات الامتثال والحوكمة والمخاطر', desc: 'أخلاقيات الذكاء الاصطناعي من SDAIA · حماية البيانات PDPL · الأمن السيبراني NCA · الجاهزية التنظيمية SAMA — مدمجة في المعمارية التقنية، وليست مجرد قائمة تدقيق.', icon: Shield },
  { title: 'استراتيجية التقنية والمعمارية', desc: 'معمارية مرجعية عبر جميع القدرات السبع. إطار اختيار المورّدين. تحليل البناء مقابل الشراء. نمذجة التكلفة الإجمالية للملكية.', icon: FileText },
];

const capabilityCoverage = [
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'تقييم جاهزية الذكاء الاصطناعي، تحديد أولويات حالات الاستخدام، استراتيجية MLOps، تصميم حوكمة النماذج' },
  { cap: 'البيانات والتحليلات والذكاء', app: 'معمارية منصة البيانات، استراتيجية إدارة البيانات الرئيسية، خارطة طريق ذكاء الأعمال، إطار حوكمة البيانات' },
  { cap: 'تطبيقات الأعمال وتجربة العميل', app: 'استراتيجية تحول CRM، تقييم نضج تجربة العميل، خارطة طريق التجارة الإلكترونية' },
  { cap: 'التكامل والعمليات الذكية', app: 'تصميم معمارية API-led، خارطة طريق التكامل، استراتيجية Event-Driven' },
  { cap: 'الأمن السيبراني والمرونة السيبرانية', app: 'الامتثال لـ NCA، معمارية Zero Trust، استراتيجية مركز العمليات الأمنية، تقييم النضج السيبراني' },
  { cap: 'البنية التحتية السيادية والسحابة الهجينة', app: 'استراتيجية مراكز البيانات، خارطة طريق الترحيل السحابي، تخطيط البنية التحتية للذكاء الاصطناعي' },
  { cap: 'عمليات التقنية', app: 'تقييم نضج SRE، استراتيجية المراقبة والملاحظة، خارطة طريق FinOps، تصميم منصة المطورين الداخلية' },
];

const blueprints = [
  { title: 'منصة الذكاء السيادي', industry: 'حكومي', slug: 'sovereign-ai-platform' },
  { title: 'مركز العمليات السيبرانية الوطني', industry: 'حكومي', slug: 'national-soc' },
  { title: 'بنية تحتية مصرفية متوافقة مع SAMA', industry: 'بنوك', slug: 'sama-compliant-banking-infra' },
  { title: 'Customer 360 والمشاركة الذكية', industry: 'بنوك', slug: 'customer-360-intelligent-engagement' },
  { title: 'تكامل OT/IT والعمليات الآمنة', industry: 'نفط وغاز', slug: 'ot-it-integration-secure-ops' },
  { title: 'Zero Trust المؤسسي', industry: 'مؤسسات', slug: 'enterprise-zero-trust' },
];

const partners: (PartnerData & { role: string; tech: string })[] = [
  { ...CANON_PARTNERS.find(p => p.name === 'IBM')!, role: 'حوكمة الذكاء الاصطناعي، استراتيجية watsonx، معمارية Cloud Pak', tech: 'watsonx.ai · watsonx Governance · Cloud Pak for Data · IBM Consulting' },
  { ...CANON_PARTNERS.find(p => p.name === 'Salesforce')!, role: 'خارطة طريق تحول CRM، استراتيجية Einstein AI', tech: 'Sales Cloud · Service Cloud · Einstein AI · Agentforce' },
  { ...CANON_PARTNERS.find(p => p.name === 'Google')!, role: 'معمارية Cloud-Native، تصميم منصة Vertex AI', tech: 'Vertex AI · BigQuery · Looker · Gemini' },
  { ...CANON_PARTNERS.find(p => p.name === 'Dell Technologies')!, role: 'تحديث البنية التحتية، استراتيجية APEX', tech: 'PowerEdge · PowerStore · APEX · VxRail' },
  { ...CANON_PARTNERS.find(p => p.name === 'MuleSoft')!, role: 'استراتيجية التكامل API-led، منصة Anypoint', tech: 'Anypoint Platform · API Manager · Flex Gateway · MuleSoft RPA · Composer' },
  { ...CANON_PARTNERS.find(p => p.name === 'Informatica')!, role: 'استراتيجية إدارة البيانات الرئيسية، إطار حوكمة البيانات', tech: 'MDM · Data Quality · Data Catalog · Data Lineage' },
];

export default function ArabicConsultingAdvisoryPage() {

  useEffect(() => { trackServicePageView('Consulting & Advisory'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/5 mb-10">
              <span className="text-tiny text-[#0D9488] font-semibold tracking-widest uppercase">الاستشارات الاستراتيجية</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              نبدأ بالاستراتيجية.<br />
              <span style={{ color: ACCENT }}>نؤسس للرؤية.</span><br />
              ثم نستثمر في التقنية المناسبة.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed">
              نمكّن المؤسسات السعودية من الإجابة على الأسئلة الأصعب أولاً: ما الأولويات؟ أين تكمن القيمة؟ وكيف يمكن تحقيقها؟ — انطلاقاً من جاهزية الذكاء الاصطناعي إلى تصميم نموذج التشغيل، ومن معمارية الامتثال إلى خارطة طريق متعددة السنوات. نحوّل الطموحات الاستراتيجية إلى برامج تنفيذية واضحة وقابلة للقياس.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            معظم برامج التحول تتعثر قبل التنفيذ — عند غياب الاستراتيجية الواضحة والرؤية المؤسسية المتماسكة.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            تستثمر المؤسسات الملايين في التقنية دون حالة أعمال واضحة، دون فهم التعرض التنظيمي، ودون تصميم نموذج التشغيل الذي يضمن استدامة الاستثمار. نحن نعالج هذا — قبل أن تبدأ عمليات الشراء.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'استراتيجية بدون حالة أعمال', text: 'قرارات تقنية تُتخذ دون نمذجة عائد الاستثمار أو تحليل التكلفة الإجمالية أو موافقة تنفيذية — يختفي الاستثمار قبل أن تتحقق القيمة' },
              { pre: 'اكتشاف المتطلبات التنظيمية متأخرًا', text: 'متطلبات SDAIA و NCA و PDPL تظهر متأخرة أثناء التنفيذ — مما يفرض إعادة عمل مكلفة وتمارين امتثال طارئة' },
              { pre: 'تعدد المبادرات دون أولويات واضحة', text: 'العشرات من فرص الذكاء الاصطناعي والأتمتة يتم تحديدها — ولكن بدون إطار لترتيبها حسب التأثير والجدوى والمخاطر' },
              { pre: 'اختيار المورّدين مبني على العلاقات', text: 'قرارات المنصات تُتخذ بناءً على علاقات مورّدين قائمة — لا على تقييم موضوعي للقدرات مقابل متطلبات الأعمال' },
              { pre: 'تجاهل نموذج التشغيل', text: 'تقنية تُطبق في مؤسسة لم يُعاد تصميمها لاستيعابها — الأفراد والعمليات والحوكمة تُترك خلف الركب' },
              { pre: 'غياب مؤشرات الأداء وخط الأساس لقياس الأثر', text: 'انطلاق التحول دون مؤشرات أداء رئيسية، دون خط أساس، دون آلية لتتبع القيمة — يصبح النجاح رأيًا لا دليلاً' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#0D9488]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. WHAT WE DELIVER ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>حلولنا</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            من الجاهزية إلى اعتماد المجلس — ست خدمات استشارية.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <s.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. CAPABILITY COVERAGE ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>تغطية القدرات</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            استشاراتنا تغطي كامل منظومة قدراتنا.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilityCoverage.map((c, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#0D9488]/15 transition-all duration-300 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 5. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            موضوعية متعددة المنصات والتقنيات. في كل مشاركة.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <PartnerLogo partner={p} size="md" />
                  <div>
                    <h3 className="font-semibold text-sm">{p.name}</h3>
                    <p className="text-tiny text-text-muted">{p.role}</p>
                  </div>
                </div>
                <p className="text-tiny text-text-muted leading-relaxed border-t border-white/5 pt-3">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. RELATED BLUEPRINTS ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>مخططات التحول المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية تطبيقية تبلورت عبر المشاركات الاستشارية.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <span className="text-tiny text-[#0D9488]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#0D9488] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#0D9488]/40 group-hover:text-[#0D9488] group-hover:-translate-x-1 transition-all mt-2 rotate-180" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints" className="inline-flex items-center gap-1.5 text-[#0D9488] text-sm font-medium hover:underline">
              عرض جميع المخططات المرجعية <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. WHY BIONIC ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>لماذا بيونك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">منهجيتنا الاستشارية.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'موضوعية متعددة المنصات والتقنيات', desc: 'لا نمثل مورّدًا واحدًا. نختار ما يحقق أقصى قيمة لأعمالكم — بناءً على التقييم مقابل متطلباتكم، لا على حوافز الموزعين.' },
              { title: 'عمق تنظيمي سعودي', desc: 'خبرة SDAIA و NCA و PDPL و SAMA مدمجة في كل مشاركة استشارية. المواءمة التنظيمية تُصمم من اليوم الأول — لا تُضاف لاحقًا.' },
              { title: 'استمرارية من الاستشارة إلى التنفيذ', desc: 'الفريق الذي يقدم الاستشارة هو من يتولى التنفيذ. لا فجوات تسليم، لا انقطاع بين الاستراتيجية والتنفيذ، لا تسليم منقوص.' },
              { title: 'نتائج قابلة للقياس تتجاوز التقارير والعروض النظرية', desc: 'كل مشاركة استشارية تنتهي بمؤشرات أداء قابلة للقياس، وحالة أعمال مالية، وخارطة طريق قابلة للتنفيذ — لا تقرير من ٢٠٠ صفحة يُوضع على الرف.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 8. CROSS-NAVIGATION ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-5 text-text-muted">ماذا تود استكشافه أيضًا؟</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'القدرات', path: '/ar/capabilities/ai' },
                { label: 'القطاعات', path: '/ar/industries/government' },
                { label: 'المخططات المرجعية', path: '/ar/blueprints' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-white/20 transition-all hover:-translate-y-0.5">
                  {link.label} <ArrowRight className="w-3.5 h-3.5 text-text-muted rotate-180" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 9. CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              هل أنتم مستعدون لتحويل الطموح إلى خارطة طريق قابلة للتنفيذ؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              دعنا نناقش كيف تساهم خدماتنا الاستشارية في بناء الأساس الاستراتيجي الذي يحتاجه تحولكم.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #0D948820' }}
              >
                ابدأ المحادثة
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/capabilities/ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#0D9488]/30"
              >
                عرض القدرات
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
