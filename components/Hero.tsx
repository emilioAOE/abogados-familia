const WHATSAPP_URL =
  "https://wa.me/56934592571?text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20en%20Derecho%20de%20Familia";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="max-w-3xl">
          <span className="inline-block bg-accent/20 text-accent-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Primera consulta gratuita
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Asesoría Legal Especializada en{" "}
            <span className="text-accent">Derecho de Familia</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            Protegemos tus derechos y los de tu familia. Abogados con
            experiencia en divorcio, pensión de alimentos, cuidado personal de
            hijos y más. Atención personalizada en todo Chile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all"
            >
              Ver Servicios
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Consulta inicial sin costo
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Atención en todo Chile
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Respuesta en menos de 24 horas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
