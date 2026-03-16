"use client";

import { motion } from "framer-motion";
import { TreePine, Sunset, ShoppingBag, Leaf } from "lucide-react";
import { property } from "@/data/property";

const iconMap = {
  TreePine,
  Sunset,
  ShoppingBag,
  Leaf,
} as const;

export function Location() {
  const { lat, lng } = property.coordinates;

  return (
    <section className="px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl">Localização</h2>
          <p className="mt-2 text-sm text-muted">
            {property.address.neighborhood}, {property.address.city} —{" "}
            {property.address.state}
          </p>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Map */}
          <motion.div
            className="overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2200!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do apartamento"
            />
          </motion.div>

          {/* Points of interest */}
          <div className="space-y-4">
            {property.pointsOfInterest.map((poi, i) => {
              const Icon = iconMap[poi.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={poi.name}
                  className="flex gap-4 rounded-xl border border-white/10 bg-background-card p-5 transition-colors hover:bg-background-warm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                >
                  {Icon && (
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{poi.name}</h3>
                      <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-light">
                        {poi.distance}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{poi.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
