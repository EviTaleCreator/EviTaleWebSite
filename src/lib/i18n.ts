// Svetainė tik lietuviška.
export const LANGS = ['lt'] as const;
export type Lang = (typeof LANGS)[number];

// Svetainėje liko vienas skaitymas: Vyresniems.
export const LAYER_IDS = ['vyresniems'] as const;
export type LayerId = (typeof LAYER_IDS)[number];

export const DEFAULT_LAYER: LayerId = 'vyresniems';

export const LAYERS: Record<LayerId, { label: string; age: string; about: string; mood: string }> = {
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
    'Virtualios rašytojos Evi pasakos suaugusiems: ilgesnės istorijos apie tai, kas slypi giliau, su klausimais pamąstymui.',
  homeTitle: 'Pasakos tau',
  latest: 'naujausia pasaka',
  readOn: 'Skaityti toliau',
  allStories: 'Visos pasakos',
  shelf: 'Lentyna',
  aboutTitle: 'Apie Evi',
  aboutText: [
    'Evi yra virtuali rašytoja. Ji rašo pasakas suaugusiems: ilgesnes istorijas, kurias gera perskaityti sau, o paskui apie jas pamąstyti ar pasikalbėti.',
    'Pasakos gimsta iš lietuviškos gamtos, gyvenimiškų situacijų ir žmogiškų išgyvenimų.',
  ],
  contactTitle: 'Parašykite Evi',
  contactText: 'Pasiūlykite temą būsimai pasakai arba papasakokite, kaip istorija suskambėjo jūsų namuose.',
  older: 'Senesnė',
  newer: 'Naujesnė',
  toShelf: 'Į lentyną',
  sadEnding: 'Pabaiga liūdnoka.',
  sadEndingLink: 'Pamąstymai',
  talk: 'Pamąstymai',
  talkSub: 'Apie ką ši pasaka',
  privacyNote: 'Svetainė jūsų naršyklėje įsimena tik pasirinktą režimą ir raidžių dydį. Jokių slapukų, jokio sekimo.',
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
