import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, Reservation } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const ReservationsAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the KOI Concierge. I am here to assist with your reservation. When would you like to join us?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);
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
      const response = await getGeminiResponse(newHistory);
      
      if (response.functionCalls) {
        for (const call of response.functionCalls) {
          if (call.name === 'bookReservation') {
            const args = call.args as any;
            const reservation: Reservation = {
              id: Math.random().toString(36).substr(2, 9),
              name: args.name,
              date: args.date,
              time: args.time,
              partySize: args.partySize,
              notes: args.notes
            };
            
            setConfirmedReservation(reservation);
            setMessages(prev => [...prev, { 
              role: 'model', 
              text: `Perfect. I've secured a table for ${args.partySize} under the name ${args.name} for ${args.date} at ${args.time}. We look forward to seeing you!`, 
              timestamp: new Date() 
            }]);
          }
        }
      } else if (response.text) {
        setMessages(prev => [...prev, { role: 'model', text: response.text, timestamp: new Date() }]);
      }
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, I'm having trouble processing that. Please call us at (904) 285-8631.", timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (confirmedReservation) {
    return (
      <section id="reservations" className="py-32 bg-koi-black relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-white/[0.02] premium-blur border border-koi-gold/30 p-12 md:p-20 text-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-koi-gold"></div>
            <div className="mb-12">
              <div className="w-20 h-20 bg-koi-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-koi-gold/20">
                <i className="fas fa-check text-koi-gold text-3xl"></i>
              </div>
              <span className="text-koi-gold font-bold tracking-[0.5em] uppercase text-[11px] mb-4 block">Reservation Confirmed</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">See you soon, <br/><span className="italic gold-gradient-text">{confirmedReservation.name}</span></h2>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12 text-left border-y border-white/5 py-12">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Date</p>
                <p className="text-white text-lg font-light">{confirmedReservation.date}</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Time</p>
                <p className="text-white text-lg font-light">{confirmedReservation.time}</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Guests</p>
                <p className="text-white text-lg font-light">{confirmedReservation.partySize} People</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Location</p>
                <p className="text-white text-lg font-light italic">Ponte Vedra Beach</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-white/50 text-sm font-light leading-relaxed italic">
                A confirmation has been sent to your digital wallet. <br/>
                Need to change something? Call us at (904) 285-8631.
              </p>
              <button 
                onClick={() => setConfirmedReservation(null)}
                className="text-koi-gold text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-all mt-8"
              >
                Back to Concierge
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

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