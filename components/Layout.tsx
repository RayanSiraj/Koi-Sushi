import React, { useState, useEffect } from 'react';
import { ORDERING_URL, HOURS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-koi-black/95 premium-blur py-3 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex-shrink-0 group cursor-pointer outline-none">
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-[0.1em] text-white">KOI<span className="text-koi-gold font-normal ml-2">|</span></h1>
            <p className="text-[10px] text-koi-gold/80 tracking-[0.4em] mt-1 uppercase">Sushi • Thai • Bar</p>
          </a>
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-white/80 hover:text-koi-gold transition-colors text-[11px] font-semibold uppercase tracking-[0.2em] outline-none">{link.name}</a>
            ))}
            <a href={ORDERING_URL} target="_blank" rel="noopener noreferrer" className="gold-border-gradient text-white px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.25em] hover:bg-koi-gold hover:text-koi-black transition-all outline-none">Order Online</a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 outline-none">
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-koi-black text-white pt-32 pb-12 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div><h2 className="text-4xl font-serif font-bold text-white mb-6">KOI</h2><p className="text-white/50 text-sm leading-loose max-w-xs mx-auto md:mx-0">A curated culinary destination where Japanese precision meets Thai vibrancy.</p></div>
          <div><h3 className="text-[10px] font-bold text-koi-gold mb-10 uppercase tracking-[0.3em]">Hours</h3><ul className="space-y-4 text-sm font-light"><li>Mon — Thu: {HOURS.Mon_Thu}</li><li>Fri: {HOURS.Fri}</li><li>Sat: {HOURS.Sat}</li><li>Sun: {HOURS.Sun}</li></ul></div>
          <div><h3 className="text-[10px] font-bold text-koi-gold mb-10 uppercase tracking-[0.3em]">Location</h3><p className="text-white/70 text-sm mb-4">80 Executive Way, Suite 102<br />Ponte Vedra Beach, FL 32082</p><p className="text-white/90 font-semibold text-lg">(904) 285-8631</p></div>
          <div><h3 className="text-[10px] font-bold text-koi-gold mb-10 uppercase tracking-[0.3em]">Newsletter</h3><input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent text-[10px] text-white py-2 border-b border-white/20 focus:outline-none tracking-widest" /></div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 tracking-widest uppercase"><p>© 2024 KOI SUSHI THAI BAR.</p></div>
      </div>
    </footer>
  );
};