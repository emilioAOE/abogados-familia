const WHATSAPP_URL =
  "https://wa.me/56934592571?text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20en%20Derecho%20de%20Familia";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 bg-primary overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary to-primary-light/60" />

      {/* Geometric pattern texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative scales of justice watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] hidden lg:block">
        <svg
          width="600"
          height="600"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      </div>

      {/* Glowing accent orbs */}
      <div className="absolute top-16 left-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-[15%] w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[150px]" />

      {/* Diagonal decorative line */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-[0.06]">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border border-white/40 rounded-full" />
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] border border-white/20 rounded-full" />
        <div className="absolute -top-1/4 -right-1/4 w-[1200px] h-[1200px] border border-white/10 rounded-full" />
      </div>

      {/* Top gold accent bar */}
      <div className="absolute top-20 sm:top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur-sm border border-accent/20 text-accent-light text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Primera consulta gratuita
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Asesoría Legal Especializada en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Derecho de Familia
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed mb-8 max-w-2xl">
              Protegemos tus derechos y los de tu familia. Abogados con
              experiencia en divorcio, pensión de alimentos, cuidado personal de
              hijos y más. Atención personalizada en todo Chile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 hover:bg-white/5 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-sm"
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

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 text-blue-200/70 text-sm">
              {[
                "Consulta inicial sin costo",
                "Atención en todo Chile",
                "Respuesta en menos de 24 horas",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
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
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Stats / Trust signals */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-6">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { number: "500+", label: "Casos resueltos" },
                { number: "98%", label: "Clientes satisfechos" },
                { number: "15+", label: "Años de experiencia" },
                { number: "24h", label: "Tiempo de respuesta" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 w-full max-w-sm">
              <div className="flex -space-x-2">
                {[
                  "bg-accent",
                  "bg-blue-400",
                  "bg-green-400",
                  "bg-purple-400",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 ${color} rounded-full border-2 border-primary flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {["JP", "MC", "RL", "AS"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-blue-200/70">
                <span className="text-white font-semibold">+200 personas</span>{" "}
                nos contactaron este mes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
