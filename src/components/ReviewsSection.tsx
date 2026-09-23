import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';
import { STORE_LINKS } from '../data/links';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Avaliações Reais de Tutores</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Quem Compra, Ama e <span className="text-orange-600">Recomenda!</span>
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Veja a experiência de quem já vestiu seus cães e gatos com a Shoppinho Animal.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-4 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-stone-900">4.9 / 5.0 estrelas</span>
            <span className="text-xs text-stone-500">com base em mais de 1.200 pedidos entregues</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-stone-50/80 border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400">{t.date}</span>
                </div>

                <p className="text-sm text-stone-700 italic leading-relaxed">
                  "{t.text}"
                </p>

                <div className="inline-block px-2.5 py-1 rounded-lg bg-orange-100/60 text-orange-900 text-xs font-semibold">
                  Produto: {t.product}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-stone-500">{t.pet} • {t.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{t.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mercado Livre & WhatsApp Trust Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 p-6 sm:p-8 rounded-3xl text-stone-900 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-heading">
              Quer garantir o casaco quentinho do seu pet hoje?
            </h3>
            <p className="text-xs sm:text-sm font-medium text-stone-800">
              Pagamento 100% seguro com Mercado Pago, frete rápido com rastreio e suporte humanizado via WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={STORE_LINKS.mercadoLivreProduct}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-stone-950 hover:bg-stone-900 text-white font-extrabold text-xs sm:text-sm text-center shadow-md transition-colors"
            >
              Comprar no Mercado Livre
            </a>
            <a
              href={STORE_LINKS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-emerald-800 font-extrabold text-xs sm:text-sm text-center shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
