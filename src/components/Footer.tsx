import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  CreditCard
} from 'lucide-react';
import { STORE_LINKS } from '../data/links';

interface FooterProps {
  onOpenSizeCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSizeCalculator }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5 Channels Grid Spotlight */}
        <div className="bg-stone-800/80 rounded-3xl p-6 sm:p-8 border border-stone-700 mb-12">
          <div className="text-center sm:text-left mb-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Nossos Canais Oficiais de Atendimento & Compra
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-1">
              Conecte-se com a Shoppinho Animal
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* 1. Mercado Livre */}
            <a
              href={STORE_LINKS.mercadoLivreProduct}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-amber-400 text-stone-900 hover:bg-amber-300 transition-all font-bold text-xs flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="bg-blue-900 text-white text-[10px] px-2 py-0.5 rounded font-black">
                  LOJA OFICIAL
                </span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="mt-3">
                <p className="font-black text-sm">Mercado Livre</p>
                <p className="text-[11px] text-stone-800 font-medium">Roupa Pet Soft & Envios Full</p>
              </div>
            </a>

            {/* 2. WhatsApp */}
            <a
              href={STORE_LINKS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500 transition-all font-bold text-xs flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                  ATENDIMENTO VIP
                </span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="mt-3">
                <p className="font-black text-sm">WhatsApp Direto</p>
                <p className="text-[11px] text-emerald-100 font-medium">(11) 99947-0743</p>
              </div>
            </a>

            {/* 3. Instagram */}
            <a
              href={STORE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:opacity-95 transition-all font-bold text-xs flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Instagram className="w-4 h-4" />
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="mt-3">
                <p className="font-black text-sm">Instagram</p>
                <p className="text-[11px] text-pink-100 font-medium">@shoppinhoanimal</p>
              </div>
            </a>

            {/* 4. Facebook */}
            <a
              href={STORE_LINKS.facebookGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 transition-all font-bold text-xs flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Facebook className="w-4 h-4" />
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="mt-3">
                <p className="font-black text-sm">Grupo Facebook</p>
                <p className="text-[11px] text-blue-100 font-medium">Comunidade & Dicas</p>
              </div>
            </a>

            {/* 5. Google Maps */}
            <a
              href={STORE_LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-rose-600 text-white hover:bg-rose-500 transition-all font-bold text-xs flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <MapPin className="w-4 h-4" />
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="mt-3">
                <p className="font-black text-sm">Google Maps</p>
                <p className="text-[11px] text-rose-100 font-medium">Ponto Petz Mooca SP</p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-xs">
          
          {/* Brand Presentation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-extrabold text-white font-heading">
                Shoppinho<span className="text-orange-500">Animal</span>
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Especialistas em roupinhas confortáveis, tecidos quentinhos de alta durabilidade e modelagens exclusivas para cães de pequeno, médio, grande e gigante porte, além de felinos.
            </p>
            <div className="pt-2 flex items-center gap-2 text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compra 100% Segura e Garantida</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Navegação</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#destaque-ml" className="hover:text-amber-400 transition-colors">
                  Destaque Porte Grande & Gigante (ML)
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">
                  Catálogo Softs & Capas
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenSizeCalculator} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Tabela & Calculadora de Medidas
                </button>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização Petz Mooca
                </a>
              </li>
              <li>
                <a href="#comunidade" className="hover:text-amber-400 transition-colors">
                  Fotos no Instagram @shoppinhoanimal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Service */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Atendimento Humanizado</h4>
            <div className="space-y-2 text-stone-400">
              <p>
                <strong className="text-white">WhatsApp:</strong>{' '}
                <a href={STORE_LINKS.whatsappLink} className="text-emerald-400 hover:underline">
                  (11) 99947-0743
                </a>
              </p>
              <p>
                <strong className="text-white">Horário:</strong> Segunda a Sábado das 08h às 22h
              </p>
              <p>
                <strong className="text-white">Ponto de Retirada:</strong> Petz Mooca, São Paulo - SP
              </p>
              <p>
                <strong className="text-white">Entregas:</strong> Envio Full em até 24h úteis para todo o Brasil
              </p>
            </div>
          </div>

          {/* Security & Badges */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Garantias & Meios de Pagamento</h4>
            <div className="p-3.5 rounded-2xl bg-stone-800 border border-stone-700 space-y-2 text-stone-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mercado Envios Full (Rastreio passo a passo)</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Até 12x no cartão ou Pix no Mercado Livre</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>30 dias para troca caso não sirva</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Shoppinho Animal. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Feito com amor por quem ama pets</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
