import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Eye, Fingerprint, Lock, Database, FileWarning, Activity, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/cybersecurity-shield.avif';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'IBM', role: 'Security operations & threat intelligence', tech: 'QRadar SIEM · Guardium · Verify · X-Force · SOAR · MaaS360' },
  { name: 'Dell Technologies', role: 'Cyber recovery & data protection', tech: 'PowerProtect Cyber Recovery · Data Domain · CyberSense · Isolated Vault' },
  { name: 'Intel', role: 'Hardware-anchored security & confidential computing', tech: 'Intel TXT · SGX · TDX · Threat Detection Technology · vPro' },
  { name: 'Red Hat', role: 'Secure platform & compliance automation', tech: 'OpenShift · Ansible Automation · RHEL · SELinux · OpenSCAP' },
];

export default function CybersecurityPage() {

  useEffect(() => { trackCapabilityPageView('Cybersecurity & Cyber Resilience'); }, []);
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
        <title>Cybersecurity & Cyber Resilience | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Cybersecurity & Cyber Resilience — SOC, SIEM, Zero Trust, identity, and ransomware resilience." />
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
            <Shield className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Cybersecurity & Cyber Resilience</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#F87171] to-white bg-clip-text text-transparent">
              From reactive security<br />to cyber resilience.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            We build cybersecurity programs that protect business operations, ensure regulatory confidence,
            and enable recovery — designed for Saudi Arabia's threat landscape and compliance mandates.
          </p>
          </motion.div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Most organizations are secured on paper, not in practice.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FileWarning className="w-5 h-5" />, text: 'Security treated as a compliance checkbox, not a business resilience capability.' },
              { icon: <Activity className="w-5 h-5" />, text: 'Threat landscape evolving faster than detection and response capabilities.' },
              { icon: <Fingerprint className="w-5 h-5" />, text: 'Identity is the new perimeter — but Zero Trust adoption remains fragmented.' },
              { icon: <Database className="w-5 h-5" />, text: 'Regulatory pressure increasing: NCA, PDPL, and sector-specific mandates.' },
              { icon: <FileWarning className="w-5 h-5" />, text: 'Recovery plans that pass audits but fail when tested under real attack conditions.' },
              { icon: <Eye className="w-5 h-5" />, text: 'Security operations drowning in alert volume, blind to genuine threats.' },
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
          <p className="text-text-muted text-base mb-10">Six capabilities. Each designed around a resilience outcome.</p>

          <div className="space-y-4">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'Cyber Strategy & Risk Management',
                desc: 'Assess the threat landscape, quantify business risk, and build a multi-year cyber strategy aligned to your risk appetite — not a product vendor\'s roadmap.',
                outcomes: ['Cyber risk baseline quantified against business impact', 'Multi-year strategy prioritized by risk reduction, not technology refresh', 'Governance framework aligned to NCA, SAMA, and sector mandates', 'Investment case linking cyber spend to measurable risk reduction'],
              },
              {
                icon: <Eye className="w-5 h-5" />,
                title: 'Security Operations & Threat Detection',
                desc: 'Build, operate, and continuously improve a security operations capability that detects genuine threats faster and responds with precision.',
                outcomes: ['Reduced mean time to detect and respond to genuine threats', 'SIEM and SOAR platforms tuned for your environment, not generic patterns', 'Threat intelligence integrated into operational detection workflows', 'Alert triage reducing noise and surfacing what matters'],
              },
              {
                icon: <Fingerprint className="w-5 h-5" />,
                title: 'Identity, Access & Zero Trust',
                desc: 'Design and deploy identity-centric security architectures — Zero Trust Network Access, privileged access management, and continuous authentication.',
                outcomes: ['Identity governance spanning all users, devices, and access paths', 'Zero Trust architecture eliminating implicit trust across the enterprise', 'Privileged access management securing the most sensitive credentials', 'Continuous authentication replacing point-in-time access decisions'],
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: 'Data Protection & Sovereignty',
                desc: 'Protect data across its lifecycle — classification, encryption, access controls, and sovereignty enforcement aligned to Saudi regulatory requirements.',
                outcomes: ['Data classification and labeling enabling risk-appropriate controls', 'Encryption and tokenization protecting data at rest, in transit, and in use', 'Data sovereignty enforcement aligned to PDPL and cross-border mandates', 'Data loss prevention monitoring and responding to exfiltration attempts'],
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: 'Cyber Recovery & Business Resilience',
                desc: 'Design and test cyber recovery capabilities that work under real attack conditions — isolated vaults, clean recovery, and business continuity that survives ransomware.',
                outcomes: ['Isolated cyber recovery vaults protecting the last known clean copy', 'Ransomware recovery procedures tested under realistic conditions', 'Business continuity plans spanning IT, OT, and third-party dependencies', 'Recovery time objectives validated through regular simulation, not documentation'],
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: 'Managed Security Operations & Continuous Improvement',
                desc: 'Operate, monitor, and continuously mature the security program — ensuring controls evolve with threats, regulations change, and the business grows.',
                outcomes: ['24×7 security monitoring with defined escalation and response', 'Continuous control validation through automated testing and red teaming', 'Regulatory change monitoring ensuring ongoing compliance with evolving mandates', 'Security maturity roadmap with quarterly improvement milestones'],
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
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who builds resilience, not just compliance.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Business risk. Not technology risk.', desc: 'Our cyber programs are measured by business risk reduction — not by tools deployed or controls documented. Every engagement starts with the business impact of failure.' },
                { title: 'Saudi regulatory expertise. Built in.', desc: 'NCA Essential Cybersecurity Controls, SAMA Cyber Resilience Framework, PDPL — embedded from strategy through operations, not retrofitted after audit findings.' },
                { title: 'Resilience-first. Recovery-ready.', desc: 'We don\'t just build defenses — we ensure you can recover. Every engagement includes cyber recovery design and testing under realistic attack conditions.' },
                { title: 'One partner. Full accountability.', desc: 'From cyber strategy through SOC operations to managed security — a single accountable relationship across the entire security and resilience lifecycle.' },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#00BFFF1A]">
                <div className="flex items-center gap-3 mb-3">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99' }}>{p.role.split(' —')[0]}</span>
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
              { industry: 'Government & Public Sector', apps: 'National cybersecurity compliance, critical infrastructure protection, secure inter-agency connectivity.' },
              { industry: 'Banking & Financial Services', apps: 'SAMA Cyber Resilience Framework, fraud detection, SWIFT security, regulatory reporting.' },
              { industry: 'Healthcare', apps: 'Patient data protection, medical device security, clinical system resilience, ransomware recovery.' },
              { industry: 'Oil, Gas & Energy', apps: 'OT/ICS security, SCADA protection, critical infrastructure resilience, NCA compliance.' },
              { industry: 'Manufacturing', apps: 'OT security, supply chain cyber risk, intellectual property protection, production resilience.' },
              { industry: 'Telecommunications', apps: 'Network security, subscriber data protection, critical infrastructure compliance, DDoS resilience.' },
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
                title: 'Cyber Resilience Is Not Cybersecurity',
                desc: 'Why the organizations that survive cyber incidents are those that invested in recovery — not just detection. Resilience demands a fundamentally different approach.',
              },
              {
                tag: 'Saudi Arabia',
                title: 'Navigating NCA & SAMA Compliance',
                desc: 'How Saudi enterprises can build security programs that satisfy regulatory mandates while actually improving their security posture — not just their audit scores.',
              },
              {
                tag: 'Leadership',
                title: 'Zero Trust: Architecture, Not Product',
                desc: 'Why Zero Trust demands enterprise architecture transformation — and why buying a Zero Trust product without the architecture creates more risk than it reduces.',
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
              { title: 'National Cybersecurity Operations Center', industry: 'Government', slug: 'national-soc' },
              { title: 'Real-Time Fraud Detection', industry: 'Banking', slug: 'real-time-fraud-detection' },
              { title: 'Enterprise Zero Trust', industry: 'Enterprise', slug: 'enterprise-zero-trust' },
            ].map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?capability=cyber" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
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
              Ready to move from reactive security to<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#F87171] bg-clip-text text-transparent">cyber resilience</span>?
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how a business-aligned cyber program can reduce risk, ensure regulatory confidence, and guarantee recovery.
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
                to="/blueprints?capability=cyber"
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
