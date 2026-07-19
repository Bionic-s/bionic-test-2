import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, MessageSquare, Layout, Globe, Heart, ShoppingCart, Briefcase, CheckCircle, ExternalLink } from 'lucide-react';
import { trackCapabilityPageView } from '../../lib/analytics';
import { PartnerLogo } from '../../components/PartnerLogo';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/professional-services-ai-hero.jpg';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const partners = [
  { name: 'Salesforce', role: 'CRM & customer engagement', tech: 'Sales Cloud · Service Cloud · Marketing Cloud · Commerce Cloud · Experience Cloud' },
  { name: 'Tableau', role: 'Customer intelligence & analytics', tech: 'CRM Analytics · Embedded BI · Customer 360 dashboards · Revenue intelligence' },
  { name: 'Informatica', role: 'Customer data quality & MDM', tech: 'Customer 360 MDM · Data Quality · Data Catalog · Integration' },
  { name: 'IBM', role: 'Customer AI & analytics', tech: 'watsonx.ai · watsonx Assistant · Customer analytics · Journey AI' },
  { name: 'MuleSoft', role: 'Integration & API-led connectivity', tech: 'Anypoint Platform · API Manager · Flex Gateway · RPA · Composer' },
];

export default function BusinessApplicationsPage() {

  useEffect(() => { trackCapabilityPageView('Business Applications & CX'); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary">
      <Helmet>
        <title>Business Applications & CX | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Business Applications & CX — CRM, contact center, marketing automation, commerce, and employee experience." />
      </Helmet>

        {/* ═══ 1. HERO ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_BG} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
            className="relative z-10 pt-40 pb-32 text-center px-4"
          >
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
            style={{ borderColor: '#00BFFF40', backgroundColor: '#00BFFF08' }}>
            <Users className="w-4 h-4 mr-2" style={{ color: ACCENT }} />
            <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>Business Applications & CX</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#FB923C] to-white bg-clip-text text-transparent">
              From transactional systems<br />to intelligent relationships.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed">
            We design, deploy, and evolve the business applications that power customer relationships,
            employee experience, and digital commerce — built for Saudi Arabia's market reality.
          </p>
          </motion.div>
        </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. THE REALITY ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Most business applications are adopted — not embraced.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Users className="w-5 h-5" />, text: 'Fragmented customer view across departments and channels.' },
              { icon: <Layout className="w-5 h-5" />, text: 'Legacy CRM that teams work around, not within.' },
              { icon: <MessageSquare className="w-5 h-5" />, text: 'Contact centers overwhelmed by volume, not empowered by intelligence.' },
              { icon: <Globe className="w-5 h-5" />, text: 'Marketing, sales, and service operating in disconnected silos.' },
              { icon: <ShoppingCart className="w-5 h-5" />, text: 'Digital commerce channels that fail to convert or retain.' },
              { icon: <Briefcase className="w-5 h-5" />, text: 'Employees navigating outdated internal systems daily.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 hover:border-[#00BFFF30]">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#00BFFF15', color: ACCENT }}>{item.icon}</div>
                <p className="text-text-primary text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3. CORE CAPABILITIES ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Core Capabilities</h2>
          <p className="text-text-muted text-base mb-10">Six capabilities. Each designed around a business outcome.</p>

          <div className="space-y-4">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                title: 'CRM Strategy & Platform Transformation',
                desc: 'From legacy CRM to intelligent, AI-embedded customer platforms — designed around how your teams sell, serve, and engage, not around vendor functionality lists.',
                outcomes: ['CRM roadmap aligned to sales and service operating models', 'Unified customer view across all engagement channels', 'AI-embedded workflows accelerating deal cycles and case resolution', 'Adoption strategy ensuring teams embrace, not avoid, the platform'],
              },
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: 'Customer Experience Design & Delivery',
                desc: 'Modernize contact centers with conversational AI, self-service intelligence, and unified agent desktops — reducing friction for customers and agents alike.',
                outcomes: ['Reduced contact center volume through intelligent self-service', 'Faster case resolution with AI-assisted agent workflows', 'Consistent experience across voice, chat, social, and self-service', 'Real-time customer sentiment and service performance intelligence'],
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: 'Marketing Automation & Customer Journeys',
                desc: 'Design and automate personalized, multi-channel customer journeys — from acquisition through retention — with intelligence that learns and adapts.',
                outcomes: ['Personalized engagement across email, mobile, social, and web', 'Automated journey orchestration triggered by customer behavior', 'Campaign performance intelligence with closed-loop attribution', 'Compliant customer data management under PDPL'],
              },
              {
                icon: <ShoppingCart className="w-5 h-5" />,
                title: 'Commerce & Digital Channels',
                desc: 'Build B2B and B2C commerce experiences that convert — unified catalog, intelligent recommendations, seamless checkout, and integrated fulfillment.',
                outcomes: ['Unified commerce platform across B2B, B2C, and marketplace', 'AI-powered product discovery and intelligent recommendations', 'Streamlined checkout reducing abandonment and increasing conversion', 'Integrated order management connecting commerce to operations'],
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                title: 'Employee Experience & Digital Workplace',
                desc: 'Design internal service portals, HR service delivery, and knowledge platforms that make work easier — for every employee, not just head office.',
                outcomes: ['Self-service employee portal reducing HR and IT case volume', 'Knowledge management enabling faster, consistent resolutions', 'Mobile-first access for field and frontline teams', 'Employee onboarding and lifecycle automation'],
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: 'Business Applications Operations & Evolution',
                desc: 'Continuous platform evolution — managed releases, user support, adoption analytics, and roadmap execution that keeps business applications aligned to changing needs.',
                outcomes: ['Continuous platform improvement with managed release cycles', 'Adoption analytics identifying friction and training opportunities', 'Proactive support reducing user downtime and frustration', 'Roadmap governance ensuring investment stays aligned to business value'],
              },
            ].map((cap, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF1A]">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{cap.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-text-primary">{cap.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cap.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                          <span className="text-xs text-text-primary leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 3.5 HOW WE DELIVER ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-28">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Three integrated delivery models — across every capability.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/services/advisory" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">Consulting & Advisory</h3>
              <p className="text-tiny text-text-muted">AI Readiness Assessment · Compliance & GRC Advisory · Strategy & roadmap</p>
            </Link>
            <Link to="/services/implementation" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">Implementation & Delivery</h3>
              <p className="text-tiny text-text-muted">AI & Automation Deployment · Platform & App Delivery · MLOps pipeline</p>
            </Link>
            <Link to="/services/operations" className="group bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-[#00BFFF]/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center mb-3 text-[#00BFFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">Managed Operations</h3>
              <p className="text-tiny text-text-muted">24×7 platform ops · SOC-as-a-Service · 3 tiers (Essential/Advanced/Elite)</p>
            </Link>
          </div>
        </motion.section>

        {/* ═══ 4. WHY BIONIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <div className="rounded-2xl p-10 md:p-12"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <SectionLabel>Why Bionic</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">The partner who makes business applications work for people.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Multi-vendor. No lock-in.', desc: 'We design across Salesforce, Tableau, Informatica, and IBM — selecting the right platform for each capability, driven by business fit, not reseller incentives.' },
                { title: 'Adoption-first delivery.', desc: 'Technology deployment is only the start. Every engagement includes adoption strategy, user enablement, and continuous evolution — measured by usage, not go-live dates.' },
                { title: 'Saudi customer context. Designed in.', desc: 'PDPL-compliant customer data management, Arabic-first experience design, and alignment with Saudi consumer behavior and regulatory expectations.' },
                { title: 'One partner. Full accountability.', desc: 'From CRM strategy through platform deployment to managed operations — a single accountable relationship across the full business applications lifecycle.' },
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

        {/* ═══ 5. TECHNOLOGY ECOSYSTEM ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Technology</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Technology Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 group hover:border-[#00BFFF1A]">
                <div className="flex items-center gap-4 mb-3">
                  <PartnerLogo partner={p} size="sm" />
                  <span className="text-xs font-medium" style={{ color: '#00BFFF99' }}>{p.role}</span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">{p.tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. INDUSTRY APPLICATIONS ═══ */}
        <motion.section ref={ref5} {...fadeIn} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Where We Apply It</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { industry: 'Government & Public Sector', apps: 'Citizen service portals, 937 contact center modernization, government CRM, digital service delivery.' },
              { industry: 'Banking & Financial Services', apps: 'Retail banking CRM, wealth management platforms, digital onboarding, customer communications.' },
              { industry: 'Healthcare', apps: 'Patient engagement platforms, appointment management, patient 360, healthcare contact centers.' },
              { industry: 'Oil, Gas & Energy', apps: 'B2B customer portals, field service management, contractor engagement, stakeholder CRM.' },
              { industry: 'Retail & Consumer', apps: 'Unified commerce, loyalty and personalization, customer service automation, omnichannel fulfillment.' },
              { industry: 'Telecommunications', apps: 'Subscriber management, omnichannel care, churn prevention, B2B sales platforms.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-[#00BFFF1A]">
                <h3 className="font-semibold text-base mb-2 text-text-primary">{item.industry}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.apps}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/industries/government" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-sm text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
              Explore industry-specific applications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 7. FEATURED INSIGHTS ═══ */}
        <motion.section ref={ref6} {...fadeIn} animate={inView6 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Perspectives</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: 'CRM Strategy',
                title: 'Adoption Is the Real ROI',
                desc: 'Why CRM success is measured by daily active usage, not deployment milestones — and how adoption-led design transforms technology investment into business performance.',
              },
              {
                tag: 'Saudi Arabia',
                title: 'Customer Trust Under PDPL',
                desc: 'How Saudi organizations can build personalized customer experiences while maintaining full compliance with the Kingdom\'s data protection framework.',
              },
              {
                tag: 'Experience',
                title: 'The Contact Center Reimagined',
                desc: 'How AI-augmented agents, intelligent self-service, and unified engagement platforms are transforming contact centers from cost centers into growth engines.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-[#00BFFF12]">
                <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>{item.tag}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: '#00BFFF99' }}>
                  <ExternalLink className="w-3 h-3" />
                  Read perspective
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 7.5 RELATED BLUEPRINTS ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>Transformation Blueprints</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Reference architectures that bring this capability to life.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Customer 360 & Intelligent Engagement', industry: 'Banking', slug: 'customer-360-intelligent-engagement' },
              { title: 'Intelligent Patient Experience', industry: 'Healthcare', slug: 'intelligent-patient-experience' },
              { title: 'Agentic Workforce Transformation', industry: 'Enterprise', slug: 'agentic-workforce-transformation' },
            ].map((bp, i) => (
              <Link key={i} to={`/blueprints/${bp.slug}`} className="group bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF]/25 transition-all duration-300">
                <span className="text-tiny text-[#00BFFF]/60 mb-2 block">{bp.industry}</span>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#00BFFF] transition-colors">{bp.title}</h3>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]/40 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all mt-2" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/blueprints?capability=apps" className="inline-flex items-center gap-1.5 text-[#00BFFF] text-sm font-medium hover:underline">
              View all related blueprints <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* ═══ 8. CTA ═══ */}
        <motion.section className="pb-20 md:pb-28 lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Ready to turn business applications into<br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#FB923C] bg-clip-text text-transparent">competitive advantage</span>?
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how intelligent CRM and customer experience platforms can drive growth — with Saudi compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blueprints?capability=apps"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300">
                View Transformation Blueprints
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
