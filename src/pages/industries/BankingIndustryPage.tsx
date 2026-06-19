import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, TrendingUp, Users, CreditCard, GitBranch } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
const heroBg = `${import.meta.env.BASE_URL}images/enterprise-ai-transformation-hero.avif`;


const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#2563EB';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const priorities = [
  { title: 'AI-Powered Risk & Compliance', desc: 'Real-time fraud detection with graph neural networks, AML transaction monitoring, credit risk AI, and SAMA regulatory automation.', icon: Shield },
  { title: 'Customer Intelligence', desc: 'Customer 360 data unification, AI-driven personalization, customer lifetime value modeling, and predictive engagement.', icon: Users },
  { title: 'Digital Banking', desc: 'Digital-first banking platforms, mobile banking transformation, conversational banking AI, and seamless multi-channel experiences.', icon: CreditCard },
  { title: 'Open Banking', desc: 'API-led architecture, secure API gateway, developer portal, and open banking framework compliance.', icon: GitBranch },
  { title: 'Intelligent KYC & Onboarding', desc: 'AI document processing, automated identity verification, and risk-based onboarding — 3× faster.', icon: TrendingUp },
  { title: 'Cyber-Resilient Infrastructure', desc: 'SAMA BCM-compliant infrastructure, cyber recovery vault, Zero Trust architecture, 99.99%+ availability.', icon: Shield },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Fraud detection AI, credit risk modeling, AML transaction monitoring, intelligent document processing' },
  { cap: 'Data, Analytics & Intelligence', app: 'Customer 360 data platform, real-time risk dashboards, regulatory analytics, executive BI' },
  { cap: 'Business Applications & CX', app: 'CRM transformation, digital banking portals, intelligent contact center, personalization engine' },
  { cap: 'Integration & Intelligent Ops', app: 'Open banking APIs, core banking integration, real-time payment pipelines, ESB modernization' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'SAMA CSF compliance, SOC, PCI-DSS, fraud operations, cyber recovery vault' },
  { cap: 'Sovereign Infrastructure & Hybrid Cloud', app: 'SAMA BCM-compliant infrastructure, 99.99%+ availability, disaster recovery, AI infrastructure' },
];

const services = [
  { svc: 'Consulting & Advisory', app: 'SAMA regulatory readiness, fraud strategy, open banking architecture, BCM advisory' },
  { svc: 'Implementation & Delivery', app: 'Fraud AI deployment, Customer 360 build, open banking platform, core banking integration' },
  { svc: 'Managed Operations', app: '24×7 SOC for banking, SLA-backed infrastructure ops, compliance monitoring, vault operations' },
];

const blueprints = [
  { title: 'Real-Time Fraud Detection', slug: 'real-time-fraud-detection' },
  { title: 'Customer 360 & Intelligent Engagement', slug: 'customer-360-intelligent-engagement' },
  { title: 'SAMA-Compliant Banking Infrastructure', slug: 'sama-compliant-banking-infra' },
];

const partners = [
  { name: 'Salesforce', role: 'CRM & customer engagement for banking', tech: 'Financial Services Cloud · Marketing Cloud · Einstein AI · Agentforce' },
  { name: 'IBM', role: 'Fraud AI & banking infrastructure', tech: 'watsonx for fraud detection · QRadar SOC · FlashSystem for resilience · Cloud Pak' },
  { name: 'Informatica', role: 'Customer 360 MDM & data governance', tech: 'Customer 360 MDM · Data Quality · Data Catalog · Data Lineage for regulatory reporting' },
  { name: 'MuleSoft', role: 'Open banking APIs & core integration', tech: 'Anypoint Platform · API Manager · Flex Gateway · Core banking connectivity' },
  { name: 'Dell Technologies', role: 'Cyber recovery & resilient infrastructure', tech: 'PowerProtect Cyber Recovery · PowerMax · VxRail · Isolated Vault for SAMA BCM' },
  { name: 'Intel', role: 'Confidential computing & AI acceleration', tech: 'Intel SGX · TDX for transaction security · Gaudi 3 for fraud AI · Xeon for banking' },
  { name: 'Tableau', role: 'Regulatory dashboards & executive BI', tech: 'Tableau Cloud · Embedded Analytics · SAMA compliance dashboards · Risk analytics' },
];

