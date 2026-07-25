import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Server, ArrowRight, Cloud, Container, HardDrive, Cpu, Globe, Activity, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/images/it-infrastructure.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'Dell Technologies', role: 'Enterprise infrastructure', tech: 'PowerEdge · PowerStore · PowerMax · VxRail · APEX · PowerFlex' },
  { name: 'IBM', role: 'Storage, AI infra & hybrid cloud', tech: 'FlashSystem · Power · watsonx · Cloud Pak · Storage Defender' },
  { name: 'Platform9', role: 'Private & hybrid cloud platform', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation · Multi-Cluster Management' },
  { name: 'Intel', role: 'Compute, AI & edge infrastructure', tech: 'Xeon Scalable · Gaudi 3 AI Accelerators · Edge AI · Confidential Computing · Optane' },
  { name: 'Red Hat', role: 'Open-source infrastructure & automation', tech: 'OpenShift · Ansible Automation · RHEL · Satellite' },
];

export default function InfrastructurePage() {

  useEffect(() => { trackCapabilityPageView('Sovereign Infrastructure & Hybrid Cloud'); }, []);
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
        <title>Sovereign Infrastructure & Hybrid Cloud | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Sovereign Infrastructure & Hybrid Cloud — datacenter refresh, storage modernization, AI infrastructure." />
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
            <Server className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Sovereign Infrastructure & Hybrid Cloud</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#60A5FA] to-white bg-clip-text text-transparent">
              From infrastructure management<br />to sovereign digital foundations.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            We design, deploy, and operate sovereign infrastructure and hybrid cloud platforms
            that power AI, data, and enterprise workloads — built for Saudi Arabia's residency and resilience requirements.
          </p>
          </motion.div>
        </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Most infrastructure holds organizations back, not forward.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Server className="w-5 h-5" />, text: 'Legacy datacenters consuming capital without delivering agility.' },
              { icon: <Globe className="w-5 h-5" />, text: 'Cloud adoption stalled by sovereignty and data residency mandates.' },
              { icon: <Cloud className="w-5 h-5" />, text: 'Hybrid environments managed in silos — no unified operating model.' },
              { icon: <Activity className="w-5 h-5" />, text: 'Manual infrastructure operations at a scale that demands automation.' },
              { icon: <Container className="w-5 h-5" />, text: 'No platform layer between infrastructure and development teams.' },
              { icon: <HardDrive className="w-5 h-5" />, text: 'Infrastructure procurement cycles disconnected from business velocity.' },
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
          <p className="text-text-muted text-base mb-10">Six capabilities. Each designed around a sovereignty and performance outcome.</p>

          <div className="space-y-4">
            {[
              {
                icon: <Cloud className="w-5 h-5" />,
                title: 'Cloud Strategy & Modernization',
                desc: 'Assess workload portfolios, define target state, and build a modernization roadmap that balances agility, sovereignty, and economics — aligned to business strategy, not cloud vendor incentives.',
                outcomes: ['Workload placement strategy: cloud, hybrid, sovereign, and on-premise', 'Modernization roadmap prioritized by business impact and feasibility', 'TCO model comparing current state to target architecture', 'Migration strategy with risk mitigation and business continuity'],
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: 'Hybrid Cloud Platforms',
                desc: 'Design, deploy, and operate hybrid cloud platforms that span private datacenter and public cloud — with unified management, governance, and automation across all environments.',
                outcomes: ['Unified platform spanning on-premise, sovereign, and public cloud', 'Consistent management, security, and governance across all environments', 'Workload portability eliminating cloud lock-in', 'Service catalog enabling self-service consumption and automated provisioning'],
              },
              {
                icon: <Container className="w-5 h-5" />,
                title: 'Kubernetes & Platform Engineering',
                desc: 'Build internal developer platforms on Kubernetes — providing container orchestration, service mesh, CI/CD pipelines, and self-service capabilities that accelerate engineering velocity.',
                outcomes: ['Managed Kubernetes platform with multi-cluster governance', 'Self-service developer portal reducing infrastructure wait times', 'Automated CI/CD pipelines accelerating deployment frequency', 'Service mesh providing observability, security, and traffic management'],
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: 'Sovereign Infrastructure & Data Residency',
                desc: 'Design infrastructure architectures that meet Saudi data residency requirements — ensuring data never leaves authorized boundaries while maintaining cloud-native agility.',
                outcomes: ['Sovereign architecture ensuring data remains within Saudi jurisdiction', 'Private and hybrid cloud platforms meeting residency mandates', 'Air-gapped and disconnected operation for classified workloads', 'Compliance documentation supporting NCA and sector audit requirements'],
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: 'Infrastructure Automation & Observability',
                desc: 'Automate infrastructure lifecycle management — provisioning, configuration, patching, and scaling — with full observability across performance, cost, capacity, and compliance.',
                outcomes: ['Infrastructure-as-Code enabling repeatable, auditable provisioning', 'Automated patching and compliance enforcement across all environments', 'Unified observability: metrics, logs, traces, and cost in one view', 'Predictive capacity management preventing performance degradation'],
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: 'Infrastructure Operations & Continuous Evolution',
                desc: 'Operate, monitor, and continuously evolve the infrastructure platform — ensuring reliability, performance, and adaptation as workloads and regulatory requirements change.',
                outcomes: ['24×7 infrastructure monitoring with proactive incident response', 'Capacity planning and lifecycle management across all infrastructure assets', 'Continuous platform evolution aligned to workload and regulatory changes', 'SLA-backed operations with defined availability and performance commitments'],
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
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who builds sovereign digital foundations.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Sovereignty-first. Designed in.', desc: 'Every architecture we design starts with Saudi data residency, NCA controls, and sector-specific sovereignty requirements — not treated as an afterthought or a premium feature.' },
                { title: 'Hybrid by design. Not by accident.', desc: 'We design platforms that span private datacenter, sovereign cloud, and public cloud — with unified management and the flexibility to place workloads where they belong.' },
                { title: 'Multi-vendor engineering. No lock-in.', desc: 'We design across Dell, IBM, Platform9, and Intel — selecting the right infrastructure for each workload, driven by architecture fit, not reseller incentives.' },
                { title: 'One partner. Full accountability.', desc: 'From infrastructure strategy through platform deployment to 24×7 operations — a single accountable relationship across the full infrastructure lifecycle.' },
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
              { industry: 'Government & Public Sector', apps: 'National cloud platforms, sovereign datacenter, classified workload infrastructure, NCA-compliant hosting.' },
              { industry: 'Banking & Financial Services', apps: 'SAMA-compliant infrastructure, core banking platforms, high-availability datacenter, regulatory workload isolation.' },
              { industry: 'Healthcare', apps: 'Clinical data residency, PACS and imaging infrastructure, high-availability clinical systems, patient data sovereignty.' },
              { industry: 'Oil, Gas & Energy', apps: 'OT/IT infrastructure convergence, edge computing for remote assets, HPC for reservoir modeling, sovereign data platforms.' },
              { industry: 'Manufacturing', apps: 'Edge computing for factory operations, private 5G infrastructure, production system high availability, supply chain platforms.' },
              { industry: 'Telecommunications', apps: 'NFV infrastructure, 5G core platforms, edge cloud for low-latency services, BSS/OSS cloud migration.' },
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
                tag: 'Strategy',
                title: 'Hybrid Cloud Is an Operating Model',
                desc: 'Why hybrid cloud success depends on unified operations, governance, and automation — not on which cloud vendors are in the mix.',
              },
              {
                tag: 'Saudi Arabia',
                title: 'Data Sovereignty as Architecture',
                desc: 'How Saudi enterprises can design infrastructure that meets residency mandates while delivering the agility developers and data teams demand.',
              },
              {
                tag: 'Engineering',
                title: 'The Platform Engineering Imperative',
                desc: 'Why internal developer platforms are becoming the difference between infrastructure that enables innovation and infrastructure that blocks it.',
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
              { title: 'Sovereign AI Platform', industry: 'Government', slug: 'sovereign-ai-platform' },
              { title: 'SAMA-Compliant Banking Infrastructure', industry: 'Banking', slug: 'sama-compliant-banking-infra' },
              { title: 'Industrial Intelligence & Predictive Ops', industry: 'Oil & Gas', slug: 'industrial-intelligence-predictive-ops' },
            ].map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?capability=infra" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
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
              Ready to build your<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#60A5FA] bg-clip-text text-transparent">sovereign digital foundation</span>?
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how sovereign infrastructure and hybrid cloud can accelerate your digital transformation — with residency and resilience built in.
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
                to="/blueprints?capability=infra"
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
