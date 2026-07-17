import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Cpu, Users, Shield, TrendingUp } from 'lucide-react';
import { trackIndustryPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';
const heroBg = `${import.meta.env.BASE_URL}images/ai_case_study_image.avif`;


const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const priorities = [
  { title: 'Clinical AI & Diagnostics', desc: 'AI-powered medical imaging, pathology AI, clinical decision support, and early warning systems — accelerating diagnosis and improving outcomes.', icon: Cpu },
  { title: 'Intelligent Patient Experience', desc: 'Unified patient portal, AI triage, automated scheduling, and personalized care journeys across the entire healthcare journey.', icon: Heart },
  { title: 'Healthcare Data Platform', desc: 'Unified clinical data lakehouse, patient 360 analytics, population health dashboards, and research data platforms.', icon: TrendingUp },
  { title: 'Operational Intelligence', desc: 'Predictive bed management, AI staffing optimization, supply chain intelligence, and resource forecasting.', icon: TrendingUp },
  { title: 'PHI Security & Compliance', desc: 'Zero Trust for healthcare, PHI audit, ransomware resilience, medical device security — continuous compliance, not periodic audit.', icon: Shield },
  { title: 'Health Cluster Integration', desc: 'Cross-facility data sharing, referral orchestration, and cluster-wide analytics for Saudi Arabia\'s new health cluster model.', icon: Users },
];

const capabilities = [
  { cap: 'Enterprise AI & Automation', app: 'Medical imaging AI, clinical NLP, predictive analytics, automated clinical documentation, early warning systems' },
  { cap: 'Data, Analytics & Intelligence', app: 'Clinical data lakehouse, patient 360 analytics, population health dashboards, research data platforms' },
  { cap: 'Business Applications & CX', app: 'Patient experience platform, CRM for healthcare, intelligent contact center, patient portal' },
  { cap: 'Integration & Intelligent Ops', app: 'EMR/PACS/LIS integration, health cluster data sharing, FHIR API architecture, referral orchestration' },
  { cap: 'Cybersecurity & Cyber Resilience', app: 'PHI security, medical device security, ransomware protection, Zero Trust for healthcare' },
  { cap: 'Sovereign Infrastructure & Hybrid Cloud', app: 'PHI-compliant infrastructure, high-availability clinical platforms, edge infrastructure for imaging' },
];

const services = [
  { svc: 'Consulting & Advisory', app: 'Digital health strategy, clinical AI roadmap, PHI compliance, health cluster architecture design' },
  { svc: 'Implementation & Delivery', app: 'Clinical AI deployment, patient platform delivery, health data platform build, FHIR integration' },
  { svc: 'Managed Operations', app: '24×7 clinical platform ops, PHI security operations, high-availability management, imaging platform ops' },
];

const blueprints = [
  { title: 'Intelligent Patient Experience', slug: 'intelligent-patient-experience' },
  { title: 'Clinical Intelligence & Medical AI', slug: 'clinical-intelligence-medical-ai' },
];

const partners = [
  { name: 'Salesforce', role: 'Health Cloud & patient CRM', tech: 'Health Cloud · Patient 360 · Intelligent Contact Center · Patient Journey Analytics' },
  { name: 'IBM', role: 'Clinical AI & healthcare infrastructure', tech: 'watsonx for clinical AI · FlashSystem for PACS storage · QRadar for PHI security' },
  { name: 'MuleSoft', role: 'Healthcare integration & FHIR APIs', tech: 'Anypoint Platform for healthcare · FHIR API connectivity · EMR integration · Health cluster orchestration' },
  { name: 'Informatica', role: 'Clinical MDM & healthcare data governance', tech: 'Patient 360 MDM · Data Quality for clinical data · Data Catalog · Healthcare data lineage' },
  { name: 'Google', role: 'Healthcare data platform & AI', tech: 'Healthcare Data Engine · Vertex AI for medical imaging · BigQuery for population health' },
  { name: 'Dell Technologies', role: 'PHI-compliant infrastructure & cyber recovery', tech: 'PowerProtect for PHI · PowerScale for PACS · VxRail for EMR · Cyber Recovery Vault' },
  { name: 'Intel', role: 'Clinical AI acceleration & edge compute', tech: 'Gaudi 3 for medical imaging AI · OpenVINO for edge diagnostics · Xeon for clinical workloads' },
  { name: 'Tableau', role: 'Clinical dashboards & population health analytics', tech: 'Tableau Cloud · Embedded Analytics · Clinical KPI dashboards · Population health views' },
];

export default function HealthcareIndustryPage() {

  useEffect(() => { trackIndustryPageView('Healthcare'); }, []);
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
        <title>Healthcare | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="AI transformation for healthcare — medical imaging diagnostics, clinical documentation AI, patient flow optimization." />
      </Helmet>
      {/* ═══ 1. HERO SECTION — Full-width background ═══ */}
        <section className="relative -mt-32 mb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, var(--bg-primary) 100%)` }} />
          <div className="relative z-10 pt-44 pb-24">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.section className="mb-0" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>Healthcare</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            Healthcare transformation<br />
            <span style={{ color: ACCENT }}>through clinical AI — from diagnosis to operations.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            From AI-powered medical imaging to intelligent patient experience platforms — we help Saudi healthcare
            providers, hospitals, and health clusters deliver better clinical outcomes, operational efficiency,
            and patient satisfaction through enterprise AI.
          </p>
        </motion.section>
            </div>
          </div>
        </section>

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Healthcare data is abundant — but clinical intelligence is scarce.</h2>
          <p className="text-text-muted mb-8 max-w-[720px]">
            Radiology and pathology backlogs delay critical diagnoses. Patient data is scattered across EMR, PACS,
            and LIS — with no unified clinical view. Operational resources are allocated manually. And PHI security
            gaps expose patient data while the new health cluster model demands unprecedented cross-facility integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { pre: 'Diagnostic delays', text: 'Radiology and pathology backlogs delay critical diagnoses — AI can accelerate, but governance is required.' },
              { pre: 'Patient experience fragmented', text: 'Scheduling, triage, follow-up, and billing across disconnected systems — patients navigate silos.' },
              { pre: 'Clinical data silos', text: 'EMR, PACS, LIS data not integrated — no unified patient view for clinical decision support.' },
              { pre: 'Operational inefficiency', text: 'Bed management, staffing, and resource allocation done manually — no predictive capability.' },
              { pre: 'PHI security gaps', text: 'Patient health information protection inconsistent across systems — regulatory compliance is reactive.' },
              { pre: 'Health cluster coordination', text: 'New cluster model requires data sharing and service orchestration across facilities — not designed for.' },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Six priorities for the intelligent healthcare enterprise.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Bionic capabilities map to healthcare transformation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <Link key={i} to={`/capabilities/${['ai','data','apps','integration','cyber','infra'][i]}`} className="bg-bg-secondary border border-white/5 rounded-xl p-4 hover:border-[#00BFFF]/25 transition-all duration-300 flex items-start gap-3 group">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three delivery models applied to healthcare.</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proven reference architectures for healthcare.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[480px]">
            {blueprints.map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">Healthcare</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/blueprints?industry=healthcare" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all healthcare blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. STRATEGIC ECOSYSTEM ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>Strategic Ecosystem</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Technology partners — architected for clinical environments and PHI compliance.
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Measured impact across healthcare transformation.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { metric: 'Up to 60%', label: 'Faster diagnostic turnaround' },
              { metric: 'Real-time', label: 'AI-assisted clinical insight' },
              { metric: '30–50%', label: 'Reduction in patient wait times' },
              { metric: 'Single view', label: 'Patient 360 across EMR, PACS, LIS' },
              { metric: 'Continuous', label: 'PHI compliance with Zero Trust' },
            ].map((o, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-[#00BFFF]/30 transition-all">
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
              Ready to transform healthcare with clinical AI?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how clinical intelligence, patient experience platforms, and PHI-compliant infrastructure can deliver better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/blueprints?industry=healthcare" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30">
                View Healthcare Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

    </div>
);
}
