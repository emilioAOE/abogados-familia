// Configuración central del sitio. Cambia estos valores en un solo lugar.
// Dominio canónico: el apex (firmafamilia.cl) redirige a www en Vercel,
// por lo que la URL canónica que indexan los buscadores debe ser la de www.
export const SITE_URL = "https://www.firmafamilia.cl";

export const SITE_NAME = "Abogados Familia";

export const SITE_DESCRIPTION =
  "Abogado especialista en Derecho de Familia en Chile. Divorcio, pensión de alimentos, cuidado personal, mediación familiar y violencia intrafamiliar. Primera consulta gratuita por WhatsApp.";

// Teléfono / WhatsApp (número de contacto compartido del estudio)
export const PHONE_E164 = "+56957022390";
export const PHONE_DISPLAY = "+56 9 5702 2390";

// El "(ref: abogados-familia)" lo lee el hub de analytics para el ORIGEN del lead
// (el número de WhatsApp es compartido entre sitios; el origen viaja en el texto).
const WHATSAPP_MESSAGE =
  "Hola, necesito asesoría legal en Derecho de Familia (ref: abogados-familia)";

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace(
  "+",
  ""
)}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Ciudades/comunas donde se entrega atención (para SEO local y schema).
export const AREAS_SERVED = [
  "Santiago",
  "Providencia",
  "Las Condes",
  "Maipú",
  "Puente Alto",
  "Viña del Mar",
  "Valparaíso",
  "Concepción",
  "La Serena",
  "Antofagasta",
  "Temuco",
];
