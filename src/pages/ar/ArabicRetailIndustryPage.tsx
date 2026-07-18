import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShoppingCart, Store, Tag, Users, TrendingUp, BarChart3 } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const heroBg = `${import.meta.env.BASE_URL}images/bionic-analysis.avif`;
const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [
  { pre: 'قنوات منفصلة', text: 'المتاجر الإلكترونية والفعلية تعمل ككيانات منفصلة — المخزون والتسعير وبيانات العملاء معزولة.' },
  { pre: 'رؤية مجزأة للعملاء', text: 'العميل الذي يشتري إلكترونيًا وفي المتجر يظهر كشخصين مختلفين. لا يوجد ملف موحد أو برنامج ولاء.' },
  { pre: 'أنظمة نقاط بيع قديمة', text: 'أنظمة لا تدعم المخزون الفوري أو التلبية متعددة القنوات أو التخصيص بالذكاء الاصطناعي.' },
  { pre: 'تسويق يدوي', text: 'قرارات التسعير والعروض والتشكيلة مبنية على الحدس — وليس البيانات. هوامش ربحية مفقودة.' },
  { pre: 'نمو سريع للتجارة الإلكترونية', text: 'التجارة الإلكترونية السعودية تتوسع بسرعة لكن تجار التجزئة يفتقرون لمنصة تنافس اللاعبين الرقميين.' },
  { pre: 'امتثال PDPL', text: 'لوائح خصوصية البيانات الجديدة تتطلب حوكمة موحدة لبيانات العملاء — الأنظمة المجزأة لا تستطيع الامتثال.' },
];

const priorities = [
  { title: 'منصة تجارة موحدة', desc: 'محرك تجارة واحد للتسوق الإلكتروني والمتاجر والجوال — مخزون واحد، تسعير واحد، عميل واحد.', icon: Store },
  { title: 'رؤية 360 للعميل والولاء', desc: 'ملفات عملاء موحدة عبر جميع نقاط التواصل مع تخصيص مدعوم بالذكاء الاصطناعي وأفضل العروض.', icon: Users },
  { title: 'إدارة البضائع والتسعير بالذكاء الاصطناعي', desc: 'تسعير ديناميكي، تحسين التشكيلة، تنبؤ الطلب — قرارات ذكاء اصطناعي تحل محل الحدس.', icon: TrendingUp },
  { title: 'تلبية متعددة القنوات', desc: 'اشترِ إلكترونيًا واستلم من المتجر. شحن من المتجر. رؤية آنية للمخزون. إدارة طلبات موحدة.', icon: ShoppingCart },
  { title: 'تسويق ذكي', desc: 'حملات مخصصة، أتمتة رحلة العميل، محفزات آنية — تسويق يحقق تحويلاً.', icon: Tag },
  { title: 'تحليلات تجزئة مبنية على البيانات', desc: 'لوحات معلومات تنفيذية، أداء الفئات، القيمة الدائمة للعميل — قرارات مدعومة بالبيانات.', icon: BarChart3 },
];

const capabilities = [
  { cap: 'تطبيقات الأعمال وتجربة العملاء', app: 'منصة تجارة موحدة، إدارة الولاء، إدارة طلبات متعددة القنوات، تخصيص مدعوم بالذكاء الاصطناعي' },
  { cap: 'البيانات والتحليلات والذكاء', app: 'رؤية 360 للعميل، MDM للمنتجات، تحليلات التجزئة، تنبؤ الطلب، ذكاء القيمة الدائمة للعميل' },
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'تسويق بالذكاء الاصطناعي، تسعير ديناميكي، تحسين المخزون، ذكاء اصطناعي لخدمة العملاء، كشف الاحتيال' },
  { cap: 'التكامل والعمليات الذكية', app: 'تكامل POS مع السحابة، موصلات الأسواق، تكامل بوابات الدفع، تنسيق API للوجستيات' },
];

const capPaths = ['/ar/capabilities/apps', '/ar/capabilities/data', '/ar/capabilities/ai', '/ar/capabilities/integration'];

const services = [
  { svc: 'الاستشارات والتخطيط', app: 'استراتيجية متعددة القنوات، اختيار منصة التجارة، تصميم تجربة العميل، خارطة امتثال PDPL' },
  { svc: 'التنفيذ والتسليم', app: 'نشر Commerce Cloud، تكامل POS، بناء منصة الولاء، تسليم منصة بيانات العملاء' },
  { svc: 'العمليات المدارة', app: 'عمليات تجارة على مدار الساعة، تحسين مستمر، إدارة نماذج الذكاء الاصطناعي، تحليلات أداء الحملات' },
];

const svcPaths = ['/ar/services/advisory', '/ar/services/implementation', '/ar/services/operations'];

