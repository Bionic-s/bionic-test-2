import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Activity, Gauge, BarChart3, GitBranch, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const HERO_BG = '/test-site-2/images/cloud-computing.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'IBM', role: 'AIOps والمراقبة وأتمتة تقنية المعلومات', tech: 'Instana · Turbonomic · IBM Concert · Cloud Pak for Watson AIOps · SevOne' },
  { name: 'Dell Technologies', role: 'قياس البنية التحتية والعمليات', tech: 'CloudIQ · OpenManage Enterprise · APEX Console · PowerProtect Cyber Recovery' },
  { name: 'Platform9', role: 'عمليات K8s متعددة المجموعات وسحابة خاصة', tech: 'Managed Kubernetes · OpenStack · KubeVirt · أتمتة المعادن المجردة · إدارة متعددة المجموعات' },
  { name: 'Intel', role: 'أداء البنية التحتية والقياس', tech: 'Intel Node Manager · Resource Director Technology · ضبط وتحسين الأداء' },
];

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

        {/* ════════════════════════════════════════════
            1. HERO — مع صورة خلفية
            ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
            className="relative z-10 pt-40 pb-32 px-4 lg:px-12"
          >
            <SectionLabel>عمليات التقنية</SectionLabel>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7 text-right">
              ندير ما نُصمّمه.<br />
              <span style={{ color: ACCENT }}>عمليات مدفوعة بالذكاء الاصطناعي،</span> مقاسة<br />
              بالنتائج — لا بالتذاكر.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] leading-relaxed text-right mr-auto ml-0">
              <span className="text-tiny font-semibold tracking-wider uppercase block mb-3" style={{ color: ACCENT }}>
                التحول التقني ← التميز التشغيلي ← قيمة الأعمال
              </span>
              هذه هي القدرة التي تغلق الدائرة. لا نُصمّم وننشر فقط — بل ندير ونحسّن ونطوّر باستمرار المنصات التي تحقق نتائج تحولكم.
              من هندسة المنصات إلى FinOps، من SRE إلى المراقبة متعددة المورّدين —{' '}
              <strong className="text-text-primary">هنا حيث يتحول التحول إلى تشغيل.</strong>
            </p>
          </motion.div>
        </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        {/* ════════════════════════════════════════════
            2. الواقع
            ════════════════════════════════════════════ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            تشغيل منصات تقنية معقدة أصعب من بنائها.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px] text-right mr-auto ml-0">
            معظم المؤسسات تواجه تجزؤًا تشغيليًا يبدد قيمة استثماراتها في التحول.
            الفجوة بين "تم النشر" و "تم التشغيل" هي حيث تتسرب القيمة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'تشتت الأدوات', text: 'IBM و Dell و Red Hat والسحابة الأصلية — كل منها بوحدة تحكم خاصة، لا رؤية تشغيلية موحدة' },
              { pre: 'تفاعلي لا استباقي', text: 'الفرق تكتشف الأعطال من شكاوى المستخدمين، لا من إشارات إنذار مبكر مدفوعة بالذكاء الاصطناعي' },
              { pre: 'فجوة هندسة المنصات', text: 'المطورون ينتظرون أسابيع للبنية التحتية — لا منصة مطورين داخلية، لا خدمة ذاتية، لا مسارات ذهبية' },
              { pre: 'انحراف مستوى الخدمة', text: 'الأداء التشغيلي يتدهور بصمت مع مرور الوقت بدون حلقة تحسين مستمرة' },
              { pre: 'نقاط عمياء في المراقبة', text: 'السجلات في أداة، والمقاييس في أخرى، والتتبع في ثالثة — لا لوحة زجاجية واحدة' },
              { pre: 'تصاعد التكاليف', text: 'بدون FinOps وإدارة السعة، تكاليف البنية التحتية تنمو 30% سنويًا — بدون تتبع' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#D97706]/20 transition-all duration-300 text-right">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            3. القدرات الأساسية
            ════════════════════════════════════════════ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>القدرات الأساسية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            ست تخصصات هندسية تشغيلية — من المنصة إلى الإنتاج.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px] text-right mr-auto ml-0">
            هذه ليست خدمات دعم. إنها قدرات هندسية تحوّل ملكية المنصة إلى أداء منصة — مقاسة بمستويات الخدمة، ومحسَّنة بالذكاء الاصطناعي، ومحكومة بـ FinOps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <GitBranch className="w-6 h-6" />, title: 'هندسة المنصات ومنصة المطور الداخلية', desc: 'منصات مطورين داخلية بمسارات ذهبية. تزويد البنية التحتية في دقائق — لا أسابيع — عبر بوابات خدمة ذاتية، لا تذاكر.' },
              { icon: <Gauge className="w-6 h-6" />, title: 'هندسة موثوقية الموقع (SRE)', desc: 'ميزانيات خطأ، عمليات مدفوعة بمستوى الخدمة، تحليلات لاحقة بدون لوم. الموثوقية كتخصص هندسي — لا قائمة انتظار دعم.' },
              { icon: <Activity className="w-6 h-6" />, title: 'AIOps والمراقبة الشاملة', desc: 'قياس موحد عبر السجلات والمقاييس والتتبع. برامج AIOps تقلل متوسط وقت الكشف حتى 60% — مع ارتباط آلي للحوادث عبر كل طبقة في بيئتكم.' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'السعة والأداء وFinOps', desc: 'تحسين مستمر عبر الحوسبة والتخزين والسحابة. برامج FinOps تحقق عادةً 25–40% تجنب تكاليف مع محاسبة مرتجعة وتنبؤ وتحسين فوري.' },
              { icon: <Cpu className="w-6 h-6" />, title: 'عمليات منصات متعددة المورّدين', desc: 'نموذج تشغيلي واحد عبر IBM و Dell و Red Hat والسحابة الأصلية. دليل تشغيل واحد، سلسلة مساءلة واحدة، رؤية واحدة للصحة.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'إدارة وتحسين مستوى الخدمة', desc: 'مستويات خدمة مقاسة ومبلغ عنها ومحسَّنة باستمرار. أدلة تشغيل معالجة آلية مع مراجعات تحسين ربع سنوية.' },
            ].map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300 text-right">
                <div className="mb-3" style={{ color: ACCENT }}>{cap.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{cap.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            3.5 كيف ننجز
            ════════════════════════════════════════════ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">ثلاثة نماذج تنفيذ متكاملة — عبر جميع القدرات.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/ar/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mb-3 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">الاستشارات والتخطيط</h3>
              <p className="text-tiny text-text-muted">تقييم النضج التشغيلي · خارطة طريق هندسة المنصات · تصميم إطار مستوى الخدمة · استراتيجية المراقبة</p>
            </Link>
            <Link to="/ar/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mb-3 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">التنفيذ والتسليم</h3>
              <p className="text-tiny text-text-muted">نشر حزمة المراقبة · بناء منصة المطور الداخلية · خط أنابيب AIOps · أتمتة أدلة التشغيل · تنفيذ FinOps</p>
            </Link>
            <Link to="/ar/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mb-3 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">العمليات المدارة</h3>
              <p className="text-tiny text-text-muted">عمليات منصات 24×7 · مركز عمليات أمنية كخدمة · 3 مستويات (أساسي/متقدم/متميز) · تحسين مستمر + FinOps</p>
            </Link>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            4. لماذا بيونك سوليوشنز
            ════════════════════════════════════════════ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>لماذا بيونك سوليوشنز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">الفارق التشغيلي.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'ندير ما نُصمّمه', desc: 'لا فجوة تسليم بين التصميم والتشغيل. فريق واحد، سلسلة مساءلة واحدة — قرارات المعمارية تُتخذ مع الواقع التشغيلي مدمجًا فيها.' },
              { title: 'متعدد المورّدين، نموذج تشغيلي واحد', desc: 'Dell و IBM و Red Hat والسحابة الأصلية — مراقبة موحَّدة، دليل تشغيل واحد، رؤية واحدة للصحة. لا صوامع تشغيلية خاصة بكل مورّد.' },
              { title: 'مدفوع بالذكاء الاصطناعي، لا بلوحات المعلومات', desc: 'AIOps يربط الإشارات عبر بيئتكم بالكامل. لوحات المعلومات هي المخرَج، لا الهدف. تحليل آلي للسبب الجذري يقلل متوسط وقت الإصلاح — تقارير نشر AIOps تشير إلى تحسن 50–70%.' },
              { title: 'بضمان مستوى الخدمة، محسَّن باستمرار', desc: 'كل مهمة تُقاس مقابل مستويات خدمة محدَّدة مع مراجعات تحسين ربع سنوية. لا نكتفي بالصيانة — نحسّن، ربعًا بعد ربع.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300 text-right">
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            5. المنظومة التقنية
            ════════════════════════════════════════════ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة التقنية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            المنصات التي نديرها — والشركاء الذين نديرها معهم.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                  <PartnerLogo partner={partner} size="sm" />
                  <div className="text-right">
                    <h3 className="font-semibold text-sm">{partner.name}</h3>
                    <p className="text-tiny text-text-muted">{partner.role}</p>
                  </div>
                </div>
                <p className="text-tiny text-text-muted leading-relaxed border-t border-white/5 pt-3 text-right">{partner.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            6. التطبيقات القطاعية
            ════════════════════════════════════════════ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>التطبيقات القطاعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            كيف تقدّم عمليات التقنية قيمة عبر القطاعات.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'القطاع الحكومي', desc: 'عمليات منصات سيادية — مركز عمليات شبكة 24×7 للبنية التحتية على المستوى الوطني بنموذج تشغيلي معزول هوائيًا ودعم أحمال العمل المصنَّفة.' },
              { title: 'القطاع المصرفي', desc: 'عمليات مدارة متوافقة مع البنك المركزي — عمليات منصات بضمان مستوى الخدمة مع سجلات تدقيق تنظيمية ومراقبة امتثال مستمرة.' },
              { title: 'النفط والغاز', desc: 'مراقبة موحَّدة للتقنية التشغيلية والتقنية المعلوماتية — رؤية تشغيلية عبر البنية التحتية وأنظمة التحكم الصناعي مع قياس من الطرف إلى السحابة.' },
              { title: 'الرعاية الصحية', desc: 'عمليات منصات سريرية — عمليات عالية التوفر للأنظمة السريرية المدعومة بالذكاء الاصطناعي مع أمن المعلومات الصحية وقابلية تتبع تدقيق كاملة.' },
              { title: 'الاتصالات', desc: 'هندسة منصات واعية بالشبكة — عمليات بنية تحتية متكاملة مع قياس الشبكة لضمان الخدمة من البداية إلى النهاية.' },
              { title: 'المؤسسات الكبرى', desc: 'عمليات متعددة السحب — نموذج تشغيلي موحد عبر المحلي والسحابة الخاصة والعامة مع حوكمة FinOps.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300 text-right">
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/ar/industries/government" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
              استكشف العمليات القطاعية <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            7. رؤى مختارة
            ════════════════════════════════════════════ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>رؤى مختارة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            وجهات نظر في هندسة المنصات والعمليات.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tag: 'العمليات', title: 'من ITIL إلى SRE', desc: 'لماذا تتحول المؤسسات السعودية من عمليات تقنية معلومات قائمة على التذاكر إلى هندسة موثوقية يقودها المهندسون — وماذا يعني ذلك لعائد استثمار التحول.' },
              { tag: 'الهندسة', title: 'ضرورة هندسة المنصات', desc: 'منصات المطورين الداخلية لم تعد اختيارية. كيف تقلل فرق المنصات العبء المعرفي وتسرّع التسليم عبر البيئات الهجينة.' },
              { tag: 'الحوكمة', title: 'FinOps في السعودية متعددة السحب', desc: 'أنماط FinOps عملية للمؤسسات التي تدير التكاليف عبر المحلي والسحابة الخاصة والعامة — مع السياق التنظيمي المحلي.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300 group cursor-pointer text-right">
                <span className="text-tiny font-semibold tracking-wide mb-2 block" style={{ color: ACCENT }}>{item.tag}</span>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#D97706] transition-colors">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-end gap-1.5 mt-3 text-tiny" style={{ color: ACCENT }}>
                  اقرأ المزيد <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            7.5 المخططات المرجعية
            ════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>مخططات التحول</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">معماريات مرجعية تجسّد هذه القدرة على أرض الواقع.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'مركز العمليات السيبرانية الوطني', industry: 'حكومي', slug: 'national-soc' },
              { title: 'بنية تحتية مصرفية متوافقة مع البنك المركزي', industry: 'مصرفي', slug: 'sama-compliant-banking-infra' },
              { title: 'تكامل التقنية التشغيلية والتقنية المعلوماتية', industry: 'نفط وغاز', slug: 'ot-it-integration-secure-ops' },
              { title: 'Zero Trust المؤسسي', industry: 'مؤسسات', slug: 'enterprise-zero-trust' },
              { title: 'منصة الذكاء الاصطناعي السيادية', industry: 'حكومي', slug: 'sovereign-ai-platform' },
              { title: 'الذكاء الصناعي والعمليات التنبؤية', industry: 'نفط وغاز', slug: 'industrial-intelligence-predictive-ops' },
            ].map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#D97706]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#D97706] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#D97706]/40 group-hover:text-[#D97706] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?capability=ops" className="inline-flex items-center gap-1.5 text-[#D97706] text-sm font-medium hover:underline">
              عرض جميع المخططات ذات الصلة <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            8. الدعوة إلى التواصل
            ════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              هل أنتم مستعدون لتشغيل تحولكم؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              دعونا نناقش كيف يمكن لعمليات التقنية تحويل استثمارات منصاتكم إلى نتائج أعمال مقاسة ومحسَّنة باستمرار.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}
              >
                ابدأ المحادثة
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/blueprints?capability=ops"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300"
               
              >
                استعرض مخططات التحول
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
