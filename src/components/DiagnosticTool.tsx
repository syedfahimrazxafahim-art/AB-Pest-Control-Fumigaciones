import React, { useState } from 'react';
import { Language } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  Home,
  HelpCircle
} from 'lucide-react';

interface DiagnosticToolProps {
  language: Language;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('kitchen');

  const symptomsList = [
    { id: 'wood_powder', label: { es: 'Polvillo de madera o madera que suena hueca', en: 'Wood powder / frass or hollow sounding wood' }, target: 'termites' },
    { id: 'mud_tubes', label: { es: 'Túneles de barro en paredes o cimientos', en: 'Mud shelter tubes along baseboards or foundation' }, target: 'termites' },
    { id: 'droppings_black', label: { es: 'Excremento negro tipo pimienta en gavetas de cocina', en: 'Pepper-like dark specks in kitchen cabinets' }, target: 'cockroaches' },
    { id: 'musty_odor', label: { es: 'Olor aceitoso desagradable y bichos nocturnos', en: 'Musty oily odor and nocturnal crawlers' }, target: 'cockroaches' },
    { id: 'attic_noises', label: { es: 'Ruidos de rasguños y correderas de noche en el ático', en: 'Nighttime scratching/scampering noises in ceiling/attic' }, target: 'rodents' },
    { id: 'chewed_wires', label: { es: 'Cables, cajas o aislamiento roídos', en: 'Gnawed wires, pipes or torn insulation' }, target: 'rodents' },
    { id: 'bed_bites', label: { es: 'Picaduras rojizas en línea al despertar y manchas en sábanas', en: 'Linear cluster red bites upon waking & sheet blood specks' }, target: 'bedbugs' },
    { id: 'ant_trails', label: { es: 'Senderos continuos de hormigas hacia alimentos o en jardín', en: 'Dense foraging ant trails toward food or yard mounds' }, target: 'ants' },
    { id: 'spider_webs', label: { es: 'Telarañas densas en esquinas, garaje o aleros', en: 'Dense cobwebs in garage corners, eaves, or dark closets' }, target: 'spiders' },
    { id: 'outdoor_swarms', label: { es: 'Nubes de mosquitos y picaduras intensas en el patio', en: 'Mosquito swarms & persistent bites in backyard' }, target: 'mosquitoes' },
  ];

