import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { insights } from '../data';
import { generateLegalInsight } from '../services/geminiService';
import { Loader2, ArrowLeft, Share2, ArrowRight } from 'lucide-react';

const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = insights.find(i => i.slug === slug);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If the insight doesn't have full content in data.ts, generate it on load for the demo
    if (insight && !insight.content && !generatedContent) {
        setLoading(true);
        generateLegalInsight(insight.title).then(text => {
            setGeneratedContent(text);
            setLoading(false);
        });
    } else if (insight) {
        setGeneratedContent(insight.content || "");
    }
  }, [insight]);

  if (!insight) {
    return <div className="min-h-screen flex items-center justify-center text-white">Article not found</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-dark">
       <div className="max-w-[800px] mx-auto px-6 md:px-10 pb-24">
          <Link to="/insights" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white mb-12 transition-colors">
             <ArrowLeft className="w-3 h-3" /> Back to Insights
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">{insight.title}</h1>
          
          <div className="flex justify-between items-center border-y border-white/10 py-6 mb-12">
             <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-light/60 font-light">
                <span className="text-white">{insight.author}</span>
                <span className="hidden md:inline">•</span>
                <span>{insight.date}</span>
                <span className="hidden md:inline">•</span>
                <span className="text-brand-blue">{insight.category}</span>
             </div>
             <button className="text-white/50 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
             </button>
          </div>

          <div className="mb-12">
             <img src={insight.image} alt={insight.title} className="w-full aspect-video object-cover grayscale opacity-90" />
          </div>

          <div className="prose prose-invert prose-lg max-w-none font-light text-light/90 leading-loose">
             <p className="text-xl font-serif text-white leading-relaxed mb-8">{insight.excerpt}</p>
             
             {loading ? (
                <div className="flex items-center justify-center py-20">
                   <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
                </div>
             ) : (
                <div className="whitespace-pre-wrap">
                   {/* Simulating a longer article by repeating generated content if short */}
                   <p>{generatedContent}</p>
                   <p className="mt-8">
                     At Wolff Law, we continue to monitor these developments closely. The intersection of {insight.category.toLowerCase()} and business strategy is where we add the most value to our clients.
                   </p>
                   <p className="mt-8">
                     For more specific guidance on how these trends may impact your operations, please contact our {insight.category} practice group.
                   </p>
                </div>
             )}
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

export default InsightDetail;