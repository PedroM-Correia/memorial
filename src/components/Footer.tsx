
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-memorial-ocean text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Heart className="h-8 w-8 mx-auto mb-4 animate-gentle-float" />
          <h3 className="font-serif text-2xl font-semibold mb-2">
            "O amor é eterno, a saudade é infinita"
          </h3>
          <p className="text-memorial-sky text-lg">
            Em memória daqueles que amamos e jamais esqueceremos
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6">
          <p className="text-memorial-sky">
            Este memorial foi criado com amor pela família e amigos
          </p>
          <p className="text-memorial-sky/80 text-sm mt-2">
            © 2023 - Para sempre em nossos corações
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
