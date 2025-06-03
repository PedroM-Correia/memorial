
import React from 'react';
import { Heart } from 'lucide-react';

const MemoryTimeline = () => {
  const memories = [
    {
      year: "1950-1948",
      title: "O Começo de Tudo",
      description: "Duas vidas que começaram com tanto potencial e amor para dar ao mundo."
    },
    {
      year: "1970",
      title: "Primeiros Encontros",
      description: "Os caminhos se cruzaram, criando laços que durariam para toda a vida."
    },
    {
      year: "1980-1990",
      title: "Construindo Famílias",
      description: "Anos dedicados a criar, educar e amar suas famílias com toda a devoção."
    },
    {
      year: "2000-2010",
      title: "Sabedoria e Experiência",
      description: "Décadas de experiências compartilhadas, conselhos dados e amor multiplicado."
    },
    {
      year: "2020",
      title: "Legado Construído",
      description: "Uma vida de realizações, relacionamentos profundos e memórias preciosas."
    },
    {
      year: "2023",
      title: "Para Sempre em Nossos Corações",
      description: "Embora tenham partido, seu amor e ensinamentos permanecem conosco eternamente."
    }
  ];

  return (
    <section className="py-16 memorial-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-memorial-ocean mb-12">
          Linha do Tempo de Memórias
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <div key={index} className="relative flex items-center mb-8 animate-fade-in">
              {/* Timeline line */}
              {index !== memories.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-memorial-ocean/30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-memorial-ocean rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-memorial-ocean">
                    {memory.title}
                  </h3>
                  <span className="text-memorial-stone font-medium">
                    {memory.year}
                  </span>
                </div>
                <p className="text-memorial-stone leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
