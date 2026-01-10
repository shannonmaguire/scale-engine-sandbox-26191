import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-white.svg";
import { memo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[hsl(var(--burgundy))] text-white border-t border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo + Tagline */}
        <div className="mb-10 sm:mb-12">
          <img 
            src={cwtLogo} 
            alt="CWT Studio" 
            className="h-[40px] sm:h-[42px] md:h-12 w-auto mb-4 hover:opacity-90 transition-opacity" 
            style={{ imageRendering: 'crisp-edges' }} 
          />
          <p className="text-white/60 text-base sm:text-lg">Revenue architecture for high-trust teams</p>
        </div>

        {/* Navigation Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-8 sm:gap-y-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              Company
            </h4>
            <ul className="space-y-3 sm:space-y-2.5">
              <li>
                <Link to="/assessment" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Assessment
                </Link>
              </li>
              <li>
                <Link to="/proof" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Proof
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              Legal
            </h4>
            <ul className="space-y-3 sm:space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              Contact
            </h4>
            <div className="space-y-4 sm:space-y-3">
              <a href="mailto:hello@thecwtstudio.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base sm:text-sm min-h-[44px] sm:min-h-0">
                <Mail className="h-4 w-4 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                hello@thecwtstudio.com
              </a>
              <a href="https://www.linkedin.com/company/cwt-studio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base sm:text-sm min-h-[44px] sm:min-h-0">
                <Linkedin className="h-4 w-4 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                Follow on LinkedIn
              </a>
              <Button asChild size="default" variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto min-h-[48px]">
                <Link to="/assessment">
                  Book Assessment
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-3 sm:items-center">
          <p className="text-white/40 text-sm sm:text-xs order-2 sm:order-1">
            © {currentYear} CWT Studio. All rights reserved.
          </p>
          <span className="text-white/30 text-sm sm:text-xs uppercase tracking-wider order-1 sm:order-2 sm:text-right">
            Growth dies when systems break.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
