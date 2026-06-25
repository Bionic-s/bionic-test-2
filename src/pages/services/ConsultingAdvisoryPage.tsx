import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, BarChart3, FileText, Shield, Compass, TrendingUp } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { CANON_PARTNERS, type PartnerData } from '../../data/partnersData';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#0D9488';
const HERO_BG = '/test-site-2/images/data-analytics.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const services = [
  { title: 'Business Transformation Strategy', desc: 'End-to-end transformation design — current state assessment, future state vision, gap analysis, initiative portfolio, and multi-year value realization plan.', icon: Target },
  { title: 'AI Transformation Roadmap', desc: '6-week diagnostic → use case bank → prioritization matrix → 12-month execution roadmap with ROI projections per initiative.', icon: TrendingUp },
  { title: 'Executive Value Case & Business Case', desc: 'ROI modeling, TCO analysis, value realization planning, and executive decision support. We build the financial and strategic case that earns board-level approval.', icon: BarChart3 },
  { title: 'Operating Model Design', desc: 'People · Process · Technology · Governance — how your organization must evolve to sustain transformation. Operating models for AI, data, and platform-enabled enterprises.', icon: Compass },
  { title: 'Compliance & GRC Advisory', desc: 'SDAIA AI ethics · PDPL data protection · NCA cybersecurity · SAMA regulatory readiness — mapped to technology architecture, not treated as a checklist.', icon: Shield },
  { title: 'Technology Strategy & Architecture', desc: 'Reference architecture across all 7 capabilities. Vendor selection framework. Make-vs-buy analysis. Total cost of ownership modeling.', icon: FileText },
];

const capabilityCoverage = [
  { cap: 'Enterprise AI & Automation', app: 'AI readiness, use case prioritization, MLOps strategy, model governance design' },
  { cap: 'Data, Analytics & Intelligence', app: 'Data platform architecture, MDM strategy, BI roadmap, data governance framework' },
  { cap: 'Business Applications & CX', app: 'CRM transformation strategy, CX maturity assessment, commerce roadmap' },
  { cap: 'Integration & Intelligent Ops', app: 'API-led architecture design, integration roadmap, event-driven strategy' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'NCA compliance, Zero Trust architecture, SOC strategy, cyber maturity assessment' },
  { cap: 'Sovereign Infrastructure & Cloud', app: 'Datacenter strategy, cloud migration roadmap, AI infrastructure planning' },
  { cap: 'Technology Operations', app: 'SRE maturity assessment, observability strategy, FinOps roadmap, IDP design' },
];

const blueprints = [
  { title: 'Sovereign AI Platform', industry: 'Government', slug: 'sovereign-ai-platform' },
  { title: 'National Cybersecurity Operations Center', industry: 'Government', slug: 'national-soc' },
  { title: 'SAMA-Compliant Banking Infrastructure', industry: 'Banking', slug: 'sama-compliant-banking-infra' },
  { title: 'Customer 360 & Intelligent Engagement', industry: 'Banking', slug: 'customer-360-intelligent-engagement' },
  { title: 'OT/IT Integration & Secure Ops', industry: 'Oil & Gas', slug: 'ot-it-integration-secure-ops' },
  { title: 'Enterprise Zero Trust', industry: 'Enterprise', slug: 'enterprise-zero-trust' },
];

const partners: (PartnerData & { role: string; tech: string })[] = [
  { ...CANON_PARTNERS.find(p => p.name === 'IBM')!, role: 'AI governance, watsonx strategy, Cloud Pak architecture', tech: 'watsonx.ai · watsonx Governance · Cloud Pak for Data · IBM Consulting' },
  { ...CANON_PARTNERS.find(p => p.name === 'Salesforce')!, role: 'CRM transformation roadmap, Einstein AI strategy', tech: 'Sales Cloud · Service Cloud · Einstein AI · Agentforce' },
  { ...CANON_PARTNERS.find(p => p.name === 'Google')!, role: 'Cloud-native architecture, Vertex AI platform design', tech: 'Vertex AI · BigQuery · Looker · Gemini' },
  { ...CANON_PARTNERS.find(p => p.name === 'Dell Technologies')!, role: 'Infrastructure modernization, APEX strategy', tech: 'PowerEdge · PowerStore · APEX · VxRail' },
  { ...CANON_PARTNERS.find(p => p.name === 'MuleSoft')!, role: 'API-led integration, Anypoint platform strategy', tech: 'Anypoint Platform · API Manager · Flex Gateway · MuleSoft RPA · Composer' },
  { ...CANON_PARTNERS.find(p => p.name === 'Informatica')!, role: 'MDM strategy, data governance framework', tech: 'MDM · Data Quality · Data Catalog · Data Lineage' },
];

