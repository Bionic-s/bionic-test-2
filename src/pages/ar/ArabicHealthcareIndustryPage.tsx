import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';
const heroBg = `${import.meta.env.BASE_URL}images/ai_case_study_image.avif`;

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [{"pre":"تأخير التشخيص","text":"تراكمات الأشعة وعلم الأمراض تُؤخر التشخيصات الحرجة."},{"pre":"تجربة مريض متجزئة","text":"الجدولة والفرز والمتابعة مشتتة عبر أنظمة منفصلة."},{"pre":"أنظمة وبيانات متفرقة السريرية","text":"بيانات السجل الطبي ونظام الصور والمختبر غير متكاملة."},{"pre":"ضعف الكفاءة التشغيلية","text":"إدارة الأسرة والتوظيف وتخصيص الموارد ما زالت يدوية."},{"pre":"فجوات أمن المعلومات الصحية","text":"حماية معلومات المريض غير متسقة عبر الأنظمة المتعددة."},{"pre":"تنسيق التجمعات الصحية","text":"النموذج الجديد يفرض مشاركة البيانات عبر المرافق المختلفة."}];
const priorities = [{"title":"الذكاء السريري والتشخيص","desc":"تصوير طبي بالذكاء الاصطناعي، دعم القرار السريري، وأنظمة الإنذار المبكر.","icon":"Cpu"},{"title":"تجربة مريض ذكية","desc":"بوابة مريض موحدة، فرز بالذكاء الاصطناعي، ورحلات رعاية مخصصة.","icon":"Heart"},{"title":"منصة بيانات الرعاية الصحية","desc":"بحيرة بيانات سريرية موحدة، تحليلات Patient 360.","icon":"TrendingUp"},{"title":"الذكاء التشغيلي","desc":"إدارة أسرة تنبؤية، تحسين توظيف بالذكاء الاصطناعي.","icon":"TrendingUp"},{"title":"أمن المعلومات الصحية","desc":"Zero Trust للرعاية الصحية، المرونة ضد برامج الفدية، أمن الأجهزة الطبية.","icon":"Shield"},{"title":"تكامل التجمعات الصحية","desc":"مشاركة بيانات عبر المرافق، تنسيق الإحالات.","icon":"Users"}];
const capabilities = [{"cap":"الذكاء الاصطناعي المؤسسي والأتمتة","app":"ذكاء التصوير الطبي، معالجة اللغة الطبيعية السريرية، التوثيق السريري الآلي"},{"cap":"البيانات والتحليلات والذكاء","app":"بحيرة بيانات سريرية، تحليلات Patient 360، لوحات صحة السكان"},{"cap":"تطبيقات الأعمال وتجربة العملاء","app":"منصة تجربة المريض، إدارة علاقات العملاء للرعاية الصحية"},{"cap":"التكامل والعمليات الذكية","app":"تكامل السجل الطبي/نظام الصور/المختبر، معمارية FHIR API"},{"cap":"الأمن السيبراني والمرونة السيبرانية","app":"أمن المعلومات الصحية، أمن الأجهزة الطبية، Zero Trust للرعاية الصحية"},{"cap":"البنية التحتية السيادية والسحابة الهجينة","app":"بنية تحتية متوافقة مع المعلومات الصحية، منصات سريرية عالية التوفر"}];
const capPaths: string[] = ["/ar/capabilities/ai","/ar/capabilities/data","/ar/capabilities/apps","/ar/capabilities/integration","/ar/capabilities/cyber","/ar/capabilities/infra"];
const services = [{"svc":"الاستشارات والتخطيط","app":"استراتيجية الصحة الرقمية، خارطة طريق الذكاء السريري، امتثال المعلومات الصحية"},{"svc":"التنفيذ والتسليم","app":"نشر الذكاء السريري، تسليم منصة المريض، بناء منصة البيانات الصحية"},{"svc":"العمليات المدارة","app":"عمليات منصات سريرية على مدار الساعة، عمليات أمن المعلومات الصحية"}];
const svcPaths: string[] = ["/ar/services/advisory","/ar/services/implementation","/ar/services/operations"];
const blueprints = [{"title":"تجربة المريض الذكية","label":"رعاية صحية"},{"title":"الذكاء السريري والذكاء الاصطناعي الطبي","label":"رعاية صحية"}];
const bpSlugs: string[] = ["intelligent-patient-experience","clinical-intelligence-medical-ai"];
const partners = [{"name":"Salesforce","role":"Health Cloud وإدارة علاقات المرضى","tech":"Health Cloud · Patient 360 · مركز اتصال ذكي"},{"name":"IBM","role":"الذكاء السريري والبنية التحتية الصحية","tech":"watsonx · FlashSystem · QRadar"},{"name":"MuleSoft","role":"تكامل الرعاية الصحية وواجهات FHIR","tech":"Anypoint Platform · FHIR API · تكامل السجل الطبي"},{"name":"Informatica","role":"إدارة البيانات السريرية الرئيسية","tech":"Patient 360 MDM · جودة البيانات السريرية"},{"name":"Google","role":"منصة بيانات الرعاية الصحية","tech":"Healthcare Data Engine · Vertex AI · BigQuery"},{"name":"Dell Technologies","role":"بنية تحتية متوافقة مع المعلومات الصحية","tech":"PowerProtect · PowerScale · VxRail"},{"name":"Intel","role":"تسريع الذكاء السريري","tech":"Gaudi 3 · OpenVINO · Xeon"},{"name":"Tableau","role":"لوحات سريرية وتحليلات صحة السكان","tech":"Tableau Cloud · تحليلات مضمنة"}];
const outcomes = [{"metric":"حتى 60%","label":"تسريع وقت التشخيص"},{"metric":"فوري","label":"رؤى سريرية بالذكاء"},{"metric":"30–50%","label":"انخفاض أوقات الانتظار"},{"metric":"رؤية موحدة","label":"Patient 360"},{"metric":"مستمر","label":"امتثال المعلومات الصحية"}];

