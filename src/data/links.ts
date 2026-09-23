/**
 * Official Store Links and Contact Channels
 */

export const STORE_LINKS = {
  instagram: 'https://www.instagram.com/shoppinhoanimal/?hl=es',
  facebookGroup: 'https://www.facebook.com/groups/981418952252907/',
  whatsappNumber: '11999470743',
  whatsappRawFormatted: '(11) 99947-0743',
  whatsappLink: 'https://wa.me/5511999470743?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Shoppinho%20Animal%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20roupinhas%20pet!',
  googleMaps: 'https://www.google.com/maps/place/Petz+Mooca/@-23.5557905,-46.6349571,14z/data=!4m10!1m2!2m1!1sroupas+de+pets+!3m6!1s0x94ce5eab61242db1:0x79d30d1a10665cf7!8m2!3d-23.5674183!4d-46.5921144!15sCg5yb3VwYXMgZGUgcGV0c1oQIg5yb3VwYXMgZGUgcGV0c2gBkgEJcGV0X3N0b3Jl4AEA!16s%2Fg%2F11c3sqkkf8?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D',
  mercadoLivreProduct: 'https://produto.mercadolivre.com.br/MLB-3760475927-roupinha-para-cachorro-roupa-pet-soft-porte-grande-gigante-_JM?searchVariation=183399802673#is_advertising=true&searchVariation=183399802673&backend_model=search-backend&be_origin=backend&position=3&search_layout=grid&type=pad&tracking_id=6ecb6f5a-b0e8-4fe2-813f-0fd44a36ed3b&ad_domain=VQCATCORE_LST&ad_position=3&ad_click_id=NGU5N2M3ZTYtZGM3Ny00M2JiLWFkZmItZmIyMmE0MDUxNTgz',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.89736855146!2d-46.612713!3d-23.5674183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eab61242db1%3A0x79d30d1a10665cf7!2sPetz%20Mooca!5e0!3m2!1spt-BR!2sbr!4v1711120000000!5m2!1spt-BR!2sbr'
};

export const getWhatsAppCustomLink = (message: string) => {
  return `https://wa.me/5511999470743?text=${encodeURIComponent(message)}`;
};
