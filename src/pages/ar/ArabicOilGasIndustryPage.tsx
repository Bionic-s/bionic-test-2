import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
const heroBg = `${import.meta.env.BASE_URL}images/it-infrastructure.avif`;

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [{"pre":"التوقف غير المخطط","text":"أعطال المعدات تكلف الملايين — والصيانة لا تزال قائمة على التقويم وليس الحالة."},{"pre":"مخاطر تقارب OT/IT","text":"أنظمة التحكم الصناعي متصلة بدون تجزئة كافية أو كشف تهديدات."},{"pre":"عمليات بعيدة غير مرئية","text":"رؤية فورية محدودة للأصول الموزعة عبر مناطق شاسعة."},{"pre":"بيانات محتجزة","text":"بيانات تشغيلية جمعت لسنوات — لكنها لم تحلل."},{"pre":"الامتثال البيئي","text":"مراقبة انبعاثات يدوية — بطيئة وعرضة للأخطاء."},{"pre":"ضغط التحول في الطاقة","text":"تتبع الكربون وتحسين الكفاءة أصبحت متطلبات تشغيلية."}];
const priorities = [{"title":"الصيانة التنبؤية","desc":"توقع أعطال المعدات بالذكاء الاصطناعي باستخدام تحليلات إنترنت الأشياء والتوائم الرقمية.","icon":"Wrench"},{"title":"تقارب الأمن السيبراني OT/IT","desc":"أمن OT متعدد الطبقات مع تجزئة الشبكة وكشف التهديدات.","icon":"Shield"},{"title":"ذكاء من الحافة إلى السحابة","desc":"تحليلات فورية مع إدارة مركزية لنماذج الذكاء الاصطناعي.","icon":"Cpu"},{"title":"ذكاء الكربون والطاقة","desc":"تتبع الانبعاثات بالذكاء الاصطناعي وتحسين الطاقة.","icon":"BarChart3"},{"title":"عمليات التوأم الرقمي","desc":"نسخ افتراضية للأصول المادية للمحاكاة والتحسين.","icon":"TrendingUp"},{"title":"ذكاء سلسلة الإمداد","desc":"لوجستيات ذكية وتنبؤ بالطلب وإدارة مخاطر الموردين.","icon":"TrendingUp"}];
const capabilities = [{"cap":"الذكاء الاصطناعي المؤسسي والأتمتة","app":"ذكاء الصيانة التنبؤية، كشف الشذوذ، الرؤية الحاسوبية لفحص الأصول"},{"cap":"البيانات والتحليلات والذكاء","app":"منصة بيانات إنترنت الأشياء، لوحات تشغيلية فورية، تحليلات الانبعاثات"},{"cap":"التكامل والعمليات الذكية","app":"تكامل OT/IT، خطوط بيانات من الحافة إلى السحابة، اتصال SCADA"},{"cap":"الأمن السيبراني والمرونة السيبرانية","app":"أمن OT/IT، حماية ICS، امتثال IEC 62443"},{"cap":"البنية التحتية السيادية والسحابة الهجينة","app":"حوسبة طرفية، سحابة هجينة للعمليات البعيدة، بنية ذكاء للطاقة"},{"cap":"عمليات التقنية","app":"عمليات منصات من الحافة إلى السحابة، مراقبة OT/IT موحدة 24×7"}];
const capPaths: string[] = ["/ar/capabilities/ai","/ar/capabilities/data","/ar/capabilities/integration","/ar/capabilities/cyber","/ar/capabilities/infra","/ar/capabilities/ops"];
const services = [{"svc":"الاستشارات والتخطيط","app":"استراتيجية تقارب OT/IT، خارطة طريق الصيانة التنبؤية، تصميم ذكاء الكربون"},{"svc":"التنفيذ والتسليم","app":"نشر منصة إنترنت الأشياء، تنفيذ التوأم الرقمي، نشر أمن OT"},{"svc":"العمليات المدارة","app":"مراقبة OT/IT 24×7، عمليات الصيانة التنبؤية، إدارة أسطول الحافة"}];
const svcPaths: string[] = ["/ar/services/advisory","/ar/services/implementation","/ar/services/operations"];
const blueprints = [{"title":"الذكاء الصناعي والعمليات التنبؤية","label":"نفط وغاز"},{"title":"تكامل OT/IT والعمليات الآمنة","label":"نفط وغاز"}];
const bpSlugs: string[] = ["industrial-intelligence-predictive-ops","ot-it-integration-secure-ops"];
const partners = [{"name":"Dell Technologies","role":"البنية التحتية الطرفية والبيانات الصناعية","tech":"PowerEdge · Streaming Data Platform · PowerStore"},{"name":"IBM","role":"الذكاء التنبؤي وعمليات أمن OT","tech":"Maximo · watsonx · QRadar"},{"name":"Intel","role":"الذكاء الطرفي والحوسبة الصناعية","tech":"OpenVINO · Xeon · مسرعات الذكاء الطرفي"},{"name":"Tableau","role":"لوحات تشغيلية وتحليلات الانبعاثات","tech":"Tableau Cloud · تحليلات مضمنة"},{"name":"Salesforce","role":"إدارة علاقات عملاء الطاقة","tech":"Energy CRM · إدارة الخدمة الميدانية"},{"name":"Red Hat","role":"منصة صناعية وأتمتة","tech":"OpenShift · Ansible Automation · RHEL"}];
const outcomes = [{"metric":"30–50%","label":"أقل أحداث توقف"},{"metric":"+20%","label":"تحسين استخدام الأصول"},{"metric":"99.9%","label":"توفر شبكة OT"},{"metric":"فوري","label":"كشف تهديدات OT"},{"metric":"شامل","label":"مراقبة آلية للانبعاثات"}];

const iconMap: Record<string, React.ComponentType<any>> = { Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench };

export default function ArabicOilGasIndustryPage() {
  useEffect(() => { trackIndustryPageView('النفط والغاز والطاقة'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>النفط والغاز والطاقة</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            عمليات طاقة ذكية —<br />
            <span style={{ color: ACCENT }}>من الصيانة التنبؤية إلى ذكاء الكربون.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            من الصيانة التنبؤية المدعومة بالذكاء الاصطناعي إلى أمن OT/IT، ومن الذكاء من الحافة إلى السحابة إلى تتبع الكربون — نساعد شركات الطاقة السعودية على تعظيم وقت تشغيل الأصول وتقليل المخاطر.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>المخاطر التشغيلية في الطاقة تقاس بالملايين لكل ساعة توقف.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>أعطال المعدات تكلف ملايين. أنظمة التحكم الصناعي متصلة بدون أمن كافٍ. العمليات الميدانية البعيدة تفتقر للرؤية الفورية.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>كيف تتوافق قدرات بيونك مع متطلبات القطاع.</h2>
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
          <SectionLabel>كيف ننجز</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>ثلاثة نماذج تنفيذ مطبقة على القطاع.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>معماريات مرجعية مثبتة.</h2>
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
              مستعدون لتحويل عمليات الطاقة لديكم بالذكاء؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لنناقش كيف يمكن للصيانة التنبؤية وأمن OT/IT وذكاء الكربون أن تقلل المخاطر وتعظم قيمة الأصول.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}>
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
