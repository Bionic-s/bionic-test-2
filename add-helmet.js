// Script to add react-helmet-async <Helmet> to all page components
// Each page gets a unique title and meta description
import fs from 'fs';
import path from 'path';

const BASE = '/root/bionic-test-2/src/pages';

// ─── Define metadata for ALL pages ───
const PAGE_META = {
  // ENGLISH PAGES
  'HomePage.tsx': {
    title: 'Home | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Bionic Solutions — Enterprise AI Transformation Integrator. We design intelligence, automation, and trust into business. Serving Saudi Arabia and the GCC.',
  },
  'AboutPage.tsx': {
    title: 'About | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: "Bionic Solutions is Saudi Arabia's enterprise AI transformation integrator — uniting strategy, technology, data, and governance into measured business outcomes.",
  },
  'ArchitecturePage.tsx': {
    title: 'Architecture | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Our 10-layer transformation architecture unifies strategy, capabilities, services, industries, and governance into one integrated operating system.',
  },
  'EnterpriseValueSystemPage.tsx': {
    title: 'Value System | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'How value accumulates across time horizons — from immediate operational wins to multi-year enterprise capability building.',
  },
  'PartnersPage.tsx': {
    title: 'Partners | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Strategic technology partners — Salesforce, Google Cloud, IBM, Intel, Dell, Informatica, and more. Multi-vendor, one accountable relationship.',
  },
  'BlueprintsHub.tsx': {
    title: 'Blueprints | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Reference transformation blueprints across government, banking, oil & gas, healthcare, and enterprise — real patterns, real outcomes.',
  },
  'TransformationBlueprintPage.tsx': {
    title: 'Blueprint | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Detailed transformation blueprint — architecture, outcomes, and implementation patterns from Saudi enterprise transformations.',
  },
  'ContactPage.tsx': {
    title: 'Contact | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Start a conversation with Bionic Solutions. Enterprise AI transformation, vendor assessment, or strategic briefing.',
  },
  'BookDiscoveryCall.tsx': {
    title: 'Book Discovery Call | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Book a 30-minute discovery call with Bionic Solutions. No pitch, no pressure — a structured conversation about your transformation priorities.',
  },
  'NotFoundPage.tsx': {
    title: '404 — Page Not Found | Bionic Solutions',
    desc: 'The page you are looking for does not exist. Explore Bionic Solutions — Enterprise AI Transformation Integrator.',
  },

  // Solutions / Capabilities
  'solutions/AISolutionPage.tsx': {
    title: 'Enterprise AI & Automation | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Enterprise AI & Automation — agentic AI, copilots, MLOps, and intelligent automation for Saudi enterprises.',
  },
  'solutions/DataAnalyticsPage.tsx': {
    title: 'Data, Analytics & Intelligence | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Data, Analytics & Intelligence — AI-ready data platforms, executive dashboards, MDM, and advanced analytics.',
  },
  'solutions/BusinessApplicationsPage.tsx': {
    title: 'Business Applications & CX | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Business Applications & CX — CRM, contact center, marketing automation, commerce, and employee experience.',
  },
  'solutions/IntegrationPage.tsx': {
    title: 'Integration & Intelligent Operations | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Integration & Intelligent Operations — API-led architecture, event-driven, and workflow orchestration.',
  },
  'solutions/CybersecurityPage.tsx': {
    title: 'Cybersecurity & Cyber Resilience | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Cybersecurity & Cyber Resilience — SOC, SIEM, Zero Trust, identity, and ransomware resilience.',
  },
  'solutions/InfrastructurePage.tsx': {
    title: 'Sovereign Infrastructure & Hybrid Cloud | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Sovereign Infrastructure & Hybrid Cloud — datacenter refresh, storage modernization, AI infrastructure.',
  },
  'solutions/TechnologyOperationsPage.tsx': {
    title: 'Technology Operations | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Technology Operations — platform engineering, AIOps, SRE, and managed operations.',
  },
  'solutions/ProductsPage.tsx': {
    title: 'Products | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Complete enterprise AI ecosystem — from mobile to cloud. 11 partners. 50+ products. One relationship.',
  },

  // Services
  'services/ServicesHub.tsx': {
    title: 'Services | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Advisory, implementation, and managed operations — one accountable partner across the full transformation lifecycle.',
  },
  'services/ConsultingAdvisoryPage.tsx': {
    title: 'Consulting & Advisory | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'AI readiness assessment, architecture design, vendor selection, and transformation roadmap.',
  },
  'services/ImplementationDeliveryPage.tsx': {
    title: 'Implementation & Delivery | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'Platform deployment, integration engineering, and adoption enablement — multi-vendor, multi-domain.',
  },
  'services/ManagedOperationsPage.tsx': {
    title: 'Managed Operations | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: '24×7 monitoring, AI operations, and continuous improvement — we stay long after go-live.',
  },

  // Industries
  'industries/GovernmentIndustryPage.tsx': {
    title: 'Government | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'AI transformation for Saudi government — Etimad procurement intelligence, citizen service automation, national-scale document AI.',
  },
  'industries/BankingIndustryPage.tsx': {
    title: 'Banking & Financial Services | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'AI transformation for banking & financial services — AML/fraud intelligence, credit risk modeling, regulatory reporting automation.',
  },
  'industries/OilGasIndustryPage.tsx': {
    title: 'Oil & Gas | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'AI transformation for oil & gas — predictive maintenance, HSE compliance, OT data intelligence.',
  },
  'industries/HealthcareIndustryPage.tsx': {
    title: 'Healthcare | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'AI transformation for healthcare — medical imaging diagnostics, clinical documentation AI, patient flow optimization.',
  },
  'industries/EnterpriseIndustryPage.tsx': {
    title: 'Enterprise | Bionic Solutions — Enterprise AI Transformation Integrator',
    desc: 'AI transformation for large enterprises — workforce augmentation, intelligent automation, enterprise AI governance.',
  },

  // Legal
  'legal/PrivacyPolicyPage.tsx': {
    title: 'Privacy Policy | Bionic Solutions',
    desc: 'Bionic Solutions privacy policy — how we collect, use, and protect personal data in compliance with Saudi PDPL and international standards.',
  },
  'legal/TermsOfUsePage.tsx': {
    title: 'Terms of Use | Bionic Solutions',
    desc: 'Terms of use for the Bionic Solutions website and services. By accessing this site, you agree to these terms.',
  },
  'legal/CookiePolicyPage.tsx': {
    title: 'Cookie Policy | Bionic Solutions',
    desc: 'Bionic Solutions cookie policy — how we use cookies and similar technologies to improve your experience.',
  },

  // ─── ARABIC PAGES (ar/ directory) ───
  'ar/ArabicAboutPage.tsx': {
    title: 'من نحن | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'بيونك سوليوشنز هي مُمكّن التحول المؤسسي بالذكاء الاصطناعي في المملكة العربية السعودية — نوحّد الاستراتيجية والتقنية والبيانات والحوكمة لتحقيق نتائج أعمال ملموسة.',
  },
  'ar/ArabicArchitecturePage.tsx': {
    title: 'الهندسة المعمارية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'منهجيتنا المعمارية من 10 طبقات توحّد الاستراتيجية والقدرات والخدمات والقطاعات والحوكمة في نظام تشغيلي متكامل.',
  },
  'ar/ArabicEnterpriseValueSystemPage.tsx': {
    title: 'منظومة القيمة | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'كيف تتراكم القيمة عبر الآفاق الزمنية — من المكاسب التشغيلية الفورية إلى بناء القدرات المؤسسية على مدى سنوات.',
  },
  'ar/ArabicPartnersPage.tsx': {
    title: 'الشركاء | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'شركاؤنا الاستراتيجيون — سيلزفورس، قوقل كلاود، آي بي إم، إنتل، ديل، إنفورماتيكا، وغيرهم. علاقة واحدة شاملة لتعدد الموردين.',
  },
  'ar/ArabicBlueprintsHub.tsx': {
    title: 'المخططات المرجعية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'مخططات تحول مرجعية للقطاع الحكومي، البنوك، النفط والغاز، الرعاية الصحية، والمؤسسات الكبرى — أنماط ونتائج حقيقية.',
  },
  'ar/ArabicTransformationBlueprintPage.tsx': {
    title: 'مخطط تحوّل | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'مخطط تحول تفصيلي — معمارية، مخرجات، وأنماط تنفيذ من تحولات مؤسسية سعودية حقيقية.',
  },
  'ar/ArabicProductsPage.tsx': {
    title: 'المنتجات | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'منظومة متكاملة من منتجات الذكاء الاصطناعي المؤسسي — من الجوال إلى السحابة. 11 شريكًا. أكثر من 50 منتجًا. علاقة واحدة.',
  },
  'ar/ArabicContactPage.tsx': {
    title: 'تواصل معنا | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'ابدأ محادثة مع بيونك سوليوشنز. التحول المؤسسي بالذكاء الاصطناعي، تقييم الموردين، أو إحاطة استراتيجية.',
  },
  'ar/ArabicBookDiscoveryCallPage.tsx': {
    title: 'احجز جلسة استكشافية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'احجز جلسة استكشافية لمدة 30 دقيقة مع بيونك سوليوشنز. بدون عرض بيعي أو ضغوط — محادثة منظمة حول أولويات التحول لديك.',
  },
  'ar/ArabicNotFoundPage.tsx': {
    title: '٤٠٤ — الصفحة غير موجودة | بيونك سوليوشنز',
    desc: 'الصفحة التي تبحث عنها غير موجودة. استكشف بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي.',
  },

  // Arabic Capabilities
  'ar/ArabicAISolutionPage.tsx': {
    title: 'الذكاء الاصطناعي والأتمتة المؤسسية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'الذكاء الاصطناعي والأتمتة المؤسسية — وكلاء الذكاء الاصطناعي، المساعدين الأذكياء، MLOps، والأتمتة الذكية للمؤسسات السعودية.',
  },
  'ar/ArabicDataAnalyticsPage.tsx': {
    title: 'البيانات والتحليلات والاستخبارات | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'البيانات والتحليلات والاستخبارات — منصات بيانات جاهزة للذكاء الاصطناعي، لوحات معلومات تنفيذية، إدارة البيانات الرئيسية، والتحليلات المتقدمة.',
  },
  'ar/ArabicBusinessApplicationsPage.tsx': {
    title: 'تطبيقات الأعمال وتجربة العملاء | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'تطبيقات الأعمال وتجربة العملاء — إدارة علاقات العملاء، مراكز الاتصال، أتمتة التسويق، التجارة الإلكترونية، وتجربة الموظف.',
  },
  'ar/ArabicIntegrationPage.tsx': {
    title: 'التكامل والعمليات الذكية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'التكامل والعمليات الذكية — معمارية قائمة على واجهات API، معمارية مدفوعة بالأحداث، وتنسيق سير العمل المؤسسي.',
  },
  'ar/ArabicCybersecurityPage.tsx': {
    title: 'الأمن السيبراني والصمود السيبراني | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'الأمن السيبراني والصمود السيبراني — مركز العمليات الأمنية، SIEM، نموذج Zero Trust، إدارة الهوية، والصمود ضد الفدية.',
  },
  'ar/ArabicInfrastructurePage.tsx': {
    title: 'البنية التحتية السيادية والسحابة الهجينة | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'البنية التحتية السيادية والسحابة الهجينة — تحديث مراكز البيانات، تحديث أنظمة التخزين، والبنية التحتية للذكاء الاصطناعي.',
  },
  'ar/ArabicTechnologyOperationsPage.tsx': {
    title: 'عمليات التقنية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'عمليات التقنية — هندسة المنصات، AIOps، هندسة الموثوقية، والعمليات المدارة.',
  },

  // Arabic Services
  'ar/ArabicServicesHub.tsx': {
    title: 'الخدمات | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'الاستشارات، التنفيذ، والعمليات المدارة — شريك واحد مسؤول عبر دورة حياة التحول الكاملة.',
  },
  'ar/ArabicConsultingAdvisoryPage.tsx': {
    title: 'الاستشارات والتوجيه | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'تقييم الجاهزية للذكاء الاصطناعي، تصميم المعمارية، اختيار الموردين، وخارطة طريق التحول.',
  },
  'ar/ArabicImplementationDeliveryPage.tsx': {
    title: 'التنفيذ والتسليم | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'نشر المنصات، هندسة التكامل، وتمكين التبني المؤسسي — متعدد الموردين ومتعدد المجالات.',
  },
  'ar/ArabicManagedOperationsPage.tsx': {
    title: 'العمليات المدارة | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'مراقبة على مدار الساعة، عمليات الذكاء الاصطناعي، والتحسين المستمر — نبقى معك بعد التشغيل.',
  },

  // Arabic Industries
  'ar/ArabicGovernmentIndustryPage.tsx': {
    title: 'القطاع الحكومي | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'التحول بالذكاء الاصطناعي للقطاع الحكومي السعودي — استخبارات المشتريات عبر منصة اعتماد، أتمتة الخدمات للمواطنين، وذكاء المستندات على المستوى الوطني.',
  },
  'ar/ArabicBankingIndustryPage.tsx': {
    title: 'البنوك والخدمات المالية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'التحول بالذكاء الاصطناعي للبنوك والخدمات المالية — استخبارات مكافحة غسل الأموال والاحتيال، نمذجة مخاطر الائتمان، وأتمتة التقارير التنظيمية.',
  },
  'ar/ArabicOilGasIndustryPage.tsx': {
    title: 'النفط والغاز | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'التحول بالذكاء الاصطناعي لقطاع النفط والغاز — الصيانة التنبؤية، الامتثال للصحة والسلامة والبيئة، واستخبارات بيانات التقنية التشغيلية.',
  },
  'ar/ArabicHealthcareIndustryPage.tsx': {
    title: 'الرعاية الصحية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'التحول بالذكاء الاصطناعي للرعاية الصحية — تشخيص التصوير الطبي بالذكاء الاصطناعي، أتمتة التوثيق السريري، وتحسين تدفق المرضى.',
  },
  'ar/ArabicEnterpriseIndustryPage.tsx': {
    title: 'المؤسسات الكبرى | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'التحول بالذكاء الاصطناعي للمؤسسات الكبرى — تعزيز القوى العاملة، الأتمتة الذكية، وحوكمة الذكاء الاصطناعي المؤسسي.',
  },

  // Arabic Legal
  'ar/ArabicPrivacyPolicyPage.tsx': {
    title: 'سياسة الخصوصية | بيونك سوليوشنز',
    desc: 'سياسة خصوصية بيونك سوليوشنز — كيف نجمع ونستخدم ونحمي البيانات الشخصية وفقًا لنظام حماية البيانات الشخصية السعودي والمعايير الدولية.',
  },
  'ar/ArabicTermsOfUsePage.tsx': {
    title: 'شروط الاستخدام | بيونك سوليوشنز',
    desc: 'شروط استخدام موقع وخدمات بيونك سوليوشنز. باستخدامك لهذا الموقع، فإنك توافق على هذه الشروط.',
  },
  'ar/ArabicCookiePolicyPage.tsx': {
    title: 'سياسة ملفات تعريف الارتباط | بيونك سوليوشنز',
    desc: 'سياسة ملفات تعريف الارتباط لبيونك سوليوشنز — كيف نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربتك.',
  },

  // OLD Arabic Pages (top-level Arabic*.tsx)
  'ArabicHomePage.tsx': {
    title: 'الرئيسية | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي',
    desc: 'بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي. نصمم الذكاء والأتمتة والثقة في صميم الأعمال. نخدم المملكة العربية السعودية ودول الخليج.',
  },
};

