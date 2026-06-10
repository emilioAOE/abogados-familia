import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { posts, getPost, type Block } from "@/lib/blog";
import { SITE_URL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

// Solo se generan los slugs registrados; cualquier otro da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      section: post.category,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
    },
  };
}

/**
 * Renderiza la sintaxis inline de los contenidos: **negrita** y
 * [texto](/ruta). Los enlaces internos usan <Link>.
 */
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link
            key={i}
            href={href}
            className="text-accent-dark font-medium underline underline-offset-2 hover:text-primary"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-dark font-medium underline underline-offset-2 hover:text-primary"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return (
        <h2 className="text-2xl sm:text-[1.7rem] font-bold text-primary mt-12 mb-4 leading-snug">
          {block.x}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">
          {block.x}
        </h3>
      );
    case "p":
      return (
        <p className="text-gray-700 leading-relaxed mb-4">
          {renderInline(block.x)}
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc pl-6 space-y-2 mb-5 text-gray-700 leading-relaxed">
          {block.x.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-6 space-y-3 mb-5 text-gray-700 leading-relaxed marker:font-bold marker:text-primary">
          {block.x.map((item, i) => (
            <li key={i} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-5 py-4 my-6 text-gray-700 leading-relaxed">
          {renderInline(block.x)}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto my-6 rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-primary text-white">
                {block.head.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-700 align-top">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${d} de ${months[m - 1]} de ${y}`;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug)!;
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.metaTitle,
    description: post.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "es-CL",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: `${SITE_URL}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon` },
    },
    isPartOf: { "@id": `${SITE_URL}/blog#collection` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Guías Legales", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const related = post.related
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
        {/* Encabezado del artículo */}
        <section className="bg-primary pt-28 sm:pt-36 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-200/70">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:text-white transition-colors">
                Guías Legales
              </Link>{" "}
              / <span className="text-blue-100">{post.category}</span>
            </nav>
            <span className="inline-block bg-accent/15 border border-accent/25 text-accent-light text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-sm text-blue-200/70">
              Actualizado el {formatDate(post.dateModified)} ·{" "}
              {post.readingMinutes} min de lectura · Equipo {SITE_NAME}
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {/* Respuesta rápida (answer-first) */}
          <div className="bg-primary/[0.04] border border-primary/10 rounded-2xl p-6 sm:p-7 mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-dark mb-3">
              Respuesta rápida
            </p>
            <p className="text-gray-800 leading-relaxed text-[1.05rem]">
              {renderInline(post.lead)}
            </p>
          </div>

          {/* Datos clave */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {post.stats.map((s) => (
              <div
                key={s.label}
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
              >
                <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                <p className="text-sm font-semibold text-primary">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Cuerpo */}
          {post.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}

          {/* FAQ del artículo */}
          <h2 className="text-2xl sm:text-[1.7rem] font-bold text-primary mt-12 mb-6">
            Preguntas frecuentes
          </h2>
          <div className="space-y-5 mb-12">
            {post.faq.map((f) => (
              <div
                key={f.q}
                className="bg-gray-50 border border-gray-100 rounded-xl p-5"
              >
                <h3 className="font-semibold text-primary mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-7 sm:p-9 text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              ¿Necesitas ayuda con tu caso?
            </h2>
            <p className="text-blue-200 mb-5 text-sm sm:text-base">
              Primera orientación gratuita por WhatsApp. Atendemos todo Chile,
              presencial y remoto.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Fuentes oficiales */}
          <div className="border-t border-gray-200 pt-6 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Fuentes oficiales
            </h2>
            <ul className="space-y-1.5">
              {post.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-dark underline underline-offset-2 hover:text-primary"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Esta guía es de carácter general y no constituye asesoría legal
              para un caso particular. Cifras vigentes a la fecha de
              actualización indicada.
            </p>
          </div>

          {/* Guías relacionadas */}
          {related.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-primary mb-4">
                Guías relacionadas
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl p-4 transition-colors"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                      {r.category}
                    </p>
                    <p className="text-sm font-semibold text-primary leading-snug">
                      {r.metaTitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
