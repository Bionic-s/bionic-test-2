import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';

import { Header } from './components/Header';
import { HeaderAr } from './components/HeaderAr';
import { Footer } from './components/Footer';
import { FooterAr } from './components/ar/FooterAr';
import { CookieConsent } from './components/CookieConsent';
import { StickyCTABar } from './components/StickyCTABar';
import { ProgressiveProfiling } from './components/ProgressiveProfiling';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { Seo } from './components/Seo';

// Pages — lazy-loaded so each route ships as its own chunk
const HomePage = lazy(() => import('./pages/HomePage'));
const BlueprintsHub = lazy(() => import('./pages/BlueprintsHub'));
const TransformationBlueprintPage = lazy(() => import('./pages/TransformationBlueprintPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookDiscoveryCallPage = lazy(() => import('./pages/BookDiscoveryCall'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ArabicHomePage = lazy(() => import('./pages/ArabicHomePage'));

// Arabic Industry Pages
const ArabicGovernmentIndustryPage = lazy(() => import('./pages/ar/ArabicGovernmentIndustryPage'));
const ArabicBankingIndustryPage = lazy(() => import('./pages/ar/ArabicBankingIndustryPage'));
const ArabicOilGasIndustryPage = lazy(() => import('./pages/ar/ArabicOilGasIndustryPage'));
const ArabicHealthcareIndustryPage = lazy(() => import('./pages/ar/ArabicHealthcareIndustryPage'));
const ArabicEnterpriseIndustryPage = lazy(() => import('./pages/ar/ArabicEnterpriseIndustryPage'));
const ArabicTelecomIndustryPage = lazy(() => import('./pages/ar/ArabicTelecomIndustryPage'));
const ArabicRetailIndustryPage = lazy(() => import('./pages/ar/ArabicRetailIndustryPage'));
const ArabicManufacturingIndustryPage = lazy(() => import('./pages/ar/ArabicManufacturingIndustryPage'));
const ArabicTransportLogisticsIndustryPage = lazy(() => import('./pages/ar/ArabicTransportLogisticsIndustryPage'));

// Arabic Capability Pages
const ArabicAISolutionPage = lazy(() => import('./pages/ar/ArabicAISolutionPage'));
const ArabicDataAnalyticsPage = lazy(() => import('./pages/ar/ArabicDataAnalyticsPage'));
const ArabicBusinessApplicationsPage = lazy(() => import('./pages/ar/ArabicBusinessApplicationsPage'));
const ArabicIntegrationPage = lazy(() => import('./pages/ar/ArabicIntegrationPage'));
const ArabicCybersecurityPage = lazy(() => import('./pages/ar/ArabicCybersecurityPage'));
const ArabicInfrastructurePage = lazy(() => import('./pages/ar/ArabicInfrastructurePage'));
const ArabicTechnologyOperationsPage = lazy(() => import('./pages/ar/ArabicTechnologyOperationsPage'));

// Arabic Service Pages
const ArabicServicesHub = lazy(() => import('./pages/ar/ArabicServicesHub'));
const ArabicConsultingAdvisoryPage = lazy(() => import('./pages/ar/ArabicConsultingAdvisoryPage'));
const ArabicImplementationDeliveryPage = lazy(() => import('./pages/ar/ArabicImplementationDeliveryPage'));
const ArabicManagedOperationsPage = lazy(() => import('./pages/ar/ArabicManagedOperationsPage'));

// Arabic Other Pages
const ArabicAboutPage = lazy(() => import('./pages/ar/ArabicAboutPage'));
const ArabicArchitecturePage = lazy(() => import('./pages/ar/ArabicArchitecturePage'));
const ArabicEnterpriseValueSystemPage = lazy(() => import('./pages/ar/ArabicEnterpriseValueSystemPage'));
const ArabicPartnersPage = lazy(() => import('./pages/ar/ArabicPartnersPage'));
const ArabicBlueprintsHub = lazy(() => import('./pages/ar/ArabicBlueprintsHub'));
const ArabicTransformationBlueprintPage = lazy(() => import('./pages/ar/ArabicTransformationBlueprintPage'));
const ArabicProductsPage = lazy(() => import('./pages/ar/ArabicProductsPage'));
const ArabicContactPage = lazy(() => import('./pages/ar/ArabicContactPage'));
const ArabicBookDiscoveryCallPage = lazy(() => import('./pages/ar/ArabicBookDiscoveryCallPage'));
const ArabicNotFoundPage = lazy(() => import('./pages/ar/ArabicNotFoundPage'));
const ArabicPrivacyPolicyPage = lazy(() => import('./pages/ar/ArabicPrivacyPolicyPage'));
const ArabicTermsOfUsePage = lazy(() => import('./pages/ar/ArabicTermsOfUsePage'));
const ArabicCookiePolicyPage = lazy(() => import('./pages/ar/ArabicCookiePolicyPage'));

// Capabilities (shared with legacy /solutions/* redirects)
const AISolutionPage = lazy(() => import('./pages/solutions/AISolutionPage'));
const DataAnalyticsSolutionPage = lazy(() => import('./pages/solutions/DataAnalyticsPage'));
const BusinessApplicationsSolutionPage = lazy(() => import('./pages/solutions/BusinessApplicationsPage'));
const IntegrationSolutionPage = lazy(() => import('./pages/solutions/IntegrationPage'));
const ServiceManagementSolutionPage = lazy(() => import('./pages/solutions/TechnologyOperationsPage'));
const CybersecuritySolutionPage = lazy(() => import('./pages/solutions/CybersecurityPage'));
const InfrastructureSolutionPage = lazy(() => import('./pages/solutions/InfrastructurePage'));

// Services
const ServicesHub = lazy(() => import('./pages/services/ServicesHub'));
const ConsultingAdvisoryPage = lazy(() => import('./pages/services/ConsultingAdvisoryPage'));
const ImplementationDeliveryPage = lazy(() => import('./pages/services/ImplementationDeliveryPage'));
const ManagedOperationsPage = lazy(() => import('./pages/services/ManagedOperationsPage'));

// Industries
const GovernmentIndustryPage = lazy(() => import('./pages/industries/GovernmentIndustryPage'));
const BankingIndustryPage = lazy(() => import('./pages/industries/BankingIndustryPage'));
const OilGasIndustryPage = lazy(() => import('./pages/industries/OilGasIndustryPage'));
const HealthcareIndustryPage = lazy(() => import('./pages/industries/HealthcareIndustryPage'));
const EnterpriseIndustryPage = lazy(() => import('./pages/industries/EnterpriseIndustryPage'));
const TelecomIndustryPage = lazy(() => import('./pages/industries/TelecomIndustryPage'));
const RetailIndustryPage = lazy(() => import('./pages/industries/RetailIndustryPage'));
const ManufacturingIndustryPage = lazy(() => import('./pages/industries/ManufacturingIndustryPage'));
const TransportLogisticsIndustryPage = lazy(() => import('./pages/industries/TransportLogisticsIndustryPage'));

// Products
const ProductsPage = lazy(() => import('./pages/solutions/ProductsPage'));

// Architecture
const ArchitecturePage = lazy(() => import('./pages/ArchitecturePage'));

// Legal
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/legal/TermsOfUsePage'));
const CookiePolicyPage = lazy(() => import('./pages/legal/CookiePolicyPage'));
const EnterpriseValueSystemPage = lazy(() => import('./pages/EnterpriseValueSystemPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageFallback() {
  return <div className="min-h-screen" aria-busy="true" />;
}

function AppContent() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith('/ar/') || location.pathname === '/ar';

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | undefined;
    let rafId = 0;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        prevent: (node: any) => {
          // Prevent Lenis from handling clicks on React Router links
          return node.tagName === 'A' || node.closest('a');
        },
      });

      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      observer.disconnect();
    };
  }, []);

  // Set html lang + dir dynamically
  useEffect(() => {
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [isArabic]);

  return (
    <div className="min-h-screen">
      <a href="#main" className="skip-link">
        {isArabic ? 'تخطي إلى المحتوى' : 'Skip to content'}
      </a>
      <Seo />
      <Preloader />
      <CustomCursor />
      <GrainOverlay />
      <ScrollProgress />
      <ScrollToTop />
      {isArabic ? <HeaderAr /> : <Header />}
      <main id="main">
      <Suspense fallback={<PageFallback />}>
      <Routes>
          {/* ═══ Core Pages ═══ */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-discovery-call" element={<BookDiscoveryCallPage />} />

          {/* ═══ Transformation Blueprints ═══ */}
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/blueprints" element={<BlueprintsHub />} />
          <Route path="/blueprints/:slug" element={<TransformationBlueprintPage />} />

          {/* ═══ Products ═══ */}
          <Route path="/products" element={<ProductsPage />} />

          {/* ═══ Capabilities (7) ═══ */}
          <Route path="/capabilities/ai" element={<AISolutionPage />} />
          <Route path="/capabilities/data" element={<DataAnalyticsSolutionPage />} />
          <Route path="/capabilities/apps" element={<BusinessApplicationsSolutionPage />} />
          <Route path="/capabilities/integration" element={<IntegrationSolutionPage />} />
          <Route path="/capabilities/cyber" element={<CybersecuritySolutionPage />} />
          <Route path="/capabilities/infra" element={<InfrastructureSolutionPage />} />
          <Route path="/capabilities/ops" element={<ServiceManagementSolutionPage />} />

          {/* ═══ Services (3) ═══ */}
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/advisory" element={<ConsultingAdvisoryPage />} />
          <Route path="/services/implementation" element={<ImplementationDeliveryPage />} />
          <Route path="/services/operations" element={<ManagedOperationsPage />} />

          {/* ═══ Industries (9) ═══ */}
          <Route path="/industries/government" element={<GovernmentIndustryPage />} />
          <Route path="/industries/banking" element={<BankingIndustryPage />} />
          <Route path="/industries/oil-gas" element={<OilGasIndustryPage />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustryPage />} />
          <Route path="/industries/enterprise" element={<EnterpriseIndustryPage />} />
          <Route path="/industries/telecom" element={<TelecomIndustryPage />} />
          <Route path="/industries/retail" element={<RetailIndustryPage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingIndustryPage />} />
          <Route path="/industries/logistics" element={<TransportLogisticsIndustryPage />} />

          {/* ═══ Architecture ═══ */}
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/value" element={<EnterpriseValueSystemPage />} />

          {/* ═══ Legal ═══ */}
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />

          {/* ═══════════════════════════════════════════
              LEGACY ROUTE REDIRECTS
              /solutions/* → canonical /capabilities/*
              /case-studies/* → /blueprints
              ═══════════════════════════════════════════ */}

          {/* /solutions → homepage (all 7 capabilities overview) */}
          <Route path="/solutions" element={<Navigate to="/" replace />} />

          {/* /solutions/* capability → /capabilities/* */}
          <Route path="/solutions/ai-systems" element={<Navigate to="/capabilities/ai" replace />} />
          <Route path="/solutions/data-analytics" element={<Navigate to="/capabilities/data" replace />} />
          <Route path="/solutions/business-applications" element={<Navigate to="/capabilities/apps" replace />} />
          <Route path="/solutions/integration" element={<Navigate to="/capabilities/integration" replace />} />
          <Route path="/solutions/cybersecurity" element={<Navigate to="/capabilities/cyber" replace />} />
          <Route path="/solutions/infrastructure" element={<Navigate to="/capabilities/infra" replace />} />
          <Route path="/solutions/service-management" element={<Navigate to="/capabilities/ops" replace />} />
          <Route path="/solutions/automation" element={<Navigate to="/capabilities/integration" replace />} />

          {/* /solutions/* industry → /industries/* */}
          <Route path="/solutions/government" element={<Navigate to="/industries/government" replace />} />
          <Route path="/solutions/banking" element={<Navigate to="/industries/banking" replace />} />
          <Route path="/solutions/oil-gas" element={<Navigate to="/industries/oil-gas" replace />} />
          <Route path="/solutions/enterprise" element={<Navigate to="/industries/enterprise" replace />} />
          <Route path="/solutions/telecom" element={<Navigate to="/industries/telecom" replace />} />
          <Route path="/solutions/retail" element={<Navigate to="/industries/retail" replace />} />
          <Route path="/solutions/manufacturing" element={<Navigate to="/industries/manufacturing" replace />} />
          <Route path="/solutions/logistics" element={<Navigate to="/industries/logistics" replace />} />

          {/* /case-studies / /case-studies/* → /blueprints */}
          <Route path="/case-studies" element={<Navigate to="/blueprints" replace />} />
          <Route path="/case-studies/*" element={<Navigate to="/blueprints" replace />} />

          {/* ═══ Arabic Routes /ar ═══ */}
          <Route path="/ar" element={<ArabicHomePage />} />
          <Route path="/ar/about" element={<ArabicAboutPage />} />
          <Route path="/ar/architecture" element={<ArabicArchitecturePage />} />
          <Route path="/ar/value" element={<ArabicEnterpriseValueSystemPage />} />
          <Route path="/ar/partners" element={<ArabicPartnersPage />} />
          <Route path="/ar/blueprints" element={<ArabicBlueprintsHub />} />
          <Route path="/ar/blueprints/:slug" element={<ArabicTransformationBlueprintPage />} />
          <Route path="/ar/products" element={<ArabicProductsPage />} />
          <Route path="/ar/contact" element={<ArabicContactPage />} />
          <Route path="/ar/book-discovery-call" element={<ArabicBookDiscoveryCallPage />} />

          {/* Arabic Capabilities */}
          <Route path="/ar/capabilities/ai" element={<ArabicAISolutionPage />} />
          <Route path="/ar/capabilities/data" element={<ArabicDataAnalyticsPage />} />
          <Route path="/ar/capabilities/apps" element={<ArabicBusinessApplicationsPage />} />
          <Route path="/ar/capabilities/integration" element={<ArabicIntegrationPage />} />
          <Route path="/ar/capabilities/cyber" element={<ArabicCybersecurityPage />} />
          <Route path="/ar/capabilities/infra" element={<ArabicInfrastructurePage />} />
          <Route path="/ar/capabilities/ops" element={<ArabicTechnologyOperationsPage />} />

          {/* Arabic Services */}
          <Route path="/ar/services" element={<ArabicServicesHub />} />
          <Route path="/ar/services/advisory" element={<ArabicConsultingAdvisoryPage />} />
          <Route path="/ar/services/implementation" element={<ArabicImplementationDeliveryPage />} />
          <Route path="/ar/services/operations" element={<ArabicManagedOperationsPage />} />

          {/* Arabic Industries */}
          <Route path="/ar/industries/government" element={<ArabicGovernmentIndustryPage />} />
          <Route path="/ar/industries/banking" element={<ArabicBankingIndustryPage />} />
          <Route path="/ar/industries/oil-gas" element={<ArabicOilGasIndustryPage />} />
          <Route path="/ar/industries/healthcare" element={<ArabicHealthcareIndustryPage />} />
          <Route path="/ar/industries/enterprise" element={<ArabicEnterpriseIndustryPage />} />
          <Route path="/ar/industries/telecom" element={<ArabicTelecomIndustryPage />} />
          <Route path="/ar/industries/retail" element={<ArabicRetailIndustryPage />} />
          <Route path="/ar/industries/manufacturing" element={<ArabicManufacturingIndustryPage />} />
          <Route path="/ar/industries/logistics" element={<ArabicTransportLogisticsIndustryPage />} />

          {/* Arabic Legal */}
          <Route path="/ar/privacy" element={<ArabicPrivacyPolicyPage />} />
          <Route path="/ar/terms-of-use" element={<ArabicTermsOfUsePage />} />
          <Route path="/ar/cookie-policy" element={<ArabicCookiePolicyPage />} />

          {/* Arabic 404 */}
          <Route path="/ar/*" element={<ArabicNotFoundPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      </main>
      {isArabic ? <FooterAr /> : <Footer />}
      <StickyCTABar />
      <ProgressiveProfiling />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <Router basename="/test-site-2">
          <AppContent />
        </Router>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
