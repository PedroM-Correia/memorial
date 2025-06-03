
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const MessagesSection = () => {
  const [messages] = useState([
    {
      name: "Maria Silva",
      date: "15 de novembro, 2023",
      message: "Pessoas especiais como vocês jamais são esquecidas. Obrigada por todos os momentos de alegria que compartilharam conosco. Vocês estarão sempre em nossos corações.",
      relationship: "Amiga da família"
    },
    {
      name: "João Santos",
      date: "12 de novembro, 2023", 
      message: "É difícil encontrar palavras para expressar o quanto vocês significaram para nossa comunidade. Seu legado de bondade e generosidade continuará inspirando gerações.",
      relationship: "Vizinho"
    },
    {
      name: "Ana Costa",
      date: "10 de novembro, 2023",
      message: "Guardarei para sempre as memórias dos domingos em família, das risadas e dos conselhos sábios. Obrigada por terem sido parte tão importante de nossas vidas.",
      relationship: "Família"
    }
  ]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-memorial-ocean mb-4">
          Mensagens de Carinho
        </h2>
        <p className="text-center text-memorial-stone mb-12 max-w-2xl mx-auto">
          Palavras de amor, gratidão e saudade de todas as pessoas que foram tocadas por suas vidas
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in border-l-4 border-memorial-ocean">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-memorial-sky rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-memorial-ocean" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-memorial-ocean text-lg">
                          {msg.name}
                        </h4>
                        <p className="text-sm text-memorial-stone">
                          {msg.relationship}
                        </p>
                      </div>
                      <span className="text-sm text-memorial-stone mt-1 md:mt-0">
                        {msg.date}
                      </span>
                    </div>
                    <p className="text-memorial-stone leading-relaxed italic">
                      "{msg.message}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-memorial-stone mb-4">
            Gostaria de compartilhar uma mensagem de carinho?
          </p>
          <Button 
            className="bg-memorial-ocean hover:bg-memorial-ocean/90 text-white px-8 py-3 rounded-full"
          >
            Deixar uma Mensagem
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
