import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'O Studio', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Top Bar - Black with white text (Like Ref 1) */}
      <div className="bg-black text-white py-2 text-[10px] md:text-xs tracking-widest uppercase hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <span className="flex items-center gap-2"><MapPin size={12} /> Av. Principal, 1000 - Centro, SP</span>
                <span className="flex items-center gap-2"><Phone size={12} /> (11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram size={14} /></a>
                <span>Siga-nos</span>
            </div>
        </div>
      </div>

      {/* Main Navbar - White */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-gray-100 ${
          isScrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm py-2' : 'md:top-[33px] top-0 bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo - Centered or Left depending on layout preferences, kept left for balance with Nav */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex flex-col items-center group"
            >
                <h1 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-[0.15em] uppercase">
                  Studio<span className="text-secondary font-bold">Elegance</span>
                </h1>
                <span className="text-[9px] md:text-[10px] text-gray-400 tracking-[0.4em] uppercase group-hover:text-secondary transition-colors">
                  Beauty Academy
                </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs font-medium text-gray-500 hover:text-black hover:font-semibold transition-all duration-300 uppercase tracking-widest relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-white hover:bg-secondary px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none shadow-sm cursor-pointer"
              >
                Agendar
              </a>
            </div>

             {/* Mobile Placeholder for centering */}
             <div className="md:hidden w-6"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen py-6 border-t' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-600 hover:text-secondary uppercase tracking-widest cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
               href="#contact"
               onClick={(e) => handleNavClick(e, '#contact')}
               className="bg-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest mt-4 cursor-pointer"
            >
              Agendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;