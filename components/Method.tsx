const WHATSAPP_URL =
  "https://wa.me/56934592571?text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20en%20Derecho%20de%20Familia";

const steps = [
  {
    number: "01",
    title: "Consulta Inicial Gratuita",
    description:
      "Cuéntanos tu caso por WhatsApp o teléfono. Escuchamos tu situación y te orientamos sobre tus opciones legales sin costo.",
  },
  {
    number: "02",
    title: "Evaluación del Caso",
    description:
      "Analizamos los antecedentes de tu caso en detalle. Revisamos documentos, plazos y la legislación aplicable a tu situación.",
  },
  {
    number: "03",
    title: "Estrategia Personalizada",
    description:
      "Diseñamos un plan de acción a tu medida. Te explicamos cada paso, costos y tiempos estimados de forma transparente.",
  },
  {
    number: "04",
    title: "Representación Legal",
    description:
      "Te acompañamos en todo el proceso judicial o extrajudicial. Mediación, audiencias, escritos y seguimiento hasta la resolución.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Nuestro Método de Trabajo
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un proceso claro y transparente para resolver tu caso de forma
            eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent/20 -translate-x-4" />
              )}
              <div className="text-5xl font-black text-accent/20 mb-3">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Comienza tu Consulta Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
