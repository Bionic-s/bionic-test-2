import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import { CANON_PARTNERS } from '../data/partnersData';
import { PartnerLogo } from './PartnerLogo';

/**
 * Compact Trust Bar — infinite logo scroll.
 * Replaces the full Partners section for faster scroll-to-lead.
 */
const partners = CANON_PARTNERS.filter(
  (p) => !['MuleSoft', 'Tableau', 'Informatica'].includes(p.name),
);

// Double for seamless loop
const scrollPartners = [...partners, ...partners];

export const Partners = () => {
  const location = useLocation();
  const isAr = location.pathname.startsWith('/ar');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-8 md:py-10 border-y border-white/[0.06] bg-bg-secondary/20 overflow-hidden"
    >
      {/* Background scan line */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0, 191, 255, 0.04), transparent 80%)',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent"
        animate={{ top: ['25%', '75%', '25%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="flex items-center gap-8 md:gap-12">
        {/* Trust label — pinned left, clickable */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="shrink-0 pl-6 md:pl-12 flex items-center gap-3"
        >
          {isAr ? (
            <Link to="/ar/partners" className="flex items-center gap-3 group/label">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              <div className="flex flex-col leading-tight">
                <span className="text-tiny font-semibold text-text-muted group-hover/label:text-accent-primary transition-colors">الشركاء</span>
                <span className="text-tiny font-semibold text-text-muted group-hover/label:text-accent-primary transition-colors">الاستراتيجيون</span>
              </div>
            </Link>
          ) : (
            <Link to="/partners" className="flex items-center gap-3 group/label">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              <div className="flex flex-col leading-tight">
                <span className="text-tiny font-semibold text-text-muted uppercase tracking-widest group-hover/label:text-accent-primary transition-colors">Strategic</span>
                <span className="text-tiny font-semibold text-text-muted uppercase tracking-widest group-hover/label:text-accent-primary transition-colors">Partners</span>
            </div>
          </Link>
          )}
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 overflow-hidden relative"
        >
          {/* Fade edges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style={{
              background:
                'linear-gradient(to right, hsl(210, 30%, 4%), transparent)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style={{
              background:
                'linear-gradient(to left, hsl(210, 30%, 4%), transparent)',
            }}
          />

          {/* Scrolling track */}
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {scrollPartners.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                aria-hidden={i >= partners.length || undefined}
                className="shrink-0 flex items-center gap-3 group cursor-default"
              >
                <div className="opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0">
                  <PartnerLogo partner={partner} size="xl" />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
