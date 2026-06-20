import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Brain, BarChart3, Users, MessageSquare, Layout, Globe, Heart, ShoppingCart, Briefcase, GitBranch, Workflow, Zap, Network, Plug, RefreshCw, Activity, Shield, Eye, Fingerprint, Lock, Database, FileWarning, Server, Cloud, Container, HardDrive, Cpu, Gauge, Layers, FileText, LineChart } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#DC2626';
const HERO_BG = `${import.meta.env.BASE_URL}images/cybersecurity-shield.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [{"name":"IBM","role":"عمليات الأمن واستخبارات التهديدات","tech":"QRadar SIEM · Guardium · Verify · X-Force · SOAR · MaaS360"},{"name":"Dell Technologies","role":"التعافي السيبراني وحماية البيانات","tech":"PowerProtect Cyber Recovery · Data Domain · CyberSense · مخزن معزول"},{"name":"Intel","role":"أمن مثبت في العتاد وحوسبة سرية","tech":"Intel TXT · SGX · TDX · Threat Detection · vPro"},{"name":"Red Hat","role":"منصة آمنة وأتمتة الامتثال","tech":"OpenShift · Ansible Automation · RHEL · SELinux · OpenSCAP"}];
const blueprints = [{"title":"مركز العمليات السيبرانية الوطني","industry":"حكومي","slug":"national-soc"},{"title":"بنية تحتية مصرفية متوافقة مع البنك المركزي","industry":"بنوك","slug":"sama-compliant-banking-infra"},{"title":"Zero Trust المؤسسي","industry":"مؤسسات","slug":"enterprise-zero-trust"}];
const bpSlugs = ["national-soc","sama-compliant-banking-infra","enterprise-zero-trust"];

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

const realityItems = [{"iconName":"FileWarning","text":"الأمن يُعامل كمربع امتثال وليس قدرة مرونة أعمال."},{"iconName":"Activity","text":"مشهد التهديدات يتطور أسرع من قدرات الكشف والاستجابة."},{"iconName":"Fingerprint","text":"الهوية هي الحدود الجديدة — لكن تبني Zero Trust لا يزال متجزئًا."},{"iconName":"Database","text":"ضغط تنظيمي متزايد: NCA، PDPL، والتشريعات القطاعية."},{"iconName":"FileWarning","text":"خطط تعافٍ تجتاز التدقيق لكنها تفشل عند الاختبار تحت ظروف هجوم حقيقية."},{"iconName":"Eye","text":"عمليات أمنية تغرق في حجم التنبيهات، عمياء عن التهديدات الحقيقية."}];
const coreCaps = [{"title":"استراتيجية الأمن وإدارة المخاطر","desc":"تقييم مشهد التهديدات وتحديد المخاطر وبناء استراتيجية أمن متعددة السنوات.","iconName":"Shield","outcomes":["خط أساس مخاطر سيبرانية محدد كميًا","استراتيجية متعددة السنوات مرتبة حسب تخفيض المخاطر","إطار حوكمة متوافق مع NCA والبنك المركزي","حالة استثمار تربط الإنفاق الأمني بتخفيض المخاطر"]},{"title":"عمليات الأمن والكشف","desc":"بناء أو تعزيز قدرات مركز العمليات الأمنية مع صيد تهديدات 24×7.","iconName":"Eye","outcomes":["قدرة مركز عمليات أمنية 24×7","كشف تهديدات مدعوم بالذكاء مع ارتباط عبر الطبقات","استجابة آلية للحوادث","تغذية استخبارات تهديدات مصممة للمملكة"]},{"title":"أمن الهوية وZero Trust","desc":"تنفيذ معمارية Zero Trust الكاملة — الهوية كحدود، تحقق مستمر، وصول بأقل امتياز.","iconName":"Fingerprint","outcomes":["معمارية Zero Trust عبر المستخدمين والأجهزة والتطبيقات","وصول بأقل امتياز مع تحكم تكيفي","تحقق مستمر بدون افتراض ثقة"]},{"title":"المرونة السيبرانية والتعافي","desc":"تصميم واختبار قدرات التعافي السيبراني التي تنجو من أسوأ السيناريوهات.","iconName":"Lock","outcomes":["مخزن تعافٍ سيبراني معزول غير قابل للتغيير","اختبار تعافٍ منتظم في ظروف هجوم محاكاة","هدف وقت تعافٍ أقل من 4 ساعات","امتثال استمرارية أعمال البنك المركزي"]},{"title":"الامتثال التنظيمي والحوكمة","desc":"بناء برامج امتثال مستمرة — ليس تدقيقًا دوريًا.","iconName":"Database","outcomes":["مراقبة امتثال مستمرة عبر NCA و PDPL","تقارير تنظيمية آلية","إدارة مخاطر طرف ثالث","تخطيط استجابة للحوادث"]},{"title":"أمن التطبيقات والبيانات","desc":"تضمين الأمن في دورة حياة التطوير وحماية البيانات أينما كانت.","iconName":"FileWarning","outcomes":["اختبار أمني في خط أنابيب CI/CD","تصنيف بيانات وتشفير","مراقبة نشاط بيانات حساسة","إدارة ثغرات عبر المحفظة"]}];
const whyItems = [{"title":"متعدد المزودين. بدون احتكار.","desc":"نصمم عبر IBM و Dell و Intel و Red Hat — نختار بناءً على فعالية الأمن."},{"title":"مرونة أولاً. ليس امتثالاً.","desc":"نبني برامج تنجو من الهجمات الفعلية — ليس فقط تجتاز التدقيق."},{"title":"سياق التهديدات السعودي.","desc":"مصممة لمشهد تهديدات المملكة وتطورات NCA المستمرة."},{"title":"شريك واحد. مساءلة كاملة.","desc":"من الاستراتيجية إلى مركز العمليات الأمنية إلى التعافي."}];
const industryItems = [{"industry":"القطاع الحكومي","apps":"مركز عمليات أمنية وطني، حماية بنية تحتية حيوية، امتثال NCA."},{"industry":"القطاع المصرفي","apps":"امتثال البنك المركزي، كشف احتيال، PCI-DSS، مخزن تعافٍ سيبراني."},{"industry":"الرعاية الصحية","apps":"أمن المعلومات الصحية، أمن الأجهزة الطبية، حماية الفدية."},{"industry":"النفط والغاز","apps":"أمن OT/IT، حماية ICS، امتثال IEC 62443."},{"industry":"الصناعة","apps":"أمن سلسلة الإمداد، Zero Trust للتصنيع، حماية IP."},{"industry":"الاتصالات","apps":"أمن الشبكة، حماية البنية التحتية 5G، استخبارات تهديدات."}];
const insightItems = [{"tag":"الاستراتيجية","title":"ما بعد الامتثال","desc":"لماذا لم يعد الامتثال كافيًا — وكيف تبني برنامج أمن يوازن بين الحماية والمرونة."},{"tag":"السعودية","title":"NCA ECC في الممارسة","desc":"تنفيذ ضوابط الأمن السيبراني الأساسية في المؤسسات الحكومية."},{"tag":"المرونة","title":"تشريح هجوم الفدية","desc":"كيف يبدو هجوم الفدية الحديث — وكيف تقلل بنية Zero Trust من تأثيره."}];

export default function ArabicCybersecurityPage() {

  useEffect(() => { trackCapabilityPageView('Cybersecurity & Cyber Resilience'); }, []);
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
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10" style={{ borderColor: '#DC262640', backgroundColor: '#DC262608' }}>
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>الأمن السيبراني والمرونة السيبرانية</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span style={{ color: ACCENT }}>من الأمن التفاعلي</span><br />إلى المرونة السيبرانية.
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">نبني برامج أمن سيبراني تحمي العمليات التجارية وتضمن الثقة التنظيمية وتمكن التعافي — مصممة لمشهد التهديدات ومتطلبات الامتثال في المملكة.</p>
          </motion.div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معظم المؤسسات مؤمنة على الورق وليس في الممارسة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#DC2626]30" style={{ flexDirection: 'row-reverse' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DC262615', color: '#DC2626' }}>{iconMap[item.iconName]}</div>
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#DC2626]1A">
                <div className="flex flex-col md:flex-row md:items-start gap-5" style={{ flexDirection: 'row-reverse' }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DC262612', color: '#DC2626' }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2 flex-row-reverse">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#DC2626' }} />
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
              <Link key={i} to={s.href} className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#DC2626]/25 transition-all duration-300 text-right">
                <h3 className="font-semibold mb-1 group-hover:text-[#DC2626] transition-colors">{s.title}</h3>
                <p className="text-tiny text-text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12" style={{ background: 'linear-gradient(135deg, #DC262608, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #DC26261A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يحول القدرات إلى نتائج.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item, i) => (
                <div key={i} className="flex gap-3 flex-row-reverse">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#DC2626' }} />
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
                  <span className="text-xs font-medium" style={{ color: '#DC262699' }}>{p.role}</span>
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
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: '#DC262612', color: '#DC2626' }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#DC262699' }}><ExternalLink className="w-3 h-3" /> اقرأ الرؤية</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>المخططات المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية تجسد هذه القدرة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#DC2626]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#DC2626]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#DC2626] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#DC2626]/40 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="rounded-2xl p-10 md:p-14 text-center" style={{ background: 'linear-gradient(135deg, #DC26260D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #DC26261A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">مستعدون لبناء<br /><span style={{ color: '#DC2626' }}>المرونة السيبرانية</span>؟</h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">لنناقش كيف يمكن لبرنامج أمني متكامل حماية أعمالكم — مع الامتثال التنظيمي السعودي.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: '#DC2626', boxShadow: '0 8px 24px #DC262620' }}>
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
