
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 bg-koi-black border-y border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-koi-gold text-xs shadow-[0_0_10px_rgba(197,160,89,0.3)]"></i>
              ))}
            </div>
            <h3 className="text-[10px] font-bold text-koi-gold uppercase tracking-[0.5em] mb-4">Patron Stories</h3>
          </div>
        </ScrollReveal>

        <div className="relative h-72 md:h-64 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i}
              className={`absolute inset-0 transition-all duration-1000 transform flex flex-col items-center justify-center ${
                i === current ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-white mb-10 leading-tight max-w-4xl">
                "{t.text}"
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-koi-gold/30"></div>
                <p className="font-bold text-white uppercase tracking-[0.4em] text-[11px]">— {t.author}</p>
                <div className="w-12 h-[1px] bg-koi-gold/30"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {TESTIMONIALS.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrent(i)}
              className={`group relative h-1 transition-all duration-500 overflow-hidden rounded-full ${i === current ? 'w-16 bg-koi-gold' : 'w-8 bg-white/10 hover:bg-white/20'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            >
               {i === current && (
                 <div className="absolute inset-0 bg-white/30 animate-[progress_6s_linear_infinite]"></div>
               )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};