import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Eye, Fingerprint, Lock, Database, FileWarning, Activity, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/cybersecurity-shield.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'IBM', role: 'عمليات الأمن وذكاء التهديدات', tech: 'QRadar SIEM · Guardium · Verify · X-Force · SOAR · MaaS360' },
  { name: 'Dell Technologies', role: 'التعافي السيبراني وحماية البيانات', tech: 'PowerProtect Cyber Recovery · Data Domain · CyberSense · مخزن معزول' },
  { name: 'Intel', role: 'أمن مثبت في العتاد وحوسبة سرية', tech: 'Intel TXT · SGX · TDX · Threat Detection Technology · vPro' },
  { name: 'Red Hat', role: 'منصة آمنة وأتمتة الامتثال', tech: 'OpenShift · Ansible Automation · RHEL · SELinux · OpenSCAP' },
];

export default function ArabicCybersecurityPage() {

  useEffect(() => { trackCapabilityPageView('Cybersecurity & Cyber Resilience'); }, []);
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
        <title>الأمن السيبراني والمرونة السيبرانية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="الأمن السيبراني والمرونة السيبرانية — مركز العمليات الأمنية، SIEM، نموذج Zero Trust، إدارة الهوية، والصمود ضد الفدية." />
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
            <Shield className="w-4 h-4 ml-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>الأمن السيبراني والمرونة السيبرانية</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#F87171] to-white bg-clip-text text-transparent">
              من الأمن التفاعلي<br />إلى المرونة السيبرانية.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            نبني برامج أمن سيبراني تحمي العمليات وتضمن الثقة التنظيمية وتمكّن التعافي — مصمَّمة خصيصاً لمشهد التهديدات ومتطلبات الامتثال في المملكة.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. الواقع ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">معظم المؤسسات مؤمَّنة على الورق — لا في الواقع التشغيلي.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FileWarning className="w-5 h-5" />, text: 'الأمن يُعامل كمربع امتثال — لا كقدرة تمكّن مرونة الأعمال.' },
              { icon: <Activity className="w-5 h-5" />, text: 'مشهد التهديدات يتطور أسرع من قدرات الكشف والاستجابة.' },
              { icon: <Fingerprint className="w-5 h-5" />, text: 'الهوية هي الحدود الجديدة — لكن تبني نموذج Zero Trust لا يزال متجزئًا.' },
              { icon: <Database className="w-5 h-5" />, text: 'ضغط تنظيمي متزايد: هيئة الأمن السيبراني، نظام حماية البيانات الشخصية، والتشريعات القطاعية.' },
              { icon: <FileWarning className="w-5 h-5" />, text: 'خطط تعافٍ تجتاز التدقيق لكنها تفشل عند اختبارها تحت ظروف هجوم حقيقية.' },
              { icon: <Eye className="w-5 h-5" />, text: 'عمليات أمنية تغرق في حجم التنبيهات، عمياء عن التهديدات الحقيقية.' },
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
          <p className="text-text-muted text-base mb-10 text-right">ست قدرات. كل قدرة مصممة لتحقيق نتيجة مرونة ملموسة.</p>

          <div className="space-y-4">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'استراتيجية الأمن السيبراني وإدارة المخاطر',
                desc: 'تقييم مشهد التهديدات، تحديد المخاطر التجارية كميًا، وبناء استراتيجية أمن سيبراني متعددة السنوات تتماشى مع قابلية المؤسسة لتحمّل المخاطر — لا مع خارطة طريق مورّد منتج.',
                outcomes: ['خط أساس للمخاطر السيبرانية محدَّد كميًا مقابل أثر الأعمال', 'استراتيجية متعددة السنوات مرتَّبة حسب تخفيض المخاطر لا تحديث التقنية', 'إطار حوكمة متوافق مع هيئة الأمن السيبراني والبنك المركزي والقطاعات', 'حالة استثمارية تربط الإنفاق الأمني بتخفيض ملموس للمخاطر'],
              },
              {
                icon: <Eye className="w-5 h-5" />,
                title: 'عمليات الأمن وكشف التهديدات',
                desc: 'بناء وتشغيل وتحسين مستمر لقدرة عمليات أمنية تكشف التهديدات الحقيقية أسرع وتستجيب بدقة.',
                outcomes: ['تقليص متوسط وقت الكشف والاستجابة للتهديدات الحقيقية', 'منصات SIEM و SOAR مضبوطة لبيئتك لا لأنماط عامة', 'ذكاء تهديدات مدمج في سير عمل الكشف التشغيلي', 'فرز تنبيهات يقلل الضوضاء ويبرز ما يهم فعلًا'],
              },
              {
                icon: <Fingerprint className="w-5 h-5" />,
                title: 'الهوية والوصول ونموذج Zero Trust',
                desc: 'تصميم ونشر معماريات أمنية محورها الهوية — الوصول الآمن للشبكة بنموذج Zero Trust، إدارة الوصول المميز، والتحقق المستمر.',
                outcomes: ['حوكمة هوية تشمل جميع المستخدمين والأجهزة ومسارات الوصول', 'معمارية Zero Trust تلغي الثقة الضمنية عبر المؤسسة', 'إدارة وصول مميز تؤمِّن أكثر الاعتمادات حساسية', 'تحقق مستمر يحل محل قرارات الوصول اللحظية'],
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: 'حماية البيانات والسيادة الرقمية',
                desc: 'حماية البيانات عبر دورة حياتها — التصنيف، التشفير، ضوابط الوصول، وإنفاذ السيادة الرقمية المتوافقة مع المتطلبات التنظيمية السعودية.',
                outcomes: ['تصنيف ووسم بيانات يُمكِّن ضوابط متناسبة مع المخاطر', 'تشفير وترميز يحمي البيانات في حالة السكون والنقل والاستخدام', 'إنفاذ سيادة بيانات متوافق مع نظام حماية البيانات الشخصية والحدود العابرة', 'مراقبة منع تسرب البيانات واستجابة لمحاولات التصدير غير المصرح'],
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: 'التعافي السيبراني ومرونة الأعمال',
                desc: 'تصميم واختبار قدرات تعافٍ سيبراني تعمل تحت ظروف هجوم حقيقية — مخازن معزولة، تعافٍ نظيف، واستمرارية أعمال تنجو من هجمات برامج الفدية.',
                outcomes: ['مخازن تعافٍ سيبراني معزولة تحمي آخر نسخة نظيفة معروفة', 'إجراءات تعافٍ من برامج الفدية مختبرة تحت ظروف واقعية', 'خطط استمرارية أعمال تغطي تقنية المعلومات والتقنية التشغيلية والأطراف الثالثة', 'أهداف وقت التعافي مُثبتة عبر محاكاة دورية لا وثائق فقط'],
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: 'عمليات الأمن المدارة والتحسين المستمر',
                desc: 'تشغيل ومراقبة وإنضاج مستمر لبرنامج الأمن — ضمان تطور الضوابط مع التهديدات، تغير الأنظمة، ونمو الأعمال.',
                outcomes: ['مراقبة أمنية على مدار الساعة مع تصعيد واستجابة محدَّدين', 'تحقق مستمر من الضوابط عبر اختبار آلي وفرق هجومية حمراء', 'مراقبة تغيرات تنظيمية تضمن امتثالًا مستمرًا للمتطلبات المتطورة', 'خارطة طريق نضج أمني بمراحل تحسين ربع سنوية'],
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
              <p className="text-tiny text-text-muted">نشر الذكاء الاصطناعي والأتمتة · تسليم المنصات والتطبيقات · مسار MLOps</p>
            </Link>
            <Link to="/ar/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">العمليات المدارة</h3>
              <p className="text-tiny text-text-muted">عمليات منصات على مدار الساعة · مركز عمليات أمنية كخدمة · مستويات خدمة متدرّجة (أساسي/متقدم/متميز)</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. لماذا بيونك سوليوشنز ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12 text-right"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <SectionLabel>لماذا بيونك سوليوشنز</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">الشريك الذي يبني المرونة، لا الامتثال فقط.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'مخاطر الأعمال. لا مخاطر التقنية.', desc: 'برامجنا السيبرانية تُقاس بتخفيض مخاطر الأعمال — لا بعدد الأدوات المنشورة أو الضوابط الموثَّقة. كل مهمة تبدأ بأثر فشل الأعمال.' },
                { title: 'خبرة تنظيمية سعودية. مدمجة.', desc: 'ضوابط الأمن السيبراني الأساسية للهيئة الوطنية، إطار المرونة السيبرانية للبنك المركزي، نظام حماية البيانات الشخصية — مدمجة من الاستراتيجية حتى العمليات، لا مضافَة بعد نتائج التدقيق.' },
                { title: 'المرونة أولًا. جاهزية التعافي.', desc: 'لا نبني دفاعات فقط — نضمن أنك تستطيع التعافي. كل مهمة تتضمن تصميم تعافٍ سيبراني واختباره تحت ظروف هجوم واقعية.' },
                { title: 'شريك واحد. مسؤولية كاملة.', desc: 'من استراتيجية الأمن مرورًا بعمليات مركز العمليات الأمنية إلى الأمن المدار — علاقة واحدة مسؤولة عبر دورة حياة الأمن والمرونة الكاملة.' },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#00BFFF1A]">
                <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99' }}>{p.role.split(' —')[0]}</span>
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
              { industry: 'القطاع الحكومي', apps: 'الامتثال الوطني للأمن السيبراني، حماية البنية التحتية الحيوية، الربط الآمن بين الجهات الحكومية.' },
              { industry: 'الخدمات المالية والمصرفية', apps: 'إطار المرونة السيبرانية للبنك المركزي، كشف الاحتيال، أمن SWIFT، التقارير التنظيمية.' },
              { industry: 'الرعاية الصحية', apps: 'حماية بيانات المرضى، أمن الأجهزة الطبية، مرونة الأنظمة السريرية، التعافي من برامج الفدية.' },
              { industry: 'النفط والغاز والطاقة', apps: 'أمن التقنية التشغيلية وأنظمة التحكم الصناعي، حماية SCADA، مرونة البنية التحتية الحيوية، الامتثال لهيئة الأمن السيبراني.' },
              { industry: 'الصناعة والتصنيع', apps: 'أمن التقنية التشغيلية، المخاطر السيبرانية لسلسلة الإمداد، حماية الملكية الفكرية، مرونة الإنتاج.' },
              { industry: 'الاتصالات وتقنية المعلومات', apps: 'أمن الشبكات، حماية بيانات المشتركين، امتثال البنية التحتية الحيوية، المرونة ضد هجمات الحرمان من الخدمة.' },
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
                title: 'المرونة السيبرانية ليست أمنًا سيبرانيًا',
                desc: 'لماذا المؤسسات التي تنجو من الحوادث السيبرانية هي التي استثمرت في التعافي — لا في الكشف فقط. المرونة تتطلب نهجًا مختلفًا جوهريًا.',
              },
              {
                tag: 'المملكة العربية السعودية',
                title: 'التنقل بين متطلبات هيئة الأمن السيبراني والبنك المركزي',
                desc: 'كيف تبني المؤسسات السعودية برامج أمنية تلبي المتطلبات التنظيمية وتحسّن فعليًا وضعها الأمني — لا درجات التدقيق فقط.',
              },
              {
                tag: 'القيادة',
                title: 'Zero Trust: معمارية، لا منتج',
                desc: 'لماذا يتطلب Zero Trust تحولًا في معمارية المؤسسة — ولماذا شراء منتج Zero Trust بدون المعمارية يخلق مخاطر أكثر مما يقلل.',
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
              { title: 'مركز العمليات السيبرانية الوطني', industry: 'حكومي', slug: 'national-soc' },
              { title: 'كشف الاحتيال الفوري', industry: 'مصرفي', slug: 'real-time-fraud-detection' },
              { title: 'Zero Trust المؤسسي', industry: 'مؤسسات', slug: 'enterprise-zero-trust' },
            ].map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300 text-right">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?capability=cyber" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
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
              هل أنتم مستعدون للانتقال من الأمن التفاعلي إلى<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#F87171] bg-clip-text text-transparent">المرونة السيبرانية</span>؟
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              دعونا نناقش كيف يمكن لبرنامج أمني متوائم مع الأعمال تقليل المخاطر وضمان الثقة التنظيمية وضمان التعافي.
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
                to="/ar/blueprints?capability=cyber"
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
