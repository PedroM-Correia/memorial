
import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <Heart className="h-6 w-6 text-memorial-ocean animate-gentle-float" />
            <h1 className="font-serif text-2xl font-semibold text-memorial-ocean">
              Em Memória
            </h1>
            <Heart className="h-6 w-6 text-memorial-ocean animate-gentle-float" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
