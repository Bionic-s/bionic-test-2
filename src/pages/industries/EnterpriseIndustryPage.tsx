import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, TrendingUp, Shield, Cpu, GitBranch, BarChart3 } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';
const heroBg = `${import.meta.env.BASE_URL}images/hero/ai-agents.avif`;


const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const priorities = [
  { title: 'Agentic Workforce', desc: 'AI agents operating alongside human teams — executing multi-step tasks, making context-aware decisions, with human-in-the-loop governance.', icon: Brain },
  { title: 'Enterprise AI', desc: 'AI across every function: sales, marketing, finance, HR, supply chain, IT — governed, measured, production-grade.', icon: Cpu },
  { title: 'Data-Driven Decision Making', desc: 'Executive BI, unified enterprise data, predictive analytics, and real-time dashboards — decisions powered by data, not intuition.', icon: BarChart3 },
  { title: 'Zero Trust Security', desc: 'Identity-centric security, microsegmentation, continuous verification — enterprise-wide security transformation, not perimeter-based.', icon: Shield },
  { title: 'Platform Modernization', desc: 'CRM transformation, ERP integration, application modernization, API-led architecture — the technology foundation for growth.', icon: GitBranch },
  { title: 'IT Operations Transformation', desc: 'IDP, AIOps, FinOps, self-service — transforming IT from ticket-driven cost center to engineering-driven value enabler.', icon: TrendingUp },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Agentic AI, document intelligence, process automation, predictive analytics, enterprise-grade MLOps' },
  { cap: 'Data, Analytics & Intelligence', app: 'Enterprise data lakehouse, executive BI, MDM, advanced analytics, real-time dashboards' },
  { cap: 'Business Applications & CX', app: 'CRM transformation, contact center, marketing automation, commerce, employee experience platforms' },
  { cap: 'Integration & Intelligent Ops', app: 'API-led architecture, ERP integration, event-driven workflows, cross-department orchestration' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'Zero Trust, SOC, identity security, ransomware resilience, continuous compliance' },
  { cap: 'Technology Operations', app: 'IDP, AIOps, FinOps, platform engineering, IT service transformation, 24×7 operations' },
];

const services = [
  { svc: 'Consulting & Advisory', app: 'AI readiness, operating model design, Zero Trust strategy, enterprise architecture, technology roadmap' },
  { svc: 'Implementation & Delivery', app: 'Agentic AI deployment, CRM transformation, Zero Trust implementation, data platform build, ERP integration' },
  { svc: 'Managed Operations', app: '24×7 platform ops, SOC-as-a-Service, FinOps governance, IDP evolution, continuous optimization' },
];

const blueprints = [
  { title: 'Agentic Workforce Transformation', slug: 'agentic-workforce-transformation' },
  { title: 'Enterprise Zero Trust', slug: 'enterprise-zero-trust' },
  { title: 'Customer 360 & Intelligent Engagement', slug: 'customer-360-intelligent-engagement' },
];

const partners = [
  { name: 'Salesforce', role: 'CRM, CX & agentic workforce', tech: 'Sales Cloud · Service Cloud · Marketing Cloud · Agentforce · Einstein AI · Slack' },
  { name: 'IBM', role: 'Enterprise AI, security & infrastructure', tech: 'watsonx for enterprise AI · QRadar SOC · Instana AIOps · FlashSystem' },
  { name: 'MuleSoft', role: 'Enterprise integration & APIs', tech: 'Anypoint Platform · API Manager · Flex Gateway · ERP connectivity · RPA' },
  { name: 'Informatica', role: 'Enterprise MDM & data governance', tech: 'Enterprise MDM · Data Quality · Data Catalog · Data Lineage · Data Integration' },
  { name: 'Dell Technologies', role: 'Enterprise infrastructure & cyber recovery', tech: 'PowerEdge · PowerStore · VxRail · APEX · PowerProtect Cyber Recovery' },
  { name: 'Intel', role: 'Enterprise compute & AI acceleration', tech: 'Xeon Scalable · Gaudi 3 AI · vPro Security · Confidential Computing' },
  { name: 'Google', role: 'Enterprise analytics & AI platform', tech: 'Vertex AI · BigQuery · Looker · Gemini · Enterprise AI Platform' },
  { name: 'Tableau', role: 'Executive BI & enterprise analytics', tech: 'Tableau Cloud · Embedded Analytics · Executive Dashboards · Data Stories' },
  { name: 'Platform9', role: 'Multi-cloud platform & private cloud', tech: 'Managed Kubernetes · OpenStack · KubeVirt · Bare Metal Automation' },
  { name: 'Red Hat', role: 'Enterprise platform engineering', tech: 'OpenShift · Ansible Automation · RHEL · Satellite' },
];

