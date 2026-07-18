import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';
const heroBg = `${import.meta.env.BASE_URL}images/hero/ai-enterprise.avif`;

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [{"pre":"تقارير البنك المركزي — يدوية","text":"التقارير التنظيمية بطيئة وعرضة للأخطاء وفرق الامتثال تحت ضغط متواصل."},{"pre":"تصاعد تعقيد الاحتيال","text":"الأنظمة التقليدية عاجزة عن رصد أنماط الاحتيال المعقدة آنيًا."},{"pre":"اختناقات اعرف عميلك","text":"التحقق اليدوي من المستندات يطيل مدة اكتساب العميل لأسابيع."},{"pre":"تشتت بيانات العملاء","text":"بيانات موزعة بين أنظمة وقنوات متعددة — غياب منظور موحد لبيانات العملاء."},{"pre":"متطلبات المصرفية المفتوحة","text":"معمارية API آمنة مطلوبة. الأنظمة التقليدية لم تصمم للانكشاف عبر API."},{"pre":"مرونة البنية التحتية","text":"متطلبات استمرارية الأعمال تتطلب توفرًا بنسبة ٩٩.٩٩% مع تعافٍ سيبراني كامل."}];
const priorities = [{"title":"المخاطر والامتثال المدعوم بالذكاء","desc":"كشف الاحتيال الفوري، مراقبة معاملات مكافحة غسل الأموال، وأتمتة تنظيم البنك المركزي.","icon":"Shield"},{"title":"ذكاء العملاء","desc":"توحيد بيانات Customer 360، تخصيص مدفوع بالذكاء الاصطناعي، والمشاركة التنبؤية.","icon":"Users"},{"title":"المصرفية الرقمية الحديثة","desc":"منصات مصرفية رقمية أولاً، تحول الخدمات المصرفية عبر الجوال.","icon":"CreditCard"},{"title":"الخدمات المصرفية المفتوحة","desc":"معمارية API، بوابة API آمنة، وامتثال إطار المصرفية المفتوحة.","icon":"GitBranch"},{"title":"إجراءات اعرف عميلك والانضمام الرقمي للعملاء","desc":"معالجة ذكية للمستندات، تحقق آلي من الهوية — أسرع بثلاث مرات.","icon":"TrendingUp"},{"title":"بنية تحتية مرنة سيبرانيًا","desc":"بنية تحتية متوافقة مع استمرارية الأعمال، Zero Trust، توفر +٩٩.٩٩%.","icon":"Shield"}];
const capabilities = [{"cap":"الذكاء الاصطناعي المؤسسي والأتمتة","app":"ذكاء كشف الاحتيال، نمذجة مخاطر الائتمان، المعالجة الذكية للمستندات"},{"cap":"البيانات والتحليلات والذكاء","app":"منصة بيانات Customer 360، لوحات مخاطر فورية، تحليلات تنظيمية"},{"cap":"تطبيقات الأعمال وتجربة العملاء","app":"تحول إدارة علاقات العملاء، بوابات مصرفية رقمية، مركز اتصال ذكي"},{"cap":"التكامل والعمليات الذكية","app":"واجهات API مصرفية مفتوحة، تكامل مصرفي أساسي، خطوط دفع فورية"},{"cap":"الأمن السيبراني والمرونة السيبرانية","app":"امتثال إطار البنك المركزي، مركز عمليات أمنية، PCI-DSS"},{"cap":"البنية التحتية السيادية والسحابة الهجينة","app":"بنية تحتية متوافقة مع استمرارية الأعمال، توفر +٩٩.٩٩%"}];
const capPaths: string[] = ["/ar/capabilities/ai","/ar/capabilities/data","/ar/capabilities/apps","/ar/capabilities/integration","/ar/capabilities/cyber","/ar/capabilities/infra"];
const services = [{"svc":"الاستشارات والتخطيط","app":"الجاهزية التنظيمية لمتطلبات البنك المركزي، استراتيجية الاحتيال، معمارية المصرفية المفتوحة"},{"svc":"التنفيذ والتسليم","app":"نشر ذكاء الاحتيال، بناء Customer 360، منصة المصرفية المفتوحة"},{"svc":"العمليات المدارة","app":"مركز عمليات أمنية مصرفي ٢٤×٧، عمليات بنية تحتية بضمان مستوى الخدمة"}];
const svcPaths: string[] = ["/ar/services/advisory","/ar/services/implementation","/ar/services/operations"];
const blueprints = [{"title":"كشف الاحتيال الفوري","label":"بنوك"},{"title":"رؤية موحدة للعميل وتعزيز التفاعل الرقمي","label":"بنوك"},{"title":"بنية تحتية متوافقة مع البنك المركزي","label":"بنوك"}];
const bpSlugs: string[] = ["real-time-fraud-detection","customer-360-intelligent-engagement","sama-compliant-banking-infra"];
const partners = [{"name":"Salesforce","role":"إدارة علاقات العملاء والمشاركة المصرفية","tech":"Financial Services Cloud · Marketing Cloud · Einstein AI"},{"name":"IBM","role":"ذكاء الاحتيال والبنية التحتية المصرفية","tech":"watsonx · QRadar SOC · FlashSystem"},{"name":"Informatica","role":"إدارة البيانات الرئيسية وحوكمة Customer 360","tech":"Customer 360 MDM · جودة البيانات"},{"name":"MuleSoft","role":"واجهات API مصرفية مفتوحة","tech":"Anypoint Platform · API Manager · Flex Gateway"},{"name":"Dell Technologies","role":"التعافي السيبراني والبنية التحتية المرنة","tech":"PowerProtect Cyber Recovery · PowerMax · VxRail"},{"name":"Intel","role":"الحوسبة السرية وتسريع الذكاء","tech":"Intel SGX · TDX · Gaudi 3"},{"name":"Tableau","role":"لوحات معلومات تنظيمية","tech":"Tableau Cloud · تحليلات مضمنة"}];
const outcomes = [{"metric":"+٩٠%","label":"دقة كشف الاحتيال"},{"metric":"مسرّع","label":"دورات تقارير البنك المركزي"},{"metric":"٣× أسرع","label":"تأهيل اعرف عميلك"},{"metric":"+٩٩.٩٩%","label":"توفر البنية التحتية"},{"metric":"٩٠ يومًا","label":"نشر المصرفية المفتوحة"},{"metric":"< ٤ ساعات","label":"وقت التعافي السيبراني"}];

