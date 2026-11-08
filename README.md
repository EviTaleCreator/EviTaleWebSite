# EviTale Creator

Virtualios rašytojos Evi pasakų svetainė. Astro statinė svetainė, talpinama Vercel.

Lietuviška versija: `/`, angliška: `/en/`. Pasaka: `/istorija/<adresas>/` ir `/en/story/<adresas>/`.

## Sluoksniai

Kiekviena pasaka gali turėti iki penkių sluoksnių:

| Failas | Sluoksnis |
| --- | --- |
| `2-4.md` | 2–4 m. |
| `5-8.md` | 5–8 m. |
| `9-12.md` | 9–12 m. |
| `vyresniems.md` | Vyresniems (paaugliams ir suaugusiems) |
| `giliau.md` | Giliau (tėvams) |

Nebūtina turėti visų. Svetainė pati rodo tik tuos sluoksnius, kurių failai yra.

## Kaip įkelti naują pasaką

Viskas vienoje vietoje: `src/content/stories/<pasakos-adresas>/`. Adresas rašomas mažosiomis raidėmis be lietuviškų raidžių ir tarpų, pvz. `raudona-gija`, `mazasis-ruduo`.

```
src/content/stories/raudona-gija/
  story.yaml        pavadinimas, data, trumpas aprašymas, viršelis
  cover.jpg         pagrindinė iliustracija
  img/              papildomos iliustracijos (bendros visoms kalboms)
  lt/
    2-4.md
    5-8.md
    9-12.md
    vyresniems.md
    giliau.md
  en/
    ... tie patys failai angliškai
```

Per GitHub svetainę: atsidaryk `src/content/stories`, spausk **Add file → Upload files** ir įmesk visą pasakos aplanką. Po kelių minučių Vercel atnaujins svetainę.

Lengviausia nukopijuoti `raudona-gija` aplanką ir pakeisti tekstus.

Iliustracijų taisyklės, promptas ir veikėjų aprašymai: [docs/iliustracijos.md](docs/iliustracijos.md).

### story.yaml

```yaml
date: 2026-11-05
title:
  lt: Raudona gija gudobelių krūme
  en: The Red Thread in the Hawthorn
excerpt:
  lt: Trumpas aprašymas lentynai.
  en: Short description for the shelf.
cover: ./cover.jpg
coverAlt:
  lt: Ką vaizduoja iliustracija (neregintiems skaitytojams)
  en: What the illustration shows
```

Jei angliško vertimo dar nėra, tiesiog nerašyk `en:` eilučių ir nekurk `en/` aplanko. Tada pasaka rodysis tik lietuviškoje lentynoje.

### Tekstas su iliustracijomis

Pastraipos atskiriamos tuščia eilute. Iliustracija įterpiama taip:

```md
Čir-vir-vir! Ant šakos tupi mažas paukštelis.

![Paukštelis ant šakos](../img/scene-01.jpg)

Krūme sužibo minkštas raudonas siūlas.
```

Paveikslėliai laikomi pasakos aplanke `img/` (bendri visoms kalboms), todėl kelias prasideda `../img/`. Jie automatiškai paverčiami lengvesniu formatu, bet kelk iki 1600 px pločio.

### Giliau

```md
## Už pasakos šydo

**Simbolika:** tekstas...

### Klausimai vakaro pokalbiui

- Pirmas klausimas?
- Antras klausimas?
```

Klausimai sąraše automatiškai tampa atskiromis kortelėmis.

## Kita

- Pagrindinis svetainės paveikslėlis: `src/assets/hero.jpg`. `public/hero-banner.jpg` naudojamas, kai nuoroda dalinama socialiniuose tinkluose.
- Šriftai (Fraunces, Literata, Plus Jakarta Sans) laikomi pačioje svetainėje, ne Google serveriuose.
- Svetainės užrašai abiem kalbomis: `src/lib/i18n.ts`.
- Kontaktinis el. paštas: evi.tale.creator@gmail.com

## Paleisti savo kompiuteryje

```
npm install
npm run dev
```
