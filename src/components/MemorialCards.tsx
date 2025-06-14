
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import simoneImg from '../components/imgs/simone-horizontal.jpeg'
import kaiqueImg from '../components/imgs/img-kaique-mica-ray.jpeg'

const MemorialCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-memorial-ocean mb-12">
          Suas Histórias de Vida
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card Pessoa 1 */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="h-64 overflow-hidden">
              <img 
                src={simoneImg}
                alt="Momentos especiais" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-memorial-ocean mb-4">
                Simone Pereira Correia
              </h3>
              <p className="text-memorial-stone leading-relaxed mb-4">
                Uma pessoa extraordinária que dedicou sua vida à família e ao trabalho. 
                Conhecida por sua generosidade, sabedoria e pelo sorriso que iluminava 
                qualquer ambiente. Deixou um legado de amor e bondade que permanecerá 
                para sempre em nossos corações.
              </p>
              <div className="space-y-2 text-sm text-memorial-stone">
                <p><strong>Nascimento:</strong> 15 de março de 1976</p>
                <p><strong>Partida:</strong> 18 de Maio de 2025</p>
                <p><strong>Paixões:</strong> Jardinagem, culinária, família</p>
              </div>
            </CardContent>
          </Card>

          {/* Card Pessoa 2 */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="h-64 overflow-hidden">
              <img 
                src={kaiqueImg}
                alt="Momentos especiais" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-memorial-ocean mb-4">
                José Kaique Da Silva
              </h3>
              <p className="text-memorial-stone leading-relaxed mb-4">
                Um ser humano excepcional, sempre pronto para ajudar e apoiar quem 
                precisasse. Sua força, determinação e amor incondicional foram fonte 
                de inspiração para todos. Suas histórias e ensinamentos continuam 
                vivos em cada um de nós.
              </p>
              <div className="space-y-2 text-sm text-memorial-stone">
                <p><strong>Nascimento:</strong> 02 de Janeiro de 2010</p>
                <p><strong>Partida:</strong> 18 de Maio de 2025</p>
                <p><strong>Paixões:</strong> Música, leitura, viagens</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MemorialCards;
