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
const HowWeWork = lazy(() => import("@/pages/HowWeWork"));
const Sprint = lazy(() => import("@/pages/Sprint"));
const Contact = lazy(() => import("@/pages/Contact"));
const Assessment = lazy(() => import("@/pages/Assessment"));
const About = lazy(() => import("@/pages/About"));
const Salesforce = lazy(() => import("@/pages/Salesforce"));
const Fractional = lazy(() => import("@/pages/Fractional"));
const WebSystems = lazy(() => import("@/pages/WebSystems"));
const Proof = lazy(() => import("@/pages/Proof"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const AETechnicalSupport = lazy(() => import("@/pages/AETechnicalSupport"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const Start = lazy(() => import("@/pages/Start"));

const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Inner component to use hooks after Router is mounted
const AppContent = () => {
  const location = useLocation();
  
  usePageTracking();
  usePerformanceMonitoring();
  useServiceWorker();
  useErrorTracking();

  // Determine if we're on standalone pages (no nav/footer)
  const isStandalonePage = location.pathname === '/start';

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
      {!isStandalonePage && <Navigation />}
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={
          <div className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4 px-6" style={{ contain: 'layout' }}>
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" style={{ willChange: 'transform' }} />
            <div className="text-muted-foreground font-mono text-sm">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/assessment" element={<Assessment />} />
            
            {/* Redirects for old routes and typos */}
            <Route path="/self-assessment" element={<Navigate to="/assessment" replace />} />
            <Route path="/assessment-preview" element={<Navigate to="/assessment" replace />} />
            <Route path="/assessment-results" element={<Navigate to="/assessment" replace />} />
            <Route path="/infrastructure-assessment" element={<Navigate to="/assessment" replace />} />
            <Route path="/assesment" element={<Navigate to="/assessment" replace />} />
            <Route path="/fractional-ops" element={<Navigate to="/fractional" replace />} />
            <Route path="/web-system" element={<Navigate to="/web-systems" replace />} />
            
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/salesforce/delivery" element={<Navigate to="/salesforce" replace />} />
            <Route path="/fractional" element={<Fractional />} />
            <Route path="/web-systems" element={<WebSystems />} />
            <Route path="/web" element={<WebSystems />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ae-support" element={<AETechnicalSupport />} />
            <Route path="/ae-technical-support" element={<Navigate to="/ae-support" replace />} />
            <Route path="/start-here" element={<Navigate to="/start" replace />} />
            <Route path="/start" element={<Start />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* Catch-all 404 route - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isStandalonePage && <Footer />}
      {!isStandalonePage && <CookieBanner />}
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
