import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cog, Zap, GitBranch, Cloud, Shield, Users, TrendingUp } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { CANON_PARTNERS, type PartnerData } from '../../data/partnersData';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/images/ai_case_study_image.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const services = [
  { title: 'تطبيق الذكاء الاصطناعي والأتمتة', desc: 'مسار MLOps، بنية تقديم النماذج، تطبيق الوكلاء، تنفيذ أتمتة سير العمل — بجودة إنتاجية، محكومة، وقابلة للقياس.', icon: Zap },
  { title: 'تسليم المنصات والتطبيقات', desc: 'تطبيق CRM (Salesforce)، بناء منصة البيانات (IBM، Informatica)، تطبيق ذكاء الأعمال (Tableau، Looker)، تحديث التطبيقات.', icon: Cog },
  { title: 'التكامل وهندسة API', desc: 'ربط API-led عبر الأنظمة القديمة والحديثة — MuleSoft Anypoint، معمارية Event-Driven، خطوط بيانات فورية.', icon: GitBranch },
  { title: 'تسليم البنية التحتية والسحابة', desc: 'تحديث مراكز البيانات (Dell)، تطبيق السحابة الهجينة (Platform9، Red Hat OpenShift)، بناء البنية التحتية السيادية.', icon: Cloud },
  { title: 'تنفيذ الأمن السيبراني', desc: 'تطبيق نسيج Zero Trust، بناء مركز العمليات الأمنية (IBM QRadar)، مخزن التعافي السيبراني (Dell PowerProtect)، معمارية الهوية.', icon: Shield },
  { title: 'تبني الأعمال وتحقيق القيمة', desc: 'إدارة التغيير، برامج تبني المستخدمين، التدريب، التسليم التشغيلي، قياس مؤشرات الأداء — قيمة تُقاس من اليوم الأول.', icon: Users },
];

const capabilityCoverage = [
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'مسار MLOps، نشر النماذج، نشر الوكلاء، تنفيذ أتمتة سير العمل' },
  { cap: 'البيانات والتحليلات والذكاء', app: 'بناء Lakehouse، تنفيذ إدارة البيانات الرئيسية، نشر ذكاء الأعمال، هندسة خطوط البيانات' },
  { cap: 'تطبيقات الأعمال وتجربة العميل', app: 'نشر CRM، مركز الاتصال، أتمتة التسويق، منصة التجارة الإلكترونية' },
  { cap: 'التكامل والعمليات الذكية', app: 'معمارية API-led، ترحيل ESB، أنماط Event-Driven، تنسيق سير العمل' },
  { cap: 'الأمن السيبراني والمرونة السيبرانية', app: 'نشر SIEM، تنفيذ Zero Trust، بناء المخزن الاحتياطي، معمارية الهوية' },
  { cap: 'البنية التحتية السيادية والسحابة الهجينة', app: 'تحديث مراكز البيانات، نشر OpenShift، الترحيل السحابي، البنية التحتية للذكاء الاصطناعي' },
  { cap: 'عمليات التقنية', app: 'بناء منصة المطورين الداخلية، منظومة المراقبة، تنفيذ FinOps، أتمتة دليل التشغيل' },
];

const blueprints = [
  { title: 'منصة الذكاء السيادي', industry: 'حكومي', slug: 'sovereign-ai-platform' },
  { title: 'نسيج البيانات بين الوزارات', industry: 'حكومي', slug: 'inter-ministry-data-fabric' },
  { title: 'كشف الاحتيال الفوري', industry: 'بنوك', slug: 'real-time-fraud-detection' },
  { title: 'Customer 360 والتفاعل الذكي', industry: 'بنوك', slug: 'customer-360-intelligent-engagement' },
  { title: 'الذكاء الصناعي والعمليات التنبؤية', industry: 'نفط وغاز', slug: 'industrial-intelligence-predictive-ops' },
  { title: 'الذكاء السريري والذكاء الاصطناعي الطبي', industry: 'رعاية صحية', slug: 'clinical-intelligence-medical-ai' },
];

