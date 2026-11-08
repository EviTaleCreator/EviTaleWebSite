import { getCollection, type CollectionEntry } from 'astro:content';
import { LAYER_IDS, DEFAULT_LAYER, type Lang, type LayerId } from './i18n';

export interface StoryLayer {
  id: LayerId;
  entry: CollectionEntry<'layers'>;
}

export interface Story {
  slug: string;
  date: Date;
  title: string;
  excerpt: string;
  cover?: ImageMetadata;
  coverAlt: string;
  layers: StoryLayer[];
  defaultLayer: LayerId;
}

/** Visos pasakos, kurios turi bent vieną sluoksnį nurodyta kalba, nuo naujausios. */
export async function getStories(lang: Lang): Promise<Story[]> {
  const metas = await getCollection('stories');
  const layerEntries = await getCollection('layers');

  const stories: Story[] = [];
  for (const meta of metas) {
    const slug = meta.id.split('/')[0];
    const title = meta.data.title[lang];
    if (!title) continue;

    const layers: StoryLayer[] = [];
    for (const id of LAYER_IDS) {
      const entry = layerEntries.find((e) => e.id === `${slug}/${lang}/${id}`);
      if (entry) layers.push({ id, entry });
    }
    if (layers.length === 0) continue;

    stories.push({
      slug,
      date: meta.data.date,
      title,
      excerpt: meta.data.excerpt?.[lang] ?? '',
      cover: meta.data.cover,
      coverAlt: meta.data.coverAlt?.[lang] ?? '',
      layers,
      defaultLayer: layers.some((l) => l.id === DEFAULT_LAYER) ? DEFAULT_LAYER : layers[0].id,
    });
  }

  return stories.sort((a, b) => b.date.getTime() - a.date.getTime());
}
