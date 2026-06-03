import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const TITLE = "Abogado de Derecho de Familia en Chile | Consulta Gratuita";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | " + SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Legal",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description:
      "Asesoría legal especializada en Derecho de Familia. Divorcio, pensión de alimentos, cuidado personal y más. Primera consulta gratuita.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Asesoría legal especializada en Derecho de Familia en Chile. Primera consulta gratuita.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
