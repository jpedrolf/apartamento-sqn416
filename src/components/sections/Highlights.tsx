"use client";

import { motion } from "framer-motion";
import {
  Wind,
  Layers,
  ChefHat,
  Refrigerator,
  PawPrint,
  TreePine,
} from "lucide-react";
import { property } from "@/data/property";

const iconMap = {
  Wind,
  Layers,
  ChefHat,
  Refrigerator,
  PawPrint,
  TreePine,
} as const;

export function Highlights() {
  return (
    <section className="bg-background-warm px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="sr-only">Destaques do apartamento</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {property.highlights.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-lg"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {Icon && <Icon className="h-7 w-7 text-accent" />}
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
                {item.title === "Cozinha contemporânea" && (
                  <p className="mt-2 text-xs italic text-white/50">
                    Reforma por{" "}
                    <a
                      href="https://www.instagram.com/tribeira.arq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 hover:text-accent-light transition-colors"
                    >
                      Tribeira Arquitetura
                    </a>
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
