import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-white.svg";
import { memo } from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[hsl(var(--burgundy))] text-white border-t border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo + Tagline */}
        <div className="mb-10 sm:mb-12">
          <img src={cwtLogo} alt="CWT Studio" className="h-[40px] sm:h-[42px] md:h-12 w-auto mb-4 hover:opacity-90 transition-opacity" style={{
          imageRendering: 'crisp-edges'
        }} />
          <p className="text-white/60 text-base sm:text-lg">Revenue architecture for high-trust teams</p>
        </div>

        {/* Navigation Grid - 6 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-x-8 sm:gap-y-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-2.5">
              <li>
                <Link to="/self-assessment" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Free Health Check
                </Link>
              </li>
              <li>
                <Link to="/infrastructure-assessment" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Infrastructure Assessment
                </Link>
              </li>
              <li>
                <Link to="/sprint" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Revenue Sprint
                </Link>
              </li>
              <li>
                <Link to="/fractional" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Fractional Ops
                </Link>
              </li>
              <li>
                <Link to="/web-systems" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Web Systems
                </Link>
              </li>
              <li>
                <Link to="/salesforce" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Salesforce
                </Link>
              </li>
            </ul>
          </div>

          {/* Library */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              Library
            </h4>
            <ul className="space-y-3 sm:space-y-2.5">
              <li>
                <Link to="/proof" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Proof
                </Link>
              </li>
              <li>
                <Link to="/sample-report" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Resource Library
                </Link>
              </li>
            </ul>
          </div>

          {/* For Account Executives */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              For AEs
            </h4>
            <ul className="space-y-3 sm:space-y-2.5">
              <li>
                <Link to="/ae-support" className="text-white/80 hover:text-white transition-colors text-base sm:text-sm inline-block min-h-[44px] sm:min-h-0 flex items-center">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-white">
              Company
            </h4>
            <ul className="space-y-3 sm:space-y-2.5">
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
              <a href="mailto:hello@cwtstudio.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base sm:text-sm min-h-[44px] sm:min-h-0">
                <Mail className="h-4 w-4 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                hello@cwtstudio.com
              </a>
              <a href="https://www.linkedin.com/company/cwt-studio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base sm:text-sm min-h-[44px] sm:min-h-0">
                <Linkedin className="h-4 w-4 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                Follow on LinkedIn
              </a>
              <Button asChild size="default" variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto min-h-[48px]">
                <Link to="/self-assessment">
                  Take Free Health Check
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
            Revenue architecture you own
          </span>
        </div>
      </div>
    </footer>;
};
export default memo(Footer);