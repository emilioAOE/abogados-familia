import Link from "next/link";
import { featuredSlugs, getPost } from "@/lib/blog";

// Destacados del blog en la portada: refuerza el enlazado interno hacia
// las guías (SEO) y da contenido de profundidad a quien aún compara.
export default function Guides() {
  const featured = featuredSlugs
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="guias" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Guías Legales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Aprende sobre tus Derechos antes de Decidir
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Guías claras con los montos, plazos y pasos de la ley chilena
            vigente, escritas por nuestro equipo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all p-6 flex flex-col"
            >
              <span className="inline-block self-start bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-primary leading-snug mb-3">
                {post.metaTitle}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.description}
              </p>
              <span className="mt-auto text-accent-dark font-semibold text-sm group-hover:underline">
                Leer guía completa →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-2 border-primary/15 hover:border-primary/40 text-primary font-semibold px-7 py-3 rounded-full transition-colors"
          >
            Ver todas las guías
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
