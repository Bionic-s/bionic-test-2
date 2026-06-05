import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cog, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Bionic Solutions — 3 Pillars × 7 Service Lines
 * 
 * Pillar structure from catalog:
 * Intelligence      Automation        Trust
 * ───────────────── ───────────────── ─────────────────
 * Enterprise AI     Business Apps     Cybersecurity
 * Data & Analytics  Integration       Sovereign Infra
 *                   ───────────────── Managed Services
 */

interface ServiceLine {
  name: string;
  desc: string;
}

interface Pillar {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  lines: ServiceLine[];
}

const pillars: Pillar[] = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'Intelligence',
    tagline: 'AI · Analytics · Data',
    lines: [
      { name: 'Enterprise AI & Automation', desc: 'Agentic AI, copilots, intelligent process automation' },
      { name: 'Data, Analytics & Intelligence', desc: 'AI-ready data platforms, executive dashboards, MDM, advanced analytics' },
    ],
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: 'Automation',
    tagline: 'Apps · Integration · Workflow',
    lines: [
      { name: 'Business Applications & CX', desc: 'CRM, contact center, marketing automation, commerce, employee experience' },
      { name: 'Integration & Intelligent Operations', desc: 'API-led architecture, event-driven, workflow orchestration' },
    ],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Trust',
    tagline: 'Cyber · Sovereign · Resilience',
    lines: [
      { name: 'Cybersecurity & Cyber Resilience', desc: 'SOC, SIEM, Zero Trust, identity, ransomware resilience' },
      { name: 'Sovereign Infrastructure & Hybrid Cloud', desc: 'Datacenter refresh, storage modernization, AI infra, hybrid cloud' },
    ],
  },
];

export const ServicePillars = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden" ref={ref}>
      {/* Section title */}
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6"
          >
            <span className="text-small text-accent-primary font-semibold tracking-wider uppercase">
              What We Deliver
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-[48px] font-bold mb-6 tracking-tight"
          >
            7 enterprise capabilities across{' '}
            <span className="gradient-text">Intelligence, Automation and Trust</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 text-text-muted max-w-2xl mx-auto"
          >
            7 service lines. 3 core values. One integrated enterprise AI transformation.
          </motion.p>
        </div>

        {/* 3 Pillar columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-2xl border border-white/[0.08] bg-bg-secondary/30 p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-accent-primary/30"
            >
              {/* Pillar header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-text-primary transition-all duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{pillar.title}</h3>
                  <p className="text-tiny text-accent-primary/60">{pillar.tagline}</p>
                </div>
              </div>

              {/* Service lines */}
              <div className="flex-1 space-y-4">
                {pillar.lines.map((line) => (
                  <div key={line.name}>
                    <h4 className="text-small font-semibold text-text-primary mb-1">
                      {line.name}
                    </h4>
                    <p className="text-tiny text-text-muted leading-relaxed">
                      {line.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal: Managed Services delivery layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl border border-accent-primary/20 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h4 className="text-small font-bold text-text-primary">
                  Technology Services & Managed Operations
                </h4>
                <p className="text-tiny text-text-muted">
                  3 tiers. 24×7. Multi-vendor. Across all 6 service lines.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-tiny font-semibold text-accent-primary px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5">
              7th Service Line
            </span>
          </div>
        </motion.div>

        {/* CTA: Explore all capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <Link
            to="/capabilities/ai"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors group/link"
          >
            <span className="text-body font-medium">Explore all capabilities</span>
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePillars;
