import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Map paths to readable labels
  const getLabel = (path: string): string => {
    const labels: Record<string, string> = {
      "about": "About",
      "services": "Services",
      "systems": "Systems",
      "proof": "Proof of Execution",
      "contact": "Contact",
      "blog": "Blog",
      "sprint": "Revenue Sprint",
      "fractional": "Fractional Ops",
      "salesforce": "Salesforce",
      "salesforce-delivery": "Salesforce Delivery",
      "salesforce-partners": "Salesforce Partners",
      "ae-technical-support": "AE Technical Support",
      "assessment-tools": "Assessment Tools",
      "sample-report": "Sample Report",
      "privacy-policy": "Privacy Policy",
      "terms-of-service": "Terms of Service",
      "cookie-policy": "Cookie Policy",
    };
    return labels[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
    ...pathnames.map((path, index) => ({
      label: getLabel(path),
      path: `/${pathnames.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 bg-card/50 border-b border-border">
      <ol className="flex items-center gap-2 text-sm font-mono max-w-7xl mx-auto">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isFirst = index === 0;

          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="text-foreground font-semibold" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {isFirst && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
