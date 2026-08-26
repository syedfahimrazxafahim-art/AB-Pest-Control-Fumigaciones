import React, { useState } from 'react';
import { Language } from '../types';
import { BEFORE_AFTER_CASES, BUSINESS_INFO } from '../data/content';
import { 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ArrowLeftRight,
  Phone
} from 'lucide-react';

interface BeforeAfterSliderProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage

  const activeCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {language === 'es' ? 'Evidencia Real en DFW' : 'Proven Real-World Results'}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
          {language === 'es' ? 'ANTES Y DESPUÉS DE NUESTRO TRATAMIENTO' : 'BEFORE & AFTER TREATMENT SHOWCASE'}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2">
          {language === 'es'
            ? 'Casos reales resueltos en casas y restaurantes del metroplex de Dallas-Fort Worth con 100% de éxito.'
            : 'Real pest elimination cases solved across Dallas-Fort Worth homes & commercial properties with 100% success.'}
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {BEFORE_AFTER_CASES.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedCaseIndex(idx);
              setSliderPos(50);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCaseIndex === idx
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 scale-105'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Main Comparison Bento Container */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Top: Interactive Interactive Slider Graphic */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-700 select-none shadow-2xl bg-zinc-950">
              
              {/* After Layer (Base) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-zinc-900">
                <img
                  src={activeCase.afterImage}
                  alt="After Treatment"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    // Fallback visually if image not directly bundled
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="relative z-10 bg-zinc-950/80 backdrop-blur-sm p-4 rounded-2xl border border-green-500/40">
                  <span className="bg-green-500 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full inline-block mb-1">
                    {language === 'es' ? 'DESPUÉS (100% LIBRE DE PLAGAS)' : 'AFTER (100% PEST FREE)'}
                  </span>
                  <p className="text-xs text-zinc-200 font-medium">
                    {activeCase.afterDesc[language]}
                  </p>
                </div>
              </div>

              {/* Before Layer (Clipped by sliderPos) */}
              <div
                className="absolute inset-0 overflow-hidden bg-zinc-950"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={activeCase.beforeImage}
                    alt="Before Treatment"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125"
                    style={{ minWidth: '100%', minHeight: '100%' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-red-950/30"></div>

                  <div className="absolute bottom-6 left-6 right-6 z-10 bg-zinc-950/90 backdrop-blur-sm p-4 rounded-2xl border border-red-500/40">
                    <span className="bg-red-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full inline-block mb-1">
                      {language === 'es' ? 'ANTES (INFESTACIÓN ACTIVA)' : 'BEFORE (ACTIVE INFESTATION)'}
                    </span>
                    <p className="text-xs text-zinc-200 font-medium line-clamp-2">
                      {activeCase.beforeDesc[language]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-black flex items-center justify-center shadow-lg border-2 border-zinc-950 -ml-0.5">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Range Input for Smooth Drag / Touch */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Comparison slider"
              />
            </div>

            <div className="flex justify-between items-center text-[11px] text-zinc-400 mt-3 px-2">
              <span>← {language === 'es' ? 'Arrastra para ver el Antes' : 'Slide left for Before'}</span>
              <span>{language === 'es' ? 'Arrastra para ver el Después' : 'Slide right for After'} →</span>
            </div>
          </div>

          {/* Right Column: Case Specs & Proof Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-green-400" />
                <span>{activeCase.location}</span>
                <span className="text-zinc-600">•</span>
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-zinc-300">{activeCase.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Syne',sans-serif] leading-tight mb-4">
                {activeCase.title[language]}
              </h3>
            </div>

            {/* Metrics Bento Box */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {activeCase.metric.label[language]}
                </span>
                <span className="text-3xl font-black text-green-400 font-['Syne',sans-serif]">
                  {activeCase.metric.value}
                </span>
              </div>

              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {language === 'es' ? 'Garantía Otorgada' : 'Warranty Issued'}
                </span>
                <span className="text-3xl font-black text-yellow-400 font-['Syne',sans-serif]">
                  100%
                </span>
              </div>
            </div>

            <div className="bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800/80 space-y-3">
              <span className="text-xs font-black uppercase text-zinc-300 tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                {language === 'es' ? 'Protocolo de Erradicación Aplicado:' : 'Eradication Protocol Applied:'}
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {language === 'es'
                  ? 'Fumigación de choque, inyección de barrera termiticida y desinfección total de superficies. Aprobado para reingreso seguro el mismo día.'
                  : 'Knockdown fumigation, termiticide injection barrier, and whole-surface disinfection. Cleared for safe same-day re-entry.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 shadow"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>{language === 'es' ? 'Proteger Mi Propiedad' : 'Protect My Property'}</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3.5 rounded-2xl font-bold text-xs uppercase flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-4 h-4 text-green-400" />
                <span>(214) 668-8338</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
