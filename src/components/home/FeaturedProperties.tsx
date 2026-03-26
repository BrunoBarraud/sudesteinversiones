"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Villa Moderna en la Costa",
    price: "$2,450,000",
    address: "123 Ocean Drive, Riviera",
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1613490908571-9ce985c29bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "Nuevo"
  },
  {
    id: 2,
    title: "Penthouse de Lujo Urbano",
    price: "$1,850,000",
    address: "45 Skyline Ave, Downtown",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "Exclusivo"
  },
  {
    id: 3,
    title: "Residencia Campestre",
    price: "$3,200,000",
    address: "78 Valley Road, Countryside",
    beds: 5,
    baths: 6,
    sqft: 6500,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: ""
  }
];

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Propiedades <span className="text-primary">Destacadas</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Descubra nuestra colección curada de las propiedades más exclusivas y deseables del mercado actual.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 hidden md:flex">
            Ver Todas las Propiedades
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={property.id}
            >
              <Card className="overflow-hidden border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group cursor-pointer relative">
                <div className="absolute top-4 right-4 z-10">
                  <button className="p-2.5 bg-background/50 backdrop-blur-md rounded-full hover:bg-primary hover:text-primary-foreground transition-colors group-hover:scale-110 duration-300">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                {property.tag && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground backdrop-blur-md px-3 py-1 shadow-lg">
                    {property.tag}
                  </Badge>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <CardHeader className="p-5 pb-0">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-semibold text-xl line-clamp-1">{property.title}</h3>
                    <span className="font-bold text-xl text-primary">{property.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{property.address}</p>
                </CardHeader>
                
                <CardContent className="p-5 pt-4">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-primary/70" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-primary/70" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="h-4 w-4 text-primary/70" />
                      <span>{property.sqft} m²</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-5 pt-0">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    Ver Detalles
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
