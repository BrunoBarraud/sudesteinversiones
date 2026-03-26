"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function LeadCapture() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-bottom-left" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card shadow-2xl rounded-3xl p-8 md:p-14 border border-border/50"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Comencemos a <span className="text-primary">Conversar</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Deje que nuestros expertos le guíen hacia su próxima gran inversión. Complete el formulario y nos pondremos en contacto a la brevedad.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" placeholder="Ej. Juan Pérez" className="h-12 bg-background border-border/60" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+1 (234) 567-890" className="h-12 bg-background border-border/60" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="juan@ejemplo.com" className="h-12 bg-background border-border/60" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje / Requerimientos</Label>
              <Textarea 
                id="message" 
                placeholder="Estoy buscando una propiedad con vista al mar, presupuesto de..." 
                className="min-h-[120px] bg-background border-border/60 resize-none" 
              />
            </div>

            <Button size="lg" type="button" className="w-full h-14 text-lg mt-4 shadow-[0_0_20px_rgba(89,140,255,0.3)] hover:shadow-[0_0_30px_rgba(89,140,255,0.6)] transition-all group rounded-xl">
              Enviar Mensaje
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
