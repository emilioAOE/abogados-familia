import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SITE_NAME, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Abogados Familia recopila, usa, comunica y protege tus datos personales conforme a la Ley N° 19.628 y la Ley N° 21.719 de Chile.",
  alternates: { canonical: "/privacidad" },
};

// Fecha de última actualización de esta política (texto estático).
const ULTIMA_ACTUALIZACION = "3 de junio de 2026";

export default function PrivacidadPage() {
  return (
    <>
      {/* Barra superior mínima */}
      <header className="bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <span className="text-white font-semibold">{SITE_NAME}</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-blue-200 hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Política de Privacidad
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              En {SITE_NAME} valoramos tu privacidad. Esta política explica qué
              datos personales recopilamos a través del sitio firmafamilia.cl,
              con qué finalidad los usamos, con quién los compartimos y qué
              derechos tienes sobre ellos.
            </p>

            {/* TODO: agregar razón social, RUT y domicilio del estudio cuando estén disponibles. */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                1. Responsable del tratamiento
              </h2>
              <p>
                El responsable del tratamiento de tus datos personales es{" "}
                {SITE_NAME}, estudio jurídico chileno especializado en Derecho
                de Familia y titular del sitio web firmafamilia.cl. Para
                cualquier asunto relacionado con esta política puedes
                contactarnos por WhatsApp al{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline hover:text-primary-light"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                2. Qué datos recopilamos
              </h2>
              <p className="mb-3">
                Recopilamos los datos que nos entregas voluntariamente a través
                de nuestro formulario de contacto:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre completo</li>
                <li>Teléfono</li>
                <li>Correo electrónico</li>
                <li>Comuna o ciudad</li>
                <li>Tipo de consulta</li>
                <li>La descripción del caso que decidas compartir</li>
              </ul>
              <p className="mt-3">
                Adicionalmente, con fines estadísticos, recopilamos de forma
                automática datos de navegación: dirección IP (de la que
                derivamos una ubicación geográfica aproximada), tipo de
                navegador e idioma, páginas visitadas, sitio de procedencia y
                fecha y hora de la visita.
              </p>
            </section>

            <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="text-xl font-bold text-amber-900 mb-3">
                3. Datos sensibles: información importante
              </h2>
              <p className="text-amber-900/90">
                Las materias de Derecho de Familia pueden involucrar información
                sensible (por ejemplo, situaciones de violencia intrafamiliar,
                salud o vida privada). Te pedimos compartir en el formulario
                solo la información necesaria para orientar tu consulta inicial.
                Evita incluir datos de terceros o antecedentes que no sean
                indispensables en esta etapa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                4. Finalidad del tratamiento
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder y dar seguimiento a tu consulta.</li>
                <li>Contactarte por los medios que nos proporcionaste.</li>
                <li>Evaluar de forma preliminar tu caso.</li>
                <li>Mejorar el funcionamiento y el contenido del sitio.</li>
              </ul>
              <p className="mt-3">
                No utilizamos tus datos para fines distintos de los aquí
                señalados ni adoptamos decisiones automatizadas que produzcan
                efectos jurídicos sobre ti.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                5. Base legal: tu consentimiento
              </h2>
              <p>
                El tratamiento de tus datos se funda en tu consentimiento libre,
                informado y específico, que otorgas al marcar la casilla de
                aceptación y enviar el formulario, conforme al artículo 4 de la
                Ley N° 19.628 sobre Protección de la Vida Privada. Puedes revocar
                este consentimiento en cualquier momento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                6. Comunicación a terceros
              </h2>
              <p>
                Para operar el sitio y gestionar tus consultas utilizamos
                proveedores tecnológicos que actúan como encargados de
                tratamiento por cuenta nuestra, entre ellos servicios de
                alojamiento web, planillas de registro de contactos y
                herramientas de analítica. Estos proveedores solo acceden a los
                datos en la medida necesaria para prestar su servicio. No
                vendemos ni cedemos tus datos personales a terceros con fines
                comerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                7. Conservación de los datos
              </h2>
              <p>
                Conservamos tus datos durante el tiempo necesario para atender
                tu consulta y, posteriormente, mientras exista una relación
                profesional o una obligación legal que lo justifique. Cumplido
                ese plazo, los eliminamos o anonimizamos.
              </p>
            </section>

            {/* TODO: agregar un correo de contacto dedicado para solicitudes de datos. */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                8. Tus derechos
              </h2>
              <p>
                Como titular de los datos, la Ley N° 19.628 y la Ley N° 21.719
                te reconocen los derechos de acceso, rectificación, cancelación
                (supresión) y oposición, además del derecho a la portabilidad y
                a revocar tu consentimiento. Para ejercerlos, escríbenos por
                WhatsApp al{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline hover:text-primary-light"
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                indicando tu solicitud. Responderemos dentro de los plazos que
                establece la ley.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                9. Cookies y tecnologías de seguimiento
              </h2>
              <p>
                Utilizamos almacenamiento local del navegador y herramientas de
                analítica para reconocer tu sesión y medir el uso del sitio de
                forma agregada. Puedes bloquear o eliminar estos datos desde la
                configuración de tu navegador; ten presente que algunas
                funciones podrían verse afectadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                10. Seguridad
              </h2>
              <p>
                Aplicamos medidas razonables para proteger tus datos frente a
                accesos no autorizados, pérdida o alteración. Ninguna
                transmisión por Internet es completamente segura, por lo que no
                podemos garantizar una seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                11. Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta política para reflejar cambios legales o
                de nuestros servicios. Publicaremos la versión vigente en esta
                misma página, indicando la fecha de la última actualización.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">
                12. Contacto
              </h2>
              <p>
                Si tienes dudas sobre esta política o sobre el tratamiento de
                tus datos, contáctanos por WhatsApp al{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline hover:text-primary-light"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
              Esta política tiene carácter informativo y no constituye asesoría
              legal específica.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
