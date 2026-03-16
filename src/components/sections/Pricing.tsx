"use client";

import { motion } from "framer-motion";
import { Calendar, Info } from "lucide-react";
import { property } from "@/data/property";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function Pricing() {
  const { costs } = property;

  const items = [
    { label: "Aluguel", value: costs.rent, suffix: "/mês" },
    { label: "Condomínio", value: costs.condo, suffix: "/mês" },
    {
      label: "IPTU + TLP",
      value: costs.iptuMonthly,
      suffix: "/mês",
      prefix: "~",
    },
  ];

  return (
    <section className="px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[700px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl">Valores</h2>
          <p className="mt-2 text-sm text-muted">
            Transparência é prioridade. Aqui está tudo que você precisa saber.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-background-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-between px-6 py-4 ${
                i < items.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="text-muted">{item.label}</span>
              <span className="font-mono text-lg">
                {item.prefix}
                {formatCurrency(item.value)}
                <span className="text-sm text-muted">{item.suffix}</span>
              </span>
            </div>
          ))}

          {/* Total */}
          <div className="flex items-center justify-between bg-background-warm px-6 py-5">
            <span className="font-semibold">Total estimado</span>
            <span className="font-mono text-xl font-bold text-accent">
              ~{formatCurrency(costs.totalEstimated)}
              <span className="text-sm font-normal text-muted">/mês</span>
            </span>
          </div>
        </motion.div>

        {/* Conditions */}
        <motion.div
          className="mt-6 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted">
            <Calendar className="h-4 w-4" />
            <span>Prazo mínimo: {costs.minimumTerm}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Info className="h-4 w-4" />
            <span>Garantia locativa: {costs.guarantee}</span>
          </div>
          <p className="text-xs text-muted/70">
            Valores de condomínio e IPTU sujeitos a reajuste. Valor de aluguel
            para contrato de 12 meses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
