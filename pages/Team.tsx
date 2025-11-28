import React from 'react';
import { Link } from 'react-router-dom';
import { attorneys } from '../data';
import { ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark pb-0">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent"></div>
          </div>

          {/* Floating Glass Panel */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="glass-panel p-8 md:p-12 max-w-[650px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-4">
                 OUR TEAM
               </h1>
               <h2 className="font-sans text-light/90 text-lg font-light tracking-wide border-l border-brand-blue pl-6 mb-8">
                 Strategic partners in your most complex matters.
               </h2>
               <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                   Discuss Your Legal Strategy <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
       </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {attorneys.map((member) => (
            <Link to={`/attorneys/${member.id}`} key={member.id} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-secondary relative mb-6">
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-sm uppercase tracking-widest border-b border-white pb-1">View Profile</span>
                 </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-serif text-white group-hover:text-brand-blue transition-colors">{member.name}</h3>
                <p className="text-brand-gray text-sm uppercase tracking-widest mt-2">{member.role}</p>
              </div>
            </Link>
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

export default Team;