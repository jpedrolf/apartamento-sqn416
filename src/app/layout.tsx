import type { Metadata } from "next";
import { Ledger, DM_Sans, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const ledger = Ledger({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apartamento-mocha.vercel.app"),
  title: "Apartamento Mocha · SQN 416, Bloco P — Asa Norte, Brasília",
  description:
    "Apartamento de 3 quartos na Asa Norte, Brasília. ~65m², ventilação cruzada, piso em taco restaurado, cozinha contemporânea. Semi-mobiliado, pet-friendly, ao lado do Parque Olhos D'Água. R$ 3.800/mês.",
  keywords: [
    "aluguel apartamento Asa Norte",
    "SQN 416",
    "apartamento Brasília",
    "3 quartos Asa Norte",
    "pet-friendly Brasília",
    "Parque Olhos D'Água",
  ],
  openGraph: {
    title: "Apartamento Mocha · SQN 416 — Asa Norte",
    description:
      "3 quartos · ~65m² · Semi-mobiliado · Pet-friendly · Parque Olhos D'Água a 5 min. R$ 3.800/mês.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamento Mocha — 3 quartos, ~65 m², Asa Norte, Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento Mocha · SQN 416 — Asa Norte",
    description:
      "3 quartos · ~65m² · Semi-mobiliado · Pet-friendly · R$ 3.800/mês.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${ledger.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
