/**
 * Central source of truth for Bionic Solutions industries (bilingual).
 *
 * Consumed by Header, HeaderAr (mega-menu "By Industry" grid) and
 * Footer, FooterAr (industry link list). All 9 industries in one place,
 * EN and AR — so the navigation and footer can never drift out of sync.
 */

export interface IndustryLink {
  name: { en: string; ar: string };
  path: { en: string; ar: string };
  /** Capability tags shown under the industry in the mega-menu. */
  caps: { en: string[]; ar: string[] };
}

export const industries: IndustryLink[] = [
  {
    name: { en: 'Government', ar: 'القطاع الحكومي' },
    path: { en: '/industries/government', ar: '/ar/industries/government' },
    caps: {
      en: ['Enterprise AI', 'Data & Intelligence', 'Cybersecurity', 'Sovereign Infra'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'الأمن السيبراني', 'البنية التحتية السيادية'],
    },
  },
  {
    name: { en: 'Banking', ar: 'الخدمات المالية والمصرفية' },
    path: { en: '/industries/banking', ar: '/ar/industries/banking' },
    caps: {
      en: ['Enterprise AI', 'Data & Intelligence', 'Business Apps', 'Cybersecurity'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'تطبيقات الأعمال', 'الأمن السيبراني'],
    },
  },
  {
    name: { en: 'Oil & Gas', ar: 'النفط والغاز' },
    path: { en: '/industries/oil-gas', ar: '/ar/industries/oil-gas' },
    caps: {
      en: ['Enterprise AI', 'Integration & Ops', 'Cybersecurity', 'Sovereign Infra'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'التكامل والعمليات', 'الأمن السيبراني', 'البنية التحتية السيادية'],
    },
  },
  {
    name: { en: 'Healthcare', ar: 'الرعاية الصحية' },
    path: { en: '/industries/healthcare', ar: '/ar/industries/healthcare' },
    caps: {
      en: ['Enterprise AI', 'Data & Intelligence', 'Business Apps', 'Integration'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'تطبيقات الأعمال', 'التكامل'],
    },
  },
  {
    name: { en: 'Enterprise', ar: 'المؤسسات الكبرى' },
    path: { en: '/industries/enterprise', ar: '/ar/industries/enterprise' },
    caps: {
      en: ['Enterprise AI', 'Business Apps', 'Cybersecurity', 'Technology Ops'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'تطبيقات الأعمال', 'الأمن السيبراني', 'عمليات التقنية'],
    },
  },
  {
    name: { en: 'Telecom', ar: 'الاتصالات وتقنية المعلومات' },
    path: { en: '/industries/telecom', ar: '/ar/industries/telecom' },
    caps: {
      en: ['Enterprise AI', 'Data & Intelligence', 'Integration & Ops', 'Cybersecurity'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'البيانات والذكاء', 'التكامل والعمليات', 'الأمن السيبراني'],
    },
  },
  {
    name: { en: 'Retail', ar: 'التجزئة والمستهلك' },
    path: { en: '/industries/retail', ar: '/ar/industries/retail' },
    caps: {
      en: ['Enterprise AI', 'Business Apps', 'Data & Intelligence', 'Integration & Ops'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'تطبيقات الأعمال', 'البيانات والذكاء', 'التكامل والعمليات'],
    },
  },
  {
    name: { en: 'Manufacturing', ar: 'الصناعة والتصنيع' },
    path: { en: '/industries/manufacturing', ar: '/ar/industries/manufacturing' },
    caps: {
      en: ['Enterprise AI', 'Integration & Ops', 'Sovereign Infra', 'Cybersecurity'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'التكامل والعمليات', 'البنية التحتية السيادية', 'الأمن السيبراني'],
    },
  },
  {
    name: { en: 'Transport & Logistics', ar: 'النقل والخدمات اللوجستية' },
    path: { en: '/industries/logistics', ar: '/ar/industries/logistics' },
    caps: {
      en: ['Enterprise AI', 'Integration & Ops', 'Data & Intelligence', 'Technology Ops'],
      ar: ['الذكاء الاصطناعي المؤسسي', 'التكامل والعمليات', 'البيانات والذكاء', 'عمليات التقنية'],
    },
  },
];

/** Flat industry list, English — for the Footer. */
export const industriesEn = industries.map((i) => ({ name: i.name.en, href: i.path.en }));

/** Flat industry list, Arabic — for the FooterAr. */
export const industriesAr = industries.map((i) => ({ name: i.name.ar, path: i.path.ar }));
