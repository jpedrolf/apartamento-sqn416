"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";

function FloorPlanSVG() {
  const wall = "#9bb0a2";
  const wallThick = "#c8d6cc";
  const label = "#9bb0a2";
  const labelBold = "#eef2ef";
  const accent = "#40916c";
  const windowColor = "#d4a24e";
  const dimColor = "#6b8a74";
  const bg = "#244536";

  return (
    <svg
      viewBox="0 0 660 570"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Planta baixa do apartamento — 3 quartos, sala, cozinha, área de serviço"
    >
      <title>Planta baixa — Apartamento SQN 416, Bloco P</title>
      <desc>Planta esquemática do apartamento de ~65 m² com sala estar/jantar, cozinha, 3 quartos, 2 banheiros e área de serviço.</desc>
      {/* ===== OUTER WALLS ===== */}
      <polyline points="38 522 20 522 20 211 31 211" fill="none" stroke={wallThick} strokeWidth="3" />
      <polyline points="80 211 103 211 103 201" fill="none" stroke={wallThick} strokeWidth="3" />
      <polyline points="103 153 103 20 609 20 609 522 526 522" fill="none" stroke={wallThick} strokeWidth="3" />

      {/* ===== BOTTOM WINDOWS (y=522) ===== */}
      <line x1="38" y1="522" x2="241" y2="522" stroke={windowColor} strokeWidth="4" />
      <line x1="241" y1="522" x2="334" y2="522" stroke={wallThick} strokeWidth="3" />
      <line x1="334" y1="522" x2="429" y2="522" stroke={windowColor} strokeWidth="4" />
      <line x1="429" y1="522" x2="437" y2="522" stroke={wallThick} strokeWidth="3" />
      <line x1="437" y1="522" x2="526" y2="522" stroke={windowColor} strokeWidth="4" />

      {/* ===== INTERNAL WALLS ===== */}
      <line x1="103" y1="211" x2="202" y2="211" stroke={wall} strokeWidth="2" />
      <line x1="249" y1="211" x2="431" y2="211" stroke={wall} strokeWidth="2" />
      <line x1="257" y1="279" x2="374" y2="279" stroke={wall} strokeWidth="2" />
      <line x1="483" y1="279" x2="609" y2="279" stroke={wall} strokeWidth="2" />
      <line x1="257" y1="20" x2="257" y2="115" stroke={wall} strokeWidth="2" />
      <line x1="257" y1="165" x2="257" y2="211" stroke={wall} strokeWidth="2" />
      <polyline points="357 211 357 102 377 102" fill="none" stroke={wall} strokeWidth="2" />
      <line x1="419" y1="102" x2="431" y2="102" stroke={wall} strokeWidth="2" />
      <line x1="431" y1="20" x2="431" y2="51" stroke={wall} strokeWidth="2" />
      <line x1="431" y1="92" x2="431" y2="211" stroke={wall} strokeWidth="2" />
      <polyline points="489 156 489 149 609 149" fill="none" stroke={wall} strokeWidth="2" />
      <line x1="489" y1="200" x2="489" y2="279" stroke={wall} strokeWidth="2" />
      <line x1="257" y1="279" x2="257" y2="522" stroke={wall} strokeWidth="2" />
      <line x1="431" y1="279" x2="431" y2="522" stroke={wall} strokeWidth="2" />

      {/* ===== DOOR ARCS ===== */}
      <rect x="29" y="211" width="2" height="45" fill={bg} />
      <path d="M31,211c13.9-8,31.1-8,45,0" fill="none" stroke={accent} strokeDasharray="3 3" />
      <rect x="255" y="115" width="4" height="50" fill={bg} />
      <path d="M257,115c-13.9-8-31.1-8-45,0" fill="none" stroke={accent} strokeDasharray="3 3" />
      <rect x="202" y="209" width="47" height="4" fill={bg} />
      <path d="M202,211c7.5,13,7.5,29,0,42" fill="none" stroke={accent} strokeDasharray="3 3" />
      <rect x="377" y="100" width="42" height="4" fill={bg} />
      <path d="M377,102c6.8-11.8,6.8-26.2,0-38" fill="none" stroke={accent} strokeDasharray="3 3" />
      <rect x="429" y="51" width="4" height="41" fill={bg} />
      <path d="M431,92c11.8,6.8,26.2,6.8,38,0" fill="none" stroke={accent} strokeDasharray="3 3" />
      <rect x="487" y="156" width="4" height="44" fill={bg} />
      <rect x="101" y="153" width="4" height="48" fill={bg} />

      {/* ===== ENTRANCE LABEL ===== */}
      <line x1="55" y1="220" x2="55" y2="207" fill="none" stroke={windowColor} strokeWidth="1.5" />
      <polygon points="55 205 52 210 58 210" fill={windowColor} />
      <text x="55" y="232" textAnchor="middle" fill={windowColor} fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0">
        ENTRADA
      </text>
      <text x="55" y="241" textAnchor="middle" fill={windowColor} fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0">
        PRINCIPAL
      </text>

      {/* ===== FIXTURES ===== */}
      {/* Stove (4 burners) */}
      <rect x="177.5" y="26" width="28" height="26.4" rx="1.2" fill="none" stroke={dimColor} strokeWidth="1" />
      <circle cx="185.5" cy="37" r="2.5" fill="none" stroke={dimColor} strokeWidth="0.6" />
      <circle cx="197.5" cy="37" r="2.5" fill="none" stroke={dimColor} strokeWidth="0.6" />
      <circle cx="185.5" cy="45" r="2.5" fill="none" stroke={dimColor} strokeWidth="0.6" />
      <circle cx="197.5" cy="45" r="2.5" fill="none" stroke={dimColor} strokeWidth="0.6" />

      {/* Fridge (rotated, in front of service entrance) */}
      <rect x="106.2" y="163.1" width="40" height="35.8" rx="3.2" transform="translate(307.2 54.8) rotate(90)" fill="none" stroke={dimColor} strokeWidth="1.3" />
      <line x1="137" y1="161" x2="137" y2="201" stroke={dimColor} strokeWidth="0.8" />

      {/* Washing machine */}
      <line x1="312" y1="166" x2="312" y2="206" stroke={dimColor} strokeWidth="0.8" />
      <rect x="310" y="165" width="42" height="42" rx="3.5" fill="none" stroke={dimColor} strokeWidth="1.4" />

      {/* L-shaped kitchen counter */}
      <path d="M105,150.8h31.9c2.5,0,4.6-2.1,4.6-4.6V60c0-2.8,2.3-5.1,5.1-5.1h108.4" fill="none" stroke={dimColor} strokeWidth="0.9" />

      {/* ===== ROOM LABELS ===== */}
      <text x="138" y="405" fill={labelBold} fontSize="16" fontWeight="700" fontFamily="var(--font-sans)">
        Sala
      </text>
      <text x="128" y="423" fill={label} fontSize="10" fontFamily="var(--font-sans)">
        estar / jantar
      </text>
      <text x="170" y="130" fill={labelBold} fontSize="14" fontWeight="700" fontFamily="var(--font-sans)">
        Cozinha
      </text>
      <text x="338" y="65" fill={label} fontSize="11" fontFamily="var(--font-sans)">
        Área de
      </text>
      <text x="339" y="79" fill={label} fontSize="11" fontFamily="var(--font-sans)">
        Serviço
      </text>
      <text x="385" y="123.8" fill={label} fontSize="10" fontFamily="var(--font-sans)">
        Banheiro
      </text>
      <text x="389" y="136.8" fill={label} fontSize="10" fontFamily="var(--font-sans)">
        serviço
      </text>
      <text x="510" y="82" fill={labelBold} fontSize="13" fontWeight="700" fontFamily="var(--font-sans)">
        Quarto 3
      </text>
      <text x="505" y="98" fill={label} fontSize="10" fontFamily="var(--font-sans)">
        (dependência)
      </text>
      <text x="544" y="210" fill={label} fontSize="11" fontFamily="var(--font-sans)">
        Banheiro
      </text>
      <text x="552" y="224" fill={label} fontSize="11" fontFamily="var(--font-sans)">
        social
      </text>
      <text x="408" y="250" fill={dimColor} fontSize="9" fontFamily="var(--font-mono)" letterSpacing="2">
        CIRCULAÇÃO
      </text>
      <text x="330" y="405" fill={labelBold} fontSize="15" fontWeight="700" fontFamily="var(--font-sans)">
        Quarto 1
      </text>
      <text x="506" y="405" fill={labelBold} fontSize="15" fontWeight="700" fontFamily="var(--font-sans)">
        Quarto 2
      </text>

      {/* ===== DIMENSION LINES ===== */}
      <line x1="20" y1="542" x2="609" y2="542" stroke={dimColor} strokeWidth="0.8" />
      <line x1="20" y1="537" x2="20" y2="547" stroke={dimColor} strokeWidth="0.8" />
      <line x1="609" y1="537" x2="609" y2="547" stroke={dimColor} strokeWidth="0.8" />
      <text x="312" y="556" fill={dimColor} fontSize="11" fontFamily="var(--font-mono)">
        8,91 m
      </text>
      <line x1="103" y1="13" x2="609" y2="13" stroke={dimColor} strokeWidth="0.8" />
      <line x1="103" y1="8" x2="103" y2="18" stroke={dimColor} strokeWidth="0.8" />
      <line x1="609" y1="8" x2="609" y2="18" stroke={dimColor} strokeWidth="0.8" />
      <text x="355" y="9" fill={dimColor} fontSize="10" fontFamily="var(--font-mono)">
        7,53 m
      </text>
      <line x1="628" y1="20" x2="628" y2="522" stroke={dimColor} strokeWidth="0.8" />
      <line x1="623" y1="20" x2="633" y2="20" stroke={dimColor} strokeWidth="0.8" />
      <line x1="623" y1="522" x2="633" y2="522" stroke={dimColor} strokeWidth="0.8" />
      <text x="635" y="275" fill={dimColor} fontSize="10" fontFamily="var(--font-mono)" transform="rotate(90 635 275)">
        7,50 m
      </text>

      {/* Window legend */}
      <line x1="25" y1="556" x2="45" y2="556" stroke={windowColor} strokeWidth="3" />
      <text x="51" y="559" fill={dimColor} fontSize="9" fontFamily="var(--font-sans)">
        janelas
      </text>
    </svg>
  );
}

export function FloorPlan() {
  const m = property.floorPlan.measurements;

  return (
    <section className="px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl">Planta baixa</h2>
          <p className="mt-2 text-sm text-muted">
            Projeto original de 1973 — {property.details.area}
          </p>
        </motion.div>

        <motion.div
          className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-background-card p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FloorPlanSVG />
        </motion.div>

        {/* Measurements */}
        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { label: "Largura (topo)", value: m.widthTop },
            { label: "Largura (base)", value: m.widthBottom },
            { label: "Faixa de serviço", value: m.depthService },
            { label: "Circulação", value: m.depthCirculation },
            { label: "Faixa social", value: m.depthSocial },
            { label: "Área estimada", value: property.details.area },
          ].map((item) => (
            <div key={item.label}>
              <span className="block text-xs uppercase tracking-wider text-muted">
                {item.label}
              </span>
              <span className="font-mono text-lg font-semibold">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Rooms */}
        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {property.floorPlan.rooms.map((room) => (
            <span
              key={room}
              className="rounded-full border border-white/10 bg-background-card px-3 py-1 text-xs text-muted"
            >
              {room}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