export default function EnterpriseIndustryPage() {

  useEffect(() => { trackIndustryPageView('Enterprise'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Enterprise | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="AI transformation for large enterprises — workforce augmentation, intelligent automation, enterprise AI governance." />
      </Helmet>
      {/* ═══ 1. HERO SECTION — Full-width background ═══ */}
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>Cross-Industry Enterprise</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            <span style={{ color: ACCENT }}>The Enterprise Transformation Platform</span><br />
            — agentic AI, intelligent operations, Zero Trust security.
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            This is Bionic's most comprehensive value proposition. From AI agents operating alongside
            your workforce to enterprise-wide Zero Trust — we deliver the full stack: AI, data,
            applications, integration, cybersecurity, infrastructure, and managed operations.
            Applicable across telecom, retail, manufacturing, logistics, professional services,
            and any enterprise undergoing transformation.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Every enterprise is becoming an AI enterprise — but most aren't ready.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            High-value teams are buried in manual work. Data is trapped in disconnected systems. AI pilots
            never reach production. Security perimeters dissolved with hybrid work — but most enterprises
            are still perimeter-based. And IT operations are overwhelmed by ticket volume without
            self-service or AIOps. The enterprise needs a new operating model.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Workforce overwhelmed', text: 'High-value teams buried in manual, repetitive work — automation opportunity is massive but untapped.' },
              { pre: 'Siloed data', text: 'ERP, CRM, supply chain, HR — data in disconnected systems. No unified enterprise intelligence.' },
              { pre: 'Cross-department processes broken', text: 'Procurement, finance, HR, IT — workflows are slow, manual, error-prone, and unmeasurable.' },
              { pre: 'Legacy CRM & CX', text: 'Customer systems unable to leverage AI. Customer insights trapped in transaction records.' },
              { pre: 'Security perimeter dissolved', text: 'Hybrid work, cloud, third-party access require Zero Trust. Most enterprises are still perimeter-based.' },
              { pre: 'IT overwhelmed', text: 'Ticket volume grows faster than IT teams. No self-service, no automation, no AIOps. IT becomes bottleneck.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. TRANSFORMATION PRIORITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Priorities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Six pillars of the Enterprise Transformation Platform.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The full stack — every capability, one partner.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={`/capabilities/${['ai','data','apps','integration','cyber','ops'][i]}`} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 5. RELEVANT SERVICES ═══ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models covering the full enterprise lifecycle.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={`/services/${['advisory','implementation','operations'][i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#00BFFF] transition-colors">{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. BLUEPRINTS ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for the enterprise.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">Enterprise</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=enterprise" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all enterprise blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The full ecosystem — 10 partners, one accountable relationship.
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

        {/* ═══ 8. EXPECTED OUTCOMES ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>Expected Outcomes</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact — the Enterprise Transformation Platform delivers.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { metric: '30–50%', label: 'Reduction in manual task hours' },
              { metric: 'Accelerated', label: 'Production deployment cadence' },
              { metric: '50–80%', label: 'Decision accuracy improvement vs manual' },
              { metric: 'Phased', label: 'Zero Trust architecture deployment' },
              { metric: '40–60%', label: 'IT ticket deflection through automation' },
              { metric: 'Measurable', label: 'BI and CRM return on investment' },
            ].map((o, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#00BFFF]/30 transition-all">
                <div className="text-xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 9. CTA ═══ */}
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to deploy the Enterprise Transformation Platform?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how agentic AI, Zero Trust, and platform modernization can transform your enterprise — faster than you think.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=enterprise" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                View Enterprise Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

    </div>
    </div>
);
}
