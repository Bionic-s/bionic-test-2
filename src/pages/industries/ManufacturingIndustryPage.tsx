import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Cog, Gauge, Shield, Cpu, TrendingUp } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const heroBg = `${import.meta.env.BASE_URL}images/hero/ai-agents.avif`;
const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [
  { pre: 'Disconnected production lines', text: 'Production lines operate in isolation — no real-time visibility, no unified data, no cross-line intelligence.' },
  { pre: 'Unused IoT data', text: 'Thousands of sensors generate terabytes of data daily — none of it analyzed, none of it actionable.' },
  { pre: 'Reactive maintenance', text: 'Equipment fails unexpectedly. Maintenance is calendar-based, not condition-based. Downtime costs millions.' },
  { pre: 'OT/IT air gap', text: 'Operational Technology and IT are completely isolated. SCADA does not speak to ERP. Security patches do not reach industrial systems.' },
  { pre: 'Quality by inspection', text: 'Quality control happens after production — not during. Defects are discovered too late, increasing scrap and rework.' },
  { pre: 'No digital twin', text: 'Factory changes are tested on the live floor. No simulation capability. Every experiment carries production risk.' },
];

const priorities = [
  { title: 'Predictive Maintenance', desc: 'AI-driven asset management — predict failures before they happen, schedule maintenance when needed, not on a calendar.', icon: Gauge },
  { title: 'Digital Twin & Simulation', desc: 'Virtual factory replica for simulation, what-if analysis, and production optimization — no risk to live operations.', icon: Cpu },
  { title: 'OT/IT Integration', desc: 'Unified OT/IT architecture — SCADA connects to ERP, security patches reach industrial systems, one operational view.', icon: Factory },
  { title: 'AI Quality Control', desc: 'Real-time computer vision and sensor analytics for in-line quality inspection — detect defects the moment they occur.', icon: TrendingUp },
  { title: 'Industry 4.0 Platform', desc: 'Edge-to-cloud platform for industrial data, AI models, and automation — the factory operating system.', icon: Cog },
  { title: 'Industrial Cybersecurity', desc: 'IEC 62443-compliant OT security — continuous monitoring, threat detection, and secure remote access for industrial environments.', icon: Shield },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Predictive quality, anomaly detection, computer vision inspection, AI-driven production scheduling' },
  { cap: 'Integration & Intelligent Operations', app: 'OT/IT protocol bridging, SCADA-to-ERP integration, industrial IoT data pipeline, MES connectivity' },
  { cap: 'Sovereign Infrastructure & Hybrid Cloud', app: 'Edge compute for factory floor, on-premise AI inference, air-gapped industrial networks, sovereign data storage' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'IEC 62443 compliance, OT threat detection, industrial network segmentation, secure remote access' },
];

const capPaths = ['/capabilities/ai', '/capabilities/integration', '/capabilities/infra', '/capabilities/cyber'];

const services = [
  { svc: 'Consulting & Advisory', app: 'Industry 4.0 readiness assessment, digital twin strategy, OT/IT integration roadmap, compliance gap analysis' },
  { svc: 'Implementation & Delivery', app: 'Edge AI deployment, predictive maintenance platform, digital twin build, OT/IT integration delivery' },
  { svc: 'Managed Operations', app: '24\u00d77 OT security monitoring, AI model management, continuous factory optimization, industrial SOC' },
];

const svcPaths = ['/services/advisory', '/services/implementation', '/services/operations'];

const blueprints = [
  { title: 'Smart Factory & Industry 4.0', slug: 'smart-factory-industry-4' },
];

const partners = [
  { name: 'IBM', role: 'Asset management & industrial AI', tech: 'Maximo \u00b7 watsonx.ai \u00b7 IBM MQ for industrial protocols \u00b7 QRadar for OT security' },
  { name: 'Dell Technologies', role: 'Edge compute & OT infrastructure', tech: 'PowerEdge XR for factory edge \u00b7 PowerStore \u00b7 OEM-ready industrial configurations' },
  { name: 'Intel', role: 'Industrial AI accelerators', tech: 'Gaudi 3 for AI inference \u00b7 Xeon 6 for edge compute \u00b7 OpenVINO for industrial vision' },
  { name: 'Red Hat', role: 'OT automation & platform', tech: 'OpenShift for edge \u00b7 Ansible for OT automation \u00b7 RHEL for industrial workloads' },
  { name: 'Platform9', role: 'Edge Kubernetes for factory', tech: 'Managed K8s for edge \u00b7 KubeVirt for VM modernization \u00b7 Remote cluster management' },
];

const outcomes = [
  { metric: 'Predictive', label: 'Maintenance reduces downtime' },
  { metric: 'Real-time', label: 'AI quality inspection' },
  { metric: 'Unified', label: 'OT/IT operational visibility' },
  { metric: 'Digital twin', label: 'Simulation before changes' },
  { metric: 'IEC 62443', label: 'Industrial security compliance' },
];

export default function ManufacturingIndustryPage() {
  useEffect(() => { trackIndustryPageView('Manufacturing'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Manufacturing | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Manufacturing AI transformation — smart factory, Industry 4.0, predictive maintenance, and OT/IT integration for Saudi manufacturers." />
      </Helmet>

      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <Factory className="w-3.5 h-3.5 mr-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">Industry Focus</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Manufacturing
                <span className="block text-[#00BFFF]">Transformation</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                Smart factory. Predictive maintenance. OT/IT integration. Bionic helps Saudi manufacturers deploy Industry 4.0 — from edge to enterprise, Made in Saudi.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Saudi factories operate with disconnected systems and untapped data.</h2>
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {realityItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-xs font-bold text-[#00BFFF] mt-0.5 min-w-[140px]">{item.pre}</span>
                  <p className="text-sm text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Transformation Priorities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Saudi manufacturers need to compete globally.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priorities.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <p.icon className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                <h3 className="font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Relevant Capabilities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to manufacturing transformation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={capPaths[i]} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/25 transition-all duration-300 flex items-start gap-3 group">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{c.cap}</h3>
                  <p className="text-tiny text-text-muted leading-relaxed">{c.app}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to manufacturing.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={i} to={svcPaths[i]} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-[#00BFFF] transition-colors">{s.svc}</h3>
                <p className="text-tiny text-text-muted leading-relaxed">{s.app}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for manufacturing.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">Manufacturing</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=manufacturing" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all manufacturing blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Industry 4.0 technology — architected for Saudi manufacturing.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">We are not a vendor. We architect smart factory platforms using the world's leading industrial technologies — selected for capability, not reseller incentives.</p>
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

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Expected Outcomes</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across manufacturing transformation.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#00BFFF]/30 transition-all">
                <div className="text-2xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="pb-20 md:pb-28 lg:pb-32" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to deploy Industry 4.0 in your factory?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">Let's discuss how predictive maintenance, digital twin, and OT/IT integration can transform your manufacturing operations.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=manufacturing" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                View Manufacturing Blueprints
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
