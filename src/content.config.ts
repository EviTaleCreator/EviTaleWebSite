import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Kiekviena pasaka turi savo aplanką src/content/stories/<pasakos-adresas>/
// su failu story.yaml (pavadinimas, data, viršelis) ir aplankais lt/ bei en/,
// kuriuose po vieną .md failą kiekvienam sluoksniui.
const text = z.object({ lt: z.string().optional(), en: z.string().optional() });

const stories = defineCollection({
  loader: glob({ pattern: '*/story.yaml', base: './src/content/stories' }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: text,
      excerpt: text.optional(),
      cover: image().optional(),
      coverAlt: text.optional(),
    }),
});

const layers = defineCollection({
  loader: glob({ pattern: '*/{lt,en}/*.md', base: './src/content/stories' }),
});

export const collections = { stories, layers };
