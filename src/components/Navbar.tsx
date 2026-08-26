import React, { useState } from 'react';
import { OfficialLogo } from './OfficialLogo';
import { Language, PageView } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Menu, 
  X, 
  Globe, 
  Sparkles,
  Search,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  language,
  setLanguage,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageView; label: { es: string; en: string }; icon?: any }[] = [
    { id: 'home', label: { es: 'Inicio', en: 'Home' } },
    { id: 'services', label: { es: 'Servicios', en: 'Services' } },
    { id: 'diagnostic', label: { es: 'Diagnóstico', en: 'Pest Checker' } },
    { id: 'results', label: { es: 'Resultados', en: 'Before & After' } },
    { id: 'coverage', label: { es: 'Áreas DFW', en: 'Coverage' } },
    { id: 'calculator', label: { es: 'Cotizador', en: 'Calculator' } },
    { id: 'faq', label: { es: 'Preguntas', en: 'FAQ & Safety' } },
    { id: 'contact', label: { es: 'Contacto', en: 'Contact' } },
  ];

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      {/* Top Emergency & Trust Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 text-xs px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2 text-zinc-300">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-bold text-green-400 bg-green-950/60 border border-green-800/60 px-2 py-0.5 rounded-full text-[11px]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            24/7 DFW Emergency Dispatch
          </span>
          <span className="hidden md:flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-zinc-200 font-medium">Hablamos Español & English</span>
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          {/* Phone Links */}
          <a
            href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
            className="flex items-center gap-1.5 font-bold text-yellow-400 hover:text-yellow-300 transition-colors font-mono"
            title="Call primary hotline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tel:</span> {BUSINESS_INFO.phonePrimary}
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-green-400 hover:text-green-300 transition-colors bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/30"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-[11px] font-bold transition-colors cursor-pointer"
            title="Change language"
          >
            <Globe className="w-3 h-3 text-zinc-400" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-1 transition-transform hover:scale-[1.01]"
        >
          <OfficialLogo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 text-green-400 border border-zinc-700/80 shadow-inner'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                }`}
              >
                {link.label[language]}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full font-black text-sm uppercase tracking-tight shadow-md hover:shadow-yellow-400/20 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-black" />
            <span>{language === 'es' ? 'Inspección Gratis' : 'Free Inspection'}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-zinc-800">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`p-3 rounded-xl text-left text-sm font-bold flex items-center justify-between ${
                    isActive
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  <span>{link.label[language]}</span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                </button>
              );
            })}
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-2xl font-black text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {language === 'es' ? 'Solicitar Inspección Gratuita' : 'Request Free Inspection'}
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-black text-center text-sm uppercase tracking-tight flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {language === 'es' ? 'Llamar al (214) 668-8338' : 'Call (214) 668-8338'}
            </a>

            <div className="flex justify-between items-center px-2 pt-3 text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-green-400" />
                24/7 DFW Dispatch
              </span>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="text-yellow-400 font-bold underline"
              >
                {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
