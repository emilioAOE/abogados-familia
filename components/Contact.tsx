"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_URL =
  "https://wa.me/56934592571?text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20en%20Derecho%20de%20Familia";

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbzyUkJeHXdgFZ62_3luzUoD2fkZjJZMewKiLT_R-sF2M20vDeWT1-ox5Y0vLltw-wM8Ug/exec";

const TIPOS_CONSULTA = [
  "Divorcio",
  "Pensión de alimentos",
  "Cuidado personal de hijos",
  "Régimen de visitas",
  "Violencia intrafamiliar",
  "Adopción",
  "Liquidación de sociedad conyugal",
  "Otro",
];

const inputClass =
  "w-full bg-white/10 border border-white/20 text-white placeholder-blue-200/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-transparent transition-colors";

const labelClass = "block text-sm font-medium text-blue-100 mb-1.5";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      proyecto: "abogados-familia",
      nombre: fd.get("nombre") as string,
      telefono: fd.get("telefono") as string,
      email: fd.get("email") as string,
      comuna: fd.get("comuna") as string,
      tipoConsulta: fd.get("tipoConsulta") as string,
      descripcion: fd.get("descripcion") as string,
    };

    // Fire-and-forget to Google Sheets
    fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    setSent(true);
  }

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Estamos para ayudarte
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Necesitas un Abogado de Familia?
          </h2>

          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            No enfrentes un problema legal solo. Completa el formulario o
            escríbenos directo por WhatsApp y recibe orientación profesional
            gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-blue-200">
                  Nos pondremos en contacto contigo dentro de las próximas 24
                  horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className={labelClass}>
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Juan Pérez"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className={labelClass}>
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@correo.cl"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="comuna" className={labelClass}>
                      Comuna o ciudad
                    </label>
                    <input
                      id="comuna"
                      name="comuna"
                      type="text"
                      required
                      placeholder="Santiago, Viña del Mar..."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipoConsulta" className={labelClass}>
                    Tipo de consulta
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    required
                    className={inputClass}
                  >
                    <option value="" disabled selected>
                      Selecciona una opción
                    </option>
                    {TIPOS_CONSULTA.map((tipo) => (
                      <option key={tipo} value={tipo} className="text-gray-900">
                        {tipo}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="descripcion" className={labelClass}>
                    Descripción del caso
                  </label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente tu situación..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-primary font-bold text-lg py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  Enviar Consulta Gratuita
                </button>

                <p className="text-xs text-blue-200/50 text-center">
                  Tu información es confidencial y está protegida.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar: WhatsApp + info */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-green-500/30 w-full"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Directo
            </a>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Horario de Atención",
                  detail: "Lunes a Viernes · 9:00 - 18:00 hrs",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  ),
                  title: "WhatsApp",
                  detail: "+56 9 3459 2571",
                },
                {
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </>
                  ),
                  title: "Cobertura",
                  detail: "Todo Chile · Presencial y remota",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">
                      {item.title}
                    </h3>
                    <p className="text-blue-200/70 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
