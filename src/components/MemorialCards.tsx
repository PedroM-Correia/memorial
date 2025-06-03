
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop" 
                alt="Momentos especiais" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-memorial-ocean mb-4">
                Nome da Pessoa 1
              </h3>
              <p className="text-memorial-stone leading-relaxed mb-4">
                Uma pessoa extraordinária que dedicou sua vida à família e ao trabalho. 
                Conhecida por sua generosidade, sabedoria e pelo sorriso que iluminava 
                qualquer ambiente. Deixou um legado de amor e bondade que permanecerá 
                para sempre em nossos corações.
              </p>
              <div className="space-y-2 text-sm text-memorial-stone">
                <p><strong>Nascimento:</strong> 15 de março de 1950</p>
                <p><strong>Partida:</strong> 10 de agosto de 2023</p>
                <p><strong>Paixões:</strong> Jardinagem, culinária, família</p>
              </div>
            </CardContent>
          </Card>

          {/* Card Pessoa 2 */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop" 
                alt="Momentos especiais" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-memorial-ocean mb-4">
                Nome da Pessoa 2
              </h3>
              <p className="text-memorial-stone leading-relaxed mb-4">
                Um ser humano excepcional, sempre pronto para ajudar e apoiar quem 
                precisasse. Sua força, determinação e amor incondicional foram fonte 
                de inspiração para todos. Suas histórias e ensinamentos continuam 
                vivos em cada um de nós.
              </p>
              <div className="space-y-2 text-sm text-memorial-stone">
                <p><strong>Nascimento:</strong> 22 de julho de 1948</p>
                <p><strong>Partida:</strong> 3 de setembro de 2023</p>
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