export default function BankingIndustryPage() {

  useEffect(() => { trackIndustryPageView('Banking & Financial Services'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      {/* ═══ 1. HERO SECTION — Full-width background ═══ */}
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>Banking & Financial Services</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            Banking transformation <span style={{ color: ACCENT }}>under SAMA</span> —<br />
            intelligent, compliant, secure.
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            From real-time fraud detection to SAMA-compliant infrastructure, from customer 360 to open banking —
            we help Saudi financial institutions achieve regulatory excellence, operational efficiency, and customer
            intelligence through enterprise AI.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">SAMA's regulatory pace is accelerating — and legacy systems can't keep up.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Manual compliance reporting overwhelms teams. Legacy rule-based systems miss complex fraud patterns.
            Customer data sits in silos across banking, cards, wealth, and insurance. Open banking mandates demand
            API-first architecture that legacy cores were never designed for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'SAMA reporting — manual', text: 'Regulatory reporting is slow, error-prone, and compliance teams are overwhelmed by evolving requirements.' },
              { pre: 'Fraud sophistication rising', text: 'Legacy rule-based systems cannot detect complex fraud patterns in real time. Graph neural networks can.' },
              { pre: 'KYC/AML bottlenecks', text: 'Manual document verification delays customer acquisition by weeks — hurting growth and customer experience.' },
              { pre: 'Customer data fragmented', text: 'Banking, cards, wealth, insurance — data in silos. No unified customer view, no personalization.' },
              { pre: 'Open banking mandate', text: 'Secure API-first architecture required. Legacy core banking systems were never designed for API exposure.' },
              { pre: 'Infrastructure resilience', text: 'SAMA BCM demands 99.99%+ uptime with full cyber recovery capability. Legacy infrastructure falls short.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#2563EB]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. TRANSFORMATION PRIORITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Priorities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Six priorities — from risk to revenue.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#2563EB]/25 transition-all duration-300">
                <p.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. RELEVANT CAPABILITIES ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Relevant Capabilities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to banking transformation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={`/capabilities/${['ai','data','apps','integration','cyber','infra'][i]}`} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#2563EB]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#2563EB] transition-colors">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 5. RELEVANT SERVICES ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to banking.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={`/services/${['advisory','implementation','operations'][i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#2563EB]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#2563EB] transition-colors">{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. BLUEPRINTS ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for banking.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#2563EB]/25 transition-all duration-300">
                <span className="text-tiny text-[#2563EB]/60 mb-2 block">Banking</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#2563EB] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#2563EB]/40 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=banking" className="inline-flex items-center gap-1.5 text-[#2563EB] text-sm font-medium hover:underline">
              View all banking blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Technology partners — architected for SAMA compliance.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#2563EB]/25 transition-all duration-300">
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

        {/* ═══ 8. EXPECTED OUTCOMES ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>Expected Outcomes</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across banking transformation.</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {[
              { metric: '90%+', label: 'Fraud detection accuracy vs rules-based' },
              { metric: 'Accelerated', label: 'SAMA regulatory reporting cycles' },
              { metric: '3× faster', label: 'KYC onboarding with digital identity' },
              { metric: '99.99%+', label: 'Target infrastructure availability' },
              { metric: '90 days', label: 'Target open banking deployment' },
              { metric: '< 4 hr', label: 'Target cyber recovery time' },
            ].map((o, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#2563EB]/30 transition-all">
                <div className="text-xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 9. CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to transform your banking operations — under SAMA?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how AI-powered risk intelligence, customer 360, and SAMA-compliant infrastructure can transform your institution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #2563EB20' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=banking" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#2563EB]/30">
                View Banking Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

    </div>
);
}
