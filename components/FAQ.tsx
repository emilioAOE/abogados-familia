"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto demora un juicio de divorcio en Chile?",
    answer:
      "Un divorcio de mutuo acuerdo puede tomar entre 2 a 4 meses. Un divorcio unilateral por cese de convivencia puede demorar entre 6 meses a 1 año, dependiendo de la complejidad del caso y la carga del tribunal de familia correspondiente.",
  },
  {
    question: "¿Cómo se calcula la pensión de alimentos en Chile?",
    answer:
      "La pensión se calcula considerando las necesidades del hijo/a (alimentación, educación, salud, vivienda, recreación, vestuario, movilización y servicios básicos) y la capacidad económica del alimentante. El mínimo legal es el 40% de un ingreso mínimo cuando hay un solo hijo y el 30% por cada hijo cuando hay varios. El máximo no puede superar el 50% de los ingresos del alimentante, salvo razones fundadas (Art. 3 Ley 14.908).",
  },
  {
    question: "¿Qué requisitos necesito para obtener el cuidado personal de mis hijos?",
    answer:
      "Debes demostrar que el cuidado personal bajo tu responsabilidad es lo mejor para el interés superior del niño. Se evalúan factores como la vinculación afectiva, aptitud de los padres, contribución a la mantención, estabilidad del hogar y la opinión del niño según su edad.",
  },
  {
    question: "¿Es obligatoria la mediación familiar en Chile?",
    answer:
      "Sí, la mediación familiar es un requisito previo obligatorio para presentar demandas de alimentos, cuidado personal y relación directa y regular ante los Tribunales de Familia. Solo se exceptúan casos de violencia intrafamiliar. La mediación es gratuita en centros licitados por el Ministerio de Justicia.",
  },
  {
    question: "¿Cuánto cuesta un abogado de familia en Chile?",
    answer:
      "Los honorarios varían según la complejidad del caso. Ofrecemos una consulta inicial gratuita para evaluar tu situación y entregarte un presupuesto transparente. Trabajamos con honorarios fijos y planes de pago flexibles para que puedas acceder a representación legal de calidad.",
  },
  {
    question: "¿Qué pasa si no me pagan la pensión de alimentos?",
    answer:
      "La Ley 21.389 creó el Registro Nacional de Deudores de Pensiones de Alimentos. Estar inscrito implica: el Registro Civil no tramita pasaporte y las municipalidades no otorgan ni renuevan la licencia de conducir; retención de la devolución de impuestos; retención del 50% de los créditos bancarios desde 50 UF; bloqueo de la inscripción de compraventa de vehículos o inmuebles; e inhabilidad para recibir bonos y beneficios económicos del Estado. A esto se suman las medidas tradicionales: arresto nocturno del deudor, retención de sueldo, arraigo nacional y pago con la indemnización por años de servicio si es despedido.",
  },
  {
    question: "¿Cómo solicitar una medida de protección por violencia intrafamiliar?",
    answer:
      "Puedes denunciar en Carabineros, PDI o directamente en el Tribunal de Familia. El tribunal puede decretar medidas cautelares de forma inmediata, como la prohibición de acercamiento, el abandono del hogar por parte del agresor y la entrega de tus pertenencias. Actúa rápidamente: tu seguridad es prioridad.",
  },
  {
    question: "¿Se puede modificar el régimen de visitas en Chile?",
    answer:
      "Sí, el régimen de relación directa y regular puede modificarse cuando cambian las circunstancias. Puedes solicitar ampliación o restricción de visitas ante el Tribunal de Familia. Se prioriza siempre el interés superior del niño y el derecho del hijo a mantener relación con ambos padres.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="preguntas" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Resolvemos tus Dudas
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Las consultas más comunes sobre Derecho de Familia en Chile.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-accent shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
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
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
