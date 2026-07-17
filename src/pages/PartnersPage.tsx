import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, GitMerge, Lightbulb, Cpu } from 'lucide-react';
import { PartnerLogo } from '../components/PartnerLogo';
import { CANON_PARTNERS } from '../data/partnersData';
import { trackPageView } from '../lib/analytics';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

/* ── Partner Outcomes: one card per partner, one outcome each ── */
const ECOSYSTEM_CARD = {
  name: 'Salesforce Ecosystem',
  outcome: 'CRM + AI + Analytics + Integration + Data Management — the complete customer intelligence platform, unified under one partner.',
  main: 'Salesforce',
  subs: ['MuleSoft', 'Tableau', 'Informatica'],
};

const PARTNER_OUTCOMES: { name: string; outcome: string }[] = [
  { name: 'IBM', outcome: 'watsonx AI governance + FlashSystem infrastructure — AI that is compliant, not just fast.' },
  { name: 'Google', outcome: 'Sovereign AI on Vertex AI — governed, secured, and operated in-Kingdom.' },
  { name: 'Dell Technologies', outcome: 'PowerEdge, PowerStore, VxRail — the infrastructure backbone underneath AI workloads.' },
  { name: 'Intel', outcome: 'Xeon & Gaudi AI acceleration — sovereign AI compute, from edge to datacenter.' },
  { name: 'Platform9', outcome: 'Kubernetes, managed, in your datacenter — private cloud without the complexity.' },
  { name: 'Lenovo', outcome: 'ThinkSystem, ThinkAgile, TruScale — infrastructure engineered for AI, from edge to cloud.' },
  { name: 'Red Hat', outcome: 'OpenShift + Ansible Automation — open-source platform for sovereign hybrid cloud.' },
];

/* ── Partnership tiers ── */
const TIERS = [
  {
    title: 'Reseller',
    subtitle: 'Procure. Deliver. Support.',
    desc: 'Authorized resale and deployment of partner technology — hardware, software, and cloud platforms — with local logistics, Saudi-based delivery, and warranty support.',
    icon: Shield,
              examples: 'Dell PowerEdge, PowerStore · Intel Xeon, Gaudi AI · IBM FlashSystem, Power · Platform9 · Lenovo ThinkSystem',
  },
  {
    title: 'Delivery Partner',
    subtitle: 'Implement. Integrate. Operate.',
    desc: 'Certified implementation and integration across partner platforms — API-led architecture, MDM, CRM deployment, data engineering, and managed operations.',
    icon: GitMerge,
    examples: 'Salesforce CRM deployment · MuleSoft API-led integration · Informatica MDM · Tableau BI · Red Hat OpenShift',
  },
  {
    title: 'Strategic Advisor',
    subtitle: 'Architect. Transform. Govern.',
    desc: 'Enterprise architecture, AI strategy, and transformation governance — selecting, assembling, and operating partner technologies as one accountable ecosystem.',
    icon: Lightbulb,
    examples: 'Watsonx AI governance · Vertex AI platform design · Zero Trust architecture · Sovereign cloud blueprint',
  },
];

