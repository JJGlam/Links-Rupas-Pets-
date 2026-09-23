import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Heart, 
  ExternalLink, 
  MessageCircle, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Star
} from 'lucide-react';
import { STORE_LINKS } from '../data/links';
import heroImg from '../assets/images/pet_hero_banner_1790121794481.jpg';

interface HeroProps {
  onOpenSizeCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSizeCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-transparent">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-200/30 to-orange-200/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
              <span>Coleção Inverno & Meia-Estação Pet 2026</span>
              <span className="bg-white/80 px-2 py-0.5 rounded-full text-[11px] text-orange-950 font-extrabold ml-1">
                ⭐ 4.9/5 no Mercado Livre
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.1] font-heading">
              Seu Pet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600">Quentinho, Estiloso</span> e Protegido do Frio!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Roupas e casacos soft térmicos desenvolvidos para o corpo do seu animal. Do <strong className="text-stone-800 font-bold">porte Mini até o Porte Gigante</strong> (Golden, Bernese, Rottweiler), com tecido antialérgico, modelagem anatômica e passagem para guia.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2 text-left">
              <div className="flex items-start gap-2 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Soft Anti-Pilling</h4>
                  <p className="text-[11px] text-stone-500">Não solta pelo nem faz bolinhas</p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-100 shadow-2xs">
                <Truck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Envio Full Brasil</h4>
                  <p className="text-[11px] text-stone-500">Entrega rápida Mercado Livre</p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-100 shadow-2xs col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Garantia Total</h4>
                  <p className="text-[11px] text-stone-500">Troca fácil se não servir</p>
                </div>
              </div>
            </div>

            {/* Main Action Direct Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center lg:justify-start">
              {/* Mercado Livre CTA */}
              <a
                href={STORE_LINKS.mercadoLivreProduct}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-900 font-extrabold text-base shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="bg-blue-900 text-white text-xs px-2 py-0.5 rounded font-black">MERCADO LIVRE</span>
                <span>Comprar com Frete Full</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={STORE_LINKS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md shadow-emerald-600/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Quick Location & Calculator secondary bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-600">
              <button
                onClick={onOpenSizeCalculator}
                className="inline-flex items-center gap-1.5 font-bold text-orange-700 hover:text-orange-800 hover:underline cursor-pointer bg-orange-100/60 hover:bg-orange-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>📏 Descobrir o tamanho do meu pet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={STORE_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-stone-600 hover:text-rose-600 hover:underline"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Ponto de retirada: Petz Mooca (Ver no Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-amber-400/30 to-rose-400/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Realistic Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
                <img 
                  src={heroImg} 
                  alt="Cachorros felizes vestindo roupas quentinhas de pet" 
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Tag Top Right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black text-stone-800 tracking-wide uppercase">Pronta Entrega</span>
                </div>

                {/* Floating Product Highlight Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 shadow-xl flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="text-stone-300 text-[11px] font-bold ml-1">4.9 (+2.500 vendidos)</span>
                    </div>
                    <p className="text-sm font-bold text-white line-clamp-1">Roupinha Pet Soft Térmica Anatômica</p>
                    <p className="text-xs text-stone-300">PP, P, M, G, GG, XG e GIGANTE</p>
                  </div>

                  <a
                    href={STORE_LINKS.mercadoLivreProduct}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-extrabold text-xs transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <span>Ver no ML</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Floating Social Badge */}
              <a
                href={STORE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  📸
                </div>
                <div className="text-left pr-1">
                  <p className="text-[10px] text-stone-400 font-medium">Siga no Instagram</p>
                  <p className="text-xs font-extrabold text-stone-800">@shoppinhoanimal</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
