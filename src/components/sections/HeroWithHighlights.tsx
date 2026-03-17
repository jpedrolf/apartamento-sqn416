"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  Wind,
  Layers,
  ChefHat,
  Refrigerator,
  PawPrint,
  TreePine,
} from "lucide-react";
import { useRef } from "react";
import { property } from "@/data/property";

/* ——— Handwritten annotations (unchanged) ——— */

function HandwrittenFloorNote() {
  return (
    <motion.div
      className="absolute right-[18%] bottom-[22%] z-10 hidden md:block"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="relative">
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 rotate-[15deg]"
        >
          <path
            d="M 60 5 C 50 15, 30 25, 25 50 C 22 60, 24 65, 30 70"
            stroke="#d4a24e"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="200"
              to="0"
              dur="0.8s"
              begin="1.4s"
              fill="freeze"
            />
          </path>
          <path
            d="M 24 64 L 30 70 L 22 70"
            stroke="#d4a24e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.2s"
              begin="2s"
              fill="freeze"
            />
          </path>
        </svg>
        <motion.span
          className="block font-hand text-xl text-accent -rotate-3 select-none whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          taquinhos originais!
        </motion.span>
      </div>
    </motion.div>
  );
}

function HandwrittenWindowNote() {
  return (
    <motion.div
      className="absolute right-[30%] top-[48%] z-10 hidden md:block"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
    >
      <div className="relative">
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          fill="none"
          className="absolute -top-14 left-[30%] rotate-[-5deg]"
        >
          <path
            d="M 40 55 C 38 40, 32 25, 35 10"
            stroke="#d4a24e"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="200"
              to="0"
              dur="0.8s"
              begin="2.4s"
              fill="freeze"
            />
          </path>
          <path
            d="M 31 15 L 35 8 L 39 15"
            stroke="#d4a24e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.2s"
              begin="3s"
              fill="freeze"
            />
          </path>
        </svg>
        <motion.span
          className="block font-hand text-lg text-accent -rotate-2 select-none whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
          vista para o verde,
        </motion.span>
        <motion.span
          className="block font-hand text-lg text-accent -rotate-2 select-none whitespace-nowrap -mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          quase uma casa na árvore!
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ——— Highlights icons ——— */

const iconMap = {
  Wind,
  Layers,
  ChefHat,
  Refrigerator,
  PawPrint,
  TreePine,
} as const;

/* ——— Combined component ——— */

export function HeroWithHighlights() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Track scroll across the entire wrapper
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Background: fixed, gets blur + slight darkening as user scrolls
  // Scale: very subtle zoom (2%), spread over full scroll range for smoothness
  const bgScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.02], {
    ease: (t: number) => t * t * (3 - 2 * t), // smoothstep easing
  });
  const blurAmount = useTransform(scrollYProgress, [0.15, 0.7], [0, 20]);
  const blurFilter = useMotionTemplate`blur(${blurAmount}px)`;
  const darkenOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 0.4]);
  return (
    <div ref={wrapperRef} className="relative">
      {/* ——— FIXED: background image — works reliably on iOS ——— */}
      <div
        className="fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${property.hero})`,
            scale: bgScale,
            filter: blurFilter,
          }}
        />
        {/* Base gradient for legibility — stronger on mobile where text sits lower */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent md:from-black/60 md:via-black/20" />
        {/* Darkens as highlights scroll in */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: darkenOpacity }}
        />
      </div>

      {/* ——— HERO CONTENT: first viewport ——— */}
      <section
        id="hero"
        className="relative z-10 flex h-svh min-h-[600px] flex-col justify-end"
      >
        <div className="w-full px-6 pb-10 md:pb-16 md:pt-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-accent/90 px-3.5 py-1 text-xs font-medium tracking-wide text-background backdrop-blur-sm md:px-4 md:py-1.5 md:text-sm">
                Disponível para locação
              </span>
            </motion.div>

            <motion.h1
              className="mt-3 font-serif text-[clamp(1.75rem,5vw,3.75rem)] leading-[1.1] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] md:mt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Apartamento Mocha
              <span className="mt-1 block text-[clamp(1.125rem,3vw,2.25rem)] font-normal leading-tight text-white/80 md:mt-2">
                SQN 416, Bloco P
              </span>
            </motion.h1>

            <motion.p
              className="mt-2 text-sm text-accent-light/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] md:mt-4 md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {property.details.bedrooms} quartos · {property.details.area} ·{" "}
              {property.address.neighborhood}, {property.address.city}
            </motion.p>

            {/* CTA + Scroll indicator row */}
            <motion.div
              className="mt-5 flex items-center gap-4 md:mt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href={`https://wa.me/${property.contact.whatsapp}?text=${encodeURIComponent(property.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background shadow-lg transition-colors hover:bg-accent-light md:px-6 md:py-3 md:text-base"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                Agendar visita
              </a>
              <motion.button
                onClick={() => {
                  document.getElementById("highlights")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer border-0 bg-transparent p-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Rolar para destaques"
              >
                <ChevronDown className="h-5 w-5 md:h-7 md:w-7 text-white/60" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Handwritten annotations */}
        <HandwrittenFloorNote />
        <HandwrittenWindowNote />
      </section>

      {/* ——— HIGHLIGHTS — scrolls over the sticky background ——— */}
      <section id="highlights" className="relative z-10 px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="sr-only">Destaques do apartamento</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {property.highlights.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-background-warm/95 p-6 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-background-warm hover:shadow-lg will-change-[opacity,transform]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
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
    </div>
  );
}
