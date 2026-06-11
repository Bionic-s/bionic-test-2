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
    logo: `${BASE}images/partners/salesforce-partner.png`,
    accent: '#00A1E0',
  },
  {
    name: 'Google',
    logo: `${BASE}images/partners/google-partner.svg`,
    accent: '#4285F4',
  },
  {
    name: 'IBM',
    logo: `${BASE}images/partners/ibm-partner.png`,
    accent: '#052FAD',
  },
  {
    name: 'Dell Technologies',
    logo: `${BASE}images/partners/dell-partner.png`,
    accent: '#007DB8',
  },
  {
    name: 'Intel',
    logo: `${BASE}images/partners/intel-partner.png`,
    accent: '#0071C5',
  },
  {
    name: 'MuleSoft',
    logo: `${BASE}images/partners/mulesoft-partner.png`,
    accent: '#00A1E0',
  },
  {
    name: 'Tableau',
    logo: `${BASE}images/partners/tableau-partner.png`,
    accent: '#E8762D',
  },
  {
    name: 'Informatica',
    logo: `${BASE}images/partners/informatica-partner.svg`,
    accent: '#FF4F1E',
  },
  {
    name: 'Platform9',
    logo: `${BASE}images/partners/platform9-partner.png`,
    accent: '#7B61FF',
  },
  {
    name: 'Red Hat',
    logo: `${BASE}images/partners/redhat-partner.svg`,
    accent: '#EE0000',
  },
  {
    name: 'Lenovo',
    logo: `${BASE}images/partners/lenovo-partner.png`,
    accent: '#E2231A',
  },
];

/** Look up a partner by name (case-insensitive). */
export function getPartner(name: string): PartnerData | undefined {
  return CANON_PARTNERS.find(
    (p) => p.name.toLowerCase() === name.toLowerCase(),
  );
}
