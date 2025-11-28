import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { practiceAreas, insights } from '../data';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

const PracticeAreaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find(p => p.slug === slug);
  
  // Find relevant insights (fallback to random if no direct match for demo)
  const relatedInsights = insights.filter(i => 
    i.category.toLowerCase() === area?.title.toLowerCase() || 
    i.category.includes(area?.title.split(' ')[0] || '')
  ).slice(0, 3);

  // Fallback insights if none match perfectly
  const displayInsights = relatedInsights.length > 0 ? relatedInsights : insights.slice(0, 2);

  if (!area) {
    return <div className="min-h-screen flex items-center justify-center text-white">Practice Area not found</div>;
  }

  return (
    <div className="min-h-screen bg-dark">
       {/* Hero Section */}
       <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${area.image})` }}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
             <div className="glass-panel p-8 md:p-12 max-w-[800px] animate-in fade-in slide-in-from-left-8 duration-1000">
                <Link to="/areas-of-practice" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white mb-8 transition-colors">
                   <ArrowLeft size={12} /> Back to Overview
                </Link>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{area.title}</h1>
                <p className="text-lg text-light/90 font-light leading-relaxed border-l border-brand-blue pl-6 mb-8">
                   {area.subtitle}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                   Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
       </div>

       {/* Overview Section */}
       <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-sm uppercase tracking-[0.2em] text-brand-blue mb-6">Overview</h2>
             <div className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8">
                {area.description}
             </div>
             <p className="text-light/70 font-light text-lg leading-relaxed max-w-2xl mx-auto">
                Our team combines legal excellence with deep industry knowledge to drive your business forward. Whether navigating regulatory hurdles or structuring complex deals, we are your strategic partners.
             </p>
          </div>
       </div>

       {/* Sub-Practice Grid */}
       <div className="bg-secondary py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
             <h3 className="text-3xl font-serif text-white mb-12">Key Capabilities</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.subPractices.map((sub, index) => (
                   <div key={index} className="glass-panel p-8 hover:bg-white/5 transition-colors group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                         <CheckCircle size={18} />
                      </div>
                      <h4 className="text-xl font-serif text-white mb-3">{sub}</h4>
                      <p className="text-light/50 text-sm font-light leading-relaxed">
                         Specialized counsel tailored to the unique demands of {sub.toLowerCase()}.
                      </p>
                      <div className="mt-6 pt-6 border-t border-white/5 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowRight size={16} className="text-white" />
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>

       {/* Insights Section */}
       <div className="py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
             <div className="flex justify-between items-end mb-12">
                <h3 className="text-3xl font-serif text-white">Related Insights</h3>
                <Link to="/insights" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                   View All <ArrowRight size={12} />
                </Link>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {displayInsights.map(insight => (
                   <Link to={`/insights/${insight.slug}`} key={insight.id} className="group block glass-panel p-0 overflow-hidden hover:-translate-y-1 transition-transform duration-500">
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                         <div className="h-48 md:h-auto relative">
                            <img 
                               src={insight.image} 
                               alt={insight.title} 
                               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                            />
                         </div>
                         <div className="p-8 flex flex-col justify-center">
                            <div className="text-[10px] uppercase tracking-widest text-brand-blue mb-3">{insight.date}</div>
                            <h4 className="text-xl font-serif text-white mb-3 group-hover:text-brand-blue transition-colors">{insight.title}</h4>
                            <p className="text-light/60 text-sm line-clamp-2 mb-4">{insight.excerpt}</p>
                            <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                               Read Article <ArrowRight size={12} />
                            </span>
                         </div>
                      </div>
                   </Link>
                ))}
             </div>
          </div>
       </div>

       {/* CTA Section */}
       <div className="py-24 px-6 border-t border-white/5 bg-secondary">
          <div className="max-w-[800px] mx-auto text-center">
             <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Your legal strategy starts here.</h3>
             <p className="text-xl text-light/70 font-light mb-10">
                Connect with our {area.title} team to navigate your most complex challenges.
             </p>
             <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-blue text-white uppercase tracking-widest text-xs font-medium rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
             >
                Contact Wolff Law
             </Link>
          </div>
       </div>
    </div>
  );
};

export default PracticeAreaDetail;