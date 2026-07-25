/**
 * Canonical Partners — single source of truth.
 * Strategic Technology Partners.
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
    logo: `${BASE}images/optimized/salesforce-partner.webp`,
    accent: '#00A1E0',
  },
  {
    name: 'Google',
    logo: `${BASE}images/partners/google-partner.svg`,
    accent: '#4285F4',
  },
  {
    name: 'IBM',
    logo: `${BASE}images/partners/ibm-partner.svg`,
    accent: '#052FAD',
  },
  {
    name: 'Dell Technologies',
    logo: `${BASE}images/optimized/dell-partner.webp`,
    accent: '#007DB8',
  },
  {
    name: 'Intel',
    logo: `${BASE}images/optimized/intel-partner.webp`,
    accent: '#0071C5',
  },
  {
    name: 'MuleSoft',
    logo: `${BASE}images/optimized/mulesoft-partner.webp`,
    accent: '#00A1E0',
  },
  {
    name: 'Tableau',
    logo: `${BASE}images/optimized/tableau-partner.webp`,
    accent: '#E8762D',
  },
  {
    name: 'Informatica',
    logo: `${BASE}images/partners/informatica-partner.svg`,
    accent: '#FF4F1E',
  },
  {
    name: 'Platform9',
    logo: `${BASE}images/optimized/platform9-partner.webp`,
    accent: '#7B61FF',
  },
  {
    name: 'Red Hat',
    logo: `${BASE}images/optimized/redhat-partner.webp`,
    accent: '#EE0000',
  },
  {
    name: 'Lenovo',
    logo: `${BASE}images/partners/lenovo-partner.svg`,
    accent: '#E2231A',
  },
];

/** Look up a partner by name (case-insensitive). */
export function getPartner(name: string): PartnerData | undefined {
  return CANON_PARTNERS.find(
    (p) => p.name.toLowerCase() === name.toLowerCase(),
  );
}
