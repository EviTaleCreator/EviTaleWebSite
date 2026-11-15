// Svetainė tik lietuviška.
export const LANGS = ['lt'] as const;
export type Lang = (typeof LANGS)[number];

export const LAYER_IDS = ['mazyliams', 'vaikams', 'vyresniems'] as const;
export type LayerId = (typeof LAYER_IDS)[number];

/** Skaitymas, kuris atsidaro pirmas, jei skaitytojas dar nieko nepasirinko. */
export const DEFAULT_LAYER: LayerId = 'vaikams';

export const LAYERS: Record<LayerId, { label: string; age: string; about: string; mood: string }> = {
  mazyliams: {
    label: 'Mažyliams',
    age: 'iki 5 m.',
    about: 'Trumpi sakiniai, garsai, ritmas ir daug paveikslėlių. Skirta skaityti kartu.',
    mood: 'skaityti kartu',
  },
  vaikams: {
    label: 'Vaikams',
    age: '5–9 m.',
    about: 'Tas pats nuotykis, tačiau į jį įsipina draugystė, pirmosios baimės ir gyvenimiškos pamokos.',
    mood: 'prieš miegą',
  },
  vyresniems: {
    label: 'Vyresniems',
    // Amžius sąmoningai nerašomas.
    age: '',
    about:
      'Istorija suaugusiems kaip ilgesnė pasaka ar novelė, su viskuo, kas slypi giliau. Ne visi gyvenimo nuotykiai baigiasi laimingai, ir ne visoms svajonėms lemta išsipildyti.',
    mood: 'novelė',
  },
};

export const UI = {
  siteDescription:
    'Virtualios rašytojos Evi pasakos visai šeimai. Kiekviena pasaka parašyta tris kartus: mažyliams, vaikams ir suaugusiems.',
  homeTitle: 'Pasakos, kurios auga kartu su vaiku',
  latest: 'naujausia pasaka',
  readOn: 'Skaityti toliau',
  allStories: 'Visos pasakos',
  shelf: 'Lentyna',
  all: 'Visos',
  empty: 'Šiam skaitymui pasakų dar nėra.',
  howTitle: 'Viena pasaka, trys skaitymai',
  howTalk:
    'Kiekvieno skaitymo pabaigoje yra suskleista dalis „Pokalbiui“: apie ką ši pasaka, pastabos tėvams ir klausimai vakaro pokalbiui, pritaikyti tam amžiui.',
  aboutTitle: 'Apie Evi',
  aboutText: [
    'Evi yra virtuali rašytoja. Kiekvieną pasaką ji rašo tris kartus, kad tą pačią istoriją galėtų skaityti visa šeima: mažylis prieš miegą, vyresnis vaikas pats, o tėvai sau.',
    'Pasakos gimsta iš lietuviškos gamtos, gyvenimiškų situacijų ir žmogiškų išgyvenimų.',
  ],
  contactTitle: 'Parašykite Evi',
  contactText: 'Pasiūlykite temą būsimai pasakai arba papasakokite, kaip istorija suskambėjo jūsų namuose.',
  older: 'Senesnė',
  newer: 'Naujesnė',
  toShelf: 'Į lentyną',
  whoFor: 'Kam skaitome?',
  sadEnding: 'Pabaiga liūdnoka, verta pasikalbėti.',
  sadEndingLink: 'Klausimai pokalbiui',
  talk: 'Pokalbiui',
  talkSub: 'Apie ką ši pasaka, pastabos tėvams ir klausimai',
  privacyNote: 'Svetainė jūsų naršyklėje įsimena tik pasirinktą režimą, raidžių dydį ir skaitymą. Jokių slapukų, jokio sekimo.',
  themeToNight: 'Įjungti naktinį režimą',
  themeToDay: 'Įjungti dienos režimą',
  night: 'Naktis',
  day: 'Diena',
  textSize: 'Raidžių dydis',
  textSmaller: 'Mažesnės raidės',
  textBigger: 'Didesnės raidės',
  minutes: 'min',
  count: ['pasaka', 'pasakos', 'pasakų'],
} as const;

export const EMAIL = 'evi.tale.creator@gmail.com';

export const homeUrl = () => '/';
export const storyUrl = (slug: string) => `/istorija/${slug}/`;

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('lt-LT', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
}

export function countText(n: number) {
  const [one, few, many] = UI.count;
  const lastTwo = n % 100;
  const last = n % 10;
  const form = last === 1 && lastTwo !== 11 ? one : last === 0 || (lastTwo >= 10 && lastTwo <= 20) ? many : few;
  return `${n} ${form}`;
}
