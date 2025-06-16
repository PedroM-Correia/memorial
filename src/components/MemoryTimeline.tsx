
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

//Fotos importadas
import simoneRioSobrinhos from '../components/imgs/simone-rio-sobrinhos.jpeg';
import kaiqueNatal from '../components/imgs/kaique-natalfamilia.jpeg';
import simoneEuFlavio from '../components/imgs/simone-eu-flavio.jpeg';
import kaiquePiscina from '../components/imgs/kaique-primosnapiscina.jpeg';
import simoneEuMariMae from '../components/imgs/simone-eu-mari-mae.jpeg';
import kaiqueHamburguer from '../components/imgs/kaique-familiahamburguer.jpeg';

const MemoryTimeline = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const memories = [
    {
      image: simoneRioSobrinhos,
      title: "Simone e Seus Sobrinhos no rio São Francisco",
      description: "Um dia com muita alegria e diversão, onde Simone compartilhou momentos inesquecíveis com seus sobrinhos no rio São Francisco. Data: 02 de Janeiro de 2020"
    },
    {
      image: kaiqueNatal,
      title: "Kaique e a Família no Natal",
      description: "Kaique celebrando o Natal com Cicero, Deise, Pedro e Mariana. Data: 25 de Dezembro de 2023"
    },
    {
      image: simoneEuFlavio,
      title: "Trio parada Dura: Simone, Flávio e Pedro Mário",
      description: "Simone, Flávio e Pedro Mário reunidos em um momento de descontração e alegria. Data provável: 15 de Julho de 2021"
    },
    {
      image: kaiquePiscina,
      title: "Kaique e os primos se divertindo na piscina",
      description: "Kaique e seus primos aproveitando um dia ensolarado na piscina, repleto de risadas e brincadeiras. Data: 10 de Fevereiro de 2024"
    },
    {
      image: simoneEuMariMae,
      title: "Simone, Pedro Mário, Deise e Mariana",
      description: "Simone levando Pedro Mário, Deise e Mariana para a pista para pegar o ônibus, um momento de carinho e união familiar. Data: 11 de Janeiro de 2020"
    },
    {
      image: kaiqueHamburguer,
      title: "Kaique comendo hambúrguer em Tapera",
      description: "Kaique indo passear o final de semana em Tapera e aproveitando um delicioso hambúrguer. Data: 12 de Fevereiro de 2024"
    }
  ];

  // Função para navegar para a próxima imagem
  const goToNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % memories.length);
    }
  };

  // Função para navegar para a imagem anterior
  const goToPreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? memories.length - 1 : selectedImageIndex - 1);
    }
  };

  // Effect para adicionar/remover event listener de teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          goToNextImage();
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          goToPreviousImage();
        } else if (event.key === 'Escape') {
          setSelectedImageIndex(null);
        }
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const selectedMemory = selectedImageIndex !== null ? memories[selectedImageIndex] : null;

  return (
    <section className="py-16 memorial-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-memorial-ocean mb-12">
          Galeria de Memórias
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {memories.map((memory, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
                    <div className="aspect-video overflow-hidden cursor-pointer" onClick={() => setSelectedImageIndex(index)}>
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-memorial-ocean mb-3">
                        {memory.title}
                      </h3>
                      <p className="text-memorial-stone leading-relaxed">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          <div className="text-center mt-8">
            <p className="text-memorial-stone italic">
              "Cada imagem conta uma história, cada lembrança aquece o coração"
            </p>
          </div>
        </div>
      </div>

      {/* Modal para exibir imagem em tamanho maior */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
          {selectedMemory && (
            <div className="relative">
              <img 
                src={selectedMemory.image.replace('w=600&h=400', 'w=1200&h=800')} 
                alt={selectedMemory.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {selectedMemory.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {selectedMemory.description}
                </p>
              </div>
              
              {/* Indicador de navegação */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {(selectedImageIndex || 0) + 1} / {memories.length}
              </div>
              
              {/* Dica de navegação */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                Use ← → para navegar
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MemoryTimeline;
