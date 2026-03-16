"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { property } from "@/data/property";

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
        {/* Arrow pointing UP toward the window */}
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
        {/* Text below arrow */}
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

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={sectionRef} className="relative h-svh min-h-[600px] flex items-end overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${property.hero})`, y: bgY }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Handwritten annotations */}
      <HandwrittenFloorNote />
      <HandwrittenWindowNote />

      {/* Content — fades out on scroll */}
      <motion.div
        className="relative z-10 w-full px-6 pb-16 pt-32 md:px-12 lg:px-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
              Disponível para locação
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-serif text-4xl text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Apartamento Mocha
            <span className="mt-2 block text-2xl font-normal text-white/80 md:text-3xl lg:text-4xl">
              SQN 416, Bloco P
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-accent-light/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {property.details.bedrooms} quartos · {property.details.area} ·{" "}
            {property.address.neighborhood}, {property.address.city}
          </motion.p>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-white/50" />
      </motion.div>
    </section>
  );
}
