"use client";

import { useEffect } from "react";
import { initAutoTracking } from "@/lib/expansiel-analytics";

// Monta el tracking automático de Expansiel (pageview, whatsapp_click, form_submit, …).
// Render nada; solo activa los listeners una vez en el cliente.
export default function Analytics() {
  useEffect(() => {
    initAutoTracking();
  }, []);
  return null;
}
