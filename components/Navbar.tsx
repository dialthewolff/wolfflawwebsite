import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Areas of Practice', path: '/areas-of-practice' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mobileMenuOpen 
          ? 'bg-transparent py-4' // Transparent when menu open to blend with menu bg
          : isScrolled
            ? 'glass-nav py-4'
            : 'bg-transparent py-6 border-b border-transparent bg-gradient-to-b from-dark/90 to-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={() => setMobileMenuOpen(false)}>
          <Logo iconSize={32} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.filter(l => l.path !== '/').map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                isActive(link.path) ? 'text-brand-blue' : 'text-white/80 hover:text-brand-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 relative z-50 hover:text-brand-blue transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-dark z-40 flex flex-col justify-center items-center transition-all duration-500 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}>
         {/* Background visual enhancement */}
         <div className="absolute inset-0 bg-gradient-to-b from-secondary to-dark"></div>
         
         <div className="flex flex-col gap-8 text-center relative z-10 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl uppercase tracking-widest font-serif transition-all duration-300 ${
                isActive(link.path) ? 'text-brand-blue' : 'text-white hover:text-brand-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
         </div>
         
         <div className="absolute bottom-12 text-white/30 text-[10px] uppercase tracking-widest">
            Wolff Law © {new Date().getFullYear()}
         </div>
      </div>
    </nav>
  );
};

export default Navbar;