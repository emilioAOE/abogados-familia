import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Method from "@/components/Method";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Abogados Familia",
  description:
    "Abogado especialista en Derecho de Familia en Chile. Divorcio, pensión de alimentos, cuidado personal, mediación familiar y violencia intrafamiliar.",
  url: "https://abogados-familia.vercel.app",
  telephone: "+56934592571",
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  serviceType: [
    "Derecho de Familia",
    "Divorcio",
    "Pensión de Alimentos",
    "Cuidado Personal de Hijos",
    "Violencia Intrafamiliar",
    "Mediación Familiar",
    "Adopción",
    "Régimen de Visitas",
  ],
  priceRange: "Consulta inicial gratuita",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
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
        text: "Se calcula considerando las necesidades del alimentario y la capacidad económica del alimentante. El mínimo legal es el 40% de un ingreso mínimo por hijo.",
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
        text: "Puedes solicitar arresto nocturno, retención de sueldo, suspensión de licencia de conducir, arraigo nacional y liquidación de bienes del deudor.",
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
