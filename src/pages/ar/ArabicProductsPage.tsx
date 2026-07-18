import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Cpu, Wrench } from 'lucide-react';
import { PartnerLogo } from '../../components/PartnerLogo';
import { STRATEGIC_PARTNERS_SINGLE, SALESFORCE_ECOSYSTEM } from '../../data/strategicPartners';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/it-infrastructure.avif';

/* ═══════════════════════════════════════════
   CATEGORY-BASED PRODUCT CATALOG
   ═══════════════════════════════════════════ */

interface Product {
  name: string;
  vendor: string;
  desc: string;
}

interface Category {
  name: string;
  products: Product[];
}

/* Tab 1: Infrastructure ⎯ Full AI Stack: Laptop → GPU → Server → Cloud */
const infraCategories: Category[] = [
  {
    name: 'محطات عمل وأجهزة الذكاء الاصطناعي',
    products: [
      { name: 'Precision AI Workstations', vendor: 'Dell Technologies', desc: 'محطات عمل مكتبية ومحمولة مهيأة للذكاء الاصطناعي بمعالجات NVIDIA RTX أو Intel Arc Pro، معتمدة من مزودي البرمجيات المستقلين لأعمال تعلم الآلة وعلوم البيانات وتطوير الذكاء الاصطناعي الطرفي.' },
      { name: 'ThinkPad P-Series & ThinkStation', vendor: 'Lenovo', desc: 'محطات عمل احترافية ومكتبية للذكاء الاصطناعي — خيارات معالجات NVIDIA RTX وذاكرة كبيرة، مصممة لتشغيل النماذج محليًا وأعمال الذكاء الاصطناعي الميدانية.' },
      { name: 'Intel Core Ultra (AI PC)', vendor: 'Intel', desc: 'معالجات الجيل التالي للحواسب الشخصية المزوّدة بوحدة معالجة عصبية مدمجة — تقدم استدلال الذكاء الاصطناعي على الجهاز وتجارب Copilot+ وكفاءة طاقة عالية للحواسب المؤسسية.' },
    ],
  },
  {
    name: 'مسرّعات ومعالجات الذكاء الاصطناعي',
    products: [
      { name: 'Gaudi 3 AI Accelerators', vendor: 'Intel', desc: 'مسرّعات تعلّم عميق مخصصة لتدريب النماذج واستدلالها على نطاق واسع. منظومة مفتوحة — بديل اقتصادي للمعماريات الاحتكارية.' },
      { name: 'Data Center GPU Max', vendor: 'Intel', desc: 'حوسبة عالية الكثافة للحوسبة الفائقة والذكاء الاصطناعي — حتى ١٢٨ نواة Xe لكل وحدة. مصممة للأحمال المتوازية الكثيفة: المحاكاة والتدريب والحوسبة العلمية.' },
      { name: 'NVIDIA GPUs (via OEM)', vendor: 'Dell Technologies', desc: 'وحدات NVIDIA H100 وL40S وRTX مدمجة مصنعيًا في خوادم Dell PowerEdge ومحطات Precision. مجموعة برمجيات NVIDIA AI Enterprise متاحة بالكامل.' },
      { name: 'NVIDIA GPUs (via OEM)', vendor: 'Lenovo', desc: 'وحدات NVIDIA H100 وL40S وRTX في خوادم Lenovo ThinkSystem ومحطات ThinkStation — معتمدة لمنصتي NVIDIA AI Enterprise وNVIDIA Omniverse.' },
    ],
  },
  {
    name: 'الخوادم',
    products: [
      { name: 'PowerEdge Servers', vendor: 'Dell Technologies', desc: 'خوادم مؤسسية بأنواع الرف والبرج والمسرّعة — من الاستخدام العام إلى الخوادم المحسّنة للذكاء الاصطناعي بخيارات NVIDIA أو Intel GPU.' },
      { name: 'ThinkSystem Servers', vendor: 'Lenovo', desc: 'خوادم مؤسسية مصممة لتدريب الذكاء الاصطناعي والاستدلال وقواعد البيانات والافتراضية — مختبرة مع NVIDIA AI Enterprise.' },
      { name: 'Power Servers', vendor: 'IBM', desc: 'خوادم Linux مخصصة للأحمال كثيفة البيانات وSAP HANA واستدلال الذكاء الاصطناعي.' },
      { name: 'Xeon Scalable Processors', vendor: 'Intel', desc: 'معالجات مراكز بيانات بتسريع ذكاء اصطناعي مدمج (AMX) وحماية معززة على مستوى العتاد.' },
    ],
  },
  {
    name: 'التخزين',
    products: [
      { name: 'PowerStore Storage', vendor: 'Dell Technologies', desc: 'تخزين فلاشي بالكامل من الفئة المتوسطة بأتمتة ذكية وأداء NVMe وقدرة AppsON المدمجة.' },
      { name: 'PowerMax Storage', vendor: 'Dell Technologies', desc: 'تخزين عالي الأداء للمهام الحرجة — تحسين آني مدعوم بالذكاء الاصطناعي ومعمارية بلا توقف للصيانة.' },
      { name: 'FlashSystem Storage', vendor: 'IBM', desc: 'تخزين فلاشي بالكامل مسرّع بتقنية NVMe — مرونة سيبرانية مع تشفير مدمج وكشف برامج الفدية.' },
    ],
  },
  {
    name: 'البنية فائقة التقارب (HCI)',
    products: [
      { name: 'VxRail Hyperconverged', vendor: 'Dell Technologies', desc: 'جهاز HCI متكامل — حوسبة وتخزين وشبكات. إدارة آلية لدورة الحياة لمنصات VMware والسحابة الأصلية.' },
      { name: 'ThinkAgile HCI', vendor: 'Lenovo', desc: 'بنية HCI متكاملة للسحابة الهجينة — مدمجة مصنعيًا مع Nutanix أو Microsoft أو VMware.' },
    ],
  },
  {
    name: 'السحابة والخدمات حسب الاستخدام',
    products: [
      { name: 'APEX Cloud & As-a-Service', vendor: 'Dell Technologies', desc: 'بنية تحتية بنموذج استهلاكي — في الموقع أو الطرفية أو مراكز البيانات المشتركة. دفع حسب الاستخدام بسعة مرنة.' },
      { name: 'Managed Kubernetes', vendor: 'Platform9', desc: 'Kubernetes في مركز بياناتك أو شبكتك السحابية الخاصة — متعدد التجمعات، إصلاح ذاتي، يُدار من لوحة تحكم SaaS واحدة.' },
      { name: 'OpenStack Private Cloud', vendor: 'Platform9', desc: 'سحابة خاصة تشبه AWS على عتادك — حوسبة وشبكات وتخزين وإدارة هوية. سيادة البيانات دون عبء تشغيلي.' },
      { name: 'Red Hat OpenShift', vendor: 'Red Hat', desc: 'منصة Kubernetes المؤسسية — بناء ونشر وتوسيع التطبيقات المعبأة بالحاويات عبر السحابة الهجينة. أساس السحابة الخاصة ذات السيادة.' },
      { name: 'TruScale IaaS', vendor: 'Lenovo', desc: 'بنية تحتية كخدمة — عتاد في الموقع بنموذج استهلاك سحابي. دفع حسب الاستخدام بسعة مرنة، بإدارة Lenovo.' },
    ],
  },
];

