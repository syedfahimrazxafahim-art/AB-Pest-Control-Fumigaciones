import React, { useState } from 'react';
import { Language } from '../types';
import { BUSINESS_INFO } from '../data/content';
import confetti from 'canvas-confetti';
import { X, Sparkles, Send, Phone, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  prefilledService?: string;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  isOpen,
  onClose,
  language,
  prefilledService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Dallas');
  const [pest, setPest] = useState(prefilledService || 'Termitas');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 90, spread: 60, origin: { y: 0.5 } });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hola AB Pest Control, solicito una inspección gratuita para ${pest} en ${city}. Mi nombre es ${name || 'Cliente'} y mi teléfono es ${phone}.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phonePrimaryRaw}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-green-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white font-['Syne',sans-serif]">
              {language === 'es' ? '¡INSPECCIÓN AGENDADA!' : 'INSPECTION REQUESTED!'}
            </h3>

            <p className="text-xs text-zinc-300">
              {language === 'es'
                ? `Gracias ${name}. Te llamaremos al ${phone} en breve para confirmar el horario.`
                : `Thank you ${name}. We will call you at ${phone} shortly to finalize the time.`}
            </p>

            <div className="pt-2 space-y-2">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'es' ? 'Acelerar por WhatsApp' : 'Speed Up on WhatsApp'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-zinc-900 text-zinc-400 hover:text-white py-2.5 rounded-2xl font-bold text-xs"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-black uppercase text-yellow-400 tracking-wider block mb-1">
                {language === 'es' ? 'Presupuesto Rápido $0' : 'Fast $0 Free Estimate'}
              </span>
              <h3 className="text-2xl font-black text-white font-['Syne',sans-serif]">
                {language === 'es' ? 'SOLICITA TU INSPECCIÓN' : 'REQUEST FREE INSPECTION'}
              </h3>
            </div>

            <div>
              <label className="text-xs font-bold text-zinc-300 block mb-1">
                {language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="David Bazan"
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-2.5 rounded-xl text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-zinc-300 block mb-1">
                {language === 'es' ? 'Teléfono Directo *' : 'Phone Number *'}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(214) 668-8338"
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-2.5 rounded-xl text-xs font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1">
                  {language === 'es' ? 'Ciudad en DFW' : 'DFW City'}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Dallas / Arlington"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-2.5 rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1">
                  {language === 'es' ? 'Plaga Principal' : 'Primary Pest'}
                </label>
                <select
                  value={pest}
                  onChange={(e) => setPest(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-3 py-2.5 rounded-xl text-xs"
                >
                  <option value="Termitas">Termitas / Termites</option>
                  <option value="Cucarachas">Cucarachas / Roaches</option>
                  <option value="Roedores">Roedores / Rodents</option>
                  <option value="Chinches">Chinches / Bed Bugs</option>
                  <option value="Hormigas">Hormigas / Ants</option>
                  <option value="Fumigación Total">Fumigación de Alto Poder</option>
                </select>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>{language === 'es' ? 'Enviar Solicitud Gratis' : 'Book Free Inspection'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Directo</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 pt-1">
              <ShieldCheck className="w-3 h-3 text-green-400" />
              <span>{language === 'es' ? '100% Gratuito y sin ningún compromiso' : '100% Free with zero obligation'}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
