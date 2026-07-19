import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, GitMerge, Lightbulb, Cpu } from 'lucide-react';
import { PartnerLogo } from '../../components/PartnerLogo';
import { CANON_PARTNERS } from '../../data/partnersData';
import { StrategicPartnersShowcase } from '../../components/StrategicPartnersShowcase';
import { trackPageView } from '../../lib/analytics';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

/* ── نتائج الشركاء: بطاقة واحدة لكل شريك، نتيجة واحدة لكل منهم ── */

/* ── مستويات الشراكة ── */
const TIERS = [
  {
    title: 'موزع معتمد',
    subtitle: 'توريد. تسليم. دعم.',
    desc: 'إعادة بيع معتمدة ونشر لتقنيات الشركاء — أجهزة وبرمجيات ومنصات سحابية — مع خدمات لوجستية محلية وتسليم داخل المملكة ودعم الضمان.',
    icon: Shield,
    examples: 'Dell PowerEdge, PowerStore · Intel Xeon, Gaudi AI · IBM FlashSystem, Power · Platform9 · Lenovo ThinkSystem',
  },
  {
    title: 'شريك تنفيذ',
    subtitle: 'تنفيذ. تكامل. تشغيل.',
    desc: 'تنفيذ وتكامل معتمد عبر منصات الشركاء — معمارية قائمة على واجهات برمجة التطبيقات، وإدارة بيانات رئيسية، ونشر CRM، وهندسة بيانات، وعمليات مُدارة.',
    icon: GitMerge,
    examples: 'نشر Salesforce CRM · تكامل MuleSoft القائم على API · Informatica MDM · Tableau BI · Red Hat OpenShift',
  },
  {
    title: 'مستشار استراتيجي',
    subtitle: 'تصميم. تحول. حوكمة.',
    desc: 'المعمارية المؤسسية واستراتيجية الذكاء الاصطناعي وحوكمة التحول — نختار ونجمع ونشغّل تقنيات الشركاء كمنظومة واحدة بمسؤولية موحدة.',
    icon: Lightbulb,
    examples: 'حوكمة ذكاء Watsonx · تصميم منصة Vertex AI · معمارية Zero Trust · مخطط السحابة السيادية',
  },
];

export default function ArabicPartnersPage() {
  useEffect(() => { trackPageView('Partners Ecosystem'); }, []);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
       className="min-h-screen bg-bg-primary" dir="rtl">
      <Helmet>
        <title>الشركاء | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="شركاؤنا الاستراتيجيون — سيلزفورس، قوقل كلاود، آي بي إم، إنتل، ديل، إنفورماتيكا، وغيرهم. علاقة واحدة شاملة لتعدد الموردين." />
      </Helmet>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            <p className="text-tiny font-semibold tracking-widest uppercase mb-4 text-accent-primary">
              المنظومة الاستراتيجية للتقنية
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ٨ شركاء تقنيين استراتيجيين.
              <br />
              <span className="text-accent-primary">مُكامل واحد مسؤول.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              نختار ونجمع ونشغّل أحدث التقنيات المؤسسية عالميًا — لتحصل على علاقة مسؤولة واحدة عبر منظومة متكاملة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── مع من نتعاون ── */}
      <section ref={ref1} className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView1 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            <p className="text-tiny font-semibold tracking-wider uppercase mb-3 text-accent-primary">مع من نتعاون</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ثمانية شركاء. علاقة مسؤولة واحدة.</h2>
            <p className="text-text-muted max-w-3xl mx-auto">
              شراكاتنا ليست مجرد أسماء ضمن منظومة العمل، بل قدرات متخصصة تسهم في تسريع التحول المؤسسي وتعظيم الأثر التشغيلي والاستثماري.
            </p>
          </motion.div>

          <StrategicPartnersShowcase lang="ar" inView={inView1} />
        </div>
      </section>

      {/* ── كيف نتعاون ── */}
      <section ref={ref2} className="py-16 md:py-24 bg-bg-secondary/30 border-y border-white/[0.06]">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView2 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            <p className="text-tiny font-semibold tracking-wider uppercase mb-3 text-accent-primary">كيف نتعاون</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ثلاثة مستويات. علاقة واحدة.</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              ليست كل علاقات الشركاء متشابهة. نشارك بالمستوى المناسب — من إعادة البيع المعتمدة إلى المشاركة في تصميم المنصات الاستراتيجية.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-bg-primary border border-white/[0.06] rounded-xl p-6 hover:border-accent-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                  <tier.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tier.title}</h3>
                <p className="text-sm text-accent-primary font-medium mb-3">{tier.subtitle}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{tier.desc}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-tiny text-text-muted leading-relaxed">{tier.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── فرق بيونك ── */}
      <section ref={ref3} className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView3 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            <p className="text-tiny font-semibold tracking-wider uppercase mb-3 text-accent-primary">فرق بيونك</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا لا تتعامل معهم مباشرة؟</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              كل شريك في هذه الصفحة يمكنه البيع لكم مباشرة. إليكم لماذا تختار المؤسسات بيونك بدلًا من ذلك.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'نجمّع',
                desc: 'لا يوجد مورد واحد يغطي CRM + ذكاء + بنية تحتية + أمن سيبراني + تكامل. نختار الأفضل ونُجمّعه — بحيادية تقنية كاملة.',
                icon: Cpu,
              },
              {
                title: 'ندمج',
                desc: 'الشركاء يبنون منتجات. نحن نبني أنظمة. معمارية قائمة على واجهات برمجة التطبيقات، وسير عمل بالأحداث، وعمليات آمنة عبر المنصات.',
                icon: GitMerge,
              },
              {
                title: 'نشغّل',
                desc: 'دليل تشغيل واحد. SLA واحد. فريق واحد مسؤول عن المنظومة المتكاملة — على مدار الساعة، من البنية التحتية إلى طبقة التطبيقات.',
                icon: Shield,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-bg-secondary border border-white/[0.06] rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── دعوة للعمل: شارك معنا ── */}
      <section ref={ref4} className="py-16 md:py-24 bg-bg-secondary/20 border-t border-white/[0.06]">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl text-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView4 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              هل أنتم مستعدون للبناء مع المنظومة؟
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              كل رحلة تحول تبدأ بمحادثة. دعونا نوفّق بين احتياجاتكم والقدرات والشركاء المناسبين.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ar/book-discovery-call?source=partners&intent=ecosystem"
                className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-primary/90 text-bg-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                احجز مكالمة استكشافية
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/contact?source=partners"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── تباعد التذييل ── */}
      <div className="pb-8" />
    </div>
  );
}
