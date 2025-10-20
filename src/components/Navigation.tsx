import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-white.svg";
import { memo } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    label: "Home",
    href: "/"
  }, {
    label: "Proof",
    href: "/proof"
  }, {
    label: "Blog",
    href: "/blog"
  }, {
    label: "About",
    href: "/about"
  }];
  const solutionsLinks = [{
    label: "Assessment · $1.5–2.5K",
    href: "/assessment"
  }, {
    label: "Sprint · $9–18K",
    href: "/sprint"
  }, {
    label: "Fractional Ops · $4.5–10K/mo",
    href: "/fractional"
  }, {
    label: "Web Systems · $6–40K",
    href: "/web-systems"
  }, {
    label: "Salesforce · Varies",
    href: "/salesforce"
  }, {
    label: "Resources",
    href: "/resources",
    separator: true
  }];

  const isActive = (href: string) => location.pathname === href;
  const isSolutionsActive = () => solutionsLinks.some(link => isActive(link.href));
  return <nav className="sticky top-0 z-50 bg-authority backdrop-blur border-b border-white/10">
      <div className="mx-auto w-full max-w-full px-3 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-20">
          {/* CWT Studio Official Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity group">
            <img 
              src={cwtLogo} 
              alt="CWT Studio" 
              className="h-[28px] sm:h-[32px] md:h-10 w-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => <Link 
                key={link.href} 
                to={link.href} 
                className={`text-sm font-mono font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-authority rounded px-2 py-1 ${isActive(link.href) ? "!text-white font-semibold" : "!text-white"}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>)}
            
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-sm font-mono font-medium transition-colors hover:text-accent flex items-center gap-1 ${isSolutionsActive() ? "!text-white font-semibold" : "!text-white"}`}>
                Solutions
                <ChevronDown size={14} className="!text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-authority border-white/20">
                {solutionsLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.separator && index > 0 && <div className="h-px bg-white/10 my-1" />}
                    <DropdownMenuItem asChild>
                      <Link to={link.href} className="w-full font-mono text-sm font-medium !text-white transition-colors">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Primary CTA - Console Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-console">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-authority rounded transition-transform duration-200 data-[open=true]:rotate-90" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            data-open={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

          {/* Mobile Navigation */}
        {isOpen && <div id="mobile-navigation" className="lg:hidden border-t border-white/20 bg-authority animate-mobile-menu">
            <div className="px-3 pt-3 pb-5 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navLinks.map(link => <Link key={link.href} to={link.href} className={`block px-4 py-2 text-base font-mono font-medium rounded-md bg-white/5 shadow-mobile-item transition-all duration-200 hover:bg-white/10 ${isActive(link.href) ? "!text-white" : "!text-white/80"}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>)}
              
              {/* Solutions section in mobile */}
              <div className="px-1 py-2 space-y-2">
                <div className="text-xs font-mono font-semibold !text-white/60 uppercase tracking-wider px-3">Solutions</div>
                {solutionsLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.separator && index > 0 && <div className="h-px bg-white/10 my-2 mx-3" />}
                    <Link to={link.href} className={`block px-4 py-2 text-sm font-mono font-medium rounded-md bg-white/5 shadow-mobile-item transition-all duration-200 hover:bg-white/10 ${isActive(link.href) ? "!text-white" : "!text-white/80"}`} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="px-1 pt-2">
                <Button asChild className="btn-console w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default memo(Navigation);
