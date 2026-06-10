import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { posts } from "@/lib/blog";
import { SITE_URL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guías Legales de Derecho de Familia en Chile",
  description:
    "Guías claras y actualizadas sobre Derecho de Familia en Chile: pensión de alimentos, divorcio, cuidado personal, mediación familiar, registro de deudores y violencia intrafamiliar.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Guías Legales de Derecho de Familia en Chile | " + SITE_NAME,
    description:
      "Pensión de alimentos, divorcio, cuidado personal, mediación y más, explicados con plazos, montos y pasos concretos.",
    url: "/blog",
    type: "website",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/blog#collection`,
  name: "Guías Legales de Derecho de Familia en Chile",
  description:
    "Guías prácticas sobre pensión de alimentos, divorcio, cuidado personal, mediación familiar y violencia intrafamiliar en Chile.",
  url: `${SITE_URL}/blog`,
  inLanguage: "es-CL",
  isPartOf: { "@id": `${SITE_URL}/#legalservice` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${p.slug}`,
      name: p.title,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Guías Legales", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="bg-gray-50">
        {/* Hero del blog */}
        <section className="bg-primary pt-28 sm:pt-36 pb-14 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-200/70">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>{" "}
              / <span className="text-blue-100">Guías Legales</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Guías Legales de Derecho de Familia en Chile
            </h1>
            <p className="text-blue-200 text-lg max-w-3xl">
              Explicaciones claras, con montos, plazos y pasos concretos según
              la ley chilena vigente. Escritas para que tomes decisiones
              informadas antes de tu consulta.
            </p>
          </div>
        </section>

        {/* Lista de guías */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-6 sm:p-7 flex flex-col h-full"
                  >
                    <span className="inline-block self-start bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-primary leading-snug mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {post.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        {post.readingMinutes} min de lectura
                      </span>
                      <span className="text-accent-dark font-semibold">
                        Leer guía →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 bg-primary rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                ¿Tu caso necesita respuesta ahora?
              </h2>
              <p className="text-blue-200 mb-6 max-w-xl mx-auto">
                Las guías orientan, pero cada caso es distinto. Cuéntanos tu
                situación y recibe una primera orientación gratuita.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30"
              >
                Consulta gratuita por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
