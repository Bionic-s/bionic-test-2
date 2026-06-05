/**
 * Canonical Partners — single source of truth.
 * 9 Strategic Technology Partners per brand canon.
 */
export interface PartnerData {
  name: string;
  logo?: string;
  accent: string;
}

const BASE = import.meta.env.BASE_URL;

export const CANON_PARTNERS: PartnerData[] = [
  {
    name: 'Salesforce',
    logo: `${BASE}images/partners/salesforce-partner.png`,
    accent: '#00A1E0',
  },
  {
    name: 'Google',
    logo: `${BASE}images/partners/google-partner.png`,
    accent: '#4285F4',
  },
  {
    name: 'IBM',
    accent: '#052FAD',
  },
  {
    name: 'Dell Technologies',
    accent: '#007DB8',
  },
  {
    name: 'Intel',
    logo: `${BASE}images/partners/intel-partner.webp`,
    accent: '#0071C5',
  },
  {
    name: 'MuleSoft',
    accent: '#00A1E0',
  },
  {
    name: 'Tableau',
    accent: '#E8762D',
  },
  {
    name: 'Informatica',
    accent: '#FF4F1E',
  },
  {
    name: 'Platform9',
    accent: '#7B61FF',
  },
];

/** Look up a partner by name (case-insensitive). */
export function getPartner(name: string): PartnerData | undefined {
  return CANON_PARTNERS.find(
    (p) => p.name.toLowerCase() === name.toLowerCase(),
  );
}
