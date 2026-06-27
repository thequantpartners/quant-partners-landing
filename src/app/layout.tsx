import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Quant Partners — Pipeline de Casos Calificados para Firmas EB-2 / O-1",
  description:
    "Sistema de pre-calificación para firmas boutique de inmigración. Captamos solicitantes, filtramos a los no calificados y cobramos la consulta antes de que lleguen a usted. Solo cierra casos.",
  keywords: [
    "abogados inmigración",
    "EB-2 NIW",
    "visa O-1",
    "pre-calificación de leads",
    "self-liquidating funnel",
    "pipeline legal",
  ],
  openGraph: {
    title: "The Quant Partners",
    description: "Pipeline de casos calificados para firmas de inmigración EB-2 / O-1",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#080c16] text-white antialiased`}
      >
        {children}
        <Script
          src="https://googlemaker-production.up.railway.app/static/gmaker-widget.js?client=6aa66a26-5893-4c99-8487-4f95f190800a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
