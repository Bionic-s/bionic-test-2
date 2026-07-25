import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Activity, Gauge, BarChart3, GitBranch, TrendingUp } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { CANON_PARTNERS, type PartnerData } from '../../data/partnersData';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/images/cloud-computing.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const valueDrivers = [
  { title: 'AIOps', desc: 'Unified telemetry across your entire estate. Instana + Turbonomic + IBM Concert. Automated root cause analysis. AIOps programs reduce mean time to detect by up to 60% through automated signal correlation.', icon: Activity },
  { title: 'SRE', desc: 'Error budgets, SLO engineering, blameless postmortems. Reliability as an engineering discipline — not a support queue.', icon: Gauge },
  { title: 'FinOps', desc: 'Continuous cost visibility across hybrid multi-cloud. Chargeback, budgeting, reservation management. FinOps programs typically achieve 25–40% cost avoidance within the first year.', icon: BarChart3 },
  { title: 'Platform Engineering', desc: 'Internal Developer Platform evolution. Golden paths, self-service infrastructure, developer experience optimization.', icon: GitBranch },
  { title: 'Continuous Optimization', desc: 'Quarterly optimization reviews. Capacity right-sizing, workload balancing, performance tuning, tech debt reduction. Measured improvement — every quarter.', icon: TrendingUp },
];

const tiers = [
  {
    name: 'Essential',
    subtitle: 'Monitor & Alert',
    ideal: 'Organizations starting their managed operations journey',
    items: [
      '24×7 infrastructure monitoring — server, storage, network health',
      'Application monitoring — synthetic transactions, API health, error rates',
      'Security monitoring — SIEM alert triage, threat feed ingestion, L1 SOC',
      'Incident management — alert → ticket → escalation, 15-min acknowledgment SLA',
      'Monthly operations review — performance report, incident analysis, capacity trends',
    ],
  },
  {
    name: 'Advanced',
    subtitle: 'Manage & Optimize',
    ideal: 'Enterprises requiring proactive operations and continuous improvement',
    items: [
      'Everything in Essential, plus:',
      'AIOps & full-stack observability — Instana + Turbonomic + CloudIQ, unified telemetry',
      'Capacity & performance management — right-sizing, workload balancing, quarterly optimization',
      'FinOps governance — cloud cost visibility, chargeback, budgeting, reservation management',
      'L2 incident response — advanced troubleshooting, vendor escalation management',
      'SLA management — defined SLOs, error budgets, quarterly SLA review with improvement plan',
    ],
  },
  {
    name: 'Elite',
    subtitle: 'Optimize & Transform',
    ideal: 'Enterprises requiring SRE-grade operations and continuous platform evolution',
    items: [
      'Everything in Advanced, plus:',
      'Site Reliability Engineering — error budgets, SLO engineering, chaos engineering',
      'Platform engineering — IDP evolution, golden path maintenance, developer experience optimization',
      'SOC-as-a-Service — full SOC operations: threat hunting, forensics, IR, compliance reporting',
      'Architecture evolution — continuous improvement, tech debt reduction, modernization roadmap',
      'Quarterly Business Review — executive-level: SLOs, FinOps, security posture, architecture roadmap',
    ],
  },
];

const capabilityCoverage = [
  { cap: 'Enterprise AI & Automation', app: 'MLOps monitoring, model drift detection, AI pipeline operations, agent health' },
  { cap: 'Data, Analytics & Intelligence', app: 'Data platform ops, pipeline monitoring, data quality SLAs, BI availability' },
  { cap: 'Business Applications & CX', app: 'CRM ops, marketing automation ops, contact center monitoring, commerce SLAs' },
  { cap: 'Integration & Intelligent Ops', app: 'API gateway ops, message queue monitoring, integration health, event pipeline ops' },
  { cap: 'Cybersecurity & Cyber Resilience', app: '24×7 SOC, SIEM management, threat hunting, incident response, vault ops' },
  { cap: 'Sovereign Infrastructure & Cloud', app: 'Datacenter ops, cloud ops, K8s fleet management, storage ops, backup ops' },
  { cap: 'Technology Operations', app: 'IDP ops, observability stack management, FinOps governance, runbook automation' },
];

const blueprints = [
  { title: 'National Cybersecurity Operations Center', industry: 'Government', slug: 'national-soc' },
  { title: 'SAMA-Compliant Banking Infrastructure', industry: 'Banking', slug: 'sama-compliant-banking-infra' },
  { title: 'OT/IT Integration & Secure Ops', industry: 'Oil & Gas', slug: 'ot-it-integration-secure-ops' },
  { title: 'Enterprise Zero Trust', industry: 'Enterprise', slug: 'enterprise-zero-trust' },
  { title: 'Sovereign AI Platform', industry: 'Government', slug: 'sovereign-ai-platform' },
  { title: 'Industrial Intelligence & Predictive Ops', industry: 'Oil & Gas', slug: 'industrial-intelligence-predictive-ops' },
];