const iconMap: Record<string, React.ComponentType<any>> = { Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench };

export default function ArabicHealthcareIndustryPage() {
  useEffect(() => { trackIndustryPageView('الرعاية الصحية'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>الرعاية الصحية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="التحول بالذكاء الاصطناعي للرعاية الصحية — تشخيص التصوير الطبي بالذكاء الاصطناعي، أتمتة التوثيق السريري، وتحسين تدفق المرضى." />
      </Helmet>
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5)  %, var(--bg-primary)  %)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>قطاع الرعاية الصحية</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            تحول الرعاية الصحية<br />
            <span style={{ color: ACCENT }}>من خلال الذكاء الاصطناعي السريري.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            من التصوير الطبي المدعوم بالذكاء الاصطناعي إلى منصات تجربة المريض الذكية — نمكّن مقدمي الرعاية الصحية والمستشفيات والتجمعات الصحية السعودية من تحقيق نقلة نوعية في الكفاءة السريرية والتشغيلية.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>بيانات الرعاية الصحية وفيرة — لكن الذكاء السريري نادر، والتحول الحقيقي لم يبدأ بعد.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>تراكمات التصوير الطبي تؤخر التشخيصات الحرجة. بيانات المريض متناثرة عبر أنظمة منفصلة. الموارد تُوزع يدوياً. وفجوات أمن المعلومات الصحية تُعرض بيانات المرضى للخطر.</p>
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
          <SectionLabel>القدرات ذات الصلة</SectionLabel>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            تقنيات عالمية — بمعمارية مصممة للمملكة.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            لسنا بائعين. نصمم منصات سيادية باستخدام أفضل التقنيات العالمية — مختارة بناءً على الكفاءة، وليس حوافز إعادة البيع.
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
              هل أنتم مستعدون لتطوير الرعاية الصحية بالذكاء السريري؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لنناقش كيف تساهم حلول الذكاء السريري ومنصات تجربة المريض والبنية التحتية المتوافقة في تحقيق نتائج أفضل.
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
