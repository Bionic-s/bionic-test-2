import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Radio, Signal, Shield, Cpu, TrendingUp, BarChart3 } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const heroBg = `${import.meta.env.BASE_URL}images/hero/ai-agents.avif`;
const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [
  { pre: 'طيف منتشر، إيرادات ثابتة', text: 'البنية التحتية للجيل الخامس تعمل لكن نماذج تحقيق العوائد — شرائح الشبكة، الحوسبة الطرفية، B2B2X — لا تزال غير مستغلة.' },
  { pre: 'أنظمة BSS/OSS متجانسة', text: 'أنظمة الفوترة والعمليات القديمة لا تدعم الفوترة الفورية أو تنسيق الخدمات الديناميكي.' },
  { pre: 'ارتفاع تكلفة البنية التحتية', text: 'كل موقع جيل خامس يزيد الطاقة والنقل والصيانة — بدون نمو مقابل في الإيرادات.' },
  { pre: 'تعقيد السحابة الاتصالية', text: 'وظائف الشبكة الافتراضية تتطلب نموذج تشغيل جديد — وليس مجرد عتاد جديد.' },
  { pre: 'فجوة فرص الأعمال B2B', text: 'عملاء المؤسسات يحتاجون الجيل الخامس الخاص والحوسبة الطرفية وإنترنت الأشياء — لكن المشغل يفتقر لمنصة B2B موحدة.' },
  { pre: 'امتثال CST', text: 'المتطلبات التنظيمية من هيئة الاتصالات والفضاء والتقنية تستوجب سيادة البيانات والأمن ومعايير جودة الخدمة.' },
];

const priorities = [
  { title: 'تحقيق عوائد الجيل الخامس', desc: 'شرائح الشبكة كخدمة، الجيل الخامس الخاص للمؤسسات، الحوسبة الطرفية — تحويل الطيف إلى تدفقات إيرادية.', icon: Signal },
  { title: 'تحول السحابة الاتصالية', desc: 'وظائف شبكة محولة إلى حاويات على Red Hat OpenShift — من بنية متجانسة إلى بنية اتصالية سحابية الأصل.', icon: Cpu },
  { title: 'تحديث BSS/OSS', desc: 'فوترة فورية، كتالوج ديناميكي، تنسيق خدمات عبر API — المحرك التجاري للجيل الخامس.', icon: TrendingUp },
  { title: 'رؤية 360 للعميل والذكاء الاصطناعي', desc: 'توحيد بيانات العملاء عبر الجوال والثابت والمؤسسات — ذكاء تنبؤي لفقدان العملاء وأفضل العروض.', icon: BarChart3 },
  { title: 'منصة B2B للمؤسسات', desc: 'الجيل الخامس الخاص، SD-WAN، إنترنت الأشياء، والحوسبة الطرفية — مُجمعة لعملاء المؤسسات كمنصة موحدة.', icon: Radio },
  { title: 'أمن الشبكات والامتثال', desc: 'أمن اتصالات شامل — من RAN إلى النواة — مع مراقبة امتثال CST مستمرة.', icon: Shield },
];

const capabilities = [
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'إدارة تنبؤية للسعة، ذكاء فقدان العملاء، عمليات شبكة مؤتمتة، خدمة ميدانية مدعومة بالذكاء الاصطناعي' },
  { cap: 'البيانات والتحليلات والذكاء', app: 'بحيرة تحليلات الشبكة، لوحات KPI آنية، تحليلات رحلة العميل، ضمان الإيرادات' },
  { cap: 'التكامل والعمليات الذكية', app: 'تكامل BSS/OSS عبر API، واجهات TM Forum المفتوحة، تنسيق خدمات مبني على الأحداث' },
  { cap: 'عمليات التقنية', app: 'تجهيز بدون تدخل بشري، AIOps للسحابة الاتصالية، تقارب NOC/SOC على مدار الساعة' },
];

const capPaths = ['/ar/capabilities/ai', '/ar/capabilities/data', '/ar/capabilities/integration', '/ar/capabilities/ops'];

const services = [
  { svc: 'الاستشارات والتخطيط', app: 'استراتيجية تحقيق عوائد الجيل الخامس، معمارية السحابة الاتصالية، خارطة تحديث BSS/OSS، استشارات امتثال CST' },
  { svc: 'التنفيذ والتسليم', app: 'نشر السحابة الاتصالية، تكامل BSS/OSS، نشر نماذج AI/ML، بناء منصة B2B للمؤسسات' },
  { svc: 'العمليات المدارة', app: 'عمليات السحابة الاتصالية على مدار الساعة، AIOps، NOC/SOC كخدمة، تحسين مستمر للشبكة' },
];

