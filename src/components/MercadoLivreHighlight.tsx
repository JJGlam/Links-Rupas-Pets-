import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  ExternalLink, 
  MessageCircle, 
  Check, 
  Sparkles,
  Ruler,
  Clock,
  Flame
} from 'lucide-react';
import { STORE_LINKS, getWhatsAppCustomLink } from '../data/links';
import softJacketImg from '../assets/images/soft_dog_jacket_1790121807269.jpg';

interface MercadoLivreHighlightProps {
  onOpenSizeCalculator: () => void;
  onAddToCart: (productName: string, size: string, color: string, price: number) => void;
}

export const MercadoLivreHighlight: React.FC<MercadoLivreHighlightProps> = ({
  onOpenSizeCalculator,
  onAddToCart
}) => {
  const [selectedSize, setSelectedSize] = useState('EXG');
  const [selectedColor, setSelectedColor] = useState('Azul Marinho com Vermelho');
  const [addedNotice, setAddedNotice] = useState(false);

  const sizes = [
    { label: 'G', detail: '7 a 11kg (Pug, Lhasa, Schnauzer)' },
    { label: 'GG', detail: '11 a 18kg (Frenchie, Beagle)' },
    { label: 'XG', detail: '18 a 28kg (Pitbull, Border Collie)' },
    { label: 'EXG', detail: '28 a 40kg (Golden, Labrador, Boxer)' },
    { label: 'Gigante', detail: '40 a 65kg+ (Bernese, Rottweiler, Dogue)' }
  ];

  const colors = [
    { name: 'Azul Marinho com Vermelho', hex: '#1E3A8A' },
    { name: 'Cinza Mescla Clássico', hex: '#6B7280' },
    { name: 'Vermelho Ruby', hex: '#DC2626' },
    { name: 'Preto Ônix', hex: '#1F2937' }
  ];

  const handleAddToCart = () => {
    onAddToCart(
      'Roupinha Soft Cachorro Porte Grande e Gigante',
      selectedSize,
      selectedColor,
      64.90
    );
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const whatsappMessage = `Olá! Tenho interesse na Roupinha Soft Porte Grande/Gigante (${selectedSize} - ${selectedColor}) que vi no site Shoppinho Animal. Poderiam me ajudar a confirmar as medidas?`;

  return (
    <section id="destaque-ml" className="py-16 sm:py-20 bg-amber-100/50 relative overflow-hidden border-y border-amber-200/60">
      
      {/* Background Pet Paw Accent */}
      <div className="absolute right-0 bottom-0 text-amber-200/40 text-9xl font-black select-none pointer-events-none translate-x-12 translate-y-12">
        🐾
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-black tracking-wide uppercase shadow-xs mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
            <span>Produto Campeão de Vendas no Mercado Livre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Roupinha Soft para Cachorro <span className="text-orange-600">Porte Grande & Gigante</span>
          </h2>
          <p className="mt-3 text-stone-600 font-medium text-base">
            O fim da busca por roupinhas que realmente sirvam no seu Golden, Labrador, Pitbull ou Bernese. Quentinha, macia e anatômica.
          </p>
        </div>

        {/* Feature Grid Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 items-center">
            
            {/* Left: Product Image & Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner group">
                <img 
                  src={softJacketImg} 
                  alt="Cachorro de grande porte Golden Retriever vestindo casaco soft"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Mercado Livre Official Banner Tag */}
                <div className="absolute top-4 left-4 bg-amber-400 text-stone-900 font-black text-xs px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                  <span className="font-extrabold text-blue-900">ML</span>
                  <span>Anúncio Oficial Mercado Livre</span>
                </div>

                {/* Full Shipping Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-900/85 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span>Envio <strong>FULL</strong> para todo o Brasil</span>
                  </div>
                  <span className="text-amber-400 font-extrabold">Chega Rápido</span>
                </div>
              </div>

              {/* Thumbnails / Details beneath image */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-stone-700">
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <span className="text-orange-600 block text-base font-bold">100%</span>
                  Soft Térmico
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <span className="text-orange-600 block text-base font-bold">G a Gigante</span>
                  Até 65kg+
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <span className="text-orange-600 block text-base font-bold">★ 4.9</span>
                  +380 Avaliações
                </div>
              </div>
            </div>

            {/* Right: Pricing, Size Selector & Direct Buttons */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Rating and Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-700">4.9 de 5.0</span>
                <span className="text-xs text-stone-400">|</span>
                <span className="text-xs text-stone-500 font-medium">382 compradores satisfeitos no Mercado Livre</span>
              </div>

              {/* Pricing Box */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-2xl border border-orange-200/60 flex items-baseline justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs line-through text-stone-400 font-medium mr-2">De R$ 89,90</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-orange-600">Por</span>
                    <span className="text-3xl sm:text-4xl font-black text-stone-900 font-heading">R$ 64,90</span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    Em até <strong>12x no cartão</strong> ou com desconto via Pix no Mercado Livre
                  </p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  28% OFF HOJE
                </span>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Não aperta no pescoço nem no peito:</strong> cava elástica de expansão</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Passador de guia:</strong> passeie na rua sem tirar a roupa quentinha</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Anti-pilling premium:</strong> lave na máquina sem formar bolinhas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Corte higiênico:</strong> pet faz xixi e cocô normalmente</span>
                </div>
              </div>

              {/* Interactive Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-orange-500" />
                    <span>Selecione o Tamanho Ideal:</span>
                  </label>
                  <button 
                    onClick={onOpenSizeCalculator}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                  >
                    Guia de Medidas em CM →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize(s.label)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedSize === s.label
                          ? 'border-orange-500 bg-orange-50/80 ring-2 ring-orange-500/20 shadow-xs'
                          : 'border-stone-200 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm text-stone-900">{s.label}</span>
                        {selectedSize === s.label && <Check className="w-3.5 h-3.5 text-orange-600" />}
                      </div>
                      <p className="text-[10px] text-stone-500 leading-tight mt-0.5">{s.detail}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Color Selector */}
              <div>
                <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                  Cor Selecionada: <span className="text-orange-600 font-extrabold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-transform cursor-pointer flex items-center justify-center ${
                        selectedColor === c.name ? 'border-orange-600 scale-110 shadow-md' : 'border-stone-200'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className="w-4 h-4 text-white drop-shadow-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Direct ML + WhatsApp */}
              <div className="space-y-3 pt-2">
                {/* PRIMARY DIRECT MERCADO LIVRE BUTTON */}
                <a
                  href={STORE_LINKS.mercadoLivreProduct}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-black text-base shadow-lg shadow-amber-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="bg-blue-900 text-white text-xs px-2 py-0.5 rounded font-black tracking-wider">
                    MERCADO LIVRE
                  </span>
                  <span>COMPRAR AGORA NO MERCADO LIVRE</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* SECONDARY ROW: WhatsApp & Quick Cart */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppCustomLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Dúvida no Tamanho? WhatsApp</span>
                  </a>

                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Adicionado à Sacola!</span>
                      </>
                    ) : (
                      <>
                        <span>Adicionar à Sacola Local</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Security & Guarantee Note */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 border-t border-stone-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Compra 100% Protegida pelo ML
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" /> Devolução grátis em até 30 dias
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
