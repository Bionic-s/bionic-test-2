import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Partner {
  name: string;
  logo?: string;
  alt: string;
}

/**
 * Compact Trust Bar — infinite logo scroll.
 * Replaces the full Partners section for faster scroll-to-lead.
 */
const partners: Partner[] = [
  {
    name: 'Salesforce',
    logo: `${import.meta.env.BASE_URL}images/partners/salesforce-partner.png`,
    alt: 'Salesforce Registered Consulting Partner',
  },
  {
    name: 'Google',
    logo: `${import.meta.env.BASE_URL}images/partners/google-partner.png`,
    alt: 'Google Cloud Partner',
  },
  {
    name: 'IBM',
    alt: 'IBM Authorized Business Partner',
  },
  {
    name: 'Dell Technologies',
    alt: 'Dell Technologies Registered Partner',
  },
  {
    name: 'Intel',
    logo: `${import.meta.env.BASE_URL}images/partners/intel-partner.webp`,
    alt: 'Intel Partner',
  },
  {
    name: 'MuleSoft',
    alt: 'MuleSoft Delivery Partner',
  },
  {
    name: 'Tableau',
    alt: 'Tableau Analytics Partner',
  },
  {
    name: 'Informatica',
    alt: 'Informatica Solution Partner',
  },
  {
    name: 'Platform9',
    alt: 'Platform9 Value Added Reseller',
  },
];

// Double for seamless loop
const scrollPartners = [...partners, ...partners];

export const Partners = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-6 md:py-8 border-y border-white/[0.06] bg-bg-secondary/20 overflow-hidden"
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
        {/* Trust label — pinned left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="shrink-0 pl-6 md:pl-12 flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
          <span className="text-tiny font-semibold text-text-muted uppercase tracking-widest whitespace-nowrap">
            Partners
          </span>
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
            className="flex items-center gap-10 md:gap-16 whitespace-nowrap"
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
                className="shrink-0 flex items-center gap-3 group cursor-default"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-6 md:h-7 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-sm md:text-base font-bold text-text-muted/50 group-hover:text-accent-primary transition-all duration-300">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