/* Tab 2: Cybersecurity */
const cyberCategories: Category[] = [
  {
    name: 'إدارة المعلومات الأمنية وذكاء التهديدات',
    products: [
      { name: 'QRadar SIEM', vendor: 'IBM', desc: 'كشف موحد للتهديدات والتحقيق والاستجابة. متوافق مع الهيئة الوطنية للأمن السيبراني — يشمل تحليل السجلات والتحليلات السلوكية.' },
      { name: 'QRadar SOAR', vendor: 'IBM', desc: 'تنسيق أمني واستجابة آلية — تقنين أدلة الإجراءات وأتمتة الفرز. تقليص متوسط زمن الاستجابة من ساعات إلى دقائق.' },
    ],
  },
  {
    name: 'أمن البيانات والامتثال',
    products: [
      { name: 'Guardium Data Security', vendor: 'IBM', desc: 'مراقبة آنية لنشاط قواعد البيانات وتقييم الثغرات وأتمتة الامتثال. متوافق مع متطلبات البنك المركزي السعودي ونظام حماية البيانات الشخصية.' },
    ],
  },
  {
    name: 'التعافي السيبراني',
    products: [
      { name: 'PowerProtect Cyber Recovery', vendor: 'Dell Technologies', desc: 'خزنة استرداد معزولة وغير قابلة للتغيير — معزولة تمامًا عن الشبكات عن بيئة الإنتاج. تحمي البيانات الحرجة من برامج الفدية بفحوصات سلامة آلية.' },
    ],
  },
];

