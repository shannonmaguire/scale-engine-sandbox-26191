import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ErrorBoundary from "@/components/ErrorBoundary";
import { usePageTracking } from "@/hooks/usePageTracking";
import { usePerformanceMonitoring, reportWebVitals } from "@/hooks/usePerformanceMonitoring";
import { useServiceWorker } from "@/hooks/useServiceWorker";
import { useErrorTracking } from "@/hooks/useErrorTracking";
import ChatWidget from "@/components/ChatWidget";
import InstallPrompt from "@/components/InstallPrompt";
import NetworkStatusBanner from "@/components/NetworkStatusBanner";
import analytics from "@/lib/analytics";

// Lazy load route components for better performance
const Home = lazy(() => import("@/pages/Home"));
const Sprint = lazy(() => import("@/pages/Sprint"));
const Contact = lazy(() => import("@/pages/Contact"));
const Assessment = lazy(() => import("@/pages/Assessment"));
const SelfAssessment = lazy(() => import("@/pages/SelfAssessment"));
const About = lazy(() => import("@/pages/About"));
const Salesforce = lazy(() => import("@/pages/Salesforce"));
const SalesforcePartners = lazy(() => import("@/pages/SalesforcePartners"));
const SalesforceDelivery = lazy(() => import("@/pages/SalesforceDelivery"));
const Fractional = lazy(() => import("@/pages/Fractional"));
const Resources = lazy(() => import("@/pages/Resources"));
const WebSystems = lazy(() => import("@/pages/WebSystems"));

const PartnerDashboard = lazy(() => import("@/pages/PartnerDashboard"));
const SampleReport = lazy(() => import("@/pages/SampleReport"));
const Proof = lazy(() => import("@/pages/Proof"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const AETechnicalSupport = lazy(() => import("@/pages/AETechnicalSupport"));
const AssessmentTools = lazy(() => import("@/pages/AssessmentTools"));
const AEHub = lazy(() => import("@/pages/AEHub"));
const AEObjectionLibrary = lazy(() => import("@/pages/AEObjectionLibrary"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const DesignSystem = lazy(() => import("@/pages/DesignSystem"));
const Auth = lazy(() => import("@/pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Inner component to use hooks after Router is mounted
const AppContent = () => {
  const location = useLocation();
  
  usePageTracking();
  usePerformanceMonitoring();
  useServiceWorker();
  useErrorTracking();

  // Scroll restoration - scroll to top on route change, then handle hash if present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to ensure lazy-loaded content is rendered
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <NetworkStatusBanner />
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground font-mono">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<Navigate to="/" replace />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/self-assessment" element={<SelfAssessment />} />
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/salesforce/partners" element={<SalesforcePartners />} />
            <Route path="/salesforce/delivery" element={<SalesforceDelivery />} />
            <Route path="/fractional" element={<Fractional />} />
            <Route path="/web-systems" element={<WebSystems />} />
            <Route path="/web" element={<WebSystems />} />
            <Route path="/partner-dashboard" element={<PartnerDashboard />} />
            <Route path="/sample-report" element={<SampleReport />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ae-hub" element={<AEHub />} />
            <Route path="/ae-support" element={<AETechnicalSupport />} />
            <Route path="/ae-hub/objections" element={<AEObjectionLibrary />} />
            <Route path="/ae-technical-support" element={<Navigate to="/ae-support" replace />} />
            <Route path="/assessment-tools" element={<Navigate to="/ae-hub#resources" replace />} />
            <Route path="/salesforce/partners" element={<Navigate to="/ae-hub" replace />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
      <InstallPrompt />
    </>
  );
};

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Initialize analytics
    analytics.initialize();
    
    // Check if intro has been seen this session
    const introSeen = sessionStorage.getItem('cwtIntroSeen');
    if (!introSeen) {
      setShowLoadingScreen(true);
    }

    // Report web vitals
    reportWebVitals();
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('cwtIntroSeen', 'true');
    setShowLoadingScreen(false);
    
    // Return focus to main content
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.focus();
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          {showLoadingScreen && <LoadingScreen onComplete={handleLoadingComplete} />}
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="skip-to-main">
              Skip to main content
            </a>
            <AppContent />
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
