import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const ReservationsAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the KOI Concierge. I am here to assist with your reservation. When would you like to join us?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    const newHistory = [...messages, userMsg];
    
    setMessages(newHistory);
    setInput('');
    setIsTyping(true);

    try {
      const responseText = await getGeminiResponse(newHistory);
      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    } catch (err) {
      console.error("Chat Error:", err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="reservations" className="py-32 bg-koi-black relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 pt-12">
            <ScrollReveal>
              <span className="text-koi-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Private Bookings</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight">Digital <br/>Concierge</h2>
              <p className="text-white/50 text-lg font-light leading-loose mb-12">
                Experience seamless table securement through our AI-integrated assistant. Simply state your desired date, time, and party size.
              </p>
            </ScrollReveal>
            
            <div className="space-y-12">
              <ScrollReveal delay={2} className="flex items-start space-x-6">
                <div className="text-koi-gold text-2xl pt-1">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Real-time Confirmation</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Your table is synchronized instantly with our floor management system.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3} className="flex items-start space-x-6">
                <div className="text-koi-gold text-2xl pt-1">
                  <i className="fas fa-concierge-bell"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Bespoke Requests</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Note any dietary preferences or seating desires directly in the chat.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={1}>
              <div className="bg-white/5 premium-blur border border-white/10 p-1 md:p-8 lg:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-koi-gold to-transparent opacity-30"></div>
                
                <div className="h-[550px] flex flex-col pt-4">
                  <div className="flex-1 overflow-y-auto mb-10 space-y-8 pr-4 scrollbar-hide" ref={scrollRef}>
                    {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2 block font-bold">
                            {m.role === 'user' ? 'Client' : 'Concierge'}
                          </span>
                          <div className={`px-0 py-1 text-base leading-relaxed ${m.role === 'user' ? 'text-koi-gold font-medium' : 'text-white/90 font-light'}`}>
                            {m.text}
                          </div>
                          <div className="h-[1px] w-8 bg-white/5 mt-4 inline-block"></div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex space-x-2 py-4 px-2 bg-white/5 rounded-full w-fit">
                          <div className="w-1.5 h-1.5 bg-koi-gold rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-koi-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-1.5 h-1.5 bg-koi-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-8 pb-4">
                    <div className="relative group">
                      <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="MESSAGE CONCIERGE..."
                        disabled={isTyping}
                        className="w-full bg-transparent text-white text-xs md:text-sm font-light tracking-[0.2em] py-5 px-4 focus:outline-none transition-all placeholder:text-white/20 border-b border-white/10 focus:border-koi-gold/50 disabled:opacity-50"
                      />
                      <button 
                        onClick={handleSend}
                        disabled={isTyping || !input.trim()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-koi-gold hover:text-white transition-all disabled:opacity-0"
                      >
                        <i className="fas fa-chevron-right text-lg"></i>
                      </button>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold">
                      <span>Secured Session</span>
                      <span>Ponte Vedra, FL</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};