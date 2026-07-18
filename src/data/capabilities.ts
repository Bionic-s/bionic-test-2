/**
 * Central source of truth for Bionic Solutions capabilities (bilingual).
 *
 * Consumed by Header, HeaderAr (mega-menu "By Capability" pillars) and
 * Footer, FooterAr (flat capability list). One edit here = consistency
 * across every navigation surface, EN and AR.
 */

export interface CapabilityItem {
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  path: { en: string; ar: string };
}

export interface CapabilityPillar {
  pillar: { en: string; ar: string };
  tagline: string;
  color: string;
  items: CapabilityItem[];
}

export const capabilityPillars: CapabilityPillar[] = [
  {
    pillar: { en: 'Intelligence', ar: 'الذكاء' },
    tagline: 'AI · Analytics · Data',
    color: '#00BFFF',
    items: [
      {
        name: { en: 'Enterprise AI & Automation', ar: 'الذكاء الاصطناعي المؤسسي والأتمتة' },
        desc: { en: 'Agentic AI, copilots, MLOps', ar: 'وكلاء الذكاء الاصطناعي، المساعدون الأذكياء، MLOps' },
        path: { en: '/capabilities/ai', ar: '/ar/capabilities/ai' },
      },
      {
        name: { en: 'Data, Analytics & Intelligence', ar: 'البيانات والتحليلات والذكاء' },
        desc: { en: 'Data platforms, MDM, BI', ar: 'منصات البيانات، إدارة البيانات الرئيسية، ذكاء الأعمال' },
        path: { en: '/capabilities/data', ar: '/ar/capabilities/data' },
      },
    ],
  },
  {
    pillar: { en: 'Automation', ar: 'الأتمتة' },
    tagline: 'Apps · Integration · Workflow',
    color: '#00BFFF',
    items: [
      {
        name: { en: 'Business Applications & CX', ar: 'تطبيقات الأعمال وتجربة العملاء' },
        desc: { en: 'CRM, contact center, commerce', ar: 'إدارة علاقات العملاء، مركز اتصال، تجارة' },
        path: { en: '/capabilities/apps', ar: '/ar/capabilities/apps' },
      },
      {
        name: { en: 'Integration & Intelligent Operations', ar: 'التكامل والعمليات الذكية' },
        desc: { en: 'API-led, event-driven, workflow', ar: 'معمارية API، بالأحداث، تنسيق سير العمل' },
        path: { en: '/capabilities/integration', ar: '/ar/capabilities/integration' },
      },
    ],
  },
  {
    pillar: { en: 'Trust', ar: 'الثقة' },
    tagline: 'Cyber · Sovereign · Resilience',
    color: '#00BFFF',
    items: [
      {
        name: { en: 'Cybersecurity & Cyber Resilience', ar: 'الأمن السيبراني والمرونة السيبرانية' },
        desc: { en: 'SOC, Zero Trust, identity', ar: 'مركز عمليات أمنية، Zero Trust، الهوية' },
        path: { en: '/capabilities/cyber', ar: '/ar/capabilities/cyber' },
      },
      {
        name: { en: 'Sovereign Infrastructure & Hybrid Cloud', ar: 'البنية التحتية السيادية والسحابة الهجينة' },
        desc: { en: 'Datacenter, hybrid cloud, AI infra', ar: 'مراكز بيانات، سحابة هجينة، بنية الذكاء التحتية' },
        path: { en: '/capabilities/infra', ar: '/ar/capabilities/infra' },
      },
      {
        name: { en: 'Technology Operations', ar: 'عمليات التقنية' },
        desc: { en: 'Platform engineering, AIOps, SRE', ar: 'هندسة المنصات، AIOps، SRE' },
        path: { en: '/capabilities/ops', ar: '/ar/capabilities/ops' },
      },
    ],
  },
];

/** Flat capability list, English — for the Footer. */
export const capabilities = capabilityPillars
  .flatMap((p) => p.items)
  .map((i) => ({ name: i.name.en, path: i.path.en }));

/** Flat capability list, Arabic — for the FooterAr. */
export const capabilitiesAr = capabilityPillars
  .flatMap((p) => p.items)
  .map((i) => ({ name: i.name.ar, path: i.path.ar }));
