import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#2563EB';

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

export default function AboutPage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 1. HERO ═══ */}
        <motion.section
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
            style={{ borderColor: '#2563EB40', backgroundColor: '#2563EB08' }}>
            <Building2 className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Bionic Solutions</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3rem)', lineHeight: '1.15', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-white bg-clip-text text-transparent">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
              style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #2563EB20' }}>
              Explore Our Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#2563EB40]">
              Start the Conversation
            </Link>
          </div>
        </motion.section>

        {/* ═══ 2. TRANSFORMATION EXPERIENCE ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Transformation Experience</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What kind of transformation company is Bionic?</h2>
          <div className="max-w-3xl space-y-6 text-text-muted leading-relaxed text-lg">
            <p>
              Bionic Solutions is an enterprise AI transformation integrator — built in Saudi Arabia, operating across the Kingdom.
            </p>
            <p>
              We work with government entities, banks, industrial operators, healthcare providers, and enterprise organizations — inside the Saudi regulatory environment: Etimad procurement, NCA cybersecurity controls, SAMA compliance frameworks, and PDPL data protection.
            </p>
            <p className="flex items-center gap-3 text-base">
              <span className="font-semibold text-text-primary whitespace-nowrap">Strategy &amp; Architecture</span>
              <span className="text-text-muted">→</span>
              <span className="font-semibold text-text-primary whitespace-nowrap">Implementation &amp; Delivery</span>
              <span className="text-text-muted">→</span>
              <span className="font-semibold text-text-primary whitespace-nowrap">Managed Operations</span>
            </p>
            <p>
              across seven integrated domains: enterprise AI, data platforms, business applications, integration, cybersecurity, sovereign infrastructure, and technology operations.
            </p>
            <p className="text-base">
              We do not publish client names, project details, or specific metrics — transformation work is commercially sensitive. Our experience can be discussed in detail during the Executive Briefing, within the bounds of client confidentiality.
            </p>
          </div>
        </motion.section>

        {/* ═══ 3. WHY BIONIC ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-14"
            style={{ background: 'linear-gradient(135deg, #2563EB08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #2563EB1A' }}>
            <SectionLabel>Why Bionic</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who architects enterprise transformation.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Enterprise Transformation Expertise', desc: 'We don\'t sell products. We architect outcomes — composing strategy, technology, data, and governance into transformation programs measured by business performance.' },
                { title: 'Multi-Vendor Ecosystem Leadership', desc: 'We are not tied to any single vendor\'s roadmap. We design across the world\'s leading technology platforms — selecting and integrating what creates maximum business value.' },
                { title: 'End-to-End Accountability', desc: 'From assessment through architecture to operations and continuous evolution — a single accountable partner across the full transformation lifecycle.' },
                { title: 'Vision 2030 Alignment', desc: 'Every engagement is grounded in Saudi Arabia\'s national transformation priorities — sovereignty, digital government, industrial modernization, and human capability development.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-tiny text-text-muted mt-8 pt-6 border-t border-white/[0.06] text-center">
              Partner ecosystem: Salesforce · Google Cloud · IBM · Dell Technologies · Intel · MuleSoft · Informatica · Platform9
            </p>
          </div>
        </motion.section>

        {/* ═══ 4. VISION 2030 ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-14 border"
            style={{ background: 'linear-gradient(135deg, #2563EB05, var(--bg-secondary), var(--bg-secondary))', borderColor: '#2563EB15' }}>
            <SectionLabel>Vision 2030</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Saudi-rooted. Sovereignty-first. Outcome-driven.</h2>
            <p className="text-text-muted text-lg mb-10 max-w-3xl leading-relaxed">
              Saudi Arabia is not a market we serve. It is the strategic context that defines our
              architecture, our priorities, and our purpose. Every Bionic engagement is built on
              commitments to the Kingdom's transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: 'Sovereign AI', desc: 'AI systems designed and deployed within Saudi data boundaries, governed by SDAIA AI Ethics principles, and aligned to national AI strategy.' },
                { title: 'Digital Government', desc: 'Platforms and capabilities that enable citizen-centric digital services, Etimad procurement integration, and inter-agency data exchange.' },
                { title: 'Industrial Modernization', desc: 'Infrastructure, automation, and intelligence that modernize Saudi industry — from manufacturing and energy to logistics and healthcare.' },
                { title: 'Human Capability', desc: 'Knowledge transfer, platform enablement, and workforce development — ensuring Saudi teams operate, evolve, and lead transformation programs.' },
                { title: 'Cyber Sovereignty', desc: 'Security architectures aligned to NCA Essential Cybersecurity Controls, SAMA Cyber Resilience Framework, and PDPL data protection requirements.' },
                { title: 'National Transformation', desc: 'Every engagement contributes to the Vision 2030 objectives of a diversified, digital, and globally competitive Saudi economy.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. OUR PRESENCE ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Our Presence</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Three offices. One national commitment.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { city: 'Riyadh', region: 'Central Region Headquarters', desc: 'Serving government, banking, and enterprise clients across the capital and central province.' },
              { city: 'Jeddah', region: 'Western Region Office', desc: 'Serving the Western Province and Red Sea Coast — our founding location and operational hub.' },
              { city: 'Dammam', region: 'Eastern Region Office', desc: 'Serving oil & gas, industrial, and logistics clients across the Eastern Province.' },
            ].map((office, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#2563EB15]">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#2563EB12', color: '#2563EB' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1 text-text-primary">{office.city}</h3>
                <p className="text-tiny text-text-muted mb-3">{office.region}</p>
                <p className="text-tiny text-text-muted leading-relaxed">{office.desc}</p>
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
          className="text-center"
          ref={ref5}
        >
          <div className="rounded-2xl p-10 md:p-14"
            style={{ background: 'linear-gradient(135deg, #2563EB0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #2563EB1A' }}>
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              Let's architect<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">what comes next.</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Every transformation begins with a conversation about where you are, where you need to be,
              and what it will take to get there. Not a vendor pitch. An architecture discussion.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
              style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #2563EB20' }}>
              Start the Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
