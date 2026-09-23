/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MercadoLivreHighlight } from './components/MercadoLivreHighlight';
import { ProductCatalog } from './components/ProductCatalog';
import { SizeCalculatorModal } from './components/SizeCalculatorModal';
import { StoreLocationMap } from './components/StoreLocationMap';
import { SocialCommunity } from './components/SocialCommunity';
import { ReviewsSection } from './components/ReviewsSection';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'item-initial-1',
      name: 'Roupinha Soft Cachorro Porte Grande e Gigante',
      size: 'EXG',
      color: 'Azul Marinho com Vermelho',
      price: 64.90,
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeCalculatorOpen, setIsSizeCalculatorOpen] = useState(false);

  const handleAddToCart = (productName: string, size: string, color: string, price: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === productName && item.size === size && item.color === color);
      if (existing) {
        return prev.map(item => item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}`,
          name: productName,
          size,
          color,
          price,
          quantity: 1
        }
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-orange-200 selection:text-orange-950">
      
      {/* Navigation Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)} 
        />

        {/* Highlight Section: Mercado Livre Porte Grande & Gigante Soft */}
        <MercadoLivreHighlight
          onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Product Catalog with Categories & Filters */}
        <ProductCatalog
          onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Store Location & Google Maps Spotlight (Petz Mooca) */}
        <StoreLocationMap />

        {/* Social Media & Community (Instagram @shoppinhoanimal & Facebook Group) */}
        <SocialCommunity />

        {/* Verified Customer Reviews & Trust Badges */}
        <ReviewsSection />
      </main>

      {/* Footer with all 5 Channels Represented */}
      <Footer 
        onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)} 
      />

      {/* Floating Sticky WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Size Calculator & Measurement Guide Modal */}
      <SizeCalculatorModal
        isOpen={isSizeCalculatorOpen}
        onClose={() => setIsSizeCalculatorOpen(false)}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
