import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Brain, BarChart3, Users, MessageSquare, Layout, Globe, Heart, ShoppingCart, Briefcase, GitBranch, Workflow, Zap, Network, Plug, RefreshCw, Activity, Shield, Eye, Fingerprint, Lock, Database, FileWarning, Server, Cloud, Container, HardDrive, Cpu, Gauge, Layers, FileText, LineChart } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#06B6D4';
const HERO_BG = `${import.meta.env.BASE_URL}images/data-analytics.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"Salesforce","role":"الذكاء التنفيذية وذكاء الأعمال","tech":"Tableau · Einstein Analytics · CRM Analytics · Data Cloud"},{"name":"Informatica","role":"إدارة البيانات الرئيسية والحوكمة","tech":"MDM · جودة البيانات · كتالوج البيانات · تتبع البيانات · تكامل البيانات"},{"name":"IBM","role":"نسيج البيانات ومنصات جاهزة للذكاء","tech":"watsonx.data · DataStage · Cloud Pak for Data · Db2 · Knowledge Catalog"},{"name":"Intel","role":"بنية البيانات التحتية","tech":"Xeon Scalable · Optane · مسرعات التحليلات · معالجة البيانات الطرفية"},{"name":"Google","role":"منصة البيانات والتحليلات على نطاق واسع","tech":"BigQuery · Looker · Dataflow · Dataproc · Vertex AI"},{"name":"Tableau","role":"ذكاء أعمال خدمة ذاتية وتحليلات بصرية","tech":"Tableau Cloud · تحليلات مضمنة · Data Stories · Pulse"}];

const blueprints = [{"title":"نسيج البيانات بين الوزارات","industry":"حكومي","slug":"inter-ministry-data-fabric"},{"title":"Customer 360 والمشاركة الذكية","industry":"بنوك","slug":"customer-360-intelligent-engagement"},{"title":"الذكاء السريري والذكاء الاصطناعي الطبي","industry":"رعاية صحية","slug":"clinical-intelligence-medical-ai"}];
const bpSlugs = ["inter-ministry-data-fabric","customer-360-intelligent-engagement","clinical-intelligence-medical-ai"];

const realityItems = [{"iconName":"Database","text":"بيانات متناثرة عبر الصوامع — لا مصدر وحيد للحقيقة."},{"iconName":"Server","text":"منصات قديمة لا تستطيع دعم أحمال الذكاء الاصطناعي الفورية."},{"iconName":"Eye","text":"تنفيذيون يتخذون قرارات على الحدس وليس الذكاء."},{"iconName":"GitBranch","text":"بيانات رئيسية غير متسقة عبر الأنظمة المؤسسية."},{"iconName":"LineChart","text":"تحليلات تنتج تقارير — وليس قرارات."},{"iconName":"Shield","text":"تعرض لامتثال البيانات تحت PDPL والتشريعات القطاعية."}];

const coreCaps = [{"title":"استراتيجية البيانات وتحديث المنصات","desc":"تقييم نضج البيانات، تصميم المعمارية المستهدفة، والترحيل من مستودعات قديمة إلى منصات جاهزة للذكاء.","iconName":"Database","outcomes":["خط أساس لنضج البيانات مع خارطة طريق تحديث","معمارية مستهدفة مصممة للذكاء وأحمال العمل الفورية","استراتيجية ترحيل مع تخفيف المخاطر","اختيار منصة مدفوع بالملاءمة وليس الحوافز"]},{"title":"هندسة بيانات جاهزة للذكاء","desc":"بناء خطوط الأنابيب ومخازن الميزات وأسس البيانات التي تغذي الذكاء المؤسسي.","iconName":"GitBranch","outcomes":["خطوط بيانات آلية من المصدر إلى استهلاك الذكاء","مخازن ميزات موحدة لنماذج تعلم الآلة","إدخال فوري ودفعي يدعم الاحتياجات التشغيلية والتحليلية","أطر جودة بيانات مدمجة في كل مرحلة"]},{"title":"الذكاء التنفيذية ولوحات المعلومات","desc":"تصميم أطر مؤشرات الأداء ولوحات فورية تحول البيانات الخام إلى ذكاء قرار.","iconName":"BarChart3","outcomes":["لوحات تنفيذية مرتبطة بالأهداف الاستراتيجية","مراقبة مؤشرات أداء فورية مع تعمق للتفاصيل","تحليلات خدمة ذاتية تمكّن فرق الأعمال","ذكاء قرار يحل محل الحدس"]},{"title":"إدارة البيانات الرئيسية والحوكمة","desc":"إنشاء مصدر وحيد للحقيقة عبر المؤسسة.","iconName":"Server","outcomes":["بيانات رئيسية موحدة عبر جميع الأنظمة","مراقبة آلية لجودة البيانات","تتبع كامل للبيانات للتدقيق والامتثال","جهد تسوية منخفض عبر المالية وسلسلة الإمداد"]},{"title":"التحليلات المتقدمة والذكاء التنبؤي","desc":"تجاوز التقارير الوصفية إلى التحليلات التنبؤية والتوجيهية.","iconName":"LineChart","outcomes":["نماذج تنبؤية للطلب والمخاطر والتنبؤ التشغيلي","نمذجة سيناريوهات للقرارات الاستراتيجية","توصيات توجيهية مدمجة في سير العمل","تحسين مستمر للنماذج"]},{"title":"سيادة البيانات والامتثال","desc":"تصميم معماريات بيانات تلبي متطلبات إقامة البيانات السعودية.","iconName":"Shield","outcomes":["معمارية إقامة بيانات متوافقة مع المتطلبات السيادية","امتثال PDPL مدمج في جمع وتخزين ومعالجة البيانات","حوكمة نقل البيانات عبر الحدود","منصات بيانات جاهزة للتدقيق"]}];

const whyItems = [{"title":"متعدد المورّدين. بدون احتكار.","desc":"نصمم عبر Salesforce و Informatica و IBM و Intel — نختار المنصة المناسبة."},{"title":"جاهز للذكاء من اليوم الأول.","desc":"كل منصة بيانات نبنيها مهندسة لتشغيل أحمال الذكاء الاصطناعي."},{"title":"سيادة البيانات السعودية. مصممة.","desc":"متطلبات PDPL و NCA مدمجة في معماريتنا من اليوم الأول."},{"title":"شريك واحد. مساءلة كاملة.","desc":"من استراتيجية البيانات إلى العمليات المدارة — علاقة مسؤولة واحدة."}];

const industryItems = [{"industry":"القطاع الحكومي","apps":"منصات بيانات وطنية، برامج بيانات مفتوحة، تحليلات خدمة المواطن."},{"industry":"القطاع المصرفي","apps":"تحليلات المخاطر، أتمتة التقارير التنظيمية، Customer 360، ذكاء الاحتيال."},{"industry":"الرعاية الصحية","apps":"توحيد البيانات السريرية، تحليلات صحة السكان، ذكاء الأداء التشغيلي."},{"industry":"النفط والغاز","apps":"منصات بيانات OT/IoT، تحليلات الصيانة التنبؤية، ذكاء تداول الطاقة."},{"industry":"الصناعة","apps":"رؤية سلسلة الإمداد، تحليلات جودة الإنتاج، التنبؤ بالطلب."},{"industry":"الاتصالات","apps":"تحليلات العملاء، ذكاء أداء الشبكة، التنبؤ بالتوقف."}];

const insightItems = [{"tag":"استراتيجية البيانات","title":"أساس البيانات الجاهز للذكاء","desc":"لماذا المؤسسات التي تستثمر في تحديث منصة البيانات قبل نشر الذكاء تحقق وقت وصول أسرع للقيمة."},{"tag":"السعودية","title":"PDPL وضرورة سيادة البيانات","desc":"كيف يمكن للمؤسسات السعودية بناء معماريات بيانات متوافقة تلبي متطلبات الإقامة."},{"tag":"القيادة","title":"من لوحات المعلومات إلى ذكاء القرار","desc":"التحول من التقارير الوصفية إلى ذكاء القرار المدعوم بالذكاء الاصطناعي."}];

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
            style={{ borderColor: '#06B6D440', backgroundColor: '#06B6D408' }}>
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>البيانات والتحليلات والذكاء</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من البيانات المتجزئة</span><br />
            إلى الذكاء الموحدة.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نصمم منصات بيانات جاهزة للذكاء الاصطناعي وأنظمة استخبارات تنفيذية وأسس بيانات محكومة — مبنية للواقع التنظيمي والتشغيلي في المملكة.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">المؤسسات غنية بالبيانات لكنها فقيرة بالرؤى.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#06B6D4]30" style={{ flexDirection: 'row-reverse' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#06B6D415', color: '#06B6D4' }}>{iconMap[item.iconName]}</div>
                <p className="text-text-primary text-sm leading-relaxed text-right">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. CORE CAPABILITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">القدرات الأساسية</h2>
          <p className="text-text-muted text-base mb-10">ست قدرات. كل منها مصمم حول نتيجة أعمال.</p>

          <div className="space-y-4">
            {capsWithIcons.map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#06B6D4]1A">
                <div className="flex flex-col md:flex-row md:items-start gap-5" style={{ flexDirection: 'row-reverse' }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#06B6D412', color: '#06B6D4' }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o: string, j: number) => (
                        <div key={j} className="flex items-start gap-2 flex-row-reverse">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#06B6D4' }} />
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
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تنفيذ متكاملة — عبر جميع القدرات.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/ar/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#06B6D4]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center mb-3" style={{ color: '#06B6D4' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#06B6D4] transition-colors">الاستشارات والتخطيط</h3>
              <p className="text-tiny text-text-muted">تقييم الجاهزية للذكاء الاصطناعي · استشارات الامتثال والحوكمة · الاستراتيجية وخارطة الطريق</p>
            </Link>
            <Link to="/ar/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#06B6D4]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center mb-3" style={{ color: '#06B6D4' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#06B6D4] transition-colors">التنفيذ والتسليم</h3>
              <p className="text-tiny text-text-muted">نشر الذكاء الاصطناعي والأتمتة · تسليم المنصات والتطبيقات · خط أنابيب MLOps</p>
            </Link>
            <Link to="/ar/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#06B6D4]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center mb-3" style={{ color: '#06B6D4' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#06B6D4] transition-colors">العمليات المدارة</h3>
              <p className="text-tiny text-text-muted">عمليات المنصات 24×7 · مركز العمليات الأمنية كخدمة · 3 مستويات</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. WHY BIONIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12"
            style={{ background: 'linear-gradient(135deg, #06B6D408, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #06B6D41A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يحول القدرات إلى نتائج.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item, i) => (
                <div key={i} className="flex gap-3 flex-row-reverse">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#06B6D4' }} />
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#06B6D4]1A">
                <div className="flex items-center gap-4 mb-3 flex-row-reverse">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#06B6D499', textAlign: 'right' }}>{p.role}</span>
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-[#06B6D4]1A">
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#06B6D4]12">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#06B6D412', color: '#06B6D4' }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: '#06B6D499' }}>
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
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#06B6D4]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#06B6D4]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#06B6D4] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#06B6D4]/40 group-hover:text-[#06B6D4] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints" className="inline-flex items-center gap-1.5 text-[#06B6D4] text-sm font-medium hover:underline">
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
            style={{ background: 'linear-gradient(135deg, #06B6D40D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #06B6D41A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              مستعدون لتحويل البيانات المتجزئة إلى<br />
              <span style={{ color: '#06B6D4' }}>استخبارات موحدة</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              لنناقش كيف يمكن لمنصة بيانات جاهزة للذكاء أن تدعم القرارات التنفيذية — مع سيادة وحوكمة مدمجة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: '#06B6D4', boxShadow: '0 8px 24px #06B6D420' }}>
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
