import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Cpu, Wrench } from 'lucide-react';
import { PartnerLogo } from '../../components/PartnerLogo';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/test-site-2/images/it-infrastructure.avif';

/* ═══════════════════════════════════════════
   CATEGORY-BASED PRODUCT CATALOG
   ═══════════════════════════════════════════ */

interface Product {
  name: string;
  vendor: string;
  desc: string;
}

interface Category {
  name: string;
  products: Product[];
}

/* Tab 1: Infrastructure ⎯ Full AI Stack: Laptop → GPU → Server → Cloud */
const infraCategories: Category[] = [
  {
    name: 'AI Workstations & Laptops',
    products: [
      { name: 'Precision AI Workstations', vendor: 'Dell Technologies', desc: 'AI-ready desktop and mobile workstations with NVIDIA RTX or Intel Arc Pro GPUs, ISV-certified for ML, data science, and edge AI development.' },
      { name: 'ThinkPad P-Series & ThinkStation', vendor: 'Lenovo', desc: 'Professional AI mobile workstations and desktops — NVIDIA RTX GPU options, large memory, engineered for on-device ML and field AI workloads.' },
      { name: 'Intel Core Ultra (AI PC)', vendor: 'Intel', desc: 'Next-gen AI PC processors with built-in NPU — deliver on-device AI inference, Copilot+ experiences, and power-efficient edge intelligence in enterprise laptops.' },
    ],
  },
  {
    name: 'AI GPUs & Accelerators',
    products: [
      { name: 'Gaudi 3 AI Accelerators', vendor: 'Intel', desc: 'Purpose-built deep learning accelerators for training and inference at scale. Open ecosystem — cost-effective alternative to proprietary GPU architectures.' },
      { name: 'Data Center GPU Max', vendor: 'Intel', desc: 'High-density GPU compute for HPC and AI — up to 128 Xe cores per GPU. Designed for dense parallel workloads: simulation, training, and scientific computing.' },
      { name: 'NVIDIA GPUs (via OEM)', vendor: 'Dell Technologies', desc: 'NVIDIA H100, L40S, and RTX-series GPUs factory-integrated in Dell PowerEdge servers and Precision workstations. Full NVIDIA AI Enterprise software stack available.' },
      { name: 'NVIDIA GPUs (via OEM)', vendor: 'Lenovo', desc: 'NVIDIA H100, L40S, and RTX GPUs in Lenovo ThinkSystem servers and ThinkStation workstations — validated for NVIDIA AI Enterprise and NVIDIA Omniverse.' },
    ],
  },
  {
    name: 'Servers',
    products: [
      { name: 'PowerEdge Servers', vendor: 'Dell Technologies', desc: 'Enterprise rack, tower, and GPU-accelerated servers — from general-purpose to AI-optimized with NVIDIA or Intel GPU options.' },
      { name: 'ThinkSystem Servers', vendor: 'Lenovo', desc: 'Enterprise servers engineered for AI training, inferencing, database, and virtualization — tested with NVIDIA AI Enterprise.' },
      { name: 'Power Servers', vendor: 'IBM', desc: 'Linux servers purpose-built for data-intensive workloads, SAP HANA, and AI inferencing.' },
      { name: 'Xeon Scalable Processors', vendor: 'Intel', desc: 'Data center processors with built-in AI acceleration (AMX) and hardware-enhanced security.' },
    ],
  },
  {
    name: 'Storage',
    products: [
      { name: 'PowerStore Storage', vendor: 'Dell Technologies', desc: 'Mid-range all-flash with intelligent automation, NVMe performance, and AppsON capability.' },
      { name: 'PowerMax Storage', vendor: 'Dell Technologies', desc: 'Mission-critical high-end storage — real-time AI-driven optimization, zero-downtime architecture.' },
      { name: 'FlashSystem Storage', vendor: 'IBM', desc: 'NVMe-accelerated all-flash — cyber-resilient with integrated encryption and ransomware detection.' },
    ],
  },
  {
    name: 'Hyperconverged (HCI)',
    products: [
      { name: 'VxRail Hyperconverged', vendor: 'Dell Technologies', desc: 'Turnkey HCI appliance — compute, storage, networking. Automated lifecycle management for VMware and cloud-native.' },
      { name: 'ThinkAgile HCI', vendor: 'Lenovo', desc: 'Integrated HCI for hybrid cloud — factory-integrated with Nutanix, Microsoft, or VMware.' },
    ],
  },
  {
    name: 'Cloud & As-a-Service',
    products: [
      { name: 'APEX Cloud & As-a-Service', vendor: 'Dell Technologies', desc: 'Consumption-based infrastructure — on-prem, edge, colocation. Pay-per-use with elastic capacity.' },
      { name: 'Managed Kubernetes', vendor: 'Platform9', desc: 'Kubernetes in your datacenter or VPC — multi-cluster, auto-healing, managed from a single SaaS control plane.' },
      { name: 'OpenStack Private Cloud', vendor: 'Platform9', desc: 'AWS-like private cloud on your hardware — compute, networking, storage, identity. Sovereignty without operational burden.' },
      { name: 'Red Hat OpenShift', vendor: 'Red Hat', desc: 'Enterprise Kubernetes platform — build, deploy, scale containerized apps across hybrid cloud. Foundation for sovereign private cloud.' },
      { name: 'TruScale IaaS', vendor: 'Lenovo', desc: 'Infrastructure-as-a-Service — on-prem hardware with cloud-like consumption. Pay-per-use, elastic capacity, Lenovo-managed.' },
    ],
  },
];