const iconMap: Record<string, React.ComponentType<any>> = { Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench };

export default function ArabicBankingIndustryPage() {
  useEffect(() => { trackIndustryPageView('الخدمات المالية والمصرفية'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>البنوك والخدمات المالية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="التحول بالذكاء الاصطناعي للبنوك والخدمات المالية — تحليلات مكافحة غسل الأموال والاحتيال، نمذجة مخاطر الائتمان، وأتمتة التقارير التنظيمية." />
      </Helmet>
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5)  %, var(--bg-primary)  %)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>القطاع المصرفي والمالي</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            تمكين التحول المصرفي<br />
            <span style={{ color: ACCENT }}>بما ينسجم مع متطلبات البنك المركزي السعودي.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            من كشف الاحتيال الفوري إلى البنية التحتية المتوافقة مع البنك المركزي السعودي، ومن Customer 360 إلى الخدمات المصرفية المفتوحة — نمكّن المؤسسات المالية السعودية من تحقيق الامتثال التنظيمي والكفاءة التشغيلية والميزة التنافسية.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>وتيرة المتطلبات التنظيمية من البنك المركزي السعودي تتسارع — والأنظمة التقليدية عاجزة عن المواكبة.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>التقارير التنظيمية اليدوية تثقل كاهل فرق الامتثال. الأنظمة التقليدية عاجزة عن رصد أنماط الاحتيال المعقدة. بيانات العملاء متناثرة عبر أنظمة متفرقة — والفرصة تضيع.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {realityItems.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[ACCENT]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>أولويات التحول</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>ست أولويات للتحول المؤسسي.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => {
              const IconComp = iconMap[p.icon] || Brain;
              return (
                <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[ACCENT]/25 transition-all duration-300">
                  <IconComp className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                  <h3 className="font-semibold text-sm mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>{p.title}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>القدرات المرتبطة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>مواءمة قدرات بيونك مع متطلبات القطاع.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={capPaths[i]} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[ACCENT]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[ACCENT] transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>كيف نحقق ذلك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>ثلاثة نماذج تنفيذ متكاملة لهذا القطاع.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={svcPaths[i]} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[ACCENT]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[ACCENT] transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المخططات المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>معماريات مرجعية تطبيقية.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bpSlugs[i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[ACCENT]/25 transition-all duration-300">
                <span className="text-tiny text-[ACCENT]/60 mb-2 block">{bp.label}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[ACCENT] transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[ACCENT]/40 group-hover:text-[ACCENT] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            أفضل التقنيات العالمية ضمن معماريات مصممة لتلبية متطلبات السوق السعودي.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            لا نبيع منتجات. نصمم منصات سيادية باستخدام أفضل التقنيات العالمية — مختارة بناءً على الكفاءة، وليس حوافز إعادة البيع.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[ACCENT]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <PartnerLogo partner={p} size="md" />
                  <div>
                    <h3 className="font-semibold text-sm">{p.name}</h3>
                    <p className="text-tiny text-text-muted" style={{ fontFamily: "'Tajawal', sans-serif" }}>{p.role}</p>
                  </div>
                </div>
                <p className="text-tiny text-text-muted leading-relaxed border-t border-white/5 pt-3">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>النتائج المتوقعة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>أثر قابل للقياس عبر التحول المؤسسي.</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-[ACCENT]/30 transition-all">
                <div className="text-xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted" style={{ fontFamily: "'Tajawal', sans-serif" }}>{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              هل أنتم مستعدون لتطوير عملياتكم المصرفية — وفق أطر البنك المركزي؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لنناقش كيف تساهم حلول ذكاء المخاطر وCustomer 360 والبنية التحتية المتوافقة مع البنك المركزي في تطوير مؤسستكم.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                تواصل معنا
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link to="/ar/blueprints" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[ACCENT]/30"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                استعرض المخططات المرجعية
              </Link>
            </div>
          </div>
        </motion.section>

    </div>
);
}