/* Tab 3: Platforms & AI */
const platformCategories: Category[] = [
  {
    name: 'إدارة علاقات العملاء وتجربة العميل',
    products: [
      { name: 'Sales Cloud', vendor: 'Salesforce', desc: 'إدارة خطوط المبيعات والتنبؤ وتخطيط المناطق والرؤى المدعومة بالذكاء الاصطناعي. مصممة لفرق المبيعات المؤسسية في المملكة.' },
      { name: 'Service Cloud', vendor: 'Salesforce', desc: 'خدمة عملاء ذكية — إدارة الحالات وتوجيه متعدد القنوات وخدمة ميدانية ومساعدة ذكية للموظفين.' },
      { name: 'Marketing Cloud', vendor: 'Salesforce', desc: 'تسويق مخصص على نطاق واسع — رحلات عميل وحملات بريد إلكتروني وجوال وإعلانات وتفاعل آني عبر Data Cloud.' },
    ],
  },
  {
    name: 'التكامل والأتمتة',
    products: [
      { name: 'Anypoint Platform', vendor: 'MuleSoft', desc: 'تكامل قائم على واجهات برمجة التطبيقات — ربط التطبيقات والبيانات والأجهزة. موصلات جاهزة وتصميم وبناء وإدارة واجهات برمجة التطبيقات على نطاق المؤسسة.' },
      { name: 'Ansible Automation Platform', vendor: 'Red Hat', desc: 'أتمتة مؤسسية — توفير البنية التحتية وإدارة الإعدادات ونشر التطبيقات وتنسيق الأمن. معمارية بلا وكلاء.' },
      { name: 'API Management', vendor: 'MuleSoft', desc: 'إدارة دورة حياة كاملة لواجهات برمجة التطبيقات — بوابة وأمن وتحليلات وبوابة مطورين. حوكمة وتوسيع منظومة واجهات برمجة التطبيقات.' },
    ],
  },
  {
    name: 'الذكاء الاصطناعي المؤسسي وتعلم الآلة',
    products: [
      { name: 'Einstein AI', vendor: 'Salesforce', desc: 'ذكاء اصطناعي مدمج في كل تطبيق من تطبيقات Salesforce — تنبؤات وتوصيات وذكاء اصطناعي توليدي قائم على بياناتك المؤسسية.' },
      { name: 'Agentforce', vendor: 'Salesforce', desc: 'وكلاء ذكاء اصطناعي مستقلون يعملون عبر المبيعات والخدمة والتسويق والتجارة — يتخذون الإجراءات، لا يكتفون بتوليد النصوص.' },
      { name: 'watsonx.ai', vendor: 'IBM', desc: 'استوديو مؤسسي للنماذج الأساسية والذكاء الاصطناعي التوليدي وتعلم الآلة. تدريب وتحقق وضبط ونشر — مع حوكمة مدمجة.' },
      { name: 'watsonx Assistant', vendor: 'IBM', desc: 'ذكاء اصطناعي حواري — بناء مساعدين افتراضيين أذكياء يفهمون اللغة العربية ويعملون عبر مختلف القنوات.' },
      { name: 'Vertex AI Platform', vendor: 'Google', desc: 'منصة ذكاء اصطناعي موحدة — تدريب ونشر وإدارة نماذج تعلم الآلة وتطبيقات الذكاء الاصطناعي التوليدي. مكتبة نماذج ومنشئ وكلاء وعمليات MLOps متكاملة.' },
      { name: 'Gaudi 3 AI Accelerators', vendor: 'Intel', desc: 'مسرّعات تعلّم عميق مخصصة للتدريب والاستدلال. منظومة مفتوحة، بديل اقتصادي لوحدات معالجة الرسوميات الاحتكارية.' },
    ],
  },
  {
    name: 'البيانات والتحليلات',
    products: [
      { name: 'Tableau Creator', vendor: 'Tableau', desc: 'تحليلات شاملة — ربط البيانات وبناء لوحات معلومات تفاعلية ومشاركة الرؤى. إعداد البيانات وتحليلها وسرد القصص في ترخيص واحد.' },
      { name: 'Tableau Explorer & Viewer', vendor: 'Tableau', desc: 'تحليلات ذاتية الخدمة — استكشاف لوحات معلومات موثوقة وطرح الأسئلة باللغة الطبيعية والاشتراك في تنبيهات قائمة على البيانات.' },
      { name: 'Informatica MDM', vendor: 'Informatica', desc: 'إدارة البيانات الرئيسية — رؤية شاملة بزاوية ٣٦٠ درجة للعملاء والأصول والمورّدين. مطابقة وإدارة مدعومة بالذكاء الاصطناعي.' },
      { name: 'Informatica Data Governance', vendor: 'Informatica', desc: 'حوكمة البيانات وفهرستها — اكتشاف وتصنيف وحوكمة البيانات. تتبع آلي للنسب وقواعد الجودة وامتثال لنظام حماية البيانات الشخصية.' },
      { name: 'BigQuery', vendor: 'Google', desc: 'مستودع بيانات سحابي متعدد بدون خادم مع تعلّم آلة مدمج. تحليل بيتابايتات من البيانات في ثوانٍ — تحليلات مهيأة للذكاء الاصطناعي.' },
    ],
  },
];

