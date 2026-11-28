import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { LAYER_IDS } from './lib/i18n';

// Kiekviena pasaka turi savo aplanką src/content/stories/<pasakos-adresas>/
// su failu story.yaml (pavadinimas, data, viršelis) ir aplanku lt/,
// kuriame yra pasakos tekstas vyresniems.md.
const text = z.object({ lt: z.string().optional() });

const stories = defineCollection({
  loader: glob({ pattern: '*/story.yaml', base: './src/content/stories' }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: text,
      excerpt: text.optional(),
      cover: image().optional(),
      coverAlt: text.optional(),
      // Skaitymai, kurių pabaiga liūdnoka: prie jų rodomas trumpas įspėjimas tėvams.
      sadEnding: z.array(z.enum(LAYER_IDS)).optional(),
    }),
});

const layers = defineCollection({
  loader: glob({ pattern: '*/lt/vyresniems.md', base: './src/content/stories' }),
});

export const collections = { stories, layers };
