import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { trackArchitectureView } from '../lib/analytics';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#D97706';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const layers = [
  {
    num: 1,
    title: 'Business Outcomes',
    subtitle: 'What changes when transformation succeeds?',
    desc: 'Every transformation starts with a business outcome — revenue growth, cost optimization, risk reduction, experience transformation, or national capability.',
    items: ['Revenue Growth', 'Cost Optimization', 'Risk Reduction', 'Experience Transformation', 'National Capability'],
    link: { label: 'Explore Enterprise Value System', to: '/value' },
  },
  {
    num: 2,
    title: 'Enterprise Value System',
    subtitle: 'How does value compound across four horizons?',
    desc: 'Value compounds across four horizons — cost optimization (0-12 months), risk reduction (6-18 months), revenue growth (12-36 months), and market leadership (24-60 months).',
    items: ['Cost Optimization: 0-12 months', 'Risk Reduction: 6-18 months', 'Revenue Growth: 12-36 months', 'Market Leadership: 24-60 months'],
    link: { label: 'Explore Enterprise Value System', to: '/value' },
  },
  {
    num: 3,
    title: 'Industries',
    subtitle: 'Where do we apply this architecture?',
    desc: 'Five regulated sectors where our architecture solves real industry challenges — government, banking, oil & gas, healthcare, and cross-industry enterprise.',
    items: ['Government & Public Sector', 'Banking & Financial Services', 'Oil, Gas & Energy', 'Healthcare', 'Cross-Industry Enterprise'],
    link: { label: 'Explore all industries', to: '/industries/government' },
  },
  {
    num: 4,
    title: 'Capabilities',
    subtitle: 'What do we actually do?',
    desc: 'Seven integrated capabilities spanning Intelligence, Automation, and Trust — composable across industries, not siloed products.',
    items: ['Enterprise AI & Automation', 'Data, Analytics & Intelligence', 'Business Applications & CX', 'Integration & Intelligent Ops', 'Cybersecurity & Cyber Resilience', 'Sovereign Infrastructure', 'Technology Operations'],
    link: { label: 'Explore all capabilities', to: '/capabilities/ai' },
  },
  {
    num: 5,
    title: 'Services',
    subtitle: 'How do we deliver?',
    desc: 'Three delivery models — Advisory, Implementation, and Managed Operations — combining as needed across every industry and capability.',
    items: ['Consulting & Advisory: Strategy, architecture, roadmaps', 'Implementation & Delivery: Deployment, integration, adoption', 'Managed Operations: 24×7 ops, SRE, AIOps, continuous optimization'],
    link: { label: 'Explore all services', to: '/services' },
  },
  {
    num: 6,
    title: 'Transformation Blueprints',
    subtitle: 'Can you prove this works?',
    desc: 'Twelve reference architectures mapping industries → capabilities → services → partners → products → outcomes.',
    items: ['12 blueprints across 5 industries', 'Dual access: from Industries and Capabilities', 'Full stack mapping: industry, capability, services, partners, products'],
    link: { label: 'Explore all blueprints', to: '/blueprints' },
  },
  {
    num: 7,
    title: 'Applications & Platforms',
    subtitle: 'What technology runs the transformation?',
    desc: 'We architect, deploy, and operate enterprise platforms — Salesforce for CRM, watsonx and Vertex AI for intelligence, MuleSoft for integration, and Informatica for data governance.',
    items: ['CRM & CX: Salesforce (Sales, Service, Marketing, Health Cloud)', 'AI & ML: watsonx, Vertex AI, Einstein, Agentforce', 'Integration: MuleSoft Anypoint, event-driven architecture', 'Data & BI: Informatica MDM, Tableau, BigQuery', 'Automation: Ansible, RPA, intelligent workflow'],
    link: { label: 'Explore our ecosystem', to: '/about' },
  },
  {
    num: 8,
    title: 'Data & Intelligence',
    subtitle: 'Where does the intelligence come from?',
    desc: 'Unified, governed, AI-ready data platforms — data fabric and lakehouse architectures, master data management, governance for PDPL compliance, and analytical engines powering every layer above.',
    items: ['Data Platforms: Lakehouse, fabric, streaming', 'MDM: Customer 360, citizen, asset, patient', 'Data Governance: Quality, lineage, catalog', 'Analytics & BI: Dashboards, self-service, embedded', 'AI-Ready Data: Feature stores, vector DBs, pipelines'],
    link: { label: 'Explore Data & Analytics capability', to: '/capabilities/data' },
  },
  {
    num: 9,
    title: 'Infrastructure & Security',
    subtitle: 'What is the trust foundation?',
    desc: 'Sovereign infrastructure architected for trust — Dell compute and storage, Intel AI acceleration, Platform9 and Red Hat cloud platforms, cyber recovery, and NCA-compliant security operations.',
    items: ['Compute: Dell PowerEdge, Intel Xeon, Gaudi AI', 'Storage: PowerStore, PowerMax, FlashSystem', 'Cloud: Platform9 K8s, Red Hat OpenShift', 'Cyber Recovery: Isolated vault, immutability', 'Security: QRadar SOC, Zero Trust, NCA-compliant'],
    link: { label: 'Explore Infrastructure capability', to: '/capabilities/infra' },
  },
  {
    num: 10,
    title: 'Operations & Continuous Optimization',
    subtitle: 'How do we sustain and compound value?',
    desc: 'Operations protect and compound value quarter over quarter — AIOps, SRE, FinOps, SOC-as-a-Service, and quarterly continuous optimization reviews.',
    items: ['AIOps & Observability: Instana + Turbonomic', 'SRE: Error budgets, SLOs, blameless postmortems', 'FinOps: Cost visibility, chargeback, optimization', 'SOC-as-a-Service: 24×7 security, threat hunting', 'Continuous Optimization: Quarterly reviews, measured improvement'],
    link: { label: 'Explore Technology Operations', to: '/capabilities/ops' },
  },
];

