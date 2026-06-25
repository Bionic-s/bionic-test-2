import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Brain, BarChart3, Users, MessageSquare, Layout, Globe, Heart, ShoppingCart, Briefcase, GitBranch, Workflow, Zap, Network, Plug, RefreshCw, Activity, Shield, Eye, Fingerprint, Lock, Database, FileWarning, Server, Cloud, Container, HardDrive, Cpu, Gauge, Layers, FileText, LineChart } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#7C3AED';
const HERO_BG = `${import.meta.env.BASE_URL}images/enterprise-ai-transformation-hero.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"Salesforce","role":"الذكاء الاصطناعي المدمج في تطبيقات الأعمال","tech":"Agentforce · Einstein AI · Copilot · Prompt Builder · Model Builder"},{"name":"Google","role":"منصة الذكاء المؤسسي ووكلاء الذكاء الاصطناعي","tech":"Vertex AI · Gemini · Model Garden · Agent Builder · Document AI"},{"name":"IBM","role":"حوكمة وتنسيق الذكاء والنماذج المفتوحة","tech":"watsonx.ai · watsonx Assistant · watsonx Governance · Orchestrate · Granite"},{"name":"Intel","role":"البنية التحتية للذكاء الاصطناعي — تدريب، استدلال، وحافة","tech":"Gaudi 3 AI Accelerators · Xeon AI Boost · OpenVINO · Edge AI"}];

const blueprints = [{"title":"منصة الذكاء السيادي","industry":"حكومي","slug":"sovereign-ai-platform"},{"title":"كشف الاحتيال الفوري","industry":"بنوك","slug":"real-time-fraud-detection"},{"title":"تحول فرق العمل المعززة بالذكاء الاصطناعي","industry":"مؤسسات","slug":"agentic-workforce-transformation"}];
const bpSlugs = ["sovereign-ai-platform","real-time-fraud-detection","agentic-workforce-transformation"];

const realityItems = [{"iconName":"Users","text":"فرق عمل عالية الكفاءة تستنزف وقتها في مهام تشغيلية متكررة بدلاً من الأعمال عالية القيمة."},{"iconName":"FileText","text":"بيانات حيوية حبيسة مستندات غير مهيكلة — لا تصل إلى متخذي القرار."},{"iconName":"GitBranch","text":"مبادرات ذكاء اصطناعي متفرقة تفتقر إلى إطار مؤسسي للتوسع."},{"iconName":"Shield","text":"نشر الذكاء الاصطناعي دون حوكمة أو مسارات مراجعة أو مواءمة تنظيمية."},{"iconName":"Cpu","text":"نماذج أولية لا تصل إلى بيئة الإنتاج — فتبقى قيمتها نظرية."},{"iconName":"Layers","text":"غياب منهجية واضحة لقياس العائد على الاستثمار وتحقيق القيمة المؤسسية."}];

const coreCaps = [{"title":"استراتيجية وتحول الذكاء الاصطناعي","desc":"تقييم الجاهزية المؤسسية، تحديد أولويات حالات الاستخدام، وخارطة طريق تنفيذ لمدة ١٢ شهراً — مرتبطة مباشرة باستراتيجية الأعمال.","iconName":"Layers","outcomes":["خارطة طريق ذكاء اصطناعي مؤسسي مرتبطة بأهداف الأعمال","محفظة حالات استخدام مرتبة حسب التأثير والجدوى","جدوى استثمارية بمؤشرات أداء قابلة للقياس","إطار حوكمة متوافق مع المتطلبات التنظيمية السعودية"]},{"title":"فرق العمل المعززة بالذكاء الاصطناعي","desc":"وكلاء ذكاء اصطناعي يعملون جنباً إلى جنب مع الفرق البشرية — ضمن حوكمة بإشراف بشري كامل.","iconName":"Users","outcomes":["تخفيض الجهد اليدوي عبر سير العمل التشغيلي","اتخاذ قرارات متسارع بمساعدة الذكاء الاصطناعي","قدرة تشغيلية قابلة للتوسع دون زيادة متناسبة في التكاليف","تحسين مستمر من خلال تعلم الوكيل والتغذية الراجعة"]},{"title":"الأتمتة الذكية","desc":"أتمتة عمليات معقدة عبر الإدارات بذكاء اصطناعي يفهم السياق — تتجاوز أتمتة العمليات الروبوتية التقليدية إلى عمليات ذكية.","iconName":"Cpu","outcomes":["تسريع وقت المعالجة في سير العمل عالي الحجم","دقة محسنة في العمليات كثيفة القرار","خفض ملموس للتكاليف في العمليات اليدوية","رؤية على مستوى المؤسسة عبر ذكاء العمليات المتكامل"]},{"title":"ذكاء المستندات","desc":"تحويل المستندات المؤسسية غير المهيكلة إلى بيانات مهيكلة قابلة للتنفيذ — مدمجة مباشرة في سير العمل التشغيلي.","iconName":"FileText","outcomes":["معالجة مستندات متسارعة عبر المشتريات والامتثال","دقة أعلى في استخراج البيانات وتصنيفها","دورات مشتريات وامتثال وإدارة حالات أسرع","تكامل مباشر مع أنظمة تخطيط الموارد والتشغيل"]},{"title":"حوكمة الذكاء الاصطناعي وتعزيز الثقة الرقمية","desc":"حوكمة مدمجة من المعمارية إلى العمليات — كشف التحيز، قابلية التفسير، مسارات المراجعة، والضوابط التنظيمية.","iconName":"Shield","outcomes":["مسار تدقيق شامل عبر قرارات الذكاء وتغييرات النموذج","كشف التحيز واختبار العدالة عبر الأبعاد الديموغرافية","مواءمة تنظيمية مع SDAIA و NCA و PDPL","سجل نماذج وتحكم بالإصدارات عبر محفظة الذكاء"]},{"title":"هندسة منصات الذكاء الاصطناعي وعمليات النماذج","desc":"الأساس التشغيلي للذكاء الاصطناعي على نطاق المؤسسة — خطوط أنابيب آلية، مراقبة مستمرة للنماذج، كشف الانحراف، وإعادة تدريب آلية.","iconName":"GitBranch","outcomes":["وقت وصول متسارع للإنتاج لحالات الاستخدام الجديدة","مراقبة آلية مع تنبيهات استباقية للانحراف والأداء","خطوط MLOps موحدة عبر فرق علوم البيانات","تخفيض المخاطر التشغيلية من خلال التحقق المستمر"]}];

const whyItems = [{"title":"متعدد المورّدين. بدون احتكار.","desc":"نصمم عبر Salesforce و Google Cloud و IBM و Intel — نختار المنصة المناسبة لكل قدرة بناءً على الملاءمة وليس الولاء."},{"title":"الإنتاج أولاً. ليس التجارب.","desc":"نقيس نجاحنا بنتائج فعلية في البيئات الإنتاجية — مع أسس MLOps والحوكمة المطلوبة للتشغيل المستدام."},{"title":"مصمم بما يتوافق مع البيئة التنظيمية في المملكة منذ اليوم الأول.","desc":"متطلبات سدايا والهيئة الوطنية للأمن السيبراني ونظام حماية البيانات الشخصية مدمجة في معماريتنا من اليوم الأول."},{"title":"شريك واحد يتحمل المسؤولية الكاملة.","desc":"من تقييم الجاهزية إلى هندسة المنصات إلى العمليات المدارة — علاقة مسؤولة واحدة."}];

const industryItems = [{"industry":"القطاع الحكومي","apps":"ذكاء مشتريات اعتماد، أتمتة خدمة المواطن، معالجة مستندات على المستوى الوطني."},{"industry":"القطاع المصرفي","apps":"ذكاء مكافحة غسل الأموال والاحتيال، نمذجة مخاطر الائتمان، أتمتة التقارير التنظيمية."},{"industry":"الرعاية الصحية","apps":"تشخيص التصوير الطبي، ذكاء التوثيق السريري، تحسين تدفق المرضى."},{"industry":"النفط والغاز","apps":"الصيانة التنبؤية عبر الأصول البعيدة، امتثال الصحة والسلامة، ذكاء بيانات OT."},{"industry":"الصناعة","apps":"فحص الجودة البصري، تحسين إنتاجية التصنيع، تنسيق سلسلة الإمداد الذكية."},{"industry":"الاتصالات","apps":"ذكاء عمليات الشبكة، ذكاء تجربة العميل، توزيع الخدمة الميدانية الذكي."}];

const insightItems = [{"tag":"استراتيجية الذكاء","title":"من التجارب إلى الإنتاج","desc":"لماذا تحدد الحوكمة وهندسة المنصات ما إذا كان الذكاء المؤسسي يقدم قيمة مستدامة."},{"tag":"السعودية","title":"حوكمة الذكاء تحت SDAIA","desc":"كيف يمكن للمؤسسات السعودية مواءمة نشر الذكاء مع أطر أخلاقيات وحماية البيانات الناشئة."},{"tag":"العمليات","title":"ضرورة MLOps","desc":"دون مسارات أتمتة ومراقبة مستمرة وكشف الانحرافات، يتحول الذكاء الاصطناعي في الإنتاج من أصل إلى عبء."}];

export default function ArabicAISolutionPage() {

  useEffect(() => { trackCapabilityPageView('Enterprise AI & Automation'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const capsWithIcons = coreCaps.map(c => ({ ...c, icon: iconMap[c.iconName] || iconMap['Brain'] }));

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        {/* ═══ 1. HERO ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
            className="relative z-10 pt-40 pb-32 text-center px-4"
          >
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10 flex-row-reverse"
            style={{ borderColor: '#7C3AED40', backgroundColor: '#7C3AED08' }}>
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>الذكاء الاصطناعي المؤسسي والأتمتة</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من مرحلة التجارب</span><br />
            إلى التبني المؤسسي على نطاق واسع.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نصمم وننشر ذكاءً اصطناعياً مؤسسياً يحقق قيمة فعلية للأعمال — من النماذج الأولية إلى الحلول التشغيلية، محكومة بأطر واضحة، ومقاسة بنتائج حقيقية، ومتوافقة مع البيئة التنظيمية في المملكة.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معظم مبادرات الذكاء الاصطناعي لا تتجاوز مرحلة إثبات المفهوم.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#7C3AED]30" style={{ flexDirection: 'row-reverse' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#7C3AED15', color: '#7C3AED' }}>{iconMap[item.iconName]}</div>
                <p className="text-text-primary text-sm leading-relaxed text-right">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. CORE CAPABILITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>كيف نحقق ذلك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">القدرات الأساسية</h2>
          <p className="text-text-muted text-base mb-10">ست قدرات متكاملة. كل قدرة مصممة لتحقيق نتيجة أعمال محددة وقابلة للقياس.</p>

          <div className="space-y-4">
            {capsWithIcons.map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#7C3AED]1A">
                <div className="flex flex-col md:flex-row md:items-start gap-5" style={{ flexDirection: 'row-reverse' }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#7C3AED12', color: '#7C3AED' }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o: string, j: number) => (
                        <div key={j} className="flex items-start gap-2 flex-row-reverse">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#7C3AED' }} />
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
            <Link to="/ar/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#7C3AED]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center mb-3" style={{ color: '#7C3AED' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#7C3AED] transition-colors">الاستشارات والتخطيط الاستراتيجي</h3>
              <p className="text-tiny text-text-muted">تقييم الجاهزية للذكاء الاصطناعي · استشارات الامتثال والحوكمة · الاستراتيجية وخارطة الطريق</p>
            </Link>
            <Link to="/ar/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#7C3AED]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center mb-3" style={{ color: '#7C3AED' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#7C3AED] transition-colors">التنفيذ والتسليم</h3>
              <p className="text-tiny text-text-muted">نشر الذكاء الاصطناعي والأتمتة · تسليم المنصات والتطبيقات · خط أنابيب MLOps</p>
            </Link>
            <Link to="/ar/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#7C3AED]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center mb-3" style={{ color: '#7C3AED' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#7C3AED] transition-colors">العمليات المدارة</h3>
              <p className="text-tiny text-text-muted">عمليات المنصات ٢٤×٧ · مركز العمليات الأمنية كخدمة · ·  مستويات</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. WHY BIONIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12"
            style={{ background: 'linear-gradient(135deg, #7C3AED08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #7C3AED1A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يحول القدرات إلى نتائج.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item, i) => (
                <div key={i} className="flex gap-3 flex-row-reverse">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#7C3AED' }} />
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
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#7C3AED]1A">
                <div className="flex items-center gap-4 mb-3 flex-row-reverse">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#7C3AED99', textAlign: 'right' }}>{p.role}</span>
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
            {industryItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-[#7C3AED]1A">
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
            {insightItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#7C3AED]12">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#7C3AED12', color: '#7C3AED' }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: '#7C3AED99' }}>
                  <ExternalLink className="w-3 h-3" />
                  اقرأ الرؤية
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
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#7C3AED]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#7C3AED]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#7C3AED] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#7C3AED]/40 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints" className="inline-flex items-center gap-1.5 text-[#7C3AED] text-sm font-medium hover:underline">
              استعرض كافة المخططات ذات الصلة <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
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
            style={{ background: 'linear-gradient(135deg, #7C3AED0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #7C3AED1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              مستعدون لنقل الذكاء الاصطناعي من<br />
              <span style={{ color: '#7C3AED' }}>التجريب إلى الإنتاج المؤسسي</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              لنناقش كيف يحقق الذكاء الاصطناعي المؤسسي نتائج أعمال قابلة للقياس — مع حوكمة مدمجة ومسار واضح للإنتاج.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: '#7C3AED', boxShadow: '0 8px 24px #7C3AED20' }}>
                احجز جلسة استراتيجية
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/blueprints"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300">
                استعرض المخططات المرجعية
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
