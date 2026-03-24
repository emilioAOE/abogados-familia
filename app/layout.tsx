import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abogado de Derecho de Familia en Chile | Consulta Gratuita",
  description:
    "Abogado especialista en Derecho de Familia en Chile. Divorcio, pensión de alimentos, cuidado personal, mediación familiar, violencia intrafamiliar. Consulta gratuita por WhatsApp.",
  keywords: [
    "abogado derecho de familia chile",
    "abogado de familia santiago",
    "divorcio chile",
    "pensión de alimentos chile",
    "cuidado personal hijos chile",
    "mediación familiar chile",
    "violencia intrafamiliar abogado",
    "régimen de visitas chile",
    "abogado divorcio santiago",
    "liquidación sociedad conyugal",
    "acuerdo de unión civil chile",
    "reconocimiento de paternidad chile",
    "abogado familia consulta gratis",
  ],
  openGraph: {
    title: "Abogado de Derecho de Familia en Chile | Consulta Gratuita",
    description:
      "Asesoría legal especializada en Derecho de Familia. Divorcio, pensión de alimentos, cuidado personal y más. Primera consulta gratuita.",
    type: "website",
    locale: "es_CL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
