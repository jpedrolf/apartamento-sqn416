# Design Brief — Site de Locação SQN 415/416

## Conceito

**"Um apartamento com alma na melhor região da Asa Norte."**

O imóvel tem narrativa: construído em 1973, planta generosa, ventilação cruzada natural. Renovado com cuidado — taco restaurado, cozinha contemporânea, elétrica refeita. O site deve comunicar esse equilíbrio entre história e conforto.

## Direção Estética: Editorial Residencial

Inspirado em revistas de arquitetura e design de interiores. Limpo, tipografia expressiva, fotos em destaque. Nada de template imobiliário genérico.

### Tipografia
- **Títulos**: Serifada com personalidade — DM Serif Display, Playfair Display, Cormorant Garamond, ou Lora
- **Corpo**: Sans-serif legível e elegante — DM Sans, Outfit, Satoshi
- **Dados/valores**: Monospace — JetBrains Mono, Space Mono
- Hierarquia clara: títulos grandes e impactantes, corpo confortável

### Paleta de Cores
- **Primária**: `#2d6a4f` — verde escuro profundo (natureza, madeira, Parque Olhos D'Água)
- **Fundo**: `#fafaf8` ou `#f5f0eb` — off-white quente
- **Texto**: `#1a1a2e` — quase-preto quente
- **Acentos**: `#d8f3dc` verde claro, `#c9a96e` dourado suave
- **Muted**: `#8888a4` — textos secundários

### Layout
- Hero full-width com foto + overlay gradiente + dados essenciais
- Seções com espaçamento generoso — o apartamento é arejado, o site também
- Grid assimétrico na galeria (não grid uniforme)
- Cards com bordas sutis e hover states elegantes
- **Mobile-first**: cards empilhados, swipe na galeria, botão WhatsApp fixo

### Animações
- Fade-in + slide-up suave ao scroll (Framer Motion / intersection observer)
- Parallax sutil no hero
- Hover com transição de cor nos cards
- Lightbox com transição fluida na galeria
- Sem exagero — elegância > espetáculo

## Seções

### 1. Hero

A primeira impressão do site. Deve transmitir imediatamente a identidade do apartamento — charme, espaço, localização.

**Layout:**
- Foto principal (sala ou vista geral) — full-width, `min-height: 85vh`
- Overlay com gradiente escuro sutil na base (`linear-gradient` de transparente para `rgba(0,0,0,0.5)`) para garantir legibilidade do texto sobre a imagem
- Conteúdo alinhado à esquerda, no terço inferior da imagem

**Conteúdo:**
- Badge superior: pill arredondada com fundo verde translúcido (`#2d6a4f/80`) e texto branco — "Disponível para locação"
- Endereço principal em fonte serifada grande: "SQN 415/416, Bloco P" com "Apt 202" logo abaixo ou na mesma linha em peso mais leve
- Linha de dados em fonte sans-serif: "3 quartos · ~75 m² · Asa Norte, Brasília" — separados por `·` (middle dot)
- Valor do aluguel em destaque: "R$ 3.800/mês" em fonte monospace, tamanho grande, com label "aluguel" em texto muted acima

**Interação:**
- Parallax sutil: a imagem de fundo move-se mais devagar que o conteúdo ao fazer scroll (fator ~0.3)
- Seta ou indicador de scroll animado na base (chevron pulsando para baixo)
- Fade-in sequencial dos elementos de texto ao carregar a página (badge → título → subtítulo → preço, com 100-150ms de delay entre cada)

**Mobile:**
- `min-height: 100svh` (small viewport height para lidar com a barra do navegador)
- Texto centralizado em vez de alinhado à esquerda
- Font sizes reduzidos mas ainda impactantes (título ~2rem, subtítulo ~1rem)

---

### 2. Destaques Rápidos

Seção logo após o hero para comunicar os 6 principais diferenciais de forma rápida e escaneável.

**Layout:**
- Título da seção: "Por que este apartamento" ou simplesmente sem título — os cards falam por si
- Grid: 3 colunas no desktop, 2 no tablet, 1 no mobile
- Gap generoso entre cards (~24px)
- Container com `max-width` centralizado (~1100px)

**Cards — Estrutura de cada um:**
- Fundo: branco (`#ffffff`) com borda sutil (`1px solid #e8e8e0`) e `border-radius: 12px`
- Padding interno generoso (~24px)
- Ícone: Lucide React, tamanho 28-32px, cor verde primária (`#2d6a4f`)
- Título: sans-serif bold, 1 linha
- Descrição: 1-2 linhas, cor muted, font-size menor

**Os 6 destaques:**
1. **Ventilação cruzada** (ícone: `Wind`) — "Apartamento vazado com brisa natural o dia todo — dispensa ar-condicionado na maior parte do ano."
2. **Piso em taco restaurado** (ícone: `Layers` ou `Footprints`) — "Tacos originais de 1973 com restauração em sinteco. O charme dos anos 70 no seu melhor estado."
3. **Cozinha contemporânea** (ícone: `ChefHat` ou `CookingPot`) — "Projeto que dialoga com a estética original do prédio — armários, prateleiras e bancada renovados."
4. **Semi-mobiliado** (ícone: `Refrigerator` ou `WashingMachine`) — "Geladeira, fogão embutido, lava-louças e lava e seca inclusos. É chegar e morar."
5. **Pet-friendly** (ícone: `PawPrint`) — "Condomínio permite animais. E o Parque Olhos D'Água fica a 5 minutos a pé."
6. **Parque Olhos D'Água** (ícone: `TreePine` ou `Trees`) — "Trilhas, nascente e fauna a poucos passos. Natureza integrada ao dia a dia."

**Interação:**
- Cards fazem fade-in + slide-up ao entrar no viewport (stagger de ~100ms entre cada card)
- Hover: elevação sutil (`box-shadow` + leve `translateY(-2px)`) com transição de 200ms

---

### 3. Galeria de Fotos

Seção visual central. Deve ser convidativa e transmitir a experiência de estar no apartamento.

**Layout — Grid assimétrico:**
- Desktop: grid de 3 colunas × 2 linhas, onde a foto principal ocupa 2 colunas × 2 linhas (grande à esquerda), e as 4 menores ficam à direita em grid 2×2
- Tablet: grid 2 colunas, foto principal ocupa 2 colunas na primeira linha
- Mobile: carrossel horizontal com snap scroll (uma foto por vez, dots de navegação abaixo)
- Aspect ratios: foto principal 4:3, fotos secundárias 3:2
- `border-radius: 8px` em todas as fotos, `gap: 8px`

**Placeholders (enquanto fotos não chegam):**
- Retângulos com fundo em gradiente suave (variações de `#f5f0eb` para `#e8e8e0`)
- Ícone centralizado: `Camera` (Lucide) em cor muted
- Label em texto muted: "Sala de estar", "Cozinha", "Quarto principal", etc., para indicar o que cada foto mostrará

**Lightbox:**
- Ao clicar em qualquer foto, abre overlay escuro (`rgba(0,0,0,0.9)`) com a foto ampliada
- Navegação: setas laterais (desktop) + swipe (mobile) + teclas ← → (keyboard)
- Counter: "3 / 8" no topo
- Fechar: botão × no canto superior direito + tecla Esc + clique fora da imagem
- Transição de abertura: zoom suave a partir da posição original da foto (shared layout animation com Framer Motion)

**Interação:**
- Hover nas fotos: leve zoom (scale 1.03) com transição suave + cursor pointer
- Botão "Ver todas as fotos" abaixo do grid se houver mais de 6 fotos

---

### 4. Sobre o Apartamento

Seção narrativa. Aqui o apartamento ganha voz — é onde a história do imóvel é contada.

**Layout:**
- Dois blocos lado a lado no desktop (texto à esquerda 60%, cards à direita 40%), empilhados no mobile
- Título da seção em fonte serifada: "Sobre o apartamento" ou "Um espaço que conta história"

**Bloco de texto (esquerda):**
- 2-3 parágrafos descritivos em prosa fluida, font-size confortável (~18px / 1.1rem)
- Tom: acolhedor, descritivo, honesto
- Conteúdo sugerido:
  - Parágrafo 1: A história — construído em 1973, planta generosa típica das superquadras, pensado para ventilação cruzada natural
  - Parágrafo 2: A renovação — pisos restaurados, elétrica refeita, cozinha repensada com projeto contemporâneo que respeita a estética original
  - Parágrafo 3: O dia a dia — a sala integrada, a luz natural, a proximidade do parque, o comércio na porta
- Contextualizar com honestidade: "Sem garagem e sem elevador — mas no 2º andar, a escada vira parte leve da rotina. E o bicicletário do prédio é um convite para pedalar pela Asa Norte."

**Cards laterais (direita) — 3 cards empilhados:**

1. **Equipamentos inclusos** (ícone: `Package`)
   - Lista: Geladeira, Fogão 4 bocas embutido, Lava-louças, Máquina lava e seca
   - Formato: lista com bullet points ou ícones pequenos por item

2. **Estado de conservação** (ícone: `Sparkles`)
   - Itens: Pintura completa recente, Pisos em taco restaurados (sinteco), Instalação elétrica reformada
   - Destaque: badge "Ótimo estado" no topo do card

3. **Detalhes do imóvel** (ícone: `Home`)
   - Grid 2×2 com dados: 3 quartos, 2 banheiros, Sala integrada, Área de serviço
   - Nota: "Inclui dependência completa (quarto + banheiro)"

**Estilo dos cards:**
- Fundo levemente diferenciado (`#f5f0eb`) para contraste com o fundo da página
- `border-radius: 12px`, padding generoso
- Ícone do card no canto superior com cor verde primária

---

### 5. Planta Baixa

Seção técnica mas elegante — para quem quer entender a distribuição dos espaços.

**Layout:**
- Container centralizado, `max-width: 900px`
- Título: "Planta baixa" em fonte serifada
- Subtítulo muted: "Projeto original de 1973 — escala 1:50"

**Imagem:**
- Imagem da planta centralizada com `max-width: 100%`
- Fundo do container levemente contrastado para a planta se destacar
- Possibilidade de zoom (click para ampliar em lightbox ou pinch-to-zoom no mobile)

**Medidas destacadas (abaixo ou ao lado da imagem):**
- Grid ou lista horizontal com as cotas principais:
  - Largura: 7,53 m — 8,91 m
  - Profundidade: 2,80 m (serviço) + 1,33 m (circ.) + 4,70 m (social)
  - Área útil estimada: ~75 m²
- Valores em fonte monospace para reforçar o caráter técnico
- Label em fonte sans-serif muted acima de cada valor

**Legenda dos ambientes:**
- Lista compacta dos cômodos: Sala estar/jantar, Cozinha, 3 Quartos, 2 Banheiros, Área de serviço, Dependência
- Pode ser inline abaixo da planta ou como tooltip/overlay se a imagem for interativa

**Placeholder (sem imagem ainda):**
- Retângulo com proporção ~4:3, fundo sutil, ícone `LayoutGrid` centralizado
- Texto: "Planta baixa em preparação"

---

### 6. Localização

Mostrar que a localização é um dos maiores atrativos — Asa Norte, cercada de natureza e conveniência.

**Layout:**
- Seção dividida: mapa ocupa metade (ou mais) da largura no desktop, cards de pontos de interesse na outra metade
- Mobile: mapa em cima (aspect ratio 16:9), cards empilhados abaixo
- Título: "Localização" em serifada + subtítulo: "Asa Norte, Brasília — DF"

**Mapa:**
- Embed do Google Maps centralizado nas coordenadas (-15.7467, -47.8823) com zoom ~15
- Estilo: preferencialmente mapa com estilo personalizado (tons mais suaves) ou estilo padrão
- Pin/marker no endereço do prédio
- `border-radius: 12px`, sem bordas externas
- Alternativa (se preferir não usar embed): imagem estática do mapa via Google Maps Static API

**Cards de pontos de interesse — 4 cards:**

1. **Parque Olhos D'Água** (ícone: `TreePine`)
   - Distância: "~5 min a pé"
   - Descrição: "Parque ecológico com trilhas, nascente e fauna nativa"

2. **Calçadão Deck Norte** (ícone: `Sunset` ou `Waves`)
   - Distância: "~10 min de carro"
   - Descrição: "Acesso ao Lago Paranoá — caminhada, ciclovia e pôr do sol"

3. **Comércio local** (ícone: `ShoppingBag` ou `Store`)
   - Distância: "< 200 m"
   - Descrição: "Supermercado, restaurantes e farmácia na quadra"

4. **Feira agroecológica** (ícone: `Leaf` ou `Apple`)
   - Distância: "Na quadra"
   - Descrição: "Aos sábados — produtos frescos de agricultura familiar"

**Estilo dos cards:**
- Compactos, com ícone à esquerda e texto à direita
- Distância em destaque (font-weight bold ou badge com fundo verde claro `#d8f3dc`)
- Hover: fundo muda sutilmente

---

### 7. Valores e Condições

Transparência total. Nada de esconder custos — o inquilino vê exatamente o que vai pagar.

**Layout:**
- Container centralizado, `max-width: 700px`
- Título: "Valores" em serifada
- Subtítulo muted: "Transparência é prioridade. Aqui está tudo que você precisa saber."

**Tabela de custos — estilo card único:**
- Fundo branco com borda sutil, `border-radius: 16px`, padding generoso
- Cada linha de custo é uma row com label à esquerda e valor à direita:
  - Aluguel → R$ 3.800/mês
  - Condomínio → R$ 930/mês
  - IPTU + TLP → ~R$ 114/mês
- Separador visual (linha horizontal fina `1px solid #e8e8e0`) entre os itens
- **Linha de total** no final: fundo levemente contrastado, font-weight bold, font-size maior
  - "Total estimado" → "~R$ 4.844/mês"
  - Valores em fonte monospace
- Todos os valores alinhados à direita

**Condições (abaixo do card de valores):**
- Prazo mínimo: 12 meses
- Garantia locativa: a definir
- Formato: texto simples com ícone `Info` ou `Calendar` ao lado, em cor muted
- Tom: direto, sem letras miúdas

**Nota contextual (opcional):**
- Texto pequeno e muted abaixo: "Valores de condomínio e IPTU sujeitos a reajuste. Valor de aluguel para contrato de 12 meses."

---

### 8. Contato / CTA

O objetivo final da página: converter o visitante em contato no WhatsApp.

**Layout — Seção final:**
- Fundo diferenciado: verde escuro (`#2d6a4f`) com texto branco, criando contraste com o resto da página
- Container centralizado, padding vertical generoso (~80px)
- Título em serifada branca: "Quer conhecer o apartamento?" ou "Agende uma visita"
- Subtítulo: "Entre em contato pelo WhatsApp — respondo rápido."

**Botão WhatsApp principal:**
- Grande e proeminente: `padding: 16px 48px`, `border-radius: 50px` (pill shape)
- Fundo branco com texto verde escuro (inversão da paleta) ou verde claro `#25D366` (cor oficial WhatsApp)
- Ícone do WhatsApp à esquerda do texto (usar SVG customizado ou ícone Lucide `MessageCircle`)
- Texto: "Conversar no WhatsApp"
- Hover: leve elevação + brilho sutil

**Mensagem pré-preenchida no WhatsApp:**
- URL: `https://wa.me/NUMERO?text=MENSAGEM`
- Mensagem sugerida: "Olá! Vi o anúncio do apartamento na SQN 415/416 (Apt 202) e tenho interesse. Podemos conversar?"
- Número será configurado posteriormente (usar placeholder editável no `property.ts`)

**Alternativa de contato:**
- Abaixo do botão: "Ou envie um e-mail para [email]" — link `mailto:` em texto branco com underline sutil
- E-mail também configurável via `property.ts`

**Botão WhatsApp flutuante (mobile):**
- Floating Action Button fixo no canto inferior direito em todas as páginas
- Circular, ~56px, fundo verde WhatsApp (`#25D366`), ícone branco
- `box-shadow` para destacar do conteúdo
- `z-index` alto para ficar acima de tudo
- Aparece após o usuário fazer scroll (não aparece no hero para não poluir)
- Animação: slide-in da direita ao aparecer
- No desktop: pode ser um botão retangular fixo no canto inferior direito ("Fale conosco") em vez de circular

## Tom do Texto

- **Informativo sem ser burocrático** — dados claros, sem jargão imobiliário
- **Acolhedor sem ser piegas** — é para morar, não para vender sonhos
- **Honesto** — não esconder ausência de garagem/elevador; contextualizar positivamente
- **Enxuto** — quem busca apartamento quer dados rápidos

## Assets

- [ ] Fotos profissionais do apartamento (prioridade máxima)
- [ ] Imagem da planta baixa tratada (digitalizar do PDF do projeto)
- [ ] Ícones: usar Lucide React
- [ ] OG Image para compartilhamento em redes sociais
