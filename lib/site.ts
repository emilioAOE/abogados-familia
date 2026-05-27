// Configuración central del sitio. Cambia estos valores en un solo lugar.
// IMPORTANTE: reemplaza SITE_URL por el dominio real cuando se publique.
export const SITE_URL = "https://abogados-familia.vercel.app";

export const SITE_NAME = "Abogados Familia";

export const SITE_DESCRIPTION =
  "Abogado especialista en Derecho de Familia en Chile. Divorcio, pensión de alimentos, cuidado personal, mediación familiar y violencia intrafamiliar. Primera consulta gratuita por WhatsApp.";

// Teléfono / WhatsApp
export const PHONE_E164 = "+56994495238";
export const PHONE_DISPLAY = "+56 9 9449 5238";

const WHATSAPP_MESSAGE =
  "Hola, necesito asesoría legal en Derecho de Familia";

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
