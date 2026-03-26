"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Elena G.",
    role: "Inversora Internacional",
    content: "La asesoría de Sudeste superó todas mis expectativas. Encontraron la propiedad perfecta para mi portafolio antes de que siquiera saliera al mercado público. Su red de contactos es invaluable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos M.",
    role: "Propietario de Villa en la Costa",
    content: "Vendieron mi casa de lujo en tiempo récord y por el precio que buscábamos. El nivel de profesionalismo, la presentación de la propiedad y la atención personalizada fueron de primer nivel.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofía & Andrés",
    role: "Compradores de Residencia",
    content: "Comprar una casa asusta, pero con este equipo nos sentimos seguros en cada paso. Transparentes, amigables y genuinamente interesados en que hiciéramos la mejor elección para nuestra familia.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Voces de <span className="text-primary">Confianza</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              La satisfacción de nuestros clientes es el verdadero testimonio de nuestra dedicación y excelencia.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-5xl px-8"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-card border-border shadow-xl rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                      
                      <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                        <Quote className="h-12 w-12" />
                      </div>
                      
                      <CardContent className="p-8 flex flex-col h-full relative z-10">
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        <p className="text-foreground/80 italic mb-8 flex-grow">
                          &quot;{testimonial.content}&quot;
                        </p>
                        
                        <div className="mt-auto border-t border-border pt-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-primary">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 h-12 w-12 bg-background border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-all" />
            <CarouselNext className="-right-4 lg:-right-12 h-12 w-12 bg-background border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-all" />
          </Carousel>
        </motion.div>
        
      </div>
    </section>
  );
}
