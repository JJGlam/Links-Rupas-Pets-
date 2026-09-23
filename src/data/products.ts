import { STORE_LINKS } from './links';

import heroImg from '../assets/images/pet_hero_banner_1790121794481.jpg';
import softJacketImg from '../assets/images/soft_dog_jacket_1790121807269.jpg';
import raincoatImg from '../assets/images/pet_raincoat_hoodie_1790121821032.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'soft' | 'rain' | 'hoodie' | 'big-dog' | 'cats';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  description: string;
  highlightSpecs: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isMercadoLivreDirect?: boolean;
  mercadoLivreUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'soft-porte-grande-gigante',
    name: 'Roupinha Soft para Cachorro - Especial Porte Grande e Gigante',
    category: 'big-dog',
    price: 64.90,
    originalPrice: 89.90,
    rating: 4.9,
    reviewsCount: 382,
    image: softJacketImg,
    badge: 'Destaque Mercado Livre',
    description: 'Confeccionada em tecido soft térmico de alta gramatura, quentinho, antialérgico e super elástico. Modelagem anatômica desenvolvida especificamente para cães de grande e gigante porte como Golden Retriever, Labrador, Rottweiler, Bernese, Pastor Alemão e Dogue Alemão.',
    highlightSpecs: [
      'Tecido Soft Térmico Anti-Pilling (não forma bolinhas)',
      'Abertura especial no dorso para passagem de guia/coleira',
      'Elástico no tórax e barriga para ajuste ergonômico seguro',
      'Lavável na máquina, não desbota e secagem ultra rápida'
    ],
    sizes: ['G', 'GG', 'XG', 'EXG', 'Gigante'],
    colors: [
      { name: 'Azul Marinho com Vermelho', hex: '#1E3A8A' },
      { name: 'Cinza Mescla Clássico', hex: '#6B7280' },
      { name: 'Vermelho Ruby', hex: '#DC2626' },
      { name: 'Preto Ônix', hex: '#1F2937' }
    ],
    isMercadoLivreDirect: true,
    mercadoLivreUrl: STORE_LINKS.mercadoLivreProduct
  },
  {
    id: 'capa-chuva-impermeavel-corgi',
    name: 'Capa de Chuva Pet Impermeável com Capuz & Faixa Refletiva',
    category: 'rain',
    price: 52.90,
    originalPrice: 74.90,
    rating: 4.8,
    reviewsCount: 215,
    image: raincoatImg,
    badge: '100% Impermeável',
    description: 'Passeie sem preocupação mesmo em dias de chuva! Confeccionada com membrana tecnológica que bloqueia 100% da água do vento, enquanto mantém o pelo seco e limpo. Possui faixa refletiva noturna para segurança total.',
    highlightSpecs: [
      'Material PVC flexível e respirável',
      'Faixa refletiva luminosa para passeios noturnos',
      'Capuz protetor ajustável com cordão elástico',
      'Fácil fechamento em velcro duplo reforçado'
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Amarelo Segurança', hex: '#EAB308' },
      { name: 'Laranja Trânsito', hex: '#F97316' },
      { name: 'Rosa Chiclete', hex: '#EC4899' },
      { name: 'Azul Céu', hex: '#0EA5E9' }
    ],
    mercadoLivreUrl: STORE_LINKS.mercadoLivreProduct
  },
  {
    id: 'sueter-tricot-mostarda',
    name: 'Suéter Tricot Artesanal Canelado Confort Must',
    category: 'soft',
    price: 48.00,
    originalPrice: 65.00,
    rating: 4.9,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Vendido Frio',
    description: 'Aqueça seu cãozinho com a elegância de um autêntico tricot premium. Fios macios que não pinicam a pele do animal, com gola rolê aconchegante que protege a garganta das baixas temperaturas.',
    highlightSpecs: [
      'Tricot elástico ultra confortável',
      'Gola rulê dobrável para máxima proteção térmica',
      'Não aperta as patinhas nas articulações',
      'Hipoalergênico e fácil de vestir'
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Mostarda Vintage', hex: '#CA8A04' },
      { name: 'Terracota Aveludado', hex: '#C2410C' },
      { name: 'Verde Floresta', hex: '#15803D' }
    ],
    mercadoLivreUrl: STORE_LINKS.mercadoLivreProduct
  },
  {
    id: 'moletom-street-hoodie',
    name: 'Moletom Pet Urban Street com Bolso Canguru',
    category: 'hoodie',
    price: 58.50,
    originalPrice: 79.90,
    rating: 4.7,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    badge: 'Tendência 2026',
    description: 'Estilo urbano autêntico para os pets mais fashionistas do pedaço. Algodão flanelado por dentro e corte aerodinâmico que permite total liberdade para correr e brincar no parque.',
    highlightSpecs: [
      'Algodão 100% flanelado com toque de nuvem',
      'Bolso canguru funcional para petisco ou saquinho cata-caca',
      'Passagem reforçada para coleira peitoral',
      'Punhos canelados para não escorregar nas patas'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Cinza Mescla Urbano', hex: '#4B5563' },
      { name: 'Preto Total', hex: '#111827' },
      { name: 'Vinho Bordô', hex: '#881337' }
    ],
    mercadoLivreUrl: STORE_LINKS.mercadoLivreProduct
  },
  {
    id: 'macacao-pijama-soft-pet',
    name: 'Pijama Macacão Soft Térmico Patinhas Felizes',
    category: 'soft',
    price: 54.90,
    originalPrice: 69.90,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    badge: 'Frio Extremo',
    description: 'Projetado para noites geladas e cães que adoram dormir enroladinhos no edredom. Cobre as quatro patinhas com barra elástica suave sem restringir as necessidades fisiológicas.',
    highlightSpecs: [
      'Design que deixa área íntima livre para xixi e cocô',
      'Cobertura 4 patas para cães que sentem muito frio',
      'Estampa antialérgica exclusiva',
      'Indicado por veterinários para cães idosos ou de pelagem curta'
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Azul Nuvem Estrelado', hex: '#38BDF8' },
      { name: 'Rosa Pastel', hex: '#F472B6' },
      { name: 'Bege Cookie', hex: '#D97706' }
    ],
    mercadoLivreUrl: STORE_LINKS.mercadoLivreProduct
  },
  {
    id: 'blusa-fleece-gatos-feline',
    name: 'Blusa Soft Fleece Anatômica para Gatos & Felinos',
    category: 'cats',
    price: 39.90,
    originalPrice: 49.90,
    rating: 4.8,
    reviewsCount: 97,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    badge: 'Design Felino Antiestresse',
    description: 'Modelagem sob medida que respeita o equilíbrio e a mobilidade ágil dos gatos. O tecido ultra macio e leve evita o "efeito estátua", permitindo que o felino continue saltando e brincando normalmente.',
    highlightSpecs: [
      'Ultraleve: seu gato nem percebe que está usando',
      'Cava ampla nos ombros para não travar a escápula',
      'Costuras externas suaves que não atritam no pelo',
      'Perfeita para gatos idosos, desmamados ou raças sem pelo (Sphynx)'
    ],
    sizes: ['Filhote', 'P', 'M', 'G'],
    colors: [
      { name: 'Pêssego Aconchego', hex: '#FB923C' },
      { name: 'Lavanda Relaxante', hex: '#A855F7' },
      { name: 'Menta Suave', hex: '#34D399' }
    ],
    mercadoLivreUrl: STORE_LINKS.mercadoLivreProduct
  }
];

