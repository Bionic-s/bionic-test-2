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
const HERO_BG = `${import.meta.env.BASE_URL}images/data-analytics.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"Salesforce","role":"الذكاء التنفيذي وذكاء الأعمال","tech":"Tableau · Einstein Analytics · CRM Analytics · Data Cloud"},{"name":"Informatica","role":"إدارة البيانات الرئيسية والحوكمة","tech":"MDM · جودة البيانات · كتالوج البيانات · تتبع البيانات · تكامل البيانات"},{"name":"IBM","role":"نسيج البيانات ومنصات بيانات مهيأة لتشغيل مبادرات الذكاء الاصطناعي","tech":"watsonx.data · DataStage · Cloud Pak for Data · Db2 · Knowledge Catalog"},{"name":"Intel","role":"بنية البيانات التحتية","tech":"Xeon Scalable · Optane · مسرعات التحليلات · معالجة البيانات الطرفية"},{"name":"Google","role":"منصة البيانات والتحليلات على نطاق واسع","tech":"BigQuery · Looker · Dataflow · Dataproc · Vertex AI"},{"name":"Tableau","role":"ذكاء أعمال خدمة ذاتية وتحليلات بصرية","tech":"Tableau Cloud · تحليلات مضمنة · Data Stories · Pulse"}];

const blueprints = [{"title":"نسيج البيانات بين الوزارات","industry":"حكومي","slug":"inter-ministry-data-fabric"},{"title":"Customer ٣٦٠ والتفاعل الذكي","industry":"بنوك","slug":"customer-360-intelligent-engagement"},{"title":"الذكاء السريري والذكاء الاصطناعي الطبي","industry":"رعاية صحية","slug":"clinical-intelligence-medical-ai"}];
const bpSlugs = ["inter-ministry-data-fabric","customer-360-intelligent-engagement","clinical-intelligence-medical-ai"];

const realityItems = [{"iconName":"Database","text":"البيانات موزعة بين أنظمة متعددة دون مرجعية موحدة وموثوقة — والقرارات تُبنى على تقديرات لا على حقائق."},{"iconName":"Server","text":"الأنظمة القديمة تعجز عن دعم أحمال الذكاء الاصطناعي والتحليلات الفورية."},{"iconName":"Eye","text":"تُتخذ قرارات استراتيجية اعتماداً على الخبرة الشخصية لا على البيانات — فتفوت المؤسسة فرصاً وتحمل مخاطر."},{"iconName":"GitBranch","text":"بيانات رئيسية غير متسقة عبر الأنظمة المؤسسية."},{"iconName":"LineChart","text":"مخرجات تحليلية وفيرة دون أثر واضح على اتخاذ القرار."},{"iconName":"Shield","text":"مخاطر امتثال البيانات في ظل PDPL والتشريعات القطاعية."}];

const coreCaps = [{"title":"استراتيجية البيانات وتحديث المنصات","desc":"تقييم نضج البيانات، تصميم المعمارية المستهدفة، والترحيل من مستودعات قديمة إلى منصات بيانات مهيأة لتشغيل مبادرات الذكاء الاصطناعي.","iconName":"Database","outcomes":["خط أساس لنضج البيانات مع خارطة طريق للتحديث","معمارية مستهدفة مصممة للذكاء الاصطناعي وأحمال العمل الفورية","استراتيجية ترحيل مع تخفيف المخاطر","اختيار منصة قائم على الملاءمة لا على الحوافز"]},{"title":"هندسة بيانات مهيأة للذكاء الاصطناعي","desc":"بناء مسارات البيانات ومستودعات الخصائص وأسس البيانات التي تغذي الذكاء المؤسسي.","iconName":"GitBranch","outcomes":["خطوط بيانات آلية من المصدر إلى استهلاك الذكاء","مستودعات خصائص موحدة لنماذج تعلم الآلة","إدخال فوري ودفعي يلبي الاحتياجات التشغيلية والتحليلية","أطر جودة بيانات مدمجة في كل مرحلة"]},{"title":"لوحات المعلومات التنفيذية وتحليلات الأعمال","desc":"تصميم أطر مؤشرات الأداء ولوحات فورية تحويل البيانات إلى رؤى تدعم القرار التنفيذي.","iconName":"BarChart3","outcomes":["لوحات تنفيذية مرتبطة بالأهداف الاستراتيجية","مراقبة مؤشرات أداء فورية مع تعمق للتفاصيل","تحليلات خدمة ذاتية تمكّن فرق الأعمال","تمكين القرارات بالبيانات والتحليلات بدلاً من الاعتماد على التقديرات الشخصية"]},{"title":"إدارة البيانات الرئيسية والحوكمة","desc":"إنشاء مرجع موحد للبيانات عبر المؤسسة.","iconName":"Server","outcomes":["بيانات رئيسية موحدة عبر جميع الأنظمة","مراقبة آلية لجودة البيانات","تتبع كامل للبيانات للتدقيق والامتثال","تخفيض جهد التسوية عبر المالية وسلسلة الإمداد"]},{"title":"التحليلات المتقدمة والذكاء التنبؤي","desc":"الارتقاء من التقارير الوصفية إلى التحليلات التنبؤية والتوجيهية.","iconName":"LineChart","outcomes":["نماذج تنبؤية للطلب والمخاطر والتنبؤ التشغيلي","نمذجة سيناريوهات للقرارات الاستراتيجية","توصيات توجيهية مدمجة في سير العمل","تحسين مستمر للنماذج"]},{"title":"سيادة البيانات والامتثال","desc":"تصميم معماريات بيانات تلبي متطلبات إقامة البيانات السعودية.","iconName":"Shield","outcomes":["معمارية إقامة بيانات متوافقة مع المتطلبات السيادية","امتثال PDPL مدمج في جمع وتخزين ومعالجة البيانات","حوكمة نقل البيانات عبر الحدود","منصات بيانات جاهزة للتدقيق"]}];

const whyItems = [{"title":"متعدد المورّدين. بدون احتكار.","desc":"نصمم عبر Salesforce و Informatica و IBM و Intel — نختار المنصة المناسبة."},{"title":"مُصمم للذكاء الاصطناعي منذ البداية.","desc":"كل منصة بيانات نبنيها مهندسة لتشغيل أحمال الذكاء الاصطناعي."},{"title":"سيادة البيانات السعودية. مصممة.","desc":"متطلبات PDPL و NCA مدمجة في معماريتنا من اليوم الأول."},{"title":"شريك واحد. مسؤولية كاملة.","desc":"من استراتيجية البيانات إلى العمليات المدارة — علاقة مسؤولة واحدة."}];

const industryItems = [{"industry":"القطاع الحكومي","apps":"منصات بيانات وطنية وبرامج حوكمة البيانات، تحليلات خدمة المواطن."},{"industry":"القطاع المصرفي","apps":"تحليلات المخاطر، أتمتة التقارير التنظيمية، Customer 360، ذكاء الاحتيال."},{"industry":"الرعاية الصحية","apps":"توحيد البيانات السريرية، تحليلات صحة السكان، ذكاء الأداء التشغيلي."},{"industry":"النفط والغاز","apps":"منصات بيانات OT/IoT، تحليلات الصيانة التنبؤية، ذكاء تداول الطاقة."},{"industry":"الصناعة","apps":"رؤية سلسلة الإمداد، تحليلات جودة الإنتاج، التنبؤ بالطلب."},{"industry":"الاتصالات","apps":"تحليلات العملاء، ذكاء أداء الشبكة، التنبؤ بتسرّب العملاء."}];

const insightItems = [{"tag":"استراتيجية البيانات","title":"أساس البيانات المهيأ للذكاء الاصطناعي","desc":"لماذا المؤسسات التي تستثمر في تحديث منصة البيانات قبل نشر الذكاء الاصطناعي تحقق وقت وصول أسرع للقيمة."},{"tag":"السعودية","title":"PDPL وضرورة سيادة البيانات","desc":"كيف يمكن للمؤسسات السعودية بناء معماريات بيانات متوافقة تلبي متطلبات الإقامة."},{"tag":"القيادة","title":"من التقارير ولوحات المؤشرات إلى قرارات مدعومة بالبيانات","desc":"الانتقال من التحليلات الوصفية إلى ذكاء قرارات مدعوم بالذكاء الاصطناعي."}];

export default function ArabicDataAnalyticsPage() {

  useEffect(() => { trackCapabilityPageView('Data, Analytics & Intelligence'); }, []);
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
    <div
       className="min-h-screen bg-bg-primary" dir="rtl">
      <Helmet>
        <title>البيانات والتحليلات والذكاء | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="البيانات والتحليلات والذكاء — منصات بيانات جاهزة للذكاء الاصطناعي، لوحات معلومات تنفيذية، إدارة البيانات الرئيسية، والتحليلات المتقدمة." />
      </Helmet>

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
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10 flex-row-reverse"
            style={{ borderColor: '#00BFFF40', backgroundColor: '#00BFFF08' }}>
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>البيانات والتحليلات والذكاء</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من البيانات المتفرقة</span><br />
            إلى الذكاء المؤسسي.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نصمم منصات بيانات مهيأة للذكاء الاصطناعي وأنظمة ذكاء تنفيذي وأسس بيانات محكومة — مبنية للواقع التنظيمي والتشغيلي في المملكة، ومصممة لتراكم القيمة المؤسسية عبر الزمن.
          </p>
          </motion.div>
        </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تمتلك المؤسسات كميات هائلة من البيانات لكنها تفتقر إلى الرؤى القابلة للتنفيذ.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item, i) => (
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
            {capsWithIcons.map((cap, i) => (
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
            <Link to="/ar/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3" style={{ color: '#00BFFF' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">الاستشارات والتخطيط</h3>
              <p className="text-tiny text-text-muted">تقييم الجاهزية للذكاء الاصطناعي · استشارات الامتثال والحوكمة · الاستراتيجية وخارطة الطريق</p>
            </Link>
            <Link to="/ar/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3" style={{ color: '#00BFFF' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">التنفيذ والتسليم</h3>
              <p className="text-tiny text-text-muted">نشر الذكاء الاصطناعي والأتمتة · تسليم المنصات والتطبيقات · مسار MLOps</p>
            </Link>
            <Link to="/ar/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3" style={{ color: '#00BFFF' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">العمليات المدارة</h3>
              <p className="text-tiny text-text-muted">عمليات المنصات على مدار الساعة · مركز العمليات الأمنية كخدمة · مستويات خدمة متدرّجة</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. WHY BIONIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يحول القدرات إلى نتائج.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item, i) => (
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
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#00BFFF]1A">
                <div className="flex items-center gap-4 mb-3 flex-row-reverse">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99', textAlign: 'right' }}>{p.role}</span>
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-[#00BFFF]1A">
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF]12">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#00BFFF12', color: '#00BFFF' }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: '#00BFFF99' }}>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية تطبيقية لهذه القدرة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              استعرض كافة المخططات ذات الصلة <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 8. CTA ═══ */}
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              مستعدون لتحويل تشتت البيانات إلى<br />
              <span style={{ color: '#00BFFF' }}>ذكاء موحد</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              لنناقش كيف يمكن لمنصة بيانات مهيأة للذكاء الاصطناعي أن تدعم القرارات التنفيذية — مع سيادة وحوكمة مدمجة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: '#00BFFF', boxShadow: '0 8px 24px #00BFFF20' }}>
                تواصل معنا
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
