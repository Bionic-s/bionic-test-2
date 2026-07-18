import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cog, Shield, CheckCircle } from 'lucide-react';
import { trackServicePageView } from '../../lib/analytics';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#FFFFFF';
const HERO_BG = '/test-site-2/images/professional-services-ai-hero.jpg';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4 text-text-muted">{children}</p>
);

const deliveryModels = [
  {
    title: 'Consulting & Advisory',
    accent: '#00BFFF',
    desc: 'Strategy, architecture, compliance, operating model, and business case — from readiness to executive buy-in.',
    highlights: ['AI Readiness Assessment', 'Business Case Development', 'Operating Model Design', 'Compliance & GRC Advisory', 'Vendor Selection'],
    path: '/services/advisory',
  },
  {
    title: 'Implementation & Delivery',
    accent: '#00BFFF',
    desc: 'Deploy, integrate, and deliver into production — with adoption, governance, and value tracking built in.',
    highlights: ['AI & Automation Deployment', 'Platform & App Delivery', 'Integration Engineering', 'Security Implementation', 'Value Realization'],
    path: '/services/implementation',
  },
  {
    title: 'Managed Operations',
    accent: '#00BFFF',
    desc: 'Continuous transformation enablement — 24×7 platform ops, SRE, AIOps, FinOps, and platform engineering.',
    highlights: ['AIOps & Observability', 'SRE & Platform Engineering', 'FinOps Governance', 'SOC-as-a-Service', 'Continuous Optimization'],
    path: '/services/operations',
  },
];

export default function ServicesHub() {

  useEffect(() => { trackServicePageView('Services Hub'); }, []);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Services | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Advisory, implementation, and managed operations — one accountable partner across the full transformation lifecycle." />
      </Helmet>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-24 text-center px-4"
        >
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <p className="text-tiny font-semibold tracking-wider uppercase mb-4 text-text-muted">How We Deliver</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Three delivery models.<br />
              <span className="text-text-muted">One accountable partner.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-[640px] mx-auto leading-relaxed">
              Every capability we offer — from AI to cybersecurity — is delivered through one or more of these models.
              Advisory for strategy. Implementation for execution. Operations for continuous value.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl pb-24">

        {/* Delivery Model Cards */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryModels.map((model, i) => (
              <Link
                key={i}
                to={model.path}
                className="group bg-bg-secondary border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${model.accent}15`, color: model.accent }}>
                  {i === 0 ? <Brain className="w-6 h-6" /> : i === 1 ? <Cog className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{model.title}</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{model.desc}</p>
                <ul className="space-y-2 mb-6">
                  {model.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-tiny text-text-muted">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: model.accent }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: model.accent }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Cross-Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Where do you want to go next?</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'Capabilities', path: '/capabilities/ai', desc: '7 integrated domains' },
                { label: 'Industries', path: '/industries/government', desc: '5 sectors' },
                { label: 'Blueprints', path: '/blueprints', desc: '12 architectures' },
                { label: 'Architecture', path: '/architecture', desc: '10 layers' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-secondary border border-white/5 rounded-full text-sm font-medium text-text-primary hover:border-white/15 transition-all hover:-translate-y-0.5">
                  {link.label}
                  <span className="text-tiny text-text-muted">{link.desc}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure which model fits?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Most engagements combine two or three models. Let's discuss what your transformation requires.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:bg-white/90"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
);
}
