import { LegalDocType } from './LegalModal';
import { Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="w-full border-t border-theme bg-theme-primary transition-colors duration-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-theme-primary">
                Calc<span className="text-[#00D09C]">Saathi</span>
              </span>
              <span className="text-xs text-theme-muted">|</span>
              <span className="text-xs text-theme-secondary flex items-center gap-1">
                Built for India with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
              </span>
            </div>
            <p className="text-xs text-theme-muted max-w-sm">
              Helping Indian users make better money decisions in under 2 minutes.
            </p>
          </div>

          {/* Legal Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-theme-secondary">
            <button
              id="footer-about-link"
              type="button"
              onClick={() => onOpenLegal('about')}
              className="hover:text-[#00D09C] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              id="footer-privacy-link"
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#00D09C] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-link"
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#00D09C] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              id="footer-disclaimer-link"
              type="button"
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-[#00D09C] transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </nav>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 pt-6 border-t border-theme/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-theme-muted">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00D09C]" />
            <span>Zero PII collected · Guest-first · No login required</span>
          </div>
          <div>
            © {new Date().getFullYear()} CalcSaathi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
