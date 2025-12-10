import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Inês Narciso",
    role: "Cliente desde 2021",
    text: "O ambiente é incrível e as profissionais super atenciosas. Fiz alongamento em fibra e a naturalidade me surpreendeu. Não troco por nada!",
    rating: 5.0,
    image: "https://i.postimg.cc/NFkZVMX9/rosoto-muie.png"
  },
  {
    id: 2,
    name: "Camila Rocha",
    role: "Cliente VIP",
    text: "A durabilidade do trabalho é impecável. Faço minhas unhas a cada 20 dias e o brilho do gel continua intacto. O melhor investimento para minha autoestima.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Beatriz Silva",
    role: "Noiva Elegance",
    text: "Escolhi o Studio Elegance para o meu casamento e foi a melhor decisão. Fizeram uma Nail Art delicada e luxuosa, exatamente como eu sonhei.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Função para avançar o slide
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Tempo da transição
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, [isAnimating]);

  // Função para voltar o slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Função para ir para um slide específico (bolinhas)
  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Muda a cada 6 segundos

    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#111] text-white relative overflow-hidden">
      {/* Background Texture Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-[100px]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 animate-on-scroll opacity-0">
           <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Depoimentos</h2>
           <p className="text-gray-400 font-light tracking-wide">O que nossas clientes dizem sobre a experiência.</p>
        </div>

        <div className="relative">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[450px]">
                
                {/* Featured Image - Com efeito de transição */}
                <div className={`relative transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                   <div className="relative overflow-hidden rounded-sm h-[400px] w-full group">
                     <img 
                       src={currentTestimonial.image} 
                       alt={currentTestimonial.name} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                     />
                     {/* Overlay gradiente suave */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                   </div>
                   
                   {/* Badge de Nota */}
                   <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl hidden md:block z-20">
                      <div className="border border-black p-4 text-center min-w-[120px]">
                         <span className="block text-4xl font-serif text-primary">{currentTestimonial.rating.toFixed(1)}</span>
                         <div className="flex justify-center gap-1 my-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} className="fill-secondary text-secondary" />
                            ))}
                         </div>
                         <span className="text-[10px] uppercase tracking-widest text-gray-500">Avaliação</span>
                      </div>
                   </div>
                </div>

                {/* Quote Content - Com animação de fade/slide */}
                <div className="space-y-8 relative px-4 md:px-0">
                    {/* Botões de Navegação (Desktop - Posicionados ao lado do texto) */}
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex-col gap-4 hidden lg:flex">
                        <button onClick={prevSlide} className="p-2 rounded-full border border-gray-700 hover:border-secondary hover:text-secondary transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextSlide} className="p-2 rounded-full border border-gray-700 hover:border-secondary hover:text-secondary transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className={`transition-all duration-500 transform ${isAnimating ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'}`}>
                        <div className="relative">
                           <Quote className="text-secondary w-12 h-12 absolute -top-8 -left-6 opacity-30" />
                           <p className="font-serif text-xl md:text-3xl italic leading-relaxed text-gray-200">
                             "{currentTestimonial.text}"
                           </p>
                           
                           <div className="mt-8 flex items-center gap-4">
                              <div className="w-12 h-[1px] bg-secondary"></div>
                              <div>
                                  <h4 className="font-bold text-lg text-white">{currentTestimonial.name}</h4>
                                  <span className="text-xs text-gray-500 uppercase tracking-widest">{currentTestimonial.role}</span>
                              </div>
                           </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-3 pt-4">
                       {testimonialsData.map((_, index) => (
                           <button 
                             key={index}
                             onClick={() => goToSlide(index)}
                             className={`h-2 rounded-full transition-all duration-300 ${
                               currentIndex === index ? 'w-8 bg-secondary' : 'w-2 bg-gray-700 hover:bg-gray-500'
                             }`}
                             aria-label={`Ir para depoimento ${index + 1}`}
                           />
                       ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Arrows (Bottom) */}
            <div className="flex justify-between mt-8 md:hidden px-4">
                 <button onClick={prevSlide} className="p-3 rounded-full bg-gray-800 text-white hover:bg-secondary transition-colors">
                    <ChevronLeft size={20} />
                 </button>
                 <button onClick={nextSlide} className="p-3 rounded-full bg-gray-800 text-white hover:bg-secondary transition-colors">
                    <ChevronRight size={20} />
                 </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;