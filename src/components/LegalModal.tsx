import { X, Shield, FileText, AlertCircle, Info } from 'lucide-react';

export type LegalDocType = 'about' | 'privacy' | 'terms' | 'disclaimer' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const contentMap = {
    about: {
      title: 'About CalcSaathi',
      icon: <Info className="w-5 h-5 text-[#00D09C]" />,
      badge: 'Vision & Mission',
      content: (
        <div className="space-y-4 text-theme-secondary text-sm leading-relaxed">
          <p className="font-medium text-theme-primary">
            CalcSaathi is designed to be the go-to financial calculator platform for every Indian — from a salaried professional planning a home loan to an investor starting an SIP or parents opening an SSY account.
          </p>
          <div className="p-4 rounded-xl bg-theme-tertiary border border-theme">
            <h4 className="font-semibold text-theme-primary mb-1">Our Mission</h4>
            <p className="text-xs sm:text-sm">
              &ldquo;Make better money decisions in under 2 minutes.&rdquo;
            </p>
          </div>
          <p>
            We replace the fragmented, ad-heavy, desktop-era calculator landscape with a fast, mobile-first, Groww-inspired experience with India-specific number formatting (₹, Lakhs, Crores) and statutory government scheme support.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>100% Free & Guest-First:</strong> No mandatory signup, zero login friction.</li>
            <li><strong>Unbiased Results:</strong> Independent financial tools with zero product funnel bias.</li>
            <li><strong>India-Centric:</strong> Pre-configured with Indian tax rules, RBI rate guidelines, and PPF/SSY/SCSS schemes.</li>
          </ul>
        </div>
      ),
    },
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="w-5 h-5 text-[#00D09C]" />,
      badge: 'DPDP Act 2023 Compliant',
      content: (
        <div className="space-y-4 text-theme-secondary text-sm leading-relaxed">
          <p className="font-medium text-theme-primary">
            CalcSaathi is committed to strict data privacy and zero unnecessary personal data collection.
          </p>
          <div className="p-3.5 rounded-xl bg-[#00D09C]/10 border border-[#00D09C]/20 text-[#00D09C] text-xs">
            🛡️ <strong>Zero PII Policy:</strong> We do not collect names, phone numbers, Aadhaar, PAN, or bank credentials. All core calculations run locally in your browser.
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-theme-primary">1. Information We Process</h4>
            <p className="text-xs sm:text-sm">
              We process numeric inputs provided solely within your browser session to compute financial formulas in real-time. Anonymous usage analytics (e.g. calculator page views) are processed without identifying individuals.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-theme-primary">2. Local Storage</h4>
            <p className="text-xs sm:text-sm">
              Your recent calculations and theme preferences (Dark / Light mode) are saved strictly inside your device&apos;s browser <code className="font-mono text-xs bg-theme-tertiary px-1.5 py-0.5 rounded">localStorage</code> and never sent to a marketing database.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-theme-primary">3. Compliance</h4>
            <p className="text-xs sm:text-sm">
              In accordance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023, you retain complete sovereignty over your data with zero third-party data brokerage.
            </p>
          </div>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      icon: <FileText className="w-5 h-5 text-[#5B6DFF]" />,
      badge: 'Usage Terms',
      content: (
        <div className="space-y-4 text-theme-secondary text-sm leading-relaxed">
          <p>
            By accessing or using CalcSaathi (<code className="font-mono text-xs text-theme-primary">calcsaathi.in</code>), you agree to be bound by these Terms of Service.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-theme-primary">1. Informational Use Only</h4>
            <p className="text-xs sm:text-sm">
              The tools, calculators, and simulations provided on CalcSaathi are strictly for personal, educational, and illustrative use.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-theme-primary">2. Accuracy & Calculations</h4>
            <p className="text-xs sm:text-sm">
              While we strive to ensure our formulas match the latest Reserve Bank of India (RBI) standards and government rules, actual financial institutions may utilize proprietary day-count conventions, fees, or floating rate adjustments.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-theme-primary">3. Modifications</h4>
            <p className="text-xs sm:text-sm">
              CalcSaathi reserves the right to enhance, alter, or update calculators, formula baselines, and statutory rate benchmarks at any time.
            </p>
          </div>
        </div>
      ),
    },
    disclaimer: {
      title: 'Financial Disclaimer',
      icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
      badge: 'Legal Notice',
      content: (
        <div className="space-y-4 text-theme-secondary text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm leading-relaxed">
            <strong>Statutory Disclaimer:</strong> The calculations provided by CalcSaathi are for illustrative and educational purposes only. They do not constitute financial, investment, tax, or legal advice.
          </div>
          <p className="text-xs sm:text-sm">
            Actual results may vary based on market conditions, bank policies, government notifications, taxation changes, and individual financial profiles. Always consult a qualified SEBI-registered investment advisor or certified financial planner before making substantial financial commitments.
          </p>
          <p className="text-xs sm:text-sm">
            CalcSaathi is an independent software tool and is not liable for any financial decisions, transactions, or agreements made based on these calculations.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="legal-modal-card"
        className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-theme-secondary border border-theme shadow-2xl p-6 sm:p-7"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-theme mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-theme-tertiary border border-theme">
              {current.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-theme-primary">{current.title}</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-theme-tertiary text-theme-secondary border border-theme">
                  {current.badge}
                </span>
              </div>
              <p className="text-xs text-theme-muted mt-0.5">CalcSaathi India</p>
            </div>
          </div>
          <button
            id="close-legal-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-2">
          {current.content}
        </div>

        {/* Footer */}
        <div className="pt-5 mt-4 border-t border-theme flex justify-end">
          <button
            id="dismiss-legal-modal-btn"
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#00D09C] text-[#0F0F23] hover:bg-[#00b887] transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
