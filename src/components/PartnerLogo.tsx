import { CANON_PARTNERS, type PartnerData } from '../data/partnersData';

/**
 * Renders a partner logo or a styled text fallback.
 * Accepts a PartnerData object, { name: string }, or a string name.
 * Size: 'sm' (24px), 'md' (32px), 'lg' (48px), 'xl' (70px)
 */
export const PartnerLogo = ({
  partner,
  size = 'md',
  className = '',
}: {
  partner: PartnerData | { name: string } | string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) => {
  const sizes = { sm: 24, md: 32, lg: 48, xl: 70 };

  // Resolve partner: string → canon lookup; object → canon lookup by name, fallback to object itself
  const p: PartnerData | undefined =
    typeof partner === 'string'
      ? CANON_PARTNERS.find((x) => x.name.toLowerCase() === partner.toLowerCase())
      : (CANON_PARTNERS.find((x) => x.name.toLowerCase() === partner.name.toLowerCase()) || (partner as PartnerData));

  if (!p) return <span className={`text-xs text-text-muted ${className}`}>{typeof partner === 'string' ? partner : partner.name}</span>;

  const px = sizes[size];

  if (p.logo) {
    const maxW = size === 'sm' ? px * 3 : size === 'md' ? px * 3 : size === 'lg' ? px * 3 : px * 3;
    return (
      <img
        src={p.logo}
        alt={p.name}
        loading="lazy" decoding="async" className={`object-contain ${className}`}
        style={{
          maxWidth: maxW,
          maxHeight: px,
          width: 'auto',
          height: 'auto',
        }}
      />
    );
  }

  // Text fallback — initial letter with accent background
  return (
    <div
      role="img"
      aria-label={p.name}
      className={`rounded-md flex items-center justify-center text-white font-bold shrink-0 ${className}`}
      style={{ backgroundColor: p.accent, width: px, height: px, fontSize: px * 0.5 }}
    >
      {p.name.charAt(0)}
    </div>
  );
};
