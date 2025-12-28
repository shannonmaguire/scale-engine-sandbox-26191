import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-white.svg";
import { memo } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Proof", href: "/proof" },
    { label: "About", href: "/about" }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-authority backdrop-blur border-b border-white/10">
      <div className="mx-auto w-full max-w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* CWT Studio Official Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity min-w-[44px] min-h-[44px] -ml-2 pl-2">
            <img 
              src={cwtLogo} 
              alt="CWT Studio" 
              width="160"
              height="40"
              className="h-[32px] sm:h-[36px] md:h-10 w-auto"
              style={{ imageRendering: 'crisp-edges', aspectRatio: '4/1' }}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                to={link.href} 
                className={`text-sm font-mono font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-authority rounded px-3 py-2 ${isActive(link.href) ? "text-white font-semibold" : "text-white"}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Primary CTA - Console Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-console">
              <Link to="/assessment">Find Out What's Breaking</Link>
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
        {isOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-white/20 bg-authority">
            <div className="px-4 py-6 space-y-3" role="navigation" aria-label="Mobile navigation">
              {/* Main Navigation Links */}
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className={`block px-5 py-4 text-base font-medium rounded border-2 border-white/10 transition-all min-h-[56px] flex items-center ${isActive(link.href) ? "bg-white text-black border-white" : "bg-white/5 text-white hover:bg-white/10"}`} 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/assessment"
                  className="block px-5 py-4 text-base font-bold bg-white text-black rounded border-2 border-white transition-all min-h-[56px] flex items-center justify-center hover:bg-black hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Find Out What's Breaking
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default memo(Navigation);
