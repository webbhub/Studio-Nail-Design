import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-accent/20 relative scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="animate-on-scroll opacity-0">
          <h3 className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4 text-gray-500">Agendamento</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Faça seu <span className="text-secondary">Agendamento</span></h2>
          <p className="font-sans text-gray-600 mb-10 max-w-xl mx-auto">
             Escolha o melhor horário para você. Atendemos com hora marcada para garantir sua exclusividade e segurança.
          </p>

          <a 
            href="#" 
            className="inline-block bg-white border border-gray-300 text-primary hover:border-black hover:bg-primary hover:text-white px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 shadow-sm"
          >
            Agendar Online Agora
          </a>
          
          <div className="mt-8 text-sm tracking-widest font-semibold text-primary">
             OU PELO WHATSAPP: <span className="border-b border-primary pb-1 cursor-pointer">(11) 99999-9999</span>
          </div>

          <div className="mt-6 text-sm tracking-widest font-medium text-gray-500">
            SIGA NOSSO INSTAGRAM @studioelegance
          </div>

          {/* Awards Badges Area - Inspired by Ref 1 */}
          <div className="mt-16 pt-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-primary text-secondary rounded-full flex items-center justify-center font-serif font-bold text-center p-2 mb-4">
                    Top<br/>Choice
                 </div>
                 <p className="text-xs uppercase tracking-widest text-gray-600">Melhores do Ano 2024</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center font-serif font-bold text-center p-2 mb-4">
                    5 Estrelas
                 </div>
                 <p className="text-xs uppercase tracking-widest text-gray-600">Mais agendados</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-primary text-secondary rounded-full flex items-center justify-center font-serif font-bold text-center p-2 mb-4">
                    VIP<br/>Salon
                 </div>
                 <p className="text-xs uppercase tracking-widest text-gray-600">Mestre em Design</p>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;