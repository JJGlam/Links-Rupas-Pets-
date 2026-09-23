import React, { useState } from 'react';
import { 
  X, 
  Ruler, 
  Check, 
  Sparkles, 
  HelpCircle, 
  ExternalLink, 
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { SIZE_CHART } from '../data/products';
import { STORE_LINKS, getWhatsAppCustomLink } from '../data/links';

interface SizeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeCalculatorModal: React.FC<SizeCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [chestCm, setChestCm] = useState<number>(68);
  const [lengthCm, setLengthCm] = useState<number>(55);
  const [selectedBreed, setSelectedBreed] = useState<string>('golden');

  if (!isOpen) return null;

  // Breed suggestions preset
  const handleBreedChange = (breed: string) => {
    setSelectedBreed(breed);
    switch (breed) {
      case 'pinscher':
        setChestCm(30);
        setLengthCm(22);
        break;
      case 'shihtzu':
        setChestCm(42);
        setLengthCm(32);
        break;
      case 'frenchie':
        setChestCm(58);
        setLengthCm(42);
        break;
      case 'border':
        setChestCm(68);
        setLengthCm(52);
        break;
      case 'golden':
        setChestCm(82);
        setLengthCm(62);
        break;
      case 'bernese':
        setChestCm(96);
        setLengthCm(74);
        break;
      case 'cat':
        setChestCm(36);
        setLengthCm(28);
        break;
      default:
        break;
    }
  };

  // Calculate suggested size based on chest circumference (most critical dimension)
  const getSuggestedSize = () => {
    if (chestCm <= 32) return 'PP';
    if (chestCm <= 38) return 'P';
    if (chestCm <= 46) return 'M';
    if (chestCm <= 54) return 'G';
    if (chestCm <= 64) return 'GG';
    if (chestCm <= 76) return 'XG';
    if (chestCm <= 88) return 'EXG';
    return 'Gigante';
  };

  const suggestedSize = getSuggestedSize();
  const currentChartRow = SIZE_CHART.find(row => row.size === suggestedSize) || SIZE_CHART[0];

  const whatsappMessage = `Olá! Usei a calculadora de medidas da Shoppinho Animal (Tórax: ${chestCm}cm, Comprimento: ${lengthCm}cm) e o tamanho sugerido foi ${suggestedSize}. Gostaria de confirmar antes de fechar no Mercado Livre!`;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-yellow-200" />
            <div>
              <h3 className="font-extrabold text-lg font-heading">Calculadora & Tabela de Medidas Pet</h3>
              <p className="text-xs text-amber-100">Encontre o tamanho perfeito sem erro de troca!</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Breed Presets */}
          <div>
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">
              1. Escolha uma raça de referência rápida:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'pinscher', name: 'Pinscher / Chihuahua' },
                { id: 'shihtzu', name: 'Shih Tzu / Maltês' },
                { id: 'frenchie', name: 'Bulldog Francês / Pug' },
                { id: 'border', name: 'Border Collie / Pitbull' },
                { id: 'golden', name: 'Golden / Labrador' },
                { id: 'bernese', name: 'Bernese / Rottweiler' },
                { id: 'cat', name: 'Gato Adulto' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleBreedChange(b.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer border ${
                    selectedBreed === b.id
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div>
              <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                <span>Tórax / Peitoral (Mais importante!):</span>
                <span className="text-orange-600 font-extrabold text-sm">{chestCm} cm</span>
              </div>
              <input
                type="range"
                min="20"
                max="110"
                value={chestCm}
                onChange={(e) => setChestCm(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <p className="text-[11px] text-stone-500 mt-1">
                Meça a volta completa na parte mais gordinha atrás das patas dianteiras.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                <span>Comprimento do Dorso:</span>
                <span className="text-orange-600 font-extrabold text-sm">{lengthCm} cm</span>
              </div>
              <input
                type="range"
                min="18"
                max="90"
                value={lengthCm}
                onChange={(e) => setLengthCm(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <p className="text-[11px] text-stone-500 mt-1">
                Da base da coleira até o início do rabinho.
              </p>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-yellow-200 tracking-wider">
                Tamanho Ideal Recomendado:
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-4xl font-black font-heading">{suggestedSize}</span>
                <span className="text-xs opacity-90">({currentChartRow.weight} • {currentChartRow.breeds})</span>
              </div>
              <p className="text-xs text-yellow-100 mt-1">
                Tórax compatível: {currentChartRow.chest} | Comprimento: {currentChartRow.length}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <a
                href={STORE_LINKS.mercadoLivreProduct}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-stone-900 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-yellow-50 transition-colors"
              >
                <span>Comprar {suggestedSize} no ML</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={getWhatsAppCustomLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-stone-900/90 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-stone-900 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Confirmar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Sizing Table */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
              Tabela de Medidas Completa (cm):
            </h4>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-2.5">Tam</th>
                    <th className="p-2.5">Tórax</th>
                    <th className="p-2.5">Comprimento</th>
                    <th className="p-2.5">Pescoço</th>
                    <th className="p-2.5">Peso Aprox.</th>
                    <th className="p-2.5">Raças de Exemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {SIZE_CHART.map((row) => (
                    <tr 
                      key={row.size}
                      className={row.size === suggestedSize ? 'bg-orange-50 font-bold text-orange-950' : 'hover:bg-stone-50'}
                    >
                      <td className="p-2.5 font-extrabold text-orange-600">{row.size}</td>
                      <td className="p-2.5">{row.chest}</td>
                      <td className="p-2.5">{row.length}</td>
                      <td className="p-2.5">{row.neck}</td>
                      <td className="p-2.5">{row.weight}</td>
                      <td className="p-2.5 text-stone-600">{row.breeds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dica de Ouro */}
          <div className="flex items-start gap-2.5 text-xs text-stone-600 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
            <p>
              <strong>Dica importante:</strong> Se as medidas do seu pet ficarem entre dois tamanhos, recomendamos sempre escolher o <strong>tamanho maior</strong> para garantir total conforto e liberdade de movimento!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
