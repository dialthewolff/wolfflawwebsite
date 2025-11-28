import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { insights } from '../data';

const Insights: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
       {/* Hero Section - Reduced height to match Team page scale, but keeping Glass aesthetic */}
       <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent"></div>
          </div>

          {/* Floating Glass Panel */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="glass-panel p-8 md:p-12 max-w-[650px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-4">
                 INSIGHTS
               </h1>
               <h2 className="font-sans text-light/90 text-lg font-light tracking-wide border-l border-brand-blue pl-6 mb-8">
                 Perspectives on law, business, and strategy.
               </h2>
               <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                   Discuss Your Legal Strategy <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
       </div>

       {/* Content Section */}
       <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
         <div className="space-y-10">
           {insights.map((insight) => (
             <article key={insight.id} className="glass-panel p-0 overflow-hidden group grid grid-cols-1 md:grid-cols-12 gap-0 transition-transform duration-500 hover:-translate-y-1">
               <div className="md:col-span-5 aspect-video md:aspect-auto overflow-hidden bg-secondary relative min-h-[300px]">
                 <Link to={`/insights/${insight.slug}`} className="absolute inset-0">
                   <img 
                     src={insight.image} 
                     alt={insight.title} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                   />
                 </Link>
               </div>

               <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-brand-gray mb-4">
                     <span className="text-brand-blue font-medium">{insight.category}</span>
                     <span>•</span>
                     <span>{insight.date}</span>
                  </div>
                  <Link to={`/insights/${insight.slug}`}>
                     <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-brand-blue transition-colors leading-tight">{insight.title}</h2>
                  </Link>
                  <p className="text-light/70 font-light leading-relaxed mb-8 line-clamp-3">{insight.excerpt}</p>
                  <div className="mt-auto">
                     <Link to={`/insights/${insight.slug}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-brand-blue transition-colors group/link">
                       Read Article <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
             </article>
           ))}
         </div>
       </div>

       {/* Bottom CTA */}
       <div className="py-24 bg-secondary border-t border-white/5 text-center">
            <div className="max-w-[800px] mx-auto px-6">
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Need strategic counsel? Contact Wolff Law today.</h3>
                <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                    Schedule a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Insights;