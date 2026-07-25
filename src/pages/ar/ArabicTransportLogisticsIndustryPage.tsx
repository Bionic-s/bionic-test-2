import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, MapPin, Package, TrendingUp, Shield, Gauge } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const heroBg = `${import.meta.env.BASE_URL}images/optimized/professional-services-ai-hero.webp`;
const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [
  { pre: 'لا تتبع فوري', text: 'أكثر من 2000 مركبة تعمل بدون رؤية حية — تقديرات الوصول مجرد تخمينات، التأخير يكتشف بعد فوات الأوان.' },
  { pre: 'تخطيط مسارات يدوي', text: 'المسارات تُخطط يدويًا بدون مراعاة حركة المرور أو الطقس أو الظروف الفورية. الوقود يهدر.' },
  { pre: 'صيانة أسطول تفاعلية', text: 'المركبات تتعطل على الطريق. الصيانة تفاعلية. جاهزية الأسطول تتأثر.' },
  { pre: 'فجوات سلسلة التبريد', text: 'الشحنات الحساسة لدرجة الحرارة تفتقر للمراقبة المستمرة — مما يهدد امتثال الأدوية وسلامة الأغذية.' },
  { pre: 'استخدام منخفض للأسطول', text: 'الأصول غير مستغلة بالكامل. الرحلات الفارغة شائعة. مقاييس كفاءة الأسطول غير معروفة.' },
  { pre: 'فجوة رؤية العملاء', text: 'العملاء لا يستطيعون تتبع الشحنات فوريًا. خدمة العملاء تعتمد على المكالمات الهاتفية والفحص اليدوي.' },
];

const priorities = [
  { title: 'رؤية آنية للأسطول', desc: 'تتبع حي، سياج جغرافي، وتنبؤ بوقت الوصول — معرفة مكان كل أصل في كل لحظة.', icon: MapPin },
  { title: 'تحسين مسارات بالذكاء الاصطناعي', desc: 'تخطيط ديناميكي للمسارات يراعي المرور والطقس ونوافذ التسليم وسعة المركبات — تقليل الوقود والوقت.', icon: TrendingUp },
  { title: 'صيانة تنبؤية للأسطول', desc: 'مراقبة صحة المركبات بالذكاء الاصطناعي — توقع الأعطال، جدولة الصيانة، تعظيم جاهزية الأسطول.', icon: Gauge },
  { title: 'ذكاء سلسلة التبريد', desc: 'مراقبة آنية لدرجة الحرارة والرطوبة والصدمات — امتثال لسلاسل توريد الأدوية والأغذية.', icon: Shield },
  { title: 'منصة لوجستيات متصلة', desc: 'مركز قيادة موحد يدمج أنظمة التتبع وإنترنت الأشياء والطلبات وتواصل العملاء — رؤية تشغيلية واحدة.', icon: Truck },
  { title: 'تجربة العملاء', desc: 'تتبع شحنات فوري، إشعارات آلية، بوابة خدمة ذاتية — رؤية للعملاء بدون مكالمات هاتفية.', icon: Package },
];

const capabilities = [
  { cap: 'التكامل والعمليات الذكية', app: 'تكامل أنظمة التتبع، خط بيانات إنترنت الأشياء، تنسيق من الطلب إلى التسليم، نظام API للوجستيات' },
  { cap: 'البيانات والتحليلات والذكاء', app: 'بحيرة بيانات الأسطول، تحليلات تحسين المسارات، تحليلات أداء السائقين، لوحات KPI للتسليم' },
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'تحسين مسارات بالذكاء الاصطناعي، تنبؤ بوقت الوصول، تنبؤ بصحة المركبات، إرسال آلي، كشف شذوذ سلسلة التبريد' },
  { cap: 'عمليات التقنية', app: 'مركز قيادة أسطول على مدار الساعة، تنبيهات آنية، مراقبة آلية لاتفاقيات مستوى الخدمة، تحسين مستمر للمسارات' },
];

const capPaths = ['/ar/capabilities/integration', '/ar/capabilities/data', '/ar/capabilities/ai', '/ar/capabilities/ops'];

