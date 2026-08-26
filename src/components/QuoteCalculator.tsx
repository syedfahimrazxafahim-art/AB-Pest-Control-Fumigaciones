import React, { useState } from 'react';
import { Language } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Building, 
  Home, 
  Store, 
  Warehouse,
  Zap,
  DollarSign
} from 'lucide-react';

interface QuoteCalculatorProps {
  language: Language;
  onOpenQuoteModal: (details?: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const [propertyType, setPropertyType] = useState<'house' | 'apartment' | 'restaurant' | 'commercial'>('house');
  const [sqFt, setSqFt] = useState<number>(1800);
  const [selectedPests, setSelectedPests] = useState<string[]>(['termites']);
  const [urgency, setUrgency] = useState<'same-day' | 'next-day' | 'standard'>('same-day');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const propertyOptions = [
    { id: 'house', label: { es: 'Casa / Residencia', en: 'Single Family Home' }, icon: Home, base: 140 },
    { id: 'apartment', label: { es: 'Apartamento / Condo', en: 'Apartment / Condo' }, icon: Building, base: 110 },
    { id: 'restaurant', label: { es: 'Restaurante / Comida', en: 'Restaurant / Food Service' }, icon: Store, base: 210 },
    { id: 'commercial', label: { es: 'Bodega / Oficina', en: 'Warehouse / Commercial' }, icon: Warehouse, base: 260 },
  ];

  const pestAddons: Record<string, { price: number; name: { es: string; en: string }; icon: string }> = {
    termites: { price: 120, name: { es: 'Termitas', en: 'Termites' }, icon: '🪵' },
    cockroaches: { price: 60, name: { es: 'Cucarachas', en: 'Cockroaches' }, icon: '🪳' },
    rodents: { price: 90, name: { es: 'Roedores & Ático', en: 'Rodents & Attic' }, icon: '🐀' },
    bedbugs: { price: 140, name: { es: 'Chinches de Cama', en: 'Bed Bugs' }, icon: '🛏️' },
    ants: { price: 40, name: { es: 'Hormigas & Césped', en: 'Ants & Yard' }, icon: '🐜' },
    spiders: { price: 45, name: { es: 'Arañas & Telarañas', en: 'Spiders' }, icon: '🕷️' },
    mosquitoes: { price: 50, name: { es: 'Mosquitos Exterior', en: 'Mosquito Yard' }, icon: '🦟' },
    fumigation: { price: 180, name: { es: 'Fumigación de Alto Poder', en: 'Full Fumigation' }, icon: '⚡' },
  };

  const togglePest = (id: string) => {
    setSelectedPests((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((p) => p !== id) : prev) : [...prev, id]
    );
  };

  // Calculate realistic estimation range
  const calculateEstimate = () => {
    const selectedProp = propertyOptions.find((p) => p.id === propertyType) || propertyOptions[0];
    let base = selectedProp.base;

    // SqFt scaling factor
    const sqFtMultiplier = Math.max(1, sqFt / 1500);

    // Sum of pest addons
    let pestCost = 0;
    selectedPests.forEach((pestKey) => {
      if (pestAddons[pestKey]) {
        pestCost += pestAddons[pestKey].price;
      }
    });

    // Multi-pest discount
    if (selectedPests.length > 1) {
      pestCost = pestCost * 0.85; // 15% combo discount
    }

    const subtotal = (base + pestCost) * (0.85 + (sqFtMultiplier * 0.15));
    const minPrice = Math.round(subtotal * 0.9);
    const maxPrice = Math.round(subtotal * 1.15);

    return { min: minPrice, max: maxPrice };
  };

  const { min, max } = calculateEstimate();

  const handleInstantWhatsApp = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    const pestNames = selectedPests.map(p => pestAddons[p]?.name.es).join(', ');
    const msg = encodeURIComponent(
      `Hola AB Pest Control, coticé en su sitio web: ${propertyType} de ~${sqFt} sq ft con problema de (${pestNames}). Estimado: $${min} - $${max}. ¿Tienen horario para hoy/mañana?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phonePrimaryRaw}?text=${msg}`, '_blank');
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            {language === 'es' ? 'Presupuesto Transparente' : 'Transparent Cost Estimator'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
            {language === 'es' ? 'CALCULA TU COTIZACIÓN EN 30 SEGUNDOS' : 'CALCULATE YOUR ESTIMATE IN 30 SECONDS'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            {language === 'es'
              ? 'Precios justos, sin sorpresas ni cargos ocultos. Incluye inspección presencial 100% gratuita.'
              : 'Honest pricing with zero hidden fees. Includes a 100% free on-site physical inspection.'}
          </p>
        </div>

        {/* 2-Column Bento Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Property Type */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-400 block mb-2.5">
                1. {language === 'es' ? 'Tipo de Inmueble' : 'Property Category'}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {propertyOptions.map((prop) => {
                  const Icon = prop.icon;
                  const isSelected = propertyType === prop.id;
                  return (
                    <button
                      key={prop.id}
                      onClick={() => setPropertyType(prop.id as any)}
                      className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-yellow-400/10 border-yellow-400 text-yellow-400 shadow-md'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold truncate">
                        {prop.label[language]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Square Footage Slider */}
            <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  2. {language === 'es' ? 'Tamaño Aproximado' : 'Approximate Size'}
                </label>
                <span className="text-base font-black text-green-400 font-mono">
                  {sqFt.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="6000"
                step="100"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                <span>500 sqft (Condo)</span>
                <span>2,500 sqft (Casa Típica)</span>
                <span>6,000+ sqft (Comercial)</span>
              </div>
            </div>

            {/* 3. Target Pest Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  3. {language === 'es' ? 'Plaga(s) a Tratar (Selecciona 1 o más)' : 'Target Pest(s) to Eradicate'}
                </label>
                {selectedPests.length > 1 && (
                  <span className="bg-green-500/20 text-green-400 border border-green-500/40 text-[10px] font-bold px-2 py-0.5 rounded">
                    15% Combo Discount Active
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.entries(pestAddons).map(([key, item]) => {
                  const isChecked = selectedPests.includes(key);
                  return (
                    <button
                      key={key}
                      onClick={() => togglePest(key)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        isChecked
                          ? 'bg-green-500/10 border-green-500 text-white font-bold'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[11px] leading-tight line-clamp-1">{item.name[language]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Column Bento Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950 border border-zinc-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-black uppercase text-zinc-400 tracking-wider">
                  {language === 'es' ? 'Estimado Preliminar' : 'Estimated Investment'}
                </span>
                <span className="text-green-400 text-xs font-bold font-mono">
                  DFW Flat-Rate Guide
                </span>
              </div>

              {/* Price Display */}
              <div className="py-6 text-center">
                <span className="text-xs text-zinc-400 block mb-1">
                  {language === 'es' ? 'Rango Estimado de Tratamiento:' : 'Estimated Treatment Range:'}
                </span>
                <div className="text-4xl sm:text-5xl font-black text-yellow-400 font-['Syne',sans-serif] tracking-tight">
                  ${min} – ${max}
                </div>
                <span className="text-[11px] text-green-400 font-bold mt-1 block">
                  ✓ {language === 'es' ? 'Incluye Inspección en Sitio $0' : 'Includes $0 Free On-Site Inspection'}
                </span>
              </div>

              {/* Guarantee & Inclusions List */}
              <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-2 mb-6 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{language === 'es' ? 'Garantía 100% Efectividad por escrito' : 'Written 100% Eradication Warranty'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{language === 'es' ? 'Química EPA segura para niños y mascotas' : 'EPA-certified safe chemistry for kids & pets'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{language === 'es' ? 'Técnicos certificados con licencia estatal' : 'Licensed & bonded master technicians'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{language === 'es' ? 'Llegada rápida el mismo día en DFW' : 'Same-day rapid dispatch across DFW'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleInstantWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>{language === 'es' ? 'Confirmar Presupuesto vía WhatsApp' : 'Confirm Estimate on WhatsApp'}</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal(`Estimado de ${min}-${max}`)}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'es' ? 'Solicitar Cita de Inspección Gratis' : 'Book Free Inspection Date'}</span>
                </button>

                <div className="text-center pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                    className="text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{language === 'es' ? 'O llama directo:' : 'Or call directly:'} {BUSINESS_INFO.phonePrimary}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
