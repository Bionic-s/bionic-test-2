import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { GitBranch, ArrowRight, Workflow, Zap, Network, Plug, RefreshCw, Activity, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/hero/ai-agents.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'MuleSoft', role: 'API-led connectivity', tech: 'Anypoint Platform · API Manager · Exchange · Flex Gateway · API Governance' },
  { name: 'IBM', role: 'Enterprise integration fabric', tech: 'Cloud Pak for Integration · API Connect · App Connect · MQ · Event Streams' },
  { name: 'Google', role: 'API management & event-driven architecture', tech: 'Apigee · Workflows · Eventarc · Pub/Sub · Cloud Run' },
  { name: 'Informatica', role: 'Data & application integration', tech: 'Cloud Data Integration · Application Integration · Mass Ingestion · Process Automation' },
];

export default function IntegrationPage() {

  useEffect(() => { trackCapabilityPageView('Integration & Intelligent Operations'); }, []);
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
        <title>Integration & Intelligent Operations | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Integration & Intelligent Operations — API-led architecture, event-driven, and workflow orchestration." />
      </Helmet>
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

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
            <GitBranch className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Integration & Intelligent Operations</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#34D399] to-white bg-clip-text text-transparent">
              From disconnected systems<br />to intelligent operations.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            We connect applications, automate workflows, and orchestrate intelligent operations
            across the enterprise — designed for speed, scale, and Saudi Arabia's regulatory environment.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Most enterprises run on disconnected systems and manual handoffs.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Plug className="w-5 h-5" />, text: 'Systems that cannot exchange data in real time.' },
              { icon: <Activity className="w-5 h-5" />, text: 'Manual handoffs slowing operations and introducing error.' },
              { icon: <Network className="w-5 h-5" />, text: 'Point-to-point integrations creating unmanageable complexity.' },
              { icon: <Zap className="w-5 h-5" />, text: 'No real-time operational visibility across business functions.' },
              { icon: <Workflow className="w-5 h-5" />, text: 'Partners and suppliers disconnected from core enterprise systems.' },
              { icon: <RefreshCw className="w-5 h-5" />, text: 'Integration treated as project work, not an ongoing enterprise capability.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#00BFFF30]">
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
                icon: <GitBranch className="w-5 h-5" />,
                title: 'API Strategy & Architecture',
                desc: 'Design API-led connectivity architectures that transform systems into reusable business capabilities — governed, secured, and built for enterprise scale.',
                outcomes: ['API strategy aligned to business capabilities and digital roadmap', 'Reusable API layer eliminating redundant point-to-point integration', 'API governance with lifecycle management and version control', 'Security architecture spanning authentication, authorization, and threat protection'],
              },
              {
                icon: <Network className="w-5 h-5" />,
                title: 'Enterprise Connectivity',
                desc: 'Connect any system — cloud, on-premise, legacy, or partner — through an integration fabric that provides unified visibility, reliability, and control.',
                outcomes: ['Unified integration fabric across all enterprise systems', 'Pre-built connectors accelerating time-to-integration', 'Real-time and batch connectivity supporting all operational patterns', 'Legacy system integration without disruptive system replacement'],
              },
              {
                icon: <Workflow className="w-5 h-5" />,
                title: 'Intelligent Workflow Orchestration',
                desc: 'Design and automate end-to-end business workflows that span departments and systems — from simple approvals to complex, multi-step operational processes.',
                outcomes: ['Cross-department workflows executed without manual handoffs', 'Reduced cycle time across procurement, service delivery, and operations', 'Exception handling with intelligent routing and escalation', 'Process analytics providing visibility into bottlenecks and optimization'],
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'Agentic Operations',
                desc: 'Deploy AI agents that detect events, trigger workflows, and orchestrate actions across enterprise systems — enabling operations that respond and adapt without manual intervention.',
                outcomes: ['Event-driven operations responding in real time to business conditions', 'AI-powered routing and decision logic in operational workflows', 'Reduced mean time to resolution through automated incident response', 'Scalable operations model that grows without proportional headcount'],
              },
              {
                icon: <Network className="w-5 h-5" />,
                title: 'Partner & Ecosystem Integration',
                desc: 'Integrate suppliers, distributors, government platforms, and external partners into enterprise operations — secure, governed, and designed for Saudi business ecosystems.',
                outcomes: ['Secure partner onboarding with governed API access and controls', 'Etimad and government platform integration for procurement workflows', 'Supplier and distributor connectivity enabling end-to-end visibility', 'B2B integration standards aligned to Saudi market requirements'],
              },
              {
                icon: <RefreshCw className="w-5 h-5" />,
                title: 'Integration Operations & Continuous Evolution',
                desc: 'Operate, monitor, and continuously improve the integration layer — ensuring reliability, performance, and rapid adaptation as business needs change.',
                outcomes: ['24×7 integration monitoring with proactive alerting and incident response', 'Performance optimization across API and integration traffic', 'Continuous integration evolution aligned to changing business requirements', 'SLA-backed operations with defined response and resolution commitments'],
              },
            ].map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF1A]">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who connects what's disconnected.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Multi-vendor integration. No lock-in.', desc: 'We design across MuleSoft, IBM, Google Cloud, and Informatica — selecting the right integration platform for each capability, driven by architecture fit, not reseller incentives.' },
                { title: 'Agentic operations. Beyond automation.', desc: 'We don\'t just connect systems — we build operations that sense, respond, and adapt through AI-driven orchestration and event-driven architecture.' },
                { title: 'Saudi enterprise integration. Proven.', desc: 'Experience connecting Saudi government platforms, banking systems, and enterprise ERP — with security and compliance built into every integration pattern.' },
                { title: 'One partner. Full accountability.', desc: 'From API strategy through platform deployment to 24×7 integration operations — a single accountable relationship across the entire connectivity lifecycle.' },
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#00BFFF1A]">
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
              { industry: 'Government & Public Sector', apps: 'Etimad and government platform integration, citizen service orchestration, inter-agency data exchange.' },
              { industry: 'Banking & Financial Services', apps: 'Core banking integration, open banking APIs, regulatory reporting automation, payment gateway connectivity.' },
              { industry: 'Healthcare', apps: 'EHR and clinical system integration, patient data exchange, insurance and claims orchestration.' },
              { industry: 'Oil, Gas & Energy', apps: 'OT/IT integration, field-to-office data connectivity, supply chain orchestration, HSE system integration.' },
              { industry: 'Manufacturing', apps: 'ERP-to-shop-floor integration, supply chain visibility, quality system connectivity, partner integration.' },
              { industry: 'Telecommunications', apps: 'BSS/OSS integration, partner ecosystem connectivity, customer 360 orchestration, network operations automation.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-[#00BFFF1A]">
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
                tag: 'Architecture',
                title: 'API-Led Connectivity in Practice',
                desc: 'Why event-driven, API-led architectures outperform traditional point-to-point integration — delivering faster time-to-value and lower total cost of ownership.',
              },
              {
                tag: 'Saudi Arabia',
                title: 'Government Platform Integration',
                desc: 'How Saudi enterprises can architect integration with Etimad, government e-services, and national platforms while maintaining security and compliance.',
              },
              {
                tag: 'Operations',
                title: 'The Rise of Agentic Operations',
                desc: 'How AI agents are transforming enterprise operations from scheduled, batch-driven processes to real-time, event-responsive intelligent workflows.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF12]">
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
              { title: 'OT/IT Integration & Secure Ops', industry: 'Oil & Gas', slug: 'ot-it-integration-secure-ops' },
              { title: 'Customer 360 & Intelligent Engagement', industry: 'Banking', slug: 'customer-360-intelligent-engagement' },
              { title: 'Agentic Workforce Transformation', industry: 'Enterprise', slug: 'agentic-workforce-transformation' },
            ].map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?capability=integration" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
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
              Ready to connect disconnected systems into<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#34D399] bg-clip-text text-transparent">intelligent operations</span>?
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how API-led connectivity and agentic operations can transform enterprise speed — with security and governance built in.
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
                to="/blueprints?capability=integration"
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
