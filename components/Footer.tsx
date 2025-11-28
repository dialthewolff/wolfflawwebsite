import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-white/10 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="mb-8">
                <Logo />
             </div>
             <p className="text-light/50 text-xs uppercase tracking-widest mt-6">
               © {new Date().getFullYear()} Wolff Law. <br />All rights reserved.
             </p>
          </div>
          
          <div className="md:col-span-2 flex flex-col md:flex-row gap-12 md:gap-24">
              <div>
                <h4 className="text-white font-serif text-lg mb-6">Firm</h4>
                <ul className="space-y-4 text-light/60 font-light text-sm">
                  <li><Link to="/about" className="hover:text-brand-blue transition-colors">About</Link></li>
                  <li><Link to="/team" className="hover:text-brand-blue transition-colors">Team</Link></li>
                  <li><Link to="/areas-of-practice" className="hover:text-brand-blue transition-colors">Areas of Practice</Link></li>
                  <li><Link to="/insights" className="hover:text-brand-blue transition-colors">Insights</Link></li>
                  <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
                <ul className="space-y-4 text-light/60 font-light text-sm">
                  <li className="flex items-start gap-3">
                    <span>2999 North 44th Street, Suite 308<br/>Phoenix, Arizona 85018</span>
                  </li>
                  <li>
                    <span>480.999.7242</span>
                  </li>
                  <li>
                    <span>info@thewolfflaw.com</span>
                  </li>
                </ul>
              </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/60 hover:text-brand-blue hover:border-brand-blue transition-colors">
                 <Linkedin className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/60 hover:text-brand-blue hover:border-brand-blue transition-colors">
                 <Twitter className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-light/30 text-[10px] uppercase tracking-wider font-light">
          <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;