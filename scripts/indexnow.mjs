// IndexNow — notifica a Bing/Microsoft (y motores compatibles) que las URLs
// del sitio cambiaron, para acelerar el rastreo e indexación.
//
// Cómo funciona:
//   1. Descarga el sitemap (https://www.firmafamilia.cl/sitemap.xml).
//   2. Extrae todas las URLs <loc> del mismo host.
//   3. Las envía en un único POST a https://api.indexnow.org/indexnow.
//
// La clave es un archivo de texto plano alojado en public/<clave>.txt, de modo
// que el endpoint pueda verificar la propiedad del dominio. Aquí se usa una
// clave fija que ya está desplegada en public/.
//
// Uso:
//   node scripts/indexnow.mjs            # usa el sitemap del sitio en producción
//   node scripts/indexnow.mjs --dry-run  # imprime las URLs sin enviarlas
//
// Variables de entorno opcionales (con valores por defecto de este sitio):
//   INDEXNOW_HOST  -> host sin protocolo, p. ej. www.firmafamilia.cl
//   INDEXNOW_KEY   -> clave hex de 32 caracteres (debe existir en public/<clave>.txt)

const HOST = process.env.INDEXNOW_HOST || "www.firmafamilia.cl";
const KEY = process.env.INDEXNOW_KEY || "674a0437e6f2f06561298449ed2fce0f";
const ORIGIN = `https://${HOST}`;
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const DRY_RUN = process.argv.includes("--dry-run");

async function getSitemapUrls() {
  const res = await fetch(SITEMAP_URL, {
    headers: { "User-Agent": "indexnow-script (+https://www.firmafamilia.cl)" },
  });
  if (!res.ok) {
    throw new Error(`No se pudo descargar el sitemap (${res.status} ${res.statusText}): ${SITEMAP_URL}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1].trim())
    // Solo URLs del mismo host (IndexNow rechaza el lote si hay hosts mezclados).
    .filter((u) => u.startsWith(`${ORIGIN}/`) || u === ORIGIN);
  return [...new Set(urls)];
}

async function main() {
  const urlList = await getSitemapUrls();

  if (urlList.length === 0) {
    throw new Error("El sitemap no contiene URLs del host esperado; nada que enviar.");
  }

  console.log(`Host:         ${HOST}`);
  console.log(`Clave:        ${KEY}`);
  console.log(`keyLocation:  ${KEY_LOCATION}`);
  console.log(`URLs (${urlList.length}):`);
  for (const u of urlList) console.log(`  - ${u}`);

  if (DRY_RUN) {
    console.log("\n--dry-run: no se envió nada.");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  const text = await res.text();
  // IndexNow responde 200 o 202 cuando acepta el lote; 4xx indica problema de
  // clave/host. Mostramos el detalle para diagnosticar.
  if (res.ok || res.status === 202) {
    console.log(`\nOK (${res.status}). Lote aceptado por IndexNow.`);
  } else {
    console.error(`\nIndexNow respondió ${res.status} ${res.statusText}.`);
    if (text) console.error(text);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exitCode = 1;
});
