import { motion } from 'framer-motion';
import { PartnerLogo } from './PartnerLogo';
import { CANON_PARTNERS } from '../data/partnersData';
import { STRATEGIC_PARTNERS_SINGLE, SALESFORCE_ECOSYSTEM } from '../data/strategicPartners';

/**
 * The canonical strategic-partners presentation: 7 outcome cards (IBM tall)
 * plus the full-width Salesforce Ecosystem card. Used anywhere partners are
 * showcased (Partners page, Products page — EN and AR) so the design and
 * data stay identical site-wide.
 */
export const StrategicPartnersShowcase = ({
  lang = 'en',
  inView = true,
}: {
  lang?: 'en' | 'ar';
  inView?: boolean;
}) => {
  const ecosystem = {
    outcome: SALESFORCE_ECOSYSTEM.outcome[lang],
    subs: SALESFORCE_ECOSYSTEM.ecosystemMembers!.filter((m) => m !== SALESFORCE_ECOSYSTEM.logoName),
  };
  const badge = lang === 'ar' ? 'منظومة' : 'Ecosystem';

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      {STRATEGIC_PARTNERS_SINGLE.map((partner, i) => {
        const canon = CANON_PARTNERS.find((x) => x.name.toLowerCase() === partner.logoName.toLowerCase());
        return (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={`group relative bg-bg-secondary/40 border border-white/[0.06] rounded-2xl overflow-hidden hover:border-accent-primary/25 transition-all duration-400 hover:-translate-y-1 flex flex-col ${partner.logoName === 'IBM' ? 'lg:row-span-2 shadow-[0_0_30px_rgba(5,47,173,0.08)]' : ''}`}
          >
            <div className="h-0.5 w-full" style={{ backgroundColor: canon?.accent || '#444' }} />
            <div className="flex items-center justify-center px-4 pt-6 pb-3">
              <PartnerLogo partner={partner.logoName} size={partner.logoName === 'IBM' ? 'xl' : 'lg'} className="mx-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="px-4 pb-6 flex-1 flex flex-col justify-end">
              <p className="text-tiny text-text-muted leading-relaxed text-center">{partner.outcome[lang]}</p>
            </div>
          </motion.div>
        );
      })}

      {/* ── Salesforce Ecosystem — full width, final row ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-2 md:col-span-3 lg:col-span-4 group relative bg-bg-secondary/40 border border-white/[0.06] rounded-2xl overflow-hidden hover:border-accent-primary/25 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="h-0.5 w-full" style={{ backgroundColor: '#00A1E0' }} />

        {/* Desktop layout: horizontal */}
        <div className="hidden lg:flex items-center gap-8 p-6">
          <div className="flex flex-col items-center gap-3 shrink-0">
            <span className="text-tiny font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#00A1E0]/30 bg-[#00A1E0]/10 text-[#00A1E0]">{badge}</span>
            <div className="bg-bg-primary/60 border border-white/5 rounded-xl p-4">
              <PartnerLogo partner="Salesforce" size="xl" className="mx-auto" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-px h-16 bg-white/8" />
            {ecosystem.subs.map((sub) => (
              <div key={sub} className="flex items-center justify-center bg-bg-primary/50 border border-white/5 rounded-xl p-4 w-28">
                <PartnerLogo partner={sub} size="md" className="mx-auto" />
              </div>
            ))}
            <div className="w-px h-16 bg-white/8" />
          </div>

          <div className="flex-1">
            <p className="text-sm text-text-muted leading-relaxed">{ecosystem.outcome}</p>
          </div>
        </div>

        {/* Mobile layout: stacked */}
        <div className="lg:hidden p-5 flex flex-col">
          <div className="flex items-center justify-center mb-3">
            <span className="text-tiny font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#00A1E0]/30 bg-[#00A1E0]/10 text-[#00A1E0]">{badge}</span>
          </div>
          <div className="flex items-center justify-center bg-bg-primary/60 border border-white/5 rounded-xl p-4 mb-3">
            <PartnerLogo partner="Salesforce" size="lg" className="mx-auto" />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {ecosystem.subs.map((sub) => (
              <div key={sub} className="flex items-center justify-center bg-bg-primary/50 border border-white/5 rounded-lg p-2.5">
                <PartnerLogo partner={sub} size="sm" className="mx-auto" />
              </div>
            ))}
          </div>
          <p className="text-tiny text-text-muted leading-relaxed text-center">{ecosystem.outcome}</p>
        </div>
      </motion.div>
    </div>
  );
};
