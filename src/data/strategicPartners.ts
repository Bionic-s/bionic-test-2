/**
 * Strategic Partners — single source of truth.
 *
 * Bionic Solutions maintains 8 strategic technology relationships. Salesforce,
 * MuleSoft, Tableau, and Informatica are ONE unified Salesforce ecosystem
 * relationship (not four separate partners), so the strategic count is 8.
 *
 * Homepage stat, Products page, and Partners page all derive their count,
 * order, and grouping from this file — they cannot drift out of sync.
 */

export type RelationshipKind = 'partner' | 'ecosystem';

export interface StrategicPartner {
  /** Stable id. */
  id: string;
  /** Canonical logo lookup name (matches CANON_PARTNERS + PartnerLogo). */
  logoName: string;
  /** Display order (1-based). */
  order: number;
  kind: RelationshipKind;
  name: { en: string; ar: string };
  /** One-line outcome / value statement. */
  outcome: { en: string; ar: string };
  /** For the Salesforce ecosystem: the member products grouped under it. */
  ecosystemMembers?: string[];
}

export const STRATEGIC_PARTNERS: StrategicPartner[] = [
  {
    id: 'ibm',
    logoName: 'IBM',
    order: 1,
    kind: 'partner',
    name: { en: 'IBM', ar: 'IBM' },
    outcome: {
      en: 'watsonx AI governance + FlashSystem infrastructure — AI that is compliant, not just fast.',
      ar: 'حوكمة الذكاء الاصطناعي عبر watsonx وبنية FlashSystem التحتية — ذكاء اصطناعي متوافق، لا سريع فحسب.',
    },
  },
  {
    id: 'google',
    logoName: 'Google',
    order: 2,
    kind: 'partner',
    name: { en: 'Google Cloud', ar: 'Google Cloud' },
    outcome: {
      en: 'Sovereign AI on Vertex AI — governed, secured, and operated in-Kingdom.',
      ar: 'ذكاء اصطناعي سيادي على Vertex AI — محوكم ومؤمّن ومُشغّل داخل المملكة.',
    },
  },
  {
    id: 'dell',
    logoName: 'Dell Technologies',
    order: 3,
    kind: 'partner',
    name: { en: 'Dell Technologies', ar: 'Dell Technologies' },
    outcome: {
      en: 'PowerEdge, PowerStore, VxRail — the infrastructure backbone underneath AI workloads.',
      ar: 'PowerEdge وPowerStore وVxRail — العمود الفقري للبنية التحتية تحت أحمال الذكاء الاصطناعي.',
    },
  },
  {
    id: 'intel',
    logoName: 'Intel',
    order: 4,
    kind: 'partner',
    name: { en: 'Intel', ar: 'Intel' },
    outcome: {
      en: 'Xeon & Gaudi AI acceleration — sovereign AI compute, from edge to datacenter.',
      ar: 'تسريع الذكاء الاصطناعي عبر Xeon وGaudi — حوسبة ذكاء سيادية، من الحافة الطرفية إلى مركز البيانات.',
    },
  },
  {
    id: 'platform9',
    logoName: 'Platform9',
    order: 5,
    kind: 'partner',
    name: { en: 'Platform9', ar: 'Platform9' },
    outcome: {
      en: 'Kubernetes, managed, in your datacenter — private cloud without the complexity.',
      ar: 'Kubernetes مُدارة داخل مركز بياناتكم — سحابة خاصة دون تعقيد.',
    },
  },
  {
    id: 'lenovo',
    logoName: 'Lenovo',
    order: 6,
    kind: 'partner',
    name: { en: 'Lenovo', ar: 'Lenovo' },
    outcome: {
      en: 'ThinkSystem, ThinkAgile, TruScale — infrastructure engineered for AI, from edge to cloud.',
      ar: 'ThinkSystem وThinkAgile وTruScale — بنية تحتية مُصمّمة للذكاء الاصطناعي، من الحافة الطرفية إلى السحابة.',
    },
  },
  {
    id: 'redhat',
    logoName: 'Red Hat',
    order: 7,
    kind: 'partner',
    name: { en: 'Red Hat', ar: 'Red Hat' },
    outcome: {
      en: 'OpenShift + Ansible Automation — open-source platform for sovereign hybrid cloud.',
      ar: 'OpenShift وأتمتة Ansible — منصة مفتوحة المصدر للسحابة الهجينة السيادية.',
    },
  },
  {
    id: 'salesforce-ecosystem',
    logoName: 'Salesforce',
    order: 8,
    kind: 'ecosystem',
    name: { en: 'Salesforce Ecosystem', ar: 'منظومة Salesforce' },
    outcome: {
      en: 'CRM + AI + Analytics + Integration + Data Management — the complete customer intelligence platform, unified under one partner.',
      ar: 'إدارة علاقات العملاء والذكاء الاصطناعي والتحليلات والتكامل وإدارة البيانات — منصة موحدة وشاملة لذكاء العملاء ضمن شراكة واحدة.',
    },
    ecosystemMembers: ['Salesforce', 'MuleSoft', 'Tableau', 'Informatica'],
  },
];

/** Computed strategic-relationship count (8) — never hardcode this. */
export const STRATEGIC_PARTNER_COUNT = STRATEGIC_PARTNERS.length;

/** The seven single-partner relationships (everything except the ecosystem). */
export const STRATEGIC_PARTNERS_SINGLE = STRATEGIC_PARTNERS.filter(
  (p) => p.kind === 'partner',
);

/** The Salesforce ecosystem relationship. */
export const SALESFORCE_ECOSYSTEM = STRATEGIC_PARTNERS.find(
  (p) => p.kind === 'ecosystem',
)!;
