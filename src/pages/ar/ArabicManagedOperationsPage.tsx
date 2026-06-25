import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Activity, Gauge, BarChart3, GitBranch, TrendingUp, Shield } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { CANON_PARTNERS, type PartnerData } from '../../data/partnersData';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const HERO_BG = '/test-site-2/images/cloud-computing.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const valueDrivers = [
  { title: 'AIOps', desc: 'قياس موحد عبر كامل ممتلكاتكم التقنية. Instana + Turbonomic + IBM Concert. تحليل آلي للسبب الجذري. برامج AIOps تقلل متوسط وقت الاكتشاف بنسبة تصل إلى ٦٠٪ من خلال الربط الآلي للإشارات.', icon: Activity },
  { title: 'SRE', desc: 'ميزانيات الأخطاء، هندسة أهداف مستوى الخدمة، تحليلات ما بعد الحادثة بدون لوم. الموثوقية كمنهج هندسي — وليس مجرد قائمة دعم.', icon: Gauge },
  { title: 'FinOps', desc: 'رؤية مستمرة للتكاليف عبر السحابة الهجينة المتعددة. تحميل التكاليف، إعداد الميزانية، إدارة الحجوزات. برامج FinOps تحقق عادةً تجنب تكاليف بنسبة 25–40٪ خلال السنة الأولى.', icon: BarChart3 },
  { title: 'هندسة المنصات', desc: 'تطوير منصة المطورين الداخلية. مسارات ذهبية، بنية تحتية ذاتية الخدمة، تحسين تجربة المطورين.', icon: GitBranch },
  { title: 'التحسين المستمر', desc: 'مراجعات تحسين ربع سنوية. ضبط حجم الموارد، موازنة أعباء العمل، تحسين الأداء، تقليل الديون التقنية. تحسين قابل للقياس — كل ربع سنة.', icon: TrendingUp },
];

const tiers = [
  {
    name: 'الأساسي',
    subtitle: 'المراقبة والتنبيه',
    ideal: 'للمؤسسات التي تبدأ رحلة العمليات المدارة والمستدامة',
    items: [
      'مراقبة البنية التحتية ٢٤×٧ — صحة الخوادم والتخزين والشبكات',
      'مراقبة التطبيقات — المعاملات الاصطناعية، صحة API، معدلات الأخطاء',
      'مراقبة الأمن — فرز تنبيهات SIEM، استيعاب خلاصات التهديدات، L1 SOC',
      'إدارة الحوادث — تنبيه ← تذكرة ← تصعيد، SLA إقرار خلال ١٥ دقيقة',
      'مراجعة عمليات شهرية — تقرير الأداء، تحليل الحوادث، اتجاهات السعة',
    ],
  },
  {
    name: 'المتقدم',
    subtitle: 'الإدارة والتحسين',
    ideal: 'للمؤسسات التي تتطلب عمليات استباقية وتحسينًا مستمرًا',
    items: [
      'كل ما في الأساسي، بالإضافة إلى:',
      'AIOps والمراقبة الشاملة — Instana + Turbonomic + CloudIQ، قياس موحد',
      'إدارة السعة والأداء — ضبط الحجم، موازنة أعباء العمل، تحسين ربع سنوي',
      'حوكمة FinOps — رؤية تكاليف السحابة، تحميل التكاليف، إعداد الميزانية، إدارة الحجوزات',
      'استجابة حوادث L2 — استكشاف متقدم، إدارة تصعيد المورّدين',
      'إدارة SLA — أهداف مستوى خدمة محددة، ميزانيات أخطاء، مراجعة ربع سنوية مع خطة تحسين',
    ],
  },
  {
    name: 'النخبوي',
    subtitle: 'التحسين والتحول',
    ideal: 'للمؤسسات التي تتطلب عمليات بمستوى SRE وتطورًا مستمرًا للمنصات',
    items: [
      'كل ما في المتقدم، بالإضافة إلى:',
      'هندسة موثوقية الموقع — ميزانيات الأخطاء، هندسة أهداف مستوى الخدمة، هندسة الفوضى',
      'هندسة المنصات — تطوير IDP، صيانة المسارات الذهبية، تحسين تجربة المطورين',
      'مركز العمليات الأمنية كخدمة — عمليات SOC كاملة: صيد التهديدات، التحقيق الجنائي، الاستجابة للحوادث، تقارير الامتثال',
      'تطور المعمارية — تحسين مستمر، تقليل الديون التقنية، خارطة طريق تحديث',
      'مراجعة أعمال ربع سنوية — مستوى تنفيذي: أهداف مستوى الخدمة، FinOps، الوضع الأمني، خارطة طريق المعمارية',
    ],
  },
];

