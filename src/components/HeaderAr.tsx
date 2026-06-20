import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackCTAClick, trackExecutiveBriefingClick } from '../lib/analytics';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

export const HeaderAr = () => {
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
    { name: 'من نحن', desc: 'قصتنا وقيادتنا ورسالتنا', path: '/about' },
    { name: 'معمارية التحول', desc: '١٠ طبقات. نظام واحد متكامل.', path: '/architecture' },
    { name: 'منظومة القيمة المؤسسية', desc: 'كيف تتراكم القيمة عبر الآفاق', path: '/value' },
    { name: 'شركاؤنا', desc: 'شركاء تقنية عالميون', path: '/partners' },
    { name: 'المخططات المرجعية', desc: 'حالات تحول مرجعية', path: '/blueprints' },
  ];

  // ── القدرات حسب القطاع ──
  const industryCapabilityMap = [
    { heading: 'القطاع الحكومي', path: '/ar/industries/government', caps: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'الأمن السيبراني', 'البنية التحتية السيادية'] },
    { heading: 'الخدمات المالية والمصرفية', path: '/ar/industries/banking', caps: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'تطبيقات الأعمال', 'الأمن السيبراني'] },
    { heading: 'النفط والغاز', path: '/ar/industries/oil-gas', caps: ['الذكاء الاصطناعي المؤسسي', 'التكامل والعمليات', 'الأمن السيبراني', 'البنية التحتية السيادية'] },
    { heading: 'الرعاية الصحية', path: '/ar/industries/healthcare', caps: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'تطبيقات الأعمال', 'التكامل'] },
    { heading: 'المؤسسات الكبرى', path: '/ar/industries/enterprise', caps: ['الذكاء الاصطناعي المؤسسي', 'تطبيقات الأعمال', 'الأمن السيبراني', 'عمليات التقنية'] },
  ];

  // ── Capabilities by Capability tab (3 Pillars → 7 cap pages) ──
  const capabilityPillars = [
    {
      pillar: 'الذكاء',
      tagline: 'AI · Analytics · Data',
      color: '#00BFFF',
      items: [
        { name: 'الذكاء الاصطناعي المؤسسي والأتمتة', desc: 'وكلاء الذكاء الاصطناعي، المساعدون الأذكياء، MLOps', path: '/capabilities/ai' },
        { name: 'البيانات والتحليلات والذكاء', desc: 'منصات البيانات، إدارة البيانات الرئيسية، ذكاء الأعمال', path: '/capabilities/data' },
      ],
    },
    {
      pillar: 'الأتمتة',
      tagline: 'Apps · Integration · Workflow',
      color: '#F59E0B',
      items: [
        { name: 'تطبيقات الأعمال وتجربة العملاء', desc: 'إدارة علاقات العملاء، مركز اتصال، تجارة', path: '/capabilities/apps' },
        { name: 'التكامل والعمليات الذكية', desc: 'معمارية API، بالأحداث، تنسيق سير العمل', path: '/capabilities/integration' },
      ],
    },
    {
      pillar: 'الثقة',
      tagline: 'Cyber · Sovereign · Resilience',
      color: '#7C3AED',
      items: [
        { name: 'الأمن السيبراني والمرونة السيبرانية', desc: 'مركز عمليات أمنية، Zero Trust، الهوية', path: '/capabilities/cyber' },
        { name: 'البنية التحتية السيادية', desc: 'مراكز بيانات، سحابة هجينة، بنية الذكاء التحتية', path: '/capabilities/infra' },
        { name: 'عمليات التقنية', desc: 'هندسة المنصات، AIOps، SRE', path: '/capabilities/ops' },
      ],
    },
  ];

  // ── Services ──
  const serviceCategories = [
    {
      heading: 'الاستشارات والتخطيط',
      path: '/services/advisory',
      desc: 'الاستراتيجية، المعمارية، جاهزية الذكاء الاصطناعي، خرائط طريق الامتثال',
      items: ['تقييم جاهزية الذكاء الاصطناعي', 'استشارات الامتثال والحوكمة', 'المعمارية المؤسسية', 'استراتيجية تحول الأعمال'],
    },
    {
      heading: 'التنفيذ والتسليم',
      path: '/services/implementation',
      desc: 'النشر، التكامل، التبني، الحوكمة',
      items: ['نشر الذكاء الاصطناعي والأتمتة', 'تسليم المنصات والتطبيقات', 'بناء منصة البيانات', 'تطبيق Zero Trust'],
    },
    {
      heading: 'العمليات المدارة',
      path: '/services/operations',
      desc: 'عمليات منصات ٢٤×٧، AIOps، SRE، FinOps، تحسين مستمر',
      items: ['عمليات تقنية ٢٤×٧', 'مركز عمليات أمنية كخدمة', 'حوكمة FinOps', 'هندسة المنصات'],
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
      <header style={{ fontFamily: "'Tajawal', sans-serif" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-bg-primary/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}bionic-full-dark.svg`}
                alt="Bionic Solutions"
                className="h-10 w-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)',
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-row-reverse items-center gap-1">

              {/* ═══ About Dropdown ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setAboutOpen(true); }}
                onMouseLeave={() => setAboutOpen(false)}>
                <Link to="/ar/about"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>عن الشركة</span>
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
                <Link to="/ar/capabilities/ai"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>خطوط الأعمال</span>
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
                          حسب المنتجات
                          {capabilitiesTab === 'products' && <motion.div layoutId="cap-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF] rounded-full" />}
                        </button>
                        <button onClick={() => setCapabilitiesTab('capability')}
                          className={`relative px-4 py-3.5 text-sm font-medium transition-colors ${capabilitiesTab === 'capability' ? 'text-accent-primary' : 'text-text-muted hover:text-text-primary'}`}>
                          حسب القدرات
                          {capabilitiesTab === 'capability' && <motion.div layoutId="cap-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />}
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
                                  { cat: 'الذكاء الاصطناعي المؤسسي والتعلم الآلي', sub: 'watsonx · Vertex AI · Agentforce' },
                                  { cat: 'البيانات والتحليلات', sub: 'Tableau · Informatica · BigQuery' },
                                  { cat: 'محطات عمل وأجهزة ذكاء اصطناعي', sub: 'Precision · ThinkPad P-Series · Core Ultra' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/ar/products"
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
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">Automation</h4>
                                  <p className="text-tiny text-text-muted">CRM · Integration · Advisory</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 ml-4">
                                {[
                                  { cat: 'إدارة علاقات العملاء وتجربة العميل', sub: 'Sales · Service · Marketing Cloud' },
                                  { cat: 'التكامل والأتمتة', sub: 'MuleSoft · Ansible · إدارة API' },
                                  { cat: 'الاستشارات والاستراتيجية', sub: 'جاهزية الذكاء الاصطناعي · المعمارية · خارطة الطريق' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/ar/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#F59E0B] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* Trust */}
                            <div className="p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7C3AED' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">Trust</h4>
                                  <p className="text-tiny text-text-muted">Infra · Cyber · Cloud</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 ml-4">
                                {[
                                  { cat: 'الخوادم والتخزين', sub: 'PowerEdge · ThinkSystem · FlashSystem' },
                                  { cat: 'معالجات ومسرعات الذكاء الاصطناعي', sub: 'Gaudi 3 · NVIDIA H100 · Intel GPU Max' },
                                  { cat: 'الأمن السيبراني', sub: 'QRadar · Guardium · Cyber Recovery' },
                                  { cat: 'السحابة والبنية التحتية فائقة التقارب', sub: 'VxRail · ThinkAgile · APEX · OpenShift' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/ar/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#7C3AED] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* CTA row */}
                            <Link to="/ar/products"
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
                              <div key={ind.heading} className="p-5 text-right">
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
                          {capabilitiesTab === 'products' ? 'منظومة الذكاء الاصطناعي الكاملة — من المحمول إلى السحابة. ١١ شريكًا. علاقة واحدة.' : capabilitiesTab === 'capability' ? '٧ قدرات. ٣ ركائز. الذكاء · الأتمتة · الثقة.' : '٥ قطاعات. من القطاع الحكومي إلى المؤسسات الكبرى — تحول الذكاء الاصطناعي مُطبّق على قطاعك.'}
                        </p>
                        <Link to="/ar/blueprints" className="inline-flex items-center gap-2 text-small font-medium text-accent-primary hover:text-accent-secondary transition-colors">
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
                <Link to="/ar/services"
                  className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>خدماتنا</span>
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
                        <Link to="/ar/services" className="inline-flex items-center gap-2 text-small font-medium text-accent-primary hover:text-accent-secondary transition-colors">
                          View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* ═══ شركاؤنا ═══ */}
              <Link to="/ar/partners"
                className="flex items-center space-x-1 px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                شركاؤنا
              </Link>

            </nav>

            {/* Language + CTA group */}
            <div className="hidden md:flex flex-row-reverse items-center gap-3">
              <Link to="/"
                className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#00BFFF40] bg-white/[0.02] hover:bg-[#00BFFF08] transition-all duration-300"
                aria-label="English version">
                <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">🇬🇧</span>
                <span className="text-[11px] font-medium text-[#5B6470] group-hover:text-white transition-colors tracking-wide" style={{ fontFamily: "'Tajawal', sans-serif" }}>English</span>
              </Link>

              <Link to="/ar/contact"
                onClick={() => trackCTAClick('mega_menu', '/contact')}
                className="px-5 py-2 bg-accent-primary text-text-primary text-sm font-semibold rounded-full hover:bg-accent-secondary transition-all">
                تواصل معنا
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
                  <span>عن الشركة</span>
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
                  <span>خطوط الأعمال</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileCapabilitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCapabilitiesOpen && (
                  <div className="ml-2 mt-1 mb-3">
                    <div className="flex border-b border-white/5 mb-3">
                      <button onClick={() => setMobileCapabilitiesTab('products')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'products' ? 'border-[#00BFFF] text-[#00BFFF]' : 'border-transparent text-text-muted'}`}>
                        حسب المنتجات
                      </button>
                      <button onClick={() => setMobileCapabilitiesTab('capability')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'capability' ? 'border-accent-primary text-accent-primary' : 'border-transparent text-text-muted'}`}>
                        حسب القدرات
                      </button>

                    </div>
                    {mobileCapabilitiesTab === 'products' ? (
                      <div className="space-y-3">
                        {[
                          { pillar: 'الذكاء', color: '#00BFFF', cats: [
                            'Enterprise AI & ML — watsonx, Vertex AI, Agentforce',
                            'Data & Analytics — Tableau, Informatica, BigQuery',
                            'AI Workstations & Laptops — Precision, ThinkPad, Core Ultra',
                          ]},
                          { pillar: 'الأتمتة', color: '#F59E0B', cats: [
                            'CRM & Customer Experience — Sales, Service, Marketing Cloud',
                            'Integration & Automation — MuleSoft, Ansible, API Management',
                            'Advisory & Strategy — AI Readiness, Architecture, Roadmap',
                          ]},
                          { pillar: 'الثقة', color: '#7C3AED', cats: [
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
                              <Link key={cat} to="/ar/products" onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2 text-small text-text-primary hover:bg-white/5 rounded-lg transition-colors">
                                {cat}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link to="/ar/products" onClick={() => setMobileMenuOpen(false)}
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
                      <div className="space-y-3">
                        {industryCapabilityMap.map((ind) => (
                          <div key={ind.heading}>
                            <Link to={ind.path} onClick={() => setMobileMenuOpen(false)}
                              className="block px-6 py-2 text-small font-semibold text-text-primary hover:text-accent-primary transition-colors text-right">
                              {ind.heading}
                            </Link>
                            <div className="px-6 space-y-1 mt-1 mb-3">
                              {ind.caps.map((cap) => (
                                <p key={cap} className="text-tiny text-text-muted text-right">{cap}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link to="/ar/partners" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 mt-3 text-accent-primary font-medium text-small">
                      الشركاء الاستراتيجيون <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/ar/blueprints" onClick={() => setMobileMenuOpen(false)}
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
                  <span>خدماتنا</span>
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
                    <Link to="/ar/services" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-accent-primary font-medium text-small">
                      View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile شركاؤنا */}
              <Link to="/ar/partners" onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                شركاؤنا
              </Link>

              {/* Mobile Arabic */}
              <Link to="/" onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                العربية
              </Link>

              <div className="pt-3">
                <Link to="/ar/contact" onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-accent-primary text-text-primary text-center text-lg font-semibold rounded-full hover:bg-accent-secondary transition-all">
                  تواصل معنا
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
