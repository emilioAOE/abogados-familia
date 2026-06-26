import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Calculadora from "./Calculadora";
import { SITE_URL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

const PATH = "/calculadora-pension-alimentos";
const URL = `${SITE_URL}${PATH}`;

const META_TITLE =
  "Calculadora de Pensión de Alimentos en Chile 2026 | Firma Familia";
const DESCRIPTION =
  "Calcula online el monto de la pensión de alimentos en Chile 2026: mínimo legal (40% de un ingreso mínimo por un hijo, 30% por cada hijo) y máximo legal (50% de las rentas), según la Ley 14.908. Gratis y referencial.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  keywords: [
    "calculadora pensión de alimentos chile",
    "calcular pensión de alimentos chile",
    "cuánto es la pensión de alimentos 2026",
    "monto pensión de alimentos chile",
    "pensión de alimentos por un hijo",
    "calcular pensión alimenticia",
    "mínimo pensión de alimentos 2026",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: DESCRIPTION,
  },
};

// FAQ: fuente única para el render visible y para el JSON-LD (FAQPage).
const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cómo se calcula la pensión de alimentos en Chile?",
    a: "Se calcula combinando dos factores: las necesidades del hijo y la capacidad económica de quien debe pagar (el alimentante). La ley fija un mínimo y un máximo: el mínimo legal es el 40% de un ingreso mínimo mensual si hay un solo hijo y el 30% por cada hijo cuando hay dos o más (Art. 3 de la Ley 14.908). El máximo nunca puede superar el 50% de las rentas del alimentante (Art. 7). Dentro de ese rango, el juez fija el monto definitivo.",
  },
  {
    q: "¿Cuál es el monto mínimo de pensión de alimentos en 2026?",
    a: "Con un ingreso mínimo mensual de referencia de $539.000 (vigente en 2026), el mínimo legal por un hijo es $215.600 (40%) y, cuando hay dos o más hijos, $161.700 por cada hijo (30% por cada uno). Es un valor referencial: el ingreso mínimo se reajusta por ley, por lo que conviene verificar el monto vigente al momento de calcular.",
  },
  {
    q: "¿Puede el tribunal fijar una pensión mayor al 50% de los ingresos?",
    a: "No. El Art. 7 de la Ley 14.908 establece que la pensión, sumadas todas las pensiones que deba pagar la misma persona, no puede exceder el 50% de las rentas del alimentante. Es un tope absoluto: el tribunal no puede fijar una pensión por sobre ese límite, aunque las necesidades del hijo sean mayores.",
  },
  {
    q: "¿La calculadora reemplaza una sentencia o un acuerdo?",
    a: "No. Es una herramienta referencial que estima el rango legal según los datos que ingresas. El monto definitivo lo fija el Tribunal de Familia (o se acuerda en mediación) considerando antecedentes que la calculadora no evalúa: gastos extraordinarios, salud, educación particular, otras cargas familiares y signos externos de riqueza.",
  },
  {
    q: "¿Qué pasa si el alimentante no paga la pensión?",
    a: "Desde la Ley 21.389 existe el Registro Nacional de Deudores de Pensiones de Alimentos. Con 3 mensualidades consecutivas (o 5 discontinuas) impagas, el deudor es inscrito y se le bloquean pasaporte y licencia de conducir, se retiene su devolución de impuestos y el 50% de créditos bancarios desde 50 UF, y se impide la compraventa de vehículos e inmuebles. A esto se suman arresto nocturno, arraigo nacional y retención del sueldo.",
  },
  {
    q: "¿Hasta qué edad se paga la pensión de alimentos?",
    a: "La pensión se debe hasta los 21 años. Se extiende hasta los 28 años si el hijo está estudiando una profesión u oficio, y sin límite de edad si tiene una incapacidad física o mental que le impida mantenerse por sí mismo, o cuando el juez lo considere indispensable por circunstancias calificadas.",
  },
];

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${URL}#calculator`,
  name: "Calculadora de Pensión de Alimentos Chile",
  description: DESCRIPTION,
  url: URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  inLanguage: "es-CL",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "CLP" },
  provider: {
    "@type": "LegalService",
    "@id": `${SITE_URL}/#legalservice`,
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculadora de Pensión de Alimentos",
      item: URL,
    },
  ],
};

