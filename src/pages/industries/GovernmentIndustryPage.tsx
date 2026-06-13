import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Cpu, GitBranch, BarChart3, TrendingUp } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#059669';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const priorities = [
  { title: 'National AI Enablement', desc: 'Building the Kingdom\'s AI capability — national AI platforms, model governance, AI talent acceleration, and cross-agency AI strategy.', icon: Cpu },
  { title: 'Sovereign Data & AI Platforms', desc: 'NCA-compliant AI infrastructure, sovereign data lakes, national compute capacity, and GPU clusters purpose-built for government AI workloads.', icon: Shield },
  { title: 'Cross-Ministry Intelligence', desc: 'Inter-ministerial data fabric enabling unified citizen data, secure data sharing, and cross-agency analytics — breaking down decades of silos.', icon: GitBranch },
  { title: 'Vision 2030 Program Delivery', desc: 'AI-powered program management, KPI tracking, transformation governance, and intelligent Etimad procurement.', icon: TrendingUp },
  { title: 'National Cybersecurity Operations', desc: '24×7 national SOC, threat intelligence sharing, critical infrastructure protection, and continuous NCA compliance monitoring.', icon: Shield },
  { title: 'Citizen Service Transformation', desc: 'AI-powered citizen portals, intelligent document processing, and automated case management delivering public service excellence.', icon: BarChart3 },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Document intelligence for Etimad, citizen service AI, national-scale NLP, sovereign AI model governance' },
  { cap: 'Data, Analytics & Intelligence', app: 'Inter-ministerial data fabric, national KPI dashboards, open data platforms, citizen analytics' },
  { cap: 'Integration & Intelligent Ops', app: 'API-led government system integration, cross-agency workflow orchestration, ESB modernization' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'National SOC, NCA ECC compliance, critical infrastructure protection, Zero Trust for government' },
  { cap: 'Sovereign Infrastructure & Hybrid Cloud', app: 'NCA-compliant datacenter, sovereign cloud, air-gapped AI infrastructure, GPU clusters' },
  { cap: 'Technology Operations', app: '24×7 NOC for national infrastructure, sovereign platform operations, classified workload management' },
];

const services = [
  { svc: 'Consulting & Advisory', app: 'NCA/NDMO compliance advisory, AI readiness for government, sovereign architecture design, Vision 2030 program alignment' },
  { svc: 'Implementation & Delivery', app: 'Sovereign cloud deployment, national data fabric build, citizen service platform delivery, GPU cluster deployment' },
  { svc: 'Managed Operations', app: '24×7 SOC-as-a-Service, sovereign platform ops, classified workload operations, national NOC' },
];

const blueprints = [
  { title: 'Sovereign AI Platform', slug: 'sovereign-ai-platform' },
  { title: 'Inter-Ministry Data Fabric', slug: 'inter-ministry-data-fabric' },
  { title: 'National Cybersecurity Operations Center', slug: 'national-soc' },
];

const partners = [
  { name: 'IBM', role: 'Sovereign AI & cybersecurity for government', tech: 'watsonx for government AI · QRadar for national SOC · Cloud Pak for sovereign data' },
  { name: 'Dell Technologies', role: 'Sovereign infrastructure & cyber recovery', tech: 'PowerEdge for air-gapped datacenters · PowerProtect Cyber Recovery · PowerStore for sovereign data' },
  { name: 'Intel', role: 'National AI infrastructure & confidential compute', tech: 'Gaudi 3 AI Accelerators for national AI · Intel TDX for classified workloads · Xeon for government compute' },
  { name: 'Platform9', role: 'Private cloud for classified government workloads', tech: 'Managed Kubernetes for sovereign platforms · OpenStack for government cloud · KubeVirt for VM modernization' },
  { name: 'Informatica', role: 'Cross-ministry data governance & MDM', tech: 'MDM for citizen data · Data Quality · Data Catalog · Data Lineage for government analytics' },
  { name: 'MuleSoft', role: 'Government API-led integration', tech: 'Anypoint Platform for cross-agency APIs · Flex Gateway for secure government integration' },
  { name: 'Google', role: 'AI & analytics for government intelligence', tech: 'Vertex AI · BigQuery for national analytics · Looker for government dashboards' },
  { name: 'Tableau', role: 'Executive dashboards & public transparency', tech: 'Tableau Cloud · Embedded Analytics · Public-facing open data dashboards' },
  { name: 'Red Hat', role: 'OpenShift, Ansible & open-source infrastructure', tech: 'OpenShift · Ansible Automation · RHEL · Satellite' },
];

