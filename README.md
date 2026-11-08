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
| `komiksas.md` | Komiksas |
| `giliau.md` | Giliau (tėvams) |

Nebūtina turėti visų. Svetainė pati rodo tik tuos sluoksnius, kurių failai yra.

## Kaip įkelti naują pasaką

Viskas vienoje vietoje: `src/content/stories/<pasakos-adresas>/`. Adresas rašomas mažosiomis raidėmis be lietuviškų raidžių ir tarpų, pvz. `raudona-gija`, `mazasis-ruduo`.

```
src/content/stories/raudona-gija/
  story.yaml        pavadinimas, data, trumpas aprašymas, viršelis
  cover.jpg         pagrindinė iliustracija
  lt/
    2-4.md
    5-8.md
    9-12.md
    komiksas.md
    giliau.md
    img/            papildomos iliustracijos (nebūtina)
  en/
    ... tie patys failai angliškai
```

Per GitHub svetainę: atsidaryk `src/content/stories`, spausk **Add file → Upload files** ir įmesk visą pasakos aplanką. Po kelių minučių Vercel atnaujins svetainę.

Lengviausia nukopijuoti `raudona-gija` aplanką ir pakeisti tekstus.

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

![Paukštelis ant šakos](./img/paukstelis.jpg)

Krūme sužibo minkštas raudonas siūlas.
```

Paveikslėliai automatiškai sumažinami ir paverčiami lengvesniu formatu, tad gali kelti ir didelius.

### Komiksas

Kiekvienas kadras yra paveikslėlis ir po juo užrašas, be tuščios eilutės tarp jų. Kadrus atskiria tuščia eilutė:

```md
![](./img/kadras-1.jpg)
Rytas miške. Paukštelis gudobelėje.

![](./img/kadras-2.jpg)
Kiti paukščiai bijo spyglių.
```

Telefone kadrai išdėliojami po du eilėje. Jei kadrų nelyginis skaičius, paskutinis būna per visą plotį.

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