const capabilityCoverage = [
  { cap: 'الذكاء الاصطناعي المؤسسي والأتمتة', app: 'مراقبة MLOps، كشف انحراف النماذج، عمليات خطوط الذكاء الاصطناعي، صحة الوكلاء' },
  { cap: 'البيانات والتحليلات والذكاء', app: 'عمليات منصة البيانات، مراقبة مسارات البيانات، اتفاقيات مستوى خدمة جودة البيانات، توفر ذكاء الأعمال' },
  { cap: 'تطبيقات الأعمال وتجربة العميل', app: 'عمليات CRM، عمليات أتمتة التسويق، مراقبة مركز الاتصال، اتفاقيات مستوى خدمة التجارة' },
  { cap: 'التكامل والعمليات الذكية', app: 'عمليات بوابة API، مراقبة طوابير الرسائل، صحة التكامل، عمليات خطوط الأحداث' },
  { cap: 'الأمن السيبراني والمرونة السيبرانية', app: 'SOC ٢٤×٧، إدارة SIEM، صيد التهديدات، الاستجابة للحوادث، عمليات المخزن الاحتياطي' },
  { cap: 'البنية التحتية السيادية والسحابة الهجينة', app: 'عمليات مراكز البيانات، عمليات السحابة، إدارة أسطول Kubernetes، عمليات التخزين، عمليات النسخ الاحتياطي' },
  { cap: 'عمليات التقنية', app: 'عمليات IDP، إدارة منظومة المراقبة، حوكمة FinOps، أتمتة أدلة التشغيل' },
];

const blueprints = [
  { title: 'مركز العمليات السيبرانية الوطني', industry: 'حكومي', slug: 'national-soc' },
  { title: 'بنية تحتية مصرفية متوافقة مع SAMA', industry: 'بنوك', slug: 'sama-compliant-banking-infra' },
  { title: 'تكامل OT/IT والعمليات الآمنة', industry: 'نفط وغاز', slug: 'ot-it-integration-secure-ops' },
  { title: 'Zero Trust المؤسسي', industry: 'مؤسسات', slug: 'enterprise-zero-trust' },
  { title: 'منصة الذكاء السيادي', industry: 'حكومي', slug: 'sovereign-ai-platform' },
  { title: 'الذكاء الصناعي والعمليات التنبؤية', industry: 'نفط وغاز', slug: 'industrial-intelligence-predictive-ops' },
];

