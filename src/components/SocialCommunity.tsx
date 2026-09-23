import React from 'react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ExternalLink, 
  Heart, 
  Sparkles, 
  Users, 
  Gift, 
  Camera,
  CheckCircle2
} from 'lucide-react';
import { STORE_LINKS } from '../data/links';

export const SocialCommunity: React.FC = () => {
  const communityPosts = [
    {
      author: '@thor_goldenboy',
      caption: 'Look do dia quentinho com meu soft @shoppinhoanimal! 🐾✨',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
      likes: '1.420',
      tag: 'Soft GG'
    },
    {
      author: '@belinha_frenchie',
      caption: 'Pronta pra passear na garoa sem molhar as orelhinhas com a capa amarela! 💛☔',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
      likes: '890',
      tag: 'Capa Chuva M'
    },
    {
      author: '@mimi_persa',
      caption: 'Quem disse que gato não usa roupa? Ficou super calminha e quentinha! 😻',
      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
      likes: '730',
      tag: 'Blusa Soft Felina'
    },
    {
      author: '@zeus_rottweiler',
      caption: 'Roupa pra cão gigante de verdade! Tamanho Gigante serviu impecável. 🐕‍🦺❄️',
      image: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=600&q=80',
      likes: '2.150',
      tag: 'Tamanho Gigante'
    }
  ];

  return (
    <section id="comunidade" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/40 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-600" />
            <span>Faça Parte da Nossa Família Pet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Siga Nossas Redes & Entre na <span className="text-pink-600">Nossa Comunidade</span>
          </h2>
          <p className="mt-2 text-stone-600 font-medium text-sm sm:text-base">
            Mais de 15.000 tutores apaixonados trocando fotos, concorrendo a sorteios mensais e aproveitando cupons exclusivos.
          </p>
        </div>

        {/* Dual Cards: Instagram Card & Facebook Group Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* INSTAGRAM CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 via-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-lg">
                      Instagram Oficial
                    </h3>
                    <p className="text-xs font-bold text-pink-600">@shoppinhoanimal</p>
                  </div>
                </div>
                <span className="bg-pink-50 text-pink-700 text-xs font-extrabold px-3 py-1 rounded-full border border-pink-200">
                  Fotos Diárias
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Acompanhe os clientes reais com as roupinhas, veja como caem no corpo dos pets antes de comprar, confira os lançamentos e marque o seu melhor amigo usando <strong>#ShoppinhoAnimal</strong> para aparecer no feed!
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <span className="font-extrabold text-stone-900 block text-sm">+10k</span>
                  <span className="text-[11px] text-stone-500">Seguidores</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <span className="font-extrabold text-stone-900 block text-sm">Diário</span>
                  <span className="text-[11px] text-stone-500">Stories & Dicas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <span className="font-extrabold text-stone-900 block text-sm">Sorteios</span>
                  <span className="text-[11px] text-stone-500">Todo Mês</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              {/* PRIMARY INSTAGRAM LINK */}
              <a
                href={STORE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-extrabold text-sm shadow-md shadow-pink-600/20 hover:shadow-lg transition-all group"
              >
                <Instagram className="w-4 h-4" />
                <span>SEGUIR NO INSTAGRAM @SHOPPINHOANIMAL</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* FACEBOOK GROUP CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-lg">
                      Grupo VIP no Facebook
                    </h3>
                    <p className="text-xs font-bold text-blue-600">Comunidade Amigos dos Pets</p>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-extrabold px-3 py-1 rounded-full border border-blue-200">
                  Grupo Ativo
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Nosso grupo exclusivo reúne donos de cães e gatos para tirar dúvidas sobre raças, compartilhar experiências com roupinhas e roubar cupons antecipados de promoções do Mercado Livre!
              </p>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cupons secretos de desconto para compras no Mercado Livre</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dicas veterinárias sobre proteção do frio e cuidados com articulações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Espaço para postar a foto do seu pet com as roupinhas</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              {/* PRIMARY FACEBOOK LINK */}
              <a
                href={STORE_LINKS.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all group"
              >
                <Facebook className="w-4 h-4" />
                <span>ENTRAR NO GRUPO DO FACEBOOK</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Community Customer Photo Feed Gallery */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
              <Camera className="w-5 h-5 text-orange-500" />
              <span>Pets Estilosos no Instagram #ShoppinhoAnimal</span>
            </h4>
            <a 
              href={STORE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1"
            >
              Ver perfil completo <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {communityPosts.map((post, idx) => (
              <a
                key={idx}
                href={STORE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200 block"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.author} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent p-3 flex flex-col justify-between text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="self-end bg-black/60 backdrop-blur-xs text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    {post.tag}
                  </span>
                  <div>
                    <span className="text-xs font-extrabold block">{post.author}</span>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{post.caption}</p>
                    <div className="flex items-center gap-1 text-[10px] text-pink-300 mt-1">
                      <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
                      <span>{post.likes} curtidas</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
