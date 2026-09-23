import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { STORE_LINKS } from '../data/links';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Friendly speech bubble */}
      {!tooltipDismissed && (
        <div className="pointer-events-auto bg-white p-3 rounded-2xl shadow-xl border border-emerald-100 max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative mr-1">
          <button
            onClick={() => setTooltipDismissed(true)}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-500 text-xs shadow-xs cursor-pointer"
            aria-label="Fechar balão"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <span className="text-xl">🐶</span>
            <div>
              <p className="text-xs font-bold text-stone-800">
                Ajuda com o tamanho do seu pet?
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Chame a gente no WhatsApp <strong>(11) 99947-0743</strong>. Atendimento rápido!
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={STORE_LINKS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Falar no WhatsApp: (11) 99947-0743"
        aria-label="Abrir conversa no WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
        <MessageCircle className="w-7 h-7 drop-shadow-xs" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
      </a>

    </div>
  );
};
