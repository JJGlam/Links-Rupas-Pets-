import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Heart, 
  Menu, 
  X, 
  ExternalLink,
  Sparkles,
  Phone
} from 'lucide-react';
import { STORE_LINKS } from '../data/links';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSizeCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSizeCalculator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xs">
      {/* Top Announcement Bar with Direct Links */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-rose-500 text-white text-xs font-semibold px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-extrabold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-200" /> Destaque
            </span>
            <span>Roupas quentinhas para todos os portes com envio Full no Mercado Livre!</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] flex-wrap justify-center">
            <a 
              href={STORE_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <span>Instagram @shoppinhoanimal</span>
            </a>
            <span className="opacity-40">|</span>
            <a 
              href={STORE_LINKS.facebookGroup} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <span>Grupo VIP Facebook</span>
            </a>
            <span className="opacity-40">|</span>
            <a 
              href={STORE_LINKS.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 font-bold text-yellow-100"
            >
              <Phone className="w-3 h-3" /> (11) 99947-0743
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">🐾</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold text-stone-900 tracking-tight font-heading group-hover:text-orange-600 transition-colors">
                  Shoppinho<span className="text-orange-500">Animal</span>
                </span>
                <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-700 font-bold rounded-md">PET</span>
              </div>
              <p className="text-[11px] font-medium text-stone-500 -mt-1">Moda & Conforto Canino e Felino</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <a 
              href="#destaque-ml" 
              className="hover:text-orange-600 transition-colors flex items-center gap-1.5 text-orange-600 font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Roupa Porte Grande
            </a>
            <a href="#produtos" className="hover:text-orange-600 transition-colors">
              Catálogo Soft & Capas
            </a>
            <button 
              onClick={onOpenSizeCalculator}
              className="hover:text-orange-600 transition-colors flex items-center gap-1 text-stone-600 hover:cursor-pointer"
            >
              📏 Tabela de Medidas
            </button>
            <a 
              href="#localizacao" 
              className="hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> Petz Mooca (Maps)
            </a>
            <a href="#comunidade" className="hover:text-orange-600 transition-colors">
              Redes & Comunidade
            </a>
            <a href="#avaliacoes" className="hover:text-orange-600 transition-colors">
              Depoimentos
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href={STORE_LINKS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-bold text-xs transition-colors shadow-xs"
              title="Falar no WhatsApp"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>(11) 99947-0743</span>
            </a>

            {/* Mercado Livre Direct Button */}
            <a
              href={STORE_LINKS.mercadoLivreProduct}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-xs transition-all shadow-xs hover:shadow-md"
              title="Comprar no Mercado Livre"
            >
              <span className="font-extrabold text-blue-900">ML</span>
              <span className="hidden sm:inline">Comprar no</span> Mercado Livre
              <ExternalLink className="w-3 h-3 text-stone-800" />
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-stone-100 hover:bg-orange-50 text-stone-700 hover:text-orange-600 transition-colors hover:cursor-pointer"
              aria-label="Abrir Sacola de Compras"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-stone-700 hover:text-orange-600 focus:outline-hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-amber-100 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-stone-800">
            <a 
              href="#destaque-ml" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-orange-50 text-orange-600 font-bold"
            >
              ⭐ Roupinha Porte Grande (Mercado Livre)
            </a>
            <a 
              href="#produtos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              🐾 Catálogo Completo (Softs & Capas)
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizeCalculator();
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 font-semibold"
            >
              📏 Tabela & Calculadora de Medidas
            </button>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-rose-500" /> Como Chegar - Petz Mooca (Maps)
            </a>
            <a 
              href="#comunidade" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              📸 Instagram & Grupo Facebook
            </a>
            <a 
              href="#avaliacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              💬 Avaliações de Clientes
            </a>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={STORE_LINKS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs"
            >
              <span>Falar no WhatsApp: (11) 99947-0743</span>
            </a>
            <a
              href={STORE_LINKS.mercadoLivreProduct}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-sm shadow-xs"
            >
              <span>Ir para Loja Mercado Livre</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
