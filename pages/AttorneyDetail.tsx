import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { attorneys, insights } from '../data';
import { ArrowRight } from 'lucide-react';

const AttorneyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const attorney = attorneys.find(a => a.id === id);
  
  // Find an insight by this attorney, or just grab the first one as fallback/placeholder
  const relatedInsight = insights.find(i => i.author.includes(attorney?.name.split(' ')[1] || '')) || insights[0];

  if (!attorney) {
    return <div className="min-h-screen flex items-center justify-center text-white">Attorney not found</div>;
  }

  return (
    <div className="min-h-screen bg-dark">
       {/* Hero Section */}
       <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
                <div className="md:col-span-2">
                   <div className="glass-panel p-10 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                      <p className="text-brand-blue uppercase tracking-widest text-sm mb-4">{attorney.role}</p>
                      <h1 className="text-4xl md:text-7xl font-serif text-white mb-8">{attorney.name}</h1>
                      <p className="text-lg text-light/90 font-light leading-relaxed border-l border-brand-blue pl-6 mb-8">
                        {attorney.bio}
                      </p>
                      <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-3 border border-white/30 rounded-full text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                         Contact Attorney
                      </Link>
                   </div>
                </div>
                
                <div className="hidden md:block md:col-span-1">
                   <div className="aspect-[3/4] glass-panel p-2 relative transform translate-y-12">
                      <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover rounded-xl grayscale" />
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Mobile Image (Shown below hero on small screens) */}
       <div className="md:hidden px-6 pt-6 pb-12 bg-secondary">
          <div className="aspect-[3/4] glass-panel p-2 relative">
             <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover rounded-xl grayscale" />
          </div>
       </div>

       {/* Details Grid */}
       <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-24">
             <div>
                <h3 className="text-2xl font-serif text-white mb-6">Practice Areas</h3>
                <ul className="space-y-3">
                   {attorney.practiceAreas.map((area, i) => (
                      <li key={i} className="text-light font-light border-b border-white/5 pb-2">{area}</li>
                   ))}
                </ul>
             </div>
             <div>
                <h3 className="text-2xl font-serif text-white mb-6">Admissions</h3>
                <ul className="space-y-3">
                   {attorney.admissions.map((item, i) => (
                      <li key={i} className="text-light font-light border-b border-white/5 pb-2">{item}</li>
                   ))}
                </ul>
             </div>
             <div>
                <h3 className="text-2xl font-serif text-white mb-6">Education</h3>
                <ul className="space-y-3">
                   {attorney.education.map((item, i) => (
                      <li key={i} className="text-light font-light border-b border-white/5 pb-2">{item}</li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Featured Insight */}
          <div className="mt-24">
             <h3 className="text-sm uppercase tracking-widest text-white/50 mb-8">Featured Insight</h3>
             <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-64 aspect-video bg-dark shrink-0">
                   <img src={relatedInsight.image} alt={relatedInsight.title} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div className="flex-1">
                   <h4 className="text-3xl font-serif text-white mb-4">{relatedInsight.title}</h4>
                   <p className="text-light/70 mb-6">{relatedInsight.excerpt}</p>
                   <Link to={`/insights/${relatedInsight.slug}`} className="text-brand-blue uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </div>
       </div>
       
       {/* Bottom Full Width CTA */}
       <div className="py-24 bg-secondary border-t border-white/5 text-center">
            <div className="max-w-[800px] mx-auto px-6">
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Work with {attorney.name}</h3>
                <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-brand-blue rounded-full text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-[0.15em] text-xs font-medium">
                    Schedule a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default AttorneyDetail;