// ─── Helper: get relative path for Helmet import ───
function getHelmetImportPath(filePath) {
  const relDir = path.relative(path.dirname(filePath), path.join(BASE, '..', 'node_modules'));
  // Simpler: always use 'react-helmet-async' since it's a module import
  return 'react-helmet-async';
}

// ─── Add Helmet to a single file ───
function addHelmetToFile(filePath, meta) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has Helmet
  if (content.includes('import { Helmet }')) {
    console.log(`  ✓ Already has Helmet: ${path.relative(BASE, filePath)}`);
    return false;
  }

  // Determine relative import depth
  const depth = path.relative(BASE, filePath).split('/').length - 1;
  const importLine = `import { Helmet } from 'react-helmet-async';`;

  // Add Helmet import after the first import line (usually react or framer-motion)
  // Find the last import statement line
  const lines = content.split('\n');
  let lastImportIdx = -1;

  // Find the line index of the LAST import statement
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('import ')) {
      lastImportIdx = i;
    }
  }

  if (lastImportIdx === -1) {
    console.log(`  ⚠ No import found in: ${path.relative(BASE, filePath)}`);
    return false;
  }

  // Insert Helmet import after the last import line
  lines.splice(lastImportIdx + 1, 0, importLine);

  content = lines.join('\n');

  // Build the Helmet tag
  const helmetTag = `    <Helmet>\n      <title>${meta.title}</title>\n      <meta name="description" content="${meta.desc.replace(/"/g, '&quot;')}" />\n    </Helmet>`;

  // Find the return statement and add Helmet as the first child
  // Look for patterns like:
  //   return (
  //     <>
  //   return (
  //     <div ...>
  //   return <div ...>

  // Find the first `return (` and the opening tag after it
  const returnMatch = content.match(/return\s*\(\s*\n(\s*)(<>|<\w+)/);
  if (!returnMatch) {
    // Try single-line return
    const returnSingleMatch = content.match(/return\s*(<>|<\w+)/);
    if (returnSingleMatch) {
      const idx = returnSingleMatch.index + returnSingleMatch[0].length;
      const fragment = returnSingleMatch[1] === '<>' ? '<>' : returnSingleMatch[1];
      if (fragment === '<>') {
        // Insert Helmet after <>
        content = content.slice(0, idx) + '\n' + helmetTag + content.slice(idx);
      } else {
        // Insert Helmet after the opening tag
        content = content.slice(0, idx) + '\n' + helmetTag + content.slice(idx);
      }
    } else {
      console.log(`  ⚠ Could not find return pattern in: ${path.relative(BASE, filePath)}`);
      console.log(`    Content preview: ${content.substring(content.indexOf('return'), content.indexOf('return') + 100)}`);
      return false;
    }
  } else {
    const fullMatch = returnMatch[0];
    const indent = returnMatch[1] || '      ';
    const tag = returnMatch[2];

    // Find the position right after the opening tag line
    const afterReturnParen = content.indexOf(fullMatch) + fullMatch.length;

    // Insert Helmet with proper indentation right after the opening tag
    const helmetWithIndent = `\n${indent}  <Helmet>\n${indent}    <title>${meta.title}</title>\n${indent}    <meta name="description" content="${meta.desc.replace(/"/g, '&quot;')}" />\n${indent}  </Helmet>`;

    content = content.slice(0, afterReturnParen) + helmetWithIndent + content.slice(afterReturnParen);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ Added Helmet: ${path.relative(BASE, filePath)}`);
  return true;
}

// ─── Walk all page files and add Helmet ───
function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('🔍 Finding all page files...');
const allFiles = walkDir(BASE);
console.log(`Found ${allFiles.length} page files\n`);

let added = 0;
let skipped = 0;
let failed = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(BASE, filePath);
  const meta = PAGE_META[relPath];

  if (!meta) {
    console.log(`  ⚠ No metadata for: ${relPath} — skipping`);
    skipped++;
    continue;
  }

  try {
    const result = addHelmetToFile(filePath, meta);
    if (result) added++;
    else skipped++;
  } catch (err) {
    console.log(`  ✗ Error processing ${relPath}: ${err.message}`);
    failed++;
  }
}

console.log(`\n✅ Done! Added: ${added}, Skipped: ${skipped}, Failed: ${failed}`);
