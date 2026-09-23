import React, { useState } from 'react';
import { 
  Star, 
  ExternalLink, 
  MessageCircle, 
  Check, 
  Eye, 
  Sparkles, 
  Filter,
  ShoppingBag
} from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { STORE_LINKS, getWhatsAppCustomLink } from '../data/links';

interface ProductCatalogProps {
  onOpenSizeCalculator: () => void;
  onAddToCart: (productName: string, size: string, color: string, price: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenSizeCalculator,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Todos os Modelos' },
    { id: 'big-dog', label: 'Porte Grande & Gigante' },
    { id: 'soft', label: 'Softs Quentinhos' },
    { id: 'rain', label: 'Capas de Chuva' },
    { id: 'hoodie', label: 'Moletons Urban' },
    { id: 'cats', label: 'Gatos & Felinos' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product.name, product.sizes[0], product.colors[0].name, product.price);
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="produtos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Coleção Completa Pronta Entrega</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
              Roupas Pet para <span className="text-orange-600">Todas as Ocasiões</span>
            </h2>
            <p className="text-stone-600 font-medium text-sm sm:text-base mt-1">
              Do passeio na chuva aos dias mais gelados do ano, garanta o bem-estar do seu pet.
            </p>
          </div>

          <button
            onClick={onOpenSizeCalculator}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold self-start md:self-end transition-colors cursor-pointer shadow-xs"
          >
            <span>📏 Como tirar as medidas do meu pet?</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isAdded = !!addedItemMap[product.id];
            const whatsappMsg = `Olá! Gostaria de encomendar ou tirar dúvidas sobre o produto "${product.name}" (R$ ${product.price.toFixed(2)}) da Shoppinho Animal!`;

            return (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 hover:border-orange-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Wrap */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-stone-900 text-[11px] font-black px-2.5 py-1 rounded-lg shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={() => setSelectedProductForModal(product)}
                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-md text-stone-700 hover:text-orange-600 hover:bg-white transition-all cursor-pointer opacity-90 group-hover:opacity-100"
                    title="Ver detalhes da peça"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Stars and Reviews */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-stone-700">{product.rating}</span>
                      <span>({product.reviewsCount})</span>
                    </div>

                    {/* Name */}
                    <h3 className="font-bold text-stone-900 text-base line-clamp-2 leading-snug group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Available Sizes Tag list */}
                    <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold text-stone-400">Tamanhos:</span>
                      {product.sizes.map((s) => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-extrabold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action CTAs */}
                  <div className="pt-3 border-t border-stone-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        {product.originalPrice && (
                          <span className="text-xs line-through text-stone-400 font-medium mr-1.5">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-xl font-black text-stone-900 font-heading">
                          R$ {product.price.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        Envio Imediato
                      </span>
                    </div>

                    {/* Primary Button: Mercado Livre Link */}
                    <a
                      href={product.mercadoLivreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-extrabold text-xs transition-colors shadow-xs group"
                    >
                      <span className="font-black text-blue-900 text-[11px]">ML</span>
                      <span>Comprar no Mercado Livre</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Secondary Row: WhatsApp & Cart */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={getWhatsAppCustomLink(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Adicionado!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-stone-600" />
                            <span>Sacola</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Quick View */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 max-h-[90vh] flex flex-col">
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {selectedProductForModal.badge || 'Moda Pet'}
                  </span>
                  <h3 className="text-xl font-black text-stone-900 mt-1 font-heading">
                    {selectedProductForModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProductForModal(null)}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-16/9 rounded-xl overflow-hidden bg-stone-100">
                <img 
                  src={selectedProductForModal.image} 
                  alt={selectedProductForModal.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedProductForModal.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                  Diferenciais do Tecido & Modelagem:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {selectedProductForModal.highlightSpecs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500">Valor à vista / parcelado:</span>
                  <p className="text-2xl font-black text-stone-900">
                    R$ {selectedProductForModal.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedProductForModal.mercadoLivreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-extrabold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Comprar no Mercado Livre</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
