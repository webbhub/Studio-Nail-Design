import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    // Slot 0 (Vertical/Tall) - Atualizado
    { src: "https://i.postimg.cc/VNFGmTv5/2a8a83f4-6000af82bf684-whatsapp-image-2021-01-14-at-09-21-34-1.jpg", span: "md:col-span-1 md:row-span-2" },
    
    // Slot 1 - Mantido (Já estava ok)
    { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    
    // Slot 2 - Atualizado
    { src: "https://i.postimg.cc/5ymN3f2V/foto-da-unha.png", span: "md:col-span-1 md:row-span-1" },
    
    // Slot 3 (Wide) - Mantido (Já estava ok)
    { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
    
    // Slot 4 - Atualizado
    { src: "https://i.postimg.cc/9MZfDd3H/images-(2).jpg", span: "md:col-span-1 md:row-span-1" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Nosso Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-2">Galeria Elegance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] mb-12">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-sm group ${img.span} animate-on-scroll opacity-0`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={img.src} 
                alt="Nail Art" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Instagram className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
           <a href="#" className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs border-b border-secondary pb-1 hover:text-secondary transition-colors">
              Siga @studioelegance
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;