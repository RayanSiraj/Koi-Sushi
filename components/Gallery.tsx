
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const IMAGES = [
  // Large Interior / Atmosphere
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
  // Dining Vibe
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
  // Liquid Art
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
  // Restaurant Ambiance - Switched to a highly reliable high-end restaurant interior photo
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200'
];

// Fallback images in case Unsplash links fail
const FALLBACKS = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
];

export const Gallery: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    (e.target as HTMLImageElement).src = FALLBACKS[index] || FALLBACKS[0];
  };

  return (
    <section id="gallery" className="py-32 bg-koi-black border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-koi-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Visual Composition</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Atmosphere</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Atmosphere */}
          <ScrollReveal className="md:col-span-2 h-[600px] overflow-hidden group relative" delay={1}>
            <img 
              src={IMAGES[0]} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Koi Interior Atmosphere" 
              onError={(e) => handleImageError(e, 0)}
            />
            <div className="absolute inset-0 bg-koi-black/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] text-koi-gold tracking-[0.3em] uppercase font-bold">The Main Hall</p>
            </div>
          </ScrollReveal>
          
          <div className="md:col-span-1 flex flex-col gap-4">
            {/* Dining Vibe */}
            <ScrollReveal className="h-[292px] overflow-hidden group relative" delay={2}>
              <img 
                src={IMAGES[1]} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Sushi Dining Vibe" 
                onError={(e) => handleImageError(e, 1)}
              />
              <div className="absolute inset-0 bg-koi-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[9px] text-white tracking-[0.2em] uppercase font-semibold">Dining Vibe</p>
              </div>
            </ScrollReveal>
            {/* Liquid Art */}
            <ScrollReveal className="h-[292px] overflow-hidden group relative" delay={3}>
              <img 
                src={IMAGES[2]} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Signature Cocktail Detail" 
                onError={(e) => handleImageError(e, 2)}
              />
              <div className="absolute inset-0 bg-koi-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[9px] text-white tracking-[0.2em] uppercase font-semibold">Liquid Art</p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Restaurant Ambiance */}
          <ScrollReveal className="md:col-span-1 h-[600px] overflow-hidden group relative" delay={4}>
            <img 
              src={IMAGES[3]} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Restaurant Ambiance" 
              onError={(e) => handleImageError(e, 3)}
            />
            <div className="absolute inset-0 bg-koi-black/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] text-koi-gold tracking-[0.3em] uppercase font-bold">Ambiance</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
