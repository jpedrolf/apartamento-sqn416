"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { property } from "@/data/property";

export function Contact() {
  const whatsappUrl = `https://wa.me/${property.contact.whatsapp}?text=${encodeURIComponent(property.contact.whatsappMessage)}`;

  return (
    <section className="bg-background-warm px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="font-serif text-3xl text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Quer conhecer o apartamento?
        </motion.h2>

        <motion.p
          className="mt-3 text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Entre em contato pelo WhatsApp — respondo rápido.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-lg font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-accent/85 hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Conversar no WhatsApp
          </a>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Ou envie um e-mail para{" "}
          <a
            href={`mailto:${property.contact.email}`}
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            {property.contact.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
