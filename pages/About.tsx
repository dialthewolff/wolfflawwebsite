import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
       {/* Hero Section */}
       <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2370&auto=format&fit=crop")'}}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent"></div>
          </div>

          {/* Floating Glass Panel */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="glass-panel p-8 md:p-12 max-w-[650px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-4">
                 ABOUT THE FIRM
               </h1>
               <h2 className="font-sans text-light/90 text-lg font-light tracking-wide border-l border-brand-blue pl-6 mb-8">
                 Who We Are
               </h2>
               <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                   Discuss Your Legal Strategy <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
       </div>

       {/* 3 Column Section */}
       <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
             <div className="space-y-6">
                <h3 className="text-3xl font-serif text-white border-b border-brand-blue/30 pb-4 inline-block">Our Mission</h3>
                <p className="text-light leading-relaxed font-light text-lg">
                  To provide unwavering legal representation that empowers our clients to navigate the complexities of the modern business landscape with confidence. We are dedicated to excellence, integrity, and the relentless pursuit of our clients' success.
                </p>
             </div>
             <div className="space-y-6">
                <h3 className="text-3xl font-serif text-white border-b border-brand-blue/30 pb-4 inline-block">Our Values</h3>
                <p className="text-light leading-relaxed font-light text-lg">
                  We believe in a proactive approach to law. We don't simply react to problems; we anticipate them. Our firm is built on a foundation of rigorous analysis, creative strategy, and a deep understanding of the industries we serve.
                </p>
             </div>
             <div className="space-y-6">
                <h3 className="text-3xl font-serif text-white border-b border-brand-blue/30 pb-4 inline-block">Our History</h3>
                <p className="text-light leading-relaxed font-light text-lg">
                  Founded three decades ago, Wolff Law has evolved from a boutique litigation shop into a full-service powerhouse. Our legacy is written in the landmark cases we've won and the transformative deals we've closed for our partners.
                </p>
             </div>
          </div>

          {/* Philosophy Block */}
          <div className="mt-32 glass-panel p-12 md:p-20 rounded-3xl">
             <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-4xl font-serif text-white mb-8">Our Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                   <div>
                      <div className="text-brand-blue text-xl font-serif italic mb-2">Innovation</div>
                      <p className="text-sm text-light/70">Leveraging technology and novel legal theories to gain the upper hand.</p>
                   </div>
                   <div>
                      <div className="text-brand-blue text-xl font-serif italic mb-2">Precision</div>
                      <p className="text-sm text-light/70">Meticulous attention to detail in every contract, brief, and negotiation.</p>
                   </div>
                   <div>
                      <div className="text-brand-blue text-xl font-serif italic mb-2">Client Focus</div>
                      <p className="text-sm text-light/70">Your objectives are our north star. We align our strategy with your business goals.</p>
                   </div>
                </div>
             </div>
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

export default About;