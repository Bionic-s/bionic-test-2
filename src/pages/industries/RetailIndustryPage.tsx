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
  { pre: 'Disconnected channels', text: 'Online and in-store operate as separate businesses — inventory, pricing, and customer data are siloed.' },
  { pre: 'Fragmented customer view', text: 'A customer who buys online and in-store appears as two different people. No unified profile or loyalty.' },
  { pre: 'Legacy POS systems', text: 'Point-of-sale systems that cannot support real-time inventory, omnichannel fulfillment, or AI personalization.' },
  { pre: 'Manual merchandising', text: 'Pricing, promotions, and assortment decisions based on intuition — not data. Margin left on the table.' },
  { pre: 'E-commerce growing fast', text: 'Saudi e-commerce is expanding rapidly but retailers lack the platform to compete with pure-play digital players.' },
  { pre: 'PDPL compliance', text: 'New data privacy regulations require unified customer data governance — fragmented systems cannot comply.' },
];

const priorities = [
  { title: 'Unified Commerce Platform', desc: 'Single commerce engine powering online, in-store, and mobile — one inventory, one pricing, one customer.', icon: Store },
  { title: 'Customer 360 & Loyalty', desc: 'Unified customer profiles across all touchpoints with AI-powered personalization and next-best-offer.', icon: Users },
  { title: 'AI-Powered Merchandising', desc: 'Dynamic pricing, assortment optimization, demand forecasting — AI decisions replacing intuition.', icon: TrendingUp },
  { title: 'Omnichannel Fulfillment', desc: 'Buy online, pick up in store. Ship from store. Real-time inventory visibility. Unified order management.', icon: ShoppingCart },
  { title: 'Intelligent Marketing', desc: 'Personalized campaigns, customer journey automation, real-time triggers — marketing that converts.', icon: Tag },
  { title: 'Data-Driven Retail Analytics', desc: 'Executive dashboards, category performance, customer lifetime value — decisions powered by data.', icon: BarChart3 },
];

const capabilities = [
  { cap: 'Business Applications & CX', app: 'Unified commerce platform, loyalty management, omnichannel order management, AI-powered personalization' },
  { cap: 'Data, Analytics & Intelligence', app: 'Customer 360, product MDM, retail analytics, demand forecasting, customer lifetime value intelligence' },
  { cap: 'Enterprise AI & Automation', app: 'AI merchandising, dynamic pricing, inventory optimization, customer service AI, fraud detection' },
  { cap: 'Integration & Intelligent Operations', app: 'POS-to-cloud integration, marketplace connectors, payment gateway integration, logistics API orchestration' },
];

const capPaths = ['/capabilities/apps', '/capabilities/data', '/capabilities/ai', '/capabilities/integration'];

const services = [
  { svc: 'Consulting & Advisory', app: 'Omnichannel strategy, commerce platform selection, customer experience design, PDPL compliance roadmap' },
  { svc: 'Implementation & Delivery', app: 'Commerce Cloud deployment, POS integration, loyalty platform build, customer data platform delivery' },
  { svc: 'Managed Operations', app: '24\u00d77 commerce operations, continuous optimization, AI model management, campaign performance analytics' },
];

const svcPaths = ['/services/advisory', '/services/implementation', '/services/operations'];

const blueprints = [
  { title: 'Intelligent Commerce & Omnichannel CX', slug: 'intelligent-commerce-omnichannel' },
];

const partners = [
  { name: 'Salesforce', role: 'Commerce, marketing & customer 360', tech: 'Commerce Cloud \u00b7 Marketing Cloud \u00b7 Data Cloud \u00b7 Einstein AI \u00b7 Service Cloud' },
  { name: 'MuleSoft', role: 'POS, ERP & marketplace integration', tech: 'Anypoint Platform \u00b7 API-led connectivity \u00b7 Pre-built commerce connectors' },
  { name: 'Google', role: 'Retail AI, analytics & personalization', tech: 'BigQuery \u00b7 Vertex AI \u00b7 Recommendations AI \u00b7 Retail Search' },
  { name: 'Tableau', role: 'Retail performance analytics', tech: 'Tableau Cloud \u00b7 Category analytics \u00b7 Customer lifetime value dashboards' },
  { name: 'Informatica', role: 'Product MDM & data governance', tech: 'Product 360 \u00b7 Data Quality \u00b7 Data Catalog \u00b7 PDPL data governance' },
];

const outcomes = [
  { metric: 'Unified', label: 'Inventory across all channels' },
  { metric: 'Real-time', label: 'AI-powered personalization' },
  { metric: 'Single view', label: 'Customer across online & store' },
  { metric: 'Measurable', label: 'Omnichannel conversion lift' },
  { metric: 'PDPL-compliant', label: 'Customer data management' },
];

export default function RetailIndustryPage() {
  useEffect(() => { trackIndustryPageView('Retail & Consumer'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Retail | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Retail AI transformation — unified commerce, omnichannel CX, intelligent merchandising for Saudi retailers." />
      </Helmet>

      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <ShoppingCart className="w-3.5 h-3.5 mr-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">Industry Focus</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Retail & Consumer
                <span className="block text-[#00BFFF]">Transformation</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                Unified commerce. AI-powered personalization. Omnichannel fulfillment. Bionic helps Saudi retailers compete — online, in-store, and everywhere in between.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Saudi retail is growing fast — but the technology hasn't caught up.</h2>
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
          <SectionLabel>Transformation Priorities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Saudi retailers need to lead.</h2>
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
          <SectionLabel>Relevant Capabilities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to retail transformation.</h2>
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
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to retail.</h2>
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
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for retail.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">Retail</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=retail" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all retail blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Commerce technology — architected for Saudi retail.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">We are not a vendor. We architect commerce platforms using the world's leading technologies — selected for capability, not reseller incentives.</p>
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
          <SectionLabel>Expected Outcomes</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across retail transformation.</h2>
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
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to unify your retail experience?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">Let's discuss how unified commerce, AI personalization, and omnichannel fulfillment can transform your retail business.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=retail" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                View Retail Blueprints
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
