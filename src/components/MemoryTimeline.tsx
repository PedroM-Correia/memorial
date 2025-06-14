
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

import simoneRioSobrinhos from '../components/imgs/simone-rio-sobrinhos.jpeg';

const MemoryTimeline = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const memories = [
    {
      image: simoneRioSobrinhos,
      title: "Simone e Seus Sobrinhos no rio São Francisco",
      description: "Um dia com muita alegria e diversão, onde Simone compartilhou momentos inesquecíveis com seus sobrinhos no rio São Francisco. Data: 02 de Janeiro de 2020"
    },
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      title: "Paisagens Memoráveis",
      description: "As viagens e lugares especiais que visitaram juntos ao longo dos anos."
    },
    {
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      title: "Flores e Jardins",
      description: "O carinho especial pelas flores e a dedicação ao cultivo de belos jardins."
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      title: "Tranquilidade",
      description: "Momentos de paz e contemplação que tanto apreciavam no dia a dia."
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      title: "Conexão com a Terra",
      description: "O amor pela simplicidade e pela beleza natural que os cercava."
    },
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop",
      title: "Raízes Profundas",
      description: "A força e estabilidade que trouxeram para suas famílias e comunidade."
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
