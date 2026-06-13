import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Activity, Gauge, BarChart3, GitBranch, HardDrive, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'IBM', role: 'AIOps, observability & IT automation', tech: 'Instana · Turbonomic · IBM Concert · Cloud Pak for Watson AIOps · SevOne' },
  { name: 'Dell Technologies', role: 'Infrastructure telemetry & operations', tech: 'CloudIQ · OpenManage Enterprise · APEX Console · PowerProtect Cyber Recovery' },
  { name: 'Platform9', role: 'Multi-cluster K8s & private cloud operations', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation · Multi-Cluster Management' },
  { name: 'Intel', role: 'Infrastructure performance & telemetry', tech: 'Intel Node Manager · Resource Director Technology · Performance tuning & optimization' },
];

const capabilities = [
  { title: 'Platform Engineering & IDP', desc: 'Internal Developer Platforms with golden paths. Infrastructure provisioned in minutes — not weeks — through self-service portals, not tickets.', icon: GitBranch },
  { title: 'Site Reliability Engineering', desc: 'Error budgets, SLO-driven operations, blameless postmortems. Reliability as an engineering discipline — not a support queue.', icon: Gauge },
  { title: 'AIOps & Full-Stack Observability', desc: 'Unified telemetry across logs, metrics, and traces. AIOps programs reduce mean time to detect by up to 60% — with automated incident correlation across every layer of your estate.', icon: Activity },
  { title: 'Capacity, Performance & FinOps', desc: 'Continuous right-sizing across compute, storage, and cloud. FinOps programs typically achieve 25–40% cost avoidance with chargeback, forecasting, and real-time optimization.', icon: BarChart3 },
  { title: 'Multi-Vendor Platform Operations', desc: 'Single operational model across IBM, Dell, Red Hat, and cloud-native. One runbook, one accountability chain, one view of health.', icon: Cpu },
  { title: 'SLA Management & Optimization', desc: 'Measured, reported, and continuously improved service levels. Automated remediation playbooks with quarterly optimization reviews.', icon: CheckCircle },
];

const industries = [
  { title: 'Government', desc: 'Sovereign platform operations — 24×7 NOC for national-scale infrastructure with air-gapped operational model and classified workload support.' },
  { title: 'Banking', desc: 'SAMA-compliant managed operations — SLA-backed platform ops with regulatory audit trails and continuous compliance monitoring.' },
  { title: 'Oil & Gas', desc: 'OT/IT unified observability — operational view across IT infrastructure and industrial control systems with edge-to-cloud telemetry.' },
  { title: 'Healthcare', desc: 'Clinical platform operations — high-availability ops for AI-powered clinical systems with PHI security and full audit traceability.' },
  { title: 'Telecom', desc: 'Network-aware platform engineering — infrastructure operations integrated with network telemetry for end-to-end service assurance.' },
  { title: 'Enterprise', desc: 'Multi-cloud operations — unified operational model across on-prem, private cloud, and public cloud workloads with FinOps governance.' },
];

const insights = [
  { title: 'From ITIL to SRE', tag: 'Operations', desc: 'Why Saudi enterprises are shifting from ticket-driven IT operations to engineering-led site reliability — and what it means for transformation ROI.' },
  { title: 'The Platform Engineering Imperative', tag: 'Engineering', desc: 'Internal Developer Platforms are no longer optional. How platform teams reduce cognitive load and accelerate delivery across hybrid estates.' },
  { title: 'FinOps in Multi-Cloud Saudi', tag: 'Governance', desc: 'Practical FinOps patterns for enterprises managing costs across on-prem, private cloud, and public cloud — with local regulatory context.' },
];

