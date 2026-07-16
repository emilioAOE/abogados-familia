// Registro central del blog de guías legales. Cada post es data pura
// (sin JSX) para poder importarse desde páginas, sitemap y JSON-LD.
// Sintaxis inline soportada en los textos: **negrita** y [enlace](/ruta).
// IMPORTANTE: las cifras legales citan su fuente; al actualizar montos
// (ingreso mínimo, UF) revisar también public/llms.txt.

export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "h3"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "ol"; x: string[] }
  | { t: "note"; x: string }
  | { t: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  /** H1 del artículo */
  title: string;
  /** <title> (más corto, para la SERP) */
  metaTitle: string;
  description: string;
  category: string;
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  readingMinutes: number;
  keywords: string[];
  /** Respuesta directa al inicio (answer-first, clave para GEO) */
  lead: string;
  /** Datos clave en formato etiqueta → valor */
  stats: { label: string; value: string }[];
  blocks: Block[];
  faq: { q: string; a: string }[];
  related: string[];
  sources: { name: string; url: string }[];
};

export const posts: Post[] = [
  // ───────────────────────────── 1. PENSIÓN DE ALIMENTOS ─────────────────────────────
  {
    slug: "pension-de-alimentos-chile",
    title:
      "Pensión de Alimentos en Chile 2026: montos, requisitos y cómo demandar",
    metaTitle: "Pensión de Alimentos en Chile 2026: montos y cómo demandar",
    description:
      "Guía completa de la pensión de alimentos en Chile: monto mínimo 2026 ($215.600 por un hijo), máximo legal del 50%, paso a paso para demandar, alimentos provisorios y qué hacer si no pagan.",
    category: "Pensión de alimentos",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    readingMinutes: 8,
    keywords: [
      "pensión de alimentos chile",
      "monto mínimo pensión alimentos 2026",
      "cómo demandar pensión de alimentos",
      "alimentos provisorios",
      "demanda de alimentos tribunal de familia",
    ],
    lead:
      "El monto mínimo de la pensión de alimentos en Chile es el **40% de un ingreso mínimo mensual** cuando hay un solo hijo — **$215.600** con el ingreso mínimo de $539.000 vigente desde enero de 2026 — y el **30% por cada hijo** cuando hay dos o más (**$161.700** por hijo). El máximo nunca puede superar el **50% de las rentas** de quien paga. Se demanda ante el Tribunal de Familia previa mediación obligatoria y gratuita, y el juez debe fijar **alimentos provisorios** desde el inicio del juicio.",
    stats: [
      { label: "Mínimo legal (1 hijo)", value: "40% del ingreso mínimo = $215.600" },
      { label: "Mínimo legal (2 o más)", value: "30% por hijo = $161.700 c/u" },
      { label: "Máximo legal", value: "50% de las rentas del alimentante" },
      { label: "Trámite previo", value: "Mediación obligatoria y gratuita" },
      { label: "Mientras dura el juicio", value: "Alimentos provisorios" },
      { label: "Vigencia", value: "Hasta los 21 años (28 si estudia)" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es la pensión de alimentos y qué cubre?" },
      {
        t: "p",
        x: "La pensión de alimentos es el aporte económico que un padre o madre debe pagar para cubrir las necesidades de sus hijos cuando no vive con ellos. Está regulada por la **Ley 14.908** sobre Abandono de Familia y Pago de Pensiones Alimenticias.",
      },
      {
        t: "p",
        x: "No cubre solo la comida: incluye **alimentación, educación, salud, vivienda, vestuario, recreación, movilización y servicios básicos**. El monto se fija considerando dos factores: las necesidades del hijo y la capacidad económica de quien debe pagar.",
      },
      { t: "h2", x: "¿Cuánto es la pensión de alimentos en 2026?" },
      {
        t: "table",
        head: ["Situación", "Porcentaje", "Monto con IMM $539.000"],
        rows: [
          ["Un solo hijo", "Mínimo 40% de un ingreso mínimo", "$215.600"],
          ["Dos o más hijos", "Mínimo 30% de un ingreso mínimo por cada uno", "$161.700 por hijo"],
          ["Tope máximo", "50% de las rentas del alimentante", "Depende del ingreso de quien paga"],
        ],
      },
      {
        t: "note",
        x: "¿Quieres estimar tu caso? Usa la [Calculadora de Pensión de Alimentos](/calculadora-pension-alimentos): ingresas el número de hijos y el ingreso del alimentante y te muestra el mínimo y el máximo legal al instante (referencial).",
      },
      {
        t: "p",
        x: "Estos mínimos están en el **Art. 3 de la Ley 14.908** y se calculan sobre el ingreso mínimo mensual ($539.000 desde enero de 2026, reajustable por ley). El mínimo solo puede rebajarse si el alimentante **acredita ante el tribunal que carece de los medios** para pagarlo.",
      },
      {
        t: "note",
        x: "El tope del 50% de las rentas (**Art. 7 Ley 14.908**) es absoluto: el tribunal no puede fijar una pensión que lo supere. En la práctica las pensiones se fijan en **UTM** para que se reajusten automáticamente cada mes.",
      },
      { t: "h2", x: "¿Hasta qué edad se paga?" },
      {
        t: "p",
        x: "La pensión se debe hasta los **21 años**. Se extiende hasta los **28 años** si el hijo estudia una profesión u oficio, y **sin límite de edad** si tiene una incapacidad física o mental que le impida mantenerse por sí mismo, o cuando el juez lo estime indispensable por circunstancias calificadas.",
      },
      { t: "h2", x: "Cómo demandar la pensión de alimentos, paso a paso" },
      {
        t: "ol",
        x: [
          "**Reúne los antecedentes**: certificado de nacimiento del hijo, comprobantes de gastos (colegio, salud, arriendo) y todo lo que conozcas sobre los ingresos del otro padre o madre (empleador, liquidaciones, actividad).",
          "**Asiste a mediación familiar**: es obligatoria antes de demandar y **gratuita** en los centros licitados por el Ministerio de Justicia. Si llegan a acuerdo, el acta aprobada por el juez vale como sentencia.",
          "**Presenta la demanda**: si la mediación se frustra, con el acta correspondiente un abogado presenta la demanda ante el Tribunal de Familia del domicilio del alimentario. Si no puedes pagar abogado, la Corporación de Asistencia Judicial (CAJ) atiende gratis.",
          "**Pide alimentos provisorios**: con los antecedentes de la demanda, el juez **debe** fijar una pensión provisoria que se paga desde el inicio del juicio, mientras se tramita.",
          "**Audiencias y prueba**: en la audiencia preparatoria y de juicio se acreditan las necesidades del hijo y la capacidad económica del demandado. El tribunal puede oficiar al empleador, bancos y la AFP para conocer ingresos reales.",
          "**Sentencia y forma de pago**: lo habitual es la **retención judicial por el empleador**, que descuenta la pensión del sueldo y la deposita directamente. También se usa una cuenta de ahorro de BancoEstado a nombre del alimentario.",
        ],
      },
      { t: "h2", x: "¿Qué pasa si no pagan la pensión?" },
      {
        t: "p",
        x: "Desde la **Ley 21.389** existe el [Registro Nacional de Deudores de Pensiones de Alimentos](/blog/registro-nacional-de-deudores): con 3 mensualidades consecutivas (o 5 discontinuas) impagas, el deudor queda inscrito y se le bloquean pasaporte, licencia de conducir, créditos y compraventas, entre otros efectos.",
      },
      {
        t: "ul",
        x: [
          "Retención de la **devolución de impuestos** en la operación renta.",
          "Retención del **50% de créditos bancarios** desde 50 UF para pagar la deuda.",
          "**Arresto nocturno** hasta por 15 días, ampliable, y **arraigo nacional**.",
          "Retención de la **indemnización por años de servicio** si el deudor es despedido.",
        ],
      },
      {
        t: "note",
        x: "¿Te deben pensión? Pide la **liquidación de la deuda** en el mismo expediente y solicita las medidas de apremio. Es un trámite habitual y el tribunal está obligado a revisar mensualmente si corresponde inscribir al deudor en el Registro.",
      },
    ],
    faq: [
      {
        q: "¿Puedo pedir aumento o rebaja de la pensión?",
        a: "Sí. Si cambiaron las circunstancias (nuevo trabajo, cesantía, nuevas cargas familiares, mayores gastos del hijo), se puede demandar aumento, rebaja o cese. También requiere mediación previa.",
      },
      {
        q: "¿Se puede demandar a los abuelos?",
        a: "Sí, de forma subsidiaria: si el padre o madre obligado no puede pagar o paga de forma insuficiente, la ley permite demandar a los abuelos (Art. 232 del Código Civil y Art. 3 de la Ley 14.908).",
      },
      {
        q: "¿La madre embarazada puede pedir alimentos?",
        a: "Sí. La mujer embarazada puede demandar alimentos para el hijo que está por nacer, que comprenden los gastos del embarazo y del parto.",
      },
      {
        q: "¿Cómo se paga la pensión en la práctica?",
        a: "Las formas más comunes son la retención judicial directa del sueldo por el empleador y el depósito en una cuenta de ahorro de BancoEstado abierta para estos efectos. La retención por el empleador es la más segura para evitar atrasos.",
      },
      {
        q: "¿Qué pasa si el demandado trabaja informal o esconde ingresos?",
        a: "El tribunal puede oficiar a bancos, AFP, Tesorería y al SII, y apreciar la capacidad económica por signos externos (vehículos, propiedades, nivel de vida). Ocultar ingresos puede constituir además un antecedente en su contra.",
      },
    ],
    related: ["registro-nacional-de-deudores", "mediacion-familiar-chile", "cuidado-personal-de-los-hijos"],
    sources: [
      { name: "Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=27977" },
      { name: "Ley Fácil: Pensión alimenticia — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/pension-alimenticia-para-menores" },
      { name: "Valor del ingreso mínimo mensual — Dirección del Trabajo", url: "https://www.dt.gob.cl/portal/1626/w3-article-60141.html" },
    ],
  },

  // ───────────────────────────── 2. DIVORCIO ─────────────────────────────
  {
    slug: "divorcio-en-chile",
    title: "Divorcio en Chile: tipos, requisitos, plazos y costos (Guía 2026)",
    metaTitle: "Divorcio en Chile 2026: tipos, requisitos, plazos y costos",
    description:
      "Cómo divorciarse en Chile: divorcio de mutuo acuerdo (1 año de cese), unilateral (3 años) y por culpa. Requisitos, acuerdo completo y suficiente, compensación económica, plazos reales y costos.",
    category: "Divorcio",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    readingMinutes: 8,
    keywords: [
      "divorcio en chile",
      "divorcio de mutuo acuerdo chile",
      "divorcio unilateral chile",
      "requisitos divorcio chile",
      "cuánto demora un divorcio en chile",
      "compensación económica divorcio",
    ],
    lead:
      "En Chile existen tres vías de divorcio: **de mutuo acuerdo** (requiere 1 año de cese de la convivencia y un acuerdo completo y suficiente; demora unos **2 a 4 meses**), **unilateral** (requiere 3 años de cese; demora **6 meses a 1 año**) y **por culpa** (sin plazo de cese, por violación grave de los deberes del matrimonio). Siempre se tramita ante el Tribunal de Familia y con abogado.",
    stats: [
      { label: "Mutuo acuerdo", value: "1 año de cese de convivencia" },
      { label: "Unilateral", value: "3 años de cese de convivencia" },
      { label: "Por culpa", value: "Sin plazo (falta grave del otro cónyuge)" },
      { label: "Duración típica", value: "2-4 meses (acuerdo) · 6-12 meses (unilateral)" },
      { label: "¿Requiere abogado?", value: "Sí, siempre" },
      { label: "Ley aplicable", value: "Ley 19.947 de Matrimonio Civil" },
    ],
    blocks: [
      { t: "h2", x: "Los tres tipos de divorcio en Chile" },
      {
        t: "table",
        head: ["Tipo", "Requisito principal", "Duración típica"],
        rows: [
          ["Mutuo acuerdo", "Cese de convivencia ≥ 1 año + acuerdo completo y suficiente", "2 a 4 meses"],
          ["Unilateral", "Cese de convivencia ≥ 3 años", "6 meses a 1 año"],
          ["Por culpa", "Falta grave imputable al otro cónyuge (sin plazo de cese)", "Variable, según prueba"],
        ],
      },
      { t: "h3", x: "Divorcio de mutuo acuerdo" },
      {
        t: "p",
        x: "Ambos cónyuges presentan la solicitud en conjunto, acreditando **al menos 1 año de cese de la convivencia**, y acompañan un **acuerdo completo y suficiente**: un documento que regula los alimentos entre cónyuges, y respecto de los hijos la [pensión de alimentos](/blog/pension-de-alimentos-chile), el [cuidado personal](/blog/cuidado-personal-de-los-hijos) y la relación directa y regular (visitas).",
      },
      { t: "h3", x: "Divorcio unilateral" },
      {
        t: "p",
        x: "Lo pide uno solo de los cónyuges acreditando **3 años de cese de la convivencia**, aunque el otro se oponga. Importante: existe la llamada **cláusula de dureza** (Art. 55 Ley 19.947): el juez puede rechazar la demanda si quien la presenta **no pagó reiteradamente los alimentos** de su cónyuge e hijos pudiendo hacerlo.",
      },
      { t: "h3", x: "Divorcio por culpa" },
      {
        t: "p",
        x: "No exige plazo de cese. Procede por una **violación grave de los deberes del matrimonio o para con los hijos** que haga intolerable la vida en común (Art. 54): por ejemplo violencia intrafamiliar, atentados graves, abandono reiterado del hogar o conducta homosexual... la ley enumera causales y el tribunal exige prueba sólida.",
      },
      { t: "h2", x: "¿Cómo se acredita el cese de la convivencia?" },
      {
        t: "p",
        x: "Para matrimonios celebrados **después de noviembre de 2004**, la fecha cierta del cese se acredita con instrumentos específicos: escritura pública o acta extendida ante notario, acta ante el Registro Civil, transacción judicial aprobada, o la notificación de una demanda (de alimentos, por ejemplo). Para matrimonios **anteriores a esa fecha** se admite cualquier medio de prueba, incluidos testigos.",
      },
      {
        t: "note",
        x: "Consejo práctico: si te separas y aún no piensas en divorcio, deja **constancia del cese de convivencia** ante el Registro Civil o notario. Ese documento fija la fecha desde la cual corren el año o los 3 años exigidos por la ley.",
      },
      { t: "h2", x: "Paso a paso del divorcio" },
      {
        t: "ol",
        x: [
          "**Contrata un abogado** (obligatorio en familia para demandar). Si no puedes pagar, la Corporación de Asistencia Judicial atiende gratis con privilegio de pobreza.",
          "**Reúne los documentos**: certificado de matrimonio, certificados de nacimiento de los hijos, prueba del cese de convivencia y, en mutuo acuerdo, el acuerdo completo y suficiente firmado.",
          "**Se presenta la demanda o solicitud conjunta** ante el Tribunal de Familia del domicilio del demandado.",
          "**Audiencias**: en el divorcio de común acuerdo suele bastar una audiencia con la declaración de testigos sobre el cese. En el unilateral hay audiencia preparatoria y de juicio.",
          "**Sentencia y subinscripción**: dictado el divorcio, la sentencia se subinscribe al margen del acta de matrimonio en el Registro Civil. Solo desde ese momento quedas legalmente divorciado y puedes volver a casarte.",
        ],
      },
      { t: "h2", x: "Compensación económica: el derecho que no debes olvidar" },
      {
        t: "p",
        x: "Si uno de los cónyuges **se dedicó al hogar o al cuidado de los hijos** y por eso no pudo trabajar o lo hizo en menor medida, puede pedir una **compensación económica** (Arts. 61 a 66 de la Ley 19.947). Se solicita en la misma demanda o en la reconvención — no después — y el juez considera la duración del matrimonio, la situación patrimonial de ambos, la edad, la salud y las posibilidades de acceso al mercado laboral.",
      },
      { t: "h2", x: "¿Cuánto cuesta divorciarse?" },
      {
        t: "p",
        x: "La justicia de familia no cobra tasas: el costo principal son los **honorarios del abogado**, que varían según si es de común acuerdo (más barato y rápido) o controvertido. A eso se suman certificados y, en mutuo acuerdo, la escritura del acuerdo. Quien no puede pagar tiene derecho a la **CAJ gratuita**. Desconfía de ofertas de divorcio «sin juicio»: en Chile el divorcio **siempre** pasa por el Tribunal de Familia.",
      },
    ],
    faq: [
      {
        q: "¿Puedo divorciarme aunque mi cónyuge no quiera?",
        a: "Sí. Con 3 años de cese de convivencia acreditado puedes demandar el divorcio unilateral, y la oposición del otro cónyuge no lo impide, salvo que prospere la cláusula de dureza por no pago reiterado de alimentos.",
      },
      {
        q: "¿El divorcio requiere mediación familiar previa?",
        a: "No. El divorcio mismo no es materia de mediación obligatoria. Sí lo son los alimentos, el cuidado personal y las visitas de los hijos, que normalmente se regulan en el mismo proceso o en el acuerdo completo y suficiente.",
      },
      {
        q: "¿Qué pasa con los bienes al divorciarse?",
        a: "Depende del régimen: en sociedad conyugal el divorcio la disuelve y luego se liquida (de común acuerdo ante notario o judicialmente); en separación de bienes cada uno conserva lo suyo; en participación en los gananciales se calcula el crédito correspondiente.",
      },
      {
        q: "¿Puedo hacer el divorcio a distancia?",
        a: "Sí. Los tribunales de familia funcionan con tramitación electrónica y audiencias telemáticas, por lo que es posible tramitar un divorcio viviendo en otra ciudad o incluso en el extranjero, otorgando poder al abogado.",
      },
      {
        q: "¿La separación de hecho ya me permite volver a casarme?",
        a: "No. Mientras no exista sentencia de divorcio subinscrita en el Registro Civil, el vínculo matrimonial sigue vigente para todos los efectos legales.",
      },
    ],
    related: ["pension-de-alimentos-chile", "cuidado-personal-de-los-hijos", "mediacion-familiar-chile"],
    sources: [
      { name: "Ley 19.947 de Matrimonio Civil — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19947" },
      { name: "Ley Fácil: guías legales — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil" },
    ],
  },

  // ───────────────────────────── 3. REGISTRO DE DEUDORES ─────────────────────────────
  {
    slug: "registro-nacional-de-deudores",
    title:
      "Registro Nacional de Deudores de Pensiones de Alimentos: consecuencias y cómo salir",
    metaTitle: "Registro de Deudores de Alimentos: consecuencias y cómo salir",
    description:
      "Qué es el Registro Nacional de Deudores de Pensiones de Alimentos (Ley 21.389): cuándo te inscriben (3 cuotas impagas), consecuencias — pasaporte, licencia, créditos, compraventas — y cómo salir del registro.",
    category: "Pensión de alimentos",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    readingMinutes: 7,
    keywords: [
      "registro nacional de deudores de pensiones de alimentos",
      "ley 21389",
      "deudores de pensión de alimentos consecuencias",
      "cómo salir del registro de deudores de alimentos",
      "consultar registro deudores alimentos",
    ],
    lead:
      "El Registro Nacional de Deudores de Pensiones de Alimentos (Ley 21.389) inscribe a quienes deben **3 mensualidades consecutivas o 5 discontinuas** de pensión. Estar inscrito **bloquea el pasaporte y la licencia de conducir**, obliga a los bancos a **retener el 50% de los créditos desde 50 UF**, retiene la devolución de impuestos e impide inscribir la venta de vehículos e inmuebles. Se sale **pagando toda la deuda** o con un **acuerdo de pago serio y suficiente** aprobado por el tribunal.",
    stats: [
      { label: "Te inscriben con", value: "3 cuotas consecutivas o 5 discontinuas" },
      { label: "Administra", value: "Servicio de Registro Civil e Identificación" },
      { label: "Créditos ≥ 50 UF", value: "Retención del 50% para pagar la deuda" },
      { label: "Pasaporte y licencia", value: "Se rechaza la solicitud o renovación" },
      { label: "Revisión", value: "Mensual, por el Tribunal de Familia" },
      { label: "Salida", value: "Pago íntegro o acuerdo aprobado por el juez" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es el Registro Nacional de Deudores?" },
      {
        t: "p",
        x: "Es un registro electrónico creado por la **Ley 21.389** (en vigencia desde 2022) y administrado por el **Registro Civil**, que coordina una batería de medidas para forzar el pago de las [pensiones de alimentos](/blog/pension-de-alimentos-chile) impagas. Instituciones públicas y privadas — bancos, notarios, municipalidades, el propio Registro Civil — están **obligadas a consultarlo** antes de ciertos trámites.",
      },
      { t: "h2", x: "¿Cuándo te inscriben en el registro?" },
      {
        t: "p",
        x: "El Tribunal de Familia ordena la inscripción cuando el alimentante adeuda, total o parcialmente, **al menos 3 mensualidades consecutivas o 5 discontinuas**. La deuda se determina mediante una **liquidación** practicada en la misma causa, que se notifica al deudor para que pueda objetarla. El tribunal revisa **mensualmente** si corresponde inscribir o mantener la inscripción.",
      },
      { t: "h2", x: "Consecuencias de estar inscrito como deudor de alimentos" },
      {
        t: "ul",
        x: [
          "**Pasaporte**: el Registro Civil rechaza en el acto la solicitud o renovación.",
          "**Licencia de conducir**: la municipalidad no la otorga ni renueva mientras dure la inscripción.",
          "**Créditos**: en toda operación de crédito de dinero desde **50 UF**, bancos e instituciones financieras deben retener el **50% del crédito** (o el monto menor que baste) y pagarlo directamente al alimentario.",
          "**Devolución de impuestos**: la Tesorería retiene la devolución de la operación renta y la destina a la deuda.",
          "**Vehículos e inmuebles**: no se puede inscribir la transferencia de un vehículo o propiedad del deudor, salvo que del precio se retenga y pague lo adeudado.",
          "**Beneficios estatales**: inhabilidad para recibir ciertos bonos y beneficios económicos del Estado.",
          "**Cargos públicos**: quienes asumen altos cargos o ascienden en el Estado deben estar al día o autorizar el descuento de la deuda por planilla.",
        ],
      },
      {
        t: "note",
        x: "Además del registro, siguen vigentes los apremios clásicos: **arresto nocturno**, **arraigo nacional**, retención de sueldo por el empleador y pago de la deuda con la **indemnización por años de servicio** si el deudor es despedido.",
      },
      { t: "h2", x: "¿Cómo saber si una persona está inscrita?" },
      {
        t: "p",
        x: "La consulta se hace en línea en el sitio del **Registro Civil** con ClaveÚnica. El propio deudor puede revisar su situación, y las instituciones obligadas consultan automáticamente antes de cada trámite.",
      },
      { t: "h2", x: "¿Cómo salir del registro de deudores?" },
      {
        t: "ol",
        x: [
          "**Pagar íntegramente la deuda** liquidada: acreditado el pago, el tribunal ordena la cancelación de la inscripción.",
          "**Proponer un acuerdo de pago «serio y suficiente»**: un calendario de pago realista que el juez aprueba escuchando al alimentario; aprobado y cumpliéndose, se ordena la salida del registro.",
          "**Acreditar la extinción de la obligación**: por ejemplo, si la pensión cesó judicialmente y no subsisten deudas.",
        ],
      },
      {
        t: "p",
        x: "Si eres el deudor y tu situación económica cambió de verdad (cesantía, enfermedad), lo correcto no es dejar de pagar: es demandar la **rebaja de la pensión**. La deuda ya devengada no se rebaja retroactivamente.",
      },
    ],
    faq: [
      {
        q: "¿El registro de deudores es lo mismo que Dicom?",
        a: "No. Es un registro estatal distinto, administrado por el Registro Civil. No es un boletín comercial, pero bancos e instituciones financieras están legalmente obligados a consultarlo en créditos desde 50 UF y a retener el 50% para pagar la deuda.",
      },
      {
        q: "¿Estar inscrito me impide salir del país?",
        a: "La inscripción impide obtener o renovar el pasaporte, lo que en la práctica bloquea muchos viajes. Adicionalmente, el tribunal puede decretar arraigo nacional como apremio, que sí impide salir de Chile.",
      },
      {
        q: "¿Me pueden inscribir sin avisarme?",
        a: "La liquidación de la deuda se notifica y puedes objetarla en un plazo breve. Si no la objetas o la objeción se rechaza y se cumplen los umbrales (3 cuotas consecutivas o 5 discontinuas), el tribunal ordena la inscripción.",
      },
      {
        q: "¿Cuánto demora salir del registro después de pagar?",
        a: "Acreditado el pago íntegro en la causa, el tribunal ordena la cancelación y el Registro Civil elimina la inscripción. El trámite es breve, pero requiere presentación formal en el expediente: conviene hacerlo con abogado para que no se dilate.",
      },
      {
        q: "¿El acuerdo de pago borra la deuda?",
        a: "No la borra: la reprograma. Permite salir del registro mientras se cumpla. Si el deudor deja de pagar el acuerdo, se reinscribe y las medidas reviven.",
      },
    ],
    related: ["pension-de-alimentos-chile", "mediacion-familiar-chile", "divorcio-en-chile"],
    sources: [
      { name: "Ley 21.389 — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=1168463" },
      { name: "Ley Fácil: Registro Nacional de Deudores — BCN", url: "https://www.bcn.cl/portal/leyfacil/recurso/registro-nacional-de-deudores-de-pensiones-de-alimentos" },
      { name: "Servicio de Registro Civil e Identificación", url: "https://www.registrocivil.cl" },
    ],
  },

  // ───────────────────────────── 4. CUIDADO PERSONAL ─────────────────────────────
  {
    slug: "cuidado-personal-de-los-hijos",
    title: "Cuidado Personal de los Hijos (Tuición) en Chile: guía completa",
    metaTitle: "Cuidado Personal (Tuición) en Chile: cómo se decide y se demanda",
    description:
      "Cómo funciona el cuidado personal de los hijos en Chile: acuerdo ante notario o Registro Civil, qué pasa sin acuerdo, los criterios del juez (Art. 225-2), cuidado compartido y paso a paso del juicio.",
    category: "Cuidado personal",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    readingMinutes: 7,
    keywords: [
      "cuidado personal de los hijos chile",
      "tuición de los hijos chile",
      "demanda de cuidado personal",
      "cuidado personal compartido chile",
      "criterios cuidado personal art 225-2",
    ],
    lead:
      "Si los padres viven separados, pueden **acordar** quién tendrá el cuidado personal de los hijos mediante **escritura pública o acta ante el Registro Civil** (subinscrita dentro de 30 días). **Sin acuerdo, los hijos quedan bajo el cuidado del padre o madre con quien conviven**. Solo el juez puede cambiarlo, decidiendo por el **interés superior del niño** — la ley no prefiere a la madre ni al padre. El **cuidado compartido** solo procede de común acuerdo.",
    stats: [
      { label: "Acuerdo", value: "Escritura pública o acta ante Registro Civil" },
      { label: "Plazo de subinscripción", value: "30 días desde el otorgamiento" },
      { label: "Sin acuerdo", value: "Sigue con quien conviven los hijos" },
      { label: "Decide el juez según", value: "Interés superior del niño (Art. 225-2 CC)" },
      { label: "Cuidado compartido", value: "Solo de común acuerdo" },
      { label: "Trámite previo a demandar", value: "Mediación obligatoria" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es el cuidado personal y en qué se diferencia de la patria potestad?" },
      {
        t: "p",
        x: "El **cuidado personal** es la crianza cotidiana: con quién vive el hijo y quién se ocupa de su educación y cuidado diario (lo que antes se llamaba «tuición»). La **patria potestad**, en cambio, es la representación legal del hijo y la administración de sus bienes. Quien no tiene el cuidado personal **mantiene** el derecho y deber de relación directa y regular (visitas) y la obligación de pagar [pensión de alimentos](/blog/pension-de-alimentos-chile).",
      },
      { t: "h2", x: "Cómo acordar el cuidado personal sin juicio" },
      {
        t: "p",
        x: "Los padres separados pueden acordar que el cuidado lo tenga la madre, el padre o **ambos en forma compartida**. El acuerdo se otorga por **escritura pública** o **acta extendida ante cualquier oficial del Registro Civil**, y debe **subinscribirse al margen de la inscripción de nacimiento del hijo dentro de los 30 días** siguientes. Puede modificarse o revocarse cumpliendo las mismas formalidades.",
      },
      { t: "h2", x: "¿Qué pasa si no hay acuerdo?" },
      {
        t: "p",
        x: "Mientras no exista acuerdo ni sentencia, los hijos **continúan bajo el cuidado del padre o la madre con quien estén conviviendo** (Art. 225 del Código Civil). Si el otro padre quiere obtener el cuidado, debe pasar por [mediación familiar](/blog/mediacion-familiar-chile) y, frustrada ésta, demandar ante el Tribunal de Familia.",
      },
      { t: "h2", x: "Los criterios que pondera el juez (Art. 225-2 del Código Civil)" },
      {
        t: "ul",
        x: [
          "La **vinculación afectiva** entre el hijo y cada padre y demás personas de su entorno familiar.",
          "La **aptitud de los padres** para garantizar el bienestar del hijo y la posibilidad de un entorno adecuado según su edad.",
          "La **contribución a la mantención** del hijo mientras estuvo al cuidado del otro padre, pudiendo hacerlo.",
          "La **actitud de cada padre para cooperar** con el otro y asegurar la máxima estabilidad y la relación directa y regular.",
          "La **dedicación efectiva** que cada padre procuraba al hijo antes de la separación y la que puede procurar después.",
          "La **opinión expresada por el hijo**, según su edad y madurez (el juez lo escucha en audiencia reservada).",
          "El resultado de **informes periciales** (psicológicos y sociales) que se ordenen.",
          "Los **acuerdos** previos de los padres y la distancia entre domicilios, entre otros factores.",
        ],
      },
      {
        t: "note",
        x: "Desde la reforma de la **Ley 20.680 (2013)** la ley es neutra: **no existe preferencia legal por la madre**. El único estándar es el interés superior del niño, evaluado caso a caso con estos criterios.",
      },
      {
        t: "p",
        x: "Como cada caso se resuelve ponderando estos criterios, conocer cómo los tribunales de familia los han aplicado en fallos anteriores ayuda a anticipar el resultado. Hoy existen herramientas que permiten [consultar jurisprudencia con IA](https://constitucionalai.com/) y revisar en lenguaje natural cómo se ha interpretado el interés superior del niño en sentencias sobre cuidado personal.",
      },
      { t: "h2", x: "Paso a paso para demandar el cuidado personal" },
      {
        t: "ol",
        x: [
          "**Mediación familiar obligatoria**: gratuita en centros licitados. Si hay acuerdo, el acta aprobada por el juez tiene valor de sentencia.",
          "**Demanda con abogado** ante el Tribunal de Familia del domicilio del niño, acompañando el acta de mediación frustrada.",
          "**Audiencia preparatoria**: se fijan los hechos a probar y el tribunal puede ordenar informes del consejo técnico y peritajes.",
          "**Audiencia de juicio**: declaran testigos y peritos; el juez escucha al niño en forma reservada si su edad y madurez lo permiten.",
          "**Sentencia**: atribuye el cuidado y regula la relación directa y regular del otro padre. Se subinscribe en el Registro Civil.",
        ],
      },
      { t: "h2", x: "Cuidado personal compartido" },
      {
        t: "p",
        x: "Es un régimen en que el hijo reside de forma equilibrada con ambos padres. En Chile **solo puede establecerse de común acuerdo** (escritura, acta o acuerdo aprobado judicialmente): el juez **no puede imponerlo** contra la voluntad de uno de los padres. Funciona bien cuando hay buena comunicación, cercanía de domicilios y rutinas estables.",
      },
    ],
    faq: [
      {
        q: "¿Pueden quitarme a mis hijos por trabajar todo el día?",
        a: "No por ese solo hecho. El juez evalúa el conjunto de criterios del Art. 225-2, incluida la red de apoyo (familia, jornada, cuidados). Trabajar no es un demérito: contribuir a la mantención del hijo es precisamente uno de los factores que se ponderan a favor.",
      },
      {
        q: "¿A qué edad los niños deciden con quién vivir?",
        a: "No hay una edad fija en que «decidan». El juez debe oír al niño y considerar su opinión según su edad y madurez, en audiencia reservada, pero la decisión final siempre la toma el tribunal conforme a su interés superior.",
      },
      {
        q: "¿El cuidado personal se puede cambiar después?",
        a: "Sí. Tanto el acuerdo como la sentencia pueden modificarse cuando cambian las circunstancias y el interés del niño lo exige, pasando nuevamente por mediación y, en su caso, por un nuevo juicio.",
      },
      {
        q: "¿Quien tiene el cuidado puede impedir las visitas?",
        a: "No. La relación directa y regular es un derecho del hijo y del otro padre. Si se obstaculiza injustificadamente, puede pedirse el cumplimiento forzado, e incluso es un factor que el tribunal pondera para evaluar un cambio de cuidado.",
      },
      {
        q: "¿Necesito el permiso del otro padre para salir del país con mi hijo?",
        a: "Sí. La salida de menores requiere autorización del otro padre (notarial) o, a falta de ella, autorización judicial del Tribunal de Familia.",
      },
    ],
    related: ["mediacion-familiar-chile", "pension-de-alimentos-chile", "divorcio-en-chile"],
    sources: [
      { name: "Código Civil (Arts. 224 a 245) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley 20.680, que regula el cuidado personal — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=20680" },
    ],
  },

  // ───────────────────────────── 5. MEDIACIÓN FAMILIAR ─────────────────────────────
  {
    slug: "mediacion-familiar-chile",
    title: "Mediación Familiar en Chile: cuándo es obligatoria y cómo funciona",
    metaTitle: "Mediación Familiar en Chile: cuándo es obligatoria y cómo se pide",
    description:
      "La mediación familiar es obligatoria antes de demandar alimentos, cuidado personal y visitas. Es gratuita en centros licitados, el acta aprobada vale como sentencia y si se frustra habilita para demandar.",
    category: "Mediación familiar",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    readingMinutes: 6,
    keywords: [
      "mediación familiar chile",
      "mediación familiar obligatoria",
      "mediación familiar gratuita",
      "acta de mediación frustrada",
      "cómo pedir hora mediación familiar",
    ],
    lead:
      "En Chile la mediación familiar es **obligatoria antes de demandar** tres materias: **pensión de alimentos, cuidado personal y relación directa y regular (visitas)**. Es **gratuita** en los centros licitados por el Ministerio de Justicia. Si hay acuerdo, el **acta aprobada por el juez vale como sentencia**; si no lo hay, el **acta de mediación frustrada** habilita para demandar. En casos de violencia intrafamiliar la mediación **no procede**.",
    stats: [
      { label: "Materias obligatorias", value: "Alimentos · cuidado personal · visitas" },
      { label: "Costo", value: "Gratuita en centros licitados (MinJu)" },
      { label: "Acta con acuerdo", value: "Aprobada por el juez = sentencia ejecutoriada" },
      { label: "Sin acuerdo", value: "Acta frustrada habilita la demanda" },
      { label: "VIF", value: "Mediación prohibida" },
      { label: "Marco legal", value: "Ley 19.968, Arts. 103 y siguientes" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es la mediación familiar?" },
      {
        t: "p",
        x: "Es un proceso en que un **mediador imparcial**, registrado ante el Ministerio de Justicia, ayuda a las partes a construir por sí mismas una solución a su conflicto familiar, sin imponerla. Está regulada en la **Ley 19.968** que crea los Tribunales de Familia. Aunque asistir a la primera sesión es un requisito en las materias obligatorias, **nadie está obligado a llegar a acuerdo**: las partes pueden retirarse y el proceso es confidencial.",
      },
      { t: "h2", x: "¿Cuándo es obligatoria la mediación? (mediación previa)" },
      {
        t: "ul",
        x: [
          "**Pensión de alimentos** (demanda, aumento, rebaja o cese).",
          "**Cuidado personal** de los hijos.",
          "**Relación directa y regular** (régimen de visitas).",
        ],
      },
      {
        t: "p",
        x: "Sin el certificado o acta de mediación, el tribunal **no admite a trámite** la demanda en esas materias. Otras materias (como divorcio o liquidación de bienes) pueden mediarse **voluntariamente**, y algunas están **prohibidas** de mediar: el estado civil (el divorcio mismo), la declaración de interdicción, los casos de maltrato de niños y la adopción.",
      },
      {
        t: "note",
        x: "Excepción clave: si existe **violencia intrafamiliar** entre las partes, la mediación no procede. Se demanda directamente y, si corresponde, se piden [medidas de protección](/blog/violencia-intrafamiliar-medidas-proteccion).",
      },
      { t: "h2", x: "¿Cómo pedir hora de mediación gratuita?" },
      {
        t: "ol",
        x: [
          "Entra al portal oficial **mediacionchile.cl** del Ministerio de Justicia (o llama a su línea de atención) y busca los centros licitados de tu comuna.",
          "Solicita la mediación indicando la materia (alimentos, cuidado personal o visitas) y los datos de la otra parte para que el centro la cite.",
          "Asiste a la **primera sesión**: el mediador explica las reglas; las sesiones siguientes se agendan según el caso (habitualmente 1 a 3).",
          "El proceso termina con **acta de acuerdo** (total o parcial) o **acta de mediación frustrada**.",
        ],
      },
      { t: "h2", x: "El valor legal del acta de mediación" },
      {
        t: "p",
        x: "Si hay acuerdo, el mediador levanta un **acta** que se envía al Tribunal de Familia para su aprobación. Aprobada por el juez, tiene **valor de sentencia ejecutoriada**: si después se incumple — por ejemplo, dejan de pagar la pensión acordada — se puede exigir su **cumplimiento forzado** de inmediato, con los mismos apremios de una sentencia (incluida la inscripción en el [Registro de Deudores](/blog/registro-nacional-de-deudores)).",
      },
      { t: "h2", x: "Ventajas frente al juicio" },
      {
        t: "ul",
        x: [
          "**Rapidez**: semanas en lugar de meses.",
          "**Costo cero** en centros licitados (los mediadores privados cobran honorarios).",
          "**Menor desgaste** emocional, especialmente para los niños.",
          "**Acuerdos a medida** que las propias partes diseñan y por eso se cumplen más.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué pasa si la otra parte no asiste a la mediación?",
        a: "Si citada dos veces no comparece, el mediador levanta acta de mediación frustrada, que te habilita para presentar la demanda ante el Tribunal de Familia.",
      },
      {
        q: "¿La mediación es obligatoria para divorciarse?",
        a: "No. El divorcio no es materia de mediación obligatoria (de hecho, el estado civil no se media). Sí deben mediarse previamente los alimentos, el cuidado personal y las visitas si se demandan por separado.",
      },
      {
        q: "¿Lo que diga en la mediación puede usarse en mi contra?",
        a: "No. El proceso es confidencial: el mediador no puede declarar como testigo y lo conversado no puede invocarse en el juicio posterior.",
      },
      {
        q: "¿Puedo ir asesorado por un abogado?",
        a: "Sí, puedes asesorarte antes y durante el proceso, y es recomendable revisar con un abogado el acuerdo antes de firmarlo, porque una vez aprobado por el juez tiene fuerza de sentencia.",
      },
      {
        q: "¿El acuerdo de mediación se puede modificar después?",
        a: "Sí, como toda resolución de familia, si cambian las circunstancias (ingresos, necesidades del niño) puede pedirse su modificación, pasando nuevamente por mediación.",
      },
    ],
    related: ["pension-de-alimentos-chile", "cuidado-personal-de-los-hijos", "divorcio-en-chile"],
    sources: [
      { name: "Ley 19.968 que crea los Tribunales de Familia — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19968" },
      { name: "Mediación Chile — Ministerio de Justicia y DD.HH.", url: "https://www.mediacionchile.cl" },
    ],
  },

  // ───────────────────────────── 6. VIOLENCIA INTRAFAMILIAR ─────────────────────────────
  {
    slug: "violencia-intrafamiliar-medidas-proteccion",
    title:
      "Violencia Intrafamiliar en Chile: cómo denunciar y pedir medidas de protección",
    metaTitle: "Violencia Intrafamiliar: cómo denunciar y pedir protección",
    description:
      "Dónde y cómo denunciar violencia intrafamiliar en Chile: Carabineros (133), PDI (134), Fiscalía o Tribunal de Familia. Medidas cautelares inmediatas, Ley 20.066 y orientación gratuita (fono 1455).",
    category: "Violencia intrafamiliar",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    readingMinutes: 7,
    keywords: [
      "violencia intrafamiliar chile",
      "denunciar violencia intrafamiliar",
      "medidas de protección vif",
      "ley 20066",
      "orden de alejamiento chile",
      "fono 1455",
    ],
    lead:
      "La violencia intrafamiliar se denuncia en **Carabineros (133)**, **PDI (134)**, la **Fiscalía** o directamente en el **Tribunal de Familia**. El tribunal puede dictar **medidas de protección inmediatas** — salida del agresor del hogar, prohibición de acercamiento, prohibición de porte de armas — incluso **antes de la audiencia** si hay riesgo. La orientación telefónica de SernamEG es **gratuita y confidencial: fono 1455**, disponible 24/7. En urgencia, llama siempre al **133**.",
    stats: [
      { label: "Emergencia", value: "Carabineros 133 · PDI 134" },
      { label: "Orientación 24/7", value: "Fono 1455 (SernamEG), gratuito" },
      { label: "Dónde denunciar", value: "Carabineros, PDI, Fiscalía o T. de Familia" },
      { label: "Medidas cautelares", value: "Pueden dictarse de inmediato" },
      { label: "Ley aplicable", value: "Ley 20.066 de Violencia Intrafamiliar" },
      { label: "Mediación", value: "Prohibida en casos de VIF" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué se considera violencia intrafamiliar en Chile?" },
      {
        t: "p",
        x: "La **Ley 20.066** define la VIF como **todo maltrato que afecte la vida o la integridad física o psíquica** de un cónyuge, conviviente o ex pareja con quien se tienen hijos, de un pariente por consanguinidad o afinidad, de un menor de edad, adulto mayor o persona con discapacidad que esté bajo el cuidado del grupo familiar. Incluye la violencia **física, psicológica y económica**, y no exige que vivan juntos.",
      },
      { t: "h2", x: "¿Dónde denunciar? Familia o penal según el caso" },
      {
        t: "ul",
        x: [
          "**Tribunal de Familia**: actos de VIF que **no son delito** (maltrato psicológico, violencia económica, un primer episodio sin lesiones). Puedes presentar la denuncia o demanda directamente, sin abogado, aunque es recomendable contar con uno.",
          "**Fiscalía / justicia penal**: cuando hay **delito** — lesiones, amenazas, **maltrato habitual** (violencia psíquica o física reiterada, que es delito en sí mismo), delitos sexuales o femicidio frustrado.",
          "**Carabineros (133) y PDI (134)** reciben denuncias 24/7 y están **obligados** a derivarlas al tribunal competente. En flagrancia deben detener al agresor.",
        ],
      },
      {
        t: "note",
        x: "No necesitas «elegir bien» dónde denunciar: cualquier institución que reciba la denuncia debe **derivarla** a la sede correcta. Lo importante es denunciar. Terceros también pueden hacerlo (vecinos, profesores, personal de salud — estos últimos están obligados).",
      },
      { t: "h2", x: "Medidas de protección que puede dictar el tribunal" },
      {
        t: "ul",
        x: [
          "**Salida obligatoria del agresor** del hogar común.",
          "**Prohibición de acercarse** a la víctima, su casa, trabajo o establecimiento educacional de los hijos.",
          "**Prohibición de porte y tenencia de armas**, con retiro de las existentes.",
          "**Alimentos provisorios** y régimen provisorio de [cuidado personal](/blog/cuidado-personal-de-los-hijos) y visitas de los hijos.",
          "**Reserva del domicilio** de la víctima y rondas periódicas de Carabineros.",
          "Asistencia obligatoria del agresor a **programas terapéuticos** o de orientación familiar.",
        ],
      },
      {
        t: "p",
        x: "Si el juez aprecia una **situación de riesgo inminente** — intimidación, amenazas, antecedentes de violencia, consumo problemático de alcohol o drogas, oposición violenta a la separación — debe adoptar las medidas de protección **con la sola denuncia, antes de la audiencia** (Art. 7 de la Ley 20.066). Las medidas accesorias se fijan por un plazo que por regla general va de **6 meses a 2 años**, prorrogables.",
      },
      { t: "h2", x: "Paso a paso para pedir protección" },
      {
        t: "ol",
        x: [
          "**Si estás en peligro ahora, llama al 133.** Carabineros debe concurrir, detener en flagrancia y tomar la denuncia.",
          "**Constata lesiones** en un servicio de urgencia si hubo violencia física: el parte médico es prueba clave.",
          "**Denuncia** en Carabineros, PDI, Fiscalía o el Tribunal de Familia. Lleva tu cédula y relata los hechos con fechas; sirven pantallazos de mensajes, audios, testigos y partes anteriores.",
          "**Pide expresamente las medidas cautelares** que necesitas (salida del hogar, prohibición de acercamiento, reserva de domicilio).",
          "**Asiste a la audiencia** del Tribunal de Familia, idealmente con abogado (la CAJ y los centros de SernamEG asisten gratis a las víctimas).",
          "**Si el agresor incumple** una medida, llama al 133 y deja constancia: el incumplimiento puede constituir desacato, que es delito y permite su detención.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Necesito pruebas para denunciar?",
        a: "Para denunciar basta tu relato: la denuncia activa la investigación y las medidas de protección. Para la audiencia ayudan la constatación de lesiones, mensajes, audios, testigos y denuncias anteriores, pero su ausencia no impide denunciar.",
      },
      {
        q: "¿Qué es el maltrato habitual?",
        a: "Es el ejercicio reiterado de violencia física o psíquica dentro de la familia. A diferencia de un episodio aislado de maltrato psicológico, el maltrato habitual es un delito y lo investiga la Fiscalía.",
      },
      {
        q: "¿Pueden obligarme a mediación con mi agresor?",
        a: "No. La ley prohíbe la mediación en casos de violencia intrafamiliar, precisamente para no forzar a la víctima a negociar con su agresor. Las materias de familia asociadas se resuelven directamente en tribunales.",
      },
      {
        q: "¿Puedo retirar la denuncia después?",
        a: "En los delitos de VIF la acción es pública: la Fiscalía puede continuar la investigación aunque la víctima se retracte, considerando el ciclo de la violencia. En sede de familia, el tribunal evalúa el riesgo antes de cerrar el caso.",
      },
      {
        q: "¿Dónde recibo orientación gratuita?",
        a: "En el fono 1455 de SernamEG (24 horas, confidencial), los Centros de la Mujer en todo Chile y la Corporación de Asistencia Judicial. En emergencias, siempre 133.",
      },
    ],
    related: ["cuidado-personal-de-los-hijos", "pension-de-alimentos-chile", "divorcio-en-chile"],
    sources: [
      { name: "Ley 20.066 de Violencia Intrafamiliar — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=20066" },
      { name: "SernamEG — Programa de atención a víctimas (fono 1455)", url: "https://www.sernameg.gob.cl" },
    ],
  },

  // ───────────────────────────── 7. RÉGIMEN DE BIENES ─────────────────────────────
  {
    slug: "regimen-de-bienes-matrimonio-chile",
    title:
      "Régimen de Bienes en el Matrimonio en Chile: sociedad conyugal, participación en gananciales y separación de bienes",
    metaTitle: "Régimen de Bienes en el Matrimonio Chile: cuál elegir y cómo cambiar",
    description:
      "Guía completa de los tres regímenes de bienes del matrimonio en Chile: sociedad conyugal (régimen por defecto), participación en gananciales y separación total de bienes. Diferencias, cómo elegir antes de casarse y cómo cambiar después.",
    category: "Régimen de bienes",
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    readingMinutes: 8,
    keywords: [
      "régimen de bienes matrimonio chile",
      "sociedad conyugal chile",
      "separación de bienes chile",
      "participación en gananciales chile",
      "cambiar régimen de bienes matrimonio",
      "capitulaciones matrimoniales chile",
    ],
    lead:
      "En Chile existen tres regímenes de bienes para el matrimonio: **sociedad conyugal** (el régimen por defecto si no se pacta otro), **separación total de bienes** y **participación en los gananciales**. Si los cónyuges no eligen antes del matrimonio, quedan automáticamente en **sociedad conyugal**. Es posible **cambiar de régimen durante el matrimonio** — de sociedad conyugal o participación en gananciales a separación de bienes — mediante escritura pública subinscrita en el Registro Civil, pero este cambio es **irrevocable**.",
    stats: [
      { label: "Régimen por defecto", value: "Sociedad conyugal" },
      { label: "Opciones al casarse", value: "3: sociedad conyugal · separación · participación" },
      { label: "Pacto antes del matrimonio", value: "Capitulaciones matrimoniales ante notario" },
      { label: "Cambio durante el matrimonio", value: "Solo hacia separación de bienes (irrevocable)" },
      { label: "Se liquida al", value: "Divorcio, nulidad o muerte de un cónyuge" },
      { label: "Marco legal", value: "Código Civil Arts. 135 a 178 · Ley 19.335" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es el régimen de bienes y por qué importa?" },
      {
        t: "p",
        x: "El régimen de bienes determina **quién es dueño de qué** durante el matrimonio y **cómo se reparten los bienes** al terminar — por [divorcio](/blog/divorcio-en-chile), nulidad o fallecimiento. Elegir bien protege tu patrimonio, tu emprendimiento y a tu familia. Si no eliges nada, la ley te asigna sociedad conyugal, que puede no ser lo que más te conviene.",
      },
      { t: "h2", x: "Los tres regímenes explicados" },
      { t: "h3", x: "1. Sociedad conyugal (régimen por defecto)" },
      {
        t: "p",
        x: "Es el régimen legal supletorio: si no pactas otro antes de casarte, quedas en sociedad conyugal. Funciona así: todo lo que los cónyuges **adquieren durante el matrimonio a título oneroso** (sueldos, compras, inversiones) pasa a un fondo común llamado **haber social**, que al disolverse se **divide por mitades**. Lo que cada uno tenía antes de casarse o recibe **por herencia o donación** queda como bien propio.",
      },
      {
        t: "ul",
        x: [
          "La **administración ordinaria** del haber social la tiene el **marido** — un aspecto criticado por su origen histórico — aunque necesita **autorización de la mujer** para vender, hipotecar o gravar bienes raíces sociales o los de ella (Art. 1749 del Código Civil).",
          "La mujer tiene un **patrimonio reservado** (Art. 150 CC): los bienes que adquiere con su trabajo separado del marido los administra y dispone libremente.",
          "Al disolverse, se liquida: se pagan las deudas sociales y el remanente se **divide por mitades** entre los cónyuges (o sus herederos).",
        ],
      },
      { t: "h3", x: "2. Separación total de bienes" },
      {
        t: "p",
        x: "Cada cónyuge **administra, goza y dispone libremente** de sus propios bienes, tanto los que tenía antes como los que adquiere durante el matrimonio. No se forma patrimonio común. Al divorciarse, **cada uno se queda con lo suyo** — no hay liquidación. Se pacta en las **capitulaciones matrimoniales** antes del matrimonio, o se puede adoptar **durante el matrimonio** sustituyendo la sociedad conyugal o la participación en gananciales.",
      },
      {
        t: "note",
        x: "Es el régimen que eligen la mayoría de las parejas con actividad empresarial o patrimonios desiguales, porque protege a cada cónyuge de las deudas del otro y simplifica el divorcio.",
      },
      { t: "h3", x: "3. Participación en los gananciales" },
      {
        t: "p",
        x: "Creado por la **Ley 19.335** de 1994. Durante el matrimonio funciona **como separación de bienes**: cada cónyuge administra lo suyo de forma independiente. Pero al disolverse el régimen, se calcula cuánto **ganó** cada uno durante el matrimonio (los «gananciales»), y el que ganó menos tiene derecho a que el otro le pague la **mitad de la diferencia**, como un **crédito en dinero**.",
      },
      {
        t: "ul",
        x: [
          "Combina la independencia de la separación con la equidad de la sociedad conyugal.",
          "No se reparten bienes específicos: el crédito de participación es una **obligación de pagar dinero**.",
          "Se pacta en las capitulaciones matrimoniales antes de casarse, o puede adoptarse durante el matrimonio en lugar de la sociedad conyugal (Arts. 1723 y 1792-1 CC).",
        ],
      },
      { t: "h2", x: "Comparación rápida de los tres regímenes" },
      {
        t: "table",
        head: ["Aspecto", "Sociedad conyugal", "Separación de bienes", "Participación en gananciales"],
        rows: [
          ["Patrimonio común", "Sí (haber social)", "No", "No durante el matrimonio; se compensa al final"],
          ["Administración", "Marido (con limitaciones)", "Cada uno lo suyo", "Cada uno lo suyo"],
          ["Al disolverse", "Se liquida y reparte por mitades", "Cada uno conserva lo suyo", "Se paga crédito de participación al que ganó menos"],
          ["Protección ante deudas del otro", "Limitada", "Total", "Total durante el matrimonio"],
          ["Se puede pactar al casarse", "Es el defecto si no se pacta", "Sí, ante notario", "Sí, ante notario"],
        ],
      },
      { t: "h2", x: "Cómo elegir el régimen antes de casarse" },
      {
        t: "p",
        x: "Para optar por separación de bienes o participación en gananciales hay que otorgar **capitulaciones matrimoniales**: un pacto celebrado ante **notario** antes del matrimonio. Las capitulaciones se subinscriben al margen del acta de matrimonio en el Registro Civil. Si no se otorgan, el matrimonio queda automáticamente en sociedad conyugal.",
      },
      {
        t: "note",
        x: "Las capitulaciones matrimoniales también pueden estipular donaciones entre los esposos, la renuncia de gananciales por parte de la mujer, y otras convenciones lícitas que no afecten derechos de terceros ni los deberes del matrimonio.",
      },
      { t: "h2", x: "¿Se puede cambiar el régimen durante el matrimonio?" },
      {
        t: "p",
        x: "Sí, con una limitación importante: **solo se puede pasar a separación total de bienes**, nunca al revés. El cambio se hace mediante **escritura pública** subinscrita al margen de la inscripción matrimonial dentro de **30 días**. Es un acto **irrevocable**: una vez que los cónyuges optan por separación de bienes, no pueden volver a sociedad conyugal ni a participación en gananciales (Art. 1723 del Código Civil).",
      },
      {
        t: "ol",
        x: [
          "Ambos cónyuges concurren ante **notario** y otorgan escritura pública de sustitución de régimen.",
          "En la misma escritura se puede **liquidar la sociedad conyugal** o el régimen anterior.",
          "Se subinscribe al margen del acta de matrimonio en el **Registro Civil** dentro de 30 días.",
          "Desde la subinscripción, el nuevo régimen produce efectos respecto de terceros.",
        ],
      },
      { t: "h2", x: "¿Qué pasa con los bienes al divorciarse?" },
      {
        t: "p",
        x: "En **sociedad conyugal**, el divorcio la disuelve y debe liquidarse: se inventarían los bienes sociales, se pagan las deudas y el remanente se divide por mitades. Si no hay acuerdo, se liquida judicialmente con un partidor. En **separación de bienes**, cada uno conserva lo suyo y no hay liquidación. En **participación en gananciales**, se calculan los gananciales de cada cónyuge y el que obtuvo menos tiene derecho al crédito de participación.",
      },
      {
        t: "p",
        x: "Independiente del régimen, el cónyuge que se dedicó al hogar o al cuidado de los hijos puede pedir una **compensación económica** (Arts. 61 a 66 de la Ley 19.947), que es un derecho distinto y adicional a la liquidación del régimen.",
      },
    ],
    faq: [
      {
        q: "¿Cuál régimen me conviene más?",
        a: "Depende de tu situación: la separación de bienes es preferible cuando uno o ambos tienen actividad empresarial o patrimonio propio que quieren proteger. La sociedad conyugal favorece al cónyuge que no trabaja remuneradamente, pues recibe la mitad de los gananciales. La participación en gananciales ofrece un equilibrio: independencia durante el matrimonio y compensación al final.",
      },
      {
        q: "¿En el acuerdo de unión civil se elige régimen de bienes?",
        a: "No exactamente igual. En el AUC los convivientes civiles quedan en separación total de bienes, salvo que pacten comunidad de bienes (régimen análogo a la participación en gananciales). No existe sociedad conyugal en el AUC.",
      },
      {
        q: "¿Puedo volver a sociedad conyugal después de cambiar a separación de bienes?",
        a: "No. El cambio a separación de bienes es irrevocable por mandato del Art. 1723 del Código Civil. Una vez que se pacta, no se puede retornar a sociedad conyugal ni a participación en gananciales.",
      },
      {
        q: "¿Las deudas de mi cónyuge me pueden afectar?",
        a: "En sociedad conyugal, las deudas contraídas por el marido en la administración del haber social obligan a la sociedad y pueden afectar bienes comunes. En separación de bienes y en participación en gananciales, cada uno responde solo por sus deudas con su patrimonio.",
      },
      {
        q: "¿Qué pasa si me caso en el extranjero y vivo en Chile?",
        a: "El matrimonio celebrado en el extranjero se reconoce en Chile (Art. 80 de la Ley 19.947), pero los efectos patrimoniales se rigen por la ley chilena. Si no se inscribió un régimen, se entiende que están en separación de bienes, salvo que inscriban el matrimonio y pacten otro régimen.",
      },
    ],
    related: ["divorcio-en-chile", "pension-de-alimentos-chile", "mediacion-familiar-chile"],
    sources: [
      { name: "Código Civil, Libro IV — De las obligaciones y contratos, Título XXII — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley 19.335 sobre régimen de participación en los gananciales — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19335" },
      { name: "Ley 19.947 de Matrimonio Civil — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19947" },
    ],
  },

  // ───────────────────────────── 8. RELACIÓN DIRECTA Y REGULAR (VISITAS) ─────────────────────────────
  {
    slug: "relacion-directa-y-regular-visitas",
    title:
      "Relación Directa y Regular (Régimen de Visitas) en Chile: cómo se regula y se hace cumplir",
    metaTitle: "Régimen de Visitas en Chile: cómo se fija y qué hacer si lo incumplen",
    description:
      "Guía de la relación directa y regular (visitas) en Chile: cómo acordarla, qué pasa sin acuerdo, los criterios del juez, qué incluye un régimen típico y cómo exigir su cumplimiento si el otro padre obstaculiza el contacto con los hijos.",
    category: "Relación directa y regular",
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    readingMinutes: 8,
    keywords: [
      "relación directa y regular chile",
      "régimen de visitas chile",
      "demanda de relación directa y regular",
      "incumplimiento régimen de visitas",
      "visitas padre separado chile",
      "régimen de visitas tribunal de familia",
    ],
    lead:
      "La relación directa y regular —el antiguo «régimen de visitas»— es el **derecho del hijo y del padre o madre que no vive con él a mantener un contacto periódico y estable**. Puede **acordarse** entre los padres (idealmente por escrito y aprobado en [mediación familiar](/blog/mediacion-familiar-chile)) y, **sin acuerdo, lo fija el Tribunal de Familia** ponderando el interés superior del niño. Es un **derecho del hijo**, no un favor del otro padre: quien tiene el [cuidado personal](/blog/cuidado-personal-de-los-hijos) **no puede obstaculizarlo**, y si lo hace puede pedirse su cumplimiento forzado e incluso constituir causal para revisar el cuidado.",
    stats: [
      { label: "Naturaleza", value: "Derecho del hijo y del padre/madre no custodio" },
      { label: "Acuerdo", value: "Escrito, idealmente vía mediación aprobada por el juez" },
      { label: "Sin acuerdo", value: "Lo fija el Tribunal de Familia" },
      { label: "Trámite previo a demandar", value: "Mediación obligatoria y gratuita" },
      { label: "Criterio rector", value: "Interés superior del niño (Art. 229 CC)" },
      { label: "Si lo incumplen", value: "Cumplimiento forzado y apremios" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es la relación directa y regular?" },
      {
        t: "p",
        x: "La **relación directa y regular** es el régimen que permite al padre o madre que **no tiene el cuidado personal** mantener con su hijo un contacto periódico y estable: verlo, comunicarse, compartir tiempo y participar en su crianza. Está regulada en el **Art. 229 del Código Civil** y reemplazó en el lenguaje legal al antiguo «derecho de visitas», porque no se trata de simples «visitas», sino de una relación que debe ser **directa** (contacto personal) y **regular** (con una periodicidad cierta y previsible).",
      },
      {
        t: "p",
        x: "La ley es enfática: este derecho se ejerce **en beneficio del hijo**. No es una concesión que el padre custodio otorgue o niegue a su voluntad: es, ante todo, **un derecho del propio niño** a no perder el vínculo con ambos progenitores tras la separación.",
      },
      { t: "h2", x: "¿Quién tiene derecho a la relación directa y regular?" },
      {
        t: "ul",
        x: [
          "El **padre o madre que no vive con el hijo** (porque el otro tiene el cuidado personal).",
          "El propio **hijo**, que es el titular principal del derecho a mantener el vínculo.",
          "Los **abuelos** y otros parientes pueden pedir un régimen de relación directa y regular cuando se les impide ver al niño y ello conviene a su interés (Art. 229 inciso final del Código Civil).",
        ],
      },
      { t: "h2", x: "Cómo acordar el régimen sin juicio" },
      {
        t: "p",
        x: "Lo ideal es que los padres lo **acuerden de común acuerdo**. Ese acuerdo puede plasmarse en una **mediación familiar**: si los padres llegan a un acta de acuerdo y el juez la aprueba, tiene **valor de sentencia** y se puede exigir su cumplimiento. También puede incluirse en el **acuerdo completo y suficiente** de un [divorcio](/blog/divorcio-en-chile) de mutuo acuerdo, junto con los alimentos y el cuidado personal.",
      },
      {
        t: "note",
        x: "Un acuerdo verbal «de palabra» no es exigible si después se incumple. Conviene siempre dejarlo por **escrito** y, mejor aún, **aprobado judicialmente** (vía mediación o en la sentencia), para poder hacerlo cumplir por la fuerza si fuera necesario.",
      },
      { t: "h2", x: "¿Qué pasa si no hay acuerdo? Demanda ante el Tribunal de Familia" },
      {
        t: "p",
        x: "Si los padres no logran acordarlo, el régimen lo **fija el juez**. Antes de demandar es obligatoria la [mediación familiar](/blog/mediacion-familiar-chile), que es gratuita en los centros licitados por el Ministerio de Justicia. Solo con el **acta de mediación frustrada** un abogado puede presentar la demanda de relación directa y regular ante el Tribunal de Familia del domicilio del niño.",
      },
      { t: "h2", x: "Los criterios que pondera el juez" },
      {
        t: "p",
        x: "El **Art. 229 del Código Civil** ordena que el régimen propenda a una relación **sana y cariñosa** entre padre e hijo, y manda al juez —y a los propios padres— considerar especialmente:",
      },
      {
        t: "ul",
        x: [
          "La **edad** del hijo y la etapa de desarrollo en que se encuentra.",
          "La **vinculación afectiva** entre el hijo y el padre o madre que pide el régimen, y la relación con el resto de la familia.",
          "El **régimen de cuidado personal** vigente y la rutina escolar y de actividades del niño.",
          "Cualquier otro elemento de relevancia para el **interés superior del niño**.",
          "La **opinión del hijo**, según su edad y madurez, escuchada por el tribunal en audiencia reservada.",
        ],
      },
      {
        t: "note",
        x: "El régimen puede **suspenderse o restringirse** —incluso establecerse como relación **supervisada o asistida** en un punto de encuentro— cuando exista riesgo para el niño (por ejemplo antecedentes de [violencia intrafamiliar](/blog/violencia-intrafamiliar-medidas-proteccion) o consumo problemático). El interés del hijo prima siempre por sobre el del adulto.",
      },
      { t: "h2", x: "¿Qué incluye un régimen de visitas típico?" },
      {
        t: "p",
        x: "No existe una fórmula única —cada régimen se adapta a la edad del niño, las distancias y la realidad de la familia—, pero un régimen frecuente regula con detalle:",
      },
      {
        t: "ul",
        x: [
          "**Fines de semana alternos**, normalmente desde el viernes (o sábado) hasta el domingo en la tarde, indicando horas y lugar de retiro y entrega.",
          "**Días de semana** (por ejemplo una tarde) y contacto telefónico o por videollamada.",
          "**Vacaciones de verano e invierno**, repartidas por mitades o en semanas alternas.",
          "**Fiestas y fechas especiales**: Navidad, Año Nuevo, Fiestas Patrias, cumpleaños del hijo y de cada padre, Día de la Madre y del Padre.",
          "Reglas de **traslado** (quién retira y entrega al niño y dónde) para evitar conflictos.",
        ],
      },
      { t: "h2", x: "Paso a paso para fijar o modificar el régimen" },
      {
        t: "ol",
        x: [
          "**Mediación familiar obligatoria**: gratuita en centros licitados. Si hay acuerdo, el acta aprobada por el juez vale como sentencia.",
          "**Demanda con abogado** ante el Tribunal de Familia del domicilio del niño, acompañando el acta de mediación frustrada. Si no puedes pagar abogado, la Corporación de Asistencia Judicial (CAJ) atiende gratis.",
          "**Audiencia preparatoria**: se fijan los hechos a probar; el tribunal puede pedir informe del consejo técnico o peritajes.",
          "**Audiencia de juicio**: declaran testigos y peritos, y el juez escucha al niño en forma reservada si su edad y madurez lo permiten.",
          "**Sentencia**: fija el régimen con horarios, lugares y reglas. Puede **modificarse** más adelante si cambian las circunstancias (cambio de ciudad, nueva jornada del niño), pasando otra vez por mediación.",
        ],
      },
      { t: "h2", x: "¿Qué hacer si el otro padre obstaculiza las visitas?" },
      {
        t: "p",
        x: "Si existe un régimen fijado por acuerdo aprobado o sentencia y el padre custodio lo **incumple** —no entrega al niño, inventa excusas reiteradas, impide el contacto—, se puede pedir su **cumplimiento forzado** ante el mismo tribunal. La ley contempla apremios para hacerlo efectivo.",
      },
      {
        t: "ul",
        x: [
          "Solicitar el **cumplimiento de la resolución** con auxilio de la fuerza pública para la entrega del niño.",
          "**Multas** y, en casos de incumplimiento grave y reiterado, **arresto** del padre o madre que obstaculiza (apremios del Art. 66 de la Ley 19.968).",
          "El obstáculo injustificado y reiterado es además un **antecedente que el tribunal pondera** para evaluar un eventual cambio del [cuidado personal](/blog/cuidado-personal-de-los-hijos), pues revela falta de cooperación con el otro padre.",
        ],
      },
      {
        t: "note",
        x: "Importante: el régimen de visitas y la [pensión de alimentos](/blog/pension-de-alimentos-chile) son **obligaciones independientes**. Nadie puede negar las visitas porque no se pagó la pensión, ni dejar de pagar la pensión porque no lo dejan ver al hijo. Cada incumplimiento se reclama por su propia vía.",
      },
    ],
    faq: [
      {
        q: "¿La relación directa y regular es lo mismo que el derecho de visitas?",
        a: "Sí, es el nombre legal actual del antiguo «régimen de visitas». Se llama directa y regular porque debe implicar contacto personal (directa) y una periodicidad estable y previsible (regular), no encuentros esporádicos.",
      },
      {
        q: "¿Pueden negarme ver a mi hijo si no pago la pensión de alimentos?",
        a: "No. Las visitas y la pensión de alimentos son obligaciones independientes. El no pago de la pensión se reclama por sus propias vías (incluido el Registro Nacional de Deudores), pero no autoriza a impedir la relación directa y regular, que es un derecho del hijo.",
      },
      {
        q: "¿Puedo modificar el régimen si cambian las circunstancias?",
        a: "Sí. Como toda resolución de familia, el régimen puede modificarse cuando cambian las circunstancias (cambio de ciudad, nueva rutina escolar del niño, cambio de jornada laboral), pasando nuevamente por mediación y, si no hay acuerdo, por un nuevo juicio.",
      },
      {
        q: "¿Los abuelos tienen derecho a ver a sus nietos?",
        a: "Sí. El Art. 229 del Código Civil permite a los abuelos (y a otros parientes) solicitar un régimen de relación directa y regular cuando se les impide el contacto con el niño, siempre que ello convenga a su interés superior.",
      },
      {
        q: "¿Qué pasa si el niño no quiere ir con el otro padre?",
        a: "El juez escucha la opinión del hijo según su edad y madurez, pero la decisión la toma el tribunal conforme a su interés superior. Si hay una negativa persistente, puede ordenarse una evaluación y, de existir riesgo, un régimen supervisado; lo que no procede es que un padre instrumentalice al hijo para romper el vínculo con el otro.",
      },
    ],
    related: ["cuidado-personal-de-los-hijos", "mediacion-familiar-chile", "pension-de-alimentos-chile"],
    sources: [
      { name: "Código Civil (Art. 229, relación directa y regular) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley 19.968 que crea los Tribunales de Familia — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19968" },
      { name: "Ley Fácil: guías legales — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil" },
    ],
  },

  // ───────────────────────────── 9. CUÁNTO CUESTA UN DIVORCIO ─────────────────────────────
  {
    slug: "cuanto-cuesta-un-divorcio-en-chile",
    title:
      "¿Cuánto cuesta un divorcio en Chile? Honorarios, gastos y cómo divorciarse gratis",
    metaTitle: "¿Cuánto cuesta un divorcio en Chile? Honorarios y gastos 2026",
    description:
      "Cuánto cuesta divorciarse en Chile: el tribunal no cobra, el costo real son los honorarios del abogado (más bajos en mutuo acuerdo que en uno controvertido). Cómo divorciarse gratis con la CAJ y qué gastos esperar.",
    category: "Divorcio",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    readingMinutes: 7,
    keywords: [
      "cuánto cuesta un divorcio en chile",
      "precio divorcio chile",
      "honorarios abogado divorcio",
      "divorcio gratis chile",
      "costo divorcio de mutuo acuerdo",
    ],
    lead:
      "El **Tribunal de Familia no cobra** por tramitar un divorcio: en Chile la justicia de familia es gratuita. El costo real son los **honorarios del abogado**, que son **más bajos en un divorcio de mutuo acuerdo** (rápido y sin controversia) y **más altos en uno unilateral o controvertido** que exige audiencias y prueba. Si no puedes pagar abogado, la **Corporación de Asistencia Judicial (CAJ) tramita el divorcio gratis** con privilegio de pobreza. Desconfía de quien ofrezca un «divorcio exprés sin juicio»: en Chile el divorcio **siempre** pasa por el tribunal.",
    stats: [
      { label: "Costo del tribunal", value: "$0 (la justicia de familia es gratuita)" },
      { label: "Costo principal", value: "Honorarios del abogado" },
      { label: "Más barato", value: "Divorcio de mutuo acuerdo" },
      { label: "Más caro", value: "Divorcio unilateral / por culpa (controvertido)" },
      { label: "Opción gratuita", value: "Corporación de Asistencia Judicial (CAJ)" },
      { label: "¿Requiere abogado?", value: "Sí, siempre" },
    ],
    blocks: [
      { t: "h2", x: "¿Cuánto cuesta divorciarse en Chile en 2026?" },
      {
        t: "p",
        x: "La respuesta honesta es: **depende del tipo de divorcio y del abogado**, porque en Chile no existe un arancel fijo. Lo que sí es seguro es que el **Tribunal de Familia no cobra tasas ni aranceles** por tramitar la causa. El gasto relevante son los **honorarios del abogado**, que cada profesional fija libremente y que dependen sobre todo de si el [divorcio](/blog/divorcio-en-chile) es de común acuerdo o controvertido.",
      },
      {
        t: "p",
        x: "Como regla general, un **divorcio de mutuo acuerdo** —donde ambos cónyuges están de acuerdo y firman un acuerdo completo y suficiente— es **considerablemente más barato y rápido** que un **divorcio unilateral** o **por culpa**, que exige audiencias, prueba de testigos y a veces peritajes, y por tanto más horas de trabajo del abogado.",
      },
      { t: "h2", x: "Los componentes del costo de un divorcio" },
      {
        t: "ul",
        x: [
          "**Honorarios del abogado**: el gasto principal. Se pactan libremente y suelen ser una suma única en el mutuo acuerdo, o por etapas en el divorcio controvertido.",
          "**Certificados del Registro Civil**: certificado de matrimonio y de nacimiento de los hijos. Muchos se obtienen **gratis en línea** en el sitio del Registro Civil.",
          "**Escritura del acuerdo completo y suficiente** (en el mutuo acuerdo): si se otorga ante notario, tiene el costo de la escritura pública.",
          "**Prueba del cese de convivencia**: si hay que extender un acta o escritura para acreditar la fecha del cese, tiene el costo notarial correspondiente.",
          "**Liquidación de la sociedad conyugal** (si corresponde): es un trámite aparte; ver [régimen de bienes del matrimonio](/blog/regimen-de-bienes-matrimonio-chile).",
        ],
      },
      {
        t: "note",
        x: "El divorcio en sí no liquida los bienes. Si estás en sociedad conyugal, la **liquidación** es un trámite distinto (de común acuerdo ante notario o judicial con un partidor) y tiene su propio costo, que no debe confundirse con el del divorcio.",
      },
      { t: "h2", x: "¿Por qué el mutuo acuerdo es más barato?" },
      {
        t: "p",
        x: "Porque requiere **mucho menos trabajo y tiempo**. En el divorcio de común acuerdo basta acreditar **1 año de cese de convivencia** y presentar el **acuerdo completo y suficiente** que regula alimentos, [cuidado personal](/blog/cuidado-personal-de-los-hijos) y [relación directa y regular](/blog/relacion-directa-y-regular-visitas) de los hijos. Suele resolverse en pocas audiencias —a veces una sola— y demora unos **2 a 4 meses**.",
      },
      {
        t: "p",
        x: "El **divorcio unilateral** exige **3 años de cese**, audiencia preparatoria y de juicio, prueba de testigos y la posibilidad de que el otro cónyuge se oponga (incluida la **cláusula de dureza** del Art. 55 de la Ley 19.947). Más etapas significa más horas de abogado y, por lo tanto, mayor costo. Suele demorar de **6 meses a 1 año**.",
      },
      { t: "h2", x: "Cómo divorciarse gratis: la Corporación de Asistencia Judicial" },
      {
        t: "p",
        x: "Si no puedes pagar un abogado, tienes derecho a tramitar tu divorcio **gratis** a través de la **Corporación de Asistencia Judicial (CAJ)**, que otorga representación con **privilegio de pobreza** a quienes no cuentan con medios. También las **clínicas jurídicas de las universidades** atienden causas de familia sin costo. La gratuidad cubre el patrocinio profesional; los certificados gratuitos del Registro Civil completan el cuadro.",
      },
      {
        t: "ol",
        x: [
          "Acude a la **oficina de la CAJ** de tu comuna (o a una clínica jurídica universitaria) y solicita orientación.",
          "Acredita tu situación económica para acceder al **privilegio de pobreza**.",
          "Reúne los **documentos**: certificado de matrimonio, certificados de nacimiento de los hijos y prueba del cese de convivencia.",
          "El abogado de la CAJ **presenta y tramita** el divorcio ante el Tribunal de Familia sin que pagues honorarios.",
        ],
      },
      { t: "h2", x: "Cuidado con los «divorcios exprés» y ofertas engañosas" },
      {
        t: "p",
        x: "En Chile **no existe el divorcio administrativo ni notarial**: todo divorcio —incluso el de mutuo acuerdo— se tramita ante el **Tribunal de Familia** y requiere abogado. Cualquier oferta de «divorcio en 24 horas», «sin juicio» o «solo ante notario» es engañosa. Lo que sí puede ser rápido y económico es un **mutuo acuerdo bien preparado**, pero siempre con sentencia judicial subinscrita en el Registro Civil. Solo desde esa subinscripción quedas legalmente divorciado.",
      },
    ],
    faq: [
      {
        q: "¿El Tribunal de Familia cobra por el divorcio?",
        a: "No. La justicia de familia en Chile es gratuita: no hay tasas ni aranceles judiciales por tramitar un divorcio. El costo que enfrentas son los honorarios del abogado y algunos certificados, varios de los cuales se obtienen gratis en línea.",
      },
      {
        q: "¿Cuánto cobra un abogado por un divorcio de mutuo acuerdo?",
        a: "No hay arancel fijo: cada abogado fija sus honorarios libremente. En general el mutuo acuerdo es mucho más económico que un divorcio controvertido porque requiere menos audiencias y trabajo. Conviene pedir varios presupuestos y que el honorario quede por escrito.",
      },
      {
        q: "¿Puedo divorciarme gratis?",
        a: "Sí. La Corporación de Asistencia Judicial (CAJ) tramita divorcios gratis con privilegio de pobreza para quienes no pueden pagar un abogado, y las clínicas jurídicas universitarias también atienden causas de familia sin costo.",
      },
      {
        q: "¿Es más barato hacer el divorcio yo mismo sin abogado?",
        a: "No es posible: el divorcio en Chile requiere abogado obligatoriamente. Si el costo es el problema, la vía no es prescindir del abogado sino recurrir a la CAJ o a una clínica jurídica, que prestan el patrocinio gratis.",
      },
      {
        q: "¿La liquidación de los bienes está incluida en el costo del divorcio?",
        a: "No. La liquidación de la sociedad conyugal es un trámite distinto del divorcio, con su propio costo (notarial si es de común acuerdo, o judicial con partidor). El divorcio disuelve la sociedad conyugal, pero la repartición de los bienes se hace por separado.",
      },
    ],
    related: ["divorcio-en-chile", "compensacion-economica-divorcio-como-se-calcula", "regimen-de-bienes-matrimonio-chile"],
    sources: [
      { name: "Ley 19.947 de Matrimonio Civil — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19947" },
      { name: "Ley Fácil: El divorcio — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/divorcio" },
      { name: "Corporación de Asistencia Judicial (CAJ)", url: "https://www.cajmetropolitana.gob.cl" },
    ],
  },

  // ───────────────────────────── 10. CÓMO REBAJAR LA PENSIÓN DE ALIMENTOS ─────────────────────────────
  {
    slug: "como-rebajar-la-pension-de-alimentos",
    title:
      "Cómo rebajar la pensión de alimentos en Chile: requisitos, causales y paso a paso",
    metaTitle: "Cómo rebajar la pensión de alimentos en Chile (2026)",
    description:
      "Cómo pedir la rebaja de la pensión de alimentos en Chile: necesitas acreditar un cambio real de circunstancias (cesantía, nuevas cargas, baja de ingresos). Mediación previa, demanda de rebaja y por qué nunca debes dejar de pagar.",
    category: "Pensión de alimentos",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    readingMinutes: 7,
    keywords: [
      "cómo rebajar la pensión de alimentos",
      "demanda de rebaja de pensión de alimentos",
      "rebajar pensión alimenticia chile",
      "disminuir pensión de alimentos",
      "cambio de circunstancias pensión alimentos",
    ],
    lead:
      "Para **rebajar la pensión de alimentos en Chile** debes demandar la rebaja ante el **Tribunal de Familia** y acreditar un **cambio real y permanente de circunstancias** desde que se fijó: por ejemplo, **pérdida del empleo, baja sostenida de ingresos o nuevas cargas familiares** (un nuevo hijo). Antes de demandar es **obligatoria la mediación**. Mientras el juez no resuelva, **debes seguir pagando el monto vigente**: dejar de pagar por tu cuenta genera deuda y puede llevarte al [Registro Nacional de Deudores](/blog/registro-nacional-de-deudores).",
    stats: [
      { label: "Requisito de fondo", value: "Cambio real y permanente de circunstancias" },
      { label: "Trámite previo", value: "Mediación familiar obligatoria" },
      { label: "Dónde se demanda", value: "Tribunal de Familia" },
      { label: "Mientras se tramita", value: "Sigue pagando el monto vigente" },
      { label: "Tope que no baja del mínimo", value: "40% IMM (1 hijo) salvo falta de medios" },
      { label: "Ley aplicable", value: "Ley 14.908 · Art. 332 Código Civil" },
    ],
    blocks: [
      { t: "h2", x: "¿Se puede rebajar una pensión de alimentos ya fijada?" },
      {
        t: "p",
        x: "Sí. Ni el monto acordado en [mediación](/blog/mediacion-familiar-chile) ni el fijado por sentencia son inmodificables. La [pensión de alimentos](/blog/pension-de-alimentos-chile) se fija según dos factores —las **necesidades del hijo** y la **capacidad económica de quien paga**— y si esos factores **cambian sustancialmente**, cualquiera de los padres puede pedir su revisión. La rebaja la pide el **alimentante** (quien paga); el aumento lo pide quien recibe. Si quieres tener una referencia del rango legal con tus nuevos ingresos, puedes usar la [calculadora de pensión de alimentos](/calculadora-pension-alimentos).",
      },
      {
        t: "note",
        x: "Clave jurídica: los alimentos se deben mientras subsistan las circunstancias que los motivaron (**Art. 332 del Código Civil**). Por eso una sentencia de alimentos siempre puede revisarse si esas circunstancias varían — no produce «cosa juzgada» definitiva en ese sentido.",
      },
      { t: "h2", x: "Causales que justifican una rebaja" },
      {
        t: "p",
        x: "No basta con querer pagar menos: hay que demostrar un **cambio objetivo, real y no transitorio** respecto de la situación que existía cuando se fijó la pensión. Las causales más habituales son:",
      },
      {
        t: "ul",
        x: [
          "**Pérdida del empleo o cesantía** prolongada del alimentante.",
          "**Disminución sostenida de ingresos** (cierre del negocio, baja de remuneraciones, término de un contrato).",
          "**Nacimiento de un nuevo hijo** u otras cargas familiares que el alimentante debe mantener.",
          "**Enfermedad o incapacidad** que reduce la capacidad de generar ingresos o aumenta los gastos médicos propios.",
          "**Disminución de las necesidades del hijo** (por ejemplo, dejó un colegio particular pagado, o el otro padre empezó a cubrir un gasto importante).",
        ],
      },
      {
        t: "note",
        x: "Una baja **voluntaria o transitoria** de ingresos no sirve: si el alimentante renuncia a un buen trabajo o se «empobrece» a propósito para pagar menos, el tribunal puede rechazar la rebaja y apreciar su capacidad económica por **signos externos** (auto, propiedades, nivel de vida).",
      },
      { t: "h2", x: "El piso mínimo: hasta dónde puede bajar" },
      {
        t: "p",
        x: "La pensión, en principio, **no puede rebajarse bajo el mínimo legal**: **40% de un ingreso mínimo mensual** por un hijo, o **30% por cada hijo** si son dos o más (Art. 3 de la Ley 14.908). Ese mínimo solo cede si el alimentante **acredita que carece de los medios** para pagarlo. Es decir, la rebaja puede ajustar el monto, pero el tribunal protege un umbral básico para el hijo salvo prueba clara de imposibilidad.",
      },
      { t: "h2", x: "Paso a paso para rebajar la pensión" },
      {
        t: "ol",
        x: [
          "**Reúne la prueba del cambio**: finiquito o carta de despido, liquidaciones que muestren la baja de ingresos, certificado de nacimiento del nuevo hijo, informes médicos, etc.",
          "**Asiste a mediación familiar**: la rebaja de pensión es materia de **mediación previa obligatoria** y gratuita en los centros licitados. Si hay acuerdo, el acta aprobada por el juez vale como sentencia.",
          "**Presenta la demanda de rebaja** (si la mediación se frustra) ante el **Tribunal de Familia**, con abogado o con la CAJ si no puedes pagarlo.",
          "**Acredita en la audiencia** el cambio de circunstancias. El tribunal pondera las nuevas necesidades del hijo y tu capacidad económica real.",
          "**Espera la sentencia**: si se acoge, el nuevo monto rige hacia el futuro. La rebaja **no borra la deuda ya devengada** antes de la sentencia.",
        ],
      },
      { t: "h2", x: "El error más caro: dejar de pagar por tu cuenta" },
      {
        t: "p",
        x: "Aunque tu situación económica haya empeorado de verdad, **no puedes rebajar la pensión unilateralmente** ni dejar de pagarla mientras esperas. La pensión vigente **se sigue debiendo** hasta que el juez la modifique, y cada mes impago se acumula como **deuda**. Esa deuda puede activar la [liquidación y los apremios](/blog/que-pasa-si-no-pago-la-pension-de-alimentos) y la inscripción en el [Registro Nacional de Deudores](/blog/registro-nacional-de-deudores), con retención de créditos, bloqueo de pasaporte y licencia, e incluso arresto.",
      },
      {
        t: "note",
        x: "Lo correcto es demandar la rebaja **apenas cambien tus circunstancias** y seguir pagando lo que puedas en el intertanto. Mostrar voluntad de pago juega a tu favor; acumular deuda, en tu contra.",
      },
    ],
    faq: [
      {
        q: "¿Puedo rebajar la pensión si me quedé sin trabajo?",
        a: "Puedes demandar la rebaja acreditando la cesantía y la baja real de ingresos, pero no puedes dejar de pagar por tu cuenta. El tribunal evaluará si el cambio es real y permanente. Mientras tanto, sigue pagando lo que puedas para no acumular deuda ni caer en el Registro de Deudores.",
      },
      {
        q: "¿Tener un nuevo hijo es motivo para rebajar la pensión?",
        a: "Sí, es una de las causales típicas: una nueva carga familiar disminuye tu capacidad económica disponible. Debes acreditarlo (certificado de nacimiento, gastos) en una demanda de rebaja, previa mediación. El tribunal redistribuye considerando a todos los hijos que debes mantener.",
      },
      {
        q: "¿La rebaja borra lo que ya debo?",
        a: "No. La rebaja rige hacia el futuro desde la sentencia. La deuda devengada antes —las cuotas impagas mientras se tramitaba— no se rebaja retroactivamente y sigue siendo exigible con sus apremios.",
      },
      {
        q: "¿Hasta cuánto puede bajar la pensión?",
        a: "Como regla, no bajo el mínimo legal (40% de un ingreso mínimo por un hijo, 30% por cada uno si son dos o más). Ese piso solo cede si acreditas ante el tribunal que careces de los medios para pagarlo.",
      },
      {
        q: "¿Necesito abogado para pedir la rebaja?",
        a: "Para la mediación no necesitas abogado, aunque es recomendable asesorarte. Para la demanda ante el Tribunal de Familia sí se requiere abogado; si no puedes pagarlo, la Corporación de Asistencia Judicial te representa gratis.",
      },
    ],
    related: ["pension-de-alimentos-chile", "que-pasa-si-no-pago-la-pension-de-alimentos", "mediacion-familiar-chile"],
    sources: [
      { name: "Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=27977" },
      { name: "Código Civil (Art. 332, duración de los alimentos) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley Fácil: Pensión alimenticia — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/pension-alimenticia-para-menores" },
    ],
  },

  // ───────────────────────────── 11. QUÉ PASA SI NO PAGO LA PENSIÓN ─────────────────────────────
  {
    slug: "que-pasa-si-no-pago-la-pension-de-alimentos",
    title:
      "¿Qué pasa si no pago la pensión de alimentos en Chile? Consecuencias y apremios",
    metaTitle: "¿Qué pasa si no pago la pensión de alimentos? Consecuencias",
    description:
      "Consecuencias de no pagar la pensión de alimentos en Chile: liquidación de la deuda, retención de sueldo, arresto nocturno, arraigo, retención de la devolución de impuestos e inscripción en el Registro Nacional de Deudores (Ley 21.389).",
    category: "Pensión de alimentos",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    readingMinutes: 8,
    keywords: [
      "qué pasa si no pago la pensión de alimentos",
      "consecuencias de no pagar pensión de alimentos",
      "apremios pensión de alimentos",
      "arresto por no pagar pensión",
      "deuda pensión de alimentos chile",
    ],
    lead:
      "Si no pagas la pensión de alimentos en Chile, quien la recibe puede pedir la **liquidación de la deuda** y una batería de **apremios**: **retención del sueldo por el empleador**, **retención de la devolución de impuestos**, **arresto nocturno** de hasta 15 días (ampliable) y **arraigo nacional**. Con **3 mensualidades consecutivas o 5 discontinuas** impagas quedas inscrito en el [Registro Nacional de Deudores](/blog/registro-nacional-de-deudores) (Ley 21.389), que **bloquea pasaporte, licencia de conducir y créditos**. La deuda **no prescribe fácilmente** y los apremios escalan mientras no pagues.",
    stats: [
      { label: "Primer paso del acreedor", value: "Liquidación de la deuda en el tribunal" },
      { label: "Retención de sueldo", value: "El empleador descuenta y paga directo" },
      { label: "Arresto nocturno", value: "Hasta 15 días, ampliable, + arraigo" },
      { label: "Devolución de impuestos", value: "Retenida por Tesorería" },
      { label: "Registro de Deudores", value: "3 cuotas consecutivas o 5 discontinuas" },
      { label: "Ley aplicable", value: "Ley 14.908 · Ley 21.389" },
    ],
    blocks: [
      { t: "h2", x: "No pagar la pensión tiene consecuencias serias" },
      {
        t: "p",
        x: "La [pensión de alimentos](/blog/pension-de-alimentos-chile) es una obligación legal que se hace cumplir por la fuerza. Cuando el alimentante deja de pagar, la ley pone a disposición del alimentario (quien recibe) un conjunto de **apremios y medidas** cada vez más severos, regulados en la **Ley 14.908** y reforzados por la **Ley 21.389**. No se trata de amenazas teóricas: los tribunales de familia los aplican de forma rutinaria.",
      },
      { t: "h2", x: "Paso 1: la liquidación de la deuda" },
      {
        t: "p",
        x: "Todo parte por **cuantificar lo adeudado**. El alimentario pide en el mismo expediente que se **liquide la deuda**: el tribunal calcula las cuotas impagas más los reajustes e intereses. Esa liquidación se **notifica al deudor**, que puede objetarla en un plazo breve. Aprobada la liquidación, queda firme el monto que se cobrará con los apremios.",
      },
      { t: "h2", x: "Paso 2: los apremios para forzar el pago" },
      {
        t: "ul",
        x: [
          "**Retención por el empleador**: el tribunal ordena descontar la pensión (y la deuda) directamente del sueldo y depositarla. Si el empleador no cumple, **responde solidariamente** de las sumas no retenidas.",
          "**Retención de la devolución de impuestos**: la Tesorería retiene la devolución de la operación renta del deudor y la destina a pagar la deuda alimentaria.",
          "**Suspensión de la licencia de conducir** y **retención de créditos** bancarios desde 50 UF (50%), entre otras medidas vinculadas al Registro de Deudores.",
          "**Arraigo nacional**: el deudor no puede salir del país mientras no pague o garantice la deuda.",
          "**Arresto nocturno**: el tribunal puede decretar el arresto del deudor **hasta por 15 días**, ampliable hasta por 30 en caso de reiteración, cumpliéndolo de noche para que pueda trabajar de día.",
          "**Pago con la indemnización por años de servicio**: si el deudor es despedido, parte de su indemnización se retiene para pagar la deuda de alimentos.",
        ],
      },
      {
        t: "note",
        x: "El arresto por deuda de alimentos es **constitucionalmente válido** en Chile: la prohibición de prisión por deudas no rige para las obligaciones alimentarias, expresamente exceptuadas. No es una pena criminal, sino un **apremio** para forzar el cumplimiento.",
      },
      { t: "h2", x: "Paso 3: el Registro Nacional de Deudores (Ley 21.389)" },
      {
        t: "p",
        x: "Si adeudas **3 mensualidades consecutivas o 5 discontinuas**, el tribunal ordena tu inscripción en el [Registro Nacional de Deudores de Pensiones de Alimentos](/blog/registro-nacional-de-deudores), administrado por el Registro Civil. Estar inscrito desencadena bloqueos automáticos:",
      },
      {
        t: "ul",
        x: [
          "**Rechazo del pasaporte** y de la licencia de conducir (solicitud o renovación).",
          "**Retención del 50%** en operaciones de crédito desde 50 UF.",
          "**Bloqueo de la transferencia** de vehículos e inmuebles del deudor.",
          "**Inhabilidad** para ciertos beneficios estatales y para asumir o ascender en altos cargos públicos sin regularizar.",
        ],
      },
      { t: "h2", x: "¿La deuda de alimentos prescribe o se borra?" },
      {
        t: "p",
        x: "No desaparece por dejar pasar el tiempo: las cuotas devengadas son exigibles y los apremios pueden pedirse mientras subsista la deuda. Tampoco la **rebaja** futura de la pensión borra lo ya adeudado. La única forma de terminar con las consecuencias es **pagar la deuda** o llegar a un **acuerdo de pago serio y suficiente** aprobado por el juez.",
      },
      { t: "h2", x: "¿Qué hacer si de verdad no puedes pagar?" },
      {
        t: "p",
        x: "Si tu situación económica cambió (cesantía, enfermedad), la salida **no es dejar de pagar**: es demandar la [rebaja de la pensión](/blog/como-rebajar-la-pension-de-alimentos) cuanto antes y seguir pagando lo que puedas mientras se resuelve. Acumular deuda solo empeora tu situación: la rebaja rige hacia el futuro y **no elimina** las cuotas ya impagas.",
      },
    ],
    faq: [
      {
        q: "¿Pueden meterme preso por no pagar la pensión de alimentos?",
        a: "Pueden decretar tu arresto nocturno hasta por 15 días (ampliable hasta 30 en caso de reiteración) como apremio para forzar el pago. No es una condena penal, sino una medida de apremio: la excepción de la prisión por deudas alimentarias está expresamente reconocida en Chile.",
      },
      {
        q: "¿A partir de cuántas cuotas impagas me inscriben en el Registro de Deudores?",
        a: "Con 3 mensualidades consecutivas o 5 discontinuas adeudadas, total o parcialmente, el Tribunal de Familia ordena la inscripción en el Registro Nacional de Deudores, previa liquidación de la deuda que se te notifica.",
      },
      {
        q: "¿Me pueden retener la devolución de impuestos por la deuda?",
        a: "Sí. La Tesorería General de la República retiene la devolución de la operación renta del deudor de alimentos y la destina a pagar lo adeudado al alimentario.",
      },
      {
        q: "¿La deuda de pensión de alimentos prescribe?",
        a: "No se extingue por el simple paso del tiempo mientras subsista: las cuotas devengadas son exigibles y los apremios pueden solicitarse hasta que se pague. Conviene pedir la liquidación y las medidas en el expediente para hacerla efectiva.",
      },
      {
        q: "Si no puedo pagar, ¿qué hago?",
        a: "Demanda la rebaja de la pensión apenas cambien tus circunstancias y sigue pagando lo que puedas. Dejar de pagar genera deuda con apremios e inscripción en el Registro. La rebaja rige hacia el futuro y no borra lo ya adeudado.",
      },
    ],
    related: ["registro-nacional-de-deudores", "pension-de-alimentos-chile", "como-rebajar-la-pension-de-alimentos"],
    sources: [
      { name: "Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=27977" },
      { name: "Ley 21.389 que crea el Registro Nacional de Deudores — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=1168463" },
      { name: "Ley Fácil: Registro Nacional de Deudores — BCN", url: "https://www.bcn.cl/portal/leyfacil/recurso/registro-nacional-de-deudores-de-pensiones-de-alimentos" },
    ],
  },

  // ───────────────────────────── 12. PENSIÓN PARA HIJOS MAYORES / UNIVERSITARIOS ─────────────────────────────
  {
    slug: "pension-de-alimentos-hijos-mayores-universitarios",
    title:
      "Pensión de alimentos para hijos mayores de edad y universitarios en Chile",
    metaTitle: "Pensión de alimentos para hijos mayores y universitarios",
    description:
      "¿Hay que pagar pensión de alimentos a un hijo mayor de edad en Chile? Sí: hasta los 21 años, y hasta los 28 si estudia una profesión u oficio. Requisitos, qué se considera estudiar y cuándo cesa la obligación.",
    category: "Pensión de alimentos",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    readingMinutes: 7,
    keywords: [
      "pensión de alimentos hijos mayores de edad",
      "pensión de alimentos universitarios chile",
      "hasta qué edad se paga la pensión de alimentos",
      "pensión alimentos hijo 21 años",
      "pensión alimentos hijo que estudia",
    ],
    lead:
      "En Chile la pensión de alimentos **no termina al cumplir 18 años**. Se debe **hasta los 21 años** sin más requisitos, y se **extiende hasta los 28 años si el hijo estudia una profesión u oficio** que lo habilite para una actividad laboral. Sin límite de edad si el hijo tiene una **incapacidad** que le impida mantenerse, o cuando el juez lo estime indispensable por circunstancias calificadas (Art. 332 del Código Civil). El cese **no es automático**: si la pensión la pagaba un empleador por retención, conviene **pedir al tribunal** que la declare extinguida.",
    stats: [
      { label: "Regla general", value: "Pensión hasta los 21 años" },
      { label: "Si estudia", value: "Hasta los 28 años (profesión u oficio)" },
      { label: "Con incapacidad", value: "Sin límite de edad" },
      { label: "Norma clave", value: "Art. 332 Código Civil" },
      { label: "Cese", value: "No es automático: conviene pedirlo al tribunal" },
      { label: "Mediación", value: "Obligatoria para modificar o cesar" },
    ],
    blocks: [
      { t: "h2", x: "¿Hay que pagar pensión a un hijo mayor de 18 años?" },
      {
        t: "p",
        x: "Sí. Es uno de los errores más comunes creer que la [pensión de alimentos](/blog/pension-de-alimentos-chile) termina cuando el hijo cumple **18 años**. La ley chilena la extiende más allá de la mayoría de edad: la obligación se mantiene **hasta los 21 años** de forma general, y puede prolongarse **hasta los 28 años** si el hijo está estudiando. La fuente es el **Art. 332 del Código Civil**.",
      },
      { t: "h2", x: "Las reglas de edad, en detalle" },
      {
        t: "table",
        head: ["Situación del hijo", "¿Se debe pensión?", "Hasta cuándo"],
        rows: [
          ["Menor de 21 años", "Sí, sin requisitos adicionales", "21 años"],
          ["Entre 21 y 28 años que estudia", "Sí, si cursa una profesión u oficio", "28 años"],
          ["Mayor con incapacidad física o mental", "Sí, mientras dure la incapacidad", "Sin límite de edad"],
          ["Mayor de 21 que no estudia ni tiene incapacidad", "Por regla general, no", "Cesa, salvo causa calificada"],
        ],
      },
      {
        t: "note",
        x: "Excepción del Art. 332: aun fuera de esos supuestos, el juez puede mantener los alimentos cuando existan **circunstancias calificadas** que lo hagan indispensable. La regla de edad es el estándar, pero el tribunal pondera la realidad de cada caso.",
      },
      { t: "h2", x: "¿Qué significa «que estudie» para extender la pensión a los 28?" },
      {
        t: "p",
        x: "La ley exige que el hijo **esté estudiando una profesión u oficio**. En la práctica esto comprende estudios en la **universidad, instituto profesional o centro de formación técnica**, e incluso la enseñanza de un oficio. No es un cheque en blanco: se entiende referido a estudios **regulares y conducentes** a habilitar al hijo para el trabajo, no a carreras eternas o matrículas meramente formales. El hijo debe acreditar que efectivamente cursa y avanza.",
      },
      { t: "h2", x: "¿Quién recibe la pensión cuando el hijo es mayor de edad?" },
      {
        t: "p",
        x: "Mientras el hijo es menor, la pensión la administra el padre o madre que tiene su [cuidado personal](/blog/cuidado-personal-de-los-hijos). Al cumplir la **mayoría de edad**, el hijo pasa a ser **titular** de su derecho de alimentos: puede recibirlos directamente y, si fuera necesario, demandar o intervenir él mismo en la causa. En la práctica, la forma de pago (cuenta de depósito, retención por empleador) suele mantenerse salvo que se solicite cambiarla.",
      },
      { t: "h2", x: "El cese de la pensión no es automático" },
      {
        t: "p",
        x: "Cuando el hijo cumple 21 años (y no estudia) o cumple 28, la obligación **deja de tener fundamento legal**, pero la pensión **no se extingue sola** si fue fijada por sentencia y se paga, por ejemplo, mediante retención del empleador. Para detener legalmente el descuento conviene **pedir al Tribunal de Familia que declare el cese** de la obligación, evitando seguir pagando o generar conflictos con el empleador.",
      },
      {
        t: "ol",
        x: [
          "**Verifica la causal**: el hijo cumplió 21 y no estudia, o cumplió 28, o cesó la incapacidad.",
          "**Asiste a mediación**: el cese de alimentos es materia de [mediación previa](/blog/mediacion-familiar-chile). Si hay acuerdo, el acta aprobada por el juez lo formaliza.",
          "**Demanda el cese** (si no hay acuerdo) ante el Tribunal de Familia, acreditando que ya no concurren los requisitos.",
          "**Obtén la resolución** que declara extinguida la pensión y, con ella, ordena al empleador dejar de retener.",
        ],
      },
      {
        t: "note",
        x: "Cuidado: dejar de pagar **por tu cuenta** cuando crees que el hijo «ya no califica» es riesgoso. Si la sentencia sigue vigente, cada cuota impaga genera **deuda** con [apremios](/blog/que-pasa-si-no-pago-la-pension-de-alimentos). Lo seguro es obtener primero la declaración judicial de cese.",
      },
    ],
    faq: [
      {
        q: "¿La pensión de alimentos termina a los 18 años?",
        a: "No. Se debe hasta los 21 años sin requisitos adicionales, y hasta los 28 si el hijo estudia una profesión u oficio. Con una incapacidad que le impida mantenerse, no hay límite de edad. Cumplir 18 años, por sí solo, no extingue la pensión.",
      },
      {
        q: "¿Hasta qué edad se paga si el hijo está en la universidad?",
        a: "Hasta los 28 años, siempre que esté efectivamente estudiando una profesión u oficio que lo habilite para trabajar. Debe tratarse de estudios regulares y conducentes; no basta una matrícula formal sin avance.",
      },
      {
        q: "¿Tengo que seguir pagando si mi hijo de 22 no estudia ni trabaja?",
        a: "Por regla general, no: cumplidos los 21 sin estudiar ni tener una incapacidad, la causa de la pensión desaparece. Pero el juez puede mantenerla por circunstancias calificadas. Para dejar de pagar conviene pedir al tribunal que declare el cese, no suspender los pagos por cuenta propia.",
      },
      {
        q: "¿La pensión se corta sola cuando el hijo cumple la edad?",
        a: "No automáticamente si la paga un empleador por retención judicial. Conviene pedir al Tribunal de Familia que declare extinguida la obligación para que ordene cesar el descuento; de lo contrario podrían seguir reteniéndola.",
      },
      {
        q: "¿El hijo mayor de edad puede demandar él mismo la pensión?",
        a: "Sí. Alcanzada la mayoría de edad, el hijo es titular de su derecho de alimentos y puede demandarlos o intervenir directamente en la causa, acreditando que estudia (si tiene entre 21 y 28) o la circunstancia que justifica los alimentos.",
      },
    ],
    related: ["pension-de-alimentos-chile", "como-rebajar-la-pension-de-alimentos", "que-pasa-si-no-pago-la-pension-de-alimentos"],
    sources: [
      { name: "Código Civil (Art. 332, duración de los alimentos) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=27977" },
      { name: "Ley Fácil: Pensión alimenticia — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/pension-alimenticia-para-menores" },
    ],
  },

  // ───────────────────────────── 13. COMPENSACIÓN ECONÓMICA: CÓMO SE CALCULA ─────────────────────────────
  {
    slug: "compensacion-economica-divorcio-como-se-calcula",
    title:
      "Compensación económica en el divorcio en Chile: qué es y cómo se calcula",
    metaTitle: "Compensación económica en el divorcio: cómo se calcula (Chile)",
    description:
      "Qué es la compensación económica en el divorcio en Chile y cómo se calcula: el menoscabo económico del cónyuge que se dedicó al hogar o los hijos. Factores del Art. 62 de la Ley 19.947, formas de pago y por qué hay que pedirla en la demanda.",
    category: "Divorcio",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    readingMinutes: 8,
    keywords: [
      "compensación económica divorcio chile",
      "cómo se calcula la compensación económica",
      "compensación económica art 62",
      "menoscabo económico divorcio",
      "compensación económica nulidad matrimonio",
    ],
    lead:
      "La **compensación económica** es el derecho del cónyuge que **se dedicó al cuidado de los hijos o del hogar** y por eso **no pudo trabajar o lo hizo en menor medida** a ser compensado por ese **menoscabo económico** al divorciarse o anularse el matrimonio (Arts. 61 a 66 de la **Ley 19.947**). **No existe una fórmula matemática**: el juez la fija ponderando factores como la **duración del matrimonio**, la edad y salud del cónyuge, su **situación previsional** y sus posibilidades de **acceso al mercado laboral**. Debe pedirse **en la demanda o reconvención**, no después.",
    stats: [
      { label: "Quién la pide", value: "El cónyuge que se dedicó al hogar/hijos" },
      { label: "Qué compensa", value: "El menoscabo económico sufrido" },
      { label: "Fórmula", value: "No hay; el juez pondera factores legales" },
      { label: "Cuándo se pide", value: "En la demanda o reconvención (no después)" },
      { label: "Formas de pago", value: "Dinero, cuotas, bienes o derechos" },
      { label: "Ley aplicable", value: "Ley 19.947, Arts. 61 a 66" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es la compensación económica?" },
      {
        t: "p",
        x: "Es una institución del [divorcio](/blog/divorcio-en-chile) (y de la nulidad) que busca **reparar el desequilibrio económico** que sufre el cónyuge que postergó su desarrollo laboral para dedicarse a la familia. La idea de fondo: si durante el matrimonio uno **se hizo cargo del hogar y de los hijos** mientras el otro desarrollaba su carrera y su patrimonio, al separarse el primero queda en clara desventaja —menos ahorros, menos cotizaciones previsionales, menos experiencia laboral—. La compensación económica busca **corregir ese menoscabo**. Está en los **Arts. 61 a 66 de la Ley 19.947**.",
      },
      {
        t: "note",
        x: "No es una pensión ni un castigo: es un **resarcimiento** por el costo de oportunidad que asumió un cónyuge. Es independiente del [régimen de bienes](/blog/regimen-de-bienes-matrimonio-chile) y se suma —no reemplaza— a la liquidación que corresponda.",
      },
      { t: "h2", x: "Requisitos para tener derecho a la compensación" },
      {
        t: "ul",
        x: [
          "Que el cónyuge **no haya podido trabajar** o lo haya hecho **en menor medida de lo que quería y podía** durante el matrimonio.",
          "Que ello se deba a haberse **dedicado al cuidado de los hijos o a las labores del hogar común**.",
          "Que de esa dedicación resulte un **menoscabo económico** verificable al término del matrimonio.",
        ],
      },
      { t: "h2", x: "¿Cómo se calcula? Los factores del Art. 62" },
      {
        t: "p",
        x: "La pregunta del millón: **no hay fórmula aritmética**. El monto lo determina el juez (o lo acuerdan las partes) ponderando, según el **Art. 62 de la Ley 19.947**, especialmente estos factores:",
      },
      {
        t: "ul",
        x: [
          "La **duración del matrimonio** y de la vida en común (a mayor duración, mayor suele ser el menoscabo).",
          "La **situación patrimonial** de ambos cónyuges.",
          "La **buena o mala fe** de las partes.",
          "La **edad y el estado de salud** del cónyuge beneficiario.",
          "Su **situación en materia de beneficios previsionales y de salud** (clave: las lagunas de cotización).",
          "Su **cualificación profesional** y sus **posibilidades reales de acceso al mercado laboral**.",
          "La **colaboración** que prestó a las actividades lucrativas del otro cónyuge.",
        ],
      },
      {
        t: "note",
        x: "Como el cálculo es casuístico, conocer cómo los tribunales han fijado compensaciones en casos parecidos ayuda mucho a estimar un rango razonable y a negociar. Hoy es posible [consultar jurisprudencia con IA](https://constitucionalai.com/) y revisar en lenguaje natural cómo se ha ponderado el menoscabo económico en sentencias de divorcio.",
      },
      { t: "h2", x: "¿Cómo se paga la compensación económica?" },
      {
        t: "p",
        x: "El juez fija la cuantía y también la **forma de pago** (Art. 65). Puede ordenarse:",
      },
      {
        t: "ul",
        x: [
          "**Una suma de dinero** pagada de una vez.",
          "**En cuotas** reajustables, fijando seguridades para su pago (incluso se asimilan a alimentos para efectos de su cumplimiento).",
          "**Mediante la entrega de bienes** o la constitución de **derechos** (por ejemplo, un usufructo, uso o habitación sobre un bien del cónyuge deudor).",
        ],
      },
      { t: "h2", x: "El error fatal: no pedirla a tiempo" },
      {
        t: "p",
        x: "Este es el punto que más casos arruina. La compensación económica **debe solicitarse dentro del juicio de divorcio o nulidad**: en la **demanda**, en la **reconvención** o, si el demandante no la pidió, el juez debe **informar a las partes** de este derecho al inicio. **No se puede reclamar en un juicio posterior**, una vez dictado el divorcio. Si te divorcias sin pedirla, en principio **pierdes el derecho**.",
      },
      {
        t: "note",
        x: "Por eso, aunque tu divorcio sea de mutuo acuerdo, revisa con tu abogado si corresponde compensación económica **antes de firmar**. En el divorcio de común acuerdo las partes pueden pactarla libremente en el acuerdo completo y suficiente.",
      },
      { t: "h2", x: "¿Se puede acordar de común acuerdo?" },
      {
        t: "p",
        x: "Sí. Si ambos cónyuges son **mayores de edad**, pueden **convenir su monto y forma de pago** en un acuerdo que conste por escritura pública o acta de avenimiento, sometido a la aprobación del tribunal. Es la vía más rápida y la que evita la incertidumbre de que el juez la fije. A falta de acuerdo, decide el tribunal con los factores del Art. 62.",
      },
    ],
    faq: [
      {
        q: "¿Cómo se calcula el monto de la compensación económica?",
        a: "No existe una fórmula matemática. El juez fija el monto ponderando los factores del Art. 62 de la Ley 19.947: duración del matrimonio, situación patrimonial, edad y salud del beneficiario, su situación previsional, su cualificación y posibilidades de trabajar, y la colaboración prestada al otro cónyuge.",
      },
      {
        q: "¿Quién puede pedir la compensación económica?",
        a: "El cónyuge que se dedicó al cuidado de los hijos o a las labores del hogar y por eso no pudo trabajar o lo hizo en menor medida, sufriendo un menoscabo económico. Puede pedirla tanto la mujer como el hombre; la ley no distingue por sexo.",
      },
      {
        q: "¿Hasta cuándo puedo pedir la compensación económica?",
        a: "Debe pedirse dentro del propio juicio de divorcio o nulidad: en la demanda o en la reconvención. No se puede reclamar en un juicio posterior una vez dictada la sentencia. Si te divorcias sin pedirla, pierdes el derecho.",
      },
      {
        q: "¿La compensación económica es lo mismo que la pensión de alimentos?",
        a: "No. La pensión de alimentos es para los hijos y subsiste tras el divorcio; la compensación económica es un derecho entre cónyuges que repara el menoscabo de quien se dedicó a la familia. Son figuras distintas e independientes.",
      },
      {
        q: "¿Cómo se paga si el deudor no tiene dinero líquido?",
        a: "El juez puede fijar el pago en cuotas reajustables con garantías, o mediante la entrega de bienes o la constitución de derechos (usufructo, uso o habitación) sobre bienes del cónyuge deudor, según el Art. 65 de la Ley 19.947.",
      },
    ],
    related: ["divorcio-en-chile", "cuanto-cuesta-un-divorcio-en-chile", "regimen-de-bienes-matrimonio-chile"],
    sources: [
      { name: "Ley 19.947 de Matrimonio Civil (Arts. 61 a 66) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19947" },
      { name: "Ley Fácil: El divorcio — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/divorcio" },
    ],
  },

  // ───────────────────────────── 14. AUTORIZACIÓN DE SALIDA DEL PAÍS DE UN MENOR ─────────────────────────────
  {
    slug: "autorizacion-salida-del-pais-menor",
    title:
      "Autorización para la salida del país de un menor en Chile: cómo tramitarla",
    metaTitle: "Autorización de salida del país de un menor en Chile (2026)",
    description:
      "Cómo autorizar la salida de un menor de Chile: cuándo se necesita permiso del otro padre, cómo hacerlo ante notario, qué pasa si el padre se niega o no aparece, y la autorización judicial supletoria del Tribunal de Familia.",
    category: "Cuidado personal",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    readingMinutes: 7,
    keywords: [
      "autorización salida del país menor chile",
      "permiso notarial para viajar con menor",
      "autorización judicial salida del país menor",
      "viajar con hijo menor sin el padre",
      "permiso de salida de menores chile",
    ],
    lead:
      "Para que un menor **salga de Chile**, por regla general se necesita la **autorización de ambos padres** cuando viaja solo o con un tercero, y la del **otro padre** cuando viaja con uno de ellos pero existe un régimen de [cuidado personal](/blog/cuidado-personal-de-los-hijos) o [relación directa y regular](/blog/relacion-directa-y-regular-visitas) fijado. La autorización se otorga ante **notario** (o en el consulado, si se está fuera). Si el otro padre **se niega injustificadamente, está ausente o es desconocido**, se pide la **autorización judicial supletoria** al **Tribunal de Familia** (Art. 49 de la Ley 16.618, Ley de Menores).",
    stats: [
      { label: "Regla general", value: "Autorización de ambos padres / del otro padre" },
      { label: "Cómo se otorga", value: "Ante notario o consulado de Chile" },
      { label: "Si el padre se niega o está ausente", value: "Autorización judicial supletoria" },
      { label: "Quién la concede", value: "Tribunal de Familia" },
      { label: "Norma clave", value: "Art. 49 Ley 16.618 (Ley de Menores)" },
      { label: "Controla la salida", value: "PDI (Policía de Investigaciones)" },
    ],
    blocks: [
      { t: "h2", x: "¿Cuándo se necesita autorización para que un menor salga de Chile?" },
      {
        t: "p",
        x: "La **Ley de Menores (Ley 16.618)**, en su **Art. 49**, regula la salida de menores del país. La necesidad de autorización depende de **con quién viaja el niño** y de si hay un régimen de cuidado o de relación directa y regular establecido:",
      },
      {
        t: "ul",
        x: [
          "**Si los padres viven juntos y no hay régimen fijado** y el menor viaja con uno de ellos: en general no se exige permiso del otro, pero las aerolíneas y la PDI pueden requerir documentación que acredite el vínculo.",
          "**Si hay cuidado personal o relación directa y regular fijado** (por sentencia o acuerdo) y el menor sale con el padre que tiene el cuidado: se requiere el **permiso del padre que tiene a su favor la relación directa y regular** (las visitas).",
          "**Si el menor viaja solo, con un tercero o con uno de los padres y la ley lo exige**: se requiere la **autorización de ambos padres** (o de quien tenga el cuidado personal, según el caso).",
        ],
      },
      {
        t: "note",
        x: "Quien controla materialmente la salida es la **Policía de Investigaciones (PDI)** en el control migratorio. Por eso conviene llevar la autorización **en original** o protocolizada, junto con el certificado de nacimiento del menor, aunque el viaje parezca sencillo.",
      },
      { t: "h2", x: "Cómo otorgar la autorización ante notario" },
      {
        t: "p",
        x: "La autorización voluntaria es un trámite simple. El padre o madre que **consiente** el viaje concurre ante un **notario** y firma una **autorización de salida del país**, indicando los datos del menor, el destino, el período del viaje y con quién viaja.",
      },
      {
        t: "ol",
        x: [
          "El padre/madre que autoriza acude a una **notaría** con su **cédula de identidad** y el **certificado de nacimiento** del menor.",
          "Se redacta y firma la **autorización**, señalando destino, fechas y acompañante del menor.",
          "El documento queda como **escritura pública** o autorización protocolizada; se entrega copia para presentar en el control migratorio.",
          "Si quien autoriza está **en el extranjero**, otorga la autorización en el **consulado de Chile** del lugar donde se encuentre.",
        ],
      },
      { t: "h2", x: "¿Qué pasa si el otro padre se niega o no aparece?" },
      {
        t: "p",
        x: "Es la situación más conflictiva. Si el otro padre **se niega sin razón**, está **ausente**, es **desconocido** o no es habido, la salida no queda bloqueada para siempre: se solicita la **autorización judicial supletoria** al **Tribunal de Familia** del domicilio del menor. El juez puede **autorizar el viaje** cuando la negativa sea injustificada o cuando lo exija el interés del niño.",
      },
      {
        t: "ol",
        x: [
          "**Demanda o solicitud** de autorización de salida ante el Tribunal de Familia, con abogado (o la CAJ si no puedes pagarlo).",
          "Se acredita la **negativa, ausencia o paradero desconocido** del otro padre y los **detalles del viaje** (motivo, destino, fechas, regreso).",
          "El tribunal **cita a audiencia** y oye al otro padre si comparece; pondera el **interés superior del niño**.",
          "Si autoriza, dicta una **resolución** que reemplaza el permiso faltante y se presenta en el control migratorio.",
        ],
      },
      {
        t: "note",
        x: "El juez analiza si el viaje **afecta** el régimen de relación directa y regular del otro padre y si hay riesgo de que el menor **no regrese**. Si el viaje es por un período definido y razonable (vacaciones, visita familiar), suele autorizarse; los viajes con apariencia de traslado definitivo se examinan con más rigor.",
      },
      { t: "h2", x: "Salidas sin retorno y sustracción de menores" },
      {
        t: "p",
        x: "La autorización protege también contra la **retención o el traslado ilícito** del menor al extranjero. Sacar a un hijo del país **sin la autorización debida** y no retornarlo puede configurar una **sustracción internacional**, regida por el **Convenio de La Haya de 1980**, que permite pedir su **restitución** al país de residencia habitual. Por eso el sistema de autorizaciones es estricto: busca el equilibrio entre el derecho a viajar y la protección del vínculo con ambos padres.",
      },
    ],
    faq: [
      {
        q: "¿Necesito permiso del padre para viajar con mi hijo al extranjero?",
        a: "Depende. Si hay un régimen de cuidado personal o de relación directa y regular fijado, generalmente se requiere la autorización del otro padre. Si el menor viaja solo o con un tercero, se exige la autorización de ambos padres. La autorización se otorga ante notario (o consulado si se está fuera de Chile).",
      },
      {
        q: "¿Qué hago si el otro padre se niega a autorizar el viaje?",
        a: "Puedes pedir la autorización judicial supletoria al Tribunal de Familia. El juez evalúa el interés superior del niño y puede autorizar la salida si la negativa es injustificada, considerando el motivo, destino, duración del viaje y el riesgo de no retorno.",
      },
      {
        q: "¿La autorización notarial sirve para cualquier viaje?",
        a: "La autorización indica destino, fechas y acompañante; conviene que cubra el viaje específico. Llévala en original o protocolizada al control migratorio junto con el certificado de nacimiento del menor, porque la PDI puede exigirla.",
      },
      {
        q: "¿Puedo autorizar la salida si estoy en el extranjero?",
        a: "Sí. Si el padre o madre que debe autorizar está fuera de Chile, otorga la autorización en el consulado chileno del lugar donde se encuentre, y ese documento sirve para el control migratorio.",
      },
      {
        q: "¿Qué pasa si saco a mi hijo del país sin autorización y no lo devuelvo?",
        a: "Puede configurar una sustracción internacional de menores. El otro padre puede solicitar la restitución al país de residencia habitual del niño conforme al Convenio de La Haya de 1980, además de las consecuencias legales en Chile. Nunca conviene viajar sin la autorización debida.",
      },
    ],
    related: ["cuidado-personal-de-los-hijos", "relacion-directa-y-regular-visitas", "mediacion-familiar-chile"],
    sources: [
      { name: "Ley 16.618, Ley de Menores (Art. 49, salida del país) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=16618" },
      { name: "Ley 19.968 que crea los Tribunales de Familia — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idLey=19968" },
      { name: "Ley Fácil: guías legales — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil" },
    ],
  },

  // ───────────────────────────── 15. RETENCIÓN JUDICIAL DE LA PENSIÓN ─────────────────────────────
  {
    slug: "retencion-judicial-pension-alimentos-empleador",
    title:
      "Retención judicial de la pensión de alimentos: cómo se descuenta del sueldo",
    metaTitle: "Retención judicial de la pensión de alimentos por el empleador",
    description:
      "Cómo funciona la retención judicial de la pensión de alimentos en Chile (Ley 14.908): cuándo es obligatoria, qué debe hacer el empleador, multas si no retiene, qué pasa con el finiquito al despido y cómo pedirla.",
    category: "Pensión de alimentos",
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
    readingMinutes: 7,
    keywords: [
      "retención judicial pensión de alimentos",
      "retención pensión de alimentos empleador",
      "descuento de pensión de alimentos del sueldo",
      "ley 14.908 retención judicial",
      "empleador no retiene pensión de alimentos",
    ],
    lead:
      "Cuando el alimentante es **trabajador dependiente** (o pensionado), la Ley 14.908 establece como **modalidad de pago por defecto** la **retención por el empleador**: la pensión se descuenta directamente de la remuneración y se paga al alimentario, sin pasar por la voluntad del deudor. El empleador que no retiene arriesga una **multa que puede alcanzar el doble de lo que debió retener**, y si el trabajador es despedido, la retención alcanza también las sumas del **finiquito**.",
    stats: [
      { label: "Base legal", value: "Arts. 8 y 13 de la Ley 14.908" },
      { label: "Cuándo es la regla", value: "Alimentante trabajador dependiente o pensionado" },
      { label: "Quién descuenta", value: "El empleador o la entidad que paga la pensión" },
      { label: "Si el empleador no retiene", value: "Multa de hasta el doble de lo no retenido" },
      { label: "Al término del contrato", value: "La retención alcanza el finiquito" },
      { label: "Independientes", value: "Se usan otras modalidades de pago" },
    ],
    blocks: [
      { t: "h2", x: "¿Qué es la retención judicial de la pensión de alimentos?" },
      {
        t: "p",
        x: "Es la modalidad de pago en que la [pensión de alimentos](/blog/pension-de-alimentos-chile) **se descuenta directamente del sueldo** del alimentante: el tribunal notifica al empleador y este queda legalmente obligado a retener el monto de cada remuneración y pagarlo al alimentario. El dinero nunca pasa por las manos del deudor, lo que elimina el factor «se le olvidó pagar».",
      },
      { t: "h2", x: "La regla general: si trabaja con contrato, se paga por retención" },
      {
        t: "p",
        x: "Desde las reformas a la **Ley 14.908**, la retención no es una excepción: es la **regla general**. Las resoluciones que ordenan pagar una pensión — provisoria o definitiva — a cargo de un **trabajador dependiente o de un pensionado** deben establecer la retención por el empleador o la entidad pagadora como modalidad de pago, a menos que el tribunal, por razones fundadas, determine otra forma que garantice el cumplimiento.",
      },
      {
        t: "p",
        x: "Esto significa que **no necesitas «ganarle» la retención al alimentante**: si trabaja con contrato y la pensión se está fijando recién, corresponde pedirla — y lo normal es que el tribunal la ordene sin más trámite.",
      },
      { t: "h2", x: "Cómo funciona en la práctica, paso a paso" },
      {
        t: "ol",
        x: [
          "**El tribunal notifica al empleador** la resolución que ordena la retención, con el monto (usualmente expresado en UTM) y los datos para el pago.",
          "**El empleador descuenta la pensión de la liquidación** de sueldo de cada mes, igual que las cotizaciones: el trabajador recibe su remuneración ya rebajada.",
          "**El empleador paga directamente al alimentario**, por depósito en la cuenta que fijó el tribunal (típicamente una cuenta de ahorro de BancoEstado) y dentro del plazo que la resolución indica.",
          "**Si el monto cambia** (aumento, rebaja o cese de la pensión), el tribunal notifica la nueva resolución y el empleador ajusta el descuento.",
        ],
      },
      { t: "h2", x: "¿Qué pasa si el empleador no retiene o no paga?" },
      {
        t: "p",
        x: "El empleador notificado que **no practica la retención**, o que retiene y no paga al alimentario, se expone a una **multa a beneficio fiscal que puede alcanzar el doble de la cantidad mandada retener** (art. 13 de la Ley 14.908). El incumplimiento se denuncia en la misma causa de alimentos, con la liquidación de sueldo o los comprobantes como respaldo. Para el trabajador alimentario esto es importante: si el descuento aparece en la liquidación pero la plata no llega, **el problema es del empleador**, y el tribunal puede perseguirlo directamente.",
      },
      {
        t: "note",
        x: "La retención convive con las demás herramientas de cobro: si igual se acumula deuda, siguen disponibles el [Registro Nacional de Deudores](/blog/registro-nacional-de-deudores), el arresto nocturno, el arraigo y la retención de la devolución de impuestos.",
      },
      { t: "h2", x: "Despido o renuncia del alimentante: qué pasa con la retención" },
      {
        t: "p",
        x: "El término del contrato **no deja la pensión en el aire**. El empleador debe informar el término de la relación laboral al tribunal, y la ley contempla que la retención alcance las sumas que se paguen al trabajador con motivo del finiquito — incluida la **indemnización por años de servicio** — para responder por pensiones adeudadas y asegurar la continuidad del pago. Como los montos de un finiquito suelen ser la plata más grande que recibe el deudor en años, conviene revisar que esté bien determinado: esta guía sobre [cómo se calcula correctamente un finiquito](https://www.amparolaboral.cl/blog/errores-finiquito-calculo) explica qué partidas debe incluir y los errores más comunes.",
      },
      {
        t: "p",
        x: "Después del despido, si el alimentante encuentra un nuevo empleo, corresponde pedir que se **notifique la retención al nuevo empleador**. Mientras tanto, la obligación de pagar la pensión sigue vigente por los demás medios.",
      },
      { t: "h2", x: "¿Y si el alimentante trabaja a honorarios o es independiente?" },
      {
        t: "p",
        x: "La retención por empleador requiere un empleador. Si el alimentante boletea, tiene negocio propio o trabaja informalmente, el tribunal fija **otra modalidad**: depósito mensual en la cuenta del alimentario, y frente al incumplimiento operan los apremios y el Registro de Deudores (que retiene créditos y la devolución de renta). Si sabes que el alimentante «se cambió a honorarios» justo para evitar la retención, díselo al tribunal: la capacidad económica se puede acreditar igual con oficios al SII y a los bancos.",
      },
      { t: "h2", x: "Cómo pedir la retención judicial" },
      {
        t: "ul",
        x: [
          "**En la demanda de alimentos**: se solicita desde el inicio, incluso respecto de los alimentos provisorios.",
          "**En una causa ya terminada**: si la pensión se fijó con otra modalidad y el alimentante paga tarde o deja de pagar, se pide al tribunal **cambiar la modalidad a retención**, acompañando la liquidación de la deuda.",
          "**Datos útiles para acelerar**: nombre y RUT del empleador, y cualquier antecedente del contrato. Si no los tienes, el tribunal puede oficiar a la AFP o a Previred para ubicar al empleador vigente.",
        ],
      },
      {
        t: "table",
        head: ["Situación del alimentante", "Qué pasa con la retención"],
        rows: [
          ["Trabajador dependiente", "Retención por el empleador: es la regla general"],
          ["Pensionado (vejez, invalidez, sobrevivencia)", "Retiene la entidad que paga la pensión"],
          ["Es despedido o renuncia", "La retención alcanza el finiquito; se notifica al nuevo empleador"],
          ["Trabaja a honorarios o informal", "Otra modalidad de pago + apremios y Registro de Deudores"],
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo pedir retención judicial si la pensión ya está fijada y me pagan atrasado?",
        a: "Sí. Puedes pedir al tribunal que cambie la modalidad de pago a retención por el empleador, acompañando los antecedentes del incumplimiento. Es una de las primeras medidas que conviene tomar cuando los depósitos se vuelven irregulares.",
      },
      {
        q: "¿El empleador puede negarse a practicar la retención?",
        a: "No. Notificado por el tribunal, la retención es obligatoria. Si no la practica, o retiene y no paga, arriesga una multa a beneficio fiscal que puede alcanzar el doble de lo que debió retener, y el alimentario puede denunciarlo en la misma causa.",
      },
      {
        q: "¿Qué pasa si el alimentante cambia de trabajo para evadir la retención?",
        a: "La obligación no desaparece. El empleador saliente debe informar el término del contrato, la retención alcanza las sumas del finiquito, y una vez conocido el nuevo empleador se le notifica la misma orden. El tribunal puede oficiar a la AFP para ubicar el empleo vigente.",
      },
      {
        q: "¿La retención sirve para cobrar la deuda atrasada o solo la pensión del mes?",
        a: "Ambas cosas son posibles: además de la pensión mensual, el tribunal puede ordenar retener sumas adicionales para ir pagando una deuda liquidada, y retenciones extraordinarias sobre pagos como el finiquito. La deuda ya devengada no se extingue por el solo hecho de que empiece la retención.",
      },
      {
        q: "¿Pueden despedir al trabajador porque le llegó una orden de retención?",
        a: "No es una causal de despido. La retención judicial es una carga administrativa que el empleador debe cumplir, y un despido motivado en ella sería revisable ante los tribunales laborales como despido injustificado.",
      },
    ],
    related: ["pension-de-alimentos-chile", "registro-nacional-de-deudores", "que-pasa-si-no-pago-la-pension-de-alimentos"],
    sources: [
      { name: "Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=27977" },
      { name: "Ley Fácil: Pensión alimenticia — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/pension-alimenticia-para-menores" },
      { name: "Ley 21.389 (Registro Nacional de Deudores) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=1168463" },
    ],
  },
  {
    slug: "bien-familiar-que-pasa-con-la-casa-en-el-divorcio",
    title:
      "¿Quién se queda con la casa? El bien familiar en la separación y el divorcio",
    metaTitle: "Bien familiar: qué pasa con la casa en el divorcio (Chile)",
    description:
      "Qué es la declaración de bien familiar en Chile (arts. 141 y ss. del Código Civil), cómo protege la vivienda de la familia, qué pasa con la casa al divorciarse y cómo se resuelve cuando la propiedad es común y uno no quiere vender.",
    category: "Régimen de bienes",
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    readingMinutes: 8,
    keywords: [
      "bien familiar Chile",
      "quién se queda con la casa en el divorcio",
      "declaración de bien familiar",
      "casa familiar divorcio",
      "vivienda familiar separación",
    ],
    lead:
      "«¿Quién se queda con la casa?» es una de las primeras preguntas cuando una pareja se separa. La respuesta depende de **dos cosas distintas** que conviene no confundir: **de quién es** la propiedad (el título) y **quién puede seguir viviendo en ella** protegido por la ley. La figura del **bien familiar** (arts. 141 y siguientes del Código Civil) resuelve la segunda: protege la vivienda donde vive la familia aunque pertenezca a uno solo de los cónyuges.",
    stats: [
      { label: "Base legal", value: "Arts. 141 a 149 del Código Civil" },
      { label: "Qué protege", value: "La vivienda que sirve de residencia principal de la familia" },
      { label: "Efecto principal", value: "No se puede vender, gravar ni arrendar sin autorización del otro cónyuge" },
      { label: "Quién lo pide", value: "El cónyuge no propietario, ante el tribunal de familia" },
      { label: "No cambia", value: "La propiedad: el dueño sigue siendo el mismo" },
    ],
    blocks: [
      { t: "h2", x: "Propiedad vs. derecho a habitar: dos cosas distintas" },
      {
        t: "p",
        x: "Antes de pelear por la casa, hay que separar dos preguntas. La primera es **de quién es** legalmente: eso lo define el título de dominio y el [régimen de bienes del matrimonio](/blog/regimen-de-bienes-matrimonio-chile) (sociedad conyugal, separación de bienes o participación en los gananciales). La segunda es **quién tiene derecho a seguir viviendo ahí** con los hijos: eso lo resuelve, en buena parte, la figura del **bien familiar**. Una casa puede ser de propiedad exclusiva de uno de los cónyuges y, aun así, quedar protegida como bien familiar en favor del otro y de los hijos.",
      },
      { t: "h2", x: "Qué es la declaración de bien familiar" },
      {
        t: "p",
        x: "El **bien familiar** es el inmueble de propiedad de uno o ambos cónyuges que **sirve de residencia principal de la familia** (art. 141 del Código Civil). También pueden declararse familiares los muebles que guarnecen el hogar. La declaración la puede pedir el **cónyuge no propietario** ante el tribunal de familia, y su gran efecto es proteger el techo de la familia frente a decisiones unilaterales del dueño.",
      },
      {
        t: "note",
        x: "Ojo: la declaración de bien familiar **no traspasa la propiedad**. El dueño sigue siendo el mismo. Lo que cambia es que ya no puede disponer libremente del inmueble.",
      },
      { t: "h2", x: "Qué protege en concreto" },
      {
        t: "p",
        x: "Declarado el bien familiar, el cónyuge propietario **no puede vender, hipotecar, gravar ni arrendar** el inmueble sin la **autorización del otro cónyuge** (art. 142 del Código Civil). Si lo hace sin esa autorización, el acto es anulable. Es una defensa potente contra la típica maniobra de «vender la casa a espaldas del otro» en medio de una crisis de pareja.",
      },
      { t: "h2", x: "Qué pasa con la casa al divorciarse" },
      {
        t: "p",
        x: "El divorcio **no desafecta automáticamente** el bien familiar. La condición de bien familiar puede mantenerse mientras la vivienda siga cumpliendo su función, y para dejarla sin efecto normalmente se requiere una resolución judicial. Además, al regular los efectos del quiebre, el juez puede **constituir derechos de usufructo, uso o habitación** sobre el inmueble a favor del cónyuge que queda a cargo de los hijos (art. 147 del Código Civil), como una forma de asegurar la vivienda de los niños.",
      },
      {
        t: "p",
        x: "Esto se conecta con otras dos instituciones del divorcio: el **cuidado personal** de los hijos (quién los tiene define, muchas veces, quién permanece en la casa) y la **compensación económica**, que puede considerar el menoscabo del cónyuge que se dedicó a la familia. Conviene mirarlas juntas y no pieza por pieza.",
      },
      { t: "h2", x: "¿Y si la casa es de los dos y uno quiere vender?" },
      {
        t: "p",
        x: "Cuando el inmueble es **común** —comprado durante la sociedad conyugal o inscrito a nombre de ambos—, tras el divorcio queda una **comunidad** entre los ex cónyuges. Ahí el problema deja de ser familiar y pasa a ser de **propiedad**: si uno quiere vender y el otro se niega, nadie está obligado a permanecer en la comunidad y existe el camino de forzar la venta o la partición. Este cruce es frecuente y tiene reglas propias; si es tu caso, revisa qué se puede hacer [cuando tu ex no quiere vender la casa que comparten](https://www.resuelvepropiedades.cl/blog/mi-ex-no-quiere-vender-la-casa/), porque la partición y la venta en pública subasta son alternativas reales para salir del empate.",
      },
      {
        t: "table",
        head: ["Situación de la casa", "Qué determina quién la usa o la vende"],
        rows: [
          ["Propiedad de un solo cónyuge", "El dueño mantiene el título, pero si es bien familiar no puede disponer sin autorización del otro"],
          ["Declarada bien familiar", "Se protege como vivienda; el juez puede dar usufructo/uso/habitación al cónyuge con los hijos"],
          ["Común (sociedad conyugal o ambos titulares)", "Se liquida o parte; si uno no quiere vender, procede la partición o venta forzada"],
        ],
      },
      { t: "h2", x: "Cómo se pide la declaración de bien familiar" },
      {
        t: "ul",
        x: [
          "**Ante el tribunal de familia**, mediante demanda o solicitud del cónyuge no propietario.",
          "Con la sola presentación de la demanda, el inmueble puede quedar **provisoriamente** como familiar mientras se tramita, para evitar ventas apresuradas.",
          "Sirve tanto **durante el matrimonio** (cuando aún no hay divorcio) como dentro del propio juicio de divorcio o separación.",
        ],
      },
    ],
    faq: [
      {
        q: "¿La declaración de bien familiar me hace dueño de la casa?",
        a: "No. El bien familiar no cambia la propiedad: el dueño sigue siendo quien figura en el título. Lo que hace es proteger la vivienda de la familia, impidiendo que se venda, hipoteque o arriende sin la autorización del otro cónyuge.",
      },
      {
        q: "¿Puedo impedir que mi cónyuge venda la casa donde viven los hijos?",
        a: "Sí, pidiendo que se declare bien familiar. Declarado, cualquier venta, hipoteca o arriendo requiere tu autorización, y el acto hecho sin ella es anulable. Con la sola presentación de la solicitud el inmueble puede quedar protegido de forma provisoria.",
      },
      {
        q: "¿El divorcio termina con el bien familiar?",
        a: "No automáticamente. La condición de bien familiar puede subsistir mientras la vivienda cumpla su función, y para desafectarla suele requerirse resolución judicial. Además, el juez puede constituir usufructo, uso o habitación a favor del cónyuge que queda con el cuidado de los hijos.",
      },
      {
        q: "¿Qué pasa si la casa es de los dos y no nos ponemos de acuerdo para venderla?",
        a: "Al divorciarse queda una comunidad entre ambos. Nadie está obligado a permanecer en ella: si uno se niega a vender, se puede pedir la partición e incluso la venta en pública subasta para dividir el dinero. Es un problema de derecho de propiedad, distinto del bien familiar.",
      },
    ],
    related: ["regimen-de-bienes-matrimonio-chile", "divorcio-en-chile", "compensacion-economica-divorcio-como-se-calcula"],
    sources: [
      { name: "Código Civil, arts. 141 y siguientes (bienes familiares) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley Fácil: Bien familiar — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil" },
    ],
  },

  // ───────────────────────────── 17. AUMENTO DE LA PENSIÓN DE ALIMENTOS ─────────────────────────────
  {
    slug: "como-aumentar-la-pension-de-alimentos",
    title:
      "Aumento de la pensión de alimentos: cuándo procede y cómo se demanda",
    metaTitle: "Aumento de la pensión de alimentos en Chile: cuándo y cómo pedirlo",
    description:
      "Cómo pedir un aumento de la pensión de alimentos en Chile: qué cambio de circunstancias exige la ley (art. 332 del Código Civil y Ley 14.908), ante qué tribunal se demanda, qué pruebas reunir y desde cuándo rige el nuevo monto.",
    category: "Pensión de alimentos",
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    readingMinutes: 7,
    keywords: [
      "aumento pensión de alimentos",
      "demanda de aumento de pensión de alimentos",
      "cómo aumentar la pensión de alimentos",
      "aumento de pensión alimenticia Chile",
      "cambio de circunstancias pensión de alimentos",
    ],
    lead:
      "La pensión de alimentos **no queda congelada para siempre**. Si las necesidades del hijo crecieron — entró al colegio o a la universidad, tiene nuevos gastos de salud — o si el alimentante hoy **gana más** que cuando se fijó el monto, la ley permite demandar un **aumento de la pensión**. La base está en el art. 332 del Código Civil: los alimentos se deben mientras **continúen las circunstancias** que justificaron el monto; si esas circunstancias cambiaron, el monto puede revisarse ante el tribunal de familia.",
    stats: [
      { label: "Base legal", value: "Ley 14.908 y arts. 323 y 332 del Código Civil" },
      { label: "Requisito central", value: "Cambio de circunstancias: más necesidades del hijo o más capacidad del alimentante" },
      { label: "Dónde se demanda", value: "El mismo tribunal que fijó la pensión o el del nuevo domicilio del alimentario" },
      { label: "Trámite previo", value: "Mediación familiar obligatoria" },
      { label: "Tope legal", value: "Por regla general, la pensión no puede exceder el 50% de las rentas del alimentante" },
      { label: "Mínimo legal", value: "40% del ingreso mínimo por un hijo; 30% por cada uno si son dos o más" },
    ],
    blocks: [
      { t: "h2", x: "¿Se puede aumentar una pensión ya fijada por el tribunal?" },
      {
        t: "p",
        x: "Sí. La sentencia, el avenimiento o el acuerdo de mediación que fijó la [pensión de alimentos](/blog/pension-de-alimentos-chile) **no es inamovible**: en materia de alimentos la decisión vale «mientras continúen las circunstancias» que la justificaron (art. 332 del Código Civil). Un hijo de 4 años no cuesta lo mismo que uno de 14, y un alimentante que boleteaba esporádicamente puede hoy tener contrato indefinido y el doble de ingresos. Cuando la foto cambió, se puede demandar el aumento.",
      },
      { t: "h2", x: "Cuándo procede el aumento: el cambio de circunstancias" },
      {
        t: "ul",
        x: [
          "**Aumentaron las necesidades del hijo**: entrada al colegio o a la universidad, tratamientos médicos o dentales, actividades extraprogramáticas, alza sostenida del costo de vida del hogar donde vive.",
          "**Mejoró la capacidad económica del alimentante**: ascenso, nuevo empleo, término del pago de otras cargas, nuevos bienes o rentas.",
          "**La pensión quedó bajo el mínimo legal**: la Ley 14.908 fija un piso de **40% de un ingreso mínimo remuneracional por un hijo** (30% por cada uno si son dos o más); si lo pactado quedó por debajo sin justificación, hay argumento directo para revisar.",
          "**El monto se fijó con información incompleta**: por ejemplo, el alimentante ocultó ingresos que ahora se pueden acreditar.",
        ],
      },
      {
        t: "note",
        x: "No confundas **aumento** con **reajuste**: las pensiones se expresan normalmente en UTM, por lo que se reajustan solas mes a mes. El reajuste mantiene el valor de lo ya fijado; el aumento cambia el monto porque cambiaron las circunstancias. Si lo que ocurrió es lo contrario — el alimentante perdió capacidad de pago —, el camino es la [rebaja de la pensión](/blog/como-rebajar-la-pension-de-alimentos).",
      },
      { t: "h2", x: "Cuánto pedir: los números importan" },
      {
        t: "p",
        x: "El tribunal resuelve con la misma lógica con que se fija toda pensión: **necesidades del alimentario** y **capacidad económica del alimentante**, con el tope de que la pensión, por regla general, **no puede exceder el 50% de las rentas** del obligado (art. 7° de la Ley 14.908). Pedir una cifra antojadiza debilita la demanda; pedir de menos regala plata. Antes de ponerle número conviene hacer un cálculo realista: esta guía sobre [cuánto pedir de aumento según los ingresos y gastos acreditables](https://www.cuantojuicio.cl/blog/aumento-pension-alimentos-cuanto-pedir) ayuda a dimensionar un monto defendible con los antecedentes que efectivamente puedes probar.",
      },
      { t: "h2", x: "Dónde y cómo se tramita la demanda de aumento" },
      {
        t: "ol",
        x: [
          "**Mediación familiar previa**: el aumento de alimentos es materia de mediación obligatoria. Si hay acuerdo, se aprueba por el tribunal y tiene valor de sentencia; si no, se levanta el acta de mediación frustrada que habilita para demandar.",
          "**Demanda ante el tribunal competente**: la Ley 14.908 permite elegir entre **el mismo tribunal que decretó la pensión** o el del **nuevo domicilio del alimentario** (art. 2°). Esto ayuda cuando el hijo se cambió de ciudad.",
          "**Aumento provisorio**: junto con la demanda puede pedirse que el tribunal fije un aumento provisorio mientras dura el juicio, con los antecedentes que se acompañen.",
          "**Audiencias y sentencia**: el juicio sigue el procedimiento ordinario de familia — audiencia preparatoria y de juicio — y termina con la sentencia que fija el nuevo monto.",
        ],
      },
      { t: "h2", x: "Qué pruebas conviene reunir" },
      {
        t: "ul",
        x: [
          "**Gastos actuales del hijo**: matrícula y mensualidad escolar o universitaria, útiles, salud (bonos, programas médicos, tratamientos), vestuario, transporte, actividades.",
          "**Ingresos del alimentante**: liquidaciones de sueldo, boletas de honorarios, contratos. Si no los tienes, el tribunal puede recabar la **carpeta tributaria del SII**, oficiar a bancos, AFP y empleadores para acreditar la capacidad económica real.",
          "**El contraste con la pensión vigente**: copia de la sentencia o acta que fijó el monto original y una liquidación simple que muestre cuánto cubre hoy del costo real del hijo.",
        ],
      },
      { t: "h2", x: "Desde cuándo rige el aumento" },
      {
        t: "p",
        x: "Lo usual es que el aumento decretado rija **desde la notificación de la demanda**, no desde la fecha de la sentencia — el juicio puede tardar meses y ese período no se pierde. Fijado el nuevo monto, si la pensión se paga por [retención judicial en el sueldo](/blog/retencion-judicial-pension-alimentos-empleador), el tribunal notifica al empleador para que ajuste el descuento; y si el alimentante deja de pagar el monto aumentado, operan las mismas herramientas de cobro de siempre, incluido el [Registro Nacional de Deudores](/blog/registro-nacional-de-deudores).",
      },
      {
        t: "table",
        head: ["Situación", "Camino que corresponde"],
        rows: [
          ["El hijo entró a la universidad y los gastos subieron", "Demanda de aumento por cambio de circunstancias"],
          ["El alimentante ascendió o duplicó sus ingresos", "Demanda de aumento por mayor capacidad económica"],
          ["La pensión perdió valor por la inflación", "Nada que demandar: expresada en UTM se reajusta sola"],
          ["El alimentante quedó cesante o enfermo", "Es él quien puede demandar rebaja de la pensión"],
        ],
      },
    ],
    faq: [
      {
        q: "¿Cada cuánto tiempo se puede pedir un aumento de la pensión?",
        a: "No hay un plazo mínimo entre una revisión y otra. Lo que exige la ley es un cambio de circunstancias real y demostrable: más necesidades del hijo o más capacidad económica del alimentante. Si nada cambió desde la última fijación, la demanda difícilmente prosperará.",
      },
      {
        q: "¿Necesito abogado para demandar el aumento?",
        a: "Por regla general sí: en los tribunales de familia las partes deben comparecer patrocinadas por abogado. Si no puedes costear uno, la Corporación de Asistencia Judicial ofrece representación gratuita según requisitos socioeconómicos.",
      },
      {
        q: "¿Qué pasa si el alimentante oculta sus ingresos reales?",
        a: "El tribunal tiene herramientas para investigarlos: puede recabar la carpeta tributaria del SII y oficiar a bancos, AFP y empleadores. Trabajar a honorarios o de manera informal no impide acreditar la capacidad económica por estas vías.",
      },
      {
        q: "¿El aumento rige desde que demando o desde la sentencia?",
        a: "La regla usual es que rija desde la notificación de la demanda de aumento. Por eso conviene demandar apenas se configura el cambio de circunstancias: los meses de tramitación quedan cubiertos por el nuevo monto.",
      },
      {
        q: "¿Puede el alimentante responder pidiendo una rebaja?",
        a: "Sí, puede demandar reconvencionalmente la rebaja o el cese en el mismo juicio. El tribunal resolverá ambas pretensiones con la prueba de necesidades y capacidad económica que aporten las partes.",
      },
    ],
    related: ["pension-de-alimentos-chile", "como-rebajar-la-pension-de-alimentos", "retencion-judicial-pension-alimentos-empleador"],
    sources: [
      { name: "Ley 14.908 sobre pago de pensiones alimenticias — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=27977" },
      { name: "Código Civil, arts. 323 y 332 (alimentos) — Ley Chile (BCN)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986" },
      { name: "Ley Fácil: Pensión alimenticia — Biblioteca del Congreso Nacional", url: "https://www.bcn.cl/portal/leyfacil/recurso/pension-alimenticia-para-menores" },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts destacados para la portada (orden editorial). */
export const featuredSlugs = [
  "pension-de-alimentos-chile",
  "divorcio-en-chile",
  "registro-nacional-de-deudores",
];
