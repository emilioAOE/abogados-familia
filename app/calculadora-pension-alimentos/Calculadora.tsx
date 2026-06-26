"use client";

import { useMemo, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";

// Valor referencial del ingreso mínimo mensual usado como base del mínimo legal.
// Coincide con el IMM vigente desde enero de 2026 (Ley 21.751) citado en el blog
// y en public/llms.txt. Es editable porque el monto se reajusta por ley.
const IMM_DEFAULT = 539000;

/** Formatea un número como pesos chilenos: $1.234.567 (sin decimales). */
function formatCLP(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "$0";
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

/** Convierte un texto con separadores/símbolos a número (solo dígitos). */
function parseCLP(raw: string): number {
  const digits = raw.replace(/\D/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

type Result = {
  hijos: number;
  minimoLegal: number;
  maximoLegal: number;
  // Rango sugerido (acotado entre el mínimo y el máximo legal cuando aplica).
  rangoBajo: number;
  rangoAlto: number;
  excedeTope: boolean; // el mínimo por hijos supera el 50% de las rentas
};

const HIJOS_OPCIONES = [1, 2, 3, 4, 5] as const;

export default function Calculadora() {
  const [hijos, setHijos] = useState<number>(1);
  const [ingresoRaw, setIngresoRaw] = useState<string>("");
  const [immRaw, setImmRaw] = useState<string>(String(IMM_DEFAULT));

  const ingreso = parseCLP(ingresoRaw);
  const imm = parseCLP(immRaw);

  const result = useMemo<Result | null>(() => {
    if (ingreso <= 0 || imm <= 0) return null;

    // Mínimo legal (Art. 3, Ley 14.908):
    //  - 1 hijo  => 40% de un ingreso mínimo
    //  - 2+ hijos => 30% de un ingreso mínimo POR CADA hijo
    const minimoLegal =
      hijos === 1 ? imm * 0.4 : imm * 0.3 * hijos;

    // Máximo legal (Art. 7, Ley 14.908): 50% de las rentas del alimentante.
    const maximoLegal = ingreso * 0.5;

    const excedeTope = minimoLegal > maximoLegal;

    // Rango sugerido: parte del mínimo legal y sube hacia el tope, acotado.
    // Punto medio orientativo entre el mínimo y el máximo legal.
    const rangoBajo = Math.min(minimoLegal, maximoLegal);
    const rangoAlto = excedeTope
      ? maximoLegal
      : Math.min((minimoLegal + maximoLegal) / 2, maximoLegal);

    return {
      hijos,
      minimoLegal,
      maximoLegal,
      rangoBajo,
      rangoAlto,
      excedeTope,
    };
  }, [hijos, ingreso, imm]);

  const inputBase =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-lg font-semibold text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:font-normal placeholder:text-gray-400";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
      {/* ───────────────── Formulario ───────────────── */}
      <form
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Número de hijos */}
        <fieldset className="mb-6">
          <legend className="mb-2 block text-sm font-semibold text-primary">
            ¿Cuántos hijos reciben la pensión?
          </legend>
          <div className="flex flex-wrap gap-2">
            {HIJOS_OPCIONES.map((n) => {
              const active = hijos === n;
              const label = n === 5 ? "5+" : String(n);
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setHijos(n)}
                  aria-pressed={active}
                  className={`h-12 min-w-12 flex-1 rounded-xl px-3 text-base font-bold transition-colors ${
                    active
                      ? "bg-primary text-white shadow-sm"
                      : "border border-gray-300 bg-white text-primary hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Ingreso del alimentante */}
        <div className="mb-6">
          <label
            htmlFor="ingreso"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Ingreso mensual líquido de quien paga (CLP)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
              $
            </span>
            <input
              id="ingreso"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="Ej: 1.200.000"
              value={ingresoRaw ? formatCLP(ingreso).replace("$", "") : ""}
              onChange={(e) => setIngresoRaw(e.target.value)}
              className={`${inputBase} pl-8`}
            />
          </div>
          <p className="mt-1.5 text-xs text-gray-500">
            Considera sueldo, honorarios y otras rentas mensuales del
            alimentante (quien debe pagar la pensión).
          </p>
        </div>

        {/* Ingreso mínimo de referencia */}
        <div>
          <label
            htmlFor="imm"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Ingreso mínimo mensual de referencia (CLP)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
              $
            </span>
            <input
              id="imm"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="539.000"
              value={immRaw ? formatCLP(imm).replace("$", "") : ""}
              onChange={(e) => setImmRaw(e.target.value)}
              className={`${inputBase} pl-8`}
            />
          </div>
          <p className="mt-1.5 text-xs text-gray-500">
            Valor referencial (~$539.000 en 2026). Es la base del mínimo legal;
            se reajusta por ley, así que{" "}
            <span className="font-semibold text-gray-600">
              verifica el monto vigente
            </span>{" "}
            antes de usarlo.
          </p>
        </div>
      </form>

      {/* ───────────────── Resultado ───────────────── */}
      <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] p-6 shadow-sm sm:p-8">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
          Estimación referencial
        </p>
        <h2 className="mb-5 text-xl font-bold text-primary">
          Resultado de tu cálculo
        </h2>

        {!result ? (
          <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white/60 px-6 py-10 text-center">
            <svg
              className="mb-3 h-10 w-10 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-gray-500">
              Ingresa el ingreso mensual del alimentante para ver el rango
              estimado de la pensión.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Rango sugerido destacado */}
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                Rango referencial estimado
              </p>
              <p className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                {formatCLP(result.rangoBajo)}
                <span className="mx-1.5 text-gray-400">–</span>
                {formatCLP(result.rangoAlto)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                por mes
                {result.hijos > 1
                  ? ` · ${result.hijos === 5 ? "5 o más" : result.hijos} hijos en total`
                  : " · 1 hijo"}
              </p>
            </div>

            {/* Mínimo y máximo legal */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-xs text-gray-500">Mínimo legal</p>
                <p className="mt-0.5 text-lg font-bold text-primary">
                  {formatCLP(result.minimoLegal)}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-gray-400">
                  {result.hijos === 1
                    ? "40% de un ingreso mínimo (Art. 3)"
                    : `30% de un ingreso mínimo por hijo (Art. 3)`}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-xs text-gray-500">Máximo legal</p>
                <p className="mt-0.5 text-lg font-bold text-primary">
                  {formatCLP(result.maximoLegal)}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-gray-400">
                  50% de las rentas del alimentante (Art. 7)
                </p>
              </div>
            </div>

            {/* Aviso cuando el mínimo por hijos supera el tope del 50% */}
            {result.excedeTope && (
              <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 px-4 py-3">
                <p className="text-sm text-amber-900">
                  El mínimo legal por{" "}
                  {result.hijos === 5 ? "5 o más" : result.hijos} hijos (
                  {formatCLP(result.minimoLegal)}) supera el tope del 50% de las
                  rentas declaradas. El tribunal no puede fijar una pensión sobre
                  ese tope, y el mínimo solo se rebaja si el alimentante acredita
                  que carece de medios.
                </p>
              </div>
            )}

            {/* Disclaimer legal */}
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
              <p className="text-xs leading-relaxed text-gray-500">
                <span className="font-semibold text-gray-600">
                  Estimación referencial, no es asesoría legal.
                </span>{" "}
                El monto final lo fija el tribunal según las necesidades del hijo
                y la capacidad económica del alimentante (Ley 14.908, Arts. 3 y
                7). Este cálculo no considera gastos extraordinarios, otras
                cargas ni la situación particular de cada caso.
              </p>
            </div>

            {/* CTA WhatsApp tras el resultado */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02] hover:bg-green-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cada caso es único — consulta gratis por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
