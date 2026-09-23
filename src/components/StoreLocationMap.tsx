import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  Car,
  HeartHandshake
} from 'lucide-react';
import { STORE_LINKS } from '../data/links';

export const StoreLocationMap: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Ponto de Retirada & Atendimento Local</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Venha Nos Conhecer na <span className="text-rose-600">Mooca, São Paulo</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Traga seu pet para experimentar as roupinhas pessoalmente ou retire seu pedido comprado online com frete grátis!
          </p>
        </div>

        {/* Two-Column Grid: Location Details + Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Practical Info */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Reference Card */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    Ponto de Retirada Petz Mooca
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Av. Alcântara Machado (Radial Leste) / Região da Mooca, São Paulo - SP
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    Fácil Acesso & Estacionamento Amplo
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <strong>Segunda a Sábado:</strong> 08:00 às 22:00
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <strong>Domingos e Feriados:</strong> 09:00 às 20:00
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-blue-500 shrink-0" />
                  <div>
                    Estacionamento gratuito para clientes no local
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    Ambiente 100% Pet Friendly (cães de todos os portes bem-vindos!)
                  </div>
                </div>
              </div>

              {/* Callouts */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
                <p className="font-bold text-stone-800">
                  💡 Como funciona a retirada presencial?
                </p>
                <p>
                  Você pode comprar direto no Mercado Livre ou reservar pelo WhatsApp. Confirmamos o tamanho do seu pet e deixamos prontinho para retirada sem custo de frete.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2.5">
              {/* PRIMARY GOOGLE MAPS LINK BUTTON */}
              <a
                href={STORE_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-md shadow-rose-600/20 hover:shadow-lg transition-all group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>ABRIR ROTA NO GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* WhatsApp direct support */}
              <a
                href={STORE_LINKS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Avisar Retirada via WhatsApp (11 99947-0743)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Google Maps Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
            
            {/* Map Top Bar */}
            <div className="px-5 py-3.5 bg-stone-900 text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold">Google Maps • Ponto de Referência Mooca SP</span>
              </div>
              <a 
                href={STORE_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                Ver ampliado <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Styled Map View Card */}
            <div className="relative flex-1 min-h-[340px] bg-stone-100 group">
              {/* Simulated Map Graphical Background with Pin */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100 flex items-center justify-center p-6 text-center">
                
                {/* Visual Roadmap Simulation */}
                <div className="max-w-md w-full p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200 space-y-4">
                  
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center text-white shadow-lg animate-pulse-subtle">
                    <MapPin className="w-8 h-8 drop-shadow" />
                  </div>

                  <div>
                    <h4 className="font-extrabold text-stone-900 text-lg">
                      Petz Mooca - Moda Pet Shoppinho Animal
                    </h4>
                    <p className="text-xs text-stone-500 mt-1">
                      Coordenadas: -23.5674183, -46.5921144 • Mooca, São Paulo - SP
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                    <a
                      href={STORE_LINKS.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Traçar Rota GPS</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={STORE_LINKS.mercadoLivreProduct}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-extrabold text-xs transition-colors"
                    >
                      <span>Comprar Online (Envio Full)</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-stone-400 italic">
                    Clique no botão acima para abrir diretamente no app do Google Maps no celular ou navegador.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="px-6 py-3 bg-amber-50 border-t border-amber-200/60 flex items-center justify-between text-xs text-stone-700">
              <span className="font-bold text-stone-800">
                Mora longe de São Paulo?
              </span>
              <span className="text-stone-600">
                Compre pelo <strong>Mercado Livre</strong> com entrega rápida e segura para qualquer estado do Brasil!
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
