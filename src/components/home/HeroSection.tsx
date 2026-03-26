"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')] bg-cover bg-center" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
            Elevando tu Estilo de Vida
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6"
        >
          Descubre tu Propiedad <span className="text-primary">Ideal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground/90 max-w-3xl mb-12 font-light"
        >
          Explora la selección más fina de bienes raíces premium, pensada específicamente para tu gusto excepcional.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-4xl bg-background/80 backdrop-blur-2xl p-4 md:p-4 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-border/50 flex flex-col md:flex-row gap-3 items-center"
        >
          <div className="flex-1 w-full relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Ubicación, barrio o ciudad..." 
              className="pl-12 h-14 bg-transparent border-none shadow-none text-lg focus-visible:ring-0 placeholder:text-muted-foreground/60"
            />
          </div>
          <div className="hidden md:block w-px h-10 bg-border/50 mx-2" />
          <div className="flex-1 w-full relative">
             <Input 
              type="text" 
              placeholder="Tipo de propiedad (Ej. Casa)" 
              className="pl-6 h-14 bg-transparent border-none shadow-none text-lg focus-visible:ring-0 placeholder:text-muted-foreground/60"
            />
          </div>
          <Button size="lg" className="w-full md:w-auto h-14 px-8 rounded-2xl text-lg shadow-[0_0_20px_rgba(89,140,255,0.3)] hover:shadow-[0_0_30px_rgba(89,140,255,0.6)] transition-all duration-300">
            <Search className="mr-2 h-5 w-5" /> Buscar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
