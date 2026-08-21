import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { LandingPage } from './app/page';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);

  const handleOpenLegal = (type: LegalDocType) => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-theme-primary text-theme-primary transition-colors duration-200">
      {/* Top Navigation Bar */}
      <Navbar onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <LandingPage />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Legal & About Modals */}
      <LegalModal type={legalModalType} onClose={handleCloseLegal} />
    </div>
  );
}
