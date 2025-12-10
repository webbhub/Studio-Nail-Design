import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content (Left) */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <h3 className="text-secondary text-sm font-bold tracking-[0.2em] uppercase mb-4">Conheça o Studio</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-8">
              Studio Elegance <br/>
              <span className="italic font-light">Beauty Academy</span>
            </h2>
            <div className="w-20 h-[1px] bg-secondary mb-8"></div>
            
            <div className="space-y-6 text-gray-500 font-sans leading-relaxed text-sm md:text-base text-justify">
              <p>
                O Studio Elegance Beauty Academy, localizado no coração de São Paulo, foi fundado com o propósito de elevar o padrão do nail design. 
                Nossa filosofia une técnicas internacionais de vanguarda com um atendimento personalizado que entende a singularidade de cada cliente.
              </p>
              <p>
                Especializados em alongamentos de fibra de vidro, gel e cutilagem russa, nosso espaço foi projetado para ser um refúgio de tranquilidade em meio à cidade.
                Utilizamos exclusivamente produtos importados e seguimos rigorosos protocolos de biossegurança hospitalar.
              </p>
              <p>
                Seja para uma ocasião especial ou para o cuidado semanal, estamos prontas para transformar suas unhas em verdadeiras obras de arte.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                    <span className="block text-3xl font-serif text-primary">5k+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Clientes Atendidas</span>
                </div>
                <div>
                    <span className="block text-3xl font-serif text-primary">8</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Anos de Experiência</span>
                </div>
            </div>
          </div>

          {/* Image Composition (Right) - Matching Ref 1 */}
          <div className="lg:w-1/2 relative h-[500px] w-full animate-on-scroll opacity-0 delay-200">
             {/* Main Image - Elegant Nail Art Process */}
             <div className="absolute top-0 right-0 w-[70%] h-[85%] rounded-t-full rounded-b-lg overflow-hidden shadow-2xl z-10">
                <img 
                  src="https://i.postimg.cc/Qd7N4gtC/ultimas-5-pautas-APLICACAO-DE-ALONGAMENTO-DE-CILIOS-X-TRUQUES-PARA-MAXIMIZAR-OS-RESULTADOS.webp" 
                  alt="Nail Designer applying polish with precision" 
                  className="w-full h-full object-cover"
                />
             </div>
             
             {/* Secondary Image Overlapping - Luxury Tools/Atmosphere */}
             <div className="absolute bottom-0 left-0 w-[55%] h-[60%] bg-white p-2 rounded-lg shadow-xl z-20">
                <img 
                  src="https://i.postimg.cc/8P2N6FH1/images-(3).jpg" 
                  alt="Golden manicure tools and luxury setup" 
                  className="w-full h-full object-cover rounded-md"
                />
             </div>

             {/* Decorative Circle */}
             <div className="absolute top-10 left-10 w-24 h-24 rounded-full border border-secondary/30 z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;