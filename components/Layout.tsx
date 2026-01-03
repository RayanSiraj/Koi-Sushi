import React, { useState, useEffect } from 'react';
import { ORDERING_URL, HOURS } from '../constants.tsx';

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
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex-shrink-0 group cursor-pointer outline-none"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-[0.1em] text-white">
              KOI<span className="text-koi-gold font-normal ml-2">|</span>
            </h1>
            <p className="text-[10px] text-koi-gold/80 tracking-[0.4em] mt-1 uppercase">Sushi • Thai • Bar</p>
          </a>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white/80 hover:text-koi-gold transition-colors text-[11px] font-semibold uppercase tracking-[0.2em] outline-none"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={ORDERING_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="gold-border-gradient text-white px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.25em] hover:bg-koi-gold hover:text-koi-black transition-all outline-none"
            >
              Order Online
            </a>
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

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-koi-black z-[60] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white text-4xl font-light outline-none">&times;</button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-white text-3xl font-serif hover:text-koi-gold transition-colors outline-none"
          >
            {link.name}
          </a>
        ))}
        <a 
          href={ORDERING_URL} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-koi-gold text-koi-black px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest outline-none"
        >
          Order Online
        </a>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-koi-black text-white pt-32 pb-12 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">KOI</h2>
            <p className="text-white/50 text-sm leading-loose max-w-xs mb-10">
              A curated culinary destination where Japanese precision meets Thai vibrancy. Established in Ponte Vedra to serve those who appreciate the art of the meal.
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-koi-gold transition-colors text-xl">
                 <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-koi-gold transition-colors text-xl">
                 <i className="fab fa-facebook-square"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-koi-gold mb-10 uppercase tracking-[0.3em]">Hours of Service</h3>
            <ul className="space-y-5 text-sm font-light">
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/40">Mon — Thu</span> <span className="text-white/90">{HOURS.Mon_Thu}</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/40">Friday</span> <span className="text-white/90">{HOURS.Fri}</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/40">Saturday</span> <span className="text-white/90">{HOURS.Sat}</span></li>
              <li className="flex justify-between pb-2"><span className="text-white/40">Sunday</span> <span className="text-white/90">{HOURS.Sun}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-koi-gold mb-10 uppercase tracking-[0.3em]">The Location</h3>
            <ul className="space-y-6 text-sm font-light leading-relaxed">
              <li className="flex items-start text-white/70">
                80 Executive Way, Suite 102<br />Ponte Vedra Beach, FL 32082
              </li>
              <li className="text-white/90 font-semibold tracking-wider text-lg">
                (904) 285-8631
              </li>
              <li className="text-koi-gold hover:underline cursor-pointer">
                info@koiofjax.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-koi-gold mb-10 uppercase tracking-[0.3em]">Join The Inner Circle</h3>
            <p className="text-white/50 text-xs mb-8 leading-relaxed italic">Receive invitations to seasonal tasting events and chef's specials.</p>
            <form className="relative border-b border-white/20 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent text-[10px] text-white py-2 focus:outline-none placeholder:text-white/20 tracking-widest"
              />
              <button className="absolute right-0 top-1 text-koi-gold hover:text-white transition-colors" type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
          <p>© 2024 KOI SUSHI THAI BAR. DESIGNED FOR EXCELLENCE.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="javascript:void(0)" className="hover:text-white">Privacy</a>
            <a href="javascript:void(0)" className="hover:text-white">Cookies</a>
            <a href="javascript:void(0)" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};