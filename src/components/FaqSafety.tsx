import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS_DATA, TESTIMONIALS_DATA, BUSINESS_INFO } from '../data/content';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Leaf, 
  CheckCircle2, 
  HeartHandshake,
  Phone,
  MessageSquare
} from 'lucide-react';

interface FaqSafetyProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const FaqSafety: React.FC<FaqSafetyProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Customer Reviews Bento Grid */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            {language === 'es' ? 'Testimonios Verificados' : 'Verified Reviews'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
            {language === 'es' ? 'LO QUE DICEN NUESTROS CLIENTES EN DFW' : 'WHAT OUR CLIENTS SAY ACROSS DFW'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            {language === 'es'
              ? 'Calificación de 5.0 estrellas por propietarios, inquilinos y negocios comerciales en todo el norte de Texas.'
              : '5.0-Star ratings from homeowners, landlords, and commercial facilities across North Texas.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{rev.date}</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4 italic">
                  "{rev.comment[language]}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-xs">{rev.name}</h4>
                  <span className="text-[11px] text-green-400 block">{rev.city}</span>
                </div>
                <span className="bg-zinc-950 text-zinc-400 text-[9px] font-mono px-2 py-0.5 rounded border border-zinc-800">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Safety & Pet-Friendly Guarantees Bento Banner */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-white text-base uppercase font-['Syne',sans-serif]">
                {language === 'es' ? 'Fórmulas Eco-Seguras' : 'Eco-Safe Formulations'}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {language === 'es'
                  ? 'Productos registrados por la EPA, diseñados para ser seguros para perros, gatos y niños una vez secos.'
                  : 'EPA-registered chemistry engineered to be odorless and completely safe for pets & children once dry.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-white text-base uppercase font-['Syne',sans-serif]">
                {language === 'es' ? 'Garantía de Re-Tratamiento' : 'Free Re-Treatment Policy'}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {language === 'es'
                  ? 'Si alguna plaga reaparece durante tu garantía, volvemos a aplicar sin costo adicional alguno.'
                  : 'If any covered pests return within your warranty timeframe, our technicians return at zero cost.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
              <HeartHandshake className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-black text-white text-base uppercase font-['Syne',sans-serif]">
                {language === 'es' ? 'Atención 100% Bilingüe' : '100% Bilingual Service'}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {language === 'es'
                  ? 'Técnicos amables que hablan español e inglés de forma clara y directa, explicando cada paso.'
                  : 'Friendly technicians communicating clearly in Spanish and English with honest guidance.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Frequently Asked Questions Accordion */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-yellow-400" />
            {language === 'es' ? 'Respuestas Claras' : 'Frequently Asked Questions'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
            {language === 'es' ? 'PREGUNTAS FRECUENTES' : 'FREQUENTLY ASKED QUESTIONS'}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-800/40"
                >
                  <span className="font-bold text-white text-sm sm:text-base font-['Syne',sans-serif]">
                    {faq.q[language]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-yellow-400 text-black' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-800/60 text-xs sm:text-sm text-zinc-300 leading-relaxed animate-in fade-in duration-150">
                    {faq.a[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