const partners: (PartnerData & { role: string; tech: string })[] = [
  { ...CANON_PARTNERS.find(p => p.name === 'IBM')!, role: 'AIOps, observability & IT automation', tech: 'Instana · Turbonomic · IBM Concert · Cloud Pak for Watson AIOps · SevOne' },
  { ...CANON_PARTNERS.find(p => p.name === 'Dell Technologies')!, role: 'Infrastructure telemetry & operations', tech: 'CloudIQ · OpenManage Enterprise · APEX Console · PowerProtect' },
  { ...CANON_PARTNERS.find(p => p.name === 'Platform9')!, role: 'Multi-cluster K8s & private cloud ops', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation' },
  { ...CANON_PARTNERS.find(p => p.name === 'Intel')!, role: 'Infrastructure performance & telemetry', tech: 'Intel Node Manager · Resource Director Technology · Performance optimization' },
  { ...CANON_PARTNERS.find(p => p.name === 'Google')!, role: 'Cloud operations & SRE practices', tech: 'Cloud Monitoring · Cloud Operations · Cloud Run · GKE' },
];

export default function ManagedOperationsPage() {

  useEffect(() => { trackServicePageView('Managed Operations'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Managed Operations | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="24×7 monitoring, AI operations, and continuous improvement — we stay long after go-live." />
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
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/25 bg-[#00BFFF]/5 mb-10">
              <span className="text-tiny text-[#00BFFF] font-semibold tracking-widest uppercase">Managed Operations</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              <span style={{ color: ACCENT }}>Continuous Transformation Enablement.</span><br />
              Not traditional managed services.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed">
              We operate your enterprise platforms with continuous transformation as the mandate. We don't just keep the lights on — we continuously optimize, engineer, and evolve your platforms, applying AIOps, SRE, FinOps, and platform engineering to ensure your transformation delivers compounding value, not diminishing returns.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

          {/* Positioning distinction */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-6">
              <p className="text-tiny font-semibold uppercase tracking-wider mb-3 text-text-muted">Traditional MSP</p>
              <ul className="space-y-2">
                {['Ticket-driven, reactive', 'Maintaining steady state', 'Cost-focused', 'Single-vendor tools', 'Service desk = value'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-tiny text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-text-muted flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-secondary border rounded-xl p-6" style={{ borderColor: `${ACCENT}30` }}>
              <p className="text-tiny font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Continuous Transformation Enablement</p>
              <ul className="space-y-2">
                {['Engineering-driven, predictive', 'Continuous improvement', 'Outcome-focused', 'Multi-vendor, unified telemetry', 'Engineering = value'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-tiny">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ACCENT }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Running complex platforms is harder than building them — and talent scarcity makes it worse.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            SREs, platform engineers, and security analysts are the hardest roles to fill in Saudi Arabia.
            Operational coverage drops on nights, weekends, and holidays — exactly when you need it most.
            Tool sprawl without integration creates operational blind spots. Costs grow 30%+ YoY
            with no governance. We fix this — engineering-first.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Talent scarcity', text: 'SREs, platform engineers, and security analysts — the hardest roles to fill in KSA. Your platforms need them 24×7.' },
              { pre: 'Coverage gaps', text: 'Nights, weekends, Eids — operational coverage drops exactly when incidents are most damaging.' },
              { pre: 'Tool sprawl', text: '10+ monitoring tools across vendors — zero correlation, no single view of health, alert fatigue overwhelming teams.' },
              { pre: 'Reactive operations', text: 'Teams fight fires instead of preventing them. No predictive capability. MTTR measured in hours, not minutes.' },
              { pre: 'Cost visibility vacuum', text: 'Cloud, infrastructure, and licensing costs grow 30%+ YoY — untracked, ungoverned, unbudgeted.' },
              { pre: 'Vendor management overhead', text: 'Managing SLAs across 5+ technology vendors consumes your best engineers — who should be building, not administrating.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. VALUE DRIVERS ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Core Value Drivers</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Engineering disciplines that drive compounding operational value.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            These are not "services." They are engineering capabilities that ensure your platforms
            continuously improve — not just stay alive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueDrivers.map((v, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <v.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 OPERATIONAL TIERS ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Operational Tiers</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Three tiers. One partner. Compounding value.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Scale from monitoring to full SRE without changing providers. Each tier builds on the last —
            operational maturity compounds over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300 flex flex-col">
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
          <SectionLabel>Capability Coverage</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Operations span every capability — protecting and amplifying transformation value.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilityCoverage.map((c, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/15 transition-all duration-300 flex items-start gap-3">
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
            The platforms we operate — and the partners we operate them with.
          </h2>
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

        {/* ═══ 6. RELATED BLUEPRINTS ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Reference architectures we keep running — and continuously improving.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. WHY BIONIC ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Why Bionic</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The operational difference.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Continuous transformation, not steady-state', desc: 'Every quarter we improve something measurable — SLOs, costs, deployment speed, developer experience. Operations as compounding value, not fixed cost.' },
              { title: 'We operate what we architect', desc: 'No hand-off gap. The team that designed your platform continuously evolves it. Architecture decisions are made with operational reality baked in from day one.' },
              { title: 'AI-driven, engineering-led', desc: 'Instana + Turbonomic + AIOps predict issues before they become incidents. SRE + Platform Engineering prevent them. Automation is the first response — not a ticket.' },
              { title: '3 tiers, 1 partner, compounding maturity', desc: 'Scale from Essential monitoring to Elite SRE without changing providers. Operational maturity compounds — every tier builds on the last.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
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

        {/* ═══ CTA ═══ */}
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to operationalize your transformation — continuously?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss which tier fits your operational maturity and how we can start compounding value — quarter over quarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/capabilities/ops"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30"
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
