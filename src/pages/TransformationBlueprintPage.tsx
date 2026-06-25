import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Cog, Target, Layers, CheckCircle } from 'lucide-react';
import { Buildings, Bank, Drop, Heartbeat, BuildingOffice, ChartBar, Desktop, GitMerge, ShieldCheck, Cloud, Gear, Brain as BrainPh } from '@phosphor-icons/react';
import { blueprints } from '../data/blueprintsData';
import { trackBlueprintView } from '../lib/analytics';
import { PartnerLogo } from '../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const industryIcons: Record<string, React.ReactNode> = {
  'Government & Public Sector': <Buildings size={20} weight="fill" />,
  'Banking & Financial Services': <Bank size={20} weight="fill" />,
  'Oil, Gas & Energy': <Drop size={20} weight="fill" />,
  'Healthcare': <Heartbeat size={20} weight="fill" />,
  'Enterprise': <BuildingOffice size={20} weight="fill" />,
};

const capabilityIcons: Record<string, React.ReactNode> = {
  'Enterprise AI & Automation': <BrainPh size={20} weight="fill" />,
  'Data, Analytics & Intelligence': <ChartBar size={20} weight="fill" />,
  'Business Applications & CX': <Desktop size={20} weight="fill" />,
  'Integration & Intelligent Operations': <GitMerge size={20} weight="fill" />,
  'Cybersecurity & Cyber Resilience': <ShieldCheck size={20} weight="fill" />,
  'Sovereign Infrastructure & Hybrid Cloud': <Cloud size={20} weight="fill" />,
  'Technology Operations': <Gear size={20} weight="fill" />,
};

const iatForce: Record<string, string> = {
  'Enterprise AI & Automation': 'Intelligence',
  'Data, Analytics & Intelligence': 'Intelligence',
  'Business Applications & CX': 'Automation',
  'Integration & Intelligent Operations': 'Automation',
  'Cybersecurity & Cyber Resilience': 'Trust',
  'Sovereign Infrastructure & Hybrid Cloud': 'Trust',
  'Technology Operations': 'Trust',
};

export default function TransformationBlueprintPage() {

  const { slug } = useParams<{ slug: string }>();
  useEffect(() => { if (slug) trackBlueprintView(slug); }, [slug]);

  const bp = blueprints.find((b) => b.slug === slug);

  if (!bp) {
    return (
      <div
         className="min-h-screen bg-bg-primary pt-32 pb-24">
        <Helmet>
          <title>Blueprint | Bionic Solutions — Enterprise AI Transformation Integrator</title>
          <meta name="description" content="Detailed transformation blueprint — architecture, outcomes, and implementation patterns from Saudi enterprise transformations." />
        </Helmet>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blueprint Not Found</h1>
          <p className="text-text-muted mb-8">The transformation blueprint you're looking for doesn't exist.</p>
          <Link to="/blueprints" className="text-accent-primary hover:underline">← View all Blueprints</Link>
        </div>
      </div>
    );
  }

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const forces = [...new Set(bp.capabilities.map((c) => iatForce[c] || '').filter(Boolean))];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-tiny text-accent-primary font-semibold">
                {industryIcons[bp.industry]} {bp.industry}
              </span>
              {forces.map((f, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-tiny font-semibold border ${
                    f === 'Intelligence'
                      ? 'border-[#00BFFF]/30 bg-[#00BFFF]/5 text-[#00BFFF]'
                      : f === 'Automation'
                      ? 'border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#7C3AED]'
                      : 'border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981]'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent-primary to-white bg-clip-text text-transparent">{bp.title}</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl">{bp.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-text-muted leading-relaxed">{bp.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Related Capabilities + Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Related Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">Related Capabilities</h2>
              </div>
              <div className="space-y-3">
                {bp.capabilities.map((cap, i) => (
                  <Link
                    key={i}
                    to={`/capabilities/${bp.capabilitySlugs[i]}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-accent-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{capabilityIcons[cap]}</span>
                      <div>
                        <p className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">{cap}</p>
                        <p className="text-tiny text-text-muted">{iatForce[cap]} force</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Related Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Cog className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">Related Services</h2>
              </div>
              <div className="space-y-3">
                {[...new Set(bp.services)].map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary border border-white/5"
                  >
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-primary text-sm">{svc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Partners + Platforms & Products */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Strategic Partners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">Strategic Partners</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {bp.partners.map((p, i) => (
                  <PartnerLogo key={i} partner={p} size="sm" />
                ))}
              </div>
            </motion.div>

            {/* Platforms & Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-accent-primary" />
                <h2 className="text-2xl font-bold">Platforms & Products</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {bp.products.map((prod, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 text-text-primary text-sm rounded-full border border-white/10"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Architecture */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-accent-primary" />
              <h2 className="text-2xl font-bold">Target Architecture</h2>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-accent-primary/5 to-bg-secondary border border-accent-primary/10">
              <p className="text-sm text-text-muted leading-relaxed font-mono">{bp.architecture}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bp.outcomes.map((o, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-xl bg-bg-primary border border-white/5"
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-text-primary">{o}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Bionic */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-bg-secondary border border-accent-primary/20"
          >
            <h2 className="text-2xl font-bold mb-4">Why Bionic</h2>
            <p className="text-text-muted leading-relaxed">{bp.whyBionic}</p>
          </motion.div>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-16 bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore this blueprint for your organization?</h2>
          <p className="text-body text-text-muted mb-8 max-w-xl mx-auto">
            Request a strategy session to discuss how this transformation blueprint applies to your industry context.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary transition-all"
          >
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Back to all */}
          <div className="mt-8">
            <Link to="/blueprints" className="text-accent-primary hover:underline text-sm">
              ← View all Transformation Blueprints
            </Link>
          </div>
        </div>
      </section>
    </div>
);

}
