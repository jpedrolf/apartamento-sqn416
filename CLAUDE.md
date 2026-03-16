# Projeto: Site de Locação — Apt 202, SQN 415/416, Bloco P

## Contexto

Site de anúncio de locação para um apartamento na Asa Norte, Brasília-DF. O objetivo é criar uma **landing page elegante e funcional** que transmita a personalidade do imóvel e facilite o contato de potenciais inquilinos via WhatsApp.

O apartamento tem história (construído em 1973) mas foi renovado com bom gosto — pisos em taco restaurados, cozinha contemporânea, elétrica refeita. O site deve refletir esse equilíbrio entre charme original e conforto moderno.

## Stack Recomendada

- **Next.js 14+** (App Router) + **TypeScript**
- **Tailwind CSS 3+**
- **Framer Motion** para animações
- **Lucide React** para ícones
- Deploy: Vercel

## Dados do Imóvel

Todos os dados estão em `docs/FICHA_CADASTRAL.md` — é a referência completa. Criar um `src/data/property.ts` como single source of truth para o site, importando daí em todos os componentes.

## Design

Ver `docs/DESIGN_BRIEF.md` para diretrizes detalhadas. Resumo:

- **Tom**: Sofisticado mas acolhedor. Editorial residencial.
- **Tipografia**: Serifada marcante para títulos (ex: DM Serif Display, Playfair) + sans-serif limpa para corpo (DM Sans, Outfit) + monospace para dados (JetBrains Mono)
- **Paleta**: Verde escuro `#2d6a4f` como primária, off-white `#fafaf8` fundo, acentos quentes
- **Layout**: Hero full-width, fotos grandes, espaçamento generoso, mobile-first
- **Animações**: Fade-in suave ao scroll, parallax sutil no hero

## Seções da Landing Page

1. **Hero** — Foto principal + endereço + "3 quartos · ~75m² · Asa Norte" + preço
2. **Destaques** — Grid com 6 diferenciais (ventilação cruzada, taco, cozinha, semi-mobiliado, pet-friendly, parque)
3. **Galeria** — Grid assimétrico com lightbox (placeholders por enquanto, fotos virão depois)
4. **Sobre** — Texto descritivo + cards de detalhes (equipamentos, reforma, conservação)
5. **Planta Baixa** — Imagem da planta com medidas
6. **Localização** — Mapa + pontos de interesse (Parque Olhos D'Água, Deck Norte, comércio, feira)
7. **Valores** — Aluguel R$ 3.800 + condomínio R$ 930 + IPTU ~R$ 114 + total estimado
8. **Contato** — Botão WhatsApp proeminente (fixo no mobile) com mensagem pré-preenchida

## Notas

- `public/images/` estará vazia — usar placeholders com aspect ratio correto
- Botão WhatsApp deve abrir `wa.me/` com mensagem pré-preenchida. Número será configurado depois.
- Sem vaga de garagem nem elevador — não esconder, mas contextualizar positivamente
- SEO: metadata para compartilhamento em redes sociais
- Performance: `next/image`, lazy loading na galeria
