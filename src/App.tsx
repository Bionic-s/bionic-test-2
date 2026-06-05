import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { StickyCTABar } from './components/StickyCTABar';
import { ProgressiveProfiling } from './components/ProgressiveProfiling';

// Pages
import HomePage from './pages/HomePage';
import BlueprintsHub from './pages/BlueprintsHub';
import TransformationBlueprintPage from './pages/TransformationBlueprintPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Capabilities (shared with legacy /solutions/* redirects)
import AISolutionPage from './pages/solutions/AISolutionPage';
import DataAnalyticsSolutionPage from './pages/solutions/DataAnalyticsSolutionPage';
import BusinessApplicationsSolutionPage from './pages/solutions/BusinessApplicationsSolutionPage';
import IntegrationSolutionPage from './pages/solutions/IntegrationSolutionPage';
import ServiceManagementSolutionPage from './pages/solutions/TechnologyOperationsPage';
import CybersecuritySolutionPage from './pages/solutions/CybersecuritySolutionPage';
import InfrastructureSolutionPage from './pages/solutions/InfrastructureSolutionPage';

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

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* ═══ Core Pages ═══ */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* ═══ Transformation Blueprints ═══ */}
          <Route path="/blueprints" element={<BlueprintsHub />} />
          <Route path="/blueprints/:slug" element={<TransformationBlueprintPage />} />

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

          {/* ═══ Industries (5) ═══ */}
          <Route path="/industries/government" element={<GovernmentIndustryPage />} />
          <Route path="/industries/banking" element={<BankingIndustryPage />} />
          <Route path="/industries/oil-gas" element={<OilGasIndustryPage />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustryPage />} />
          <Route path="/industries/enterprise" element={<EnterpriseIndustryPage />} />

          {/* ═══ Architecture ═══ */}
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/value" element={<EnterpriseValueSystemPage />} />

          {/* ═══ Legal ═══ */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
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

          {/* /case-studies / /case-studies/* → /blueprints */}
          <Route path="/case-studies" element={<Navigate to="/blueprints" replace />} />
          <Route path="/case-studies/*" element={<Navigate to="/blueprints" replace />} />
        </Routes>
      </main>
      <Footer />
      <StickyCTABar />
      <ProgressiveProfiling />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <Router basename="/test-site-2">
      <AppContent />
    </Router>
  );
}

export default App;
