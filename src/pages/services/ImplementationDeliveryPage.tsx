import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cog, Zap, GitBranch, Cloud, Shield, Users, TrendingUp } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { CANON_PARTNERS, type PartnerData } from '../../data/partnersData';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/ai_case_study_image.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const services = [
  { title: 'AI & Automation Deployment', desc: 'MLOps pipeline, model serving infrastructure, agent deployment, automation workflow implementation — production-grade, governed, measured.', icon: Zap },
  { title: 'Platform & Application Delivery', desc: 'CRM deployment (Salesforce), data platform build-out (IBM, Informatica), BI rollout (Tableau, Looker), application modernization.', icon: Cog },
  { title: 'Integration & API Engineering', desc: 'API-led connectivity across legacy and modern systems — MuleSoft Anypoint, event-driven architecture, real-time data pipelines.', icon: GitBranch },
  { title: 'Infrastructure & Cloud Delivery', desc: 'Datacenter modernization (Dell), hybrid cloud deployment (Platform9, Red Hat OpenShift), sovereign infrastructure build-out.', icon: Cloud },
  { title: 'Security Implementation', desc: 'Zero Trust fabric deployment, SOC build-out (IBM QRadar), cyber recovery vault (Dell PowerProtect), identity architecture.', icon: Shield },
  { title: 'Business Adoption & Value Realization', desc: 'Change management, user adoption programs, training, operational handover, KPI baselining — value measured from day one.', icon: Users },
];

const capabilityCoverage = [
  { cap: 'Enterprise AI & Automation', app: 'MLOps pipeline, model deployment, agent rollout, automation workflow implementation' },
  { cap: 'Data, Analytics & Intelligence', app: 'Lakehouse build, MDM implementation, BI deployment, data pipeline engineering' },
  { cap: 'Business Applications & CX', app: 'CRM deployment, contact center, marketing automation, commerce platform' },
  { cap: 'Integration & Intelligent Ops', app: 'API-led architecture, ESB migration, event-driven patterns, workflow orchestration' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'SIEM deployment, Zero Trust implementation, vault build, identity architecture' },
  { cap: 'Sovereign Infrastructure & Cloud', app: 'Datacenter refresh, OpenShift deployment, cloud migration, AI infrastructure' },
  { cap: 'Technology Operations', app: 'IDP build-out, observability stack, FinOps implementation, runbook automation' },
];

const blueprints = [
  { title: 'Sovereign AI Platform', industry: 'Government', slug: 'sovereign-ai-platform' },
  { title: 'Inter-Ministry Data Fabric', industry: 'Government', slug: 'inter-ministry-data-fabric' },
  { title: 'Real-Time Fraud Detection', industry: 'Banking', slug: 'real-time-fraud-detection' },
  { title: 'Customer 360 & Intelligent Engagement', industry: 'Banking', slug: 'customer-360-intelligent-engagement' },
  { title: 'Industrial Intelligence & Predictive Ops', industry: 'Oil & Gas', slug: 'industrial-intelligence-predictive-ops' },
  { title: 'Clinical Intelligence & Medical AI', industry: 'Healthcare', slug: 'clinical-intelligence-medical-ai' },
];

