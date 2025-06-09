
import React from 'react';
import simoneImg from '../components/imgs/img-simone2.jpeg'
import kaiqueImg from '../components/imgs/img-kaique.jpeg'

const HeroSection = () => {
  return (
    <section className="memorial-gradient min-h-[60vh] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-memorial-ocean mb-6 text-shadow">
            Para Sempre em Nossos Corações ❤️
          </h1>
          <p className="text-xl md:text-2xl text-memorial-stone font-light leading-relaxed max-w-3xl mx-auto">
            Este espaço é dedicado à memória de duas pessoas especiais que deixaram suas marcas 
            em nossas vidas. Suas histórias, sorrisos e amor continuam a nos inspirar todos os dias.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-white shadow-lg mx-auto mb-4 overflow-hidden">
              <img 
                src= {simoneImg}
                alt="Pessoa querida" 
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-memorial-ocean">Simone Pereira Correia</h3>
            <p className="text-memorial-stone mt-2">1976 - 2025</p>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-memorial-stone/30"></div>
          <div className="md:hidden w-24 h-px bg-memorial-stone/30"></div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-white shadow-lg mx-auto mb-4 overflow-hidden">
              <img 
                src={kaiqueImg}
                alt="Pessoa querida" 
                className="w-full h-full object-cover object-top"
                
              />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-memorial-ocean">Jose Kaique Da Silva</h3>
            <p className="text-memorial-stone mt-2">2010 - 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