/* Tab 2: Cybersecurity */
const cyberCategories: Category[] = [
  {
    name: 'SIEM & Threat Intelligence',
    products: [
      { name: 'QRadar SIEM', vendor: 'IBM', desc: 'Unified threat detection, investigation, and response. NCA-compatible — includes log insights and behavioral analytics.' },
      { name: 'QRadar SOAR', vendor: 'IBM', desc: 'Security orchestration and automated response — codify playbooks, automate triage. Reduce MTTR from hours to minutes.' },
    ],
  },
  {
    name: 'Data Security & Compliance',
    products: [
      { name: 'Guardium Data Security', vendor: 'IBM', desc: 'Real-time database activity monitoring, vulnerability assessment, and compliance automation. SAMA and PDPL-aligned.' },
    ],
  },
  {
    name: 'Cyber Recovery',
    products: [
      { name: 'PowerProtect Cyber Recovery', vendor: 'Dell Technologies', desc: 'Isolated, immutable recovery vault — air-gapped from production. Protects critical data from ransomware with automated integrity checks.' },
    ],
  },
];

/* Tab 3: Platforms & AI */
const platformCategories: Category[] = [
  {
    name: 'CRM & Customer Experience',
    products: [
      { name: 'Sales Cloud', vendor: 'Salesforce', desc: 'Pipeline management, forecasting, territory planning, and AI-powered insights. Built for Saudi enterprise sales teams.' },
      { name: 'Service Cloud', vendor: 'Salesforce', desc: 'Intelligent customer service — case management, omni-channel routing, field service, and AI-powered agent assistance.' },
      { name: 'Marketing Cloud', vendor: 'Salesforce', desc: 'Personalized marketing at scale — customer journeys, email, mobile, advertising, real-time engagement with Data Cloud.' },
    ],
  },
  {
    name: 'Integration & Automation',
    products: [
      { name: 'Anypoint Platform', vendor: 'MuleSoft', desc: 'API-led integration — connect applications, data, devices. Pre-built connectors, design, build, manage APIs at enterprise scale.' },
      { name: 'Ansible Automation Platform', vendor: 'Red Hat', desc: 'Enterprise automation — infrastructure provisioning, config management, app deployment, security orchestration. Agentless architecture.' },
      { name: 'API Management', vendor: 'MuleSoft', desc: 'Full-lifecycle API management — gateway, security, analytics, developer portal. Govern and scale your API ecosystem.' },
    ],
  },
  {
    name: 'Enterprise AI & Machine Learning',
    products: [
      { name: 'Einstein AI', vendor: 'Salesforce', desc: 'AI embedded in every Salesforce app — predictions, recommendations, generative AI grounded in your enterprise data.' },
      { name: 'Agentforce', vendor: 'Salesforce', desc: 'Autonomous AI agents operating across sales, service, marketing, commerce — taking action, not just generating text.' },
      { name: 'watsonx.ai', vendor: 'IBM', desc: 'Enterprise studio for foundation models, generative AI, and ML. Train, validate, tune, deploy — with governance built in.' },
      { name: 'watsonx Assistant', vendor: 'IBM', desc: 'Conversational AI — build intelligent virtual assistants that understand Arabic and operate across channels.' },
      { name: 'Vertex AI Platform', vendor: 'Google', desc: 'Unified AI platform — train, deploy, manage ML models and gen AI apps. Model Garden, Agent Builder, MLOps integrated.' },
      { name: 'Gaudi 3 AI Accelerators', vendor: 'Intel', desc: 'Purpose-built deep learning accelerators for training and inference. Open ecosystem, cost-effective alternative to proprietary GPU.' },
    ],
  },
  {
    name: 'Data & Analytics',
    products: [
      { name: 'Tableau Creator', vendor: 'Tableau', desc: 'End-to-end analytics — connect data, build interactive dashboards, share insights. Data prep, analysis, storytelling in one license.' },
      { name: 'Tableau Explorer & Viewer', vendor: 'Tableau', desc: 'Self-service analytics — explore trusted dashboards, ask questions in natural language, subscribe to data-driven alerts.' },
      { name: 'Informatica MDM', vendor: 'Informatica', desc: 'Master Data Management — trusted 360° view of customers, assets, suppliers. AI-powered matching and stewardship.' },
      { name: 'Informatica Data Governance', vendor: 'Informatica', desc: 'Data governance and catalog — discover, classify, govern data. Automated lineage, quality rules, PDPL compliance.' },
      { name: 'BigQuery', vendor: 'Google', desc: 'Serverless multi-cloud data warehouse with built-in ML. Analyze petabytes in seconds — AI-ready analytics.' },
    ],
  },
];

