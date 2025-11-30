import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-white.svg";
import { memo } from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[hsl(var(--burgundy))] text-white border-t border-white/10">
      <div className=" mx-auto px-6 sm:px-8 py-16">
        {/* Logo + Tagline */}
        <div className="mb-12">
          <img src={cwtLogo} alt="CWT Studio" className="h-[36px] sm:h-[42px] md:h-12 w-auto mb-4 hover:opacity-90 transition-opacity" style={{
          imageRendering: 'crisp-edges'
        }} />
          <p className="text-white/60 font-mono text-sm max-w-md">
            Infrastructure that compounds
          </p>
        </div>

        {/* Navigation Grid - 6 equal columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 pb-12 border-b border-white/10">
          {/* Services */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/self-assessment" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Free Health Check
                </Link>
              </li>
              <li>
                <Link to="/sprint" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Revenue Sprint
                </Link>
              </li>
              <li>
                <Link to="/fractional" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Fractional Ops
                </Link>
              </li>
              <li>
                <Link to="/web-systems" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Web Systems
                </Link>
              </li>
              <li>
                <Link to="/salesforce" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Salesforce
                </Link>
              </li>
            </ul>
          </div>

          {/* Library */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Library
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/proof" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Proof
                </Link>
              </li>
              <li>
                <Link to="/sample-report" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Resource Library
                </Link>
              </li>
            </ul>
          </div>

          {/* For Account Executives */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              For Account Executives
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ae-support" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="mailto:hello@cwtstudio.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-mono text-sm">
                <Mail className="h-3.5 w-3.5" />
                hello@cwtstudio.com
              </a>
              <a 
                href="https://www.linkedin.com/company/cwt-studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-mono text-sm"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Follow on LinkedIn
              </a>
              <Button asChild size="sm" variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
                <Link to="/self-assessment">
                  Take Free Health Check
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 grid gap-3 md:grid-cols-2 md:items-center">
          <p className="text-white/40 font-mono text-xs order-2 md:order-1">
            © {currentYear} CWT Studio. All rights reserved. | v2.0
          </p>
          <span className="text-white/30 font-mono text-xs uppercase tracking-wider order-1 md:order-2 md:text-right">
            Infrastructure that compounds.
          </span>
        </div>
      </div>
    </footer>;
};
export default memo(Footer);