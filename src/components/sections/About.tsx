"use client";

import { motion } from "framer-motion";
import { Package, Sparkles, Home, Banknote } from "lucide-react";
import { property } from "@/data/property";

export function About() {
  return (
    <section className="px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header + intro text — full width */}
        <div className="mb-12 max-w-3xl">
          <motion.h2
            className="font-serif text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sobre o apartamento
          </motion.h2>
          <motion.div
            className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg md:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              Construído em 1973, este apartamento carrega a planta generosa
              típica das superquadras da Asa Norte — projetado para ser vazado,
              com ventilação cruzada que traz brisa natural o dia todo. É o tipo
              de espaço que não se faz mais.
            </p>
            <p>
              Renovado com cuidado: os pisos em taco originais foram restaurados
              com sinteco, a instalação elétrica foi completamente refeita e a
              cozinha ganhou um projeto contemporâneo — armários, prateleiras e
              bancada que dialogam com a estética original do prédio.
            </p>
            <p>
              No dia a dia, a sala integrada recebe luz natural generosa. O
              Parque Olhos D&apos;Água fica a 5 minutos a pé. Na quadra, tem
              supermercado, restaurantes e feira agroecológica aos sábados.
              No 2º andar, com bicicletário no prédio — um convite para
              pedalar pela Asa Norte.
            </p>
          </motion.div>
        </div>

        {/* Bento grid — 2 cols on desktop */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Detalhes do imóvel — spans full width on desktop */}
          <motion.div
            className="rounded-xl border border-white/10 bg-background-card p-6 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:flex md:gap-10">
              <div className="md:flex-1">
                <Home className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-semibold text-lg">Detalhes do imóvel</h3>
                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                  <span className="text-muted">
                    <strong className="text-foreground">3</strong> quartos
                  </span>
                  <span className="text-muted">
                    <strong className="text-foreground">2</strong> banheiros
                  </span>
                  <span className="text-muted">
                    <strong className="text-foreground">{property.details.area}</strong>
                  </span>
                  <span className="text-muted">
                    <strong className="text-foreground">{property.address.floor}</strong>
                  </span>
                  <span className="text-muted whitespace-nowrap">Ventilação cruzada</span>
                  <span className="text-muted whitespace-nowrap">Semi-mobiliado</span>
                  <span className="text-muted whitespace-nowrap">Pet-friendly</span>
                  <span className="text-muted whitespace-nowrap">Bicicletário</span>
                </div>
              </div>
              <div className="mt-4 border-t border-white/10 pt-4 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                <span className="text-xs uppercase tracking-wider text-muted/70">Cômodos</span>
                <ul className="mt-2 columns-2 gap-x-6 space-y-1 text-sm text-muted">
                  <li>• Cozinha contemporânea</li>
                  <li>• Sala integrada (estar / jantar)</li>
                  <li>• Ampla área de serviço</li>
                  <li>• Banheiro social</li>
                  <li>• Banheiro de serviço</li>
                  <li>• Quarto reversível (dependência)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Equipamentos */}
          <motion.div
            className="rounded-xl border border-white/10 bg-background-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Package className="h-6 w-6 text-accent" />
            <h3 className="mt-3 font-semibold">Equipamentos inclusos</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {property.appliances.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Conservação */}
          <motion.div
            className="rounded-xl border border-white/10 bg-background-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="rounded-full bg-accent/20 px-3 py-0.5 text-xs font-medium text-accent-light">
                Ótimo estado
              </span>
            </div>
            <h3 className="mt-3 font-semibold">Estado de conservação</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {property.conservation.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Valores — spans full width */}
          <motion.div
            className="rounded-xl border border-white/10 bg-background-card p-6 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <Banknote className="h-6 w-6 text-accent" />
              <h3 className="font-semibold text-lg">Valores</h3>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-muted uppercase tracking-wider">Aluguel</span>
                <span className="mt-1 font-mono text-sm sm:text-base md:text-lg font-semibold leading-tight whitespace-nowrap">
                  R$ {property.costs.rent.toLocaleString("pt-BR")}
                </span>
                <span className="text-muted text-xs">/mês</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted uppercase tracking-wider">Condomínio</span>
                <span className="mt-1 font-mono text-sm sm:text-base md:text-lg font-semibold leading-tight whitespace-nowrap">
                  R$ {property.costs.condo.toLocaleString("pt-BR")}
                </span>
                <span className="text-muted text-xs">/mês</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted uppercase tracking-wider">IPTU + TLP</span>
                <span className="mt-1 font-mono text-sm sm:text-base md:text-lg font-semibold leading-tight whitespace-nowrap">
                  ~R$ {property.costs.iptuMonthly.toLocaleString("pt-BR")}
                </span>
                <span className="text-muted text-xs">/mês</span>
              </div>
            </div>
            <p className="mt-5 text-xs text-muted/70 border-t border-white/10 pt-4">
              Prazo mínimo: {property.costs.minimumTerm} · Garantia: {property.costs.guarantee}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
