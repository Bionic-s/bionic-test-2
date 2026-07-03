import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

// Pages
import HomePage from './pages/HomePage';
import BlueprintsHub from './pages/BlueprintsHub';
import TransformationBlueprintPage from './pages/TransformationBlueprintPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookDiscoveryCallPage from './pages/BookDiscoveryCall';
import NotFoundPage from './pages/NotFoundPage';
import ArabicHomePage from './pages/ArabicHomePage';

// Arabic Industry Pages
import ArabicGovernmentIndustryPage from './pages/ar/ArabicGovernmentIndustryPage';
import ArabicBankingIndustryPage from './pages/ar/ArabicBankingIndustryPage';
import ArabicOilGasIndustryPage from './pages/ar/ArabicOilGasIndustryPage';
import ArabicHealthcareIndustryPage from './pages/ar/ArabicHealthcareIndustryPage';
import ArabicEnterpriseIndustryPage from './pages/ar/ArabicEnterpriseIndustryPage';
import ArabicTelecomIndustryPage from './pages/ar/ArabicTelecomIndustryPage';
import ArabicRetailIndustryPage from './pages/ar/ArabicRetailIndustryPage';
import ArabicManufacturingIndustryPage from './pages/ar/ArabicManufacturingIndustryPage';
import ArabicTransportLogisticsIndustryPage from './pages/ar/ArabicTransportLogisticsIndustryPage';

// Arabic Capability Pages
import ArabicAISolutionPage from './pages/ar/ArabicAISolutionPage';
import ArabicDataAnalyticsPage from './pages/ar/ArabicDataAnalyticsPage';
import ArabicBusinessApplicationsPage from './pages/ar/ArabicBusinessApplicationsPage';
import ArabicIntegrationPage from './pages/ar/ArabicIntegrationPage';
import ArabicCybersecurityPage from './pages/ar/ArabicCybersecurityPage';
import ArabicInfrastructurePage from './pages/ar/ArabicInfrastructurePage';
import ArabicTechnologyOperationsPage from './pages/ar/ArabicTechnologyOperationsPage';

// Arabic Service Pages
import ArabicServicesHub from './pages/ar/ArabicServicesHub';
import ArabicConsultingAdvisoryPage from './pages/ar/ArabicConsultingAdvisoryPage';
import ArabicImplementationDeliveryPage from './pages/ar/ArabicImplementationDeliveryPage';
import ArabicManagedOperationsPage from './pages/ar/ArabicManagedOperationsPage';

// Arabic Other Pages
import ArabicAboutPage from './pages/ar/ArabicAboutPage';
import ArabicArchitecturePage from './pages/ar/ArabicArchitecturePage';
import ArabicEnterpriseValueSystemPage from './pages/ar/ArabicEnterpriseValueSystemPage';
import ArabicPartnersPage from './pages/ar/ArabicPartnersPage';
import ArabicBlueprintsHub from './pages/ar/ArabicBlueprintsHub';
import ArabicTransformationBlueprintPage from './pages/ar/ArabicTransformationBlueprintPage';
import ArabicProductsPage from './pages/ar/ArabicProductsPage';
import ArabicContactPage from './pages/ar/ArabicContactPage';
import ArabicBookDiscoveryCallPage from './pages/ar/ArabicBookDiscoveryCallPage';
import ArabicNotFoundPage from './pages/ar/ArabicNotFoundPage';
import ArabicPrivacyPolicyPage from './pages/ar/ArabicPrivacyPolicyPage';
import ArabicTermsOfUsePage from './pages/ar/ArabicTermsOfUsePage';
import ArabicCookiePolicyPage from './pages/ar/ArabicCookiePolicyPage';

// Capabilities (shared with legacy /solutions/* redirects)
import AISolutionPage from './pages/solutions/AISolutionPage';
import DataAnalyticsSolutionPage from './pages/solutions/DataAnalyticsPage';
import BusinessApplicationsSolutionPage from './pages/solutions/BusinessApplicationsPage';
import IntegrationSolutionPage from './pages/solutions/IntegrationPage';
import ServiceManagementSolutionPage from './pages/solutions/TechnologyOperationsPage';
import CybersecuritySolutionPage from './pages/solutions/CybersecurityPage';
import InfrastructureSolutionPage from './pages/solutions/InfrastructurePage';

// Services
import ServicesHub from './pages/services/ServicesHub';
import ConsultingAdvisoryPage from './pages/services/ConsultingAdvisoryPage';
import ImplementationDeliveryPage from './pages/services/ImplementationDeliveryPage';
import ManagedOperationsPage from './pages/services/ManagedOperationsPage';

// Industries
import GovernmentIndustryPage from './pages/industries/GovernmentIndustryPage';
import BankingIndustryPage from './pages/industries/BankingIndustryPage';
import OilGasIndustryPage from './pages/industries/OilGasIndustryPage';
import HealthcareIndustryPage from './pages/industries/HealthcareIndustryPage';
import EnterpriseIndustryPage from './pages/industries/EnterpriseIndustryPage';
import TelecomIndustryPage from './pages/industries/TelecomIndustryPage';
import RetailIndustryPage from './pages/industries/RetailIndustryPage';
import ManufacturingIndustryPage from './pages/industries/ManufacturingIndustryPage';
import TransportLogisticsIndustryPage from './pages/industries/TransportLogisticsIndustryPage';

// Products
import ProductsPage from './pages/solutions/ProductsPage';

// Architecture
import ArchitecturePage from './pages/ArchitecturePage';

// Legal
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfUsePage from './pages/legal/TermsOfUsePage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import EnterpriseValueSystemPage from './pages/EnterpriseValueSystemPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
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
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  // Stop Lenis on route change to allow smooth page transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Set html lang + dir dynamically
  useEffect(() => {
    const isArabic = location.pathname.startsWith('/ar/') || location.pathname === '/ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Preloader />
      <CustomCursor />
      <GrainOverlay />
      <ScrollProgress />
      <ScrollToTop />
      {(location.pathname.startsWith('/ar/') || location.pathname === '/ar') ? <HeaderAr /> : <Header />}
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
      {(location.pathname.startsWith('/ar/') || location.pathname === '/ar') ? (
        <>
          <FooterAr />
          <StickyCTABar />
          <ProgressiveProfiling />
        </>
      ) : (
        <>
          <Footer />
          <StickyCTABar />
          <ProgressiveProfiling />
        </>
      )}
      <CookieConsent />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router basename="/test-site-2">
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
