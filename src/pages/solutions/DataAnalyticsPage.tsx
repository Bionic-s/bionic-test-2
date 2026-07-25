import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight, Database, Shield, GitBranch, LineChart, Server, Eye, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/images/data-analytics.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'Salesforce', role: 'Executive intelligence & BI', tech: 'Tableau · Einstein Analytics · CRM Analytics · Data Cloud' },
  { name: 'Informatica', role: 'Master data management & governance', tech: 'MDM · Data Quality · Data Catalog · Data Lineage · Data Integration' },
  { name: 'IBM', role: 'Data fabric & AI-ready data platforms', tech: 'watsonx.data · DataStage · Cloud Pak for Data · Db2 · Knowledge Catalog' },
  { name: 'Intel', role: 'Data infrastructure — compute & performance', tech: 'Xeon Scalable · Optane · Analytics accelerators · Edge data processing' },
  { name: 'Google', role: 'Data platform & analytics at scale', tech: 'BigQuery · Looker · Dataflow · Dataproc · Vertex AI' },
  { name: 'Tableau', role: 'Self-service BI & visual analytics', tech: 'Tableau Cloud · Embedded Analytics · Data Stories · Pulse' },
];

export default function DataAnalyticsPage() {

  useEffect(() => { trackCapabilityPageView('Data, Analytics & Intelligence'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Data, Analytics & Intelligence | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Data, Analytics & Intelligence — AI-ready data platforms, executive dashboards, MDM, and advanced analytics." />
      </Helmet>

        {/* ═══ 1. HERO ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
            className="relative z-10 pt-40 pb-32 text-center px-4"
          >
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
            style={{ borderColor: '#00BFFF40', backgroundColor: '#00BFFF08' }}>
            <BarChart3 className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Data, Analytics & Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#22D3EE] to-white bg-clip-text text-transparent">
              From fragmented data<br />to unified intelligence.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            We design AI-ready data platforms, executive intelligence systems, and governed data
            foundations — built for Saudi Arabia's regulatory and operational reality.
          </p>
          </motion.div>
        </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Organizations are data-rich but insight-poor.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Database className="w-5 h-5" />, text: 'Data scattered across silos — no single source of truth.' },
              { icon: <Server className="w-5 h-5" />, text: 'Legacy platforms that cannot support real-time AI workloads.' },
              { icon: <Eye className="w-5 h-5" />, text: 'Executives making decisions on intuition, not intelligence.' },
              { icon: <GitBranch className="w-5 h-5" />, text: 'Inconsistent master data across enterprise systems.' },
              { icon: <LineChart className="w-5 h-5" />, text: 'Analytics that produce reports — not decisions.' },
              { icon: <Shield className="w-5 h-5" />, text: 'Data compliance exposure under PDPL and sector mandates.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#00BFFF15', color: ACCENT }}>{item.icon}</div>
                <p className="text-text-primary text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. CORE CAPABILITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Core Capabilities</h2>
          <p className="text-text-muted text-base mb-10">Six capabilities. Each designed around a business outcome.</p>

          <div className="space-y-4">
            {[
              {
                icon: <Database className="w-5 h-5" />,
                title: 'Data Strategy & Platform Modernization',
                desc: 'Assess data maturity, design target architecture, and migrate from legacy warehouses to AI-ready platforms — aligned to business priorities, not vendor roadmaps.',
                outcomes: ['Data maturity baseline with prioritized modernization roadmap', 'Target architecture designed for AI and real-time workloads', 'Migration strategy with risk mitigation and continuity planning', 'Platform selection driven by fit, not reseller incentives'],
              },
              {
                icon: <GitBranch className="w-5 h-5" />,
                title: 'AI-Ready Data Engineering',
                desc: 'Build the pipelines, feature stores, and data foundations that power enterprise AI — ingesting, transforming, and serving data at scale.',
                outcomes: ['Automated data pipelines from source systems to AI consumption', 'Feature stores enabling consistent, reusable data for ML models', 'Real-time and batch ingestion supporting operational and analytical needs', 'Data quality frameworks embedded at every stage of the pipeline'],
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: 'Executive Intelligence & Dashboards',
                desc: 'Design KPI frameworks and real-time dashboards that transform raw data into decision intelligence — from the boardroom to the operations floor.',
                outcomes: ['Executive dashboards mapped to strategic business objectives', 'Real-time KPI monitoring with drill-down to operational detail', 'Self-service analytics empowering business teams, not just IT', 'Decision intelligence that replaces intuition with evidence'],
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: 'Master Data Management & Governance',
                desc: 'Establish a single source of truth across the enterprise — unifying customer, product, supplier, and asset data with automated quality and lineage controls.',
                outcomes: ['Unified master data across all enterprise systems', 'Automated data quality monitoring and remediation', 'Complete data lineage for audit, compliance, and trust', 'Reduced reconciliation effort across finance, supply chain, and operations'],
              },
              {
                icon: <LineChart className="w-5 h-5" />,
                title: 'Advanced Analytics & Predictive Intelligence',
                desc: 'Move beyond descriptive reporting to predictive and prescriptive analytics — forecasting, scenario modeling, and AI-driven insight generation.',
                outcomes: ['Predictive models for demand, risk, and operational forecasting', 'Scenario modeling enabling proactive strategic decisions', 'Prescriptive recommendations embedded in operational workflows', 'Continuous model refinement through automated retraining'],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'Data Sovereignty & Compliance',
                desc: 'Design data architectures that meet Saudi data residency requirements, PDPL obligations, and sector-specific regulatory mandates — without compromising performance.',
                outcomes: ['Data residency architecture aligned to Saudi sovereign requirements', 'PDPL compliance embedded in data collection, storage, and processing', 'Cross-border data transfer governance and controls', 'Audit-ready data platforms with full access and usage tracking'],
              },
            ].map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{cap.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                          <span className="text-xs text-text-primary leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 HOW WE DELIVER ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three integrated delivery models — across every capability.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">Consulting & Advisory</h3>
              <p className="text-tiny text-text-muted">AI Readiness Assessment · Compliance & GRC Advisory · Strategy & roadmap</p>
            </Link>
            <Link to="/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">Implementation & Delivery</h3>
              <p className="text-tiny text-text-muted">AI & Automation Deployment · Platform & App Delivery · MLOps pipeline</p>
            </Link>
            <Link to="/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">Managed Operations</h3>
              <p className="text-tiny text-text-muted">24×7 platform ops · SOC-as-a-Service · 3 tiers (Essential/Advanced/Elite)</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. WHY BIONIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <SectionLabel>Why Bionic</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who builds data foundations that scale.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Multi-vendor. No lock-in.', desc: 'We design across Salesforce, Informatica, IBM, and Intel — selecting the right data platform for each capability, driven by fit, not reseller incentives.' },
                { title: 'AI-ready from day one.', desc: 'Every data platform we build is engineered to power AI workloads — with the pipelines, feature stores, and governance foundations required for sustained intelligence.' },
                { title: 'Saudi data sovereignty. Designed in.', desc: 'PDPL, NCA, and sector-specific data requirements are embedded in our architecture from day one — not retrofitted after a compliance finding.' },
                { title: 'One partner. Full accountability.', desc: 'From data strategy through platform engineering to managed data operations — a single accountable relationship across the entire data lifecycle.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. TECHNOLOGY ECOSYSTEM ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Technology</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Technology Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99' }}>{p.role}</span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. INDUSTRY APPLICATIONS ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Where We Apply It</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { industry: 'Government & Public Sector', apps: 'National data platforms, open data programs, citizen service analytics, policy impact measurement.' },
              { industry: 'Banking & Financial Services', apps: 'Risk analytics, regulatory reporting automation, customer 360, fraud intelligence.' },
              { industry: 'Healthcare', apps: 'Clinical data unification, population health analytics, operational performance intelligence.' },
              { industry: 'Oil, Gas & Energy', apps: 'OT/IoT data platforms, predictive maintenance analytics, energy trading intelligence.' },
              { industry: 'Manufacturing', apps: 'Supply chain visibility, production quality analytics, predictive maintenance, demand forecasting.' },
              { industry: 'Telecommunications', apps: 'Customer analytics, network performance intelligence, churn prediction, revenue assurance.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300">
                <h3 className="font-semibold text-base mb-2 text-text-primary">{item.industry}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.apps}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/industries/government" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
              Explore industry-specific applications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. FEATURED INSIGHTS ═══ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Perspectives</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: 'Data Strategy',
                title: 'The AI-Ready Data Foundation',
                desc: 'Why organizations that invest in data platform modernization before AI deployment achieve measurably faster time-to-value and lower operational risk.',
              },
              {
                tag: 'Saudi Arabia',
                title: 'PDPL and the Data Sovereignty Imperative',
                desc: 'How Saudi enterprises can build compliant data architectures that meet residency requirements without sacrificing performance or analytical capability.',
              },
              {
                tag: 'Leadership',
                title: 'From Dashboards to Decision Intelligence',
                desc: 'The shift from descriptive reporting to AI-driven decision intelligence — and what it demands from data strategy, culture, and executive sponsorship.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: '#00BFFF99' }}>
                  <ExternalLink className="w-3 h-3" />
                  Read perspective
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 7.5 RELATED BLUEPRINTS ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Reference architectures that bring this capability to life.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Inter-Ministry Data Fabric', industry: 'Government', slug: 'inter-ministry-data-fabric' },
              { title: 'Customer 360 & Intelligent Engagement', industry: 'Banking', slug: 'customer-360-intelligent-engagement' },
              { title: 'Clinical Intelligence & Medical AI', industry: 'Healthcare', slug: 'clinical-intelligence-medical-ai' },
            ].map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?capability=data" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all related blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 8. CTA ═══ */}
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Ready to turn fragmented data into<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#22D3EE] bg-clip-text text-transparent">unified intelligence</span>?
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how an AI-ready data platform can power executive decisions — with sovereignty and governance built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blueprints?capability=data"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300">
                View Transformation Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
