import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, MapPin, Package, TrendingUp, Shield, Gauge } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const heroBg = `${import.meta.env.BASE_URL}images/optimized/professional-services-ai-hero.webp`;
const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const realityItems = [
  { pre: 'No real-time tracking', text: '2,000+ vehicles operate without live visibility — ETAs are guesses, delays are discovered after the fact.' },
  { pre: 'Manual route planning', text: 'Routes are planned manually without considering traffic, weather, or real-time conditions. Fuel is wasted.' },
  { pre: 'Reactive fleet maintenance', text: 'Vehicles break down on the road. Maintenance is reactive. Fleet availability suffers.' },
  { pre: 'Cold chain gaps', text: 'Temperature-sensitive shipments lack continuous monitoring — risking pharmaceutical and food safety compliance.' },
  { pre: 'Low fleet utilization', text: 'Assets are underutilized. Empty miles are common. Fleet efficiency metrics are unknown.' },
  { pre: 'Customer visibility gap', text: 'Customers cannot track shipments in real time. Customer service relies on phone calls and manual checks.' },
];

const priorities = [
  { title: 'Real-Time Fleet Visibility', desc: 'Live tracking, geofencing, and ETA prediction — know where every asset is, every second.', icon: MapPin },
  { title: 'AI Route Optimization', desc: 'Dynamic route planning considering traffic, weather, delivery windows, and vehicle capacity — minimizing fuel and time.', icon: TrendingUp },
  { title: 'Predictive Fleet Maintenance', desc: 'AI-driven vehicle health monitoring — predict failures, schedule maintenance, maximize fleet availability.', icon: Gauge },
  { title: 'Cold Chain Intelligence', desc: 'Real-time temperature, humidity, and shock monitoring — compliance for pharmaceutical and food supply chains.', icon: Shield },
  { title: 'Connected Logistics Platform', desc: 'Unified command center integrating telematics, IoT, orders, and customer communication — one operational view.', icon: Truck },
  { title: 'Customer Experience', desc: 'Real-time shipment tracking, automated notifications, self-service portal — customer visibility without phone calls.', icon: Package },
];

const capabilities = [
  { cap: 'Integration & Intelligent Operations', app: 'Telematics integration, IoT data pipeline, order-to-delivery orchestration, logistics API ecosystem' },
  { cap: 'Data, Analytics & Intelligence', app: 'Fleet data lake, route optimization analytics, driver performance analytics, delivery KPI dashboards' },
  { cap: 'Enterprise AI & Automation', app: 'AI route optimization, predictive ETA, vehicle health prediction, automated dispatch, cold chain anomaly detection' },
  { cap: 'Technology Operations', app: '24\u00d77 fleet command center, real-time alerting, automated SLA monitoring, continuous route optimization' },
];

const capPaths = ['/capabilities/integration', '/capabilities/data', '/capabilities/ai', '/capabilities/ops'];

const services = [
  { svc: 'Consulting & Advisory', app: 'Fleet digitization strategy, logistics platform selection, cold chain compliance roadmap, operating model design' },
  { svc: 'Implementation & Delivery', app: 'Fleet tracking deployment, AI route optimization, telematics integration, command center build' },
  { svc: 'Managed Operations', app: '24\u00d77 fleet command center, continuous AI optimization, cold chain monitoring, SLA management' },
];

const svcPaths = ['/services/advisory', '/services/implementation', '/services/operations'];

const blueprints = [
  { title: 'Connected Logistics & Fleet Intelligence', slug: 'connected-logistics-fleet-intelligence' },
];

const partners = [
  { name: 'Salesforce', role: 'Field service & customer experience', tech: 'Field Service \u00b7 Service Cloud \u00b7 Einstein AI \u00b7 Experience Cloud for customer portal' },
  { name: 'MuleSoft', role: 'Logistics integration & APIs', tech: 'Anypoint Platform \u00b7 Telematics connectors \u00b7 Order-to-delivery integration' },
  { name: 'Google', role: 'Fleet AI, maps & analytics', tech: 'BigQuery \u00b7 Vertex AI \u00b7 Google Maps Platform \u00b7 Route Optimization API' },
  { name: 'Tableau', role: 'Fleet command center & analytics', tech: 'Tableau Cloud \u00b7 Fleet KPI dashboards \u00b7 Real-time operational visibility' },
  { name: 'IBM', role: 'IoT ingestion & predictive AI', tech: 'IBM MQ \u00b7 watsonx.ai \u00b7 Maximo for fleet assets \u00b7 Predictive maintenance models' },
];

const outcomes = [
  { metric: 'Fuel savings', label: 'AI-powered route optimization' },
  { metric: 'Higher', label: 'Fleet utilization rates' },
  { metric: 'Predictive', label: 'Maintenance prevents breakdowns' },
  { metric: 'Cold chain', label: 'Real-time compliance monitoring' },
  { metric: 'Real-time', label: 'Customer shipment visibility' },
];

export default function TransportLogisticsIndustryPage() {
  useEffect(() => { trackIndustryPageView('Transport & Logistics'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Logistics | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Logistics AI transformation — connected fleet, route optimization, cold chain intelligence for Saudi transport and logistics operators." />
      </Helmet>

      <section className="relative -mt-32 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
        <div className="relative z-10 pt-44 pb-24">
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
                <Truck className="w-3.5 h-3.5 mr-2 text-[#00BFFF]" />
                <span className="text-tiny text-[#00BFFF] font-semibold tracking-wider uppercase">Industry Focus</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transport & Logistics
                <span className="block text-[#00BFFF]">Transformation</span>
              </h1>
              <p className="text-xl text-text-muted max-w-[720px]">
                Connected fleet. AI route optimization. Real-time visibility. Bionic helps Saudi logistics operators move smarter — from telematics to command center.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Saudi logistics operators run blind — without real-time visibility or intelligence.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Saudi logistics operators need to lead.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to logistics transformation.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to logistics.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for logistics.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">Logistics</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?industry=logistics" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all logistics blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Connected logistics technology — architected for Saudi fleets.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">We are not a vendor. We architect connected logistics platforms using the world's leading technologies — selected for capability, not reseller incentives.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across logistics transformation.</h2>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to connect your fleet?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">Let's discuss how real-time fleet visibility, AI route optimization, and predictive maintenance can transform your logistics operation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=logistics" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                View Logistics Blueprints
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
