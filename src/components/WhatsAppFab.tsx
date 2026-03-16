"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { property } from "@/data/property";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${property.contact.whatsapp}?text=${encodeURIComponent(property.contact.whatsappMessage)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg md:h-auto md:w-auto md:rounded-full md:px-5 md:py-3"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="h-6 w-6 md:mr-2 md:h-5 md:w-5" />
          <span className="hidden text-sm font-medium md:inline">
            Fale conosco
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
