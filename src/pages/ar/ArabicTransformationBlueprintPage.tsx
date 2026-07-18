import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Cog, Target, Layers, CheckCircle } from 'lucide-react';
import { Building2, Landmark, Droplet, HeartPulse, Building, BarChart3, Monitor, GitMerge, ShieldCheck, Cloud, Settings } from 'lucide-react';
import { blueprints } from '../../data/blueprintsData';
import { blueprintTranslations } from '../../data/blueprintsDataAr';
import { trackBlueprintView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

// ── Translation Maps ──────────────────────────────────────

const industryNames: Record<string, string> = {
  'Government & Public Sector': 'القطاع الحكومي والعام',
  'Banking & Financial Services': 'الخدمات المصرفية والمالية',
  'Oil, Gas & Energy': 'النفط والغاز والطاقة',
  'Healthcare': 'الرعاية الصحية',
  'Enterprise': 'المؤسسات',
};

const capabilityNames: Record<string, string> = {
  'Enterprise AI & Automation': 'الذكاء الاصطناعي المؤسسي والأتمتة',
  'Data, Analytics & Intelligence': 'البيانات والتحليلات والذكاء',
  'Business Applications & CX': 'تطبيقات الأعمال وتجربة العملاء',
  'Integration & Intelligent Operations': 'التكامل والعمليات الذكية',
  'Cybersecurity & Cyber Resilience': 'الأمن السيبراني والمرونة السيبرانية',
  'Sovereign Infrastructure & Hybrid Cloud': 'البنية التحتية السيادية والسحابة الهجينة',
  'Technology Operations': 'عمليات التقنية',
};

const iatForceNames: Record<string, string> = {
  'Intelligence': 'ذكاء',
  'Automation': 'أتمتة',
  'Trust': 'ثقة',
};

// ── Icon Maps (keyed by English — data is English) ────────

const industryIcons: Record<string, React.ReactNode> = {
  'Government & Public Sector': <Building2 size={20} />,
  'Banking & Financial Services': <Landmark size={20} />,
  'Oil, Gas & Energy': <Droplet size={20} />,
  'Healthcare': <HeartPulse size={20} />,
  'Enterprise': <Building size={20} />,
};

const capabilityIcons: Record<string, React.ReactNode> = {
  'Enterprise AI & Automation': <Brain size={20} />,
  'Data, Analytics & Intelligence': <BarChart3 size={20} />,
  'Business Applications & CX': <Monitor size={20} />,
  'Integration & Intelligent Operations': <GitMerge size={20} />,
  'Cybersecurity & Cyber Resilience': <ShieldCheck size={20} />,
  'Sovereign Infrastructure & Hybrid Cloud': <Cloud size={20} />,
  'Technology Operations': <Settings size={20} />,
};

const iatForce: Record<string, string> = {
  'Enterprise AI & Automation': 'Intelligence',
  'Data, Analytics & Intelligence': 'Intelligence',
  'Business Applications & CX': 'Automation',
  'Integration & Intelligent Operations': 'Automation',
  'Cybersecurity & Cyber Resilience': 'Trust',
  'Sovereign Infrastructure & Hybrid Cloud': 'Trust',
  'Technology Operations': 'Trust',
};

export default function ArabicTransformationBlueprintPage() {

  const { slug } = useParams<{ slug: string }>();
  useEffect(() => { if (slug) trackBlueprintView(slug); }, [slug]);

  const bp = blueprints.find((b) => b.slug === slug);
  const ar = slug ? blueprintTranslations[slug] : undefined;

  if (!bp) {
    return (
      <div
         className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
        <Helmet>
          <title>مخطط تحوّل | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
          <meta name="description" content="مخطط تحول تفصيلي — معمارية، مخرجات، وأنماط تنفيذ من تحولات مؤسسية سعودية حقيقية." />
        </Helmet>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">المخطط المرجعي غير موجود</h1>
          <p className="text-text-muted mb-8">المخطط المرجعي للتحول الذي تبحث عنه غير متوفر.</p>
          <Link to="/ar/blueprints" className="text-accent-primary hover:underline">← عرض جميع المخططات المرجعية</Link>
        </div>
      </div>
    );
  }

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const forces = [...new Set(bp.capabilities.map((c) => iatForce[c] || '').filter(Boolean))];

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-tiny text-accent-primary font-semibold">
                {industryIcons[bp.industry]} {industryNames[bp.industry] || bp.industry}
              </span>
              {forces.map((f, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-tiny font-semibold border ${
                    f === 'Intelligence'
                      ? 'border-[#00BFFF]/30 bg-[#00BFFF]/5 text-[#00BFFF]'
                      : f === 'Automation'
                      ? 'border-[#00BFFF]/30 bg-[#00BFFF]/5 text-[#00BFFF]'
                      : 'border-[#00BFFF]/30 bg-[#00BFFF]/5 text-[#00BFFF]'
                  }`}
                >
                  {iatForceNames[f] || f}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent-primary to-white bg-clip-text text-transparent">{ar?.title || bp.title}</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl">{ar?.challenge || bp.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* التحدي */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">التحدي</h2>
            <p className="text-lg text-text-muted leading-relaxed">{ar?.challenge || bp.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* القدرات ذات الصلة + الخدمات المرتبطة */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* القدرات ذات الصلة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">القدرات ذات الصلة</h2>
              </div>
              <div className="space-y-3">
                {bp.capabilities.map((cap, i) => (
                  <Link
                    key={i}
                    to={`/ar/capabilities/${bp.capabilitySlugs[i]}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-accent-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{capabilityIcons[cap]}</span>
                      <div>
                        <p className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">{capabilityNames[cap] || cap}</p>
                        <p className="text-tiny text-text-muted">{iatForceNames[iatForce[cap]] || iatForce[cap]}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* الخدمات المرتبطة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Cog className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">الخدمات المرتبطة</h2>
              </div>
              <div className="space-y-3">
                {[...new Set(bp.services)].map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary border border-white/5"
                  >
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-primary text-sm">{svc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* الشركاء الاستراتيجيون + المنصات والمنتجات */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* الشركاء الاستراتيجيون */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">الشركاء الاستراتيجيون</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {bp.partners.map((p, i) => (
                  <PartnerLogo key={i} partner={p} size="sm" />
                ))}
              </div>
            </motion.div>

            {/* المنصات والمنتجات */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">المنصات والمنتجات</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {bp.products.map((prod, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 text-text-primary text-sm rounded-full border border-white/10"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* المعمارية المستهدفة */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-accent-primary" />
              <h2 className="text-2xl font-bold">المعمارية المستهدفة</h2>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-accent-primary/5 to-bg-secondary border border-accent-primary/10">
              <p className="text-sm text-text-muted leading-relaxed font-mono">{ar?.architecture || bp.architecture}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* النتائج المتوقعة */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">النتائج المتوقعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(ar?.outcomes || bp.outcomes).map((o, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-xl bg-bg-primary border border-white/5"
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-text-primary">{o}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* لماذا بيونك */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-bg-secondary border border-accent-primary/20"
          >
            <h2 className="text-2xl font-bold mb-4">لماذا بيونك</h2>
            <p className="text-text-muted leading-relaxed">{ar?.whyBionic || bp.whyBionic}</p>
          </motion.div>
        </div>
      </section>

      {/* الخطوة التالية */}
      <section className="py-16 bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل أنتم مستعدون لاستكشاف هذا المخطط المرجعي لمؤسستكم؟</h2>
          <p className="text-body text-text-muted mb-8 max-w-xl mx-auto">
            اطلب جلسة استراتيجية لمناقشة كيفية تطبيق هذا المخطط المرجعي للتحول في سياق قطاعكم.
          </p>
          <Link
            to="/ar/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary transition-all"
          >
            ابدأ المحادثة <ArrowRight className="w-5 h-5" />
          </Link>

          {/* العودة للجميع */}
          <div className="mt-8">
            <Link to="/ar/blueprints" className="text-accent-primary hover:underline text-sm">
              ← عرض جميع المخططات المرجعية للتحول
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