const blueprints = [
  { title: 'التجارة الذكية وتجربة العملاء متعددة القنوات', slug: 'intelligent-commerce-omnichannel' },
];

const partners = [
  { name: 'Salesforce', role: 'التجارة والتسويق ورؤية 360 للعميل', tech: 'Commerce Cloud \u00b7 Marketing Cloud \u00b7 Data Cloud \u00b7 Einstein AI \u00b7 Service Cloud' },
  { name: 'MuleSoft', role: 'تكامل POS و ERP والأسواق', tech: 'Anypoint Platform \u00b7 اتصال عبر API \u00b7 موصلات تجارة مبنية مسبقًا' },
  { name: 'Google', role: 'ذكاء اصطناعي وتحليلات وتخصيص للتجزئة', tech: 'BigQuery \u00b7 Vertex AI \u00b7 توصيات AI \u00b7 بحث التجزئة' },
  { name: 'Tableau', role: 'تحليلات أداء التجزئة', tech: 'Tableau Cloud \u00b7 تحليلات الفئات \u00b7 لوحات القيمة الدائمة للعميل' },
  { name: 'Informatica', role: 'MDM للمنتجات وحوكمة البيانات', tech: 'Product 360 \u00b7 جودة البيانات \u00b7 كتالوج البيانات \u00b7 حوكمة PDPL' },
];

const outcomes = [
  { metric: 'موحد', label: 'المخزون عبر جميع القنوات' },
  { metric: 'فوري', label: 'تخصيص مدعوم بالذكاء الاصطناعي' },
  { metric: 'رؤية موحدة', label: 'للعميل عبر الإنترنت والمتجر' },
  { metric: 'تحسن ملموس', label: 'في معدلات التحويل متعددة القنوات' },
  { metric: 'متوافق مع PDPL', label: 'إدارة بيانات العملاء' },
];

export default function ArabicRetailIndustryPage() {
  useEffect(() => { trackIndustryPageView('التجزئة والمستهلك'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>التجزئة والمستهلك | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="تحول قطاع التجزئة بالذكاء الاصطناعي — تجارة موحدة، تجربة عملاء متعددة القنوات، تسويق ذكي لتجار التجزئة السعوديين." />
      </Helmet>
      
      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <ShoppingCart className="w-3.5 h-3.5 ml-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">تركيز قطاعي</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                التجزئة والمستهلك
                <span className="block text-[#00BFFF]">التحول المؤسسي</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                تجارة موحدة. تخصيص مدعوم بالذكاء الاصطناعي. تلبية متعددة القنوات. بيونك تساعد تجار التجزئة السعوديين على المنافسة — إلكترونيًا وفي المتجر وفي كل مكان بينهما.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">قطاع التجزئة السعودي ينمو بسرعة — لكن التقنية لم تلحق به.</h2>
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {realityItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-xs font-bold text-[#00BFFF] mt-0.5 min-w-[140px]">{item.pre}</span>
                  <p className="text-sm text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>أولويات التحول</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ما يحتاجه تجار التجزئة السعوديون للريادة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <p.icon className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>القدرات ذات الصلة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">كيف تتوافق قدرات بيونك مع تحول التجزئة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={capPaths[i]} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-28">
          <SectionLabel>كيف ننفذ</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تسليم مطبقة على قطاع التجزئة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={svcPaths[i]} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#00BFFF] transition-colors">{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المخططات المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية مثبتة لقطاع التجزئة.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">تجزئة</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?industry=retail" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              عرض جميع مخططات التجزئة <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجي</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تقنيات التجارة — مصممة للتجزئة السعودية.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">لسنا موردًا. نحن نصمم منصات تجارة باستخدام أرقى التقنيات العالمية — مختارة للقدرة وليس لحوافز البيع.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <PartnerLogo partner={p} size="md" />
                  <div>
                    <h3 className="font-semibold text-sm">{p.name}</h3>
                    <p className="text-tiny text-text-muted">{p.role}</p>
                  </div>
                </div>
                <p className="text-tiny text-text-muted leading-relaxed border-t border-white/5 pt-3">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>النتائج المتوقعة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">أثر قابل للقياس عبر تحول التجزئة.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#00BFFF]/30 transition-all">
                <div className="text-2xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="pb-20 md:pb-28 lg:pb-32" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">هل أنتم مستعدون لتوحيد تجربة التجزئة لديكم؟</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">لنناقش كيف يمكن للتجارة الموحدة والتخصيص بالذكاء الاصطناعي والتلبية متعددة القنوات أن تحول أعمالك في التجزئة.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                ابدأ المحادثة <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ar/blueprints?industry=retail" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                عرض مخططات التجزئة
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
