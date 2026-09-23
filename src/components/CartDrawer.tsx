import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ExternalLink, 
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { STORE_LINKS, getWhatsAppCustomLink } from '../data/links';

export interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Generate customized WhatsApp checkout message
  const generateWhatsAppCheckoutMessage = () => {
    let msg = `Olá Shoppinho Animal! Gostaria de fazer o pedido dos seguintes itens que selecionei no site:\n\n`;
    items.forEach((item, index) => {
      msg += `🔹 ${item.quantity}x ${item.name}\n   Tamanho: ${item.size} | Cor: ${item.color}\n   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    msg += `💰 *Valor Total:* R$ ${total.toFixed(2)}\n`;
    msg += `📍 Gostaria de combinar o envio ou retirada na Mooca!`;
    return msg;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Cart Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-yellow-200" />
              <h3 className="font-extrabold text-lg font-heading">Sua Sacola Pet</h3>
              <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full font-bold">
                {items.reduce((acc, i) => acc + i.quantity, 0)} itens
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-amber-50 mx-auto flex items-center justify-center text-3xl">
                  🐶
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-800 text-base">Sua sacola está vazia</h4>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Adicione roupinhas quentinhas ou casacos para seu melhor amigo!
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-colors cursor-pointer shadow-xs"
                >
                  Ver Catálogo de Roupas
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-900 text-xs line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Tamanho: <strong className="text-orange-600">{item.size}</strong> • Cor: {item.color}
                      </p>
                      <p className="text-xs font-black text-stone-900 mt-1">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-800 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-stone-400 hover:text-rose-500 transition-colors p-1 cursor-pointer"
                      title="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-4">
              
              {/* Total Calculation */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal dos produtos:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Retirada na Petz Mooca:</span>
                  <span>Grátis</span>
                </div>
                <div className="flex justify-between text-base font-black text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total:</span>
                  <span className="text-xl font-heading text-orange-600">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Choices */}
              <div className="space-y-2.5">
                {/* 1. Finalize via WhatsApp */}
                <a
                  href={getWhatsAppCustomLink(generateWhatsAppCheckoutMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Pedido para o WhatsApp</span>
                </a>

                {/* 2. Direct to Mercado Livre */}
                <a
                  href={STORE_LINKS.mercadoLivreProduct}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-extrabold text-xs transition-colors"
                >
                  <span className="font-extrabold text-blue-900 text-[11px]">ML</span>
                  <span>Pagar no Mercado Livre com Frete Full</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Atendimento humanizado e compra 100% protegida</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
