import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Radio, Signal, Shield, Cpu, TrendingUp, BarChart3 } from 'lucide-react';
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
  { pre: 'Spectrum deployed, revenue flat', text: '5G infrastructure is live but monetization models — network slicing, edge, B2B2X — remain untapped.' },
  { pre: 'Monolithic BSS/OSS', text: 'Legacy billing and operations systems cannot support real-time charging or dynamic service orchestration.' },
  { pre: 'Rising infrastructure cost', text: 'Each 5G site increases power, backhaul, and maintenance — without corresponding revenue growth.' },
  { pre: 'Telco cloud complexity', text: 'Virtualized and containerized network functions require a new operating model — not just new hardware.' },
  { pre: 'B2B opportunity gap', text: 'Enterprise customers need private 5G, edge, and IoT — but the operator lacks a unified B2B platform.' },
  { pre: 'CST compliance', text: 'Regulatory requirements from CST demand data sovereignty, security, and service quality standards.' },
];

const priorities = [
  { title: '5G Monetization', desc: 'Network slicing as-a-service, private 5G for enterprises, edge computing — turn spectrum into revenue streams.', icon: Signal },
  { title: 'Telco Cloud Transformation', desc: 'Containerized network functions on Red Hat OpenShift — from monolithic to cloud-native telco infrastructure.', icon: Cpu },
  { title: 'BSS/OSS Modernization', desc: 'Real-time charging, dynamic catalog, API-driven service orchestration — the commercial engine for 5G.', icon: TrendingUp },
  { title: 'Customer 360 & AI', desc: 'Unified customer data across mobile, fixed, and enterprise — predictive churn and next-best-offer intelligence.', icon: BarChart3 },
  { title: 'Enterprise B2B Platform', desc: 'Private 5G, SD-WAN, IoT, and edge compute — packaged for enterprise customers as a unified platform.', icon: Radio },
  { title: 'Network Security & Compliance', desc: 'End-to-end telco security — RAN to core — with continuous CST compliance monitoring.', icon: Shield },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Predictive capacity management, churn intelligence, automated network operations, AI-driven field service' },
  { cap: 'Data, Analytics & Intelligence', app: 'Network analytics lake, real-time KPI dashboards, customer journey analytics, revenue assurance' },
  { cap: 'Integration & Intelligent Operations', app: 'API-led BSS/OSS integration, TM Forum Open APIs, event-driven service orchestration, partner ecosystem integration' },
  { cap: 'Technology Operations', app: 'Zero-touch provisioning, AIOps for telco cloud, 24\u00d77 NOC/SOC convergence, automated incident management' },
];

const capPaths = ['/capabilities/ai', '/capabilities/data', '/capabilities/integration', '/capabilities/ops'];

const services = [
  { svc: 'Consulting & Advisory', app: '5G monetization strategy, telco cloud architecture, BSS/OSS transformation roadmap, CST compliance advisory' },
  { svc: 'Implementation & Delivery', app: 'Telco cloud deployment, BSS/OSS integration, AI/ML model deployment, enterprise B2B platform build' },
  { svc: 'Managed Operations', app: '24\u00d77 telco cloud operations, AIOps, NOC/SOC-as-a-Service, continuous network optimization' },
];

const svcPaths = ['/services/advisory', '/services/implementation', '/services/operations'];

const blueprints = [
  { title: '5G Monetization & Telco Cloud', slug: '5g-monetization-telco-cloud' },
];

const partners = [
  { name: 'IBM', role: 'Network automation & telco AI', tech: 'Cloud Pak for Network Automation \u00b7 watsonx.ai \u00b7 IBM MQ \u00b7 QRadar for telco security' },
  { name: 'Red Hat', role: 'Telco cloud & automation platform', tech: 'OpenShift for telco cloud \u00b7 Ansible for zero-touch provisioning \u00b7 RHEL for network functions' },
  { name: 'Salesforce', role: 'B2B monetization & customer experience', tech: 'Communications Cloud \u00b7 Service Cloud \u00b7 Einstein AI \u00b7 MuleSoft integration' },
  { name: 'Google', role: 'Network analytics & AI', tech: 'BigQuery \u00b7 Vertex AI \u00b7 Google Maps Platform \u00b7 Looker dashboards' },
  { name: 'Dell Technologies', role: 'Telco infrastructure & edge', tech: 'PowerEdge R760 \u00b7 PowerEdge XR for edge \u00b7 PowerStore for network data' },
];

const outcomes = [
  { metric: 'New revenue', label: 'Network slicing-as-a-service' },
  { metric: 'Zero-touch', label: 'Network provisioning & operations' },
  { metric: 'Real-time', label: 'Dynamic BSS/OSS charging' },
  { metric: 'AI-driven', label: 'Predictive churn & capacity' },
  { metric: 'CST-compliant', label: 'Telco cloud architecture' },
];

export default function TelecomIndustryPage() {
  useEffect(() => { trackIndustryPageView('Telecom & Communications'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Telecom | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Telecom AI transformation — 5G monetization, telco cloud, network automation, and BSS/OSS modernization for Saudi operators." />
      </Helmet>

      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <Radio className="w-3.5 h-3.5 mr-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">Industry Focus</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Telecom & Communications
                <span className="block text-[#00BFFF]">Transformation</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                5G monetization. Telco cloud. AI-driven network operations. Bionic helps Saudi operators turn infrastructure investment into revenue — compliant with CST regulations.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Saudi telecom operators face a monetization gap.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Saudi telecom operators need to win.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to telecom transformation.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to telecom.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for telecom.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">Telecom</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=telecom" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all telecom blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Global technology — architected for Saudi telecom sovereignty.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">We are not a vendor. We architect telecom platforms using the world's leading technologies — selected for capability, not reseller incentives.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across telecom transformation.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#00BFFF]/30 transition-all">
                <div className="text-2xl font-bold mb-1" style={{ color: ACCENT }}>{o.metric}</div>
                <div className="text-tiny text-text-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to monetize your 5G investment?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">Let's discuss how 5G monetization, telco cloud, and AI-driven network operations can transform your telecom business.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=telecom" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                View Telecom Blueprints
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
