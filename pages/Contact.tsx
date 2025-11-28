import React, { useState } from 'react';
import { MapPin, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';
import { draftResponse } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await draftResponse(formData.message); 
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark pb-24">
       {/* Hero Section */}
       <div className="relative w-full overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-48 md:pb-24">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent"></div>
          </div>

          {/* Floating Glass Panel */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="glass-panel p-8 md:p-12 max-w-[650px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-4">
                 CONTACT
               </h1>
               <h2 className="font-sans text-light/90 text-lg font-light tracking-wide border-l border-brand-blue pl-6">
                 Let's Discuss Your Legal Strategy
               </h2>
            </div>
          </div>
       </div>

       <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 pt-24">
          
          {/* Left: Form */}
          <div className="glass-panel p-8 md:p-12">
             {!submitted ? (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                     <label className="block text-light/50 text-xs uppercase tracking-widest mb-2">Full Name</label>
                     <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-white/10"
                        placeholder="Enter your name"
                     />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-light/50 text-xs uppercase tracking-widest mb-2">Email</label>
                       <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-white/10"
                          placeholder="email@example.com"
                       />
                    </div>
                    <div>
                       <label className="block text-light/50 text-xs uppercase tracking-widest mb-2">Phone</label>
                       <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-white/10"
                          placeholder="+1 (555) 000-0000"
                       />
                    </div>
                  </div>
                  <div>
                     <label className="block text-light/50 text-xs uppercase tracking-widest mb-2">Company (Optional)</label>
                     <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-white/10"
                        placeholder="Company Name"
                     />
                  </div>
                  <div className="pt-4">
                     <label className="block text-light/50 text-xs uppercase tracking-widest mb-2">Message</label>
                     <textarea 
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-white/10 resize-none"
                        placeholder="How can we assist you?"
                     ></textarea>
                  </div>
                  <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="mt-6 w-full px-8 py-4 bg-brand-blue rounded-full text-white uppercase tracking-widest text-xs font-medium hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                     {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : "Submit Inquiry"}
                  </button>
               </form>
             ) : (
               <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <CheckCircle className="w-16 h-16 text-brand-blue mx-auto mb-6" />
                  <h3 className="text-3xl font-serif text-white mb-4">Inquiry Received</h3>
                  <p className="text-light font-light mb-8">Thank you for contacting Wolff Law. We act with discretion and speed.</p>
                  <button 
                     onClick={() => { setSubmitted(false); setFormData({name:'', email:'', phone:'', company:'', message:''}); }}
                     className="text-xs text-white/50 hover:text-white border-b border-white/20 hover:border-white transition-colors pb-1"
                  >
                     Send another message
                  </button>
               </div>
             )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center lg:pl-12">
             <div className="mb-12">
                <h3 className="text-2xl font-serif text-white mb-6">Office</h3>
                <div className="flex items-start gap-4 mb-4">
                   <MapPin className="w-5 h-5 text-brand-blue mt-1 shrink-0" />
                   <p className="text-light font-light leading-relaxed">
                      2999 North 44th Street, Suite 308<br/>
                      Phoenix, Arizona 85018
                   </p>
                </div>
                <div className="w-full h-48 bg-secondary mt-6 grayscale opacity-50 rounded-sm overflow-hidden relative">
                   {/* Map Placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs uppercase tracking-widest border border-white/10">Map Integration</div>
                </div>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-white mb-6">Direct Contact</h3>
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                      <span className="text-light font-light text-lg">480.999.7242</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                      <span className="text-light font-light text-lg">info@thewolfflaw.com</span>
                   </div>
                </div>
             </div>
          </div>

       </div>
    </div>
  );
};

export default Contact;