export default function GovernmentIndustryPage() {

  useEffect(() => { trackIndustryPageView('Government & Public Sector'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 1. HERO ═══ */}
        <motion.section className="mb-28" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>Government & Public Sector</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            Sovereign digital transformation<br />
            <span style={{ color: ACCENT }}>for the Kingdom's public sector.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            From national AI enablement to NCA-compliant sovereign cloud, from cross-ministry data fabrics
            to Vision 2030 program delivery — we help Saudi government entities accelerate national transformation
            with AI, automation, and sovereign-grade technology.
          </p>
        </motion.section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Government transformation is national transformation — and it's the hardest kind.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Ministries operate isolated data environments. Legacy infrastructure cannot scale for AI.
            Procurement is manual and compliance-intensive. And every system must meet sovereignty,
            security, and regulatory requirements that don't exist in the private sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Etimad complexity', text: 'Bid preparation is manual, slow, and compliance-intensive — missed opportunities cost millions in public value.' },
              { pre: 'NCA & NDMO gaps', text: 'Legacy government systems struggle to meet evolving cybersecurity and data management standards.' },
              { pre: 'Citizen service backlogs', text: 'Manual processes create delays in citizen services — damaging public trust and Vision 2030 momentum.' },
              { pre: 'Inter-agency data silos', text: 'Ministries operate isolated data environments — no unified national data fabric, no cross-agency intelligence.' },
              { pre: 'Legacy infrastructure', text: 'Aging datacenters unable to support AI workloads or scale for national transformation programs.' },
              { pre: 'Sovereignty requirements', text: 'Data residency, national cloud, and classified workload mandates require specialized sovereign architecture.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#059669]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. TRANSFORMATION PRIORITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Priorities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Six priorities aligned with Vision 2030.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#059669]/25 transition-all duration-300">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to government transformation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={`/capabilities/${['ai','data','integration','cyber','infra','ops'][i]}`} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#059669]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#059669] transition-colors">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 5. RELEVANT SERVICES ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to government.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={`/services/${['advisory','implementation','operations'][i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#059669]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#059669] transition-colors">{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. BLUEPRINTS ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for government.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#059669]/25 transition-all duration-300">
                <span className="text-tiny text-[#059669]/60 mb-2 block">Government</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#059669] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#059669]/40 group-hover:text-[#059669] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=government" className="inline-flex items-center gap-1.5 text-[#059669] text-sm font-medium hover:underline">
              View all government blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Global technology — architected for Saudi sovereignty.
          </h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            We are not a vendor. We architect sovereign platforms using the world's leading technologies —
            selected for capability, not reseller incentives. Every partner below is deployed within
            NCA-compliant, sovereign-grade architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#059669]/25 transition-all duration-300">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across government transformation.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { metric: 'Accelerated', label: 'Citizen service delivery' },
              { metric: 'Multi-entity', label: 'Data fabric architecture' },
              { metric: 'Designed for', label: 'NCA/NDMO compliance alignment' },
              { metric: 'Streamlined', label: 'Etimad bid preparation workflows' },
              { metric: 'Real-time', label: 'National cyber threat detection' },
            ].map((o, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#059669]/30 transition-all">
                <div className="text-2xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
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
              Ready to accelerate your government transformation?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how sovereign AI, cross-ministry intelligence, and Vision 2030-aligned delivery can transform your entity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #05966920' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=government" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#059669]/30">
                View Government Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
