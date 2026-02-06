import React from 'react';
import { ORDERING_URL } from '../constants.tsx';

export const Hero: React.FC = () => {
  const scrollToReservations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('reservations');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-koi-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&q=80&w=2000"
          src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Supermarket_12_preview.mp4"
        >
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-koi-black via-transparent to-koi-black/70"></div>
        <div className="absolute inset-0 bg-koi-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center md:text-left">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-6">
            <span className="inline-block text-koi-gold font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              Ponte Vedra • Jacksonville
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[0.9] mb-12 animate-fade-in opacity-0 drop-shadow-2xl" style={{ animationDelay: '0.4s' }}>
            Elevated <br />
            <span className="gold-gradient-text italic">Dining</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-14 leading-relaxed font-light max-w-xl animate-fade-in opacity-0 drop-shadow-md" style={{ animationDelay: '0.6s' }}>
            Where the precision of Japanese sushi meets the soul of Thai spices. A curated sensory experience in the heart of Ponte Vedra.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <a 
              href={ORDERING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-koi-gold text-koi-black px-12 py-5 font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-2xl flex items-center justify-center outline-none"
            >
              Order Online
            </a>
            <a 
              href="#reservations"
              onClick={scrollToReservations}
              className="border border-white/40 backdrop-blur-md text-white px-12 py-5 font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-koi-black transition-all flex items-center justify-center outline-none"
            >
              Reserve Table
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 lg:left-12 flex flex-col items-center space-y-4">
        <div className="h-24 w-[1px] bg-gradient-to-t from-koi-gold to-transparent"></div>
        <span className="text-[10px] text-koi-gold uppercase tracking-[0.4em] [writing-mode:vertical-lr]">Discover More</span>
      </div>
    </section>
  );
};