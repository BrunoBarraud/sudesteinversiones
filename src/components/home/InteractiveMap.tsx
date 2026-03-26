"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Map, { Marker, NavigationControl, FullscreenControl } from "react-map-gl/mapbox";
import 'mapbox-gl/dist/mapbox-gl.css';

// Ubicaciones de ejemplo en Buenos Aires para la simulación
const locations = [
  { id: 1, longitude: -58.3816, latitude: -34.6037, price: "$2.45M" },
  { id: 2, longitude: -58.4226, latitude: -34.5885, price: "$1.85M" },
  { id: 3, longitude: -58.4516, latitude: -34.5512, price: "$3.20M" },
];

export function InteractiveMap() {
  const [viewState, setViewState] = useState({
    longitude: -58.3816,
    latitude: -34.6037,
    zoom: 11
  });

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const hasValidToken = mapboxToken && !mapboxToken.includes("placeholder_token_replace_me");

  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold border-none mb-4 tracking-tight"
          >
            Explora las <span className="text-primary">Regiones</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Navegue por el mapa para descubrir propiedades exclusivas en las zonas más cotizadas, con información detallada de cada sector.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border bg-card group"
        >
          {hasValidToken ? (
            <Map
              {...viewState}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onMove={(evt: any) => setViewState(evt.viewState)}
              mapStyle="mapbox://styles/mapbox/dark-v11"
              mapboxAccessToken={mapboxToken}
              style={{ width: '100%', height: '100%' }}
            >
              <NavigationControl position="top-right" />
              <FullscreenControl position="top-right" />
              
              {locations.map(loc => (
                <Marker key={loc.id} longitude={loc.longitude} latitude={loc.latitude}>
                  <div className="bg-primary text-primary-foreground font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                    {loc.price}
                  </div>
                </Marker>
              ))}
            </Map>
          ) : (
            <>
              {/* Decorative Map Background Placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity duration-500 blur-[2px]" />
              <div className="absolute inset-0 bg-background/60" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-background/80 backdrop-blur-md rounded-2xl border border-border/50 max-w-md mx-auto my-auto shadow-xl h-fit w-[90%] left-0 right-0 top-0 bottom-0 text-center">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(89,140,255,0.4)]">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Se requiere Token de Mapbox</h3>
                <p className="text-muted-foreground mb-6">
                  Para visualizar el mapa interactivo real, por favor reemplaza <code>NEXT_PUBLIC_MAPBOX_TOKEN</code> en tu archivo <code>.env.local</code> con un token válido generado en Mapbox.
                </p>
                <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Obtener Token de Mapbox
                </a>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
