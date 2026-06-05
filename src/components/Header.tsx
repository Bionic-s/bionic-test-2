import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackCTAClick, trackExecutiveBriefingClick } from '../lib/analytics';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [capabilitiesTab, setCapabilitiesTab] = useState<'industry' | 'capability'>('capability');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false);
  const [mobileCapabilitiesTab, setMobileCapabilitiesTab] = useState<'industry' | 'capability'>('capability');
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ── About dropdown ──
  const aboutItems = [
    { name: 'Who We Are', desc: 'Our story, leadership, and mission', path: '/about' },
    { name: 'The Bionic Difference', desc: 'What sets us apart', path: '/about' },
    { name: 'Transformation Architecture', desc: '10 layers. One integrated system.', path: '/architecture' },
    { name: 'Enterprise Value System', desc: 'How value compounds across horizons', path: '/value' },
  ];

  // ── Industries ──
  const industries = [
    { name: 'Government', desc: 'Sovereign AI, Vision 2030, national intelligence', path: '/industries/government', color: '#059669' },
    { name: 'Banking', desc: 'SAMA compliance, fraud intelligence, open banking', path: '/industries/banking', color: '#2563EB' },
    { name: 'Oil & Gas', desc: 'Predictive ops, OT/IT security, carbon intelligence', path: '/industries/oil-gas', color: '#D97706' },
    { name: 'Healthcare', desc: 'Clinical AI, patient experience, health clusters', path: '/industries/healthcare', color: '#0D9488' },
    { name: 'Enterprise', desc: 'Agentic workforce, Zero Trust, platform modernization', path: '/industries/enterprise', color: '#7C3AED' },
  ];

  // ── Capabilities by Industry tab ──
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
      color: '#F59E0B',
      items: [
        { name: 'Business Applications & CX', desc: 'CRM, contact center, commerce', path: '/capabilities/apps' },
        { name: 'Integration & Intelligent Ops', desc: 'API-led, event-driven, workflow', path: '/capabilities/integration' },
      ],
    },
    {
      pillar: 'Trust',
      tagline: 'Cyber · Sovereign · Resilience',
      color: '#7C3AED',
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
    setIndustriesOpen(false);
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
    setMobileIndustriesOpen(false);
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
              <img
                src="/bionic-full-dark.svg"
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

              {/* ═══ Industries Mega-Menu ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setIndustriesOpen(true); }}
                onMouseLeave={() => setIndustriesOpen(false)}>
                <Link to="/industries/government"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {industriesOpen && <div className="absolute top-full left-0 h-3 w-full" />}
                {industriesOpen && (
                  <div className="absolute top-full -left-16 mt-1 w-[560px] bg-bg-secondary border border-white/10 rounded-xl shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden"
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}>
                    <div className="p-2">
                      <div className="grid grid-cols-3 gap-0">
                        {industries.map((ind) => (
                          <Link key={ind.name} to={ind.path} className="p-4 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: ind.color }} />
                              <p className="text-small font-semibold text-text-primary group-hover/link:text-accent-primary transition-colors">{ind.name}</p>
                            </div>
                            <p className="text-tiny text-text-muted leading-relaxed">{ind.desc}</p>
                          </Link>
                        ))}
                        <div className="col-span-3 border-t border-white/5 mt-1 pt-4 px-4 pb-2">
                          <p className="text-tiny text-text-muted">
                            5 industries. Government to enterprise — AI transformation applied to your sector.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ═══ Capabilities Mega-Menu — Tabbed ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setCapabilitiesOpen(true); }}
                onMouseLeave={() => { setCapabilitiesOpen(false); setCapabilitiesTab('capability'); }}>
                <Link to="/capabilities/ai"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>Capabilities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${capabilitiesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {capabilitiesOpen && <div className="absolute top-full left-0 h-3 w-full" />}
                {capabilitiesOpen && (
                  <div className="fixed left-0 right-0 mx-auto" style={{ top: '5rem', maxWidth: '80rem' }}
                    onMouseEnter={() => setCapabilitiesOpen(true)}
                    onMouseLeave={() => { setCapabilitiesOpen(false); setCapabilitiesTab('capability'); }}>
                    <div className="mx-4 bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-xl">
                      {/* Tabs */}
                      <div className="flex border-b border-white/5 px-6">
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
                        {capabilitiesTab === 'capability' ? (
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
                          7 capabilities. 3 pillars. Intelligence · Automation · Trust.
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

              {/* ═══ Blueprints ═══ */}
              <Link to="/blueprints" className="px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                Blueprints
              </Link>

              {/* ═══ Contact ═══ */}
              <Link to="/contact" className="px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to="/contact"
                onClick={() => trackCTAClick('mega_menu', '/contact')}
                className="px-5 py-2 bg-accent-primary text-text-primary text-sm font-semibold rounded-full hover:bg-accent-secondary transition-all">
                Request Executive Briefing
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
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-primary hover:text-accent-primary transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-6 py-2 space-y-1">

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

              {/* Mobile Industries */}
              <div>
                <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>Industries</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="ml-2 mt-1 space-y-1 mb-3">
                    {industries.map((ind) => (
                      <Link key={ind.name} to={ind.path} onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-small text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: ind.color }} />
                        <div>
                          <div className="font-medium">{ind.name}</div>
                          <div className="text-tiny text-text-muted">{ind.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Capabilities — Tabbed */}
              <div>
                <button onClick={() => setMobileCapabilitiesOpen(!mobileCapabilitiesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>Capabilities</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileCapabilitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCapabilitiesOpen && (
                  <div className="ml-2 mt-1 mb-3">
                    <div className="flex border-b border-white/5 mb-3">
                      <button onClick={() => setMobileCapabilitiesTab('capability')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'capability' ? 'border-accent-primary text-accent-primary' : 'border-transparent text-text-muted'}`}>
                        By Capability
                      </button>
                      <button onClick={() => setMobileCapabilitiesTab('industry')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'industry' ? 'border-accent-primary text-accent-primary' : 'border-transparent text-text-muted'}`}>
                        By Industry
                      </button>
                    </div>
                    {mobileCapabilitiesTab === 'capability' ? (
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
                    <Link to="/blueprints" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 mt-3 text-accent-primary font-medium text-small">
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

              {/* Mobile Blueprints */}
              <Link to="/blueprints" onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                Blueprints
              </Link>

              {/* Mobile Contact */}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                Contact
              </Link>

              <div className="pt-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-accent-primary text-text-primary text-center text-lg font-semibold rounded-full hover:bg-accent-secondary transition-all">
                  Request Executive Briefing
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
