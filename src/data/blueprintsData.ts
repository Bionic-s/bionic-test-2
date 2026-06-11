// Transformation Blueprints Data
// 12 blueprints mapped to Bionic's actual ecosystem — partners, products, capabilities
// 2026-06-03

export interface Blueprint {
  slug: string;
  title: string;
  industry: string;
  industrySlug: string;
  capabilities: string[];
  capabilitySlugs: string[];
  services: string[];
  serviceSlugs: string[];
  partners: string[];
  products: string[];
  challenge: string;
  architecture: string;
  outcomes: string[];
  whyBionic: string;
}

export const blueprints: Blueprint[] = [
  // ── Government ──────────────────────────────────────────
  {
    slug: 'sovereign-ai-platform',
    title: 'Sovereign AI Platform',
    industry: 'Government & Public Sector',
    industrySlug: 'government',
    capabilities: ['Enterprise AI & Automation', 'Sovereign Infrastructure & Hybrid Cloud', 'Cybersecurity & Cyber Resilience', 'Data, Analytics & Intelligence'],
    capabilitySlugs: ['ai', 'infra', 'cyber', 'data'],
    services: ['AI Readiness Assessment', 'AI & Automation Deployment', 'Platform & App Delivery', 'Managed Operations', 'SOC-as-a-Service'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM', 'Dell Technologies', 'Intel', 'Platform9', 'Red Hat'],
    products: ['watsonx.ai', 'watsonx.governance', 'Dell PowerEdge R760xa', 'Intel Gaudi 3', 'IBM FlashSystem 7300', 'Safeguarded Copy', 'Red Hat OpenShift', 'Platform9 Managed Kubernetes', 'QRadar SIEM'],
    challenge: 'A government entity holds sensitive citizen data that cannot be processed on public cloud AI. They need a fully sovereign AI platform — from infrastructure to production models — compliant with NCA regulations and operating entirely within the Kingdom.',
    architecture: 'Intel Gaudi 3 AI accelerators on Dell PowerEdge R760xa → Platform9 Managed K8s / Red Hat OpenShift container platform → watsonx.ai model training & inference layer → watsonx.governance AI guardrails → Safeguarded Copy immutable storage → QRadar SIEM continuous monitoring',
    outcomes: [
      '100% in-Kingdom data residency',
      'Lower cost-per-inference through sovereign infrastructure optimization',
      'NCA-compliant AI lifecycle from experiment to production',
      'Governed model deployment pipeline with full audit trail',
    ],
    whyBionic: 'No single partner assembles IBM + Dell + Red Hat + Intel + Platform9 into one sovereign AI platform. Bionic architects the complete operating system — not a collection of vendor parts.',
  },
  {
    slug: 'inter-ministry-data-fabric',
    title: 'Inter-Ministry Data Fabric',
    industry: 'Government & Public Sector',
    industrySlug: 'government',
    capabilities: ['Data, Analytics & Intelligence', 'Integration & Intelligent Operations', 'Enterprise AI & Automation'],
    capabilitySlugs: ['data', 'integration', 'ai'],
    services: ['AI Readiness Assessment', 'Platform & App Delivery', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['Informatica', 'Google', 'MuleSoft', 'Tableau'],
    products: ['Informatica MDM', 'IDMC', 'BigQuery', 'MuleSoft Anypoint', 'Apigee', 'Tableau', 'Looker'],
    challenge: 'Government data is fragmented across ministries with no interoperability. Strategic decisions require data from 3–4 entities, each running different systems. No single source of truth exists.',
    architecture: 'Source systems → MuleSoft Anypoint integration mesh → Informatica MDM (golden record) → BigQuery analytics lake → Tableau / Looker executive dashboards → Apigee governed API exposure',
    outcomes: [
      'Single source of truth across government entities',
      'Accelerated inter-agency decision velocity through unified data fabric',
      'Governed data lineage from source to dashboard',
      'AI-ready unified data platform',
    ],
    whyBionic: 'Bionic combines MDM + Integration + Analytics in one formation. Informatica + MuleSoft + Tableau + BigQuery = a complete government data platform — not a piecemeal tool collection.',
  },
  {
    slug: 'national-soc',
    title: 'National Cybersecurity Operations Center',
    industry: 'Government & Public Sector',
    industrySlug: 'government',
    capabilities: ['Cybersecurity & Cyber Resilience', 'Technology Operations', 'Sovereign Infrastructure & Hybrid Cloud'],
    capabilitySlugs: ['cyber', 'ops', 'infra'],
    services: ['Compliance & GRC Advisory', 'Platform & App Delivery', 'SOC-as-a-Service', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM'],
    products: ['QRadar SIEM', 'Guardium Data Security', 'Verify IAM', 'OpenPages GRC', 'Safeguarded Copy'],
    challenge: 'A government entity requires a sovereign SOC to monitor threats at national scale. It must operate within the Kingdom, be NCA-compliant, and detect advanced persistent threats across multiple agencies.',
    architecture: 'Log sources (multi-agency) → QRadar SIEM ingestion & correlation → Guardium data activity monitoring → Verify IAM access governance → OpenPages GRC compliance automation → Safeguarded Copy immutable log retention',
    outcomes: [
      'Meaningfully fewer material security incidents — Forrester research reports 50%+ reduction in breach risk under Zero Trust architecture',
      'Significantly accelerated incident response — SOAR platforms typically enable 3–5× faster response times',
      'NCA-compliant 24×7 security operations',
      'Automated compliance reporting — regulator-ready',
    ],
    whyBionic: 'Bionic deploys and operates a sovereign SOC — not just selling QRadar licenses. The model: build + operate + guarantee compliance.',
  },

  // ── Banking ─────────────────────────────────────────────
  {
    slug: 'customer-360-intelligent-engagement',
    title: 'Customer 360 & Intelligent Engagement',
    industry: 'Banking & Financial Services',
    industrySlug: 'banking',
    capabilities: ['Business Applications & CX', 'Data, Analytics & Intelligence', 'Integration & Intelligent Operations', 'Enterprise AI & Automation'],
    capabilitySlugs: ['apps', 'data', 'integration', 'ai'],
    services: ['AI Readiness Assessment', 'AI & Automation Deployment', 'Platform & App Delivery', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['Salesforce', 'MuleSoft', 'Informatica', 'Tableau'],
    products: ['Salesforce Financial Services Cloud', 'Data Cloud', 'Einstein AI', 'MuleSoft Anypoint', 'Informatica MDM', 'Tableau'],
    challenge: 'A bank holds customer data across isolated systems: core banking, legacy CRM, and digital channels. A single customer appears 3 times with different data. No unified view of the customer journey exists.',
    architecture: 'Core banking → MuleSoft Anypoint connectors → Informatica MDM (Customer Golden Record) → Salesforce Data Cloud (Customer 360) → Einstein AI (next-best-action) → Financial Services Cloud (engagement) → Tableau (executive insights)',
    outcomes: [
      'Single Customer 360 across all channels',
      'Accelerated customer onboarding — digital programs achieve 40%+ improvement',
      'Measurable improvement in customer satisfaction through integrated Customer 360',
      'AI-driven next-best-action engine',
    ],
    whyBionic: 'Bionic combines Salesforce + MuleSoft + Informatica + Tableau into a true Customer 360 — not just CRM. MDM unifies the customer. MuleSoft connects core banking. Einstein adds intelligence.',
  },
  {
    slug: 'real-time-fraud-detection',
    title: 'Real-Time Fraud Detection & Financial Crime Intelligence',
    industry: 'Banking & Financial Services',
    industrySlug: 'banking',
    capabilities: ['Enterprise AI & Automation', 'Data, Analytics & Intelligence', 'Cybersecurity & Cyber Resilience'],
    capabilitySlugs: ['ai', 'data', 'cyber'],
    services: ['AI Readiness Assessment', 'AI & Automation Deployment', 'SOC-as-a-Service'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM', 'Salesforce'],
    products: ['watsonx.ai', 'watsonx.governance', 'QRadar SIEM', 'Guardium', 'Salesforce Financial Services Cloud', 'Data Cloud'],
    challenge: 'A bank faces escalating fraud losses as attacks evolve in real time while detection systems remain batch-based. SAMA demands more accurate and faster AML reporting.',
    architecture: 'Transaction streams → watsonx.ai real-time scoring → QRadar correlation & alerting → Guardium audit trail → Financial Services Cloud case management → SAMA-compliant reporting',
    outcomes: [
      'Significantly improved fraud detection — modern AI models achieve 2–4× improvement over rules-based systems',
      'Real-time (sub-second) transaction scoring',
      'SAMA-compliant AML reporting',
      'Material reduction in false positives — industry deployments report 30–50% reduction',
    ],
    whyBionic: 'Bionic designs a fraud detection system that combines AI (watsonx) + SIEM (QRadar) + Case Management (Salesforce) — not a single tool. Intelligence-Automation-Trust in action.',
  },
  {
    slug: 'sama-compliant-banking-infra',
    title: 'SAMA-Compliant Sovereign Banking Infrastructure',
    industry: 'Banking & Financial Services',
    industrySlug: 'banking',
    capabilities: ['Sovereign Infrastructure & Hybrid Cloud', 'Cybersecurity & Cyber Resilience', 'Technology Operations'],
    capabilitySlugs: ['infra', 'cyber', 'ops'],
    services: ['Compliance & GRC Advisory', 'Platform & App Delivery', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['Dell Technologies', 'IBM', 'Intel', 'Platform9', 'Red Hat'],
    products: ['Dell PowerEdge R760', 'PowerMax 2500', 'IBM FlashSystem', 'Safeguarded Copy', 'Red Hat OpenShift', 'Platform9 Managed Kubernetes', 'Platform9 Private Cloud', 'Intel Xeon 6', 'IBM Power S1012'],
    challenge: 'A bank must modernize its infrastructure to be SAMA-compliant, AI-ready, and entirely within the Kingdom. Current infrastructure is aging and cannot run AI workloads.',
    architecture: 'Dell PowerEdge compute + PowerMax storage → Platform9 Managed K8s / Red Hat OpenShift container platform → IBM FlashSystem with Safeguarded Copy (immutable) → QRadar compliance monitoring → SAMA-aligned 24×7 operations',
    outcomes: [
      'Designed for SAMA regulatory compliance across all architecture layers',
      'Target 99.99% availability with immutable backup architecture',
      'AI-ready compute infrastructure',
      '5–7 year TCO with ransomware resilience',
    ],
    whyBionic: 'Bionic architects SAMA-compliant infrastructure from the ground up — compute + storage + container platform + cyber resilience + sovereign operations in one formation.',
  },

  // ── Oil & Gas ──────────────────────────────────────────
  {
    slug: 'industrial-intelligence-predictive-ops',
    title: 'Industrial Intelligence & Predictive Operations',
    industry: 'Oil, Gas & Energy',
    industrySlug: 'energy',
    capabilities: ['Enterprise AI & Automation', 'Data, Analytics & Intelligence', 'Integration & Intelligent Operations', 'Sovereign Infrastructure & Hybrid Cloud'],
    capabilitySlugs: ['ai', 'data', 'integration', 'infra'],
    services: ['AI Readiness Assessment', 'AI & Automation Deployment', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM', 'Dell Technologies', 'Intel', 'Platform9', 'Red Hat'],
    products: ['watsonx.ai', 'Intel Gaudi AI (Edge)', 'Dell PowerEdge XR', 'Red Hat OpenShift', 'Platform9 Managed Kubernetes (Edge)', 'Red Hat Ansible', 'IBM Maximo'],
    challenge: 'An oil facility loses millions to unplanned downtime. IoT data from thousands of sensors goes unanalyzed. Maintenance is reactive, not predictive. No digital twin exists.',
    architecture: 'Field sensors → Dell PowerEdge XR ruggedized edge nodes → Intel Gaudi Edge AI inference → Platform9 Edge K8s / Red Hat OpenShift → Red Hat Ansible automation → watsonx.ai predictive models → IBM Maximo asset management → central operations monitoring',
    outcomes: [
      'Material reduction in unplanned downtime — predictive maintenance programs report 30–50% improvement',
      'Measurable improvement in asset utilization — digital twin programs report 20%+ improvement',
      'Significantly faster operational decisions — real-time intelligence platforms enable 2–3× improvement',
      'Predictive maintenance replacing reactive — facility-wide',
    ],
    whyBionic: 'Bionic deploys AI in the field — not just the data center. Intel Edge AI + Dell ruggedized + Platform9 Edge K8s + Red Hat Ansible + IBM AI = an industrial platform from edge to cloud.',
  },
  {
    slug: 'ot-it-integration-secure-ops',
    title: 'OT/IT Integration & Secure Industrial Operations',
    industry: 'Oil, Gas & Energy',
    industrySlug: 'energy',
    capabilities: ['Integration & Intelligent Operations', 'Cybersecurity & Cyber Resilience', 'Technology Operations'],
    capabilitySlugs: ['integration', 'cyber', 'ops'],
    services: ['Compliance & GRC Advisory', 'Platform & App Delivery', 'SOC-as-a-Service'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM', 'MuleSoft', 'Red Hat'],
    products: ['IBM MQ', 'Red Hat Ansible', 'MuleSoft Anypoint', 'QRadar SIEM', 'Guardium'],
    challenge: 'Operational Technology (OT) and IT environments are completely isolated in the industrial facility. SCADA doesn\'t speak to ERP. Security patches don\'t reach industrial systems. OT attacks are increasing globally.',
    architecture: 'OT layer (SCADA/DCS) → IBM MQ industrial protocol bridging → Red Hat Ansible secure automation → MuleSoft Anypoint API layer → IT systems (ERP/analytics) · QRadar SIEM monitors both OT and IT · Guardium protects industrial data',
    outcomes: [
      'Unified OT/IT security posture',
      'IEC 62443 compliance achieved',
      'Material reduction in manual handoffs — API-led integration achieves 30–60% reduction',
      'Real-time OT asset visibility & threat detection',
    ],
    whyBionic: 'Bionic delivers true OT/IT integration: MQ for industrial protocols + Ansible for secure OT automation + Anypoint for the API layer + QRadar for industrial security. One integrated operating model.',
  },

  // ── Healthcare ─────────────────────────────────────────
  {
    slug: 'intelligent-patient-experience',
    title: 'Intelligent Patient Experience & Connected Care',
    industry: 'Healthcare',
    industrySlug: 'healthcare',
    capabilities: ['Business Applications & CX', 'Data, Analytics & Intelligence', 'Integration & Intelligent Operations', 'Enterprise AI & Automation'],
    capabilitySlugs: ['apps', 'data', 'integration', 'ai'],
    services: ['AI Readiness Assessment', 'Platform & App Delivery', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['Salesforce', 'Google', 'Informatica', 'MuleSoft'],
    products: ['Salesforce Health Cloud', 'Experience Cloud', 'MuleSoft Anypoint (HL7/FHIR)', 'Informatica MDM (Patient Golden Record)', 'BigQuery', 'Tableau'],
    challenge: 'A hospital runs siloed systems: EMR, scheduling, billing, and patient portal. Patients re-enter data at every visit. The experience is fragmented. Clinical staff spend their time on administrative work.',
    architecture: 'EMR systems → MuleSoft FHIR connectors → Informatica MDM (Patient 360) → Salesforce Health Cloud (engagement) → Experience Cloud (patient portal) → BigQuery (clinical analytics) → Tableau (operational dashboards)',
    outcomes: [
      'Unified Patient 360 across all touchpoints',
      'Significant reduction in administrative workflow burden — healthcare automation deployments report up to 50% improvement',
      'Accelerated clinical decisions — studies show 20–40% faster clinical decision-making in comparable deployments',
      'PDPL-compliant patient data management',
    ],
    whyBionic: 'Bionic combines Health Cloud + FHIR Integration + MDM + Analytics into one healthcare platform. Not a medical CRM — an operating system for patient experience.',
  },
  {
    slug: 'clinical-intelligence-medical-ai',
    title: 'Clinical Intelligence & Medical Imaging AI',
    industry: 'Healthcare',
    industrySlug: 'healthcare',
    capabilities: ['Enterprise AI & Automation', 'Data, Analytics & Intelligence', 'Sovereign Infrastructure & Hybrid Cloud', 'Cybersecurity & Cyber Resilience'],
    capabilitySlugs: ['ai', 'data', 'infra', 'cyber'],
    services: ['AI Readiness Assessment', 'AI & Automation Deployment', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM', 'Google', 'Dell Technologies', 'Intel', 'Platform9'],
    products: ['watsonx.ai', 'Vertex AI', 'BigQuery', 'Dell PowerEdge R760xa', 'Intel Gaudi 3', 'Platform9 Managed Kubernetes', 'Guardium (PHI security)', 'Safeguarded Copy'],
    challenge: 'A hospital accumulates thousands of undiagnosed medical images. Radiologists are overwhelmed. Delayed diagnosis impacts patient outcomes. Clinical data sits unused for research.',
    architecture: 'PACS/VNA imaging → Dell PowerEdge + Intel Gaudi AI inference → Platform9 Managed K8s orchestration → watsonx.ai / Vertex AI model layer → BigQuery clinical data lake → Guardium PHI monitoring → Safeguarded Copy immutable storage',
    outcomes: [
      'Significant diagnostic speed improvement — radiology AI studies report 2–3× faster image review',
      'Material reduction in missed findings — AI-assisted diagnostics report 20–45% reduction in false negatives',
      'PDPL-compliant AI for medical imaging',
      'Research-ready clinical data platform',
    ],
    whyBionic: 'Bionic architects a complete sovereign medical AI system: AI compute (Gaudi) + AI models (watsonx, Vertex) + K8s orchestration (Platform9) + PHI security (Guardium) + Sovereign storage (Safeguarded Copy).',
  },

  // ── Enterprise ─────────────────────────────────────────
  {
    slug: 'agentic-workforce-transformation',
    title: 'Agentic Workforce Transformation',
    industry: 'Enterprise',
    industrySlug: 'enterprise',
    capabilities: ['Enterprise AI & Automation', 'Integration & Intelligent Operations', 'Business Applications & CX', 'Data, Analytics & Intelligence'],
    capabilitySlugs: ['ai', 'integration', 'apps', 'data'],
    services: ['AI Readiness Assessment', 'AI & Automation Deployment', 'Managed Operations'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['Salesforce', 'IBM', 'Google', 'MuleSoft'],
    products: ['Salesforce Agentforce', 'Einstein AI', 'watsonx.ai', 'watsonx Assistant', 'Vertex AI Agent Builder', 'MuleSoft Anypoint', 'Tableau'],
    challenge: 'A large enterprise\'s workforce is trapped in repetitive tasks: document processing, data entry, email triage, report generation. Leadership wants to transform to an agentic workforce model but doesn\'t know where to start or how to govern it.',
    architecture: 'Agentforce (CRM agents) · watsonx Assistant (enterprise agents) · Vertex AI Agent Builder (custom agents) → MuleSoft Anypoint (agent-to-system integration) → watsonx.governance (AI guardrails) → Tableau (agent performance analytics)',
    outcomes: [
      'Measurable improvement in decision speed — organizations report 20–40% acceleration with AI-powered analytics',
      'Substantial reduction in manual effort — intelligent automation programs report 30–60% improvement',
      'AI-augmented workforce across 3+ functions',
      'Governed agent lifecycle — experiment to production',
    ],
    whyBionic: 'Agentic AI is not a single product — it\'s an operating system. Bionic brings together 3 agent platforms (Agentforce + watsonx + Vertex) with a governance layer and integration fabric — not just deploying a chatbot.',
  },
  {
    slug: 'enterprise-zero-trust',
    title: 'Enterprise Zero Trust Architecture',
    industry: 'Enterprise',
    industrySlug: 'enterprise',
    capabilities: ['Cybersecurity & Cyber Resilience', 'Integration & Intelligent Operations', 'Technology Operations'],
    capabilitySlugs: ['cyber', 'integration', 'ops'],
    services: ['Compliance & GRC Advisory', 'Platform & App Delivery', 'SOC-as-a-Service'],
    serviceSlugs: ['advisory', 'implementation', 'operations'],
    partners: ['IBM', 'Red Hat'],
    products: ['IBM Verify IAM', 'QRadar SIEM', 'Guardium', 'OpenPages GRC', 'Red Hat Ansible', 'Safeguarded Copy'],
    challenge: 'An enterprise expanded through acquisitions with a hybrid environment: on-premise + multi-cloud + remote workforce. No Zero Trust exists. Every internal network is trusted by default. Identity and access are not unified.',
    architecture: 'Verify IAM (identity fabric) → QRadar SIEM (continuous monitoring) → Guardium (data security) → Red Hat Ansible (automated response) → OpenPages (compliance reporting) → Safeguarded Copy (immutable backup)',
    outcomes: [
      'Meaningfully lower risk exposure — Forrester reports 40%+ improvement in security posture under Zero Trust',
      'Never trust, always verify — enterprise-wide',
      'Significantly accelerated incident response — automated remediation platforms typically enable 3–5× faster handling',
      'Audit-ready compliance — continuous',
    ],
    whyBionic: 'Zero Trust is not a product. Bionic implements Zero Trust across the full IBM security stack with Ansible automation — not just a consulting certification. Build + operate + guarantee.',
  },
];

// Derived lookup maps for filtering
export const allBlueprintIndustries = ['Government & Public Sector', 'Banking & Financial Services', 'Oil, Gas & Energy', 'Healthcare', 'Enterprise'];
export const allBlueprintCapabilities = [
  'Enterprise AI & Automation',
  'Data, Analytics & Intelligence',
  'Business Applications & CX',
  'Integration & Intelligent Operations',
  'Cybersecurity & Cyber Resilience',
  'Sovereign Infrastructure & Hybrid Cloud',
  'Technology Operations',
];
export const allBlueprintPartners = [
  'IBM', 'Dell Technologies', 'Intel', 'Platform9',
  'Salesforce', 'MuleSoft', 'Informatica', 'Tableau', 'Google', 'Red Hat',
];
