import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Logo */}
        <div className="mb-10">
           <h2 className="font-serif text-2xl text-primary font-bold tracking-widest uppercase">Studio <span className="text-secondary">Elegance</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-xs uppercase tracking-widest text-gray-500 font-medium">
           <div>
              <h4 className="text-black font-bold mb-4">Endereço</h4>
              <p className="mb-1">Av. Principal, 1000 - Sala 202</p>
              <p>Centro - Cidade - SP</p>
           </div>
           
           <div>
              <h4 className="text-black font-bold mb-4">Contato</h4>
              <p className="mb-1">(11) 99999-9999</p>
              <p>(11) 98888-8888</p>
           </div>
           
           <div>
              <h4 className="text-black font-bold mb-4">Horários</h4>
              <p className="mb-1">Seg a Sex: 08:00h às 21:00h</p>
              <p>Sábados: 08:00h às 20:00h</p>
           </div>
        </div>

        <div className="flex justify-center gap-6 mb-10">
           <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Instagram size={20} /></a>
           <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Facebook size={20} /></a>
           <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><MessageCircle size={20} /></a>
        </div>

        <div className="border-t border-gray-100 pt-8 text-[10px] text-gray-400 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Studio Elegance Beauty Academy. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;