export const SIZE_CHART = [
  { size: 'PP', neck: '18-22 cm', chest: '26-32 cm', length: '20-24 cm', weight: 'Até 2,5 kg', breeds: 'Pinscher 0, Chihuahua, Filhotes' },
  { size: 'P', neck: '22-26 cm', chest: '32-38 cm', length: '24-28 cm', weight: '2,5 a 4,5 kg', breeds: 'Yorkshire, Pinscher 1, Maltês pequeno' },
  { size: 'M', neck: '26-30 cm', chest: '38-46 cm', length: '28-34 cm', weight: '4,5 a 7 kg', breeds: 'Shih Tzu, Poodle Toy, Spitz Alemão' },
  { size: 'G', neck: '30-36 cm', chest: '46-54 cm', length: '34-40 cm', weight: '7 a 11 kg', breeds: 'Lhasa Apso, Pug, Schnauzer' },
  { size: 'GG', neck: '36-44 cm', chest: '54-64 cm', length: '40-48 cm', weight: '11 a 18 kg', breeds: 'French Bulldog, Beagle, Cocker' },
  { size: 'XG', neck: '44-52 cm', chest: '64-76 cm', length: '48-58 cm', weight: '18 a 28 kg', breeds: 'Border Collie, Bull Terrier, Pitbull' },
  { size: 'EXG', neck: '52-60 cm', chest: '76-88 cm', length: '58-68 cm', weight: '28 a 40 kg', breeds: 'Golden Retriever, Labrador, Boxer' },
  { size: 'Gigante', neck: '60-70 cm', chest: '88-105 cm', length: '68-80 cm', weight: '40 a 65+ kg', breeds: 'Rottweiler, Bernese, São Bernardo, Dogue Alemão' }
];

export const TESTIMONIALS = [
  {
    name: 'Mariana Silveira',
    pet: 'Thor (Golden Retriever de 36kg)',
    rating: 5,
    location: 'São Paulo - SP',
    verified: 'Comprador verificado no Mercado Livre',
    date: 'Há 3 dias',
    text: 'Encontrar roupa para cachorro do porte do Thor era uma missão impossível! Ou ficava apertado no peito ou não passava na cabeça. Essa roupinha soft tamanho EXG serviu como uma luva, esquenta demais e a qualidade do tecido é impressionante!',
    product: 'Roupinha Soft Porte Grande e Gigante'
  },
  {
    name: 'Carlos Eduardo Mendes',
    pet: 'Paçoca (French Bulldog)',
    rating: 5,
    location: 'Mooca, São Paulo',
    verified: 'Retirou na Petz Mooca',
    date: 'Semana passada',
    text: 'Atendimento nota 10 pelo WhatsApp! Me orientaram certinho sobre as medidas do peitoral do Paçoca. Peguei o tamanho GG e fomos retirar pertinho da Petz Mooca. Ele não tira mais!',
    product: 'Moletom Pet Urban'
  },
  {
    name: 'Renata Albuquerque',
    pet: 'Pipoca (Corgi)',
    rating: 5,
    location: 'Campinas - SP',
    verified: 'Comprador verificado no Mercado Livre',
    date: 'Há 2 semanas',
    text: 'A capa de chuva amarela é simplesmente perfeita. O pelo dele continua 100% seco mesmo na chuva torrencial. O envio pelo Mercado Envios chegou no dia seguinte!',
    product: 'Capa de Chuva Impermeável'
  },
  {
    name: 'Juliana & Marcela',
    pet: 'Mimi & Frajola (Gatos)',
    rating: 5,
    location: 'Santo André - SP',
    verified: 'Seguidora @shoppinhoanimal',
    date: 'Há 1 semana',
    text: 'Conheci no Instagram @shoppinhoanimal e comprei a blusinha de fleece pros meus gatos. Eles amaram e dormem muito mais confortáveis nos dias frios!',
    product: 'Blusa Soft Fleece para Gatos'
  }
];
