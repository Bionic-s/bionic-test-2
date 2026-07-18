import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Layers, Shield, FileText, Users, Cpu, GitBranch, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/hero/ai-enterprise.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase mb-4">{children}</p>
);

/* ── Partner Logo Data ── */
const partners = [
  { name: 'Salesforce', role: 'AI embedded in business applications', tech: 'Agentforce · Einstein AI · Copilot · Prompt Builder · Model Builder' },
  { name: 'Google', role: 'Enterprise AI platform & agentic capabilities', tech: 'Vertex AI · Gemini · Model Garden · Agent Builder · Document AI' },
  { name: 'IBM', role: 'AI governance, orchestration & open models', tech: 'watsonx.ai · watsonx Assistant · watsonx Governance · Orchestrate · Granite' },
  { name: 'Intel', role: 'AI infrastructure — training, inference & edge', tech: 'Gaudi 3 AI Accelerators · Xeon AI Boost · OpenVINO · Edge AI' },
];

export default function AISolutionPage() {

  useEffect(() => { trackCapabilityPageView('Enterprise AI & Automation'); }, []);
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
        <title>Enterprise AI & Automation | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Enterprise AI & Automation — agentic AI, copilots, MLOps, and intelligent automation for Saudi enterprises." />
      </Helmet>

        {/* ═══ 1. HERO — with background image ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
            className="relative z-10 pt-40 pb-32 text-center px-4"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/25 bg-[#00BFFF]/5 mb-10">
              <Brain className="w-4 h-4 text-[#00BFFF] mr-2" />
              <span className="text-tiny text-[#00BFFF] font-semibold tracking-widest uppercase">Enterprise AI & Automation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#00BFFF] via-[#A78BFA] to-white bg-clip-text text-transparent">
                AI from experimentation<br />to enterprise execution.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
              We close the gap between AI pilots and production-grade systems —
              governed, measured, and built for Saudi Arabia's regulatory reality.
            </p>
          </motion.div>
        </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Most AI initiatives never leave the pilot phase.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Users className="w-5 h-5" />, text: 'High-value teams buried in manual, repetitive work.' },
              { icon: <FileText className="w-5 h-5" />, text: 'Critical data trapped in unstructured documents.' },
              { icon: <GitBranch className="w-5 h-5" />, text: 'Disconnected AI pilots — no path to enterprise scale.' },
              { icon: <Shield className="w-5 h-5" />, text: 'AI deployed without governance, audit, or regulatory alignment.' },
              { icon: <Cpu className="w-5 h-5" />, text: 'Prototypes that never reach production.' },
              { icon: <Layers className="w-5 h-5" />, text: 'ROI assumed, not measured. No path to scale investment.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 hover:border-[#00BFFF]/15 transition-all duration-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#00BFFF15', color: ACCENT }}>{item.icon}</div>
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
                icon: <Layers className="w-5 h-5" />,
                title: 'AI Strategy & Transformation',
                desc: 'Readiness assessment, use case prioritization, and a 12-month execution roadmap — aligned to business strategy, not technology hype.',
                outcomes: ['Enterprise AI roadmap tied to business objectives', 'Use case portfolio ranked by impact and feasibility', 'Investment case with measurable performance indicators', 'Governance foundation for Saudi regulatory alignment'],
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: 'Agentic Workforce',
                desc: 'AI agents that operate alongside human teams — executing multi-step tasks, making context-aware decisions, with human-in-the-loop governance.',
                outcomes: ['Reduced manual effort across operational workflows', 'Accelerated decision-making with real-time AI assistance', 'Scalable operational capacity without proportional headcount growth', 'Continuous improvement through agent learning and feedback'],
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: 'Intelligent Automation',
                desc: 'Complex, cross-department process automation with AI that understands context — beyond basic RPA to intelligent operations.',
                outcomes: ['Reduced processing time in high-volume operational workflows', 'Improved accuracy in decision-intensive processes', 'Measurable cost reduction in repetitive manual operations', 'Enterprise-wide visibility across integrated process intelligence'],
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: 'Document Intelligence',
                desc: 'Transforming unstructured enterprise documents into structured, actionable data at scale — integrated directly into operational workflows.',
                outcomes: ['Accelerated document processing across procurement and compliance', 'Higher accuracy in data extraction and classification', 'Faster procurement, compliance, and case management cycles', 'Direct integration with existing ERP and operational systems'],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'AI Governance & Trust',
                desc: 'Governance embedded from architecture through operations — bias detection, explainability, audit trails, and regulatory controls built in.',
                outcomes: ['Comprehensive audit trail across AI decisions and model changes', 'Bias detection and fairness testing across demographic dimensions', 'SDAIA, NCA, and PDPL regulatory alignment', 'Model registry and version control across the AI portfolio'],
              },
              {
                icon: <GitBranch className="w-5 h-5" />,
                title: 'AI Platform Engineering & MLOps',
                desc: 'The operational foundation for AI at scale — automated pipelines, model monitoring, drift detection, and continuous retraining.',
                outcomes: ['Accelerated time-to-production for new AI use cases', 'Automated monitoring with proactive drift and performance alerts', 'Standardized MLOps pipelines across data science teams', 'Reduced operational risk through continuous validation'],
              },
            ].map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/12 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{cap.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
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
          <div className="bg-gradient-to-br from-[#00BFFF]/5 via-bg-secondary to-bg-secondary border border-[#00BFFF]/10 rounded-2xl p-10 md:p-12">
            <SectionLabel>Why Bionic</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who takes AI into production.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Multi-vendor. No lock-in.', desc: 'We design across Salesforce, Google Cloud, IBM, and Intel — selecting the right platform for each capability, driven by fit, not reseller incentives.' },
                { title: 'Production-first. Not pilots.', desc: 'Every engagement is measured by systems running in production — with the MLOps and governance foundations required for sustained operation.' },
                { title: 'Saudi context. Designed in.', desc: 'SDAIA, NCA, and PDPL requirements are embedded in our architecture from day one — not treated as a post-deployment checklist.' },
                { title: 'One partner. Full accountability.', desc: 'From readiness assessment through platform engineering to managed operations — a single accountable relationship across the entire lifecycle.' },
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
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/12 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-[#00BFFF]/60 text-xs font-medium">{p.role.split(' —')[0]}</span>
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
              { industry: 'Government & Public Sector', apps: 'Etimad procurement intelligence, citizen service automation, national-scale document processing.' },
              { industry: 'Banking & Financial Services', apps: 'AML and fraud intelligence, credit risk modeling, regulatory reporting automation.' },
              { industry: 'Healthcare', apps: 'Medical imaging diagnostics, clinical documentation intelligence, patient flow optimization.' },
              { industry: 'Oil, Gas & Energy', apps: 'Predictive maintenance across remote assets, HSE compliance, OT data intelligence.' },
              { industry: 'Manufacturing', apps: 'Visual quality inspection, production yield optimization, intelligent supply chain coordination.' },
              { industry: 'Telecommunications', apps: 'Network operations intelligence, customer experience AI, intelligent field service dispatch.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/12 transition-all duration-300">
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
                tag: 'AI Strategy',
                title: 'From Pilots to Production',
                desc: 'Why governance and platform engineering determine whether enterprise AI delivers sustained value or stalls after the prototype phase.',
              },
              {
                tag: 'Saudi Arabia',
                title: 'AI Governance Under SDAIA',
                desc: 'How Saudi enterprises can align AI deployment with the Kingdom\'s emerging AI ethics and data protection frameworks from day one.',
              },
              {
                tag: 'Operations',
                title: 'The MLOps Imperative',
                desc: 'Without automated pipelines, monitoring, and drift detection, AI in production becomes a liability — not an asset.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/15 transition-all duration-300">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00BFFF]/10 text-[#00BFFF] mb-4 inline-block">{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[#00BFFF]/70 text-xs font-medium">
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
              { title: 'Sovereign AI Platform', industry: 'Government', slug: 'sovereign-ai-platform' },
              { title: 'Real-Time Fraud Detection', industry: 'Banking', slug: 'real-time-fraud-detection' },
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
            <Link to="/blueprints?capability=ai" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
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
          <div className="bg-gradient-to-br from-[#00BFFF]/8 via-bg-secondary to-bg-secondary border border-[#00BFFF]/12 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Ready to move AI from<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#A78BFA] bg-clip-text text-transparent">experimentation to execution</span>?
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how enterprise AI can deliver measurable business outcomes — with governance built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#00BFFF]/15"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blueprints?capability=ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-[#00BFFF]/25 text-text-primary font-medium rounded-xl transition-all duration-300"
              >
                View Transformation Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
