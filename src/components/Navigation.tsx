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
    label: "About",
    href: "/about"
  }];
  const coreServices = [{
    label: "Free Health Check",
    href: "/self-assessment"
  }, {
    label: "Infrastructure Assessment",
    href: "/infrastructure-assessment"
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
      <div className="mx-auto w-full max-w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* CWT Studio Official Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity min-w-[44px] min-h-[44px] -ml-2 pl-2">
            <img 
              src={cwtLogo} 
              alt="CWT Studio" 
              className="h-[32px] sm:h-[36px] md:h-10 w-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => <Link 
                key={link.href} 
                to={link.href} 
                className={`text-sm font-mono font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-authority rounded px-3 py-2 ${isActive(link.href) ? "text-white font-semibold" : "text-white"}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>)}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-sm font-mono font-medium transition-colors hover:text-accent flex items-center gap-1 px-3 py-2 ${isSolutionsActive() ? "text-white font-semibold" : "text-white"}`}>
                Services
                <ChevronDown size={14} className="text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-authority border-white/20 z-[100] text-white">
                <div className="px-2 py-1.5">
                  <div className="text-xs font-mono font-semibold text-white/60 uppercase tracking-wider mb-2 px-2">
                    Core Services
                  </div>
                  {coreServices.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link 
                        to={link.href} 
                        className="w-full font-mono text-sm font-medium hover:bg-white/10 transition-colors flex justify-between items-center px-3 py-2.5 rounded min-h-[44px]"
                      >
                        <span className="text-white">{link.label}</span>
                        <span className="text-xs text-white/60">
                          {link.label === "Free Health Check" ? "(5 min)" :
                           link.label === "Infrastructure Assessment" ? "(2 weeks)" :
                           link.label === "Sprint" ? "(90 days)" :
                           link.label === "Fractional Ops" ? "(ongoing)" : ""}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
                
                <div className="h-px bg-white/10 my-2" />
                
                <div className="px-2 py-1.5">
                  <div className="text-xs font-mono font-semibold text-white/60 uppercase tracking-wider mb-2 px-2">
                    Platform Expertise
                  </div>
                  {platformExpertise.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link 
                        to={link.href} 
                        className="w-full font-mono text-sm font-medium hover:bg-white/10 transition-colors px-3 py-2.5 rounded min-h-[44px]"
                      >
                        <span className="text-white">{link.label}</span>
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
              <Link to="/self-assessment">Take Free Health Check</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-authority rounded transition-transform duration-200 data-[open=true]:rotate-90"
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            data-open={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

          {/* Mobile Navigation */}
          {isOpen && <div id="mobile-navigation" className="md:hidden border-t border-white/20 bg-authority">
            <div className="px-4 py-6 space-y-3" role="navigation" aria-label="Mobile navigation">
              {/* Main Navigation Links */}
              {navLinks.map(link => <Link 
                key={link.href} 
                to={link.href} 
                className={`block px-5 py-4 text-base font-medium rounded border-2 border-white/10 transition-all min-h-[56px] flex items-center ${isActive(link.href) ? "bg-white text-black border-white" : "bg-white/5 text-white hover:bg-white/10"}`} 
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>)}
              
              {/* Services Section */}
              <div className="pt-3 space-y-3">
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider px-2 mb-3">
                  Core Services
                </div>
                {coreServices.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className={`block px-5 py-4 text-base font-medium rounded border-2 border-white/10 transition-all min-h-[56px] flex items-center ${
                      isActive(link.href) ? "bg-white text-black border-white" : "bg-white/5 text-white hover:bg-white/10"
                    }`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="h-px bg-white/20 my-4" />
                
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider px-2 mb-3">
                  Platform Expertise
                </div>
                {platformExpertise.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className={`block px-5 py-4 text-base font-medium rounded border-2 border-white/10 transition-all min-h-[56px] flex items-center ${
                      isActive(link.href) ? "bg-white text-black border-white" : "bg-white/5 text-white hover:bg-white/10"
                    }`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/self-assessment"
                  className="block px-5 py-4 text-base font-bold bg-white text-black rounded border-2 border-white transition-all min-h-[56px] flex items-center justify-center hover:bg-black hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Take Free Health Check
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default memo(Navigation);
