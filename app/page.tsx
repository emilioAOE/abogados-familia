import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Method from "@/components/Method";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  PHONE_E164,
  AREAS_SERVED,
} from "@/lib/site";

const SERVICE_TYPES = [
  "Divorcio",
  "Pensión de Alimentos",
  "Cuidado Personal de Hijos",
  "Régimen de Visitas",
  "Violencia Intrafamiliar",
  "Adopción",
  "Mediación Familiar",
  "Liquidación de Sociedad Conyugal",
  "Acuerdo de Unión Civil",
  "Reconocimiento de Paternidad",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#legalservice`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_E164,
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/icon`,
  priceRange: "$$",
  currenciesAccepted: "CLP",
  knowsLanguage: "es-CL",
  areaServed: [
    { "@type": "Country", name: "Chile" },
    ...AREAS_SERVED.map((city) => ({ "@type": "City", name: city })),
  ],
  serviceType: ["Derecho de Familia", ...SERVICE_TYPES],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    contactType: "customer service",
    areaServed: "CL",
    availableLanguage: ["Spanish"],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Derecho de Familia",
    itemListElement: SERVICE_TYPES.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto demora un juicio de divorcio en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un divorcio de mutuo acuerdo puede tomar entre 2 a 4 meses. Un divorcio unilateral por cese de convivencia puede demorar entre 6 meses a 1 año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se calcula la pensión de alimentos en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se calcula considerando las necesidades del hijo/a y la capacidad económica del alimentante. El mínimo legal es el 40% de un ingreso mínimo si hay un solo hijo y el 30% por cada hijo si hay varios; el máximo es el 50% de los ingresos del alimentante (Art. 3 Ley 14.908).",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatoria la mediación familiar en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es requisito previo obligatorio para demandas de alimentos, cuidado personal y relación directa y regular. Se exceptúan casos de violencia intrafamiliar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un abogado de familia en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los honorarios varían según la complejidad del caso. Ofrecemos consulta inicial gratuita y planes de pago flexibles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no me pagan la pensión de alimentos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Ley 21.389 creó el Registro Nacional de Deudores de Pensiones de Alimentos: niega pasaporte y licencia de conducir, retiene la devolución de impuestos y el 50% de los créditos bancarios (≥ 50 UF), bloquea la compraventa de vehículos e inmuebles e inhabilita para bonos del Estado. A esto se suman arresto nocturno, retención de sueldo, arraigo nacional y pago con la indemnización por años de servicio.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