export default function ConsultingAdvisoryPage() {

  useEffect(() => { trackServicePageView('Consulting & Advisory'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Consulting & Advisory | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="AI readiness assessment, architecture design, vendor selection, and transformation roadmap." />
      </Helmet>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-24 text-center px-4"
        >
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/5 mb-10">
              <span className="text-tiny text-[#0D9488] font-semibold tracking-widest uppercase">Consulting & Advisory</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              Strategy before technology.<br />
              <span style={{ color: ACCENT }}>Clarity before investment.</span><br />
              Transformation before procurement.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed">
              We help Saudi enterprises answer the hardest questions first: what should we transform, why,
              in what order, and how — from AI readiness to operating model design, from compliance architecture
              to multi-year roadmap. Advisory services that turn ambition into executable transformation.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Most transformation fails before it starts — in the strategy phase.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Organizations invest millions in technology without a clear business case, without understanding
            regulatory exposure, and without designing the operating model that will sustain the investment.
            We fix this — before procurement begins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Strategy without business case', text: 'Technology decisions made without ROI modeling, TCO analysis, or executive buy-in — investment disappears before value arrives' },
              { pre: 'Regulatory discovered too late', text: 'SDAIA, NCA, PDPL requirements surface late in implementation — forcing expensive rework and compliance fire drills' },
              { pre: 'Use case overload', text: 'Dozens of AI and automation opportunities identified — but no framework to sequence them by impact, feasibility, and risk' },
              { pre: 'Vendor selection driven by relationships', text: 'Platform decisions made by existing vendor relationships — not by objective capability assessment against business requirements' },
              { pre: 'Operating model ignored', text: 'Technology deployed into an organization not redesigned to absorb it — people, process, and governance left behind' },
              { pre: 'No measurement baseline', text: 'Transformation launched without KPIs, without a baseline, without a value tracking mechanism — success becomes opinion, not evidence' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#0D9488]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. WHAT WE DELIVER ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>What We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            From readiness to executive buy-in — six advisory services.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <s.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. CAPABILITY COVERAGE ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Capability Coverage</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Advisory spans every capability we deliver.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilityCoverage.map((c, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#0D9488]/15 transition-all duration-300 flex items-start gap-3">
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
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Multi-vendor objectivity. Every engagement.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
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
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Reference architectures shaped by advisory engagement.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <span className="text-tiny text-[#0D9488]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#0D9488] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#0D9488]/40 group-hover:text-[#0D9488] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints" className="inline-flex items-center gap-1.5 text-[#0D9488] text-sm font-medium hover:underline">
              View all blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. WHY BIONIC ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Why Bionic</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The advisory difference.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Multi-vendor objectivity', desc: 'We represent no single vendor. We select what creates maximum value for your business — scored against your requirements, not reseller incentives.' },
              { title: 'Saudi regulatory depth', desc: 'SDAIA, NCA, PDPL, and SAMA expertise embedded in every advisory engagement. Regulatory alignment is architected from day one — not retrofitted.' },
              { title: 'Advisory-to-execution continuity', desc: 'The team that advises is the team that implements. No hand-off gaps, no strategy-to-execution disconnect, no "throw it over the wall."' },
              { title: 'Measured outcomes, not slide decks', desc: 'Every advisory engagement concludes with measurable KPIs, a financial business case, and an executable roadmap — not a 200-page report that sits on a shelf.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#0D9488]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 8. CROSS-NAVIGATION ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-5 text-text-muted">What would you like to explore next?</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'Capabilities', path: '/capabilities/ai' },
                { label: 'Industries', path: '/industries/government' },
                { label: 'Blueprints', path: '/blueprints' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-white/20 transition-all hover:-translate-y-0.5">
                  {link.label} <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 9. CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to turn ambition into an executable roadmap?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how our advisory services can build the strategic foundation your transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #0D948820' }}
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/capabilities/ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#0D9488]/30"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
