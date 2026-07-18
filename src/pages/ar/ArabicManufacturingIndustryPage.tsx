import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Cog, Gauge, Shield, Cpu, TrendingUp } from 'lucide-react';
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
  { pre: 'خطوط إنتاج منفصلة', text: 'خطوط الإنتاج تعمل في عزلة — لا رؤية آنية، لا بيانات موحدة، لا ذكاء عبر الخطوط.' },
  { pre: 'بيانات IoT غير مستخدمة', text: 'آلاف المستشعرات تولد تيرابايتات من البيانات يوميًا — لا شيء منها محلل أو قابل للتنفيذ.' },
  { pre: 'صيانة تفاعلية', text: 'المعدات تتعطل بشكل غير متوقع. الصيانة مبنية على التقويم وليس الحالة. التوقف يكلف الملايين.' },
  { pre: 'فجوة OT/IT', text: 'التقنية التشغيلية وتقنية المعلومات معزولتان تمامًا. SCADA لا تتحدث مع ERP. التحديثات الأمنية لا تصل للأنظمة الصناعية.' },
  { pre: 'جودة بالتفتيش', text: 'مراقبة الجودة تحدث بعد الإنتاج — وليس أثناءه. العيوب تكتشف متأخرًا مما يزيد الهدر وإعادة العمل.' },
  { pre: 'لا يوجد توأم رقمي', text: 'تغييرات المصنع تُختبر على أرضية الإنتاج الحية. لا قدرة على المحاكاة. كل تجربة تحمل مخاطر إنتاجية.' },
];

const priorities = [
  { title: 'صيانة تنبؤية', desc: 'إدارة أصول مدعومة بالذكاء الاصطناعي — توقع الأعطال قبل حدوثها، جدولة الصيانة عند الحاجة وليس بالتقويم.', icon: Gauge },
  { title: 'توأم رقمي ومحاكاة', desc: 'نسخة افتراضية من المصنع للمحاكاة وتحليل ماذا لو وتحسين الإنتاج — بدون مخاطر على العمليات الحية.', icon: Cpu },
  { title: 'تكامل OT/IT', desc: 'معمارية OT/IT موحدة — SCADA تتصل بـ ERP، التحديثات الأمنية تصل للأنظمة الصناعية، رؤية تشغيلية واحدة.', icon: Factory },
  { title: 'مراقبة جودة بالذكاء الاصطناعي', desc: 'رؤية حاسوبية آنية وتحليلات مستشعرات للفحص على خط الإنتاج — اكتشاف العيوب لحظة حدوثها.', icon: TrendingUp },
  { title: 'منصة الثورة الصناعية الرابعة', desc: 'منصة من الحوسبة الطرفية إلى السحابة للبيانات الصناعية ونماذج الذكاء الاصطناعي والأتمتة — نظام تشغيل المصنع.', icon: Cog },
  { title: 'أمن سيبراني صناعي', desc: 'أمن OT متوافق مع IEC 62443 — مراقبة مستمرة، كشف التهديدات، وصول آمن عن بعد للبيئات الصناعية.', icon: Shield },
];

const capabilities = [
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'جودة تنبؤية، اكتشاف الشذوذ، فحص بالرؤية الحاسوبية، جدولة إنتاج بالذكاء الاصطناعي' },
  { cap: 'التكامل والعمليات الذكية', app: 'جسر بروتوكولات OT/IT، تكامل SCADA مع ERP، خط بيانات IoT الصناعي، اتصال MES' },
  { cap: 'البنية التحتية السيادية والسحابة الهجينة', app: 'حوسبة طرفية لأرضية المصنع، استدلال AI في الموقع، شبكات صناعية معزولة، تخزين بيانات سيادي' },
  { cap: 'الأمن السيبراني والمرونة السيبرانية', app: 'امتثال IEC 62443، كشف تهديدات OT، تجزئة الشبكات الصناعية، وصول آمن عن بعد' },
];

const capPaths = ['/ar/capabilities/ai', '/ar/capabilities/integration', '/ar/capabilities/infra', '/ar/capabilities/cyber'];

const services = [
  { svc: 'الاستشارات والتخطيط', app: 'تقييم جاهزية الثورة الصناعية الرابعة، استراتيجية التوأم الرقمي، خارطة تكامل OT/IT، تحليل فجوات الامتثال' },
  { svc: 'التنفيذ والتسليم', app: 'نشر الذكاء الاصطناعي الطرفي، منصة الصيانة التنبؤية، بناء التوأم الرقمي، تسليم تكامل OT/IT' },
  { svc: 'العمليات المدارة', app: 'مراقبة أمن OT على مدار الساعة، إدارة نماذج الذكاء الاصطناعي، تحسين مستمر للمصنع، SOC صناعي' },
];

