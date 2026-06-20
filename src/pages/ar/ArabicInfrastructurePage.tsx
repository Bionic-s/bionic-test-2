import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Brain, BarChart3, Users, MessageSquare, Layout, Globe, Heart, ShoppingCart, Briefcase, GitBranch, Workflow, Zap, Network, Plug, RefreshCw, Activity, Shield, Eye, Fingerprint, Lock, Database, FileWarning, Server, Cloud, Container, HardDrive, Cpu, Gauge, Layers, FileText, LineChart } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#2563EB';
const HERO_BG = `${import.meta.env.BASE_URL}images/it-infrastructure.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"Dell Technologies","role":"البنية التحتية المؤسسية","tech":"PowerEdge · PowerStore · PowerMax · VxRail · APEX · PowerFlex"},{"name":"IBM","role":"التخزين وبنية الذكاء والسحابة الهجينة","tech":"FlashSystem · Power · watsonx · Cloud Pak · Storage Defender"},{"name":"Platform9","role":"منصة سحابة خاصة وهجينة","tech":"Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation"},{"name":"Intel","role":"الحوسبة والذكاء والبنية الطرفية","tech":"Xeon Scalable · Gaudi 3 AI · Edge AI · Confidential Computing · Optane"},{"name":"Red Hat","role":"بنية تحتية مفتوحة المصدر وأتمتة","tech":"OpenShift · Ansible Automation · RHEL · Satellite"}];
const blueprints = [{"title":"منصة الذكاء السيادي","industry":"حكومي","slug":"sovereign-ai-platform"},{"title":"بنية تحتية مصرفية متوافقة مع البنك المركزي","industry":"بنوك","slug":"sama-compliant-banking-infra"},{"title":"Zero Trust المؤسسي","industry":"مؤسسات","slug":"enterprise-zero-trust"}];
const bpSlugs = ["sovereign-ai-platform","sama-compliant-banking-infra","enterprise-zero-trust"];

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

const realityItems = [{"iconName":"Server","text":"مراكز بيانات قديمة تستهلك رأس المال بدون تقديم مرونة."},{"iconName":"Globe","text":"تبني السحابة متوقف بسبب متطلبات السيادة وإقامة البيانات."},{"iconName":"Cloud","text":"بيئات هجينة تدار في صوامع — لا نموذج تشغيل موحد."},{"iconName":"Activity","text":"عمليات بنية تحتية يدوية على نطاق يتطلب الأتمتة."},{"iconName":"Container","text":"لا طبقة منصة بين البنية التحتية وفرق التطوير."},{"iconName":"HardDrive","text":"دورات شراء بنية تحتية منفصلة عن سرعة الأعمال."}];
const coreCaps = [{"title":"استراتيجية وتحديث السحابة","desc":"تقييم محافظ أحمال العمل وتحديد الحالة المستهدفة وبناء خارطة طريق تحديث.","iconName":"Cloud","outcomes":["استراتيجية وضع أحمال العمل: سحابة، هجين، سيادي، محلي","خارطة طريق تحديث مرتبة حسب التأثير","نموذج تكلفة إجمالية مقارن","استراتيجية ترحيل مع تخفيف المخاطر"]},{"title":"البنية التحتية السيادية","desc":"تصميم ونشر بنية تحتية تلبي متطلبات السيادة السعودية.","iconName":"Server","outcomes":["بنية تحتية متوافقة مع متطلبات إقامة البيانات","قدرة نشر معزولة هوائيًا","معمارية أمنية من فئة البيانات المصنفة","قدرة سحابة وطنية"]},{"title":"بنية الذكاء التحتية","desc":"نشر مجمعات GPU وبنية تدريب واستدلال ذكاء على نطاق المؤسسة.","iconName":"Cpu","outcomes":["مجمعات GPU مُحسَّنة للتدريب والاستدلال","بنية ذكاء جاهزة لأحمال العمل السيادية","تكامل مع خطوط MLOps","بنية حوسبة عالية الأداء"]},{"title":"منصة السحابة الهجينة","desc":"بناء طبقة منصة موحدة عبر البيئات المحلية والخاصة والعامة.","iconName":"Container","outcomes":["طبقة Kubernetes موحدة عبر البيئات","قدرات خدمة ذاتية للمطورين","عمليات موحدة عبر المواقع","حوكمة تكاليف عبر السحب"]},{"title":"تحديث التخزين والبيانات","desc":"تحديث البنية التحتية للتخزين لأحمال العمل الحديثة.","iconName":"HardDrive","outcomes":["منصة تخزين موحدة عبر الكتل والملفات والكائنات","تحسين أداء لأحمال الذكاء","حماية بيانات مع قدرة تعافٍ سيبراني","تحسين تكاليف التخزين"]},{"title":"عمليات وأتمتة البنية التحتية","desc":"أتمتة عمليات البنية التحتية من التزويد إلى التقاعد.","iconName":"Activity","outcomes":["تزويد بنية تحتية آلي — دقائق وليس أسابيع","إدارة دورة حياة آلية","مراقبة وتحليلات أداء","تكامل مع أدوات التطوير وسير العمل"]}];
const whyItems = [{"title":"متعدد المزودين. بدون احتكار.","desc":"نصمم عبر Dell و IBM و Platform9 و Intel و Red Hat."},{"title":"سيادية بالتصميم.","desc":"متطلبات إقامة البيانات السعودية مدمجة في معماريتنا من اليوم الأول."},{"title":"بنية مهندسة للذكاء.","desc":"كل بنية تحتية ننشرها جاهزة لأحمال الذكاء الاصطناعي."},{"title":"شريك واحد. مساءلة كاملة.","desc":"من الاستراتيجية إلى النشر إلى العمليات 24×7."}];
const industryItems = [{"industry":"القطاع الحكومي","apps":"مراكز بيانات سيادية، سحابة وطنية، بنية ذكاء معزولة هوائيًا."},{"industry":"القطاع المصرفي","apps":"بنية تحتية متوافقة مع استمرارية الأعمال، مخازن تعافٍ سيبراني."},{"industry":"الرعاية الصحية","apps":"بنية تحتية متوافقة مع المعلومات الصحية، منصات PACS عالية الأداء."},{"industry":"النفط والغاز","apps":"بنية حوسبة طرفية، سحابة هجينة للعمليات البعيدة."},{"industry":"الصناعة","apps":"حوسبة عالية الأداء للمحاكاة، بنية تحتية للمصنع الذكي."},{"industry":"الاتصالات","apps":"بنية 5G، حوسبة طرفية، منصة سحابة اتصالات."}];
const insightItems = [{"tag":"الاستراتيجية","title":"سيادة البيانات في العصر متعدد السحب","desc":"كيف تصمم معمارية توازن بين السيادة والمرونة والأداء."},{"tag":"السعودية","title":"متطلبات NCA لإقامة البيانات","desc":"فهم وتنفيذ ضوابط إقامة البيانات السيادية."},{"tag":"الهندسة","title":"ثورة هندسة المنصات","desc":"كيف تحول منصات المطورين الداخلية تقديم البنية التحتية."}];

export default function ArabicInfrastructurePage() {

  useEffect(() => { trackCapabilityPageView('Sovereign Infrastructure & Hybrid Cloud'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  const capsWithIcons = coreCaps.map((c) => ({ ...c, icon: iconMap[c.iconName] || iconMap['Brain'] }));

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="relative z-10 pt-40 pb-32 text-center px-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10" style={{ borderColor: '#2563EB40', backgroundColor: '#2563EB08' }}>
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>البنية التحتية السيادية والسحابة الهجينة</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من إدارة البنية التحتية</span><br />إلى الأسس الرقمية السيادية.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">نصمم وننشر ونشغل بنية تحتية سيادية ومنصات سحابة هجينة تدعم أحمال الذكاء الاصطناعي والبيانات والمؤسسات — مبنية لمتطلبات الإقامة والمرونة في المملكة.</p>
          </motion.div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معظم البنى التحتية تعيق المؤسسات ولا تدفعها للأمام.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#2563EB]30" style={{ flexDirection: 'row-reverse' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2563EB15', color: '#2563EB' }}>{iconMap[item.iconName]}</div>
                <p className="text-text-primary text-sm leading-relaxed text-right">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">القدرات الأساسية</h2>
          <p className="text-text-muted text-base mb-10">ست قدرات. كل منها مصمم حول نتيجة أعمال.</p>
          <div className="space-y-4">
            {capsWithIcons.map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#2563EB]1A">
                <div className="flex flex-col md:flex-row md:items-start gap-5" style={{ flexDirection: 'row-reverse' }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2563EB12', color: '#2563EB' }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2 flex-row-reverse">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#2563EB' }} />
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

        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تنفيذ متكاملة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ href: '/ar/services/advisory', title: 'الاستشارات والتخطيط', desc: 'تقييم الجاهزية · استشارات الامتثال · الاستراتيجية' },
              { href: '/ar/services/implementation', title: 'التنفيذ والتسليم', desc: 'نشر الذكاء والأتمتة · تسليم المنصات · MLOps' },
              { href: '/ar/services/operations', title: 'العمليات المدارة', desc: 'عمليات 24×7 · SOC كخدمة · 3 مستويات' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#2563EB]/25 transition-all duration-300 text-right">
                <h3 className="font-semibold mb-1 group-hover:text-[#2563EB] transition-colors">{s.title}</h3>
                <p className="text-tiny text-text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12" style={{ background: 'linear-gradient(135deg, #2563EB08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #2563EB1A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يحول القدرات إلى نتائج.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item, i) => (
                <div key={i} className="flex gap-3 flex-row-reverse">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#2563EB' }} />
                  <div className="text-right">
                    <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>التقنية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">المنظومة التقنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3" style={{ flexDirection: 'row-reverse' }}>
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#2563EB99' }}>{p.role}</span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed text-right">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>أين نطبقها</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">التطبيقات القطاعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryItems.map((item, i) => (
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

        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>رؤى</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">رؤى مختارة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insightItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: '#2563EB12', color: '#2563EB' }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#2563EB99' }}><ExternalLink className="w-3 h-3" /> اقرأ الرؤية</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>المخططات المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية تجسد هذه القدرة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#2563EB]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#2563EB]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#2563EB] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#2563EB]/40 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="rounded-2xl p-10 md:p-14 text-center" style={{ background: 'linear-gradient(135deg, #2563EB0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #2563EB1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">مستعدون لبناء<br /><span style={{ color: '#2563EB' }}>البنية التحتية السيادية</span>؟</h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">لنناقش كيف يمكن للبنية التحتية السيادية ومنصات السحابة الهجينة تسريع تحولكم مع الحفاظ على السيادة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: '#2563EB', boxShadow: '0 8px 24px #2563EB20' }}>
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
