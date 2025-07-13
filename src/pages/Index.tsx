
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Menu } from '@/components/Menu';
import { Reviews } from '@/components/Reviews';
import { Reservation } from '@/components/Reservation';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-amber-50">
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Reservation />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
