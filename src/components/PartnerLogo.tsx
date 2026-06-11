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
    return (
      <img
        src={p.logo}
        alt={p.name}
        className={`object-contain ${className}`}
        style={{ maxHeight: px, height: 'auto', width: 'auto', maxWidth: px * 4 }}
      />
    );
  }

  // Text fallback — initial letter with accent background
  return (
    <div
      className={`rounded-md flex items-center justify-center text-white font-bold shrink-0 ${className}`}
      style={{ backgroundColor: p.accent, width: px, height: px, fontSize: px * 0.5 }}
    >
      {p.name.charAt(0)}
    </div>
  );
};
