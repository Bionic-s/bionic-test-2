import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackCTAClick, trackExecutiveBriefingClick } from '../lib/analytics';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [capabilitiesTab, setCapabilitiesTab] = useState<'products' | 'capability' | 'industry'>('products');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false);
  const [mobileCapabilitiesTab, setMobileCapabilitiesTab] = useState<'products' | 'capability' | 'industry'>('products');
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ── About dropdown ──
  const aboutItems = [
    { name: 'Who We Are', desc: 'Our story, leadership, and mission', path: '/about' },
    { name: 'Transformation Architecture', desc: '10 layers. One integrated system.', path: '/architecture' },
    { name: 'Enterprise Value System', desc: 'How value compounds across horizons', path: '/value' },
    { name: 'Partner Ecosystem', desc: 'Global technology partners', path: '/partners' },
    { name: 'Blueprints', desc: 'Transformation case studies', path: '/blueprints' },
  ];

  // ── Capability by Industry mapping ──
  const industryCapabilityMap = [
    { heading: 'Government', path: '/industries/government', caps: ['Enterprise AI', 'Data & Intelligence', 'Cybersecurity', 'Sovereign Infra'] },
    { heading: 'Banking', path: '/industries/banking', caps: ['Enterprise AI', 'Data & Intelligence', 'Business Apps', 'Cybersecurity'] },
    { heading: 'Oil & Gas', path: '/industries/oil-gas', caps: ['Enterprise AI', 'Integration & Ops', 'Cybersecurity', 'Sovereign Infra'] },
    { heading: 'Healthcare', path: '/industries/healthcare', caps: ['Enterprise AI', 'Data & Intelligence', 'Business Apps', 'Integration'] },
    { heading: 'Enterprise', path: '/industries/enterprise', caps: ['Enterprise AI', 'Business Apps', 'Cybersecurity', 'Technology Ops'] },
  ];

  // ── Capabilities by Capability tab (3 Pillars → 7 cap pages) ──
  const capabilityPillars = [
    {
      pillar: 'Intelligence',
      tagline: 'AI · Analytics · Data',
      color: '#00BFFF',
      items: [
        { name: 'Enterprise AI & Automation', desc: 'Agentic AI, copilots, MLOps', path: '/capabilities/ai' },
        { name: 'Data, Analytics & Intelligence', desc: 'Data platforms, MDM, BI', path: '/capabilities/data' },
      ],
    },
    {
      pillar: 'Automation',
      tagline: 'Apps · Integration · Workflow',
      color: '#00BFFF',
      items: [
        { name: 'Business Applications & CX', desc: 'CRM, contact center, commerce', path: '/capabilities/apps' },
        { name: 'Integration & Intelligent Ops', desc: 'API-led, event-driven, workflow', path: '/capabilities/integration' },
      ],
    },
    {
      pillar: 'Trust',
      tagline: 'Cyber · Sovereign · Resilience',
      color: '#00BFFF',
      items: [
        { name: 'Cybersecurity & Cyber Resilience', desc: 'SOC, Zero Trust, identity', path: '/capabilities/cyber' },
        { name: 'Sovereign Infrastructure', desc: 'Datacenter, hybrid cloud, AI infra', path: '/capabilities/infra' },
        { name: 'Technology Operations', desc: 'Platform engineering, AIOps, SRE', path: '/capabilities/ops' },
      ],
    },
  ];

  // ── Services ──
  const serviceCategories = [
    {
      heading: 'Consulting & Advisory',
      path: '/services/advisory',
      desc: 'Strategy, architecture, AI readiness, compliance roadmaps',
      items: ['AI Readiness Assessment', 'Compliance & GRC Advisory', 'Enterprise Architecture', 'Business Transformation Strategy'],
    },
    {
      heading: 'Implementation & Delivery',
      path: '/services/implementation',
      desc: 'Deployment, integration, adoption, governance',
      items: ['AI & Automation Deployment', 'Platform & App Delivery', 'Data Platform Build', 'Zero Trust Implementation'],
    },
    {
      heading: 'Managed Operations',
      path: '/services/operations',
      desc: '24×7 platform ops, AIOps, SRE, FinOps, continuous optimization',
      items: ['24×7 Technology Operations', 'SOC-as-a-Service', 'FinOps Governance', 'Platform Engineering'],
    },
  ];

  const closeAll = () => {
    setAboutOpen(false);
    setCapabilitiesOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileCapabilitiesOpen(false);
    setMobileCapabilitiesTab('capability');
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-bg-primary/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img fetchPriority="high"                 src={`${import.meta.env.BASE_URL}bionic-full-dark.svg`}
                alt="Bionic Solutions"
                className="h-10 w-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)',
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">

              {/* ═══ About Dropdown ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setAboutOpen(true); }}
                onMouseLeave={() => setAboutOpen(false)}>
                <Link to="/about"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </Link>
                {aboutOpen && <div className="absolute top-full left-0 h-3 w-full" />}
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-bg-secondary border border-white/10 rounded-xl shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}>
                    <div className="p-2">
                      {aboutItems.map((item) => (
                        <Link key={item.name} to={item.path}
                          className="block px-4 py-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                          <p className="text-small font-medium text-text-primary group-hover/link:text-accent-primary transition-colors">{item.name}</p>
                          <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ═══ Our Offerings Mega-Menu — Tabbed ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setCapabilitiesOpen(true); }}
                onMouseLeave={() => { setCapabilitiesOpen(false); setCapabilitiesTab('products'); }}>
                <Link to="/capabilities/ai"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>Our Offerings</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${capabilitiesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {capabilitiesOpen && <div className="absolute top-full left-0 h-3 w-full" />}
                {capabilitiesOpen && (
                  <div className="fixed left-0 right-0 mx-auto" style={{ top: '5rem', maxWidth: '80rem' }}
                    onMouseEnter={() => setCapabilitiesOpen(true)}
                    onMouseLeave={() => { setCapabilitiesOpen(false); setCapabilitiesTab('products'); }}>
                    <div className="mx-4 bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-xl">
                      {/* Tabs */}
                      <div className="flex border-b border-white/5 px-6">
                        <button onClick={() => setCapabilitiesTab('products')}
                          className={`relative px-4 py-3.5 text-sm font-medium transition-colors ${capabilitiesTab === 'products' ? 'text-[#00BFFF]' : 'text-text-muted hover:text-text-primary'}`}>
                          By Products
                          {capabilitiesTab === 'products' && <motion.div layoutId="cap-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF] rounded-full" />}
                        </button>
                        <button onClick={() => setCapabilitiesTab('capability')}
                          className={`relative px-4 py-3.5 text-sm font-medium transition-colors ${capabilitiesTab === 'capability' ? 'text-accent-primary' : 'text-text-muted hover:text-text-primary'}`}>
                          By Capability
                          {capabilitiesTab === 'capability' && <motion.div layoutId="cap-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />}
                        </button>
                        <button onClick={() => setCapabilitiesTab('industry')}
                          className={`relative px-4 py-3.5 text-sm font-medium transition-colors ${capabilitiesTab === 'industry' ? 'text-accent-primary' : 'text-text-muted hover:text-text-primary'}`}>
                          By Industry
                          {capabilitiesTab === 'industry' && <motion.div layoutId="cap-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />}
                        </button>

                      </div>
                      {/* Content */}
                      <div className="p-2">
                        {capabilitiesTab === 'products' ? (
                          <div className="grid grid-cols-3 gap-0">
                            {/* Intelligence */}
                            <div className="p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">Intelligence</h4>
                                  <p className="text-tiny text-text-muted">AI · Data · Workstations</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 ml-4">
                                {[
                                  { cat: 'Enterprise AI & ML', sub: 'watsonx, Vertex AI, Agentforce' },
                                  { cat: 'Data & Analytics', sub: 'Tableau, Informatica, BigQuery' },
                                  { cat: 'AI Workstations & Laptops', sub: 'Precision, ThinkPad P-Series, Core Ultra' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#00BFFF] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* Automation */}
                            <div className="p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">Automation</h4>
                                  <p className="text-tiny text-text-muted">CRM · Integration · Advisory</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 ml-4">
                                {[
                                  { cat: 'CRM & Customer Experience', sub: 'Sales, Service, Marketing Cloud' },
                                  { cat: 'Integration & Automation', sub: 'MuleSoft, Ansible, API Management' },
                                  { cat: 'Advisory & Strategy', sub: 'AI Readiness, Architecture, Roadmap' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#00BFFF] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* Trust */}
                            <div className="p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">Trust</h4>
                                  <p className="text-tiny text-text-muted">Infra · Cyber · Cloud</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 ml-4">
                                {[
                                  { cat: 'Servers & Storage', sub: 'PowerEdge, ThinkSystem, FlashSystem' },
                                  { cat: 'AI GPUs & Accelerators', sub: 'Gaudi 3, NVIDIA H100, Intel GPU Max' },
                                  { cat: 'Cybersecurity', sub: 'QRadar, Guardium, Cyber Recovery' },
                                  { cat: 'Cloud & HCI', sub: 'VxRail, ThinkAgile, APEX, OpenShift' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#00BFFF] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* CTA row */}
                            <Link to="/products"
                              className="col-span-3 px-4 py-3 mt-1 rounded-lg hover:bg-[#00BFFF06] transition-colors flex items-center justify-center gap-2 text-small font-semibold text-[#00BFFF] hover:text-white">
                              View Full Product Catalog → 4 tabs · 10 categories · 50+ products <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        ) : capabilitiesTab === 'capability' ? (
                          <div className="grid grid-cols-3 gap-0">
                            {capabilityPillars.map((pillar) => (
                              <div key={pillar.pillar} className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                                  <div>
                                    <h4 className="text-small font-semibold text-text-primary">{pillar.pillar}</h4>
                                    <p className="text-tiny text-text-muted">{pillar.tagline}</p>
                                  </div>
                                </div>
                                <div className="space-y-0.5 ml-4">
                                  {pillar.items.map((item) => (
                                    <Link key={item.name} to={item.path}
                                      className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                                      <p className="text-small font-medium text-text-primary group-hover/link:text-accent-primary transition-colors">{item.name}</p>
                                      <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.desc}</p>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-0">
                            {industryCapabilityMap.map((ind) => (
                              <div key={ind.heading} className="p-5">
                                <Link to={ind.path} className="text-small font-semibold text-text-primary hover:text-accent-primary transition-colors">{ind.heading}</Link>
                                <div className="mt-3 space-y-1">
                                  {ind.caps.map((cap) => (
                                    <p key={cap} className="text-tiny text-text-muted px-3 py-1.5 -mx-3 rounded-lg">{cap}</p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Footer */}
                      <div className="border-t border-white/5 px-6 py-4 flex items-center justify-between bg-bg-primary/30">
                        <p className="text-tiny text-text-muted">
                          {capabilitiesTab === 'products' ? 'Full AI stack — from laptop to cloud. 11 partners. One relationship.' : capabilitiesTab === 'capability' ? '7 capabilities. 3 pillars. Intelligence · Automation · Trust.' : '5 sectors. Government to enterprise — AI transformation applied to your sector.'}
                        </p>
                        <Link to="/blueprints" className="inline-flex items-center gap-2 text-small font-medium text-accent-primary hover:text-accent-secondary transition-colors">
                          View Transformation Blueprints <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ═══ Services Mega-Menu ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setServicesOpen(true); }}
                onMouseLeave={() => setServicesOpen(false)}>
                <Link to="/services"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {servicesOpen && <div className="absolute top-full left-0 h-3 w-full" />}
                {servicesOpen && (
                  <div className="fixed left-0 right-0 mx-auto" style={{ top: '5rem', maxWidth: '60rem' }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}>
                    <div className="mx-4 bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden">
                      <div className="p-2">
                        <div className="grid grid-cols-3 gap-0">
                          {serviceCategories.map((cat) => (
                            <div key={cat.heading} className="p-5">
                              <Link to={cat.path} className="text-small font-semibold text-text-primary hover:text-accent-primary transition-colors">
                                {cat.heading}
                              </Link>
                              <p className="text-tiny text-text-muted mt-1 mb-3">{cat.desc}</p>
                              <div className="space-y-0.5">
                                {cat.items.map((item) => (
                                  <Link key={item} to={cat.path}
                                    className="block px-3 py-2 -mx-3 rounded-lg text-tiny text-text-primary hover:text-accent-primary hover:bg-white/[0.04] transition-colors">
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-white/5 px-6 py-4 flex items-center justify-between bg-bg-primary/30">
                        <p className="text-tiny text-text-muted">Advisory · Implementation · Managed Operations</p>
                        <Link to="/services" className="inline-flex items-center gap-2 text-small font-medium text-accent-primary hover:text-accent-secondary transition-colors">
                          View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* ═══ Partners ═══ */}
              <Link to="/partners"
                className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                Partners
              </Link>

            </nav>

            {/* Language + CTA group */}
            <div className="hidden md:flex items-center gap-3">
              <Link to={`/ar${location.pathname}`}
                className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#00BFFF40] bg-white/[0.02] hover:bg-[#00BFFF08] transition-all duration-300"
                aria-label="النسخة العربية">
                <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">🇸🇦</span>
                <span className="text-[11px] font-medium text-[#5B6470] group-hover:text-white transition-colors tracking-wide" style={{ fontFamily: "'Tajawal', sans-serif" }}>عربي</span>
              </Link>

              <Link to="/contact"
                onClick={() => trackCTAClick('mega_menu', '/contact')}
                className="px-5 py-2 bg-accent-primary text-text-primary text-sm font-semibold rounded-full hover:bg-accent-secondary transition-all">
                Start the Conversation
              </Link>
            </div>

            {/* Mobile Burger */}
            <button onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-text-primary hover:text-accent-primary transition-colors" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-bg-secondary shadow-2xl animate-slide-in-right overflow-y-auto">
            {/* Mobile Nav Header: Logo + Close */}
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img fetchPriority="high"                   src={`${import.meta.env.BASE_URL}bionic-full-dark.svg`}
                  alt="Bionic Solutions"
                  className="h-8 w-auto"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)',
                  }}
                />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-primary hover:text-accent-primary transition-colors rounded-lg hover:bg-white/5">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-6 py-4 space-y-1">

              {/* Mobile About */}
              <div>
                <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>About</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="ml-2 mt-1 space-y-1 mb-3">
                    {aboutItems.map((item) => (
                      <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-small text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-tiny text-text-muted">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Our Offerings — Tabbed */}
              <div>
                <button onClick={() => setMobileCapabilitiesOpen(!mobileCapabilitiesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>Our Offerings</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileCapabilitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCapabilitiesOpen && (
                  <div className="ml-2 mt-1 mb-3">
                    <div className="flex border-b border-white/5 mb-3">
                      <button onClick={() => setMobileCapabilitiesTab('products')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'products' ? 'border-[#00BFFF] text-[#00BFFF]' : 'border-transparent text-text-muted'}`}>
                        By Products
                      </button>
                      <button onClick={() => setMobileCapabilitiesTab('capability')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'capability' ? 'border-accent-primary text-accent-primary' : 'border-transparent text-text-muted'}`}>
                        By Capability
                      </button>

                    </div>
                    {mobileCapabilitiesTab === 'products' ? (
                      <div className="space-y-3">
                        {[
                          { pillar: 'Intelligence', color: '#00BFFF', cats: [
                            'Enterprise AI & ML — watsonx, Vertex AI, Agentforce',
                            'Data & Analytics — Tableau, Informatica, BigQuery',
                            'AI Workstations & Laptops — Precision, ThinkPad, Core Ultra',
                          ]},
                          { pillar: 'Automation', color: '#00BFFF', cats: [
                            'CRM & Customer Experience — Sales, Service, Marketing Cloud',
                            'Integration & Automation — MuleSoft, Ansible, API Management',
                            'Advisory & Strategy — AI Readiness, Architecture, Roadmap',
                          ]},
                          { pillar: 'Trust', color: '#00BFFF', cats: [
                            'Servers & Storage — PowerEdge, ThinkSystem, FlashSystem',
                            'AI GPUs & Accelerators — Gaudi 3, H100, Intel GPU Max',
                            'Cybersecurity — QRadar, Guardium, Cyber Recovery',
                            'Cloud & HCI — VxRail, ThinkAgile, APEX, OpenShift',
                          ]},
                        ].map((pillar) => (
                          <div key={pillar.pillar}>
                            <div className="flex items-center gap-2 px-4 py-1">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                              <p className="text-tiny font-semibold text-text-muted uppercase tracking-wider">{pillar.pillar}</p>
                            </div>
                            {pillar.cats.map((cat) => (
                              <Link key={cat} to="/products" onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2 text-small text-text-primary hover:bg-white/5 rounded-lg transition-colors">
                                {cat}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link to="/products" onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 mt-2 text-[#00BFFF] font-semibold text-small border-t border-white/5 pt-4">
                          View Full Product Catalog → 50+ products <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : mobileCapabilitiesTab === 'capability' ? (
                      <div className="space-y-3">
                        {capabilityPillars.map((pillar) => (
                          <div key={pillar.pillar}>
                            <div className="flex items-center gap-2 px-4 py-1">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                              <p className="text-tiny font-semibold text-text-muted uppercase tracking-wider">{pillar.pillar}</p>
                            </div>
                            {pillar.items.map((item) => (
                              <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2.5 text-small text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-tiny text-text-muted">{item.desc}</div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {industryCapabilityMap.map((ind) => (
                          <div key={ind.heading}>
                            <Link to={ind.path} onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-small font-semibold text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors">{ind.heading}</Link>
                            <div className="ml-2">
                              {ind.caps.map((cap) => (
                                <p key={cap} className="px-6 py-1 text-tiny text-text-muted">{cap}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link to="/partners" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 mt-3 text-accent-primary font-medium text-small">
                      Strategic Partners <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/blueprints" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-accent-primary font-medium text-small">
                      View Blueprints <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-2 mt-1 space-y-3 mb-3">
                    {serviceCategories.map((cat) => (
                      <div key={cat.heading}>
                        <Link to={cat.path} onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-small font-semibold text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors">{cat.heading}</Link>
                        <div className="ml-2">
                          {cat.items.map((item) => (
                            <Link key={item} to={cat.path} onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-tiny text-text-muted hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors">{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link to="/services" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-accent-primary font-medium text-small">
                      View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Partners */}
              <Link to="/partners" onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                Our Partners
              </Link>

              {/* Mobile Arabic */}
              <Link to={`/ar${location.pathname}`} onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                العربية
              </Link>

              <div className="pt-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-accent-primary text-text-primary text-center text-lg font-semibold rounded-full hover:bg-accent-secondary transition-all">
                  Start the Conversation
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.3s ease-out forwards; }
      `}</style>
    </>
  );
};