export default function TechnologyOperationsPage() {

  useEffect(() => { trackCapabilityPageView('Technology Operations'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ════════════════════════════════════════════
            1. HERO
            ════════════════════════════════════════════ */}
        <motion.section className="mb-28" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>Technology Operations</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            We run what we architect.<br />
            <span style={{ color: ACCENT }}>AI-driven operations,</span> measured<br />
            by outcomes — not tickets.
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            <span className="text-tiny font-semibold tracking-wider uppercase block mb-3" style={{ color: ACCENT }}>
              Technology Transformation → Operational Excellence → Business Value
            </span>
            This is the capability that closes the loop. We don't just architect and deploy — we run,
            optimize, and continuously improve the platforms that deliver your transformation outcomes.
            From platform engineering to FinOps, from SRE to multi-vendor observability —{' '}
            <strong className="text-text-primary">this is where transformation becomes operation.</strong>
          </p>
        </motion.section>

        {/* ════════════════════════════════════════════
            2. THE REALITY
            ════════════════════════════════════════════ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Operating complex technology platforms is harder than building them.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Most enterprises face operational fragmentation that erodes the value of their transformation
            investments. The gap between "deployed" and "operationalized" is where value leaks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Tool sprawl', text: 'IBM, Dell, Red Hat, cloud-native — each with its own console, no unified operational view' },
              { pre: 'Reactive, not predictive', text: 'Teams detect outages from user complaints, not from AI-driven early warning signals' },
              { pre: 'Platform engineering gap', text: 'Developers wait weeks for infrastructure — no IDP, no self-service, no golden paths' },
              { pre: 'SLA drift', text: 'Operational performance degrades silently over time with no continuous optimization loop' },
              { pre: 'Observability blind spots', text: 'Logs in one tool, metrics in another, traces in a third — no single pane of glass' },
              { pre: 'Cost escalation', text: 'Without FinOps and capacity management, infrastructure costs grow 30% YoY — untracked' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#D97706]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            3. CORE CAPABILITIES
            ════════════════════════════════════════════ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Six operational engineering disciplines — from platform to production.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            These aren't support services. They're engineering capabilities that turn platform ownership
            into platform performance — measured by SLOs, optimized by AI, and governed by FinOps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <cap.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{cap.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            3.5 HOW WE DELIVER
            ════════════════════════════════════════════ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three integrated delivery models — across every capability.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mb-3 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">Consulting & Advisory</h3>
              <p className="text-tiny text-text-muted">Operational maturity assessment · Platform engineering roadmap · SLA framework design · Observability strategy</p>
            </Link>
            <Link to="/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mb-3 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">Implementation & Delivery</h3>
              <p className="text-tiny text-text-muted">Observability stack deployment · IDP build-out · AIOps pipeline · Runbook automation · FinOps implementation</p>
            </Link>
            <Link to="/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#D97706]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mb-3 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#D97706] transition-colors">Managed Operations</h3>
              <p className="text-tiny text-text-muted">24×7 platform ops · SOC-as-a-Service · 3 tiers (Essential/Advanced/Elite) · Continuous optimization + FinOps</p>
            </Link>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            4. WHY BIONIC
            ════════════════════════════════════════════ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Why Bionic</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The operational difference.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'We operate what we architect', desc: 'No hand-off gap between design and operations. One team, one accountability chain — architecture decisions are made with operational reality baked in.' },
              { title: 'Multi-vendor, one operational model', desc: 'Dell, IBM, Red Hat, cloud-native — unified observability, one runbook, one view of health. No vendor-specific operational silos.' },
              { title: 'AI-driven, not dashboard-driven', desc: 'AIOps correlates signals across your entire estate. Dashboards are the output, not the goal. Automated root-cause analysis reduces MTTR — AIOps deployments report 50–70% improvement.' },
              { title: 'SLA-backed, continuously optimized', desc: 'Every engagement measured against defined SLOs with quarterly optimization reviews. We don\'t just maintain — we improve, quarter over quarter.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            5. TECHNOLOGY ECOSYSTEM
            ════════════════════════════════════════════ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Technology Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The platforms we operate — and the partners we operate them with.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <PartnerLogo partner={partner} size="sm" />
                  <div>
                    <h3 className="font-semibold text-sm">{partner.name}</h3>
                    <p className="text-tiny text-text-muted">{partner.role}</p>
                  </div>
                </div>
                <p className="text-tiny text-text-muted leading-relaxed border-t border-white/5 pt-3">{partner.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            6. INDUSTRY APPLICATIONS
            ════════════════════════════════════════════ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Industry Applications</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How Technology Operations delivers value across sectors.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2">{ind.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/industries/government" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
              Explore industry-specific operations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            7. FEATURED INSIGHTS
            ════════════════════════════════════════════ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Featured Insights</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Perspectives on platform engineering and operations.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((ins, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300 group cursor-pointer">
                <span className="text-tiny font-semibold tracking-wide mb-2 block" style={{ color: ACCENT }}>{ins.tag}</span>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#D97706] transition-colors">{ins.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{ins.desc}</p>
                <div className="flex items-center gap-1.5 mt-3 text-tiny" style={{ color: ACCENT }}>
                  Read more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            7.5 RELATED TRANSFORMATION BLUEPRINTS
            ════════════════════════════════════════════ */}
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
              { title: 'National Cybersecurity Operations Center', industry: 'Government', slug: 'national-soc' },
              { title: 'SAMA-Compliant Banking Infrastructure', industry: 'Banking', slug: 'sama-compliant-banking-infra' },
              { title: 'OT/IT Integration & Secure Ops', industry: 'Oil & Gas', slug: 'ot-it-integration-secure-ops' },
              { title: 'Enterprise Zero Trust', industry: 'Enterprise', slug: 'enterprise-zero-trust' },
              { title: 'Sovereign AI Platform', industry: 'Government', slug: 'sovereign-ai-platform' },
              { title: 'Industrial Intelligence & Predictive Ops', industry: 'Oil & Gas', slug: 'industrial-intelligence-predictive-ops' },
            ].map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <span className="text-tiny text-[#D97706]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#D97706] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#D97706]/40 group-hover:text-[#D97706] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?capability=ops" className="inline-flex items-center gap-1.5 text-[#D97706] text-sm font-medium hover:underline">
              View all related blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            8. CTA
            ════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to operationalize your transformation?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how Technology Operations can turn your platform investments into measured,
              continuously optimized business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blueprints?capability=ops"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300"
               
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
