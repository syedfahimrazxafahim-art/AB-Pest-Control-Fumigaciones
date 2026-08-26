import React, { useState } from 'react';
import { Language, QuoteFormData } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  initialServiceName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  initialServiceName = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Dallas',
    zip: '75201',
    propertyType: 'residential',
    approxSqFt: 1800,
    pests: initialServiceName ? [initialServiceName] : ['Termitas'],
    urgency: 'same-day',
    notes: '',
    preferredLanguage: language,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hola AB Pest Control, quiero solicitar una inspección gratuita.\nNombre: ${formData.name || 'Cliente'}\nTeléfono: ${formData.phone}\nCiudad/Zip: ${formData.city} ${formData.zip}\nPlaga: ${formData.pests.join(', ')}\nUrgencia: ${formData.urgency}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phonePrimaryRaw}?text=${msg}`, '_blank');
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-wider mb-3">
          <Phone className="w-3.5 h-3.5" />
          {language === 'es' ? 'Atención Inmediata 24/7' : '24/7 Immediate Contact'}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Syne',sans-serif] tracking-tight">
          {language === 'es' ? 'SOLICITA TU INSPECCIÓN GRATUITA' : 'BOOK YOUR FREE ON-SITE INSPECTION'}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2">
          {language === 'es'
            ? 'Llámanos directamente, escríbenos por WhatsApp o completa el formulario. Respondemos en minutos.'
            : 'Call directly, message us via WhatsApp, or fill out the form below. We respond within minutes.'}
        </p>
      </div>

      {/* Bento Grid: Contact Hub (Left 5) & Interactive Booking Form (Right 7) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Phone & Social Bento Tiles */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Main WhatsApp & Primary Hotline Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-green-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-green-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                {language === 'es' ? 'Línea de Emergencia DFW' : 'Emergency Hotline'}
              </span>
              <span className="bg-green-500/20 text-green-400 border border-green-500/40 text-[10px] font-bold px-2 py-0.5 rounded">
                WhatsApp 24/7
              </span>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="text-3xl sm:text-4xl font-black text-white hover:text-yellow-400 transition-colors font-mono tracking-tight block mb-2"
            >
              {BUSINESS_INFO.phonePrimary}
            </a>

            <p className="text-xs text-zinc-400 mb-6">
              {language === 'es'
                ? 'Llamadas directas o mensajes por WhatsApp. Atención en español e inglés.'
                : 'Direct calls or WhatsApp messaging. Fluent bilingual Spanish & English response.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'es' ? 'Llamar Ya' : 'Call Now'}</span>
              </a>
            </div>
          </div>

          {/* Alternate Direct Phones Card */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
              {language === 'es' ? 'Líneas Telefónicas Adicionales' : 'Additional Direct Lines'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between text-zinc-200"
              >
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold block">
                    {language === 'es' ? 'Línea Directa DFW' : 'DFW Direct Line'}
                  </span>
                  <span className="text-sm font-black font-mono">{BUSINESS_INFO.phoneSecondary}</span>
                </div>
                <Phone className="w-4 h-4 text-green-400" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneAlternateRaw}`}
                className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between text-zinc-200"
              >
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold block">
                    {language === 'es' ? 'Línea de Soporte' : 'Support Line'}
                  </span>
                  <span className="text-sm font-black font-mono">{BUSINESS_INFO.phoneAlternate}</span>
                </div>
                <Phone className="w-4 h-4 text-yellow-400" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Coverage Hours */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                {language === 'es' ? 'Redes Sociales Oficiales' : 'Official Social Profiles'}
              </span>
              <div className="flex gap-2">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
              <Clock className="w-4 h-4 text-green-400 shrink-0" />
              <span>{BUSINESS_INFO.hours[language]}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Inspection Booking Form */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto text-green-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Syne',sans-serif]">
                  {language === 'es' ? '¡SOLICITUD RECIBIDA CON ÉXITO!' : 'INSPECTION REQUEST RECEIVED!'}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  {language === 'es'
                    ? `Gracias ${formData.name}. Un técnico licenciado de AB Pest Control te llamará al ${formData.phone} en menos de 15 minutos para confirmar tu hora de inspección gratuita.`
                    : `Thank you ${formData.name}. A licensed technician will call you at ${formData.phone} within 15 minutes to confirm your free inspection time.`}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="bg-green-500 hover:bg-green-400 text-black px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{language === 'es' ? 'Confirmar de Inmediato por WhatsApp' : 'Speed Up via WhatsApp'}</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase"
                  >
                    {language === 'es' ? 'Enviar Otra Solicitud' : 'Submit Another'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs font-black uppercase text-yellow-400 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Formulario de Inspección $0' : '$0 Free Inspection Form'}
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    {language === 'es' ? 'Sin Compromiso' : 'No Obligation'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-zinc-300 block mb-1">
                      {language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="David Bazan"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-3 rounded-xl text-xs placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-300 block mb-1">
                      {language === 'es' ? 'Teléfono Directo *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(214) 000-0000"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-3 rounded-xl text-xs placeholder:text-zinc-600 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-zinc-300 block mb-1">
                      {language === 'es' ? 'Dirección o Ciudad *' : 'Street Address / City *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main St, Dallas, TX"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-3 rounded-xl text-xs placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-300 block mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      placeholder="75201"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-3 rounded-xl text-xs placeholder:text-zinc-600 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-zinc-300 block mb-1">
                      {language === 'es' ? 'Tipo de Propiedad' : 'Property Type'}
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-3 rounded-xl text-xs"
                    >
                      <option value="residential">{language === 'es' ? 'Casa Residencial' : 'Single Family Home'}</option>
                      <option value="apartment">{language === 'es' ? 'Apartamento / Multifamiliar' : 'Apartment / Multi-unit'}</option>
                      <option value="commercial">{language === 'es' ? 'Restaurante / Negocio' : 'Restaurant / Commercial'}</option>
                      <option value="industrial">{language === 'es' ? 'Bodega / Industrial' : 'Warehouse / Industrial'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-300 block mb-1">
                      {language === 'es' ? 'Urgencia de Atención' : 'Service Urgency'}
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-3 rounded-xl text-xs"
                    >
                      <option value="same-day">{language === 'es' ? '¡Hoy Mismo! (Emergencia)' : 'Same-Day (Urgent)'}</option>
                      <option value="next-day">{language === 'es' ? 'Mañana' : 'Next-Day'}</option>
                      <option value="standard">{language === 'es' ? 'Esta Semana' : 'This Week'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 block mb-1">
                    {language === 'es' ? 'Detalles de la Plaga o Comentarios' : 'Pest Details or Notes'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={language === 'es' ? 'Ej: Veo termitas en la viga del garaje y cucarachas en la cocina...' : 'e.g. Seeing termites along garage frame and roaches in kitchen...'}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500 focus:outline-none text-white px-4 py-2.5 rounded-xl text-xs placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-yellow-400/20 active:scale-95 transition-all"
                  >
                    {loading ? (
                      <span>{language === 'es' ? 'Procesando Solicitud...' : 'Processing...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-black" />
                        <span>{language === 'es' ? 'Enviar Solicitud de Inspección Gratis' : 'Submit Free Inspection Request'}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  <span>{language === 'es' ? 'Tus datos son 100% privados y nunca compartidos' : 'Your information is 100% secure and confidential'}</span>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
