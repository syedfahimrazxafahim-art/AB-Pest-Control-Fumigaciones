import React from 'react';
import { Language, PageView } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import { OfficialLogo } from './OfficialLogo';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate: (view: PageView) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs mt-20">
      {/* Top CTA Banner */}
      <div className="border-b border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-yellow-400 font-bold uppercase tracking-wider text-xs block mb-1">
              {language === 'es' ? '¿Emergencia con Plagas en Dallas?' : 'Pest Emergency in Dallas?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Syne',sans-serif]">
              {language === 'es' ? 'FUMIGACIÓN PROFESIONAL EL MISMO DÍA' : 'SAME-DAY HIGH-POWER FUMIGATION'}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>{BUSINESS_INFO.phonePrimary}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <OfficialLogo size="md" />
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {language === 'es'
                ? 'Empresa líder de control de plagas y fumigaciones de alto poder en Dallas, TX y todo el metroplex DFW. Especialistas certificados en termitas, cucarachas, roedores y chinches.'
                : 'Premier pest control and high-power fumigation service in Dallas, TX and DFW metroplex. Certified specialists in termites, roaches, rodents, and bedbugs.'}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                title="Instagram"
              >
                IG
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-1.5 text-green-400 font-bold text-xs hover:bg-green-500/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-['Syne',sans-serif]">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: { es: 'Inicio', en: 'Home' } },
                { id: 'services', label: { es: 'Servicios de Fumigación', en: 'Fumigation Services' } },
                { id: 'diagnostic', label: { es: 'Diagnóstico de Plagas', en: 'Pest Diagnostic' } },
                { id: 'results', label: { es: 'Antes y Después', en: 'Before & After' } },
                { id: 'coverage', label: { es: 'Cobertura DFW', en: 'DFW Coverage' } },
                { id: 'calculator', label: { es: 'Cotizador Online', en: 'Price Calculator' } },
                { id: 'faq', label: { es: 'Preguntas Frecuentes', en: 'FAQ & Guarantees' } },
                { id: 'contact', label: { es: 'Contacto Directo', en: 'Direct Contact' } },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id as PageView);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-green-400 transition-colors flex items-center gap-1 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-zinc-600" />
                    <span>{item.label[language]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-['Syne',sans-serif]">
              {language === 'es' ? 'Especialidades' : 'Specialties'}
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer text-left"
                  >
                    <span className="text-zinc-600">•</span>
                    <span>{srv.name[language]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Dispatch */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-['Syne',sans-serif]">
              {language === 'es' ? 'Contacto Directo' : 'Direct Contact'}
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-2 text-yellow-400 font-mono font-bold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.phonePrimary}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                className="flex items-center gap-2 text-zinc-300 font-mono hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>{BUSINESS_INFO.phoneSecondary}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneAlternateRaw}`}
                className="flex items-center gap-2 text-zinc-300 font-mono hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>{BUSINESS_INFO.phoneAlternate}</span>
              </a>

              <div className="flex items-start gap-2 text-zinc-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>{BUSINESS_INFO.hours[language]}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 {BUSINESS_INFO.name}. Todos los derechos reservados. Dallas, Texas.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">TDA Certified • EPA Approved • 100% Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
