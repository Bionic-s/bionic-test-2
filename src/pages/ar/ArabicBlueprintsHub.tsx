import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Filter, X, Search } from 'lucide-react';
import { Buildings, Bank, Drop, Heartbeat, BuildingOffice } from '@phosphor-icons/react';
import { PartnerLogo } from '../../components/PartnerLogo';
import { blueprints, allBlueprintIndustries, allBlueprintCapabilities, allBlueprintPartners } from '../../data/blueprintsData';
import { trackBlueprintHubView } from '../../lib/analytics';

const HERO_BG = '/test-site-2/images/security-alert.avif';

const iatColors: Record<string, string> = {
  Intelligence: '#00BFFF',
  Automation: '#7C3AED',
  Trust: '#10B981',
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

const industryIcons: Record<string, React.ReactNode> = {
  'Government & Public Sector': <Buildings size={20} weight="fill" />,
  'Banking & Financial Services': <Bank size={20} weight="fill" />,
  'Oil, Gas & Energy': <Drop size={20} weight="fill" />,
  'Healthcare': <Heartbeat size={20} weight="fill" />,
  'Enterprise': <BuildingOffice size={20} weight="fill" />,
};

export default function Page() {

  useEffect(() => { trackBlueprintHubView(); }, []);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([]);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(ind) ? prev.filter((i) => i !== ind) : [...prev, ind]
    );
  };

  const toggleCapability = (cap: string) => {
    setSelectedCapabilities((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  const togglePartner = (p: string) => {
    setSelectedPartners((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const clearAll = () => {
    setSearchQuery('');
    setSelectedIndustries([]);
    setSelectedCapabilities([]);
    setSelectedPartners([]);
  };

  const hasFilters =
    selectedIndustries.length > 0 ||
    selectedCapabilities.length > 0 ||
    selectedPartners.length > 0 ||
    searchQuery.trim().length > 0;

  const filteredBlueprints = useMemo(() => {
    let result = blueprints;

    if (selectedIndustries.length > 0) {
      result = result.filter((b) => selectedIndustries.includes(b.industry));
    }
    if (selectedCapabilities.length > 0) {
      result = result.filter((b) =>
        b.capabilities.some((c) => selectedCapabilities.includes(c))
      );
    }
    if (selectedPartners.length > 0) {
      result = result.filter((b) =>
        b.partners.some((p) => selectedPartners.includes(p))
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.industry.toLowerCase().includes(q) ||
          b.challenge.toLowerCase().includes(q) ||
          b.capabilities.some((c) => c.toLowerCase().includes(q)) ||
          b.partners.some((p) => p.toLowerCase().includes(q)) ||
          b.products.some((p) => p.toLowerCase().includes(q))
      );
    }

    return result;
  }, [selectedIndustries, selectedCapabilities, selectedPartners, searchQuery]);

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-24 text-center px-4"
        >
          <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6">
              <span className="text-tiny text-accent-primary font-semibold tracking-wider uppercase">حالات استخدام قطاعية</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              المخططات المرجعية
              <span className="block text-accent-primary">للتحول</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              معماريات مرجعية تطبيقية مبنية على منظومة بيونك الاستراتيجية — تربط القطاعات والقدرات والشركاء في مخططات تحول مرجعية قابلة للتنفيذ.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 pb-24">

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="ابحث في المخططات المرجعية حسب القطاع أو القدرة أو الشريك أو المنتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none transition-colors text-right"
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
          ref={ref}
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-text-muted">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">الفلاتر:</span>
            </div>

            {/* Industry Filter */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-white/10 rounded-lg text-sm text-text-primary hover:border-accent-primary transition-colors">
                القطاع
                {selectedIndustries.length > 0 && (
                  <span className="px-1.5 py-0.5 bg-accent-primary text-text-primary text-xs rounded-full">
                    {selectedIndustries.length}
                  </span>
                )}
              </button>
              <div className="absolute top-full right-0 mt-2 w-64 bg-bg-secondary border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 p-2">
                {allBlueprintIndustries.map((ind) => (
                  <label
                    key={ind}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded cursor-pointer text-sm text-text-primary flex-row-reverse justify-end"
                  >
                    <input
                      type="checkbox"
                      checked={selectedIndustries.includes(ind)}
                      onChange={() => toggleIndustry(ind)}
                      className="w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary"
                    />
                    <span className="flex items-center gap-2 flex-row">{ind} {industryIcons[ind]}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Capability Filter */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-white/10 rounded-lg text-sm text-text-primary hover:border-accent-primary transition-colors">
                القدرة
                {selectedCapabilities.length > 0 && (
                  <span className="px-1.5 py-0.5 bg-accent-primary text-text-primary text-xs rounded-full">
                    {selectedCapabilities.length}
                  </span>
                )}
              </button>
              <div className="absolute top-full right-0 mt-2 w-80 bg-bg-secondary border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 p-2">
                {allBlueprintCapabilities.map((cap) => (
                  <label
                    key={cap}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded cursor-pointer text-sm text-text-primary flex-row-reverse justify-end"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCapabilities.includes(cap)}
                      onChange={() => toggleCapability(cap)}
                      className="w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary"
                    />
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: iatColors[iatForce[cap]] }}
                    />
                    {cap}
                  </label>
                ))}
              </div>
            </div>

            {/* Partner Filter */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-white/10 rounded-lg text-sm text-text-primary hover:border-accent-primary transition-colors">
                الشريك
                {selectedPartners.length > 0 && (
                  <span className="px-1.5 py-0.5 bg-accent-primary text-text-primary text-xs rounded-full">
                    {selectedPartners.length}
                  </span>
                )}
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-bg-secondary border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 p-2">
                {allBlueprintPartners.map((p) => (
                  <label
                    key={p}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded cursor-pointer text-sm text-text-primary flex-row-reverse justify-end"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPartners.includes(p)}
                      onChange={() => togglePartner(p)}
                      className="w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={clearAll}
                className="px-3 py-2 text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                مسح الكل
              </button>
            )}
          </div>

          {/* Active Filter Chips */}
          {hasFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedIndustries.map((ind) => (
                <span
                  key={ind}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-xs font-medium text-accent-primary"
                >
                  {ind}
                  <button onClick={() => toggleIndustry(ind)} className="hover:bg-accent-primary/20 rounded-full p-0.5">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {selectedCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: `${iatColors[iatForce[cap]]}10`,
                    borderColor: `${iatColors[iatForce[cap]]}30`,
                    color: iatColors[iatForce[cap]],
                  }}
                >
                  {cap}
                  <button onClick={() => toggleCapability(cap)} className="hover:bg-white/10 rounded-full p-0.5">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {selectedPartners.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-text-primary"
                >
                  {p}
                  <button onClick={() => togglePartner(p)} className="hover:bg-white/10 rounded-full p-0.5">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Results Count */}
          <p className="text-sm text-text-muted text-center">
            عرض {filteredBlueprints.length} من أصل {blueprints.length} مخططًا مرجعيًا
          </p>
        </motion.div>

        {/* Blueprint Cards Grid */}
        {filteredBlueprints.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-text-muted mb-4">لا توجد مخططات مرجعية تطابق فلاترك.</p>
            <button
              onClick={clearAll}
              className="px-6 py-2 border border-accent-primary text-accent-primary rounded-full hover:bg-accent-primary hover:text-text-primary transition-colors"
            >
              مسح الفلاتر
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlueprints.map((bp, index) => (
              <motion.div
                key={bp.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
              >
                <Link
                  to={`/ar/blueprints/${bp.slug}`}
                  className="block h-full bg-bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 group text-right"
                >
                  {/* Card Header — Industry + I-A-T */}
                  <div className="p-6 pb-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full border border-accent-primary/30 inline-flex items-center gap-1.5">
                        {industryIcons[bp.industry]} {bp.industry}
                      </span>
                      {[...new Set(bp.capabilities.map((c) => iatForce[c]).filter(Boolean))].map((f, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-semibold rounded-full border"
                          style={{
                            backgroundColor: `${iatColors[f]}10`,
                            borderColor: `${iatColors[f]}30`,
                            color: iatColors[f],
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                      {bp.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">{bp.challenge}</p>

                    {/* Partner Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {bp.partners.slice(0, 4).map((p, i) => (
                        <PartnerLogo key={i} partner={p} size="sm" />
                      ))}
                      {bp.partners.length > 4 && (
                        <span className="px-2 py-0.5 text-text-muted text-xs">+{bp.partners.length - 4}</span>
                      )}
                    </div>

                    {/* Product Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {bp.products.slice(0, 3).map((prod, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-accent-primary/5 text-accent-primary/80 text-xs rounded-full border border-accent-primary/20"
                        >
                          {prod}
                        </span>
                      ))}
                      {bp.products.length > 3 && (
                        <span className="px-2 py-0.5 text-text-muted text-xs">+{bp.products.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-white/5 p-6 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent-primary">عرض المخطط المرجعي</span>
                      <ArrowRight className="w-5 h-5 text-accent-primary group-hover:-translate-x-2 transition-transform rotate-180" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Cross-Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20 pt-16 border-t border-white/10"
        >
          <h2 className="text-xl font-bold mb-6">ماذا تود استكشافه أيضًا؟</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { label: 'القدرات', path: '/ar/capabilities/ai', desc: '7 مجالات' },
              { label: 'القطاعات', path: '/ar/industries/government', desc: '5 قطاعات' },
              { label: 'الخدمات', path: '/ar/services', desc: '3 نماذج' },
              { label: 'المعمارية', path: '/ar/architecture', desc: '10 طبقات' },
            ].map((link) => (
              <Link key={link.label} to={link.path}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-primary border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-white/20 transition-all hover:-translate-y-0.5">
                {link.label}
                <span className="text-tiny text-text-muted">{link.desc}</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted rotate-180" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20 pt-16 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4">هل أنتم مستعدون لاستكشاف مخطط مرجعي لمؤسستكم؟</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            كل مخطط مرجعي يمثل معمارية مرجعية تطبيقية — دعنا نناقش كيف ينطبق على سياق قطاعكم وأهداف التحول الخاصة بكم.
          </p>
          <Link
            to="/ar/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary transition-all"
          >
            ابدأ المحادثة <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
);
}
