import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { practiceAreas, insights, attorneys } from '../data';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Architecture
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Office
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2342&auto=format&fit=crop"  // Abstract/City
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section - Full Screen Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${slide}")` }}
          >
            <div className="absolute inset-0 bg-dark/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/20 to-transparent"></div>
          </div>
        ))}

        {/* Glass Content Panel */}
        <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center">
          <div className="glass-panel p-10 md:p-16 max-w-[700px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <p className="font-sans text-white tracking-[0.2em] text-sm mb-6 uppercase font-medium">Wolff Law</p>
            <h1 className="font-serif text-5xl md:text-[5.5rem] leading-[1.1] text-white mb-2">
              STRATEGY
            </h1>
            <h2 className="font-serif text-2xl md:text-[2.5rem] text-white/90 italic font-light mb-8">
              For a Complex Business World
            </h2>
            <p className="text-light font-sans font-light text-lg leading-relaxed mb-10 border-l border-brand-blue pl-6">
              Wolff Law delivers sophisticated legal counsel to market leaders, innovators, and investors. We don't just anticipate the future; we shape it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium"
                >
                  Schedule a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/areas-of-practice"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 rounded-full text-white hover:border-brand-blue hover:text-white transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium"
                >
                  Explore Expertise 
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In Focus Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-dark relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden group">
             <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
              alt="M&A Focus"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" 
             />
          </div>

          {/* Right Content */}
          <div className="lg:pl-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-blue"></div>
              <span className="text-brand-blue uppercase tracking-[0.2em] text-sm font-medium">In Focus</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Unlocking Value <br/><span className="text-brand-gray italic">in M&A</span>
            </h3>
            <p className="text-light text-lg font-light leading-relaxed mb-10 max-w-md">
              Strategic counsel for developers, investors, and REITs in complex acquisitions, zoning, and financing. We see the opportunities others miss.
            </p>
            <Link to="/insights/unlocking-value-in-ma" className="inline-flex items-center gap-2 text-white hover:text-brand-blue transition-colors border-b border-white/30 hover:border-brand-blue pb-1 uppercase tracking-widest text-sm">
              Read Insight <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 bg-secondary border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
           <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Ready to protect your business? Let’s talk.</h3>
           <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* Practice Areas Strip */}
      <section className="py-24 px-6 md:px-10 bg-navy">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {practiceAreas.slice(0, 3).map((area) => (
               <div key={area.id} className="glass-panel p-10 group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full relative overflow-hidden">
                  {/* Optional background image overlay for glass effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundImage: `url(${area.image})`, backgroundSize: 'cover' }}></div>
                  
                  <h4 className="text-3xl font-serif text-white mb-4 group-hover:text-brand-blue transition-colors relative z-10">{area.title}</h4>
                  <p className="text-light font-light mb-8 flex-grow relative z-10">{area.subtitle}</p>
                  <div className="mt-auto relative z-10">
                     <Link to={`/areas-of-practice/${area.slug}`} className="text-xs uppercase tracking-widest text-white/60 group-hover:text-white flex items-center gap-2 transition-colors">
                       Learn More <ArrowRight className="w-3 h-3" />
                     </Link>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Post-Practice Areas CTA Bar */}
      <section className="py-16 bg-brand-blue/10 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h3 className="text-2xl font-serif text-white">Need guidance in one of these areas?</h3>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-navy transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium whitespace-nowrap">
               Contact Wolff Law
            </Link>
        </div>
      </section>

      {/* Insights Preview Grid */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-dark">
         <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 text-center">
               <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Insights</h3>
               <p className="text-brand-gray font-serif italic text-2xl">Perspectives on law, business, and strategy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {insights.slice(0, 3).map((post) => (
                 <Link to={`/insights/${post.slug}`} key={post.id} className="group block">
                    <div className="aspect-[16/9] bg-secondary mb-6 overflow-hidden rounded-sm">
                       <img 
                         src={post.image} 
                         alt={post.title}
                         className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                       />
                    </div>
                    <div className="flex gap-4 text-[10px] uppercase tracking-widest text-brand-gray mb-3">
                       <span>{post.author}</span>
                       <span className="text-brand-blue">•</span>
                       <span>{post.date}</span>
                    </div>
                    <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-brand-blue transition-colors leading-snug">{post.title}</h4>
                    <p className="text-light/60 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="inline-block text-xs text-white/50 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-0.5">Read Article</span>
                 </Link>
               ))}
            </div>
            
            <div className="mt-16 text-center">
               <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-brand-blue uppercase tracking-widest hover:text-white transition-colors">
                 View All Articles <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </div>
      </section>

      {/* Team Preview Strip */}
      <section className="py-24 px-6 md:px-10 bg-secondary border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {attorneys.slice(0, 4).map((attorney) => (
                <div key={attorney.id} className="text-center group">
                   <div className="aspect-[3/4] overflow-hidden rounded-full mx-auto mb-6 w-32 md:w-48 border border-white/10 group-hover:border-brand-blue transition-colors">
                      <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   </div>
                   <h4 className="text-xl font-serif text-white mb-1">{attorney.name}</h4>
                   <p className="text-xs text-brand-blue uppercase tracking-widest">{attorney.role}</p>
                </div>
             ))}
          </div>
          <div className="mt-12 text-center">
             <Link to="/team" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white uppercase tracking-widest transition-colors">
               Meet the Full Team <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;