export default function PartnersPage() {
  useEffect(() => { trackPageView('Partners Ecosystem'); }, []);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Partners | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Strategic technology partners — Salesforce, Google Cloud, IBM, Intel, Dell, Informatica, and more. Multi-vendor, one accountable relationship." />
      </Helmet>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-tiny font-semibold tracking-widest uppercase mb-4 text-accent-primary">
              Strategic Ecosystem
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              8 Strategic Partners.
              <br />
              <span className="text-accent-primary">One Accountable Integrator.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              We select, assemble, and operate the world's most advanced enterprise technology — 
              so you get one accountable relationship across the full ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Who We Partner With ── */}
      <section ref={ref1} className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView1 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-tiny font-semibold tracking-wider uppercase mb-3 text-accent-primary">Who We Partner With</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eight partners. One accountable relationship.</h2>
            <p className="text-text-muted max-w-3xl mx-auto">
              Each partner is selected for a specific capability they bring to your transformation. No reseller padding. No logo farms. Every relationship earns its place.
            </p>
          </motion.div>

          {/* Partner cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {/* Individual partner cards first */}
            {PARTNER_OUTCOMES.map((po, i) => {
              const canon = CANON_PARTNERS.find((x) => x.name.toLowerCase() === po.name.toLowerCase());
              return (
                <motion.div
                  key={po.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`group relative bg-bg-secondary/40 border border-white/[0.06] rounded-2xl overflow-hidden hover:border-accent-primary/25 transition-all duration-400 hover:-translate-y-1 flex flex-col ${po.name === 'IBM' ? 'lg:row-span-2 shadow-[0_0_30px_rgba(5,47,173,0.08)]' : ''}`}
                >
                  <div className="h-0.5 w-full" style={{ backgroundColor: canon?.accent || '#444' }} />
                  <div className="flex items-center justify-center px-4 pt-6 pb-3">
                    <PartnerLogo partner={po.name} size={po.name === 'IBM' ? 'xl' : 'lg'} className="mx-auto transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="px-4 pb-6 flex-1 flex flex-col justify-end">
                    <p className="text-tiny text-text-muted leading-relaxed text-center">{po.outcome}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* ── Salesforce Ecosystem — full width, final row ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 md:col-span-3 lg:col-span-4 group relative bg-bg-secondary/40 border border-white/[0.06] rounded-2xl overflow-hidden hover:border-accent-primary/25 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-0.5 w-full" style={{ backgroundColor: '#00A1E0' }} />
              
              {/* Desktop layout: horizontal */}
              <div className="hidden lg:flex items-center gap-8 p-6">
                {/* Badge + Main logo */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span className="text-tiny font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#00A1E0]/30 bg-[#00A1E0]/10 text-[#00A1E0]">Ecosystem</span>
                  <div className="bg-bg-primary/60 border border-white/5 rounded-xl p-4">
                    <PartnerLogo partner="Salesforce" size="xl" className="mx-auto" />
                  </div>
                </div>

                {/* Sub brands */}
                <div className="flex items-center gap-4">
                  <div className="w-px h-16 bg-white/8" />
                  {ECOSYSTEM_CARD.subs.map((sub) => (
                    <div key={sub} className="flex items-center justify-center bg-bg-primary/50 border border-white/5 rounded-xl p-4 w-28">
                      <PartnerLogo partner={sub} size="md" className="mx-auto" />
                    </div>
                  ))}
                  <div className="w-px h-16 bg-white/8" />
                </div>

                {/* Outcome text */}
                <div className="flex-1">
                  <p className="text-sm text-text-muted leading-relaxed">{ECOSYSTEM_CARD.outcome}</p>
                </div>
              </div>

              {/* Mobile layout: stacked */}
              <div className="lg:hidden p-5 flex flex-col">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-tiny font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#00A1E0]/30 bg-[#00A1E0]/10 text-[#00A1E0]">Ecosystem</span>
                </div>
                <div className="flex items-center justify-center bg-bg-primary/60 border border-white/5 rounded-xl p-4 mb-3">
                  <PartnerLogo partner="Salesforce" size="lg" className="mx-auto" />
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {ECOSYSTEM_CARD.subs.map((sub) => (
                    <div key={sub} className="flex items-center justify-center bg-bg-primary/50 border border-white/5 rounded-lg p-2.5">
                      <PartnerLogo partner={sub} size="sm" className="mx-auto" />
                    </div>
                  ))}
                </div>
                <p className="text-tiny text-text-muted leading-relaxed text-center">{ECOSYSTEM_CARD.outcome}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How We Partner ── */}
      <section ref={ref2} className="py-16 md:py-24 bg-bg-secondary/30 border-y border-white/[0.06]">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView2 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-tiny font-semibold tracking-wider uppercase mb-3 text-accent-primary">How We Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three tiers. One relationship.</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Not every partner relationship is the same. We engage at the right tier — from authorized resale to strategic platform co-architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-bg-primary border border-white/[0.06] rounded-xl p-6 hover:border-accent-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                  <tier.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tier.title}</h3>
                <p className="text-sm text-accent-primary font-medium mb-3">{tier.subtitle}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{tier.desc}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-tiny text-text-muted leading-relaxed">{tier.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Bionic Difference ── */}
      <section ref={ref3} className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView3 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-tiny font-semibold tracking-wider uppercase mb-3 text-accent-primary">The Bionic Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why not go direct?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Every partner on this page will sell to you directly. Here's why enterprises choose Bionic instead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'We Assemble',
                desc: 'No single vendor covers CRM + AI + infrastructure + cyber + integration. We select and combine the best — without vendor lock-in.',
                icon: Cpu,
              },
              {
                title: 'We Integrate',
                desc: 'Partners build products. We build systems. API-led architecture, event-driven workflows, secure cross-platform operations.',
                icon: GitMerge,
              },
              {
                title: 'We Operate',
                desc: 'One runbook. One SLA. One team accountable for the full ecosystem — 24×7, from infrastructure to application layer.',
                icon: Shield,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-bg-secondary border border-white/[0.06] rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner with Us CTA ── */}
      <section ref={ref4} className="py-16 md:py-24 bg-bg-secondary/20 border-t border-white/[0.06]">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl text-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={inView4 ? 'animate' : 'initial'}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build with the ecosystem?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              Every transformation starts with a conversation. Let's map your needs to the right capabilities and partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-discovery-call?source=partners&intent=ecosystem"
                className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-primary/90 text-bg-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact?source=partners"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer spacing ── */}
      <div className="pb-8" />
    </div>
  );
}
