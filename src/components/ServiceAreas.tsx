import React, { useState } from 'react';
import { Language } from '../types';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/content';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Sparkles,
  Navigation,
  ShieldCheck
} from 'lucide-react';

interface ServiceAreasProps {
  language: Language;
  onOpenQuoteModal: (areaName?: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const [searchZip, setSearchZip] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('Dallas');

  const filteredAreas = SERVICE_AREAS.filter((area) => {
    if (!searchZip.trim()) return true;
    const query = searchZip.toLowerCase();
    const matchesName = area.name.toLowerCase().includes(query);
    const matchesCounty = area.county.toLowerCase().includes(query);
    const matchesZip = area.zipCodes.some((z) => z.includes(query));
    return matchesName || matchesCounty || matchesZip;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black uppercase tracking-wider mb-3">
          <Navigation className="w-3.5 h-3.5" />
          {language === 'es' ? 'Cobertura en Todo DFW' : 'Dallas-Fort Worth Metroplex'}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
          {language === 'es' ? 'ÁREAS DE SERVICIO & TIEMPOS DE LLEGADA' : 'SERVICE AREAS & RESPONSE TIMES'}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2">
          {language === 'es'
            ? 'Flota de técnicos locales ubicados estratégicamente para responder en menos de 45 minutos en todo Dallas, Fort Worth y condados vecinos.'
            : 'Strategically dispatched local technicians arriving in under 45 minutes across Dallas, Fort Worth, and neighboring counties.'}
        </p>
      </div>

      {/* Zip / City Search Filter Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchZip}
            onChange={(e) => setSearchZip(e.target.value)}
            placeholder={language === 'es' ? 'Ingresa tu Ciudad o Código Postal (ej: Dallas, 75201, Arlington)...' : 'Enter City or ZIP code (e.g. Dallas, 75201, Plano)...'}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-green-500 focus:outline-none text-white pl-12 pr-4 py-3.5 rounded-2xl text-sm placeholder:text-zinc-600 transition-colors shadow-inner"
          />
          {searchZip && (
            <button
              onClick={() => setSearchZip('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Bento Grid of Service Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {filteredAreas.map((area) => (
          <div
            key={area.name}
            className={`bg-zinc-900/90 border rounded-3xl p-5 flex flex-col justify-between transition-all hover:scale-[1.02] ${
              area.status === 'priority'
                ? 'border-green-500/40 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-lg'
                : 'border-zinc-800'
            }`}
          >
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg font-['Syne',sans-serif]">
                      {area.name}
                    </h3>
                    <span className="text-[11px] text-zinc-400 font-medium">
                      {area.county}
                    </span>
                  </div>
                </div>

                <span className="bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  {area.responseTime}
                </span>
              </div>

              {/* Sample Zip codes */}
              <div className="flex flex-wrap gap-1 mt-3 mb-4">
                {area.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="bg-zinc-950 text-zinc-400 text-[10px] font-mono px-2 py-0.5 rounded-md border border-zinc-800"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[11px] text-green-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {language === 'es' ? 'Mismo Día Activo' : 'Same-Day Active'}
              </span>

              <button
                onClick={() => onOpenQuoteModal(area.name)}
                className="text-xs font-bold text-yellow-400 hover:underline cursor-pointer"
              >
                {language === 'es' ? 'Agendar' : 'Dispatch'} →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom DFW Dispatch Callout Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-400 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{language === 'es' ? 'Técnicos Locales en Tu Zona' : 'Local Technicians On-Duty'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-['Syne',sans-serif]">
            {language === 'es'
              ? '¿Vives en una zona no listada en el mapa?'
              : 'Living in an area not listed above?'}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            {language === 'es'
              ? 'Cubrimos un radio de más de 50 millas alrededor de Dallas-Fort Worth. Llámanos para confirmar disponibilidad inmediata.'
              : 'We cover a 50+ mile radius around Dallas-Fort Worth. Call us to confirm immediate technician dispatch.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3.5 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>(214) 668-8338</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3.5 rounded-2xl font-bold text-sm uppercase border border-zinc-700 cursor-pointer"
          >
            {language === 'es' ? 'Verificar Cobertura' : 'Check Coverage'}
          </button>
        </div>
      </div>
    </section>
  );
};
