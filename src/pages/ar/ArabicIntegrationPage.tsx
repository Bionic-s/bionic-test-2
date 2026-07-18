import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Brain, BarChart3, Users, MessageSquare, Layout, Globe, Heart, ShoppingCart, Briefcase, GitBranch, Workflow, Zap, Network, Plug, RefreshCw, Activity, Shield, Eye, Fingerprint, Lock, Database, FileWarning, Server, Cloud, Container, HardDrive, Cpu, Gauge, Layers, FileText, LineChart } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = `${import.meta.env.BASE_URL}images/hero/ai-agents.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"MuleSoft","role":"اتصال بقيادة API","tech":"Anypoint Platform · API Manager · Exchange · Flex Gateway · API Governance"},{"name":"IBM","role":"نسيج التكامل المؤسسي","tech":"Cloud Pak for Integration · API Connect · App Connect · MQ · Event Streams"},{"name":"Google","role":"إدارة API ومعمارية مدفوعة بالأحداث","tech":"Apigee · Workflows · Eventarc · Pub/Sub · Cloud Run"},{"name":"Informatica","role":"تكامل البيانات والتطبيقات","tech":"Cloud Data Integration · Application Integration · Mass Ingestion"}];
const blueprints = [{"title":"تكامل OT/IT والعمليات الآمنة","industry":"نفط وغاز","slug":"ot-it-integration-secure-ops"},{"title":"Customer ٣٦٠ والتفاعل الذكي","industry":"بنوك","slug":"customer-360-intelligent-engagement"},{"title":"تحول فرق العمل المعززة بالذكاء الاصطناعي","industry":"مؤسسات","slug":"agentic-workforce-transformation"}];
const bpSlugs = ["ot-it-integration-secure-ops","customer-360-intelligent-engagement","agentic-workforce-transformation"];

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />, Brain: <Brain className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />, GitBranch: <GitBranch className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />, Cpu: <Cpu className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />, BarChart3: <BarChart3 className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />, Server: <Server className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />, LineChart: <LineChart className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />, Globe: <Globe className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />, ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />, Heart: <Heart className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />, Network: <Network className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />, Plug: <Plug className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />, Activity: <Activity className="w-5 h-5" />,
  Fingerprint: <Fingerprint className="w-5 h-5" />, Lock: <Lock className="w-5 h-5" />,
  FileWarning: <FileWarning className="w-5 h-5" />, Cloud: <Cloud className="w-5 h-5" />,
  Container: <Container className="w-5 h-5" />, HardDrive: <HardDrive className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
};

const realityItems = [{"iconName":"Plug","text":"أنظمة لا تستطيع تبادل البيانات في الوقت الفعلي — فتتعطل سلاسل القرار."},{"iconName":"Activity","text":"تسليم يدوي بين الأنظمة يبطئ العمليات ويدخل أخطاء بشرية مكلفة."},{"iconName":"Network","text":"تكاملات نقطة إلى نقطة تخلق تعقيداً يصعب إدارته وتوسيعه."},{"iconName":"Zap","text":"لا رؤية تشغيلية فورية عبر وظائف الأعمال."},{"iconName":"Workflow","text":"شركاء وموردون منفصلون عن الأنظمة المؤسسية الأساسية."},{"iconName":"RefreshCw","text":"التكامل يُعامل كمشروع لا كقدرة مؤسسية مستمرة."}];
const coreCaps = [{"title":"استراتيجية ومعمارية API","desc":"تصميم معماريات اتصال بقيادة API تحول الأنظمة إلى قدرات أعمال قابلة لإعادة الاستخدام.","iconName":"GitBranch","outcomes":["استراتيجية API مرتبطة بقدرات الأعمال","طبقة API قابلة لإعادة الاستخدام","حوكمة API مع إدارة دورة الحياة","معمارية أمان شاملة"]},{"title":"الاتصال المؤسسي","desc":"ربط أي نظام — سحابة، محلي، قديم، أو شريك — من خلال نسيج تكامل موحد.","iconName":"Network","outcomes":["نسيج تكامل موحد عبر جميع الأنظمة","موصلات مسبقة البناء تسرّع الوصول إلى التكامل","اتصال فوري ودفعي"]},{"title":"تنسيق سير العمل الذكي","desc":"تصميم وأتمتة سير عمل شامل عبر الإدارات والأنظمة.","iconName":"Workflow","outcomes":["سير عمل عبر الإدارات بدون تسليم يدوي","تسريع وقت الدورة عبر المشتريات والعمليات","معالجة استثناءات مع توجيه ذكي"]},{"title":"العمليات الوكيلة","desc":"نشر وكلاء ذكاء اصطناعي يكشفون الأحداث ويطلقون سير العمل وينسقون الإجراءات.","iconName":"Zap","outcomes":["عمليات مدفوعة بالأحداث تستجيب فوريًا","توجيه بالذكاء في سير العمل","تسريع وقت الحل من خلال الاستجابة الآلية"]},{"title":"تكامل الشركاء والمنظومة","desc":"دمج الموردين والموزعين والمنصات الحكومية في العمليات المؤسسية.","iconName":"Network","outcomes":["تأهيل شريك آمن مع وصول API محكوم","تكامل منصات اعتماد والمشتريات الحكومية","اتصال مورد وموزع للرؤية الشاملة"]},{"title":"عمليات التكامل والتطور المستمر","desc":"تشغيل ومراقبة وتحسين طبقة التكامل باستمرار.","iconName":"RefreshCw","outcomes":["مراقبة تكامل ٢٤×٧ مع تنبيه استباقي","تحسين أداء حركة API","تطور مستمر للتكامل"]}];
const whyItems = [{"title":"تكامل متعدد المورّدين. بدون احتكار.","desc":"نصمم عبر MuleSoft و IBM و Google Cloud و Informatica."},{"title":"عمليات وكيلة. أبعد من الأتمتة.","desc":"نبني عمليات تستشعر وتستجيب وتتكيف من خلال تنسيق مدفوع بالذكاء."},{"title":"تكامل مؤسسي سعودي. مثبت.","desc":"خبرة في ربط المنصات الحكومية والأنظمة المصرفية وتخطيط الموارد."},{"title":"شريك واحد. مسؤولية كاملة.","desc":"من استراتيجية API إلى عمليات التكامل ٢٤×٧."}];
const industryItems = [{"industry":"القطاع الحكومي","apps":"تكامل منصات اعتماد والحكومة، تنسيق خدمة المواطن، تبادل بيانات بين الجهات."},{"industry":"القطاع المصرفي","apps":"تكامل مصرفي أساسي، واجهات مصرفية مفتوحة، أتمتة تقارير تنظيمية."},{"industry":"الرعاية الصحية","apps":"تكامل السجل الطبي والأنظمة السريرية، تبادل بيانات المريض."},{"industry":"النفط والغاز","apps":"تكامل OT/IT، اتصال بيانات الميدان للمكتب، تنسيق سلسلة الإمداد."},{"industry":"الصناعة","apps":"تكامل تخطيط الموارد مع أرض المصنع، رؤية سلسلة الإمداد."},{"industry":"الاتصالات","apps":"تكامل BSS/OSS، اتصال منظومة الشركاء، تنسيق Customer 360."}];
const insightItems = [{"tag":"المعمارية","title":"الاتصال بقيادة API في الممارسة","desc":"لماذا تتفوق المعماريات المدفوعة بالأحداث و API على التكامل التقليدي."},{"tag":"السعودية","title":"تكامل المنصات الحكومية","desc":"كيف يمكن للمؤسسات السعودية تصميم التكامل مع اعتماد والخدمات الحكومية."},{"tag":"العمليات","title":"صعود العمليات الوكيلة","desc":"كيف يحول وكلاء الذكاء العمليات المؤسسية إلى سير عمل ذكي فوري."}];

export default function ArabicIntegrationPage() {

  useEffect(() => { trackCapabilityPageView('Integration & Intelligent Operations'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  const capsWithIcons = coreCaps.map((c: any) => ({ ...c, icon: iconMap[c.iconName] || iconMap['Brain'] }));

  return (
    <div
       className="min-h-screen bg-bg-primary" dir="rtl">
      <Helmet>
        <title>التكامل والعمليات الذكية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="التكامل والعمليات الذكية — معمارية قائمة على واجهات API، معمارية مدفوعة بالأحداث، وتنسيق سير العمل المؤسسي." />
      </Helmet>
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        {/* ═══ 1. HERO ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
            className="relative z-10 pt-40 pb-32 text-center px-4"
          >
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
            style={{ borderColor: '#00BFFF40', backgroundColor: '#00BFFF08' }}>
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>التكامل والعمليات الذكية</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من أنظمة منفصلة</span><br />
            إلى عمليات ذكية.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نربط التطبيقات ونؤتمت سير العمل وننسق العمليات الذكية عبر المؤسسة — مصممة للسرعة والنطاق المؤسسي والبيئة التنظيمية السعودية.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معظم المؤسسات تعمل على أنظمة منفصلة وتسليم يدوي.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item: any, i: number) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#00BFFF]30" style={{ flexDirection: 'row-reverse' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#00BFFF15', color: '#00BFFF' }}>{iconMap[item.iconName]}</div>
                <p className="text-text-primary text-sm leading-relaxed text-right">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. CORE CAPABILITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>كيف نحقق ذلك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">القدرات الأساسية</h2>
          <p className="text-text-muted text-base mb-10">ست قدرات. كل قدرة مصممة لتحقيق نتيجة أعمال محددة.</p>

          <div className="space-y-4">
            {capsWithIcons.map((cap: any, i: number) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF]1A">
                <div className="flex flex-col md:flex-row md:items-start gap-5" style={{ flexDirection: 'row-reverse' }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#00BFFF12', color: '#00BFFF' }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o: string, j: number) => (
                        <div key={j} className="flex items-start gap-2 flex-row-reverse">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#00BFFF' }} />
                          <span className="text-xs text-text-primary leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 HOW WE DELIVER ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>كيف نحقق ذلك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تنفيذ متكاملة — عبر جميع القدرات.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/ar/services/advisory', title: 'الاستشارات والتخطيط', desc: 'تقييم الجاهزية للذكاء الاصطناعي · استشارات الامتثال والحوكمة · الاستراتيجية وخارطة الطريق' },
              { href: '/ar/services/implementation', title: 'التنفيذ والتسليم', desc: 'نشر الذكاء الاصطناعي والأتمتة · تسليم المنصات والتطبيقات · مسار MLOps' },
              { href: '/ar/services/operations', title: 'العمليات المدارة', desc: 'عمليات المنصات ٢٤×٧ · مركز العمليات الأمنية كخدمة · مستويات خدمة متدرّجة' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
                <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">{s.title}</h3>
                <p className="text-tiny text-text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. WHY BIONIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يحول القدرات إلى نتائج.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item: any, i: number) => (
                <div key={i} className="flex gap-3 flex-row-reverse">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#00BFFF' }} />
                  <div className="text-right">
                    <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. TECHNOLOGY ECOSYSTEM ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>التقنية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">المنظومة التقنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p: any, i: number) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3" style={{ flexDirection: 'row-reverse' }}>
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99' }}>{p.role}</span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed text-right">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. INDUSTRY APPLICATIONS ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>أين نطبقها</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">التطبيقات القطاعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryItems.map((item: any, i: number) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300">
                <h3 className="font-semibold text-base mb-2 text-text-primary text-right">{item.industry}</h3>
                <p className="text-text-muted text-xs leading-relaxed text-right">{item.apps}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/ar/industries/government" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
              استكشف التطبيقات القطاعية <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. FEATURED INSIGHTS ═══ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>رؤى</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">رؤى مختارة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insightItems.map((item: any, i: number) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#00BFFF12', color: '#00BFFF' }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#00BFFF99' }}>
                  <ExternalLink className="w-3 h-3" /> اقرأ الرؤية
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 7.5 RELATED BLUEPRINTS ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>المخططات المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية تجسد هذه القدرة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp: any, i: number) => (
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 8. CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              مستعدون لربط الأنظمة المنفصلة في<br />
              <span style={{ color: '#00BFFF' }}>عمليات ذكية</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              لنناقش كيف يمكن للاتصال بقيادة API والعمليات الوكيلة تحويل سرعة المؤسسة — مع أمن وحوكمة مدمجة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: '#00BFFF', boxShadow: '0 8px 24px #00BFFF20' }}>
                تواصل معنا <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link to="/ar/blueprints" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300">
                استعرض المخططات المرجعية
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
