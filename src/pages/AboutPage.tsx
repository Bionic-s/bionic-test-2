import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Shield, Globe, Cpu, Users, MapPin, Target, Zap, Layers, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/hero/ai-enterprise.avif';
const PATTERN_BG = '/test-site-2/images/geometric_pattern_4.jpg';

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 my-16">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function AboutPage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>About | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Bionic Solutions is Saudi Arabia's enterprise AI transformation integrator — uniting strategy, technology, data, and governance into measured business outcomes." />
      </Helmet>

      {/* ═══ 1. HERO — with background image ═══ */}
      <section className="relative overflow-hidden">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-32 text-center px-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
              style={{ borderColor: '#00BFFF40', backgroundColor: '#00BFFF10', backdropFilter: 'blur(8px)' }}>
              <Building2 className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
              <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Bionic Solutions</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)', lineHeight: '1.12', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              <span className="bg-gradient-to-r from-[#00BFFF] via-[#60A5FA] to-white bg-clip-text text-transparent">
                Enterprise Transformation Integrator
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed mt-8">
              We architect Intelligence, Automation, and Trust into business — helping organizations
              transform operations, customer experiences, data, security, and infrastructure into
              measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/capabilities/ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Explore Our Capabilities
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF40]">
                Start the Conversation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        <SectionDivider />

        {/* ═══ 2. TRANSFORMATION EXPERIENCE ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <SectionLabel>Transformation Experience</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">What kind of transformation company is Bionic?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Layers, color: '#00BFFF', title: 'Strategy & Architecture', desc: 'We map your current state, define the target architecture, and build the business case — grounded in Saudi regulatory reality.' },
              { icon: Zap, color: '#00BFFF', title: 'Implementation & Delivery', desc: 'Platform deployment, integration engineering, and adoption enablement — multi-vendor, multi-domain, single accountability.' },
              { icon: CheckCircle, color: '#00BFFF', title: 'Managed Operations', desc: '24×7 monitoring, AI operations, continuous optimization — we stay with you long after go-live.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#00BFFF15] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}12` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-text-primary">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-5 text-text-muted leading-relaxed text-base bg-bg-secondary/50 rounded-xl border border-white/5 p-8">
            <p>
              Bionic Solutions is an enterprise AI transformation integrator — built in Saudi Arabia, operating across the Kingdom.
              We work with government entities, banks, industrial operators, healthcare providers, and enterprise organizations — inside the Saudi regulatory environment: Etimad procurement, NCA cybersecurity controls, SAMA compliance frameworks, and PDPL data protection.
            </p>
            <p>
              across seven integrated domains: enterprise AI, data platforms, business applications, integration, cybersecurity, sovereign infrastructure, and technology operations.
            </p>
            <p className="text-sm text-text-muted/60">
              We do not publish client names, project details, or specific metrics — transformation work is commercially sensitive. Our experience can be discussed in detail during the Strategy Session, within the bounds of client confidentiality.
            </p>
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══ 3. WHY BIONIC — with icons ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url(${PATTERN_BG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />

            <div className="relative z-10">
              <SectionLabel>Why Bionic</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who architects enterprise transformation.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: 'Enterprise Transformation Expertise', desc: 'We don\'t sell products. We architect outcomes — composing strategy, technology, data, and governance into transformation programs measured by business performance.' },
                  { icon: Layers, title: 'Multi-Vendor Ecosystem Leadership', desc: 'We are not tied to any single vendor\'s roadmap. We design across the world\'s leading technology platforms — selecting and integrating what creates maximum business value.' },
                  { icon: Shield, title: 'End-to-End Accountability', desc: 'From assessment through architecture to operations and continuous evolution — a single accountable partner across the full transformation lifecycle.' },
                  { icon: Globe, title: 'Vision 2030 Alignment', desc: 'Every engagement is grounded in Saudi Arabia\'s national transformation priorities — sovereignty, digital government, industrial modernization, and human capability development.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-bg-primary/40 rounded-xl p-6 border border-white/5 transition-all duration-300 hover:border-[#00BFFF20]">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1.5 text-text-primary">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-tiny text-text-muted mt-8 pt-6 border-t border-white/[0.06] text-center">
                Partner ecosystem: Salesforce · Google Cloud · IBM · Dell Technologies · Intel · MuleSoft · Informatica · Platform9
              </p>
            </div>
          </div>
        </motion.section>

        {/* ═══ 4. VISION 2030 — with Saudi-themed visual ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <div className="rounded-2xl p-10 md:p-14 border relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00BFFF05, var(--bg-secondary), var(--bg-secondary))', borderColor: '#00BFFF15' }}>
            {/* Saudi flag colors — subtle gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006C35] via-[#00BFFF] to-[#006C35] opacity-60" />

            <div className="relative z-10">
              <SectionLabel>Vision 2030</SectionLabel>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 flex-shrink-0" style={{ color: ACCENT }} />
                <h2 className="text-2xl md:text-3xl font-bold">Saudi-rooted. Sovereignty-first. Outcome-driven.</h2>
              </div>
              <p className="text-text-muted text-lg mb-10 max-w-3xl leading-relaxed">
                Saudi Arabia is not a market we serve. It is the strategic context that defines our
                architecture, our priorities, and our purpose. Every Bionic engagement is built on
                commitments to the Kingdom's transformation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { icon: Cpu, title: 'Sovereign AI', desc: 'AI systems designed and deployed within Saudi data boundaries, governed by SDAIA AI Ethics principles, and aligned to national AI strategy.' },
                  { icon: Building2, title: 'Digital Government', desc: 'Platforms and capabilities that enable citizen-centric digital services, Etimad procurement integration, and inter-agency data exchange.' },
                  { icon: Zap, title: 'Industrial Modernization', desc: 'Infrastructure, automation, and intelligence that modernize Saudi industry — from manufacturing and energy to logistics and healthcare.' },
                  { icon: Users, title: 'Human Capability', desc: 'Knowledge transfer, platform enablement, and workforce development — ensuring Saudi teams operate, evolve, and lead transformation programs.' },
                  { icon: Shield, title: 'Cyber Sovereignty', desc: 'Security architectures aligned to NCA Essential Cybersecurity Controls, SAMA Cyber Resilience Framework, and PDPL data protection requirements.' },
                  { icon: Target, title: 'National Transformation', desc: 'Every engagement contributes to the Vision 2030 objectives of a diversified, digital, and globally competitive Saudi economy.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-bg-primary/50 rounded-xl p-5 border border-white/5 transition-all duration-300 hover:border-[#00BFFF20]">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00BFFF10', color: ACCENT }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. OUR PRESENCE — with map visual ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <SectionLabel>Our Presence</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Three offices. One national commitment.</h2>

          {/* Saudi map outline — subtle decorative */}
          <div className="relative mb-10 max-w-lg mx-auto">
            <div className="aspect-[3/4] max-h-64 mx-auto opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 300 400" fill="currentColor" className="w-full h-full text-white">
                <path d="M150 20 C170 60, 220 80, 240 130 C260 180, 250 230, 230 280 C210 330, 170 370, 140 380 C110 390, 70 370, 50 340 C30 310, 20 260, 30 220 C40 180, 60 120, 90 80 C120 40, 130 20, 150 20Z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { city: 'Riyadh', region: 'Central Region Headquarters', desc: 'Serving government, banking, and enterprise clients across the capital and central province.' },
              { city: 'Jeddah', region: 'Western Region Office', desc: 'Serving the Western Province and Red Sea Coast — our founding location and operational hub.' },
              { city: 'Dammam', region: 'Eastern Region Office', desc: 'Serving oil & gas, industrial, and logistics clients across the Eastern Province.' },
            ].map((office, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#00BFFF25] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFFF12' }}>
                  <MapPin className="w-7 h-7" style={{ color: ACCENT }} />
                </div>
                <h3 className="font-bold text-xl mb-1 text-text-primary">{office.city}</h3>
                <p className="text-tiny font-medium mb-3" style={{ color: ACCENT }}>{office.region}</p>
                <p className="text-text-muted text-sm leading-relaxed">{office.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-bg-secondary border border-white/5 rounded-xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-body text-text-muted mb-2">
              <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>
              {' · '}
              <a href="mailto:sales@bionics.com.sa" className="text-accent-primary hover:underline">sales@bionics.com.sa</a>
            </p>
            <p className="text-tiny text-text-muted">
              Registered on Etimad. Qualified for Saudi government procurement.
            </p>
          </div>
        </motion.section>

        {/* ═══ CONVERSION ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center pb-12"
          ref={ref5}
        >
          <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #00BFFF08 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-bold mb-6">
                Let's architect<br />
                <span className="bg-gradient-to-r from-[#00BFFF] to-[#60A5FA] bg-clip-text text-transparent">what comes next.</span>
              </h2>
              <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Every transformation begins with a conversation about where you are, where you need to be,
                and what it will take to get there. Not a vendor pitch. An architecture discussion.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