const partners: (PartnerData & { role: string; tech: string })[] = [
  { ...CANON_PARTNERS.find(p => p.name === 'IBM')!, role: 'AIOps والمراقبة وأتمتة تقنية المعلومات', tech: 'Instana · Turbonomic · IBM Concert · Cloud Pak for Watson AIOps · SevOne' },
  { ...CANON_PARTNERS.find(p => p.name === 'Dell Technologies')!, role: 'قياس البنية التحتية والعمليات', tech: 'CloudIQ · OpenManage Enterprise · APEX Console · PowerProtect' },
  { ...CANON_PARTNERS.find(p => p.name === 'Platform9')!, role: 'عمليات Kubernetes متعددة المجموعات والسحابة الخاصة', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation' },
  { ...CANON_PARTNERS.find(p => p.name === 'Intel')!, role: 'أداء البنية التحتية والقياس', tech: 'Intel Node Manager · Resource Director Technology · تحسين الأداء' },
  { ...CANON_PARTNERS.find(p => p.name === 'Google')!, role: 'عمليات السحابة وممارسات SRE', tech: 'Cloud Monitoring · Cloud Operations · Cloud Run · GKE' },
];

export default function ArabicManagedOperationsPage() {

  useEffect(() => { trackServicePageView('Managed Operations'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-24 text-center px-4"
        >
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#D97706]/25 bg-[#D97706]/5 mb-10">
              <span className="text-tiny text-[#D97706] font-semibold tracking-widest uppercase">العمليات المدارة والمستدامة</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              <span style={{ color: ACCENT }}>تمكين التحول المستمر.</span><br />
              ليست خدمات مدارة تقليدية.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed">
              نشغّل منصاتكم المؤسسية وتمكين التحول المستمر هو مهمتنا الأساسية. لا نكتفي بإبقاء الأنظمة عاملة — نحن نحسّن ونصمم ونطور منصاتكم باستمرار، مطبقين AIOps وSRE وFinOps وهندسة المنصات لضمان أن يحقق تحولكم قيمة مركّبة ومتراكمة، لا عوائد متناقصة.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

          {/* Positioning distinction */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-6">
              <p className="text-tiny font-semibold uppercase tracking-wider mb-3 text-text-muted">مزود الخدمات المدارة التقليدي</p>
              <ul className="space-y-2">
                {['مدفوع بالتذاكر، تفاعلي', 'الحفاظ على الحالة الثابتة', 'مركز على التكلفة', 'أدوات مورّد واحد', 'مكتب الخدمة = القيمة'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-tiny text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-text-muted flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-secondary border rounded-xl p-6" style={{ borderColor: `${ACCENT}30` }}>
              <p className="text-tiny font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>تمكين التحول المستمر</p>
              <ul className="space-y-2">
                {['مدفوع بالهندسة، تنبؤي', 'تحسين مستمر', 'مركز على النتائج', 'متعدد المورّدين، قياس موحد', 'الهندسة = القيمة'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-tiny">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ACCENT }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>الواقع</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            تشغيل المنصات المعقدة أصعب من بنائها — وندرة الكفاءات تزيد التحدي تعقيدًا.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            مهندسو SRE ومهندسو المنصات ومحللو الأمن هم أصعب الأدوار في التوظيف في المملكة العربية السعودية. التغطية التشغيلية تنخفض في الليالي وعطلات نهاية الأسبوع والأعياد — تحديدًا عندما تكون في أمس الحاجة إليها. تشتت الأدوات دون تكامل يخلق نقاطًا عمياء تشغيلية. التكاليف تنمو بنسبة تتجاوز ٣٠٪ سنويًا دون حوكمة. نعالج هذا — بالهندسة أولاً.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'ندرة الكفاءات', text: 'مهندسو SRE ومهندسو المنصات ومحللو الأمن — أصعب الأدوار في التوظيف في المملكة. منصاتكم تحتاجهم ٢٤×٧.' },
              { pre: 'فجوات التغطية', text: 'الليالي وعطلات نهاية الأسبوع والأعياد — التغطية التشغيلية تنخفض تحديدًا عندما تكون الحوادث أكثر ضررًا.' },
              { pre: 'تشتت الأدوات', text: 'أكثر من ١٠ أدوات مراقبة عبر المورّدين — صفر ترابط، لا رؤية موحدة للصحة، إرهاق التنبيهات يثقل كاهل الفرق.' },
              { pre: 'عمليات تفاعلية', text: 'الفرق تطفئ الحرائق بدلاً من منعها. لا قدرة تنبؤية. متوسط وقت الإصلاح يُقاس بالساعات، وليس بالدقائق.' },
              { pre: 'فراغ رؤية التكاليف', text: 'تكاليف السحابة والبنية التحتية والتراخيص تنمو بنسبة تتجاوز ٣٠٪ سنويًا — غير متتبعة، غير محكومة، غير ميزانية.' },
              { pre: 'عبء إدارة المورّدين', text: 'إدارة اتفاقيات مستوى الخدمة عبر أكثر من ٥ مورّدي تقنية تستهلك أفضل مهندسيك — الذين ينبغي أن يبنوا، لا أن يديروا.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#D97706]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. VALUE DRIVERS ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>محفزات القيمة الأساسية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            منهجيات هندسية تحقق قيمة تشغيلية مركبة.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            هذه ليست "خدمات". إنها قدرات هندسية تضمن أن منصاتكم تتحسن باستمرار — وليس فقط تبقى حية.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueDrivers.map((v, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <v.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 OPERATIONAL TIERS ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المستويات التشغيلية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">ثلاثة مستويات. شريك واحد. قيمة مركبة.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            توسّع من المراقبة إلى SRE الكامل بدون تغيير المزود. كل مستوى يبني على السابق — النضج التشغيلي يتراكم مع مرور الوقت.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300 flex flex-col">
                <div className="mb-5">
                  <span className="text-tiny font-semibold tracking-wider uppercase" style={{ color: ACCENT }}>{tier.name}</span>
                  <h3 className="text-xl font-bold mt-1 mb-1">{tier.subtitle}</h3>
                  <p className="text-tiny text-text-muted">{tier.ideal}</p>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-tiny text-text-muted leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. CAPABILITY COVERAGE ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>تغطية القدرات</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            تمتد العمليات عبر كل قدرة — لحماية وتضخيم قيمة التحول.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilityCoverage.map((c, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#D97706]/15 transition-all duration-300 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 5. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>المنظومة الاستراتيجية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            المنصات التي نشغّلها — والشركاء الذين نشغّلها معهم.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
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

        {/* ═══ 6. RELATED BLUEPRINTS ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>مخططات التحول المرجعية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">معماريات مرجعية نبقيها عاملة — ومتحسنة باستمرار.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/ar/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <span className="text-tiny text-[#D97706]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#D97706] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#D97706]/40 group-hover:text-[#D97706] group-hover:-translate-x-1 transition-all mt-2 rotate-180" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/ar/blueprints" className="inline-flex items-center gap-1.5 text-[#D97706] text-sm font-medium hover:underline">
              عرض جميع المخططات المرجعية <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. WHY BIONIC ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>لماذا بيونك</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">الفرق التشغيلي.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'تحول مستمر، لا حالة ثابتة', desc: 'كل ربع سنة نحسّن شيئًا قابلًا للقياس — أهداف مستوى الخدمة، التكاليف، سرعة التطبيق، تجربة المطورين. العمليات كقيمة مركبة، لا تكلفة ثابتة.' },
              { title: 'نشغّل ما نصممه', desc: 'لا فجوة تسليم. الفريق الذي صمم منصتكم يطورها باستمرار. قرارات المعمارية تُتخذ والواقع التشغيلي مدمج من اليوم الأول.' },
              { title: 'مدفوع بالذكاء الاصطناعي، بقيادة هندسية', desc: 'Instana + Turbonomic + AIOps يتنبؤون بالمشكلات قبل أن تصبح حوادث. SRE + هندسة المنصات يمنعونها. الأتمتة هي الاستجابة الأولى — لا تذكرة.' },
              { title: '3 مستويات، شريك واحد، نضج مركب', desc: 'توسّع من المراقبة الأساسية إلى SRE النخبوي دون تغيير المزود. النضج التشغيلي يتراكم — كل مستوى يبني على السابق.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ CROSS-NAVIGATION ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-5 text-text-muted">ماذا تود استكشافه أيضًا؟</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'القدرات', path: '/ar/capabilities/ai' },
                { label: 'القطاعات', path: '/ar/industries/government' },
                { label: 'المخططات المرجعية', path: '/ar/blueprints' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-white/20 transition-all hover:-translate-y-0.5">
                  {link.label} <ArrowRight className="w-3.5 h-3.5 text-text-muted rotate-180" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              هل أنتم مستعدون لتشغيل تحولكم — بشكل مستمر؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              دعنا نناقش أي مستوى يناسب نضجكم التشغيلي وكيف يمكننا البدء في تحقيق قيمة مركبة — ربع سنة تلو الآخر.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}
              >
                ابدأ المحادثة
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/capabilities/ops"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#D97706]/30"
              >
                عرض القدرات
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
