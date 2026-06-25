import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
const heroBg = `${import.meta.env.BASE_URL}images/professional-services-ai-hero.jpg`;

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#059669';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [{"pre":"تعقيد إجراءات الاعتماد","text":"إعداد العطاءات يدوي وبطيء ومثقل بمتطلبات الامتثال."},{"pre":"فجوات الامتثال NCA و NDMO","text":"الأنظمة الحكومية التقليدية عاجزة عن استيفاء معايير الأمن السيبراني."},{"pre":"تراكم خدمات المواطنين","text":"العمليات اليدوية تؤدي إلى تأخيرات ملموسة في خدمات المواطنين."},{"pre":"عزل البيانات بين الجهات","text":"الوزارات تعمل ضمن بيئات بيانات منعزلة — غياب نسيج بيانات وطني موحد."},{"pre":"بنية تحتية متقادمة","text":"مراكز بيانات متقادمة غير مهيأة لأحمال الذكاء الاصطناعي."},{"pre":"متطلبات السيادة","text":"اشتراطات إقامة البيانات والسحابة الوطنية تفرض معمارية سيادية متخصصة."}];
const priorities = [{"title":"تمكين الذكاء الاصطناعي الوطني","desc":"بناء قدرة المملكة في الذكاء الاصطناعي — منصات وطنية، حوكمة النماذج، تسريع المواهب.","icon":"Cpu"},{"title":"منصات البيانات والذكاء السيادية","desc":"بنية تحتية للذكاء متوافقة مع NCA، بحيرات بيانات سيادية، قدرة حوسبة وطنية.","icon":"Shield"},{"title":"الذكاء عبر الوزارات","desc":"نسيج بيانات بين الجهات لكسر عقود من العزل.","icon":"GitBranch"},{"title":"تنفيذ برامج رؤية ٢٠٣٠","desc":"إدارة برامج مدعومة بالذكاء الاصطناعي، تتبع مؤشرات الأداء، حوكمة التحول.","icon":"TrendingUp"},{"title":"العمليات السيبرانية الوطنية","desc":"مركز عمليات أمنية وطني ٢٤×٧، حماية البنية التحتية الحيوية.","icon":"Shield"},{"title":"تحول خدمات المواطنين","desc":"بوابات مواطنين مدعومة بالذكاء الاصطناعي، معالجة ذكية للمستندات.","icon":"BarChart3"}];
const capabilities = [{"cap":"الذكاء الاصطناعي المؤسسي والأتمتة","app":"ذكاء المستندات لاعتماد، ذكاء خدمة المواطن، حوكمة نماذج الذكاء السيادية"},{"cap":"البيانات والتحليلات والذكاء","app":"نسيج البيانات بين الوزارات، لوحات مؤشرات الأداء الوطنية، منصات البيانات المفتوحة"},{"cap":"التكامل والعمليات الذكية","app":"تكامل أنظمة الحكومة عبر API، تنسيق سير العمل عبر الجهات، تحديث ESB"},{"cap":"الأمن السيبراني والمرونة السيبرانية","app":"مركز عمليات أمنية وطني، امتثال NCA ECC، Zero Trust للحكومة"},{"cap":"البنية التحتية السيادية والسحابة الهجينة","app":"مراكز بيانات متوافقة مع NCA، سحابة سيادية، بنية ذكاء معزولة هوائيًا"},{"cap":"عمليات التقنية","app":"مركز عمليات شبكة وطني ٢٤×٧، عمليات منصات سيادية، إدارة أحمال العمل المصنفة"}];
const capPaths: string[] = ["/ar/capabilities/ai","/ar/capabilities/data","/ar/capabilities/integration","/ar/capabilities/cyber","/ar/capabilities/infra","/ar/capabilities/ops"];
const services = [{"svc":"الاستشارات والتخطيط","app":"استشارات الامتثال لـ NCA/NDMO، الجاهزية للذكاء الاصطناعي للحكومة، تصميم المعمارية السيادية"},{"svc":"التنفيذ والتسليم","app":"نشر السحابة السيادية، بناء نسيج البيانات الوطني، تسليم منصة خدمات المواطنين"},{"svc":"العمليات المدارة","app":"مركز عمليات أمنية كخدمة ٢٤×٧، عمليات منصات سيادية، مركز عمليات شبكة وطني"}];
const svcPaths: string[] = ["/ar/services/advisory","/ar/services/implementation","/ar/services/operations"];
const blueprints = [{"title":"منصة الذكاء السيادي","label":"حكومي"},{"title":"نسيج البيانات بين الوزارات","label":"حكومي"},{"title":"مركز العمليات السيبرانية الوطني","label":"حكومي"}];
const bpSlugs: string[] = ["sovereign-ai-platform","inter-ministry-data-fabric","national-soc"];
const partners = [{"name":"IBM","role":"الذكاء السيادي والأمن السيبراني للحكومة","tech":"watsonx للذكاء الحكومي · QRadar · Cloud Pak للبيانات السيادية"},{"name":"Dell Technologies","role":"البنية التحتية السيادية والتعافي السيبراني","tech":"PowerEdge · PowerProtect Cyber Recovery · PowerStore"},{"name":"Intel","role":"البنية التحتية للذكاء الوطني","tech":"Gaudi 3 · Intel TDX · Xeon للحوسبة الحكومية"},{"name":"Platform9","role":"سحابة خاصة للحكومة","tech":"Kubernetes المُدار · OpenStack · KubeVirt"},{"name":"Informatica","role":"حوكمة البيانات عبر الوزارات","tech":"MDM لبيانات المواطنين · جودة البيانات · كتالوج البيانات"},{"name":"MuleSoft","role":"تكامل حكومي عبر API","tech":"Anypoint Platform · Flex Gateway"},{"name":"Google","role":"الذكاء والتحليلات الحكومية","tech":"Vertex AI · BigQuery · Looker"},{"name":"Tableau","role":"لوحات معلومات تنفيذية","tech":"Tableau Cloud · التحليلات المضمنة"},{"name":"Red Hat","role":"OpenShift والبنية مفتوحة المصدر","tech":"OpenShift · Ansible Automation · RHEL"}];
const outcomes = [{"metric":"مسرّع","label":"تقديم خدمات المواطنين"},{"metric":"متعدد الجهات","label":"معمارية نسيج البيانات"},{"metric":"مصمم لـ","label":"مواءمة الامتثال NCA/NDMO"},{"metric":"مبسط","label":"سير عمل إعداد عطاءات اعتماد"},{"metric":"فوري","label":"كشف التهديدات السيبرانية الوطنية"}];

