import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';
const heroBg = `${import.meta.env.BASE_URL}images/hero/ai-agents.avif`;

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [{"pre":"قوى عاملة مثقلة","text":"فرق عالية القيمة غارقة في عمل يدوي متكرر."},{"pre":"بيانات منعزلة","text":"أنظمة تخطيط الموارد وإدارة العلاقات — بيانات محتجزة في أنظمة متفرقة."},{"pre":"عمليات معطلة","text":"المشتريات والمالية والموارد البشرية — سير العمل بطيء ويدوي."},{"pre":"أنظمة عملاء تقليدية","text":"أنظمة العملاء غير مهيأة للاستفادة من قدرات الذكاء الاصطناعي."},{"pre":"تلاشي الحدود الأمنية","text":"العمل الهجين والسحابة يفرضان نموذج Zero Trust."},{"pre":"تقنية معلومات مثقلة","text":"حجم التذاكر ينمو بوتيرة أسرع من فرق تقنية المعلومات."}];
const priorities = [{"title":"فرق العمل المعززة بالذكاء الاصطناعي","desc":"وكلاء ذكاء يعملون مع الفرق البشرية — مع حوكمة تُبقي العنصر البشري ضمن حلقة القرار.","icon":"Brain"},{"title":"الذكاء الاصطناعي المؤسسي","desc":"ذكاء عبر كل وظيفة: المبيعات والتسويق والمالية والموارد البشرية.","icon":"Cpu"},{"title":"اتخاذ القرار المبني على البيانات","desc":"ذكاء أعمال تنفيذي، بيانات مؤسسية موحدة، تحليلات تنبؤية.","icon":"BarChart3"},{"title":"أمن Zero Trust","desc":"أمن متمركز حول الهوية، تجزئة دقيقة، تحقق مستمر.","icon":"Shield"},{"title":"تحديث المنصات","desc":"تحول إدارة علاقات العملاء، تكامل تخطيط الموارد، معمارية API.","icon":"GitBranch"},{"title":"تحول عمليات تقنية المعلومات","desc":"منصة المطور الداخلية، AIOps، FinOps، الخدمة الذاتية.","icon":"TrendingUp"}];
const capabilities = [{"cap":"الذكاء الاصطناعي المؤسسي والأتمتة","app":"وكلاء الذكاء الاصطناعي، ذكاء المستندات، أتمتة العمليات، MLOps المؤسسي"},{"cap":"البيانات والتحليلات والذكاء","app":"بحيرة بيانات مؤسسية، ذكاء أعمال تنفيذي، إدارة البيانات الرئيسية"},{"cap":"تطبيقات الأعمال وتجربة العملاء","app":"تحول إدارة علاقات العملاء، مركز الاتصال، أتمتة التسويق"},{"cap":"التكامل والعمليات الذكية","app":"معمارية API، تكامل تخطيط الموارد، سير عمل مدفوع بالأحداث"},{"cap":"الأمن السيبراني والمرونة السيبرانية","app":"Zero Trust، مركز عمليات أمنية، أمن الهوية، الامتثال المستمر"},{"cap":"عمليات التقنية","app":"منصة المطور الداخلية، AIOps، FinOps، هندسة المنصات، على مدار الساعة"}];
const capPaths: string[] = ["/ar/capabilities/ai","/ar/capabilities/data","/ar/capabilities/apps","/ar/capabilities/integration","/ar/capabilities/cyber","/ar/capabilities/ops"];
const services = [{"svc":"الاستشارات والتخطيط","app":"الجاهزية للذكاء، تصميم نموذج التشغيل، استراتيجية Zero Trust"},{"svc":"التنفيذ والتسليم","app":"نشر وكلاء الذكاء الاصطناعي، تحول إدارة العلاقات، تطبيق Zero Trust"},{"svc":"العمليات المدارة","app":"عمليات منصات على مدار الساعة، SOC كخدمة، حوكمة FinOps"}];
const svcPaths: string[] = ["/ar/services/advisory","/ar/services/implementation","/ar/services/operations"];
const blueprints = [{"title":"تحول فرق العمل المعززة بالذكاء الاصطناعي","label":"مؤسسات"},{"title":"Zero Trust المؤسسي","label":"مؤسسات"},{"title":"Customer ٣٦٠ والتفاعل الذكي","label":"مؤسسات"}];
const bpSlugs: string[] = ["agentic-workforce-transformation","enterprise-zero-trust","customer-360-intelligent-engagement"];
const partners = [{"name":"Salesforce","role":"إدارة علاقات العملاء وفرق العمل المعززة بالذكاء الاصطناعي","tech":"Sales Cloud · Service Cloud · Marketing Cloud · Agentforce"},{"name":"IBM","role":"الذكاء المؤسسي والأمن","tech":"watsonx · QRadar SOC · Instana AIOps · FlashSystem"},{"name":"MuleSoft","role":"التكامل المؤسسي وواجهات API","tech":"Anypoint Platform · API Manager · Flex Gateway"},{"name":"Informatica","role":"إدارة البيانات الرئيسية المؤسسية","tech":"MDM مؤسسي · جودة البيانات · كتالوج البيانات"},{"name":"Dell Technologies","role":"البنية التحتية المؤسسية","tech":"PowerEdge · PowerStore · VxRail · APEX"},{"name":"Intel","role":"الحوسبة المؤسسية وتسريع الذكاء","tech":"Xeon Scalable · Gaudi 3 AI · vPro Security"},{"name":"Google","role":"تحليلات مؤسسية ومنصة ذكاء","tech":"Vertex AI · BigQuery · Looker · Gemini"},{"name":"Tableau","role":"ذكاء أعمال تنفيذي","tech":"Tableau Cloud · تحليلات مضمنة · لوحات تنفيذية"},{"name":"Platform9","role":"منصة متعددة السحابة","tech":"Managed Kubernetes · OpenStack · KubeVirt"},{"name":"Red Hat","role":"هندسة المنصات المؤسسية","tech":"OpenShift · Ansible Automation · RHEL"}];
const outcomes = [{"metric":"30–50%","label":"انخفاض ساعات المهام اليدوية"},{"metric":"مسرّع","label":"إيقاع النشر للإنتاج"},{"metric":"50–80%","label":"تحسين دقة القرار"},{"metric":"مرحلي","label":"نشر Zero Trust"},{"metric":"40–60%","label":"تقليل تذاكر تقنية المعلومات"},{"metric":"قابل للقياس","label":"عائد استثمار BI وCRM"}];

