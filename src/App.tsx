import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ErrorBoundary from "@/components/ErrorBoundary";
import { usePageTracking } from "@/hooks/usePageTracking";
import { usePerformanceMonitoring, reportWebVitals } from "@/hooks/usePerformanceMonitoring";
import { useServiceWorker } from "@/hooks/useServiceWorker";
import { useErrorTracking } from "@/hooks/useErrorTracking";
import NetworkStatusBanner from "@/components/NetworkStatusBanner";
import analytics from "@/lib/analytics";

// Lazy load route components for better performance
const Home = lazy(() => import("@/pages/Home"));
const Sprint = lazy(() => import("@/pages/Sprint"));
const Contact = lazy(() => import("@/pages/Contact"));
const Assessment = lazy(() => import("@/pages/Assessment"));
const SelfAssessment = lazy(() => import("@/pages/SelfAssessment"));
const AssessmentPreview = lazy(() => import("@/pages/AssessmentPreview"));
const AssessmentResults = lazy(() => import("@/pages/AssessmentResults"));
const About = lazy(() => import("@/pages/About"));
const Salesforce = lazy(() => import("@/pages/Salesforce"));
const SalesforcePartners = lazy(() => import("@/pages/SalesforcePartners"));
const Fractional = lazy(() => import("@/pages/Fractional"));
const Resources = lazy(() => import("@/pages/Resources"));
const WebSystems = lazy(() => import("@/pages/WebSystems"));
const StartHere = lazy(() => import("@/pages/StartHere"));

const PartnerDashboard = lazy(() => import("@/pages/PartnerDashboard"));
const SampleReport = lazy(() => import("@/pages/SampleReport"));
const Proof = lazy(() => import("@/pages/Proof"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const AETechnicalSupport = lazy(() => import("@/pages/AETechnicalSupport"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
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

  // Determine if we're on the sample report page (document mode)
  const isDocumentMode = location.pathname === '/sample-report';

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
      {!isDocumentMode && <Navigation />}
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground font-mono">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-here" element={<StartHere />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          <Route path="/assessment-preview" element={<AssessmentPreview />} />
          <Route path="/assessment-results" element={<AssessmentResults />} />
            
            {/* Common typo redirects */}
            <Route path="/assesment" element={<Navigate to="/assessment" replace />} />
            <Route path="/salesforce-partner" element={<Navigate to="/salesforce/partners" replace />} />
            <Route path="/salesforce-partners" element={<Navigate to="/salesforce/partners" replace />} />
            <Route path="/fractional-ops" element={<Navigate to="/fractional" replace />} />
            <Route path="/web-system" element={<Navigate to="/web-systems" replace />} />
            
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/salesforce/partners" element={<SalesforcePartners />} />
            <Route path="/salesforce/delivery" element={<Navigate to="/salesforce" replace />} />
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
            <Route path="/ae-support" element={<AETechnicalSupport />} />
            <Route path="/ae-technical-support" element={<Navigate to="/ae-support" replace />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isDocumentMode && <Footer />}
      {!isDocumentMode && <CookieBanner />}
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize analytics
    analytics.initialize();
    
    // Report web vitals
    reportWebVitals();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
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
