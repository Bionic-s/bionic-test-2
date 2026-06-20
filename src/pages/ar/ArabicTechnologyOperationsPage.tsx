import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Activity, Gauge, BarChart3, GitBranch, HardDrive, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const HERO_BG = `${import.meta.env.BASE_URL}images/cloud-computing.avif`;
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'IBM', role: 'AIOps والمراقبة وأتمتة تقنية المعلومات', tech: 'Instana · Turbonomic · IBM Concert · Cloud Pak for Watson AIOps · SevOne' },
  { name: 'Dell Technologies', role: 'قياس البنية التحتية والعمليات', tech: 'CloudIQ · OpenManage Enterprise · APEX Console · PowerProtect Cyber Recovery' },
  { name: 'Platform9', role: 'عمليات K8s متعددة المجموعات وسحابة خاصة', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation' },
  { name: 'Intel', role: 'أداء البنية التحتية والقياس', tech: 'Intel Node Manager · Resource Director Technology · ضبط وتحسين الأداء' },
];

const capabilities = [
  { title: 'هندسة المنصات ومنصة المطور الداخلية', desc: 'منصات مطورين داخلية بمسارات ذهبية. تزويد البنية التحتية في دقائق — وليس أسابيع — من خلال بوابات خدمة ذاتية.', iconName: 'GitBranch', outcomes: ['قدرات خدمة ذاتية للمطورين', 'مسارات ذهبية موحدة', 'تزويد بنية تحتية في دقائق', 'تجربة مطور محسنة'] },
  { title: 'هندسة موثوقية الموقع', desc: 'ميزانيات خطأ، عمليات مدفوعة بمستوى الخدمة، تحليلات لاحقة بدون لوم.', iconName: 'Gauge', outcomes: ['ميزانيات خطأ محددة', 'عمليات مدفوعة بمستوى الخدمة', 'تحليلات لاحقة بدون لوم', 'موثوقية كتخصص هندسي'] },
  { title: 'AIOps والمراقبة الشاملة', desc: 'قياس موحد عبر السجلات والمقاييس والتتبع. AIOps يقلل متوسط وقت الكشف حتى 60%.', iconName: 'Activity', outcomes: ['قياس موحد عبر جميع الطبقات', 'ارتباط آلي للحوادث', 'كشف أسرع للتهديدات', 'استجابة آلية للحوادث'] },
  { title: 'السعة والأداء وFinOps', desc: 'تحسين مستمر عبر الحوسبة والتخزين والسحابة. FinOps يحقق 25-40% تجنب تكاليف.', iconName: 'BarChart3', outcomes: ['تجنب تكاليف 25-40%', 'محاسبة مرتجعة وتنبؤ', 'تحسين فوري', 'حوكمة تكاليف متعددة السحب'] },
  { title: 'عمليات منصات متعددة المزودين', desc: 'نموذج تشغيلي واحد عبر IBM و Dell و Red Hat والسحابة الأصلية.', iconName: 'Cpu', outcomes: ['نموذج تشغيلي واحد', 'سلسلة مساءلة واحدة', 'رؤية موحدة للصحة', 'دليل تشغيل واحد'] },
  { title: 'إدارة وتحسين مستوى الخدمة', desc: 'مستويات خدمة مقاسة ومبلغ عنها ومحسنة باستمرار.', iconName: 'CheckCircle', outcomes: ['مستويات خدمة محددة', 'تقارير آلية', 'تحسين فصلي', 'سير عمل علاج آلي'] },
];

const industries = [
  { name: 'حكومي', desc: 'عمليات منصات سيادية — مركز عمليات شبكة 24×7 للبنية التحتية على المستوى الوطني.' },
  { name: 'بنوك', desc: 'عمليات مدارة متوافقة مع البنك المركزي — عمليات منصات بضمان مستوى الخدمة.' },
  { name: 'نفط وغاز', desc: 'مراقبة OT/IT موحدة — رؤية تشغيلية عبر البنية التحتية وأنظمة التحكم الصناعي.' },
  { name: 'رعاية صحية', desc: 'عمليات منصات سريرية — عمليات عالية التوفر مع أمن المعلومات الصحية.' },
  { name: 'اتصالات', desc: 'هندسة منصات واعية بالشبكة — عمليات بنية تحتية متكاملة مع قياس الشبكة.' },
  { name: 'مؤسسات كبرى', desc: 'عمليات متعددة السحب — نموذج تشغيلي موحد مع حوكمة FinOps.' },
];

const insights = [
  { tag: 'العمليات', title: 'من ITIL إلى SRE', desc: 'لماذا تتحول المؤسسات السعودية من عمليات تقنية معلومات قائمة على التذاكر إلى هندسة موثوقية.' },
  { tag: 'الهندسة', title: 'ضرورة هندسة المنصات', desc: 'منصات المطورين الداخلية لم تعد اختيارية. كيف تقلل فرق المنصات العبء المعرفي.' },
  { tag: 'الحوكمة', title: 'FinOps في السعودية متعددة السحب', desc: 'أنماط FinOps عملية للمؤسسات التي تدير التكاليف عبر المحلي والخاص والعام.' },
];