/* Tab 4: Services */
const serviceCategories: Category[] = [
  {
    name: 'Enterprise AI Agents',
    products: [
      { name: 'Agent Discovery Workshop', vendor: 'Bionic Solutions', desc: '2-week engagement — we identify 3-5 high-ROI agent use cases across your enterprise. Delivered as a prioritized agent roadmap with build estimates.' },
      { name: 'Custom AI Agent Build', vendor: 'Bionic Solutions', desc: 'Full-cycle agent development — discovery, design, build, test, deploy. Powered by Salesforce Agentforce, IBM watsonx, or Google Vertex AI. Delivered production-ready in your environment.' },
      { name: 'Agent Operations & Evolution', vendor: 'Bionic Solutions', desc: 'Continuous agent monitoring, prompt optimization, knowledge base maintenance, and performance analytics. Monthly retainer — we keep your agents improving.' },
    ],
  },
  {
    name: 'Advisory & Strategy',
    products: [
      { name: 'AI Readiness Assessment', vendor: 'Bionic Solutions', desc: '2-week assessment — infrastructure, data, governance, talent readiness. Board-ready report with prioritized roadmap.' },
      { name: 'Strategy & Architecture', vendor: 'Bionic Solutions', desc: 'Executive engagement — target-state design, capability gap analysis, 18-month transformation roadmap.' },
    ],
  },
  {
    name: 'Deployment & Integration',
    products: [
      { name: 'Platform Deployment', vendor: 'Bionic Solutions', desc: 'Full deployment of hardware, software, cloud platforms — multi-vendor, multi-domain, single accountability.' },
      { name: 'AI & Automation Delivery', vendor: 'Bionic Solutions', desc: 'AI models, automation workflows, agentic systems into production — MLOps, monitoring, governance.' },
      { name: 'Platform Engineering & IDP', vendor: 'Bionic Solutions', desc: 'Internal Developer Platform — golden paths, self-service infra, automated governance. Infrastructure in minutes, not weeks.' },
    ],
  },
  {
    name: 'Managed Operations',
    products: [
      { name: 'Managed Operations 24×7', vendor: 'Bionic Solutions', desc: 'Continuous platform ops — monitoring, incident response, patching, optimization. 3 tiers: Essential, Advanced, Elite.' },
      { name: 'SOC-as-a-Service', vendor: 'Bionic Solutions', desc: '24×7 security operations center — threat monitoring, hunting, incident response, compliance. NCA and SAMA-aligned.' },
      { name: 'FinOps Governance', vendor: 'Bionic Solutions', desc: 'Cloud and infrastructure cost management — visibility, chargeback, forecasting, optimization. Typically saves 25–40% in 2 quarters.' },
    ],
  },
];

/* ═══════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════ */

