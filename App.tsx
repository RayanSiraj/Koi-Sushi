import React from 'react';
import { Navbar, Footer } from './components/Layout.tsx';
import { Hero } from './components/Hero.tsx';
import { Menu } from './components/Menu.tsx';
import { ReservationsAI } from './components/ReservationsAI.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ORDERING_URL } from './constants.tsx';
import { ScrollReveal } from './components/ScrollReveal.tsx';

const App: React.FC = () => {
  return (
    <div className="relative bg-koi-black selection:bg-koi-gold selection:text-koi-black">
      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <a 
          href={ORDERING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-40 hidden md:flex items-center space-x-4 bg-koi-black/80 premium-blur text-white px-8 py-4 border border-white/20 hover:bg-koi-gold hover:text-koi-black transition-all hover:-translate-y-1 shadow-2xl outline-none"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Quick Order</span>
          <i className="fas fa-utensils text-sm"></i>
        </a>

        <section id="philosophy" className="py-40 md:py-64 bg-koi-black relative scroll-mt-24">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.01] to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <ScrollReveal>
                <div className="space-y-10">
                  <span className="text-koi-gold font-bold tracking-[0.5em] uppercase text-[11px] mb-4 block">The Art of the Meal</span>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight">Crafted for the <br /> <span className="italic gold-gradient-text">Discerning</span> Palette.</h2>
                  <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-xl">
                    At KOI, we believe dining is a curated performance. Our master chefs combine the ancient precision of Edomae-style sushi with the vibrant, bold spice profiles of royal Thai cuisine. 
                  </p>
                  <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg italic">
                    Every ingredient is selected with obsessive care, ensuring a sensory journey that honors tradition while embracing modern luxury.
                  </p>
                  <div className="h-[2px] w-24 bg-koi-gold mt-12"></div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className="relative aspect-square overflow-hidden border border-white/10 p-6 bg-white/[0.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Master Chef Curation" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-koi-black/40 to-transparent"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Menu />
        <ReservationsAI />
        <Testimonials />
        <Gallery />

        <section className="py-64 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-32">
              <ScrollReveal delay={1} className="text-center group">
                <div className="w-px h-24 bg-gradient-to-b from-koi-gold to-transparent mx-auto mb-14 opacity-50 group-hover:h-32 transition-all duration-700"></div>
                <h3 className="text-[14px] font-bold text-koi-gold uppercase tracking-[0.6em] mb-10">Pristine Source</h3>
                <p className="text-white/80 text-xl md:text-2xl font-serif italic leading-relaxed">Daily arrivals of sustainably-sourced bluefin, uni, and seasonal selections from global waters.</p>
              </ScrollReveal>
              <ScrollReveal delay={2} className="text-center group">
                <div className="w-px h-24 bg-gradient-to-b from-koi-gold to-transparent mx-auto mb-14 opacity-50 group-hover:h-32 transition-all duration-700"></div>
                <h3 className="text-[14px] font-bold text-koi-gold uppercase tracking-[0.6em] mb-10">Royal Heritage</h3>
                <p className="text-white/80 text-xl md:text-2xl font-serif italic leading-relaxed">Hand-ground curry pastes and heritage herbs that define the complexities of Thai gastronomy.</p>
              </ScrollReveal>
              <ScrollReveal delay={3} className="text-center group">
                <div className="w-px h-24 bg-gradient-to-b from-koi-gold to-transparent mx-auto mb-14 opacity-50 group-hover:h-32 transition-all duration-700"></div>
                <h3 className="text-[14px] font-bold text-koi-gold uppercase tracking-[0.6em] mb-10">Bespoke Bar</h3>
                <p className="text-white/80 text-xl md:text-2xl font-serif italic leading-relaxed">A refined beverage program featuring rare Japanese whiskies and artisanal botanical infusions.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen w-full bg-neutral-900 overflow-hidden flex items-center justify-center py-32">
          <img 
            src="https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?auto=format&fit=crop&q=80&w=2000" 
            alt="Ponte Vedra Coastal Vibe" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-koi-black via-transparent to-koi-black pointer-events-none"></div>
          
          <div className="relative z-10 text-center px-6 w-full">
             <ScrollReveal>
                <div className="bg-koi-black/90 premium-blur border border-white/10 p-12 md:p-24 lg:p-32 text-center max-w-5xl mx-auto shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                    <span className="text-koi-gold font-bold tracking-[0.7em] uppercase text-[11px] mb-10 block">The Destination</span>
                    <h3 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-12 leading-tight font-bold">Elevated <br /> <span className="italic gold-gradient-text">Atmosphere</span></h3>
                    <div className="w-20 h-0.5 bg-koi-gold/50 mx-auto mb-12"></div>
                    <p className="text-white/90 text-lg md:text-xl mb-16 tracking-[0.3em] font-light uppercase">80 Executive Way, Suite 102 • Ponte Vedra Beach, FL</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                      <a href="#reservations" className="w-full md:w-auto bg-white text-koi-black px-20 py-6 font-bold text-[12px] uppercase tracking-[0.5em] hover:bg-koi-gold hover:text-white transition-all shadow-2xl flex items-center justify-center">Request Table</a>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=Koi+Sushi+Thai+Bar+Ponte+Vedra" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto border border-white/20 text-white px-20 py-6 font-bold text-[12px] uppercase tracking-[0.5em] hover:bg-white hover:text-koi-black transition-all flex items-center justify-center backdrop-blur-sm">Directions</a>
                    </div>
                </div>
             </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;