/* Tab 4: Services */
const serviceCategories: Category[] = [
  {
    name: 'وكلاء الذكاء الاصطناعي المؤسسي',
    products: [
      { name: 'Agent Discovery Workshop', vendor: 'Bionic Solutions', desc: 'مشروع لمدة أسبوعين — نحدد ٣–٥ حالات استخدام عالية العائد لوكلاء الذكاء الاصطناعي عبر مؤسستك. تُسلّم كخارطة طريق ذات أولوية مع تقديرات البناء.' },
      { name: 'Custom AI Agent Build', vendor: 'Bionic Solutions', desc: 'تطوير شامل لدورة حياة الوكيل — اكتشاف وتصميم وبناء واختبار ونشر. مدعوم بـ Salesforce Agentforce أو IBM watsonx أو Google Vertex AI. يُسلّم جاهزًا للإنتاج في بيئتك.' },
      { name: 'Agent Operations & Evolution', vendor: 'Bionic Solutions', desc: 'مراقبة مستمرة للوكلاء وتحسين الموجّهات وصيانة قاعدة المعرفة وتحليلات الأداء. عقد دوري شهري — نواصل تطوير وكلائك.' },
    ],
  },
  {
    name: 'الاستشارات والاستراتيجية',
    products: [
      { name: 'AI Readiness Assessment', vendor: 'Bionic Solutions', desc: 'تقييم لمدة أسبوعين — جاهزية البنية التحتية والبيانات والحوكمة والمواهب. تقرير جاهز لمجلس الإدارة مع خارطة طريق ذات أولوية.' },
      { name: 'Strategy & Architecture', vendor: 'Bionic Solutions', desc: 'مشروع تنفيذي — تصميم الحالة المستهدفة وتحليل فجوات القدرات وخارطة طريق تحول لمدة ١٨ شهرًا.' },
    ],
  },
  {
    name: 'النشر والتكامل',
    products: [
      { name: 'Platform Deployment', vendor: 'Bionic Solutions', desc: 'نشر كامل للعتاد والبرمجيات والمنصات السحابية — متعدد المورّدين والمجالات بمسؤولية موحدة.' },
      { name: 'AI & Automation Delivery', vendor: 'Bionic Solutions', desc: 'نماذج ذكاء اصطناعي وسير أتمتة وأنظمة وكلاء إلى بيئة الإنتاج — عمليات MLOps ومراقبة وحوكمة.' },
      { name: 'Platform Engineering & IDP', vendor: 'Bionic Solutions', desc: 'منصة تطوير داخلية — مسارات تطوير موصى بها وبنية تحتية ذاتية الخدمة وحوكمة آلية. بنية تحتية في دقائق لا أسابيع.' },
    ],
  },
  {
    name: 'العمليات المدارة',
    products: [
      { name: 'Managed Operations على مدار الساعة', vendor: 'Bionic Solutions', desc: 'عمليات منصات مستمرة — مراقبة واستجابة للحوادث وتحديثات وتحسين. ٣ مستويات: الأساسية والمتقدمة والنخبة.' },
      { name: 'SOC-as-a-Service', vendor: 'Bionic Solutions', desc: 'مركز عمليات أمنية على مدار الساعة — مراقبة التهديدات والصيد والاستجابة للحوادث والامتثال. متوافق مع الهيئة الوطنية للأمن السيبراني والبنك المركزي السعودي.' },
      { name: 'FinOps Governance', vendor: 'Bionic Solutions', desc: 'إدارة تكاليف السحابة والبنية التحتية — رؤية ومحاسبة تناسبية وتنبؤ وتحسين. تحقق عادةً توفيرًا بنسبة ٢٥–٤٠٪ خلال ربعين.' },
    ],
  },
];