const tabs = [
  { id: 'infrastructure', label: 'Infrastructure', icon: Server, desc: 'Servers, storage, HCI, and sovereign cloud platforms.' },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, desc: 'SIEM, data security, cyber recovery, and identity — all partners.' },
  { id: 'platforms', label: 'Platforms & AI', icon: Cpu, desc: 'CRM, integration, enterprise AI, data, and analytics.' },
  { id: 'services', label: 'Services', icon: Wrench, desc: 'Strategy, deployment, managed operations, and optimization.' },
] as const;

type TabId = typeof tabs[number]['id'];

function getCategories(tab: TabId): Category[] {
  switch (tab) {
    case 'infrastructure': return infraCategories;
    case 'cybersecurity': return cyberCategories;
    case 'platforms': return platformCategories;
    case 'services': return serviceCategories;
  }
}

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('infrastructure');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = getCategories(activeTab);

  return (
    <div className="min-h-screen bg-bg-primary">

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>
        <motion.div
          ref={heroRef} {...fadeIn}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative z-10 pt-40 pb-24 px-4 text-center"
        >
          <div className="container mx-auto max-w-4xl">
            <SectionLabel>Product Catalog</SectionLabel>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Enterprise technology<br />
              <span style={{ color: ACCENT }}>sourcing, simplified.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-[620px] mx-auto leading-relaxed">
              Browse by category — compare brands, models, and capabilities side by side.
              One relationship. One accountability chain. Delivered and operated in Saudi Arabia.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 2. TABS ═══ */}
        <div className="flex flex-wrap gap-2 mb-20 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-[#00BFFF15] border-[#00BFFF40] text-white'
                  : 'border-white/5 text-text-muted hover:text-text-primary hover:border-white/15'
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#00BFFF]' : ''}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ═══ 3. CATEGORIES ═══ */}
        <div className="space-y-16 mb-24">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: catIdx * 0.08 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-text-primary">{cat.name}</h2>
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-tiny text-text-muted">{cat.products.length} option{cat.products.length > 1 ? 's' : ''}</span>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.products.map((product, pi) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: catIdx * 0.08 + pi * 0.03 }}
                    className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-[#00BFFF20] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-36 h-36 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.06] border border-white/8 p-3">
                        <PartnerLogo partner={product.vendor} size="md" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-text-primary group-hover:text-[#00BFFF] transition-colors">{product.name}</h3>
                        <p className="text-tiny text-text-muted mt-0.5">{product.vendor}</p>
                        <p className="text-text-muted text-small mt-2 leading-relaxed">{product.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══ 4. HOW TO ORDER ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12">
            <SectionLabel>How to Order</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Three steps from inquiry to delivery.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Tell us what you need', desc: 'Send us your requirements — a spec sheet, a project brief, or just a product name. We handle the rest.' },
                { step: '2', title: 'Receive a tailored quotation', desc: 'Within 24–48 hours: a formal quotation with pricing, delivery timeline, and partner/distributor sourcing details.' },
                { step: '3', title: 'Delivery & deployment', desc: 'Products delivered to your site in Saudi Arabia. Optional: deployment, integration, and managed operations by our team.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                    style={{ backgroundColor: ACCENT }}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. VENDOR ECOSYSTEM ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <SectionLabel>Vendor Ecosystem</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold">11 direct technology partners.</h2>
            <p className="text-text-muted text-base mt-3 max-w-lg mx-auto">
              Products sourced directly through authorized distributor relationships — Ingram Micro and regional distribution partners.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4 lg:grid-cols-6">
            {[
              'Dell Technologies', 'Intel', 'IBM', 'Lenovo',
              'Salesforce', 'Google', 'Red Hat', 'Platform9',
              'MuleSoft', 'Tableau', 'Informatica',
            ].map((vendor) => (
              <div key={vendor}
                className="bg-bg-secondary border border-white/5 rounded-xl p-4 flex items-center justify-center h-36 hover:border-[#00BFFF20] hover:bg-[#00BFFF03] transition-all duration-300">
                <div className="w-full h-24 flex items-center justify-center">
                  <PartnerLogo partner={vendor} size="md" />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. CTA ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pb-16"
        >
          <div className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00BFFF0A, var(--bg-secondary), var(--bg-secondary))',
              border: '1px solid #00BFFF15',
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #00BFFF05 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to <span style={{ color: ACCENT }}>procure with confidence</span>?
              </h2>
              <p className="text-text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us what you need. We'll prepare a formal quotation within 24–48 hours —
                with partner sourcing, pricing, and delivery timeline. No commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact?source=products&intent=procurement"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30"
                >
                  Schedule a Procurement Briefing
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