const svcPaths = ['/ar/services/advisory', '/ar/services/implementation', '/ar/services/operations'];

const blueprints = [
  { title: 'المصنع الذكي والثورة الصناعية الرابعة', slug: 'smart-factory-industry-4' },
];

const partners = [
  { name: 'IBM', role: 'إدارة الأصول والذكاء الاصطناعي الصناعي', tech: 'Maximo \u00b7 watsonx.ai \u00b7 IBM MQ للبروتوكولات الصناعية \u00b7 QRadar لأمن OT' },
  { name: 'Dell Technologies', role: 'الحوسبة الطرفية والبنية التحتية OT', tech: 'PowerEdge XR للحوسبة الطرفية \u00b7 PowerStore \u00b7 تكوينات صناعية جاهزة' },
  { name: 'Intel', role: 'مسرعات الذكاء الاصطناعي الصناعي', tech: 'Gaudi 3 لاستدلال AI \u00b7 Xeon 6 للحوسبة الطرفية \u00b7 OpenVINO للرؤية الصناعية' },
  { name: 'Red Hat', role: 'أتمتة ومنصة OT', tech: 'OpenShift للحوسبة الطرفية \u00b7 Ansible لأتمتة OT \u00b7 RHEL لأحمال العمل الصناعية' },
  { name: 'Platform9', role: 'Kubernetes طرفي للمصنع', tech: 'K8s مُدار للحوسبة الطرفية \u00b7 KubeVirt لتحديث VM \u00b7 إدارة عنقودية عن بعد' },
];

const outcomes = [
  { metric: 'تنبؤية', label: 'صيانة تقلل وقت التوقف' },
  { metric: 'آنية', label: 'فحص جودة بالذكاء الاصطناعي' },
  { metric: 'موحدة', label: 'رؤية تشغيلية OT/IT' },
  { metric: 'توأم رقمي', label: 'محاكاة قبل التغييرات' },
  { metric: 'IEC 62443', label: 'امتثال أمن صناعي' },
];

export default function ArabicManufacturingIndustryPage() {
  useEffect(() => { trackIndustryPageView('الصناعة والتصنيع'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>الصناعة والتصنيع | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="تحول قطاع التصنيع بالذكاء الاصطناعي — مصنع ذكي، ثورة صناعية رابعة، صيانة تنبؤية، وتكامل OT/IT للمصنعين السعوديين." />
      </Helmet>
      
      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <Factory className="w-3.5 h-3.5 ml-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">تركيز قطاعي</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                الصناعة والتصنيع
                <span className="block text-[#00BFFF]">التحول المؤسسي</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                مصنع ذكي. صيانة تنبؤية. تكامل OT/IT. بيونك تساعد المصنعين السعوديين في نشر الثورة الصناعية الرابعة — من الحوسبة الطرفية إلى المؤسسة، صُنع في السعودية.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">المصانع السعودية تعمل بأنظمة منفصلة وبيانات غير مستغلة.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ما يحتاجه المصنعون السعوديون للمنافسة عالميًا.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">كيف تتوافق قدرات بيونك مع تحول التصنيع.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ثلاثة نماذج تسليم مطبقة على قطاع التصنيع.</h2>
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
          <SectionLabel>المخططات التحويلية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية مثبتة لقطاع التصنيع.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">تصنيع</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints?industry=manufacturing" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              عرض جميع مخططات التصنيع <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجي</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تقنيات الثورة الصناعية الرابعة — مصممة للتصنيع السعودي.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">لسنا موردًا. نحن نصمم منصات مصانع ذكية باستخدام أرقى التقنيات الصناعية العالمية — مختارة للقدرة وليس لحوافز البيع.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">أثر قابل للقياس عبر تحول التصنيع.</h2>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4">مستعد لنشر الثورة الصناعية الرابعة في مصنعك؟</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">لنناقش كيف يمكن للصيانة التنبؤية والتوأم الرقمي وتكامل OT/IT أن تحول عملياتك التصنيعية.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/ar/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                ابدأ المحادثة <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ar/blueprints?industry=manufacturing" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                عرض مخططات التصنيع
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
