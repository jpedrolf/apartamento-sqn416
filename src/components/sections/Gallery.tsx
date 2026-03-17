"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { property } from "@/data/property";

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-background-warm to-border">
      <Camera className="h-8 w-8 text-muted/50" />
      <span className="text-xs text-muted/70">{label}</span>
    </div>
  );
}

/* One representative photo per room for the showcase grid */
const showcaseRooms = ["Sala", "Cozinha", "Quartos", "Banheiros", "Área de serviço", "Externo"] as const;
const showcase = showcaseRooms
  .map((room) => property.gallery.find((p) => p.room === room))
  .filter((p): p is (typeof property.gallery)[number] => p !== undefined);

/*
 * Bento grid layout for desktop (6 rooms):
 * ┌──────────────┬─────────┐
 * │   Sala       │ Cozinha │
 * │  (2×2 hero)  ├─────────┤
 * │              │ Quartos │
 * ├──────┬───────┴┬────────┤
 * │Banho │Á.Serv. │Externo │  ← flex row, equal height
 * └──────┴────────┴────────┘
 */
const topBentoStyles: { className: string; aspect: string }[] = [
  { className: "col-span-2 row-span-2", aspect: "4/3" },
  { className: "", aspect: "4/3" },
  { className: "", aspect: "4/3" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (!activeFilter) return [];
    return property.gallery.filter((p) => p.room === activeFilter);
  }, [activeFilter]);

  const openLightbox = (galleryIndex: number) => {
    setLightboxIndex(galleryIndex);
  };

  const openShowcaseRoom = (roomPhoto: (typeof property.gallery)[number]) => {
    const realIndex = property.gallery.indexOf(roomPhoto);
    setLightboxIndex(realIndex);
  };

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      const next = lightboxIndex + dir;
      if (next >= 0 && next < property.gallery.length) {
        setLightboxIndex(next);
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, navigate]);

  return (
    <section className="px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-6 font-serif text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Galeria
        </motion.h2>

        {/* Room filter pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {showcaseRooms.map((room) => (
            <button
              key={room}
              onClick={() => setActiveFilter(activeFilter === room ? null : room)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === room
                  ? "bg-accent text-background"
                  : "bg-background-card text-muted hover:bg-border hover:text-foreground"
              }`}
            >
              {room}
            </button>
          ))}
        </div>

        {/* Showcase bento grid — one photo per room */}
        {!activeFilter && (
          <>
            {/* Desktop bento */}
            <div className="hidden md:block">
              {/* Top grid: Sala hero + Cozinha + Quartos */}
              <div className="grid grid-cols-3 gap-2">
                {showcase.slice(0, 3).map((photo, i) => {
                  const style = topBentoStyles[i];
                  return (
                    <motion.button
                      key={photo.src}
                      className={`group relative cursor-pointer overflow-hidden rounded-lg ${style.className}`}
                      style={{ aspectRatio: style.aspect }}
                      onClick={() => openShowcaseRoom(photo)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.label}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span className="text-sm font-medium text-white">{photo.room}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              {/* Bottom row: equal height via flex */}
              <div className="mt-2 flex h-52 gap-2">
                {showcase.slice(3).map((photo, i) => (
                  <motion.button
                    key={photo.src}
                    className="group relative flex-1 cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openShowcaseRoom(photo)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-sm font-medium text-white">{photo.room}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile carousel */}
            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:hidden">
              {showcase.map((photo, i) => (
                <motion.button
                  key={photo.src}
                  className="relative w-[75vw] flex-shrink-0 cursor-pointer snap-center overflow-hidden rounded-lg"
                  style={{ aspectRatio: "3/4" }}
                  onClick={() => openShowcaseRoom(photo)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-sm font-medium text-white">{photo.room}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <button
              className="mt-4 text-sm font-medium text-primary-light underline underline-offset-4 hover:text-primary-light/80"
              onClick={() => openLightbox(0)}
            >
              Ver todas as {property.gallery.length} fotos
            </button>
          </>
        )}

        {/* Filtered room photos */}
        {activeFilter && (
          <>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {filteredPhotos.map((photo, i) => {
                const realIndex = property.gallery.indexOf(photo);
                return (
                  <motion.button
                    key={photo.src}
                    className="group relative cursor-pointer overflow-hidden rounded-lg"
                    style={{ aspectRatio: "4/3" }}
                    onClick={() => openLightbox(realIndex)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-medium text-white">{photo.label}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
            <button
              className="mt-4 text-sm font-medium text-muted underline underline-offset-4 hover:text-foreground"
              onClick={() => setActiveFilter(null)}
            >
              Voltar à visão geral
            </button>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top bar */}
            <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-6">
              <span className="font-mono text-sm text-white/60">
                {lightboxIndex + 1} / {property.gallery.length}
              </span>
              <button
                className="text-white/70 hover:text-white"
                onClick={() => setLightboxIndex(null)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav arrows */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 text-white/70 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            {lightboxIndex < property.gallery.length - 1 && (
              <button
                className="absolute right-4 text-white/70 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}

            {/* Image + caption */}
            <motion.div
              key={lightboxIndex}
              className="mx-12 flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={property.gallery[lightboxIndex].src}
                alt={property.gallery[lightboxIndex].label}
                width={1200}
                height={800}
                className="max-h-[75vh] rounded-lg object-contain"
              />
              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-white">
                  {property.gallery[lightboxIndex].label}
                </span>
                <span className="ml-2 rounded-full bg-white/15 px-2.5 py-0.5 text-xs text-white/70">
                  {property.gallery[lightboxIndex].room}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
