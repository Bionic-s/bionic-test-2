import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackCTAClick, trackExecutiveBriefingClick } from '../lib/analytics';
import { motion } from 'framer-motion';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

export const HeaderAr = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [capabilitiesTab, setCapabilitiesTab] = useState<'products' | 'capability' | 'industry'>('products');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false);
  const [mobileCapabilitiesTab, setMobileCapabilitiesTab] = useState<'products' | 'capability' | 'industry'>('products');
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ── About dropdown ──
  const aboutItems = [
    { name: 'من نحن', desc: 'قصتنا، فريق القيادة، ورسالتنا', path: '/ar/about' },
    { name: 'معمارية التحول', desc: '١٠ طبقات. منظومة واحدة متكاملة.', path: '/ar/architecture' },
    { name: 'منظومة القيمة المؤسسية', desc: 'كيف تتراكم القيمة عبر الآفاق', path: '/ar/value' },
    { name: 'منظومة الشركاء', desc: 'شركاء التقنية العالميون', path: '/ar/partners' },
    { name: 'المخططات المرجعية', desc: 'دراسات حالة تحولية', path: '/ar/blueprints' },
  ];

  // ── Industries ──
  const industries = [
    { name: 'حكومي', desc: 'الذكاء السيادي، رؤية ٢٠٣٠، الذكاء الوطني', path: '/ar/industries/government', color: '#059669' },
    { name: 'بنوك', desc: 'امتثال البنك المركزي، ذكاء الاحتيال، الخدمات المصرفية المفتوحة', path: '/ar/industries/banking', color: '#2563EB' },
    { name: 'نفط وغاز', desc: 'العمليات التنبؤية، أمن OT/IT، ذكاء الكربون', path: '/ar/industries/oil-gas', color: '#D97706' },
    { name: 'رعاية صحية', desc: 'الذكاء السريري، تجربة المريض، التجمعات الصحية', path: '/ar/industries/healthcare', color: '#0D9488' },
    { name: 'مؤسسات كبرى', desc: 'فرق العمل المعززة بالذكاء الاصطناعي، Zero Trust، تحديث المنصات', path: '/ar/industries/enterprise', color: '#7C3AED' },
  ];

  // ── Capabilities by Industry tab ──
  const industryCapabilityMap = [
    { heading: 'حكومي', path: '/ar/industries/government', caps: ['الذكاء المؤسسي', 'البيانات والذكاء', 'الأمن السيبراني', 'البنية التحتية السيادية'] },
    { heading: 'بنوك', path: '/ar/industries/banking', caps: ['الذكاء المؤسسي', 'البيانات والذكاء', 'تطبيقات الأعمال', 'الأمن السيبراني'] },
    { heading: 'نفط وغاز', path: '/ar/industries/oil-gas', caps: ['الذكاء المؤسسي', 'التكامل والعمليات', 'الأمن السيبراني', 'البنية التحتية السيادية'] },
    { heading: 'رعاية صحية', path: '/ar/industries/healthcare', caps: ['الذكاء المؤسسي', 'البيانات والذكاء', 'تطبيقات الأعمال', 'التكامل'] },
    { heading: 'مؤسسات كبرى', path: '/ar/industries/enterprise', caps: ['الذكاء المؤسسي', 'تطبيقات الأعمال', 'الأمن السيبراني', 'عمليات التقنية'] },
  ];

  // ── Capabilities by Capability tab (3 Pillars → 7 cap pages) ──
  const capabilityPillars = [
    {
      pillar: 'الذكاء',
      tagline: 'ذكاء اصطناعي · تحليلات · بيانات',
      color: '#00BFFF',
      items: [
        { name: 'الذكاء الاصطناعي المؤسسي والأتمتة', desc: 'وكلاء ذكاء اصطناعي ومساعدون أذكياء، MLOps', path: '/ar/capabilities/ai' },
        { name: 'البيانات والتحليلات والذكاء', desc: 'منصات بيانات، إدارة بيانات رئيسية، ذكاء أعمال', path: '/ar/capabilities/data' },
      ],
    },
    {
      pillar: 'الأتمتة',
      tagline: 'تطبيقات · تكامل · سير عمل',
      color: '#F59E0B',
      items: [
        { name: 'تطبيقات الأعمال وتجربة العملاء', desc: 'إدارة علاقات العملاء، مركز اتصال، تجارة', path: '/ar/capabilities/apps' },
        { name: 'التكامل والعمليات الذكية', desc: 'معمارية قائمة على واجهات برمجة التطبيقات، معمارية بالأحداث، تنسيق سير العمل', path: '/ar/capabilities/integration' },
      ],
    },
    {
      pillar: 'الثقة',
      tagline: 'أمن سيبراني · سيادة · مرونة',
      color: '#7C3AED',
      items: [
        { name: 'الأمن السيبراني والمرونة السيبرانية', desc: 'مركز عمليات أمنية، Zero Trust، هوية', path: '/ar/capabilities/cyber' },
        { name: 'البنية التحتية السيادية', desc: 'مراكز بيانات، سحابة هجينة، بنية تحتية للذكاء الاصطناعي', path: '/ar/capabilities/infra' },
        { name: 'عمليات التقنية', desc: 'هندسة منصات، AIOps، هندسة موثوقية', path: '/ar/capabilities/ops' },
      ],
    },
  ];

  // ── Services ──
  const serviceCategories = [
    {
      heading: 'الاستشارات والتخطيط',
      path: '/ar/services/advisory',
      desc: 'الاستراتيجية، المعمارية، جاهزية الذكاء الاصطناعي، خرائط طريق الامتثال',
      items: ['تقييم جاهزية الذكاء الاصطناعي', 'استشارات الامتثال والحوكمة', 'المعمارية المؤسسية', 'استراتيجية التحول المؤسسي'],
    },
    {
      heading: 'التنفيذ والتسليم',
      path: '/ar/services/implementation',
      desc: 'النشر، التكامل، التبني، الحوكمة',
      items: ['نشر الذكاء الاصطناعي والأتمتة', 'تسليم المنصات والتطبيقات', 'بناء منصة البيانات', 'تطبيق نموذج Zero Trust'],
    },
    {
      heading: 'العمليات المدارة',
      path: '/ar/services/operations',
      desc: 'عمليات المنصات على مدار الساعة، AIOps، هندسة موثوقية، FinOps، تحسين مستمر',
      items: ['عمليات التقنية على مدار الساعة', 'مركز عمليات أمنية كخدمة', 'حوكمة FinOps', 'هندسة المنصات'],
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
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/ar" className="flex-shrink-0">
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
            <nav className="hidden md:flex items-center space-x-1 space-x-reverse" style={{ fontFamily: "'Tajawal', sans-serif" }}>

              {/* ═══ About Dropdown ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setAboutOpen(true); }}
                onMouseLeave={() => setAboutOpen(false)}>
                <Link to="/ar/about"
                  className="flex items-center space-x-1 space-x-reverse px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>من نحن</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </Link>
                {aboutOpen && <div className="absolute top-full right-0 h-3 w-full" />}
                {aboutOpen && (
                  <div className="absolute top-full right-0 mt-1 w-72 bg-bg-secondary border border-white/10 rounded-xl shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}>
                    <div className="p-2">
                      {aboutItems.map((item) => (
                        <Link key={item.name} to={item.path}
                          className="block px-4 py-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link text-right">
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
                  className="flex items-center space-x-1 space-x-reverse px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>خطوط الأعمال</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${capabilitiesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {capabilitiesOpen && <div className="absolute top-full right-0 h-3 w-full" />}
                {capabilitiesOpen && (
                  <div className="fixed left-0 right-0 mx-auto" style={{ top: '5rem', maxWidth: '80rem' }}
                    onMouseEnter={() => setCapabilitiesOpen(true)}
                    onMouseLeave={() => { setCapabilitiesOpen(false); setCapabilitiesTab('products'); }}>
                    <div className="mx-4 bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-xl">
                      {/* Tabs */}
                      <div className="flex border-b border-white/5 px-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>
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
                        <button onClick={() => setCapabilitiesTab('industry')}
                          className={`relative px-4 py-3.5 text-sm font-medium transition-colors ${capabilitiesTab === 'industry' ? 'text-accent-primary' : 'text-text-muted hover:text-text-primary'}`}>
                          حسب القطاع
                          {capabilitiesTab === 'industry' && <motion.div layoutId="cap-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />}
                        </button>
                      </div>
                      {/* Content */}
                      <div className="p-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                        {capabilitiesTab === 'products' ? (
                          <div className="grid grid-cols-3 gap-0">
                            {/* Intelligence */}
                            <div className="p-5 text-right">
                              <div className="flex items-center gap-2 mb-3 flex-row-reverse">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">الذكاء</h4>
                                  <p className="text-tiny text-text-muted">ذكاء اصطناعي · بيانات · محطات عمل</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 mr-4">
                                {[
                                  { cat: 'الذكاء الاصطناعي المؤسسي وتعلم الآلة', sub: 'watsonx, Vertex AI, Agentforce' },
                                  { cat: 'البيانات والتحليلات', sub: 'Tableau, Informatica, BigQuery' },
                                  { cat: 'محطات عمل وأجهزة الذكاء الاصطناعي', sub: 'Precision, ThinkPad P-Series, Core Ultra' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/ar/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link text-right">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#00BFFF] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* Automation */}
                            <div className="p-5 text-right">
                              <div className="flex items-center gap-2 mb-3 flex-row-reverse">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">الأتمتة</h4>
                                  <p className="text-tiny text-text-muted">CRM · تكامل · استشارات</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 mr-4">
                                {[
                                  { cat: 'إدارة علاقات العملاء وتجربة العميل', sub: 'Sales, Service, Marketing Cloud' },
                                  { cat: 'التكامل والأتمتة', sub: 'MuleSoft, Ansible, API Management' },
                                  { cat: 'الاستشارات والاستراتيجية', sub: 'جاهزية الذكاء الاصطناعي، المعمارية، خارطة الطريق' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/ar/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link text-right">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#F59E0B] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* Trust */}
                            <div className="p-5 text-right">
                              <div className="flex items-center gap-2 mb-3 flex-row-reverse">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7C3AED' }} />
                                <div>
                                  <h4 className="text-small font-semibold text-text-primary">الثقة</h4>
                                  <p className="text-tiny text-text-muted">بنية تحتية · أمن سيبراني · سحابة</p>
                                </div>
                              </div>
                              <div className="space-y-0.5 mr-4">
                                {[
                                  { cat: 'الخوادم والتخزين', sub: 'PowerEdge, ThinkSystem, FlashSystem' },
                                  { cat: 'مسرعات ومعالجات الذكاء الاصطناعي', sub: 'Gaudi 3, NVIDIA H100, Intel GPU Max' },
                                  { cat: 'الأمن السيبراني', sub: 'QRadar, Guardium, Cyber Recovery' },
                                  { cat: 'السحابة والبنية فائقة التقارب', sub: 'VxRail, ThinkAgile, APEX, OpenShift' },
                                ].map((item) => (
                                  <Link key={item.cat} to="/ar/products"
                                    className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link text-right">
                                    <p className="text-small font-medium text-text-primary group-hover/link:text-[#7C3AED] transition-colors">{item.cat}</p>
                                    <p className="text-tiny text-text-muted leading-relaxed mt-0.5">{item.sub}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            {/* CTA row */}
                            <Link to="/ar/products"
                              className="col-span-3 px-4 py-3 mt-1 rounded-lg hover:bg-[#00BFFF06] transition-colors flex items-center justify-center gap-2 text-small font-semibold text-[#00BFFF] hover:text-white">
                              تصفح كامل كتالوج المنتجات ← ٤ ألسنة · ١٠ فئات · +٥٠ منتج <ArrowRight className="w-4 h-4 rotate-180" />
                            </Link>
                          </div>
                        ) : capabilitiesTab === 'capability' ? (
                          <div className="grid grid-cols-3 gap-0">
                            {capabilityPillars.map((pillar) => (
                              <div key={pillar.pillar} className="p-5 text-right">
                                <div className="flex items-center gap-2 mb-3 flex-row-reverse">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                                  <div>
                                    <h4 className="text-small font-semibold text-text-primary">{pillar.pillar}</h4>
                                    <p className="text-tiny text-text-muted">{pillar.tagline}</p>
                                  </div>
                                </div>
                                <div className="space-y-0.5 mr-4">
                                  {pillar.items.map((item) => (
                                    <Link key={item.name} to={item.path}
                                      className="block px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.04] transition-colors group/link text-right">
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
                      <div className="border-t border-white/5 px-6 py-4 flex items-center justify-between bg-bg-primary/30" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                        <p className="text-tiny text-text-muted">
                          {capabilitiesTab === 'products' ? 'منظومة الذكاء الاصطناعي الكاملة — من المحمول إلى السحابة. ١١ شريكًا. علاقة واحدة.' : '٧ قدرات. ٣ ركائز. الذكاء · الأتمتة · الثقة.'}
                        </p>
                        <Link to="/ar/blueprints" className="inline-flex items-center gap-2 text-small font-medium text-accent-primary hover:text-accent-secondary transition-colors">
                          استعرض المخططات المرجعية <ArrowRight className="w-4 h-4 rotate-180" />
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
                  className="flex items-center space-x-1 space-x-reverse px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>خدماتنا</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {servicesOpen && <div className="absolute top-full right-0 h-3 w-full" />}
                {servicesOpen && (
                  <div className="fixed left-0 right-0 mx-auto" style={{ top: '5rem', maxWidth: '60rem' }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}>
                    <div className="mx-4 bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden">
                      <div className="p-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                        <div className="grid grid-cols-3 gap-0">
                          {serviceCategories.map((cat) => (
                            <div key={cat.heading} className="p-5 text-right">
                              <Link to={cat.path} className="text-small font-semibold text-text-primary hover:text-accent-primary transition-colors">
                                {cat.heading}
                              </Link>
                              <p className="text-tiny text-text-muted mt-1 mb-3">{cat.desc}</p>
                              <div className="space-y-0.5">
                                {cat.items.map((item) => (
                                  <Link key={item} to={cat.path}
                                    className="block px-3 py-2 -mx-3 rounded-lg text-tiny text-text-primary hover:text-accent-primary hover:bg-white/[0.04] transition-colors text-right">
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-white/5 px-6 py-4 flex items-center justify-between bg-bg-primary/30" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                        <p className="text-tiny text-text-muted">الاستشارات · التنفيذ · العمليات المدارة</p>
                        <Link to="/ar/services" className="inline-flex items-center gap-2 text-small font-medium text-accent-primary hover:text-accent-secondary transition-colors">
                          استعرض كافة الخدمات <ArrowRight className="w-4 h-4 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* ═══ Industries Mega-Menu ═══ */}
              <div className="relative"
                onMouseEnter={() => { closeAll(); setIndustriesOpen(true); }}
                onMouseLeave={() => setIndustriesOpen(false)}>
                <Link to="/ar/industries/government"
                  className="flex items-center space-x-1 space-x-reverse px-3 py-2 text-text-primary hover:text-accent-primary transition-colors font-medium text-sm rounded-lg">
                  <span>القطاعات</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {industriesOpen && <div className="absolute top-full right-0 h-3 w-full" />}
                {industriesOpen && (
                  <div className="absolute top-full -right-16 mt-1 w-[560px] bg-bg-secondary border border-white/10 rounded-xl shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden"
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}>
                    <div className="p-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                      <div className="grid grid-cols-3 gap-0">
                        {industries.map((ind) => (
                          <Link key={ind.name} to={ind.path} className="p-4 rounded-lg hover:bg-white/[0.04] transition-colors group/link text-right">
                            <div className="flex items-center gap-2 mb-2 flex-row-reverse">
                              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: ind.color }} />
                              <p className="text-small font-semibold text-text-primary group-hover/link:text-accent-primary transition-colors">{ind.name}</p>
                            </div>
                            <p className="text-tiny text-text-muted leading-relaxed">{ind.desc}</p>
                          </Link>
                        ))}
                        <div className="col-span-3 border-t border-white/5 mt-1 pt-4 px-4 pb-2 text-right">
                          <p className="text-tiny text-text-muted">
                            ٥ قطاعات. من الحكومي إلى المؤسسات الكبرى — تحول الذكاء الاصطناعي مُطبّق على قطاعك.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </nav>

            {/* Language + CTA group */}
            <div className="hidden md:flex items-center gap-3" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <Link to="/"
                className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#00BFFF40] bg-white/[0.02] hover:bg-[#00BFFF08] transition-all duration-300"
                aria-label="English version">
                <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">🇬🇧</span>
                <span className="text-[11px] font-medium text-[#5B6470] group-hover:text-white transition-colors tracking-wide">English</span>
              </Link>

              <Link to="/ar/contact"
                onClick={() => trackCTAClick('mega_menu', '/ar/contact')}
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
          <div className="absolute top-0 left-0 bottom-0 w-full max-w-sm bg-bg-secondary shadow-2xl animate-slide-in-left overflow-y-auto" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            <div className="flex justify-start p-4">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-primary hover:text-accent-primary transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-6 py-2 space-y-1">

              {/* Mobile About */}
              <div>
                <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>من نحن</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="mr-2 mt-1 space-y-1 mb-3">
                    {aboutItems.map((item) => (
                      <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-small text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors text-right">
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
                  <div className="mr-2 mt-1 mb-3">
                    <div className="flex border-b border-white/5 mb-3">
                      <button onClick={() => setMobileCapabilitiesTab('products')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'products' ? 'border-[#00BFFF] text-[#00BFFF]' : 'border-transparent text-text-muted'}`}>
                        حسب المنتجات
                      </button>
                      <button onClick={() => setMobileCapabilitiesTab('capability')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'capability' ? 'border-accent-primary text-accent-primary' : 'border-transparent text-text-muted'}`}>
                        حسب القدرات
                      </button>
                      <button onClick={() => setMobileCapabilitiesTab('industry')}
                        className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 ${mobileCapabilitiesTab === 'industry' ? 'border-accent-primary text-accent-primary' : 'border-transparent text-text-muted'}`}>
                        حسب القطاع
                      </button>
                    </div>
                    {mobileCapabilitiesTab === 'products' ? (
                      <div className="space-y-3">
                        {[
                          { pillar: 'الذكاء', color: '#00BFFF', cats: [
                            'الذكاء الاصطناعي المؤسسي وتعلم الآلة — watsonx, Vertex AI, Agentforce',
                            'البيانات والتحليلات — Tableau, Informatica, BigQuery',
                            'محطات العمل وأجهزة الذكاء — Precision, ThinkPad, Core Ultra',
                          ]},
                          { pillar: 'الأتمتة', color: '#F59E0B', cats: [
                            'CRM وتجربة العميل — Sales, Service, Marketing Cloud',
                            'التكامل والأتمتة — MuleSoft, Ansible, API Management',
                            'الاستشارات والاستراتيجية — جاهزية الذكاء، المعمارية، خارطة الطريق',
                          ]},
                          { pillar: 'الثقة', color: '#7C3AED', cats: [
                            'الخوادم والتخزين — PowerEdge, ThinkSystem, FlashSystem',
                            'مسرعات الذكاء — Gaudi 3, H100, Intel GPU Max',
                            'الأمن السيبراني — QRadar, Guardium, Cyber Recovery',
                            'السحابة والبنية فائقة التقارب — VxRail, ThinkAgile, APEX, OpenShift',
                          ]},
                        ].map((pillar) => (
                          <div key={pillar.pillar}>
                            <div className="flex items-center gap-2 px-4 py-1 flex-row-reverse">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                              <p className="text-tiny font-semibold text-text-muted uppercase tracking-wider">{pillar.pillar}</p>
                            </div>
                            {pillar.cats.map((cat) => (
                              <Link key={cat} to="/ar/products" onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2 text-small text-text-primary hover:bg-white/5 rounded-lg transition-colors text-right">
                                {cat}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link to="/ar/products" onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 mt-2 text-[#00BFFF] font-semibold text-small border-t border-white/5 pt-4">
                          تصفح كامل كتالوج المنتجات ← +٥٠ منتج <ArrowRight className="w-4 h-4 rotate-180" />
                        </Link>
                      </div>
                    ) : mobileCapabilitiesTab === 'capability' ? (
                      <div className="space-y-3">
                        {capabilityPillars.map((pillar) => (
                          <div key={pillar.pillar}>
                            <div className="flex items-center gap-2 px-4 py-1 flex-row-reverse">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                              <p className="text-tiny font-semibold text-text-muted uppercase tracking-wider">{pillar.pillar}</p>
                            </div>
                            {pillar.items.map((item) => (
                              <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2.5 text-small text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors text-right">
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
                              className="block px-4 py-2 text-small font-semibold text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors text-right">{ind.heading}</Link>
                            <div className="mr-2">
                              {ind.caps.map((cap) => (
                                <p key={cap} className="px-6 py-1 text-tiny text-text-muted text-right">{cap}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link to="/ar/partners" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 mt-3 text-accent-primary font-medium text-small">
                      الشركاء الاستراتيجيون <ArrowRight className="w-4 h-4 rotate-180" />
                    </Link>
                    <Link to="/ar/blueprints" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-accent-primary font-medium text-small">
                      استعرض المخططات <ArrowRight className="w-4 h-4 rotate-180" />
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
                  <div className="mr-2 mt-1 space-y-3 mb-3">
                    {serviceCategories.map((cat) => (
                      <div key={cat.heading}>
                        <Link to={cat.path} onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-small font-semibold text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors text-right">{cat.heading}</Link>
                        <div className="mr-2">
                          {cat.items.map((item) => (
                            <Link key={item} to={cat.path} onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-tiny text-text-muted hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors text-right">{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link to="/ar/services" onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-accent-primary font-medium text-small">
                      استعرض كافة الخدمات <ArrowRight className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Industries */}
              <div>
                <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                  <span>القطاعات</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="mr-2 mt-1 space-y-1 mb-3">
                    {industries.map((ind) => (
                      <Link key={ind.name} to={ind.path} onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-small text-text-primary hover:text-accent-primary hover:bg-white/5 rounded-lg transition-colors flex-row-reverse text-right">
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

              {/* Mobile English */}
              <Link to="/" onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary text-lg font-medium hover:bg-white/5 rounded-xl transition-colors">
                English
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
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slideInLeft 0.3s ease-out forwards; }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.3s ease-out forwards; }
      `}</style>
    </>
  );
};

export default HeaderAr;
