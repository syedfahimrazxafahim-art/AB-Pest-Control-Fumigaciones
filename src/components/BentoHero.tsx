import React from 'react';
import { Language, PageView } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Award, 
  Leaf, 
  MapPin,
  Flame,
  Bug,
  AlertTriangle
} from 'lucide-react';

interface BentoHeroProps {
  language: Language;
  onNavigate: (view: PageView) => void;
  onOpenQuoteModal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const BentoHero: React.FC<BentoHeroProps> = ({
  language,
  onNavigate,
  onOpenQuoteModal,
  onSelectService,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
      {/* Top Tag & Urgency Alert */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-200">
            {language === 'es' 
              ? '¡FUMIGA ESTE 2026 Y PROTEGE TU HOGAR! — Servicio de Termitas y Control Total en DFW'
              : 'PROTECT YOUR HOME IN 2026! — Termite Control & High-Power Fumigation in DFW'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-green-400 font-bold">
          <Zap className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Respuesta en <45 min' : '<45 min Response'}</span>
        </div>
      </div>

      {/* Main Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(140px,auto)]">
        
        {/* Card 1: Main Hero Banner (Col 1-7, Row 1-4) */}
        <div className="md:col-span-7 md:row-span-4 bg-zinc-900/95 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-zinc-800/90 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          {/* Subtle Background Pattern & Glow */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110">
            <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M12 2v20M2 12h20M5.07 5.07l13.86 13.86M18.93 5.07L5.07 18.93"/>
            </svg>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-yellow-400 text-xs font-black uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'es' ? '100% Efectividad Garantizada' : '100% Guaranteed Results'}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.92] tracking-tight text-white mb-6 font-['Syne',sans-serif]">
              PEST PROBLEM?<br />
              <span className="text-green-500 drop-shadow-sm">WE HANDLE IT.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed">
              {language === 'es'
                ? 'Expertos en solución total y poder extremo en cada aplicación. Exterminio profesional de termitas, cucarachas, roedores y chinches en Dallas, Texas y todo el metroplex DFW.'
                : 'Professional residential & commercial extermination and high-potency fumigation across Dallas, Texas. Fast response, family-safe treatments, and licensed exterminators.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-black text-base sm:text-lg uppercase tracking-tight shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 fill-black" />
              <span>{language === 'es' ? 'Inspección Gratis' : 'Free Inspection'}</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-100 hover:text-white px-7 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{language === 'es' ? 'Nuestros Servicios' : 'Our Services'}</span>
              <ArrowRight className="w-4 h-4 text-green-400" />
            </button>
          </div>
        </div>

        {/* Card 2: Targeted Pests Matrix (Col 8-12, Row 1-3) - High Impact Vibrant Green */}
        <div className="md:col-span-5 md:row-span-3 bg-gradient-to-br from-green-500 to-green-600 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 text-black relative shadow-2xl flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-['Syne',sans-serif]">
                {language === 'es' ? 'Plagas Objetivo' : 'Targeted Pests'}
              </h3>
              <span className="bg-black/15 text-black text-xs font-black px-2.5 py-1 rounded-full uppercase">
                {language === 'es' ? 'Eliminación Total' : 'Total Eradication'}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-black/80 mb-4">
              {language === 'es'
                ? 'Selecciona una plaga para ver diagnóstico y método de control:'
                : 'Click any target pest to view immediate treatment specs:'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'termites', label: { es: 'Termitas', en: 'Termites' }, icon: '🪵' },
                { id: 'cockroaches', label: { es: 'Cucarachas', en: 'Cockroaches' }, icon: '🪳' },
                { id: 'rodents', label: { es: 'Roedores', en: 'Rodents' }, icon: '🐀' },
                { id: 'bedbugs', label: { es: 'Chinches', en: 'Bed Bugs' }, icon: '🛏️' },
                { id: 'ants', label: { es: 'Hormigas', en: 'Ants' }, icon: '🐜' },
                { id: 'spiders', label: { es: 'Arañas', en: 'Spiders' }, icon: '🕷️' },
              ].map((pest) => (
                <button
                  key={pest.id}
                  onClick={() => {
                    onSelectService(pest.id);
                    onNavigate('services');
                  }}
                  className="bg-black/10 hover:bg-black/20 border border-black/10 p-3 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-left text-black cursor-pointer"
                >
                  <span className="text-xl">{pest.icon}</span>
                  <span className="truncate">{pest.label[language]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-black/15 flex items-center justify-between text-xs font-bold text-black/90">
            <span>{language === 'es' ? '¿Plaga no listada?' : 'Other pest?'}</span>
            <button
              onClick={() => onNavigate('diagnostic')}
              className="underline font-black hover:text-black flex items-center gap-1"
            >
              {language === 'es' ? 'Usar Diagnóstico' : 'Try Pest Checker'} →
            </button>
          </div>
        </div>

        {/* Card 3: 100% Guaranteed Results Pill (Col 8-10, Row 4) - Vibrant Yellow */}
        <div className="md:col-span-3 md:row-span-1 bg-yellow-400 hover:bg-yellow-300 transition-colors rounded-3xl p-5 flex items-center justify-center gap-4 text-black shadow-lg">
          <div className="text-4xl font-black font-['Syne',sans-serif] tracking-tight">100%</div>
          <div className="text-xs font-black leading-tight uppercase tracking-wider">
            {language === 'es' ? (
              <>Efectividad<br />Garantizada</>
            ) : (
              <>Guaranteed<br />Results</>
            )}
          </div>
        </div>

        {/* Card 4: Service Area Box (Col 11-12, Row 4) */}
        <div className="md:col-span-2 md:row-span-1 bg-zinc-900 rounded-3xl p-4 flex items-center justify-center border border-zinc-800 hover:border-zinc-700 transition-all text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-green-400 text-lg sm:text-xl font-black">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>Dallas, TX</span>
            </div>
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mt-0.5">
              {language === 'es' ? 'Área Metro DFW' : 'DFW Metro Area'}
            </span>
          </div>
        </div>

        {/* Card 5: Contact & Hotline Card (Col 8-12, Row 5-6) */}
        <div className="md:col-span-5 md:row-span-2 bg-zinc-950 border border-zinc-800 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-1">
                {language === 'es' ? 'Atención Inmediata' : 'Immediate Support'}
              </div>
              <div className="text-xs font-bold text-yellow-400">
                {language === 'es' ? 'Llama o Escríbenos Directamente' : 'Call or WhatsApp Directly'}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors text-xs font-black"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors text-xs font-black"
                title="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="text-2xl sm:text-3xl font-black text-white hover:text-yellow-400 transition-colors font-mono tracking-tight block"
            >
              {BUSINESS_INFO.phonePrimary}
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-bold text-sm flex items-center gap-2 bg-green-950/60 border border-green-800/60 px-3 py-1 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                WhatsApp Disponible
              </a>

              <span className="text-xs text-zinc-400 font-mono font-medium">
                Alt: {BUSINESS_INFO.phoneSecondary}
              </span>
            </div>
          </div>
        </div>

        {/* Card 6: 3 Pillars Grid (Col 1-7, Row 5-6) */}
        <div className="md:col-span-7 md:row-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800/90 flex flex-col items-center justify-center text-center hover:border-zinc-700 transition-colors">
            <span className="text-3xl sm:text-4xl mb-2">🛡️</span>
            <span className="text-sm font-black text-white uppercase tracking-tight">
              {language === 'es' ? 'Técnicos Licenciados' : 'Licensed Techs'}
            </span>
            <span className="text-[11px] text-zinc-400 mt-1">
              {language === 'es' ? 'Certificados TDA & EPA' : 'TDA & EPA Certified'}
            </span>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800/90 flex flex-col items-center justify-center text-center hover:border-zinc-700 transition-colors">
            <span className="text-3xl sm:text-4xl mb-2">🌱</span>
            <span className="text-sm font-black text-white uppercase tracking-tight">
              {language === 'es' ? 'Fórmulas Seguras' : 'Safe Process'}
            </span>
            <span className="text-[11px] text-zinc-400 mt-1">
              {language === 'es' ? 'Seguro para Niños & Mascotas' : 'Pet & Child Friendly'}
            </span>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800/90 flex flex-col items-center justify-center text-center hover:border-zinc-700 transition-colors">
            <span className="text-3xl sm:text-4xl mb-2">⚡</span>
            <span className="text-sm font-black text-white uppercase tracking-tight">
              {language === 'es' ? 'Respuesta Rápida' : 'Fast Response'}
            </span>
            <span className="text-[11px] text-zinc-400 mt-1">
              {language === 'es' ? 'Mismo Día en todo DFW' : 'Same-Day Dispatch'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