const services = [
  { svc: 'الاستشارات والتخطيط', app: 'استراتيجية رقمنة الأسطول، اختيار منصة اللوجستيات، خارطة امتثال سلسلة التبريد، تصميم نموذج التشغيل' },
  { svc: 'التنفيذ والتسليم', app: 'نشر تتبع الأسطول، تحسين مسارات بالذكاء الاصطناعي، تكامل أنظمة التتبع، بناء مركز القيادة' },
  { svc: 'العمليات المدارة', app: 'مركز قيادة أسطول على مدار الساعة، تحسين مستمر بالذكاء الاصطناعي، مراقبة سلسلة التبريد، إدارة اتفاقيات مستوى الخدمة' },
];

const svcPaths = ['/ar/services/advisory', '/ar/services/implementation', '/ar/services/operations'];

const blueprints = [
  { title: 'اللوجستيات المتصلة وذكاء الأسطول', slug: 'connected-logistics-fleet-intelligence' },
];

const partners = [
  { name: 'Salesforce', role: 'الخدمة الميدانية وتجربة العملاء', tech: 'Field Service \u00b7 Service Cloud \u00b7 Einstein AI \u00b7 Experience Cloud لبوابة العملاء' },
  { name: 'MuleSoft', role: 'تكامل اللوجستيات وواجهات API', tech: 'Anypoint Platform \u00b7 موصلات التتبع \u00b7 تكامل الطلب إلى التسليم' },
  { name: 'Google', role: 'ذكاء الأسطول والخرائط والتحليلات', tech: 'BigQuery \u00b7 Vertex AI \u00b7 Google Maps Platform \u00b7 Route Optimization API' },
  { name: 'Tableau', role: 'مركز قيادة الأسطول والتحليلات', tech: 'Tableau Cloud \u00b7 لوحات KPI للأسطول \u00b7 رؤية تشغيلية آنية' },
  { name: 'IBM', role: 'استيعاب إنترنت الأشياء والذكاء التنبؤي', tech: 'IBM MQ \u00b7 watsonx.ai \u00b7 Maximo لأصول الأسطول \u00b7 نماذج صيانة تنبؤية' },
];

const outcomes = [
  { metric: 'توفير وقود', label: 'تحسين مسارات بالذكاء الاصطناعي' },
  { metric: 'أعلى', label: 'معدلات استخدام الأسطول' },
  { metric: 'تنبؤية', label: 'صيانة تمنع الأعطال' },
  { metric: 'سلسلة تبريد', label: 'مراقبة امتثال آنية' },
  { metric: 'آنية', label: 'رؤية العملاء للشحنات' },
];

export default function ArabicTransportLogisticsIndustryPage() {
  useEffect(() => { trackIndustryPageView('النقل والخدمات اللوجستية'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>النقل والخدمات اللوجستية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="تحول قطاع اللوجستيات بالذكاء الاصطناعي — أسطول متصل، تحسين مسارات، ذكاء سلسلة التبريد لمشغلي النقل واللوجستيات السعوديين." />
      </Helmet>
      
      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <Truck className="w-3.5 h-3.5 ml-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">تركيز قطاعي</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                النقل والخدمات اللوجستية
                <span className="block text-[#00BFFF]">التحول المؤسسي</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                أسطول متصل. تحسين مسارات بالذكاء الاصطناعي. رؤية آنية. بيونك تساعد مشغلي اللوجستيات السعوديين على التحرك بذكاء — من أنظمة التتبع إلى مركز القيادة.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">مشغلو اللوجستيات السعوديون يعملون بدون رؤية آنية أو ذكاء.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ما يحتاجه مشغلو اللوجستيات السعوديون للريادة.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">كيف تتوافق قدرات بيونك مع تحول اللوجستيات.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تسليم مطبقة على قطاع اللوجستيات.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية مثبتة لقطاع اللوجستيات.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">لوجستيات</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?industry=logistics" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              عرض جميع مخططات اللوجستيات <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجي</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تقنيات اللوجستيات المتصلة — مصممة للأساطيل السعودية.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">لسنا موردًا. نحن نصمم منصات لوجستيات متصلة باستخدام أرقى التقنيات العالمية — مختارة للقدرة وليس لحوافز البيع.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">أثر قابل للقياس عبر تحول اللوجستيات.</h2>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4">هل أنتم مستعدون لربط أسطولكم؟</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">لنناقش كيف يمكن لرؤية الأسطول الفورية وتحسين المسارات بالذكاء الاصطناعي والصيانة التنبؤية أن تحول عملياتك اللوجستية.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                ابدأ المحادثة <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ar/blueprints?industry=logistics" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                عرض مخططات اللوجستيات
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