const iconMap: Record<string, React.ComponentType<any>> = { Shield, Cpu, GitBranch, BarChart3, TrendingUp, Brain, Users, CreditCard, Heart, Wrench };

export default function ArabicGovernmentIndustryPage() {
  useEffect(() => { trackIndustryPageView('القطاع الحكومي'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5)  %, var(--bg-primary)  %)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>القطاع الحكومي والعام</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            التحول الرقمي السيادي<br />
            <span style={{ color: ACCENT }}>للقطاع العام في المملكة.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            انطلاقاً من تمكين الذكاء الاصطناعي الوطني وصولاً إلى السحابة السيادية المتوافقة مع الهيئة الوطنية للأمن السيبراني، ومن أنسجة البيانات بين الوزارات إلى تحقيق مستهدفات رؤية 2030 — نمكّن الجهات الحكومية السعودية من تسريع التحول الوطني.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>التحول الحكومي تحول وطني — وهو الأعلى تعقيداً والأعمق أثراً.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]" style={{ fontFamily: "'Tajawal', sans-serif" }}>تعمل الوزارات في بيئات بيانات منعزلة. البنية التحتية التقليدية لا تستوعب أحمال الذكاء الاصطناعي. عمليات المشتريات يدوية ومثقلة بالامتثال.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>أثر ملموس عبر منظومة التحول المؤسسي.</h2>
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
              هل أنتم مستعدون لتسريع تحولكم الحكومي؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لنناقش كيف تساهم منصات الذكاء السيادي والذكاء عبر الوزارات والتسليم المتوافق مع رؤية ٢٠٣٠ في تطوير جهاتكم.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #05966920' }}>
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