const iconMap: Record<string, React.ReactNode> = {
  GitBranch: <GitBranch className="w-5 h-5" />, Gauge: <Gauge className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />, BarChart3: <BarChart3 className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />, CheckCircle: <CheckCircle className="w-5 h-5" />,
  HardDrive: <HardDrive className="w-5 h-5" />, Shield: <Shield className="w-5 h-5" />,
};

const capsWithIcons = capabilities.map(c => ({ ...c, icon: iconMap[c.iconName] || iconMap['Cpu'] }));

export default function ArabicTechnologyOperationsPage() {
  useEffect(() => { trackCapabilityPageView('Technology Operations'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="relative z-10 pt-40 pb-32 text-center px-4">
            <SectionLabel>عمليات التقنية</SectionLabel>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              ندير ما نصممه.<br />
              <span style={{ color: ACCENT }}>عمليات مدفوعة بالذكاء الاصطناعي،</span> مقاسة<br />
              بالنتائج — وليس التذاكر.
            </h1>
            <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              هذه هي القدرة التي تغلق الدائرة. لا نصمم وننشر فقط — بل ندير ونحسن ونطور باستمرار المنصات التي تحقق نتائج التحول.
            </p>
          </motion.div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تشغيل منصات تقنية معقدة أصعب من بنائها.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">معظم المؤسسات تدير منصاتها بشكل تفاعلي. التزويد يستغرق أسابيع. المراقبة مجزأة. لا توجد طبقة منصة بين البنية التحتية والمطورين. وتكاليف السحابة تنمو بدون حوكمة.</p>
        </motion.section>

        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>القدرات الأساسية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">ست قدرات. كل منها مصمم حول نتيجة تشغيلية.</h2>
          <div className="space-y-4 mt-10">
            {capsWithIcons.map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-5" style={{ flexDirection: 'row-reverse' }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#D9770612', color: ACCENT }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o: string, j: number) => (
                        <div key={j} className="flex items-start gap-2 flex-row-reverse">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
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

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تنفيذ.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ href: '/ar/services/advisory', title: 'الاستشارات والتخطيط', desc: 'تقييم الجاهزية · استشارات الامتثال · الاستراتيجية' },
              { href: '/ar/services/implementation', title: 'التنفيذ والتسليم', desc: 'نشر المنصات · تسليم التطبيقات · MLOps' },
              { href: '/ar/services/operations', title: 'العمليات المدارة', desc: 'عمليات 24×7 · SOC كخدمة · 3 مستويات' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300 text-right">
                <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">{s.title}</h3>
                <p className="text-tiny text-text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12" style={{ background: 'linear-gradient(135deg, #D9770608, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #D977061A' }}>
            <SectionLabel>لماذا بيونك</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">ندير ما نصممه — حلقة كاملة.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'من المعمارية إلى العمليات', desc: 'نحن لا نصمم فقط — ندير المنصات التي نصممها. حلقة تغذية راجعة مستمرة بين التصميم والتشغيل.' },
                { title: 'عمليات مدفوعة بالذكاء', desc: 'AIOps عبر جميع الطبقات — مراقبة استباقية وارتباط آلي للحوادث.' },
                { title: 'FinOps مدمجة', desc: 'حوكمة تكاليف مضمنة في العمليات — وليس فكرة لاحقة.' },
                { title: 'شريك واحد. مساءلة كاملة.', desc: 'من هندسة المنصات إلى SRE إلى العمليات 24×7 — علاقة واحدة.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 flex-row-reverse">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <div className="text-right">
                    <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>التقنية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">المنظومة التقنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3" style={{ flexDirection: 'row-reverse' }}>
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#D9770699' }}>{p.role}</span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed text-right">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>التطبيقات القطاعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">حيث نطبقها</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300">
                <h3 className="font-semibold text-base mb-2 text-text-primary text-right">{item.name}</h3>
                <p className="text-text-muted text-xs leading-relaxed text-right">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>رؤى</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">رؤى مختارة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insights.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: '#D9770612', color: ACCENT }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary text-right">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 text-right">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#D9770699' }}><ExternalLink className="w-3 h-3" /> اقرأ الرؤية</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="rounded-2xl p-10 md:p-14 text-center" style={{ background: 'linear-gradient(135deg, #D977060D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #D977061A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              مستعدون لتحويل عمليات تقنية المعلومات إلى<br />
              <span style={{ color: ACCENT }}>هندسة موثوقية</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              لنناقش كيف يمكن لهندسة المنصات وAIOps وFinOps تحويل تقنية المعلومات إلى ممكن للقيمة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}>
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
