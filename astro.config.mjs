import { defineConfig } from 'astro/config';

// Vercel build metu pateikia pagrindinį svetainės adresą.
// Jo reikia, kad dalinantis nuoroda socialiniuose tinkluose rodytųsi paveikslėlis.
// Kai turėsi savo domeną, gali jį įrašyti tiesiai, pvz. 'https://evitale.lt'.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelHost ? `https://${vercelHost}` : undefined,
});