export default function ArchitecturePage() {

  useEffect(() => { trackArchitectureView(); }, []);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 1. HERO ═══ */}
        <motion.section ref={heroRef} {...fadeIn} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Transformation Architecture</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            The Bionic Enterprise<br />
            <span style={{ color: ACCENT }}>Transformation Architecture.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            10 interconnected layers. One integrated approach. From business outcomes to continuous optimization —
            this is how we architect, deliver, and sustain enterprise transformation for Saudi Arabia.
          </p>
        </motion.section>

        {/* ═══ FLOW SUMMARY ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6" style={{ color: ACCENT }} />
              <h2 className="text-xl md:text-2xl font-bold">How it flows</h2>
            </div>
            <div className="text-lg text-text-muted leading-relaxed space-y-3">
              <p><strong className="text-text-primary">Business Outcomes</strong> define <em>why</em> we transform.</p>
              <p><strong className="text-text-primary">The Enterprise Value System</strong> defines <em>how value compounds</em> across time.</p>
              <p><strong className="text-text-primary">Industries</strong> define <em>where</em> — the regulatory and competitive context.</p>
              <p><strong className="text-text-primary">Capabilities</strong> define <em>what</em> we do — seven integrated domains.</p>
              <p><strong className="text-text-primary">Services</strong> define <em>how</em> we deliver — three cross-cutting models.</p>
              <p><strong className="text-text-primary">Transformation Blueprints</strong> prove <em>it works</em> — 12 reference architectures.</p>
              <p><strong className="text-text-primary">Applications & Platforms</strong> provide the <em>technology</em>.</p>
              <p><strong className="text-text-primary">Data & Intelligence</strong> fuel <em>everything above</em>.</p>
              <p><strong className="text-text-primary">Infrastructure & Security</strong> provide the <em>trust foundation</em>.</p>
              <p><strong className="text-text-primary">Operations & Optimization</strong> <em>sustain and compound</em> the value.</p>
            </div>
          </div>
        </motion.section>

        {/* ═══ 10 LAYERS ═══ */}
        {layers.map((layer, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
          return (
            <motion.section
              key={layer.num}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-20"
            >
              {/* Layer header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: ACCENT }}
                >
                  {layer.num}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">{layer.title}</h2>
                  <p className="text-sm text-text-muted mt-0.5">{layer.subtitle}</p>
                </div>
              </div>

              {/* Layer card */}
              <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8 ml-14">
                <p className="text-text-muted leading-relaxed mb-6">{layer.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
                  {layer.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to={layer.link.to}
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2 transition-all"
                  style={{ color: ACCENT }}
                >
                  {layer.link.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.section>
            );
        })}

        {/* ═══ THE COMPLETE PICTURE ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12">
            <SectionLabel>The Complete Picture</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ten layers. Three pillars. One accountable partner.</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-[720px]">
              Every other page on this website is a detail view of one or more of these layers.
              Capability pages zoom into Layer 4. Industry pages zoom into Layer 3. Service pages zoom into Layer 5.
              Blueprints bridge Layers 3-6. The Enterprise Value System is Layer 2.
              This architecture page is the connective tissue — the single view that shows how everything composes.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Capabilities', path: '/capabilities/ai' },
                { label: 'Services', path: '/services' },
                { label: 'Industries', path: '/industries/government' },
                { label: 'Blueprints', path: '/blueprints' },
                { label: 'Enterprise Value System', path: '/value' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-[#D97706]/30 transition-all">
                  {link.label} <ArrowRight className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to see this architecture applied to your enterprise?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how these 10 layers map to your specific industry, your transformation priorities, and your business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #D9770620' }}
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blueprints"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#D97706]/30"
              >
                View Transformation Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
