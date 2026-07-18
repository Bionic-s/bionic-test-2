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
const HERO_BG = `${import.meta.env.BASE_URL}images/professional-services-ai-hero.jpg`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"Salesforce","role":"إدارة علاقات العملاء والتفاعل","tech":"Sales Cloud · Service Cloud · Marketing Cloud · Commerce Cloud · Experience Cloud"},{"name":"Tableau","role":"ذكاء العملاء والتحليلات","tech":"CRM Analytics · Embedded BI · Customer 360 dashboards"},{"name":"Informatica","role":"جودة بيانات العملاء وإدارة البيانات الرئيسية","tech":"Customer 360 MDM · Data Quality · Data Catalog"},{"name":"IBM","role":"ذكاء العملاء والتحليلات","tech":"watsonx.ai · watsonx Assistant · Customer analytics · Journey AI"},{"name":"MuleSoft","role":"التكامل والاتصال عبر API","tech":"Anypoint Platform · API Manager · Flex Gateway · RPA · Composer"}];
const blueprints = [{"title":"Customer ٣٦٠ والتفاعل الذكي","industry":"بنوك","slug":"customer-360-intelligent-engagement"},{"title":"تجربة المريض الذكية","industry":"رعاية صحية","slug":"intelligent-patient-experience"},{"title":"تحول فرق العمل المعززة بالذكاء الاصطناعي","industry":"مؤسسات","slug":"agentic-workforce-transformation"}];
const bpSlugs = ["customer-360-intelligent-engagement","intelligent-patient-experience","agentic-workforce-transformation"];

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

