import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight } from 'lucide-react';
import { practiceAreas } from '../data';

const PracticeAreas: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-dark">
       {/* Hero Section */}
       <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent"></div>
          </div>

          {/* Floating Glass Panel */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="glass-panel p-8 md:p-12 max-w-[700px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-4">
                 AREAS OF PRACTICE
               </h1>
               <h2 className="font-sans text-light/90 text-lg font-light tracking-wide border-l border-brand-blue pl-6 mb-8">
                 Strategic Counsel Across Business, Litigation, and Real Estate
               </h2>
               <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                   Discuss Your Legal Strategy <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
       </div>

       {/* Accordion Section */}
       <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="space-y-6">
             {practiceAreas.map((area) => (
               <div key={area.id} className="glass-panel overflow-hidden transition-all duration-500 group">
                  {/* Header / Trigger */}
                  <button 
                    onClick={() => toggleAccordion(area.id)}
                    className="w-full flex items-center justify-between p-8 md:p-10 text-left hover:bg-white/5 transition-colors"
                  >
                     <div className="flex items-center gap-6">
                        <span className={`hidden md:block text-xs uppercase tracking-widest transition-colors ${openId === area.id ? 'text-brand-blue' : 'text-white/40'}`}>
                           0{practiceAreas.indexOf(area) + 1}
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif text-white group-hover:text-brand-blue transition-colors">
                           {area.title}
                        </h3>
                     </div>
                     <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${openId === area.id ? 'bg-brand-blue border-brand-blue rotate-180' : ''}`}>
                        {openId === area.id ? <Minus size={18} /> : <Plus size={18} />}
                     </div>
                  </button>

                  {/* Content / Body */}
                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                       openId === area.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                     <div className="p-8 md:p-10 md:pl-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                           <p className="text-light/80 font-light leading-relaxed mb-8">
                              {area.description}
                           </p>
                           <Link 
                             to={`/areas-of-practice/${area.slug}`}
                             className="inline-flex items-center gap-2 text-sm text-brand-blue uppercase tracking-widest hover:text-white transition-colors"
                           >
                              Explore Practice <ChevronRight size={14} />
                           </Link>
                        </div>
                        <div className="md:col-span-2">
                           <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Capabilities</h4>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                              {area.subPractices.map((sub, index) => (
                                 <div key={index} className="flex items-center gap-3 text-white/80 font-light hover:text-white transition-colors cursor-default group/item">
                                    <ChevronRight size={12} className="text-brand-blue opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    <span>{sub}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
       </div>

       {/* Bottom CTA */}
       <div className="py-24 bg-secondary border-t border-white/5 text-center">
          <div className="max-w-[800px] mx-auto px-6">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Complex challenges require sophisticated solutions.</h3>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                  Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
       </div>
    </div>
  );
};

export default PracticeAreas;