const iconMap: Record<string, React.ComponentType<any>> = { Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench };

export default function ArabicEnterpriseIndustryPage() {
  useEffect(() => { trackIndustryPageView('المؤسسات الكبرى'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>المؤسسات الكبرى | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="التحول بالذكاء الاصطناعي للمؤسسات الكبرى — تعزيز القوى العاملة، الأتمتة الذكية، وحوكمة الذكاء الاصطناعي المؤسسي." />
      </Helmet>
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5)  %, var(--bg-primary)  %)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>قطاع المؤسسات الكبرى</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            منصة التحول المؤسسي<br />
            <span style={{ color: ACCENT }}>— ذكاء وكيلي، عمليات ذكية، أمن Zero Trust.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            هذا هو عرض القيمة الأكثر شمولاً من بيونك. من وكلاء الذكاء الاصطناعي إلى معمارية Zero Trust — نقدم المنظومة الكاملة للتحول المؤسسي عبر الذكاء والأتمتة والثقة.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>كل مؤسسة تتجه نحو الذكاء الاصطناعي — لكن معظمها ليس جاهزاً من حيث البيانات والحوكمة والبنية.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>الفرق عالية القيمة غارقة في العمل اليدوي. البيانات محتجزة في أنظمة منفصلة. تجارب الذكاء الاصطناعي لا تصل إلى مرحلة الإنتاج — فتبقى استثمارات بلا عائد.</p>
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
              هل أنتم مستعدون لتطبيق منصة التحول المؤسسي؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لنناقش كيف تساهم حلول الذكاء الوكيلي وZero Trust وتحديث المنصات في تطوير مؤسستكم — بوتيرة أسرع مما تتوقعون.
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