const realityItems = [{"iconName":"Users","text":"رؤية عميل متجزئة عبر الإدارات والقنوات — تفقد المؤسسة فهمها الحقيقي للعميل."},{"iconName":"Layout","text":"أنظمة إدارة علاقات عملاء قديمة تتجاوزها الفرق — فتُهدر استثمارات الترخيص."},{"iconName":"MessageSquare","text":"مراكز اتصال مثقلة بالحجم لا مُمكَّنة بالذكاء — فترتفع التكاليف وتنخفض الجودة."},{"iconName":"Globe","text":"التسويق والمبيعات والخدمة تعمل في أنظمة منعزلة."},{"iconName":"ShoppingCart","text":"قنوات تجارة رقمية تفشل في التحويل أو الاحتفاظ."},{"iconName":"Briefcase","text":"موظفون يتنقلون بين أنظمة داخلية قديمة يوميًا."}];
const coreCaps = [{"title":"استراتيجية وتحول منصة إدارة علاقات العملاء","desc":"من إدارة علاقات عملاء قديمة إلى منصات عملاء ذكية مدمجة بالذكاء الاصطناعي.","iconName":"Users","outcomes":["خارطة طريق مرتبطة بنماذج تشغيل المبيعات والخدمة","رؤية عميل موحدة عبر جميع القنوات","سير عمل مدمج بالذكاء يسرع دورات الصفقات","استراتيجية تبني تضمن احتضان المنصة"]},{"title":"تصميم وتقديم تجربة العملاء","desc":"تحديث مراكز الاتصال بالذكاء المحادثة والخدمة الذاتية الذكية.","iconName":"MessageSquare","outcomes":["تخفيض حجم مركز الاتصال من خلال الخدمة الذاتية","حل أسرع للحالات بمساعدة الذكاء","تجربة متسقة عبر الصوت والدردشة والخدمة الذاتية"]},{"title":"أتمتة التسويق ورحلات العملاء","desc":"تصميم وأتمتة رحلات عملاء مخصصة متعددة القنوات.","iconName":"Globe","outcomes":["تفاعل مخصص عبر البريد والجوال ووسائل التواصل","تنسيق رحلة آلي مدفوع بسلوك العميل","ذكاء أداء الحملة مع إسناد مغلق الحلقة"]},{"title":"التجارة والقنوات الرقمية","desc":"بناء تجارب تجارة B2B و B2C تحول — كتالوج موحد وتوصيات ذكية.","iconName":"ShoppingCart","outcomes":["منصة تجارة موحدة عبر B2B و B2C","اكتشاف منتجات بالذكاء وتوصيات ذكية","دفع مبسط يقلل التخلي ويرفع التحويل"]},{"title":"تجربة الموظف ومكان العمل الرقمي","desc":"تصميم بوابات خدمة داخلية ومنصات معرفة تجعل العمل أسهل.","iconName":"Briefcase","outcomes":["بوابة موظف خدمة ذاتية تخفّض حجم حالات الموارد البشرية","إدارة معرفة تمكن حلولاً أسرع","وصول للجوال أولاً للفرق الميدانية"]},{"title":"عمليات وتطور تطبيقات الأعمال","desc":"تطور مستمر للمنصة — إصدارات مدارة ودعم مستخدم وتحليلات تبني.","iconName":"Heart","outcomes":["تحسين مستمر للمنصة مع دورات إصدار مدارة","تحليلات تبني تحدد فرص التدريب","دعم استباقي يقلل وقت تعطل المستخدم"]}];
const whyItems = [{"title":"متعدد المورّدين. بدون احتكار.","desc":"نصمم عبر Salesforce و Tableau و Informatica و IBM — نختار بناءً على الملاءمة."},{"title":"تسليم يركز على التبني.","desc":"نشر التقنية هو البداية فقط. كل مشروع يشمل استراتيجية تبني وتمكين مستخدم."},{"title":"سياق العميل السعودي.","desc":"إدارة بيانات عملاء متوافقة مع PDPL وتصميم تجربة بالعربية أولاً."},{"title":"شريك واحد. مسؤولية كاملة.","desc":"من استراتيجية إدارة العلاقات إلى العمليات المدارة — علاقة مسؤولة واحدة."}];
const industryItems = [{"industry":"القطاع الحكومي","apps":"بوابات خدمة المواطن، تحديث مركز اتصال ٩٣٧، إدارة علاقات عملاء حكومية."},{"industry":"القطاع المصرفي","apps":"إدارة علاقات مصرفية، منصات إدارة الثروات، التأهيل الرقمي."},{"industry":"الرعاية الصحية","apps":"منصات إشراك المريض، إدارة المواعيد، Patient 360."},{"industry":"النفط والغاز","apps":"بوابات عملاء B2B، إدارة الخدمة الميدانية، إدارة علاقات المتعاقدين."},{"industry":"التجزئة","apps":"تجارة موحدة، ولاء وتخصيص، أتمتة خدمة العملاء."},{"industry":"الاتصالات","apps":"إدارة المشتركين، رعاية متعددة القنوات، منع التوقف."}];
const insightItems = [{"tag":"استراتيجية إدارة العلاقات","title":"التبني هو العائد الحقيقي","desc":"لماذا يقاس نجاح إدارة العلاقات بالاستخدام اليومي النشط وليس بمراحل النشر."},{"tag":"السعودية","title":"ثقة العميل تحت PDPL","desc":"كيف يمكن للمؤسسات السعودية بناء تجارب عملاء مخصصة مع الامتثال الكامل."},{"tag":"التجربة","title":"مركز الاتصال المعاد تصوره","desc":"كيف يحول الوكلاء المعززون بالذكاء مراكز الاتصال من مراكز تكلفة إلى محركات نمو."}];

export default function ArabicBusinessApplicationsPage() {

  useEffect(() => { trackCapabilityPageView('Business Applications & CX'); }, []);
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
        <title>تطبيقات الأعمال وتجربة العملاء | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="تطبيقات الأعمال وتجربة العملاء — إدارة علاقات العملاء، مراكز الاتصال، أتمتة التسويق، التجارة الإلكترونية، وتجربة الموظف." />
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
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>تطبيقات الأعمال وتجربة العملاء</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من أنظمة المعاملات</span><br />
            إلى علاقات ذكية.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نصمم وننشر ونطور تطبيقات الأعمال التي تدعم علاقات العملاء وتجربة الموظف والتجارة الرقمية — مصممة خصيصاً لواقع السوق السعودي ومسارات نموه.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معظم تطبيقات الأعمال تُعتمد — ولا تُحتضن.</h2>
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
              مستعدون لتحويل تطبيقات الأعمال إلى<br />
              <span style={{ color: '#00BFFF' }}>ميزة تنافسية</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              لنناقش كيف يمكن لمنصات إدارة العلاقات وتجربة العملاء الذكية دفع النمو — مع امتثال سعودي مدمج.
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