const partners: (PartnerData & { role: string; tech: string })[] = [
  { ...CANON_PARTNERS.find(p => p.name === 'Salesforce')!, role: 'نشر CRM و Marketing Cloud و Experience Cloud', tech: 'Sales Cloud · Service Cloud · Marketing Cloud · Commerce Cloud · Experience Cloud' },
  { ...CANON_PARTNERS.find(p => p.name === 'MuleSoft')!, role: 'تسليم التكامل API-led ومنصة Anypoint', tech: 'Anypoint Platform · API Manager · Flex Gateway · RPA · Composer' },
  { ...CANON_PARTNERS.find(p => p.name === 'IBM')!, role: 'نشر watsonx و DataStage وتنفيذ Cloud Pak', tech: 'watsonx.ai · DataStage · Cloud Pak · FlashSystem · Instana' },
  { ...CANON_PARTNERS.find(p => p.name === 'Informatica')!, role: 'نشر إدارة البيانات الرئيسية وجودة البيانات وكتالوج البيانات', tech: 'MDM · Data Quality · Data Catalog · Data Lineage · Data Integration' },
  { ...CANON_PARTNERS.find(p => p.name === 'Dell Technologies')!, role: 'نشر PowerEdge و PowerStore و VxRail', tech: 'PowerEdge · PowerStore · PowerMax · VxRail · APEX' },
  { ...CANON_PARTNERS.find(p => p.name === 'Platform9')!, role: 'تسليم السحابة الخاصة ومنصة Kubernetes', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation' },
];

export default function ArabicImplementationDeliveryPage() {

  useEffect(() => { trackServicePageView('Implementation & Delivery'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary" dir="rtl">
      <Helmet>
        <title>التنفيذ والتسليم | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="نشر المنصات، هندسة التكامل، وتمكين التبني المؤسسي — متعدد الموردين ومتعدد المجالات." />
      </Helmet>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-24 text-center px-4"
        >
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/25 bg-[#00BFFF]/5 mb-10">
              <span className="text-tiny text-[#00BFFF] font-semibold tracking-widest uppercase">التنفيذ والتسليم التشغيلي</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              الاستراتيجية ← التنفيذ ←<br />
              <span style={{ color: ACCENT }}>التبني ← تحقيق القيمة.</span><br />
              نسلّم السلسلة كاملة.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed">
              المعمارية نظرية. الإنتاج هو الحقيقة. نطبّق وندمج ونسلّم — ولكن الأهم أننا نضمن تبني فرقكم واستيعاب عملياتكم وتحقيق أعمالكم للقيمة الموعودة. من منصات الذكاء الاصطناعي إلى ضوابط الأمن، ومن CRM إلى السحابة السيادية — تسليم بجودة إنتاجية مع تسريع مدمج للوقت إلى القيمة.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            الفجوة بين "تم النشر" و"تحقيق القيمة" هي حيث تتعثر معظم التحولات — ونحن هنا لسدها.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            تشير الدراسات إلى أن مشاريع التقنية في المؤسسات الكبرى تتجاوز الجداول الزمنية الأولية بشكل متكرر — منهجية التسليم المنضبطة تردم هذه الفجوة. التجارب الأولية للذكاء الاصطناعي لا تصل إلى الإنتاج. منصات جديدة تُطبق لكن الفرق لا تستطيع تشغيلها. نحن نردم هذه الفجوة — بتسليم أنظمة بجودة إنتاجية مع حوكمة وتبني وتتبع قيمة مدمجة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'مقبرة التجارب الأولية', text: 'مشاريع الذكاء الاصطناعي والأتمتة تتوقف بين النموذج الأولي والإنتاج — لا مسار تطبيق، لا جاهزية تشغيلية' },
              { pre: 'تعقيد التكامل', text: 'المنصات الجديدة يجب أن تتصل بالأنظمة القديمة — SAP و Oracle والتطبيقات المخصصة — دون كسر ما يعمل' },
              { pre: 'تأخيرات التسليم', text: 'مشاريع المؤسسات تتجاوز الجدول الزمني بشكل متكرر — غياب انضباط أجايل للتطبيق على مستوى المؤسسة' },
              { pre: 'الأمن يُضاف لاحقًا', text: 'ضوابط سيبرانية تُطبق بعد التطبيق، لا كمكون معماري مدمج في مسار التسليم — مما يسبب إعادة عمل مكلفة' },
              { pre: 'تبادل الاتهامات بين المورّدين', text: 'بيئات متعددة المنصات تخلق فجوات في المساءلة — غياب طرف واحد يمتلك نجاح التسليم' },
              { pre: 'التبني يُترك للصدفة', text: 'أنظمة منشورة لكن الفرق لا تستطيع استخدامها، العمليات لا تستطيع استيعابها، والقيمة لا تُقاس' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/20 transition-all duration-300">
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
            ست خدمات تسليم — من التطبيق إلى تحقيق القيمة.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <s.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 TRANSFORMATION GOVERNANCE ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>حوكمة التحول</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">حوكمة تضمن وصول الاستراتيجية إلى القيمة — وليس مجرد التسليم.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'حوكمة البرنامج', desc: 'إطار تسليم منظم — بوابات المراحل، إدارة المخاطر، تخطيط التبعيات، تنسيق متعدد المورّدين.' },
              { title: 'التوجيه التنفيذي', desc: 'مراجعات تنفيذية شهرية — التقدم مقابل خارطة الطريق، حل التصعيدات، فحص المواءمة الاستراتيجية.' },
              { title: 'تتبع مؤشرات الأداء', desc: 'لوحة بيانات فورية — سرعة التسليم، مقاييس التبني، الجاهزية التشغيلية، تحقيق الإنجازات.' },
              { title: 'تتبع القيمة', desc: 'تحقيق القيمة يُقاس مقابل حالة الأعمال — تتبع عائد الاستثمار، تحقيق المنافع، تحليل الانحرافات.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <TrendingUp className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. CAPABILITY COVERAGE ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>تغطية القدرات</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            يمتد التنفيذ عبر كل قدرة نصممها معماريًا.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilityCoverage.map((c, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/15 transition-all duration-300 flex items-start gap-3">
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
            المنصات التي نسلّمها — والشركاء الذين نسلّمها معهم.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية نسلّمها إلى الإنتاج.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:-translate-x-1 transition-all mt-2 rotate-180" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              عرض جميع المخططات المرجعية <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. WHY BIONIC ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>لماذا بيونك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">الفرق في التسليم.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'مالك تسليم واحد', desc: 'ندير جميع المورّدين. تحصل على فريق واحد مسؤول، لا خمسة مدراء مشاريع يتبادلون الاتهامات.' },
              { title: 'سلسلة الاستراتيجية إلى القيمة', desc: 'الفريق الذي قدّم الاستشارة هو من يبني. الفريق الذي يبني يضمن التبني. التبني يُقاس مقابل نتائج الأعمال.' },
              { title: 'تسريع الوقت إلى القيمة', desc: 'منهجية الإنتاج أولاً: دورات تطوير من أسبوعين، حوكمة بجودة إنتاجية، قيمة تتحقق تدريجيًا — ليس بعد ١٨ شهرًا.' },
              { title: 'البناء حتى التبني', desc: 'التسليم يشمل إدارة التغيير والتدريب وأدلة التشغيل وخطوط أساس مؤشرات الأداء. لا تسليم منقوص.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
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
            <h2 className="text-lg font-semibold mb-5 text-text-muted">ماذا تودّون استكشافه أيضًا؟</h2>
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
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              هل أنتم مستعدون لنقل تحولكم من التصميم إلى الإنتاج؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              دعنا نناقش كيف يمكننا تسليم منصاتكم ودفع التبني وتسريع الوقت إلى القيمة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}
              >
                ابدأ المحادثة
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/capabilities/integration"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30"
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
