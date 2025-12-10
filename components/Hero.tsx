import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Background Image - Soft/Bright High Key */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop" 
          alt="Woman hands with elegant manicure" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Soft Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      </div>

      {/* Content Content - Left Aligned on Desktop like Ref 2 */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex items-center h-full">
        <div className="max-w-2xl text-left mt-20">
          <div className="flex items-center gap-4 mb-6 animate-[fadeIn_1s_ease-out]">
            <div className="h-[1px] w-12 bg-black"></div>
            <span className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase font-semibold">
              Especialista em Nail Design
            </span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-none mb-8 animate-[slideUp_1s_ease-out_0.2s_both]">
            Realce sua <br/>
            <span className="italic text-secondary font-light">Beleza Natural</span>
          </h2>
          
          <p className="font-sans text-gray-600 text-lg leading-relaxed max-w-lg mb-10 animate-[slideUp_1s_ease-out_0.4s_both]">
            O Studio de unhas Nº1 em São Paulo. Experiência única de cuidado, design e sofisticação para mulheres exigentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-[slideUp_1s_ease-out_0.6s_both]">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-black text-white hover:bg-secondary px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center cursor-pointer"
            >
              Agendar Horário
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="border border-black text-black hover:bg-black hover:text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center cursor-pointer"
            >
              Conheça o Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;