const partners: (PartnerData & { role: string; tech: string })[] = [
  { ...CANON_PARTNERS.find(p => p.name === 'Salesforce')!, role: 'CRM, Marketing Cloud, Experience Cloud deployment', tech: 'Sales Cloud · Service Cloud · Marketing Cloud · Commerce Cloud · Experience Cloud' },
  { ...CANON_PARTNERS.find(p => p.name === 'MuleSoft')!, role: 'API-led integration, Anypoint platform delivery', tech: 'Anypoint Platform · API Manager · Flex Gateway · RPA · Composer' },
  { ...CANON_PARTNERS.find(p => p.name === 'IBM')!, role: 'watsonx deployment, DataStage, Cloud Pak implementation', tech: 'watsonx.ai · DataStage · Cloud Pak · FlashSystem · Instana' },
  { ...CANON_PARTNERS.find(p => p.name === 'Informatica')!, role: 'MDM, Data Quality, Data Catalog deployment', tech: 'MDM · Data Quality · Data Catalog · Data Lineage · Data Integration' },
  { ...CANON_PARTNERS.find(p => p.name === 'Dell Technologies')!, role: 'PowerEdge, PowerStore, VxRail deployment', tech: 'PowerEdge · PowerStore · PowerMax · VxRail · APEX' },
  { ...CANON_PARTNERS.find(p => p.name === 'Platform9')!, role: 'Private cloud & Kubernetes platform delivery', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation' },
];

export default function ImplementationDeliveryPage() {

  useEffect(() => { trackServicePageView('Implementation & Delivery'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Implementation & Delivery | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Platform deployment, integration engineering, and adoption enablement — multi-vendor, multi-domain." />
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
              <span className="text-tiny text-[#00BFFF] font-semibold tracking-widest uppercase">Implementation & Delivery</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
              Strategy → Implementation →<br />
              <span style={{ color: ACCENT }}>Adoption → Value Realization.</span><br />
              We deliver the full chain.
            </h1>
            <p className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed">
              Architecture is theory. Production is truth. We deploy, integrate, and deliver — but more importantly, we ensure your teams adopt, your operations absorb, and your business realizes the promised value. From AI platforms to security controls, from CRM to cloud — production-grade delivery with time-to-value acceleration built in.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The gap between "deployed" and "delivering value" is where most transformations fail.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Industry research indicates large enterprise technology projects routinely exceed initial timelines — disciplined delivery methodology closes this gap. AI pilots never reach production.
            New platforms are deployed but teams can't operate them. We close this gap — delivering
            production-grade systems with governance, adoption, and value tracking built into the process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Pilot purgatory', text: 'AI and automation projects stall between prototype and production — no deployment pipeline, no operational readiness' },
              { pre: 'Integration complexity', text: 'New platforms must connect to legacy systems — SAP, Oracle, custom apps — without breaking what works' },
              { pre: 'Delivery delays', text: 'Enterprise projects routinely run 200% over timeline — no agile discipline for enterprise-scale deployment' },
              { pre: 'Security retrofitted', text: 'Cyber controls applied post-deployment, not architected into the delivery pipeline — expensive rework' },
              { pre: 'Vendor finger-pointing', text: 'Multi-vendor environments create accountability gaps — no single party owns deployment success' },
              { pre: 'Adoption left to chance', text: 'Systems deployed but teams can\'t use them, operations can\'t absorb them, and value goes unmeasured' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/20 transition-all duration-300">
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
            Six delivery services — from deployment to value realization.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <s.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 TRANSFORMATION GOVERNANCE ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Governance</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Governance that ensures strategy reaches value — not just deployment.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Program Governance', desc: 'Structured delivery framework — phase gates, risk management, dependency mapping, multi-vendor coordination.' },
              { title: 'Executive Steering', desc: 'Monthly executive reviews — progress against roadmap, escalation resolution, strategic alignment check.' },
              { title: 'KPI Tracking', desc: 'Real-time dashboard — deployment velocity, adoption metrics, operational readiness, milestone achievement.' },
              { title: 'Value Tracking', desc: 'Value realization measured against business case — ROI tracking, benefits realization, deviation analysis.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <TrendingUp className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. CAPABILITY COVERAGE ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Capability Coverage</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Implementation spans every capability we architect.
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
            The platforms we deliver — and the partners we deliver them with.
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Reference architectures we deliver into production.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The delivery difference.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'One delivery owner', desc: 'We manage all vendors. You get one accountable team, not five project managers pointing fingers.' },
              { title: 'Strategy-to-value chain', desc: 'The team that advised builds. The team that builds ensures adoption. Adoption is measured against business outcomes.' },
              { title: 'Time-to-value acceleration', desc: 'Production-first methodology: 2-week sprints, production-grade governance, value realized incrementally — not after 18 months.' },
              { title: 'Build-to-adopt', desc: 'Delivery includes change management, training, operational runbooks, and KPI baselines. We don\'t "throw it over the wall."' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
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
              Ready to take your transformation from design to production?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how we can deliver your platforms, drive adoption, and accelerate time-to-value.
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
                to="/capabilities/integration"
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