export default function CalculadoraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="bg-white">
        {/* Encabezado */}
        <section className="bg-primary pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm text-blue-200/70"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Inicio
              </Link>{" "}
              / <span className="text-blue-100">Calculadora de Pensión</span>
            </nav>
            <span className="mb-5 inline-block rounded-full border border-accent/25 bg-accent/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
              Herramienta gratuita
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Calculadora de Pensión de Alimentos en Chile 2026
            </h1>
            <p className="max-w-3xl text-lg text-blue-100/80">
              Estima en segundos el rango legal de la pensión de alimentos según
              la <strong className="text-white">Ley 14.908</strong>: el mínimo
              (40% de un ingreso mínimo por un hijo, 30% por cada hijo) y el
              máximo (50% de las rentas de quien paga). Cálculo referencial y
              gratuito.
            </p>
          </div>
        </section>

        {/* Calculadora */}
        <section className="bg-gray-50 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Calculadora />
          </div>
        </section>

        {/* Contenido educativo (answer-first, SEO/GEO) */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {/* Respuesta rápida */}
          <div className="mb-10 rounded-2xl border border-primary/10 bg-primary/[0.04] p-6 sm:p-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent-dark">
              Respuesta rápida
            </p>
            <p className="text-[1.05rem] leading-relaxed text-gray-800">
              La pensión de alimentos en Chile se mueve dentro de dos límites
              legales. El{" "}
              <strong className="font-semibold text-primary">
                mínimo legal
              </strong>{" "}
              es el <strong>40% de un ingreso mínimo mensual</strong> cuando hay
              un solo hijo (
              <strong className="font-semibold text-primary">$215.600</strong>{" "}
              con el ingreso mínimo de $539.000 de 2026) y el{" "}
              <strong>30% por cada hijo</strong> cuando hay dos o más (
              <strong className="font-semibold text-primary">$161.700</strong>{" "}
              por hijo). El{" "}
              <strong className="font-semibold text-primary">
                máximo legal
              </strong>{" "}
              nunca puede superar el{" "}
              <strong>50% de las rentas del alimentante</strong>. Dentro de ese
              rango, el monto final lo fija el Tribunal de Familia según las
              necesidades del hijo y la capacidad de quien paga.
            </p>
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold leading-snug text-primary sm:text-[1.7rem]">
            ¿Cómo se calcula la pensión de alimentos en Chile?
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            La pensión de alimentos se fija considerando dos factores que la ley
            equilibra caso a caso: las{" "}
            <strong className="font-semibold text-primary">
              necesidades del hijo
            </strong>{" "}
            (alimentación, educación, salud, vivienda, vestuario, recreación,
            movilización y servicios básicos) y la{" "}
            <strong className="font-semibold text-primary">
              capacidad económica del alimentante
            </strong>{" "}
            (quien debe pagar). Sobre esa base, la{" "}
            <strong>Ley 14.908</strong> establece un piso y un techo que el
            tribunal no puede ignorar.
          </p>

          <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 font-semibold">Situación</th>
                  <th className="px-4 py-3 font-semibold">Regla legal</th>
                  <th className="px-4 py-3 font-semibold">
                    Monto con IMM $539.000
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 align-top text-gray-700">
                    Un solo hijo
                  </td>
                  <td className="px-4 py-3 align-top text-gray-700">
                    Mínimo: 40% de un ingreso mínimo (Art. 3)
                  </td>
                  <td className="px-4 py-3 align-top font-semibold text-primary">
                    $215.600
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 align-top text-gray-700">
                    Dos o más hijos
                  </td>
                  <td className="px-4 py-3 align-top text-gray-700">
                    Mínimo: 30% de un ingreso mínimo por cada hijo (Art. 3)
                  </td>
                  <td className="px-4 py-3 align-top font-semibold text-primary">
                    $161.700 por hijo
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 align-top text-gray-700">
                    Tope máximo
                  </td>
                  <td className="px-4 py-3 align-top text-gray-700">
                    50% de las rentas del alimentante (Art. 7)
                  </td>
                  <td className="px-4 py-3 align-top font-semibold text-primary">
                    Depende del ingreso de quien paga
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 rounded-r-xl border-l-4 border-accent bg-accent/5 px-5 py-4 leading-relaxed text-gray-700">
            El mínimo legal solo puede rebajarse si el alimentante{" "}
            <strong className="font-semibold text-primary">
              acredita ante el tribunal que carece de los medios
            </strong>{" "}
            para pagarlo (Art. 3). Y el tope del 50% de las rentas (Art. 7) es
            absoluto: ni el acuerdo de las partes puede superarlo. En la práctica
            las pensiones suelen fijarse en UTM para que se reajusten
            automáticamente.
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold leading-snug text-primary sm:text-[1.7rem]">
            Qué considera el tribunal para fijar el monto
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Dentro del rango legal, el juez no aplica una fórmula automática:
            pondera la realidad concreta de la familia. Entre los antecedentes
            que pesan en la decisión están:
          </p>
          <ul className="mb-5 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
            <li>
              Los <strong>gastos reales del hijo</strong>: colegio o jardín,
              salud, alimentación, vestuario, transporte y actividades.
            </li>
            <li>
              Los <strong>ingresos efectivos del alimentante</strong>, incluso
              cuando trabaja de forma informal: el tribunal puede oficiar a
              bancos, AFP, Tesorería y el SII.
            </li>
            <li>
              Los <strong>signos externos de riqueza</strong> (vehículos,
              propiedades, viajes, nivel de vida) cuando los ingresos declarados
              no calzan con el tren de vida.
            </li>
            <li>
              Las <strong>otras cargas familiares</strong> del alimentante y si
              tiene más hijos a quienes también debe alimentos.
            </li>
            <li>
              Si el otro padre o madre <strong>también aporta</strong> y en qué
              medida cada uno contribuye a la crianza.
            </li>
          </ul>

          <h2 className="mb-4 mt-12 text-2xl font-bold leading-snug text-primary sm:text-[1.7rem]">
            Qué pasa si no pagan la pensión de alimentos
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            El incumplimiento tiene consecuencias serias. Desde la{" "}
            <strong>Ley 21.389</strong> existe el{" "}
            <Link
              href="/blog/registro-nacional-de-deudores"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-primary"
            >
              Registro Nacional de Deudores de Pensiones de Alimentos
            </Link>
            : con 3 mensualidades consecutivas impagas (o 5 discontinuas), el
            deudor queda inscrito y enfrenta, entre otros efectos:
          </p>
          <ul className="mb-5 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
            <li>
              Bloqueo de la renovación de <strong>pasaporte</strong> y{" "}
              <strong>licencia de conducir</strong>.
            </li>
            <li>
              Retención de la <strong>devolución de impuestos</strong> y del{" "}
              <strong>50% de créditos bancarios</strong> desde 50 UF.
            </li>
            <li>
              Bloqueo de la compraventa de <strong>vehículos e inmuebles</strong>{" "}
              e inhabilidad para bonos del Estado.
            </li>
            <li>
              Medidas de apremio: <strong>arresto nocturno</strong>, arraigo
              nacional y retención del sueldo por el empleador.
            </li>
          </ul>

          {/* CTA intermedio */}
          <div className="my-12 rounded-2xl bg-primary p-7 text-center sm:p-9">
            <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
              ¿Tu cálculo no calza con tu realidad?
            </h2>
            <p className="mb-5 text-sm text-blue-200 sm:text-base">
              Cada caso es único. Cuéntanos tu situación y recibe una primera
              orientación gratuita, sin compromiso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:scale-105 hover:bg-green-600"
            >
              Consulta gratis por WhatsApp
            </a>
          </div>

          {/* FAQ */}
          <h2 className="mb-6 mt-12 text-2xl font-bold text-primary sm:text-[1.7rem]">
            Preguntas frecuentes
          </h2>
          <div className="mb-12 space-y-5">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-gray-100 bg-gray-50 p-5"
              >
                <h3 className="mb-2 font-semibold text-primary">{f.q}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Guías relacionadas */}
          <div className="mb-10">
            <h2 className="mb-4 text-lg font-bold text-primary">
              Sigue informándote
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  slug: "pension-de-alimentos-chile",
                  cat: "Pensión de alimentos",
                  title:
                    "Pensión de alimentos 2026: montos, requisitos y cómo demandar",
                },
                {
                  slug: "como-rebajar-la-pension-de-alimentos",
                  cat: "Pensión de alimentos",
                  title: "Cómo rebajar la pensión de alimentos en Chile",
                },
                {
                  slug: "registro-nacional-de-deudores",
                  cat: "Pensión de alimentos",
                  title: "Registro Nacional de Deudores de Pensiones",
                },
              ].map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                >
                  <p className="mb-1.5 text-xs uppercase tracking-wider text-gray-500">
                    {r.cat}
                  </p>
                  <p className="text-sm font-semibold leading-snug text-primary">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Fuentes y aviso */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
              Fuentes oficiales
            </h2>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.bcn.cl/leychile/navegar?idNorma=27977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-dark underline underline-offset-2 hover:text-primary"
                >
                  Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile
                  (BCN)
                </a>
              </li>
              <li>
                <a
                  href="https://www.bcn.cl/portal/leyfacil/recurso/pension-alimenticia-para-menores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-dark underline underline-offset-2 hover:text-primary"
                >
                  Ley Fácil: Pensión alimenticia — Biblioteca del Congreso
                  Nacional
                </a>
              </li>
              <li>
                <a
                  href="https://www.dt.gob.cl/portal/1626/w3-article-60141.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-dark underline underline-offset-2 hover:text-primary"
                >
                  Valor del ingreso mínimo mensual — Dirección del Trabajo
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              Esta calculadora entrega una estimación referencial de carácter
              general y no constituye asesoría legal para un caso particular. El
              monto definitivo de la pensión lo fija el Tribunal de Familia. Las
              cifras de referencia ($539.000 de ingreso mínimo) están vigentes a
              2026 y se reajustan por ley.
            </p>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
