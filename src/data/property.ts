export const property = {
  // Identificação
  address: {
    full: "SQN 415/416, Bloco P, Apt 202",
    block: "SQN 415/416, Bloco P",
    unit: "Apt 202",
    neighborhood: "Asa Norte",
    city: "Brasília",
    state: "DF",
    cep: "70879-160",
    floor: "2º andar",
  },

  // Características
  details: {
    type: "Apartamento residencial",
    area: "~65 m²",
    areaOfficial: "55,65 m²",
    bedrooms: 3,
    suites: 0,
    bathrooms: 2,
    bathroomsDescription: "social + serviço",
    livingRoom: "Estar/jantar integradas",
    kitchen: true,
    serviceArea: true,
    maidRoom: true,
    maidRoomDescription: "quarto + banheiro",
    balcony: false,
    parking: false,
    elevator: false,
    ventilation: "Vazado — ventilação cruzada",
    furnished: "Semi-mobiliado",
    yearBuilt: "1973",
    builder: "Master Piccin Engenharia S/A",
  },

  // Equipamentos inclusos
  appliances: [
    "Geladeira",
    "Lava-louças",
    "Fogão 4 bocas embutido",
    "Máquina lava e seca",
  ],

  // Estado de conservação
  conservation: {
    general: "Ótimo",
    items: [
      "Pintura completa recente",
      "Pisos em taco originais restaurados (sinteco)",
      "Instalação elétrica completamente reformada",
      "Cozinha com projeto contemporâneo",
    ],
  },

  // Condomínio
  building: {
    doorman: "Digital (sem porteiro presencial)",
    elevator: false,
    pool: false,
    partyRoom: true,
    gym: false,
    bikeRack: true,
    pets: true,
  },

  // Custos
  costs: {
    rent: 3800,
    condo: 930,
    iptuMonthly: 110,
    iptuAnnual: 1373.77,
    totalEstimated: 4844.48,
    minimumTerm: "12 meses",
    guarantee: "A definir",
  },

  // Coordenadas
  coordinates: {
    lat: -15.73617,
    lng: -47.88808,
  },

  // Pontos de interesse
  pointsOfInterest: [
    {
      name: "Parque Olhos D'Água",
      distance: "~5 min a pé",
      description: "Parque ecológico com trilhas, nascente e fauna nativa",
      icon: "TreePine" as const,
    },
    {
      name: "Calçadão Deck Norte",
      distance: "~5 min a pé",
      description: "Acesso ao Lago Paranoá — caminhada, ciclovia e pôr do sol",
      icon: "Sunset" as const,
    },
    {
      name: "Comércio local",
      distance: "< 200 m",
      description: "Supermercado, restaurantes e farmácia na quadra",
      icon: "ShoppingBag" as const,
    },
    {
      name: "Feira agroecológica",
      distance: "Na quadra",
      description: "Aos sábados — produtos frescos de agricultura familiar",
      icon: "Leaf" as const,
    },
  ],

  // Destaques para o anúncio
  highlights: [
    {
      title: "Ventilação cruzada",
      description:
        "Apartamento vazado com brisa natural o dia todo.",
      icon: "Wind" as const,
    },
    {
      title: "Piso em taco restaurado",
      description:
        "Tacos originais de 1973 com restauração em sinteco. O charme dos anos 70 no seu melhor estado.",
      icon: "Layers" as const,
    },
    {
      title: "Cozinha contemporânea",
      description:
        "Projeto que dialoga com a estética original do prédio — armários, prateleiras e bancada renovados.",
      icon: "ChefHat" as const,
    },
    {
      title: "Semi-mobiliado",
      description:
        "Geladeira, fogão embutido, lava-louças e lava e seca inclusos. É chegar e morar.",
      icon: "Refrigerator" as const,
    },
    {
      title: "Pet-friendly",
      description:
        "Além do condomínio permitir animais, temos uma ampla área verde próxima ao bloco, onde seu cão pode correr à vontade.",
      icon: "PawPrint" as const,
    },
    {
      title: "Integrado à natureza",
      description:
        "A menos de 5 min do Parque Olhos D'Água. Trilhas, nascente e fauna a poucos passos. Natureza integrada ao dia a dia.",
      icon: "TreePine" as const,
    },
  ],

  // Contato
  contact: {
    whatsapp: "5561982399222",
    whatsappMessage:
      "Olá! Vi o anúncio do apartamento na SQN 416 e tenho interesse. Podemos conversar?",
    email: "apartamentomocha@gmail.com",
  },

  // Hero
  hero: "/images/gallery/hero.jpg",

  // Galeria
  galleryFilters: ["Todos", "Sala", "Cozinha", "Quartos", "Banheiros", "Área de serviço", "Externo"] as const,
  gallery: [
    { label: "Sala de estar", src: "/images/gallery/sala-vista.jpg", room: "Sala" },
    { label: "Sala — janela", src: "/images/gallery/sala-janela.jpg", room: "Sala" },
    { label: "Sala — frontal", src: "/images/gallery/sala-frontal.jpg", room: "Sala" },
    { label: "Vista da janela", src: "/images/gallery/vista-janela.jpg", room: "Sala" },
    { label: "Cozinha", src: "/images/gallery/cozinha-frontal.jpg", room: "Cozinha" },
    { label: "Cozinha — angular", src: "/images/gallery/cozinha-angular.jpg", room: "Cozinha" },
    { label: "Cozinha — equipamentos", src: "/images/gallery/cozinha-equipamentos.jpg", room: "Cozinha" },
    { label: "Quarto 1", src: "/images/gallery/quarto1-janela.jpg", room: "Quartos" },
    { label: "Quarto 1 — armário", src: "/images/gallery/quarto1-armario.jpg", room: "Quartos" },
    { label: "Quarto 2", src: "/images/gallery/quarto2-entrada.jpg", room: "Quartos" },
    { label: "Quarto 2 — janela", src: "/images/gallery/quarto2-janela.jpg", room: "Quartos" },
    { label: "Quarto 3", src: "/images/gallery/quarto3.jpg", room: "Quartos" },
    { label: "Banheiro social", src: "/images/gallery/banheiro-social.jpg", room: "Banheiros" },
    { label: "Banheiro de serviço", src: "/images/gallery/banheiro-servico.jpg", room: "Banheiros" },
    { label: "Área de serviço — lavanderia", src: "/images/gallery/area-servico-lavanderia.jpg", room: "Área de serviço" },
    { label: "Área de serviço — cobogó", src: "/images/gallery/area-servico-cobogo.jpg", room: "Área de serviço" },
    { label: "Área de serviço", src: "/images/gallery/area-servico.jpg", room: "Área de serviço" },
    { label: "Fachada — jardim", src: "/images/gallery/fachada-jardim.jpg", room: "Externo" },
    { label: "Fachada — frontal", src: "/images/gallery/fachada-frontal.jpg", room: "Externo" },
    { label: "Portaria", src: "/images/gallery/portaria.jpg", room: "Externo" },
    { label: "Quadra de esportes", src: "/images/gallery/quadra.jpg", room: "Externo" },
  ],

  // Planta baixa
  floorPlan: {
    src: null as string | null, // Substituir pelo path da imagem
    measurements: {
      widthTop: "7,53 m",
      widthBottom: "8,91 m",
      depthService: "2,80 m",
      depthCirculation: "1,33 m",
      depthSocial: "4,70 m",
      heightRight: "7,50 m",
    },
    rooms: [
      "Sala estar/jantar",
      "Cozinha",
      "Quarto 1",
      "Quarto 2",
      "Quarto 3",
      "Banheiro social",
      "Banheiro serviço",
      "Área de serviço",
      "Dependência",
    ],
  },
} as const;

export type Property = typeof property;
