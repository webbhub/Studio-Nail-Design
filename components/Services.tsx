import React from 'react';

const services = [
  { 
    id: 1, 
    title: 'Nail Designer', 
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    subtitle: 'Alongamentos e Arte'
  },
  { 
    id: 2, 
    title: 'Manicure & Pedicure', 
    image: 'https://i.postimg.cc/MK4nHKNf/boa-manicure-pedicure.jpg',
    subtitle: 'Cuidado Clássico'
  },
  { 
    id: 3, 
    title: 'Spa dos Pés', 
    image: 'https://i.postimg.cc/KvgZ97pX/e08036-34584ba23b2346e58d40c7169d70b3ca-mv2.avif',
    subtitle: 'Relaxamento Total'
  },
  { 
    id: 4, 
    title: 'Extensão de Cílios', 
    image: 'https://i.postimg.cc/TPk18dVP/1-extensao-de-cilios-29105910.webp',
    subtitle: 'Olhar Marcante'
  },
  { 
    id: 5, 
    title: 'Design de Sobrancelha', 
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    subtitle: 'Harmonia Facial'
  },
  { 
    id: 6, 
    title: 'Cursos VIP', 
    image: 'https://i.postimg.cc/5ysFnBsR/6de313-231e62d746774df084dac58fc29f2e8e-mv2.avif',
    subtitle: 'Aprenda Conosco'
  },
];

const Services: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-24 bg-surface scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-medium tracking-wide uppercase mb-3">
            Nossos <span className="text-secondary font-bold">Serviços</span>
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto"></div>
        </div>

        {/* Visual Grid - Matching Ref 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer animate-on-scroll opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.4]"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-[80%] h-[80%] border border-white/30 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-white/80 group-hover:bg-white/5 relative">
                    
                    <h3 className="font-serif text-xl text-white tracking-widest uppercase mb-2 drop-shadow-md">
                        {service.title}
                    </h3>
                    
                    {/* Decorative Line */}
                    <div className="w-8 h-[1px] bg-secondary mb-2 transition-all duration-300 group-hover:w-16"></div>
                    
                    <p className="font-sans text-xs text-gray-200 uppercase tracking-wider opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {service.subtitle}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Bar */}
        <div className="mt-16 text-center animate-on-scroll opacity-0">
             <h3 className="font-serif text-2xl text-primary mb-6">Pronta para transformar seu visual?</h3>
             <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-block border border-black text-black hover:bg-black hover:text-white px-12 py-3 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 cursor-pointer"
            >
              Consultar Tabela de Preços
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;