/* ═══════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════ */

const tabs = [
  { id: 'platforms', label: 'المنصات والذكاء الاصطناعي', icon: Cpu, desc: 'إدارة علاقات العملاء والتكامل والذكاء الاصطناعي المؤسسي والبيانات والتحليلات.' },
  { id: 'infrastructure', label: 'البنية التحتية', icon: Server, desc: 'الخوادم والتخزين والبنية فائقة التقارب ومنصات السحابة السيادية.' },
  { id: 'cybersecurity', label: 'الأمن السيبراني', icon: Shield, desc: 'إدارة المعلومات الأمنية وأمن البيانات والتعافي السيبراني والهوية — جميع الشركاء.' },
  { id: 'services', label: 'الخدمات', icon: Wrench, desc: 'الاستراتيجية والنشر والعمليات المدارة والتحسين.' },
] as const;

type TabId = typeof tabs[number]['id'];

function getCategories(tab: TabId): Category[] {
  switch (tab) {
    case 'infrastructure': return infraCategories;
    case 'cybersecurity': return cyberCategories;
    case 'platforms': return platformCategories;
    case 'services': return serviceCategories;
  }
}

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

export default function ArabicProductsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('platforms');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = getCategories(activeTab);

  return (
    <div
       className="min-h-screen bg-bg-primary" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      <Helmet>
        <title>المنتجات | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="منظومة متكاملة من منتجات الذكاء الاصطناعي المؤسسي — من الجوال إلى السحابة. ٨ شركاء. أكثر من ٥٠ منتجًا. علاقة واحدة." />
      </Helmet>

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          ref={heroRef} {...fadeIn}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative z-10 pt-40 pb-24 px-4 text-center"
        >
          <div className="container mx-auto max-w-4xl">
            <SectionLabel>كتالوج المنتجات</SectionLabel>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              توريد التقنية المؤسسية<br />
              <span style={{ color: ACCENT }}>بأسلوب مبسّط.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-[620px] mx-auto leading-relaxed">
              تصفّح حسب الفئة — قارن العلامات التجارية والطرازات والإمكانيات.
              علاقة واحدة. سلسلة توريد واحدة. مسؤولية كاملة. توريد وتشغيل داخل المملكة.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. TABS ═══ */}
        <div className="flex flex-wrap gap-2 mb-20 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-[#00BFFF15] border-[#00BFFF40] text-white'
                  : 'border-white/5 text-text-muted hover:text-text-primary hover:border-white/15'
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#00BFFF]' : ''}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ═══ 3. CATEGORIES ═══ */}
        <div className="space-y-16 mb-24">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: catIdx * 0.08 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-text-primary">{cat.name}</h2>
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-tiny text-text-muted">{cat.products.length} {cat.products.length > 1 ? 'خيارات' : 'خيار'}</span>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.products.map((product, pi) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: catIdx * 0.08 + pi * 0.03 }}
                    className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF20] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-36 h-36 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.06] border border-white/8 p-3">
                        <PartnerLogo partner={product.vendor} size="md" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-text-primary group-hover:text-[#00BFFF] transition-colors">{product.name}</h3>
                        <p className="text-tiny text-text-muted mt-0.5">{product.vendor}</p>
                        <p className="text-text-muted text-small mt-2 leading-relaxed">{product.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══ 4. HOW TO ORDER ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12">
            <SectionLabel>كيفية الطلب</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">ثلاث خطوات من الاستفسار إلى التسليم.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '١', title: 'أخبرنا بما تحتاج', desc: 'أرسل متطلباتك — ورقة مواصفات أو موجز مشروع أو حتى اسم منتج. ونتولى نحن الباقي.' },
                { step: '٢', title: 'استلم عرض سعر مخصص', desc: 'خلال ٢٤–٤٨ ساعة: عرض سعر رسمي يتضمن التسعير وجدول التسليم وتفاصيل التوريد من الشركاء والموزعين.' },
                { step: '٣', title: 'التسليم والنشر', desc: 'تسليم المنتجات إلى موقعك في المملكة. واختياريًا: النشر والتكامل والعمليات المدارة من قبل فريقنا.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                    style={{ backgroundColor: ACCENT }}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. VENDOR ECOSYSTEM ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <SectionLabel>المنظومة الاستراتيجية</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold">٨ شركاء تقنيين استراتيجيين.</h2>
            <p className="text-text-muted text-base mt-3 max-w-lg mx-auto">
              متعددو الموردين بالتصميم، وعلاقة واحدة مسؤولة — نفس الشركاء الاستراتيجيين في صفحة الشركاء.
            </p>
          </div>
          {/* الشركاء السبعة المفردون */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {STRATEGIC_PARTNERS_SINGLE.map((partner) => (
              <div key={partner.id}
                className="bg-bg-secondary border border-white/5 rounded-xl p-4 flex items-center justify-center h-36 hover:border-[#00BFFF20] hover:bg-[#00BFFF03] transition-all duration-300">
                <div className="w-full h-24 flex items-center justify-center">
                  <PartnerLogo partner={partner.logoName} size="md" />
                </div>
              </div>
            ))}
          </div>
          {/* منظومة Salesforce — علاقة واحدة موحّدة بعرض كامل */}
          <div className="mt-3 lg:mt-4 bg-bg-secondary border border-[#00A1E0]/20 rounded-xl p-6 md:p-8 hover:border-[#00A1E0]/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-3 md:w-56 shrink-0">
                <PartnerLogo partner={SALESFORCE_ECOSYSTEM.logoName} size="lg" />
                <span className="text-tiny font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#00A1E0]/30 bg-[#00A1E0]/10 text-[#00A1E0]">منظومة</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-3">
                  {SALESFORCE_ECOSYSTEM.ecosystemMembers!.map((sub) => (
                    <div key={sub} className="h-8 flex items-center opacity-70">
                      <PartnerLogo partner={sub} size="sm" />
                    </div>
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{SALESFORCE_ECOSYSTEM.outcome.ar}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ 6. CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pb-20 md:pb-28 lg:pb-32"
        >
          <div className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00BFFF0A, var(--bg-secondary), var(--bg-secondary))',
              border: '1px solid #00BFFF15',
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #00BFFF05  %, transparent  %)' }} />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                هل أنت مستعد <span style={{ color: ACCENT }}>للتوريد بثقة</span>؟
              </h2>
              <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
                أخبرنا بما تحتاج. نُعدّ لك عرض سعر رسمي خلال ٢٤–٤٨ ساعة —
                مع تفاصيل التوريد من الشركاء والتسعير وجدول التسليم. بدون التزام.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/ar/contact?source=products&intent=procurement"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}
                >
                  اطلب عرض سعر
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Link>
                <Link
                  to="/ar/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30"
                >
                  احجز جلسة توريد
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
