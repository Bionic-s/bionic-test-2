import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Server, ArrowRight, Cloud, Container, HardDrive, Cpu, Globe, Activity, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/it-infrastructure.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'Dell Technologies', role: 'البنية التحتية المؤسسية', tech: 'PowerEdge · PowerStore · PowerMax · VxRail · APEX · PowerFlex' },
  { name: 'IBM', role: 'التخزين وبنية الذكاء والسحابة الهجينة', tech: 'FlashSystem · Power · watsonx · Cloud Pak · Storage Defender' },
  { name: 'Platform9', role: 'منصة سحابة خاصة وهجينة', tech: 'Managed Kubernetes · OpenStack · KubeVirt · أتمتة المعادن المجردة · إدارة متعددة المجموعات' },
  { name: 'Intel', role: 'الحوسبة والذكاء والبنية الطرفية', tech: 'Xeon Scalable · Gaudi 3 AI Accelerators · Edge AI · الحوسبة السرية · Optane' },
  { name: 'Red Hat', role: 'بنية تحتية مفتوحة المصدر وأتمتة', tech: 'OpenShift · Ansible Automation · RHEL · Satellite' },
];

export default function ArabicInfrastructurePage() {

  useEffect(() => { trackCapabilityPageView('Sovereign Infrastructure & Hybrid Cloud'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary" dir="rtl">
      <Helmet>
        <title>البنية التحتية السيادية والسحابة الهجينة | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="البنية التحتية السيادية والسحابة الهجينة — تحديث مراكز البيانات، تحديث أنظمة التخزين، والبنية التحتية للذكاء الاصطناعي." />
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
            <Server className="w-4 h-4 ml-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>البنية التحتية السيادية والسحابة الهجينة</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#60A5FA] to-white bg-clip-text text-transparent">
              من إدارة البنية التحتية<br />إلى الأسس الرقمية السيادية.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نصمم وننشر ونشغّل بنية تحتية سيادية ومنصات سحابة هجينة تدعم أحمال الذكاء الاصطناعي والبيانات والمؤسسات — مبنية لمتطلبات السيادة والمرونة في المملكة.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. الواقع ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">معظم البنى التحتية تعيق المؤسسات — بدلاً من أن تكون محركاً لنموها.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Server className="w-5 h-5" />, text: 'مراكز بيانات تقليدية تستهلك رأس المال دون تقديم مرونة تشغيلية تُذكر.' },
              { icon: <Globe className="w-5 h-5" />, text: 'تبني السحابة متوقف بسبب متطلبات السيادة وإقامة البيانات.' },
              { icon: <Cloud className="w-5 h-5" />, text: 'بيئات هجينة تُدار في أنظمة متفرقة — لا نموذج تشغيل موحد.' },
              { icon: <Activity className="w-5 h-5" />, text: 'عمليات بنية تحتية يدوية على نطاق يتطلب الأتمتة.' },
              { icon: <Container className="w-5 h-5" />, text: 'لا طبقة منصة بين البنية التحتية وفرق التطوير.' },
              { icon: <HardDrive className="w-5 h-5" />, text: 'دورات شراء البنية التحتية منفصلة عن سرعة الأعمال.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#00BFFF30] flex-row-reverse">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#00BFFF15', color: ACCENT }}>{item.icon}</div>
                <p className="text-text-primary text-sm leading-relaxed text-right">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. القدرات الأساسية ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>كيف نحقق ذلك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-right">القدرات الأساسية</h2>
          <p className="text-text-muted text-base mb-10 text-right">ست قدرات. كل قدرة مصممة لتحقيق نتيجة سيادية وأداء ملموسين.</p>

          <div className="space-y-4">
            {[
              {
                icon: <Cloud className="w-5 h-5" />,
                title: 'استراتيجية السحابة والتحديث',
                desc: 'تقييم محافظ أحمال العمل، تحديد الحالة المستهدفة، وبناء خارطة طريق تحديث توازن بين المرونة والسيادة والاقتصاد — متوائمة مع استراتيجية الأعمال، لا حوافز مورّدي السحابة.',
                outcomes: ['استراتيجية توزيع أحمال العمل: سحابة، هجين، سيادي، ومحلي', 'خارطة طريق تحديث مرتَّبة حسب الأثر التجاري والجدوى', 'نموذج تكلفة كلية للملكية يقارن بين الوضع الحالي والمعمارية المستهدفة', 'استراتيجية ترحيل مع تخفيف المخاطر واستمرارية الأعمال'],
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: 'منصات السحابة الهجينة',
                desc: 'تصميم ونشر وتشغيل منصات سحابة هجينة تمتد من مركز البيانات الخاص إلى السحابة العامة — بإدارة وحوكمة وأتمتة موحَّدة عبر جميع البيئات.',
                outcomes: ['منصة موحَّدة تشمل المحلي والسيادي والسحابة العامة', 'إدارة وأمن وحوكمة متسقة عبر جميع البيئات', 'قابلية نقل أحمال العمل تلغي الاحتكار السحابي', 'كتالوج خدمات يمكّن الاستهلاك الذاتي والتزويد الآلي'],
              },
              {
                icon: <Container className="w-5 h-5" />,
                title: 'Kubernetes وهندسة المنصات',
                desc: 'بناء منصات مطورين داخلية على Kubernetes — توفر تنسيق الحاويات، شبكة الخدمات، خطوط أنابيب CI/CD، وقدرات خدمة ذاتية تسرّع سرعة الفرق الهندسية.',
                outcomes: ['منصة Kubernetes مدارة مع حوكمة متعددة المجموعات', 'بوابة مطورين ذاتية الخدمة تقلل أوقات انتظار البنية التحتية', 'خطوط أنابيب CI/CD آلية تسرّع وتيرة النشر', 'شبكة خدمات توفر المراقبة والأمن وإدارة الحركة'],
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: 'البنية التحتية السيادية وإقامة البيانات',
                desc: 'تصميم معماريات بنية تحتية تلبي متطلبات إقامة البيانات السعودية — تضمن عدم مغادرة البيانات للحدود المصرَّح بها مع الحفاظ على مرونة السحابة الأصلية.',
                outcomes: ['معمارية سيادية تضمن بقاء البيانات داخل النطاق القضائي السعودي', 'منصات سحابة خاصة وهجينة تلبي متطلبات الإقامة', 'تشغيل معزول هوائيًا لأحمال العمل المصنَّفة', 'وثائق امتثال تدعم متطلبات هيئة الأمن السيبراني والتدقيق القطاعي'],
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: 'أتمتة البنية التحتية والمراقبة الشاملة',
                desc: 'أتمتة دورة حياة البنية التحتية — التزويد، التهيئة، التصحيح، والتوسع — مع مراقبة شاملة عبر الأداء والتكلفة والسعة والامتثال.',
                outcomes: ['بنية تحتية ككود تمكّن تزويدًا قابلًا للتكرار والتدقيق', 'تصحيح آلي وإنفاذ امتثال عبر جميع البيئات', 'مراقبة موحَّدة: المقاييس والسجلات والتتبع والتكلفة في رؤية واحدة', 'إدارة استباقية للسعة تمنع تدهور الأداء'],
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: 'عمليات البنية التحتية والتطور المستمر',
                desc: 'تشغيل ومراقبة وتطوير مستمر لمنصة البنية التحتية — ضمان الموثوقية والأداء والتكيف مع تغير أحمال العمل والمتطلبات التنظيمية.',
                outcomes: ['مراقبة بنية تحتية ٢٤×٧ مع استجابة استباقية للحوادث', 'تخطيط السعة وإدارة دورة الحياة عبر جميع أصول البنية التحتية', 'تطور مستمر للمنصة متوائم مع تغيرات أحمال العمل والأنظمة', 'عمليات بضمان اتفاقية مستوى خدمة مع التزامات أداء وتوافر محدَّدة'],
              },
            ].map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF1A]">
                <div className="flex flex-col md:flex-row md:items-start gap-5 flex-row-reverse">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{cap.icon}</div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o, j) => (
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

        {/* ═══ 3.5 كيف نحقق ذلك ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>كيف نحقق ذلك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">ثلاثة نماذج تنفيذ متكاملة — عبر جميع القدرات.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/ar/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">الاستشارات والتخطيط</h3>
              <p className="text-tiny text-text-muted">تقييم جاهزية الذكاء الاصطناعي · استشارات الامتثال والحوكمة · الاستراتيجية وخارطة الطريق</p>
            </Link>
            <Link to="/ar/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">التنفيذ والتسليم</h3>
              <p className="text-tiny text-text-muted">نشر الذكاء الاصطناعي والأتمتة · تسليم المنصات والتطبيقات · خط أنابيب MLOps</p>
            </Link>
            <Link to="/ar/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">العمليات المدارة</h3>
              <p className="text-tiny text-text-muted">عمليات منصات ٢٤×٧ · مركز عمليات أمنية كخدمة · مستويات خدمة متدرّجة (أساسي/متقدم/متميز)</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. لماذا بيونك سوليوشنز ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12 text-right"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <SectionLabel>لماذا بيونك سوليوشنز</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يبني أسسًا رقمية سيادية.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'السيادة أولًا. مصمَّمة من البداية.', desc: 'كل معمارية نصممها تبدأ بمتطلبات إقامة البيانات السعودية وضوابط هيئة الأمن السيبراني والمتطلبات القطاعية — لا تُعامل كفكرة لاحقة أو ميزة إضافية.' },
                { title: 'هجينة بالتصميم. لا بالصدفة.', desc: 'نصمم منصات تمتد من مركز البيانات الخاص إلى السحابة السيادية إلى السحابة العامة — بإدارة موحَّدة ومرونة لوضع أحمال العمل حيث تنتمي.' },
                { title: 'هندسة متعددة المورّدين. بدون احتكار.', desc: 'نصمم عبر Dell و IBM و Platform9 و Intel — نختار البنية التحتية المناسبة لكل حمل عمل، بناءً على ملاءمة المعمارية لا حوافز المورّد.' },
                { title: 'شريك واحد. مسؤولية كاملة.', desc: 'من استراتيجية البنية التحتية مرورًا بنشر المنصة إلى عمليات ٢٤×٧ — علاقة واحدة مسؤولة عبر دورة حياة البنية التحتية الكاملة.' },
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

        {/* ═══ 5. المنظومة التقنية ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>التقنية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-right">المنظومة التقنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#00BFFF1A]">
                <div className="flex items-center gap-4 mb-3 flex-row-reverse">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99' }}>{p.role}</span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed text-right">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. التطبيقات القطاعية ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>أين نطبّقها</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">التطبيقات القطاعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { industry: 'القطاع الحكومي', apps: 'منصات سحابة وطنية، مراكز بيانات سيادية، بنية تحتية لأحمال العمل المصنَّفة، استضافة متوافقة مع هيئة الأمن السيبراني.' },
              { industry: 'الخدمات المالية والمصرفية', apps: 'بنية تحتية متوافقة مع البنك المركزي، منصات الصيرفة الأساسية، مراكز بيانات عالية التوفر، عزل أحمال العمل التنظيمية.' },
              { industry: 'الرعاية الصحية', apps: 'إقامة البيانات السريرية، بنية تصوير طبي PACS، أنظمة سريرية عالية التوفر، سيادة بيانات المرضى.' },
              { industry: 'النفط والغاز والطاقة', apps: 'تقارب بنية التقنية التشغيلية والتقنية المعلوماتية، حوسبة طرفية للأصول البعيدة، حوسبة عالية الأداء لنمذجة المكامن، منصات بيانات سيادية.' },
              { industry: 'الصناعة والتصنيع', apps: 'حوسبة طرفية لعمليات المصانع، بنية 5G خاصة، توفر عالٍ لأنظمة الإنتاج، منصات سلسلة الإمداد.' },
              { industry: 'الاتصالات وتقنية المعلومات', apps: 'بنية NFV، منصات 5G الأساسية، سحابة طرفية للخدمات منخفضة الكمون، ترحيل BSS/OSS إلى السحابة.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-[#00BFFF1A] text-right">
                <h3 className="font-semibold text-base mb-2 text-text-primary">{item.industry}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.apps}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/ar/industries/government" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
              استكشف التطبيقات القطاعية <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. رؤى مختارة ═══ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>وجهات نظر</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">رؤى مختارة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: 'الاستراتيجية',
                title: 'السحابة الهجينة نموذج تشغيل',
                desc: 'لماذا يعتمد نجاح السحابة الهجينة على العمليات والحوكمة والأتمتة الموحَّدة — لا على أي مورّدي سحابة في المزيج.',
              },
              {
                tag: 'المملكة العربية السعودية',
                title: 'سيادة البيانات كمعمارية',
                desc: 'كيف تصمم المؤسسات السعودية بنية تحتية تلبي متطلبات الإقامة مع تقديم المرونة التي يطلبها المطورون وفرق البيانات.',
              },
              {
                tag: 'الهندسة',
                title: 'ضرورة هندسة المنصات',
                desc: 'لماذا أصبحت منصات المطورين الداخلية الفارق بين بنية تحتية تمكّن الابتكار وبنية تحتية تعيقه.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF12] text-right">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: '#00BFFF99' }}>
                  <ExternalLink className="w-3 h-3" />
                  اقرأ الرؤية
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 7.5 المخططات المرجعية ═══ */}
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
              { title: 'منصة الذكاء الاصطناعي السيادية', industry: 'حكومي', slug: 'sovereign-ai-platform' },
              { title: 'بنية تحتية مصرفية متوافقة مع البنك المركزي', industry: 'مصرفي', slug: 'sama-compliant-banking-infra' },
              { title: 'الذكاء الصناعي والعمليات التنبؤية', industry: 'نفط وغاز', slug: 'industrial-intelligence-predictive-ops' },
            ].map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?capability=infra" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              عرض جميع المخططات ذات الصلة <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 8. الدعوة إلى التواصل ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              هل أنتم مستعدون لبناء<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#60A5FA] bg-clip-text text-transparent">أسسكم الرقمية السيادية</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              دعونا نناقش كيف يمكن للبنية التحتية السيادية والسحابة الهجينة تسريع تحولكم الرقمي — مع الإقامة والمرونة المدمجتين من البداية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                ابدأ المحادثة
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/blueprints?capability=infra"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300">
                استعرض مخططات التحول
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
