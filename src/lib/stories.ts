import { getCollection, type CollectionEntry } from 'astro:content';
import { LAYER_IDS, DEFAULT_LAYER, type LayerId } from './i18n';
// Laikinas viršelis pasakoms, kurios dar neturi savo iliustracijos.
import placeholderCover from '../assets/cover-placeholder.jpg';

export interface StoryLayer {
  id: LayerId;
  entry: CollectionEntry<'layers'>;
  /** Pirmoji teksto pastraipa (be iliustracijų), rodoma pradiniame puslapyje. */
  firstParagraph: string;
  /** Apytikslė trukmė skaitant garsiai, minutėmis. */
  minutes: number;
}

export interface Story {
  slug: string;
  date: Date;
  title: string;
  excerpt: string;
  cover: ImageMetadata;
  coverAlt: string;
  layers: StoryLayer[];
  defaultLayer: LayerId;
  sadEnding: LayerId[];
}

/** Tekstas be skilties „Pokalbiui“ ir be iliustracijų. */
function storyText(body: string) {
  return body.replace(/\r/g, '').split(/^##\s+Pokalbiui\s*$/m)[0];
}

function firstParagraph(body: string) {
  const block = storyText(body)
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .find((b) => b && !b.startsWith('!') && !b.startsWith('#'));
  return (block ?? '').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').replace(/\s*\n\s*/g, ' ');
}

function minutes(body: string) {
  const words = storyText(body).replace(/!\[.*?\]\(.*?\)/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 110));
}

/** Visos pasakos, kurios turi bent vieną skaitymą, nuo naujausios. */
export async function getStories(): Promise<Story[]> {
  const metas = await getCollection('stories');
  const layerEntries = await getCollection('layers');

  const stories: Story[] = [];
  for (const meta of metas) {
    const slug = meta.id.split('/')[0];
    const title = meta.data.title.lt;
    if (!title) continue;

    const layers: StoryLayer[] = [];
    for (const id of LAYER_IDS) {
      const entry = layerEntries.find((e) => e.id === `${slug}/lt/${id}`);
      if (entry) layers.push({ id, entry, firstParagraph: firstParagraph(entry.body ?? ''), minutes: minutes(entry.body ?? '') });
    }
    if (layers.length === 0) continue;

    stories.push({
      slug,
      date: meta.data.date,
      title,
      excerpt: meta.data.excerpt?.lt ?? '',
      cover: meta.data.cover ?? placeholderCover,
      coverAlt: meta.data.cover ? meta.data.coverAlt?.lt ?? '' : '',
      layers,
      sadEnding: meta.data.sadEnding ?? [],
      defaultLayer: layers.some((l) => l.id === DEFAULT_LAYER) ? DEFAULT_LAYER : layers[0].id,
    });
  }

  return stories.sort((a, b) => b.date.getTime() - a.date.getTime());
}
