import { defineConfig } from 'astro/config';
import rehypePokalbiui from './src/lib/rehype-pokalbiui.mjs';

// Vercel build metu pateikia pagrindinį svetainės adresą.
// Jo reikia, kad dalinantis nuoroda socialiniuose tinkluose rodytųsi paveikslėlis.
// Kai turėsi savo domeną, gali jį įrašyti tiesiai, pvz. 'https://evitale.lt'.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelHost ? `https://${vercelHost}` : undefined,
  markdown: {
    // Skiltis „## Pokalbiui“ pasakos gale tampa suskleidžiama kortele.
    rehypePlugins: [rehypePokalbiui],
  },
});
