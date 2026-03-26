"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export function AgentBio() {
  return (
    <section id="agents" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-96 lg:h-auto">
              {/* Fallback image if next/image isn't used - using a standard Unsplash for the founder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-card hidden lg:block" />
            </div>

            {/* Content Side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
                  Nuestro Fundador
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-sans tracking-tight">
                  Roberto <span className="text-primary font-light">Martínez</span>
                </h2>
                <h3 className="text-xl text-muted-foreground mb-8 font-light">
                  CEO & Asesor en Inversiones Inmobiliarias
                </h3>
                
                <div className="space-y-6 text-foreground/80 mb-10 leading-relaxed">
                  <p>
                    Con más de 15 años de experiencia en el mercado inmobiliario premium, Roberto ha dirigido transacciones por más de $500 millones, estableciendo un estándar de excelencia y exclusividad.
                  </p>
                  <p>
                    Su filosofía se centra en la relación personalizada y el entendimiento profundo de las necesidades de cada cliente, garantizando que cada inversión sea no solo segura, sino extraordinariamente rentable.
                  </p>
                </div>

                {/* Contact & Socials */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center font-bold text-xs transition-colors shadow-sm">
                      in
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center font-bold text-xs transition-colors shadow-sm">
                      ig
                    </a>
                  </div>
                  
                  <div className="hidden sm:block w-px h-8 bg-border" />
                  
                  <div className="flex flex-col gap-2 text-sm font-medium">
                    <a href="mailto:roberto@sudesteinversiones.com" className="flex items-center hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 mr-2 text-primary" /> roberto@sudeste.com
                    </a>
                    <a href="tel:+1234567890" className="flex items-center hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 mr-2 text-primary" /> +1 (234) 567-890
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