const svcPaths = ['/ar/services/advisory', '/ar/services/implementation', '/ar/services/operations'];

const blueprints = [
  { title: 'تحقيق عوائد الجيل الخامس والسحابة الاتصالية', slug: '5g-monetization-telco-cloud' },
];

const partners = [
  { name: 'IBM', role: 'أتمتة الشبكات والذكاء الاصطناعي الاتصالي', tech: 'Cloud Pak لأتمتة الشبكات \u00b7 watsonx.ai \u00b7 IBM MQ \u00b7 QRadar لأمن الاتصالات' },
  { name: 'Red Hat', role: 'منصة السحابة الاتصالية والأتمتة', tech: 'OpenShift للسحابة الاتصالية \u00b7 Ansible للتجهيز اللاتلامسي \u00b7 RHEL لوظائف الشبكة' },
  { name: 'Salesforce', role: 'تحقيق عوائد B2B وتجربة العملاء', tech: 'Communications Cloud \u00b7 Service Cloud \u00b7 Einstein AI \u00b7 تكامل MuleSoft' },
  { name: 'Google', role: 'تحليلات الشبكة والذكاء الاصطناعي', tech: 'BigQuery \u00b7 Vertex AI \u00b7 Google Maps Platform \u00b7 لوحات Looker' },
  { name: 'Dell Technologies', role: 'البنية التحتية الاتصالية والحوسبة الطرفية', tech: 'PowerEdge R760 \u00b7 PowerEdge XR للحوسبة الطرفية \u00b7 PowerStore لبيانات الشبكة' },
];

const outcomes = [
  { metric: 'إيرادات جديدة', label: 'شرائح الشبكة كخدمة' },
  { metric: 'بدون تدخل', label: 'تجهيز وتشغيل الشبكة' },
  { metric: 'فوري', label: 'فوترة BSS/OSS ديناميكية' },
  { metric: 'ذكاء اصطناعي', label: 'تنبؤ بفقدان العملاء والسعة' },
  { metric: 'متوافق مع CST', label: 'معمارية السحابة الاتصالية' },
];

export default function ArabicTelecomIndustryPage() {
  useEffect(() => { trackIndustryPageView('الاتصالات وتقنية المعلومات'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>الاتصالات وتقنية المعلومات | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="تحول قطاع الاتصالات بالذكاء الاصطناعي — تحقيق عوائد الجيل الخامس، السحابة الاتصالية، وأتمتة الشبكات للمشغلين السعوديين." />
      </Helmet>
      
      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <Radio className="w-3.5 h-3.5 ml-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">تركيز قطاعي</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                الاتصالات وتقنية المعلومات
                <span className="block text-[#00BFFF]">التحول المؤسسي</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                تحقيق عوائد الجيل الخامس. السحابة الاتصالية. عمليات شبكات مدعومة بالذكاء الاصطناعي. بيونك تساعد المشغلين السعوديين في تحويل الاستثمار في البنية التحتية إلى إيرادات — متوافقة مع ضوابط هيئة الاتصالات والفضاء والتقنية.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">مشغلو الاتصالات السعوديون يواجهون فجوة في تحقيق العوائد.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ما يحتاجه مشغلو الاتصالات السعوديون للفوز.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">كيف تتوافق قدرات بيونك مع تحول الاتصالات.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تسليم مطبقة على قطاع الاتصالات.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية مثبتة لقطاع الاتصالات.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">اتصالات</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?industry=telecom" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              عرض جميع المخططات الاتصالية <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجي</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تقنيات عالمية — مصممة للسيادة الاتصالية السعودية.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">لسنا موردًا. نحن نصمم منصات اتصالات باستخدام أرقى التقنيات العالمية — مختارة للقدرة وليس لحوافز البيع.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">أثر قابل للقياس عبر تحول الاتصالات.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#00BFFF]/30 transition-all">
                <div className="text-2xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">هل أنتم مستعدون لتحقيق عوائد استثماركم في الجيل الخامس؟</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">لنناقش كيف يمكن لتحقيق عوائد الجيل الخامس والسحابة الاتصالية وعمليات الشبكات المدعومة بالذكاء الاصطناعي أن تحول أعمالك الاتصالية.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                ابدأ المحادثة <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ar/blueprints?industry=telecom" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                عرض المخططات الاتصالية
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
