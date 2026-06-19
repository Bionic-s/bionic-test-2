import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, TrendingUp, Shield, BarChart3, Wrench } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
const heroBg = `${import.meta.env.BASE_URL}images/it-infrastructure.avif`;


const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const priorities = [
  { title: 'Predictive Maintenance', desc: 'AI-powered equipment failure prediction using IoT sensor analytics and digital twins — moving from calendar-based to condition-based maintenance.', icon: Wrench },
  { title: 'OT/IT Cybersecurity Convergence', desc: 'Layered OT security with network segmentation, continuous threat detection, and incident response across IT and industrial control systems.', icon: Shield },
  { title: 'Edge-to-Cloud Intelligence', desc: 'Real-time analytics at the edge with centralized AI model management — intelligence at every layer of the energy value chain.', icon: Cpu },
  { title: 'Carbon & Energy Intelligence', desc: 'AI-driven emissions tracking, energy optimization, and sustainability reporting — operationalizing the energy transition.', icon: BarChart3 },
  { title: 'Digital Twin Operations', desc: 'Virtual replicas of physical assets for simulation, training, and operational optimization — reducing risk and accelerating decisions.', icon: TrendingUp },
  { title: 'Supply Chain & Logistics AI', desc: 'Intelligent logistics, demand forecasting, and supplier risk management for energy supply chains.', icon: TrendingUp },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Predictive maintenance AI, anomaly detection, computer vision for asset inspection, digital twin intelligence' },
  { cap: 'Data, Analytics & Intelligence', app: 'IoT data platform, real-time operational dashboards, digital twin data integration, emissions analytics' },
  { cap: 'Integration & Intelligent Ops', app: 'OT/IT integration, edge-to-cloud data pipelines, industrial protocol integration, SCADA connectivity' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'OT/IT security, industrial control protection, IEC 62443 compliance, threat detection for ICS' },
  { cap: 'Sovereign Infrastructure & Hybrid Cloud', app: 'Edge computing infrastructure, hybrid cloud for remote operations, AI infrastructure for energy' },
  { cap: 'Technology Operations', app: 'Edge-to-cloud platform ops, unified OT/IT observability, 24×7 NOC for energy operations' },
];

const services = [
  { svc: 'Consulting & Advisory', app: 'OT/IT convergence strategy, predictive maintenance roadmap, carbon intelligence design, digital twin architecture' },
  { svc: 'Implementation & Delivery', app: 'IoT platform deployment, digital twin implementation, edge AI rollout, OT security deployment' },
  { svc: 'Managed Operations', app: '24×7 OT/IT observability, predictive maintenance ops, edge fleet management, carbon monitoring' },
];

const blueprints = [
  { title: 'Industrial Intelligence & Predictive Ops', slug: 'industrial-intelligence-predictive-ops' },
  { title: 'OT/IT Integration & Secure Ops', slug: 'ot-it-integration-secure-ops' },
];

const partners = [
  { name: 'Dell Technologies', role: 'Edge infrastructure & industrial data', tech: 'PowerEdge for remote sites · Streaming Data Platform · PowerStore for operational data' },
  { name: 'IBM', role: 'Predictive AI & OT security operations', tech: 'Maximo for asset management · watsonx for predictive AI · QRadar for OT SOC' },
  { name: 'Intel', role: 'Edge AI & industrial compute', tech: 'OpenVINO for computer vision · Xeon for digital twin · Edge AI accelerators' },
  { name: 'Tableau', role: 'Operational dashboards & emissions analytics', tech: 'Tableau Cloud · Embedded Analytics · Real-time operational dashboards' },
  { name: 'Salesforce', role: 'Energy CRM & field service', tech: 'Energy CRM · Field Service Management · Asset lifecycle management' },
  { name: 'Red Hat', role: 'Industrial platform & automation', tech: 'OpenShift · Ansible Automation · RHEL · Edge Computing' },
];

export default function OilGasIndustryPage() {

  useEffect(() => { trackIndustryPageView('Oil, Gas & Energy'); }, []);
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
          <SectionLabel>Oil, Gas & Energy</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            Intelligent energy operations —<br />
            <span style={{ color: ACCENT }}>from predictive maintenance to carbon intelligence.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            From AI-driven predictive maintenance on drilling equipment to OT/IT cybersecurity, from edge-to-cloud
            intelligence to carbon tracking — we help Saudi energy companies maximize asset uptime, reduce
            operational risk, and drive intelligent field operations.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Operational risk in energy is measured in millions per hour of downtime.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Equipment failures cost millions in lost production. Industrial control systems are increasingly
            connected to IT networks without adequate cybersecurity. Remote field operations lack real-time
            visibility. And the energy transition demands carbon intelligence that most operations weren't designed to deliver.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Unplanned downtime', text: 'Equipment failures cost millions — and maintenance is still calendar-based, not condition-based.' },
              { pre: 'OT/IT convergence risk', text: 'Industrial control systems connected to IT networks without adequate segmentation or threat detection.' },
              { pre: 'Remote operations blind', text: 'Limited real-time visibility into distributed assets across vast geographical areas.' },
              { pre: 'Data trapped in historians', text: 'Operational data collected for years — but not analyzed. No AI-driven insight extraction.' },
              { pre: 'Environmental compliance', text: 'Manual emissions monitoring and reporting across multiple jurisdictions — slow and error-prone.' },
              { pre: 'Energy transition pressure', text: 'Carbon tracking, efficiency optimization, and sustainability reporting becoming operational mandates.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#D97706]/20 transition-all duration-300">
                <p className="text-tiny font-semibold mb-1" style={{ color: ACCENT }}>{item.pre}</p>
                <p className="text-tiny text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. TRANSFORMATION PRIORITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Priorities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Six priorities for the intelligent energy enterprise.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to energy operations.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={`/capabilities/${['ai','data','integration','cyber','infra','ops'][i]}`} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#D97706]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#D97706] transition-colors">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 5. RELEVANT SERVICES ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to energy.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={`/services/${['advisory','implementation','operations'][i]}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#D97706] transition-colors">{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. BLUEPRINTS ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for energy.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[480px]">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
                <span className="text-tiny text-[#D97706]/60 mb-2 block">Oil & Gas</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#D97706] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#D97706]/40 group-hover:text-[#D97706] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/blueprints?industry=oil-gas" className="inline-flex items-center gap-1.5 text-[#D97706] text-sm font-medium hover:underline">
              View all energy blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Technology partners — engineered for industrial environments.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#D97706]/25 transition-all duration-300">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across energy operations.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { metric: '30–50%', label: 'Fewer unplanned downtime events' },
              { metric: '20%+', label: 'Improved asset utilization' },
              { metric: '99.9%', label: 'Target OT network availability' },
              { metric: 'Real-time', label: 'OT threat detection and containment' },
              { metric: 'Comprehensive', label: 'Automated emissions monitoring' },
            ].map((o, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#D97706]/30 transition-all">
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
              Ready to transform your energy operations with intelligence?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how predictive maintenance, OT/IT security, and carbon intelligence can reduce risk and maximize asset value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=oil-gas" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#D97706]/30">
                View Energy Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

    </div>
);
}
