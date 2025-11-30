import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, Search, Mail, FileText } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEOHead
        title="Page Not Found | CWT Studio"
        description="The page you are looking for is unavailable. Continue exploring CWT Studio business automation, Salesforce, web, and mobile services."
        keywords={[
          'CWT Studio 404',
          'business automation services',
          'Creator Wealth Tools support'
        ]}
        noindex
      />
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-destructive">
            SYSTEM NOT FOUND
          </span>
        </div>
        
        <h1 className="mb-6 text-6xl font-bold font-mono text-foreground">404</h1>
        <p className="mb-4 text-xl text-foreground font-mono leading-relaxed">
          This page doesn't exist.
        </p>
        <p className="mb-8 text-sm text-muted-foreground font-mono">
          The URL may be incorrect, or the page was moved.
        </p>
        
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Return Home
            </Link>
          </Button>
          
          <div className="grid sm:grid-cols-3 gap-3 mt-6">
            <Button asChild variant="outline" size="sm">
              <Link to="/assessment">
                <Search className="mr-2 h-4 w-4" aria-hidden="true" />
                Start Assessment
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="sm">
              <Link to="/proof">
                <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                View Proof
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="sm">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
