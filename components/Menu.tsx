import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, ORDERING_URL } from '../constants';
import { MenuCategory } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>(MenuCategory.FEATURED);

  const categories = Object.values(MenuCategory);
  
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="menu" className="pt-32 pb-40 bg-koi-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <span className="text-koi-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Culinary Arts</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                Menu <span className="gold-gradient-text italic font-normal ml-2">Selections</span>
              </h2>
            </div>
            
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 outline-none ${
                      activeTab === cat 
                      ? 'text-koi-gold' 
                      : 'text-white/30 hover:text-white/70'
                    }`}
                  >
                    {cat}
                    {activeTab === cat && (
                      <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-koi-gold animate-fade-in shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 mt-16">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={(idx % 3) + 1}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-neutral-900 border border-white/5 shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    {item.popular && (
                      <div className="absolute top-6 right-6 bg-koi-gold text-koi-black px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] z-10 shadow-lg">
                        Signature
                      </div>
                    )}
                    <div className="absolute inset-0 bg-koi-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-2xl font-serif text-white group-hover:text-koi-gold transition-colors tracking-wide font-semibold">{item.name}</h3>
                      <span className="text-koi-gold font-serif text-2xl font-medium">{item.price}</span>
                    </div>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-6 italic min-h-[3rem]">
                      {item.description}
                    </p>
                    <div className="h-[1px] w-full bg-white/10 group-hover:bg-koi-gold/60 transition-colors"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/30 text-lg font-light tracking-widest uppercase">Coming Soon to our {activeTab} collection.</p>
            </div>
          )}
        </div>

        <ScrollReveal>
          <div className="mt-40 text-center">
            <a 
              href={ORDERING_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-8 py-5 border border-white/10 px-16 hover:border-koi-gold transition-all duration-500 bg-white/[0.02] premium-blur shadow-2xl"
            >
              <span className="text-white text-[11px] font-bold uppercase tracking-[0.5em] group-hover:text-koi-gold transition-colors">Order for Collection</span>
              <div className="w-10 h-[1px] bg-koi-gold group-hover:w-16 transition-all"></div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};