import { ThemeToggle } from './ThemeToggle';
import { Calculator } from 'lucide-react';

interface NavbarProps {
  onHomeClick?: () => void;
}

export function Navbar({ onHomeClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme bg-theme-primary/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <div
          id="brand-logo"
          onClick={onHomeClick}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D09C] to-[#00A87E] flex items-center justify-center shadow-sm shadow-[#00D09C]/20 group-hover:scale-105 transition-transform duration-200">
            <Calculator className="w-5 h-5 text-[#0F0F23] stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-theme-primary">
                Calc<span className="text-[#00D09C]">Saathi</span>
              </span>
              <span className="hidden sm:inline-flex text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded-full bg-[#00D09C]/10 text-[#00D09C] border border-[#00D09C]/20">
                India
              </span>
            </div>
          </div>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
