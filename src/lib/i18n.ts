export const LANGS = ['lt', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const LAYER_IDS = ['2-4', '5-8', '9-12', 'vyresniems', 'giliau'] as const;
export type LayerId = (typeof LAYER_IDS)[number];

/** Sluoksnis, kuris atsidaro pirmas, jei skaitytojas dar nieko nepasirinko. */
export const DEFAULT_LAYER: LayerId = '5-8';

type T = Record<Lang, string>;

export const LAYERS: Record<LayerId, { label: T; short: T; about: T }> = {
  '2-4': {
    label: { lt: '2–4 m.', en: 'Ages 2–4' },
    short: { lt: 'Trumpai, su paveikslėliais', en: 'Short, with pictures' },
    about: {
      lt: 'Trumpi sakiniai, garsai, ritmas ir paveikslėlis prie kiekvienos minties.',
      en: 'Short sentences, sounds, rhythm and a picture for every idea.',
    },
  },
  '5-8': {
    label: { lt: '5–8 m.', en: 'Ages 5–8' },
    short: { lt: 'Vaizduotė ir pirmosios baimės', en: 'Imagination and first fears' },
    about: {
      lt: 'Vaizduotė, draugystė, pirmosios baimės.',
      en: 'Imagination, friendship, first fears.',
    },
  },
  '9-12': {
    label: { lt: '9–12 m.', en: 'Ages 9–12' },
    short: { lt: 'Ilgesnis nuotykis', en: 'A longer adventure' },
    about: {
      lt: 'Ilgesnis siužetas, pasirinkimai ir tikras nuotykis.',
      en: 'A longer plot, choices and a real adventure.',
    },
  },
  vyresniems: {
    label: { lt: 'Vyresniems', en: 'Older readers' },
    short: { lt: 'Paaugliams ir suaugusiems', en: 'Teens and adults' },
    about: {
      lt: 'Ta pati istorija vyresniems skaitytojams: paaugliams ir suaugusiems.',
      en: 'The same story for older readers: teens and adults.',
    },
  },
  giliau: {
    label: { lt: 'Giliau', en: 'Deeper' },
    short: { lt: 'Tėvams: simbolika ir klausimai', en: 'For parents: symbols and questions' },
    about: {
      lt: 'Simbolika, prieraišumas ir klausimai pokalbiui su vaiku.',
      en: 'Symbolism, attachment and questions to talk through with your child.',
    },
  },
};

export const UI = {
  lt: {
    siteDescription:
      'Virtualios rašytojos Evi pasakos vaikams ir tėvams. Kiekviena istorija turi kelis skaitymo sluoksnius: pagal amžių, vyresniems ir gilesnį skaitinį tėvams.',
    homeTitle: 'Pasakos, kurios auga kartu su vaiku',
    eyebrow: 'Virtualios rašytojos Evi pasakos',
    heroTitle: 'Viena pasaka, keli skaitymo sluoksniai',
    heroSub:
      'Išsirink vaiko amžių ir skaityk tą pačią istoriją jam suprantama kalba. Skiltyje „Giliau“ – psichologinis sluoksnis ir klausimai vakaro pokalbiui.',
    latest: 'Naujausia pasaka',
    read: 'Skaityti',
    shelf: 'Lentyna',
    layersNav: 'Sluoksniai',
    contactNav: 'Kontaktai',
    show: 'Rodyti',
    layer: 'Sluoksnis',
    all: 'Visi',
    allShort: 'Visos pasakos',
    empty: 'Šiam sluoksniui pasakų dar nėra. Netrukus bus.',
    layersTitle: 'Kaip veikia sluoksniai',
    layersIntro: 'Kiekviena pasaka turi kelis sluoksnius. Atsidaręs pasaką, juos gali perjungti bet kada.',
    contactTitle: 'Parašyk Evi',
    contactText: 'Pasiūlyk temą būsimai pasakai arba papasakok, kaip istorija suskambėjo jūsų namuose.',
    back: 'Lentyna',
    older: 'Senesnė',
    newer: 'Naujesnė',
    toShelf: 'Grįžti į lentyną',
    otherStories: 'Kitos pasakos',
    write: 'Parašyti Evi',
    language: 'Kalba',
    latestCta: 'Skaityti naujausią pasaką',
    privacyNote: 'Svetainė jūsų naršyklėje įsimena tik pasirinktą kalbą, režimą, raidžių dydį ir sluoksnį. Jokių slapukų, jokio sekimo.',
    themeToNight: 'Įjungti naktinį režimą',
    themeToDay: 'Įjungti dienos režimą',
    textSize: 'Raidžių dydis',
    textSmaller: 'Mažesnės raidės',
    textBigger: 'Didesnės raidės',
    count: ['pasaka', 'pasakos', 'pasakų'],
  },
  en: {
    siteDescription:
      'Stories for children and parents by the virtual author Evi. Every story has several reading layers: by age, for older readers, and a deeper read for parents.',
    homeTitle: 'Stories that grow with your child',
    eyebrow: 'Stories by the virtual author Evi',
    heroTitle: 'One story, many ways to read it',
    heroSub:
      'Pick your child’s age and read the same story in words they understand. Under “Deeper”: a psychological layer and questions for a bedtime talk.',
    latest: 'Newest story',
    read: 'Read',
    shelf: 'Bookshelf',
    layersNav: 'Layers',
    contactNav: 'Contact',
    show: 'Show',
    layer: 'Layer',
    all: 'All',
    allShort: 'Every story',
    empty: 'No stories in this layer yet. Coming soon.',
    layersTitle: 'How the layers work',
    layersIntro: 'Every story has several layers. Once a story is open, you can switch between them at any time.',
    contactTitle: 'Write to Evi',
    contactText: 'Suggest a theme for a future story, or tell me how a story landed in your home.',
    back: 'Shelf',
    older: 'Older',
    newer: 'Newer',
    toShelf: 'Back to the shelf',
    otherStories: 'Other stories',
    write: 'Write to Evi',
    language: 'Language',
    latestCta: 'Read the newest story',
    privacyNote: 'This site only remembers, in your browser, the language, mode, text size and layer you chose. No cookies, no tracking.',
    themeToNight: 'Switch to night mode',
    themeToDay: 'Switch to day mode',
    textSize: 'Text size',
    textSmaller: 'Smaller text',
    textBigger: 'Larger text',
    count: ['story', 'stories', 'stories'],
  },
} as const;

export const EMAIL = 'evi.tale.creator@gmail.com';

export const homeUrl = (lang: Lang) => (lang === 'lt' ? '/' : '/en/');
export const storyUrl = (lang: Lang, slug: string) =>
  lang === 'lt' ? `/istorija/${slug}/` : `/en/story/${slug}/`;

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'lt' ? 'lt-LT' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
