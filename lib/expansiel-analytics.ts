// Cliente de analytics de Expansiel — manda eventos al hub (analytics-hub / Supabase).
// Auto-captura pageview, whatsapp_click, tel_click, mailto_click y form_submit.
// initAutoTracking() se llama UNA vez en el cliente (ver components/Analytics.tsx).
// Nunca lanza: analytics jamás debe romper el sitio.

const HUB_URL = "https://alksowkwsnjeesmnosvg.supabase.co/rest/v1/events";
const ANON_KEY = "sb_publishable_uR65ixdIedeOR8Zo-PKNsA_nBJF8W3F";
const SITE_ID = "abogados-familia"; // slug del sitio en el hub (tabla sites)

function sessionId(): string {
  try {
    const KEY = "ex_sid";
    let s = window.localStorage.getItem(KEY);
    if (!s) {
      s = crypto.randomUUID();
      window.localStorage.setItem(KEY, s);
    }
    return s;
  } catch {
    return "no-storage";
  }
}

type Geo = { country?: string | null; city?: string | null; region?: string | null };
let geoCache: Geo | null = null;
async function getGeo(): Promise<Geo> {
  if (geoCache) return geoCache;
  try {
    const cached = window.sessionStorage.getItem("ex_geo");
    if (cached) {
      geoCache = JSON.parse(cached) as Geo;
      return geoCache;
    }
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const j = (await res.json()) as { country_code?: string; city?: string; region?: string };
    geoCache = { country: j.country_code ?? null, city: j.city ?? null, region: j.region ?? null };
    window.sessionStorage.setItem("ex_geo", JSON.stringify(geoCache));
  } catch {
    geoCache = {};
  }
  return geoCache;
}

/** Manda un evento al hub. `eventType` debe existir en EVENTS.md. */
export async function track(
  eventType: string,
  payload: Record<string, unknown> = {},
  opts: { userId?: string | null } = {}
): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    const g = await getGeo();
    await fetch(HUB_URL, {
      method: "POST",
      keepalive: true,
      headers: {
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal", // la anon key solo puede INSERT
      },
      body: JSON.stringify({
        site_id: SITE_ID,
        event_type: eventType,
        session_id: sessionId(),
        user_id: opts.userId ?? null,
        payload: {
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          lang: navigator.language,
          city: g.city ?? null,
          region: g.region ?? null,
          ...payload,
        },
        url: window.location.href,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        country: g.country ?? null,
      }),
    });
  } catch {
    /* silencioso a propósito */
  }
}

let started = false;
/** Listeners globales: pageview + whatsapp/tel/mailto clicks + form_submit. */
export function initAutoTracking(): void {
  if (typeof window === "undefined" || started) return;
  started = true;

  // pageview: carga inicial + cambios de ruta (App Router / SPA).
  const pageview = () => track("pageview");
  pageview();
  const origPush = history.pushState.bind(history);
  history.pushState = (...args: Parameters<History["pushState"]>) => {
    origPush(...args);
    pageview();
  };
  const origReplace = history.replaceState.bind(history);
  history.replaceState = (...args: Parameters<History["replaceState"]>) => {
    origReplace(...args);
    pageview();
  };
  window.addEventListener("popstate", pageview);

  // Clicks en <a>: WhatsApp / teléfono / email.
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const text = (a.textContent || "").trim().slice(0, 80);
      if (/wa\.me|whatsapp\.com|api\.whatsapp/i.test(href)) track("whatsapp_click", { href, text });
      else if (/^tel:/i.test(href)) track("tel_click", { href, text });
      else if (/^mailto:/i.test(href)) track("mailto_click", { href, text });
    },
    true
  );

  // Submit de cualquier <form>: metadata + values (SKIP password/hidden/file).
  // Un form con data-analytics-no-lead no adjunta values (no crea lead 'form').
  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target as HTMLFormElement | null;
      if (!form || form.tagName !== "FORM") return;
      const noLead = form.hasAttribute("data-analytics-no-lead");
      const fields: string[] = [];
      const values: Record<string, string> = {};
      let hasEmail = false;
      let hasPhone = false;
      for (const el of Array.from(form.elements)) {
        const input = el as HTMLInputElement;
        const name = input.name || input.id;
        if (!name) continue;
        const type = (input.type || "").toLowerCase();
        if (type === "password" || type === "hidden" || type === "file" || type === "submit" || type === "button") continue;
        if (!fields.includes(name)) fields.push(name);
        if (type === "email" || /mail|correo/i.test(name)) hasEmail = true;
        if (type === "tel" || /phone|tel|celular|fono|whats|movil|móvil/i.test(name)) hasPhone = true;
        if (!noLead && input.value) values[name] = String(input.value).slice(0, 500);
      }
      track("form_submit", {
        form_id: form.id || null,
        form_name: form.getAttribute("name") || null,
        action: form.getAttribute("action") || null,
        field_count: fields.length,
        fields: fields.slice(0, 30),
        has_email: hasEmail,
        has_phone: hasPhone,
        ...(noLead ? {} : { values }),
      });
    },
    true
  );
}
