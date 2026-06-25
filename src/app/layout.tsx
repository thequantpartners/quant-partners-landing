import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Quant Partners — Sistemas Automáticos de Adquisición de Clientes",
  description:
    "No hacemos páginas web. Construimos máquinas automáticas de adquisición de clientes. Web de alta conversión + IA propietaria + Google Ads gestionado.",
  keywords: [
    "agencia digital",
    "google ads",
    "landing page",
    "chat widget IA",
    "growth partner",
    "adquisición clientes",
  ],
  openGraph: {
    title: "The Quant Partners",
    description: "Sistemas Automáticos de Adquisición y Conversión de Clientes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#080c16] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
