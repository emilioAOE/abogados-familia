import Link from "next/link";
import { featuredSlugs, getPost, posts } from "@/lib/blog";

// Destacados del blog en la portada: refuerza el enlazado interno hacia
// las guías (SEO) y da contenido de profundidad a quien aún compara.
// Además de las 3 tarjetas destacadas, se enlazan TODAS las guías restantes
// en una lista compacta para que Google las descubra e indexe directamente
// desde la portada (un solo salto), no solo a través de /blog.
export default function Guides() {
  const featured = featuredSlugs
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Resto de las guías (todas las que no están destacadas), en el orden del
  // registro. Se deriva de `posts` para no desincronizar al agregar guías.
  const moreGuides = posts.filter((p) => !featuredSlugs.includes(p.slug));

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

        {moreGuides.length > 0 && (
          <div className="mt-10 max-w-4xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Más guías de derecho de familia
            </p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {moreGuides.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="text-accent-dark mt-0.5 shrink-0"
                    >
                      →
                    </span>
                    <span className="text-sm font-medium leading-snug group-hover:underline">
                      {post.metaTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

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
