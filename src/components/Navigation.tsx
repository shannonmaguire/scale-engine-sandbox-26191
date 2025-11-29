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
    label: "Assessment",
    href: "/self-assessment"
  }, {
    label: "Proof",
    href: "/proof"
  }, {
    label: "About",
    href: "/about"
  }];
  const coreServices = [{
    label: "Assessment",
    href: "/self-assessment"
  }, {
    label: "Sprint",
    href: "/sprint"
  }, {
    label: "Fractional Ops",
    href: "/fractional"
  }, {
    label: "Web Systems",
    href: "/web-systems"
  }];

  const platformExpertise = [{
    label: "Salesforce Solutions",
    href: "/salesforce"
  }];

  const allServicesLinks = [...coreServices, ...platformExpertise];

  const isActive = (href: string) => location.pathname === href;
  const isSolutionsActive = () => allServicesLinks.some(link => isActive(link.href));
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
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => <Link 
                key={link.href} 
                to={link.href} 
                className={`text-sm font-mono font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-authority rounded px-2 py-1 ${isActive(link.href) ? "!text-white font-semibold" : "!text-white"}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>)}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-sm font-mono font-medium transition-colors hover:text-accent flex items-center gap-1 ${isSolutionsActive() ? "!text-white font-semibold" : "!text-white"}`}>
                Services
                <ChevronDown size={14} className="!text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-authority border-white/20 z-[100]">
                <div className="px-2 py-1.5">
                  <div className="text-xs font-mono font-semibold !text-white/60 uppercase tracking-wider mb-1">
                    Core Services
                  </div>
                  {coreServices.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link 
                        to={link.href} 
                        className="w-full font-mono text-sm font-medium !text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
                
                <div className="h-px bg-white/10 my-1" />
                
                <div className="px-2 py-1.5">
                  <div className="text-xs font-mono font-semibold !text-white/60 uppercase tracking-wider mb-1">
                    Platform Expertise
                  </div>
                  {platformExpertise.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link 
                        to={link.href} 
                        className="w-full font-mono text-sm font-medium !text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Primary CTA - Console Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-console">
              <Link to="/self-assessment">Start Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-authority rounded transition-transform duration-200 data-[open=true]:rotate-90"
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
        {isOpen && <div id="mobile-navigation" className="md:hidden border-t border-white/20 bg-authority animate-mobile-menu">
            <div className="px-3 pt-3 pb-5 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navLinks.map(link => <Link key={link.href} to={link.href} className={`block px-4 py-2 text-base font-mono font-medium rounded-md bg-white/5 shadow-mobile-item transition-all duration-200 hover:bg-white/10 ${isActive(link.href) ? "!text-white" : "!text-white/80"}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>)}
              
              {/* Services section in mobile */}
              <div className="px-1 py-2 space-y-2">
                <div className="text-xs font-mono font-semibold !text-white/60 uppercase tracking-wider px-3">Core Services</div>
                {coreServices.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className={`block px-4 py-2 text-sm font-mono font-medium rounded-md shadow-mobile-item transition-all duration-200 hover:bg-white/10 ${
                      isActive(link.href) ? "!text-white bg-white/10" : "!text-white/80 bg-white/5"
                    }`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="h-px bg-white/10 my-2 mx-3" />
                
                <div className="text-xs font-mono font-semibold !text-white/60 uppercase tracking-wider px-3">Platform Expertise</div>
                {platformExpertise.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className={`block px-4 py-2 text-sm font-mono font-medium rounded-md shadow-mobile-item transition-all duration-200 hover:bg-white/10 ${
                      isActive(link.href) ? "!text-white bg-white/10" : "!text-white/80 bg-white/5"
                    }`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="px-1 pt-2">
                <Button asChild className="btn-console w-full">
                  <Link to="/self-assessment">Start Assessment</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default memo(Navigation);
