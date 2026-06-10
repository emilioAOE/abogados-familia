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