  const locationsList = [
    { id: 'kitchen', label: { es: 'Cocina & Baños', en: 'Kitchen & Baths' }, icon: '🍳' },
    { id: 'attic', label: { es: 'Ático & Techo', en: 'Attic & Ceiling' }, icon: '🏠' },
    { id: 'bedroom', label: { es: 'Dormitorios & Camas', en: 'Bedrooms & Mattresses' }, icon: '🛏️' },
    { id: 'yard', label: { es: 'Patio & Jardín', en: 'Yard & Perimeter' }, icon: '🌳' },
    { id: 'whole_house', label: { es: 'Toda la Propiedad', en: 'Whole Property' }, icon: '🏢' },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Determine most probable diagnosis
  const getDiagnosis = () => {
    if (selectedSymptoms.length === 0) {
      return null;
    }

    const counts: Record<string, number> = {};
    selectedSymptoms.forEach((symId) => {
      const item = symptomsList.find((s) => s.id === symId);
      if (item) {
        counts[item.target] = (counts[item.target] || 0) + 1;
      }
    });

    let topTarget = 'fumigation';
    let maxCount = 0;
    Object.entries(counts).forEach(([target, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topTarget = target;
      }
    });

    if (selectedSymptoms.length >= 4) {
      topTarget = 'fumigation';
    }

    return SERVICES_DATA.find((s) => s.id === topTarget) || SERVICES_DATA[0];
  };

  const diagnosis = getDiagnosis();

  const handleWhatsAppShare = () => {
    if (!diagnosis) return;
    const msg = encodeURIComponent(
      `Hola AB Pest Control, realicé el diagnóstico en su sitio web: Detecté síntomas de ${diagnosis.name.es} en ${selectedLocation}. ¿Tienen disponibilidad para una inspección gratuita hoy?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phonePrimaryRaw}?text=${msg}`, '_blank');
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-wider mb-3">
            <Search className="w-3.5 h-3.5" />
            {language === 'es' ? 'Identificador Interactivo' : 'Smart Diagnostic Tool'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
            {language === 'es' ? '¿QUÉ PLAGA ESTÁ INVADIENDO TU HOGAR?' : 'WHAT PEST IS INVADING YOUR HOME?'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            {language === 'es'
              ? 'Selecciona los síntomas observados y la zona afectada para recibir un diagnóstico instantáneo y plan de erradicación.'
              : 'Select your observed symptoms and affected area to receive an immediate diagnosis and treatment recommendation.'}
          </p>
        </div>

        {/* 2-Column Bento Layout: Step 1 (Left) & Live Results (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Selector */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location selector */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-400 block mb-2">
                1. {language === 'es' ? 'Zona Principal Afectada' : 'Primary Affected Area'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {locationsList.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all text-xs font-bold cursor-pointer ${
                      selectedLocation === loc.id
                        ? 'bg-zinc-800 border-yellow-400 text-yellow-400 shadow-md'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{loc.icon}</span>
                    <span className="truncate">{loc.label[language]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Symptoms Checklist */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  2. {language === 'es' ? 'Selecciona los Síntomas que has Notado' : 'Select Observed Signs'}
                </label>
                {selectedSymptoms.length > 0 && (
                  <button
                    onClick={() => setSelectedSymptoms([])}
                    className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    {language === 'es' ? 'Limpiar' : 'Reset'}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {symptomsList.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <button
                      key={sym.id}
                      onClick={() => toggleSymptom(sym.id)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-medium flex items-start gap-2.5 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-green-500/10 border-green-500/50 text-white shadow'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md mt-0.5 shrink-0 flex items-center justify-center border ${
                          isChecked
                            ? 'bg-green-500 border-green-500 text-black'
                            : 'border-zinc-700 bg-zinc-900'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="leading-snug">{sym.label[language]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Diagnosis Bento Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-black uppercase text-zinc-400 tracking-wider">
                  {language === 'es' ? 'Resultado de Diagnóstico' : 'Diagnosis Report'}
                </span>
                <span className="bg-yellow-400 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  Instant AI Match
                </span>
              </div>

              {diagnosis ? (
                <div className="pt-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-4xl shadow-inner">
                      {diagnosis.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">
                        {language === 'es' ? 'Plaga Identificada:' : 'Identified Pest:'}
                      </span>
                      <h3 className="text-2xl font-black text-white font-['Syne',sans-serif]">
                        {diagnosis.name[language]}
                      </h3>
                      <span className="text-xs text-yellow-400 font-medium">
                        {diagnosis.tagline[language]}
                      </span>
                    </div>
                  </div>

                  {/* Danger Matrix */}
                  <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">{language === 'es' ? 'Nivel de Riesgo:' : 'Threat Severity:'}</span>
                      <span className="font-black text-red-400 uppercase tracking-wider">
                        {diagnosis.severity === 'critical' 
                          ? (language === 'es' ? 'Crítico — Daño Estructural / Salud' : 'Critical Threat') 
                          : (language === 'es' ? 'Alto — Propagación Rápida' : 'High Threat')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">{language === 'es' ? 'Tiempo de Respuesta DFW:' : 'DFW Arrival Time:'}</span>
                      <span className="font-bold text-green-400">&lt; 45 Minutos</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">{language === 'es' ? 'Garantía del Servicio:' : 'Warranty:'}</span>
                      <span className="font-bold text-yellow-400">{diagnosis.warranty}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {diagnosis.shortDesc[language]}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => onOpenQuoteModal(diagnosis.name[language])}
                      className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      <Sparkles className="w-4 h-4 fill-black" />
                      <span>{language === 'es' ? 'Agendar Inspección Gratis' : 'Book Free Inspection'}</span>
                    </button>

                    <button
                      onClick={handleWhatsAppShare}
                      className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === 'es' ? 'Consultar Diagnóstico por WhatsApp' : 'Send Report via WhatsApp'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-zinc-500 space-y-3">
                  <HelpCircle className="w-12 h-12 mx-auto text-zinc-700 animate-pulse" />
                  <p className="text-sm font-medium">
                    {language === 'es'
                      ? 'Marca 1 o más síntomas en la lista para ver el diagnóstico y tratamiento recomendado.'
                      : 'Select 1 or more signs above to reveal pest match and immediate treatment plan.'}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
