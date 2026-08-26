import React, { useState } from 'react';
import { Language, PageView } from './types';
import { BUSINESS_INFO } from './data/content';
import { Navbar } from './components/Navbar';
import { BentoHero } from './components/BentoHero';
import { ServicesBento } from './components/ServicesBento';
import { DiagnosticTool } from './components/DiagnosticTool';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServiceAreas } from './components/ServiceAreas';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FaqSafety } from './components/FaqSafety';
import { ContactSection } from './components/ContactSection';
import { InspectionModal } from './components/InspectionModal';
import { Footer } from './components/Footer';
import { Phone, MessageSquare, Sparkles, ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [language, setLanguage] = useState<Language>('es');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('termites');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState('');

  const handleOpenQuote = (prefill?: string) => {
    if (prefill) setQuotePrefill(prefill);
    setQuoteModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-yellow-400 selection:text-black font-sans">
      {/* Top Fixed / Sticky Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        language={language}
        setLanguage={setLanguage}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentView === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <BentoHero
              language={language}
              onNavigate={setCurrentView}
              onOpenQuoteModal={() => handleOpenQuote()}
              onSelectService={handleSelectService}
            />

            {/* Quick Teaser of Key Modules in Home */}
            <ServicesBento
              language={language}
              selectedServiceId={selectedServiceId}
              onOpenQuoteModal={handleOpenQuote}
            />

            <DiagnosticTool
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />

            <BeforeAfterSlider
              language={language}
              onOpenQuoteModal={() => handleOpenQuote()}
            />

            <QuoteCalculator
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />

            <ServiceAreas
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />

            <FaqSafety
              language={language}
              onOpenQuoteModal={() => handleOpenQuote()}
            />

            <ContactSection
              language={language}
              initialServiceName={quotePrefill}
            />
          </div>
        )}

        {currentView === 'services' && (
          <div className="animate-in fade-in duration-300">
            <ServicesBento
              language={language}
              selectedServiceId={selectedServiceId}
              onOpenQuoteModal={handleOpenQuote}
            />
            <QuoteCalculator
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />
          </div>
        )}

        {currentView === 'diagnostic' && (
          <div className="animate-in fade-in duration-300">
            <DiagnosticTool
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />
          </div>
        )}

        {currentView === 'results' && (
          <div className="animate-in fade-in duration-300">
            <BeforeAfterSlider
              language={language}
              onOpenQuoteModal={() => handleOpenQuote()}
            />
          </div>
        )}

        {currentView === 'coverage' && (
          <div className="animate-in fade-in duration-300">
            <ServiceAreas
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />
          </div>
        )}

        {currentView === 'calculator' && (
          <div className="animate-in fade-in duration-300">
            <QuoteCalculator
              language={language}
              onOpenQuoteModal={handleOpenQuote}
            />
          </div>
        )}

        {currentView === 'faq' && (
          <div className="animate-in fade-in duration-300">
            <FaqSafety
              language={language}
              onOpenQuoteModal={() => handleOpenQuote()}
            />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <ContactSection
              language={language}
              initialServiceName={quotePrefill}
            />
          </div>
        )}
      </main>

      {/* Floating Emergency Action Bar (Bottom Right) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-2.5 items-end">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-black px-4 py-3 rounded-full font-black text-xs uppercase tracking-tight flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 active:scale-95"
          title="WhatsApp direct"
        >
          <MessageSquare className="w-5 h-5 fill-black" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-3 rounded-full font-black text-xs uppercase tracking-tight flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 active:scale-95 font-mono"
          title="Direct call"
        >
          <Phone className="w-5 h-5 fill-black" />
          <span className="hidden sm:inline">214-668-8338</span>
        </a>
      </div>

      {/* Quick Quote Modal */}
      <InspectionModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        language={language}
        prefilledService={quotePrefill}
      />

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={setCurrentView}
        onOpenQuoteModal={() => handleOpenQuote()}
      />
    </div>
  );
}
