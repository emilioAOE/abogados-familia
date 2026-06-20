This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## IndexNow (indexación instantánea en Bing/Microsoft)

El sitio expone una clave de verificación IndexNow en `public/674a0437e6f2f06561298449ed2fce0f.txt`
(hay además una clave antigua, también válida, en `public/42f7c28eaaa64dea86e3c1a1ae273629.txt`).

Para notificar a los buscadores compatibles que las URLs cambiaron, ejecuta:

```bash
npm run indexnow            # lee el sitemap de producción y envía las URLs
node scripts/indexnow.mjs --dry-run   # solo imprime las URLs, no envía nada
```

El script (`scripts/indexnow.mjs`) descarga `https://www.firmafamilia.cl/sitemap.xml`,
extrae todas las URLs `<loc>` del dominio y las envía en un único POST a
`https://api.indexnow.org/indexnow`. No requiere dependencias (usa `fetch` nativo
de Node 18+). Variables opcionales: `INDEXNOW_HOST` y `INDEXNOW_KEY` (la clave
debe existir como `public/<clave>.txt`). Conviene correrlo tras cada despliegue
que cambie o agregue contenido.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
