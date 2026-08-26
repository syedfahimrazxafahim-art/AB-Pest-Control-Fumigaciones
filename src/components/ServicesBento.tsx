import React, { useState } from 'react';
import { Language, PestService } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/content';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sparkles, 
  Phone, 
  MessageSquare,
  ArrowRight,
  AlertOctagon,
  X,
  Search
} from 'lucide-react';

interface ServicesBentoProps {
  language: Language;
  selectedServiceId?: string;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({
  language,
  selectedServiceId,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [modalService, setModalService] = useState<PestService | null>(
    selectedServiceId ? SERVICES_DATA.find(s => s.id === selectedServiceId) || null : null
  );

  const categories = [
    { id: 'all', label: { es: 'Todas las Plagas', en: 'All Services' } },
    { id: 'critical', label: { es: 'Urgentes & Estructurales', en: 'Urgent & Structural' } },
    { id: 'residential', label: { es: 'Hogar & Cocina', en: 'Home & Kitchen' } },
    { id: 'outdoor', label: { es: 'Patio & Exterior', en: 'Yard & Perimeter' } },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'critical') return service.severity === 'critical';
    if (activeTab === 'residential') return ['cockroaches', 'bedbugs', 'ants', 'spiders'].includes(service.id);
    if (activeTab === 'outdoor') return ['mosquitoes', 'ants', 'termites'].includes(service.id);
    return true;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'es' ? 'Fumigaciones & Control de Plagas' : 'Professional Extermination Services'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
            {language === 'es' ? 'SERVICIOS ESPECIALIZADOS' : 'SPECIALIZED PEST SERVICES'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            {language === 'es'
              ? 'Aplicación con equipo industrial, cebos de alta potencia y fórmulas certificadas para garantizar cero plagas en Dallas-Fort Worth.'
              : 'Industrial equipment application, high-potency domino baits, and EPA-certified treatments ensuring zero pests across DFW.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid for Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredServices.map((service, index) => {
          const isFeatured = service.featured;

          return (
            <div
              key={service.id}
              className={`bg-zinc-900/90 border rounded-3xl p-6 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-xl group relative overflow-hidden ${
                isFeatured 
                  ? 'border-zinc-700 bg-gradient-to-b from-zinc-900 to-zinc-950' 
                  : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Top Row: Icon + Badge + Severity */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {service.severity === 'critical' && (
                      <span className="bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                        <AlertOctagon className="w-3 h-3" />
                        {language === 'es' ? 'Urgente' : 'Critical'}
                      </span>
                    )}
                    <span className="text-yellow-400 text-xs font-mono font-bold">
                      {service.warranty}
                    </span>
                  </div>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-colors font-['Syne',sans-serif]">
                  {service.name[language]}
                </h3>
                <p className="text-xs font-bold text-yellow-400/90 mt-1 mb-3">
                  {service.tagline[language]}
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.shortDesc[language]}
                </p>

                {/* Quick Signs Bullet Checklist */}
                <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800/80 mb-5">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block mb-2">
                    {language === 'es' ? 'Señales de Alerta:' : 'Warning Signs:'}
                  </span>
                  <ul className="space-y-1.5">
                    {service.signs[language].slice(0, 3).map((sign, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                        <span className="truncate">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setModalService(service)}
                  className="text-xs font-bold text-zinc-300 hover:text-green-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{language === 'es' ? 'Ver Detalles' : 'Full Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.name[language])}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all active:scale-95 cursor-pointer shadow"
                >
                  {language === 'es' ? 'Cotizar Gratis' : 'Get Quote'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Detail Breakdown */}
      {modalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{modalService.icon}</span>
              <div>
                <h3 className="text-2xl font-black text-white font-['Syne',sans-serif]">
                  {modalService.name[language]}
                </h3>
                <span className="text-xs font-bold text-yellow-400">
                  {modalService.tagline[language]}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {modalService.fullDesc[language]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                <h4 className="text-xs font-black uppercase text-red-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  {language === 'es' ? 'Peligros & Daños' : 'Risks & Damage'}
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {modalService.threats[language].map((threat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                <h4 className="text-xs font-black uppercase text-green-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {language === 'es' ? 'Nuestro Método' : 'Our Method'}
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {modalService.method[language].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800 flex flex-wrap items-center justify-between gap-4 mb-6 text-xs text-zinc-300">
              <div>
                <span className="text-zinc-500 block">{language === 'es' ? 'Duración:' : 'Duration:'}</span>
                <span className="font-bold text-white">{modalService.duration}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">{language === 'es' ? 'Garantía:' : 'Warranty:'}</span>
                <span className="font-bold text-green-400">{modalService.warranty}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">{language === 'es' ? 'Inspección:' : 'Inspection:'}</span>
                <span className="font-bold text-yellow-400">100% GRATIS</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onOpenQuoteModal(modalService.name[language]);
                  setModalService(null);
                }}
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-2xl font-black text-sm uppercase tracking-tight text-center"
              >
                {language === 'es' ? 'Agendar Inspección Gratis' : 'Book Free Inspection'}
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                className="bg-green-500 hover:bg-green-400 text-black px-6 py-3.5 rounded-2xl font-black text-sm uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
