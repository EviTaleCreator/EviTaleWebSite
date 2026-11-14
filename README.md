# EviTale Creator

Virtualios rašytojos Evi pasakų svetainė. Astro statinė svetainė, talpinama Vercel. Kol kas tik lietuviškai.

Pasaka: `/istorija/<adresas>/`.

## Trys skaitymai

Kiekviena pasaka gali turėti iki trijų skaitymų:

| Failas | Skaitymas |
| --- | --- |
| `mazyliams.md` | Mažyliams (iki 5 m.) |
| `vaikams.md` | Vaikams (5–8 m.) |
| `vyresniems.md` | Vyresniems (suaugusiems, ilgesnė novelė) |

Nebūtina turėti visų. Svetainė pati rodo tik tuos skaitymus, kurių failai yra.

## Kaip įkelti naują pasaką

Viskas vienoje vietoje: `src/content/stories/<pasakos-adresas>/`. Adresas rašomas mažosiomis raidėmis be lietuviškų raidžių ir tarpų, pvz. `raudona-gija`, `mazasis-ruduo`.

```
src/content/stories/raudona-gija/
  story.yaml        pavadinimas, data, trumpas aprašymas, viršelis
  cover.jpg         pagrindinė iliustracija
  img/              papildomos iliustracijos (bendros visiems skaitymams)
  lt/
    mazyliams.md
    vaikams.md
    vyresniems.md
```

Per GitHub svetainę: atsidaryk `src/content/stories`, spausk **Add file → Upload files** ir įmesk visą pasakos aplanką. Po kelių minučių Vercel atnaujins svetainę.

Lengviausia nukopijuoti `raudona-gija` aplanką ir pakeisti tekstus.

Iliustracijų taisyklės, promptas ir veikėjų aprašymai: [docs/iliustracijos.md](docs/iliustracijos.md).

### story.yaml

```yaml
date: 2026-11-05
title:
  lt: Raudona gija gudobelių krūme
excerpt:
  lt: Trumpas aprašymas lentynai.
cover: ./cover.jpg
sadEnding: [vyresniems]   # neprivaloma: skaitymai su liūdnoka pabaiga
coverAlt:
  lt: Ką vaizduoja iliustracija (neregintiems skaitytojams)
```

Jei pasaka dar neturi savo iliustracijos, tiesiog nerašyk `cover:` ir `coverAlt:` eilučių. Tada lentynoje ir pasakoje bus rodomas laikinas viršelis `src/assets/cover-placeholder.jpg`.

### Tekstas su iliustracijomis

Pastraipos atskiriamos tuščia eilute. Iliustracija įterpiama taip:

```md
Čir-vir-vir! Ant šakos tupi mažas paukštelis.

![Paukštelis ant šakos](../img/scene-01.jpg)

Krūme sužibo minkštas raudonas siūlas.
```

Paveikslėliai laikomi pasakos aplanke `img/`, todėl kelias prasideda `../img/`. Jie automatiškai paverčiami lengvesniu formatu, bet kelk iki 1600 px pločio.

Pirmoji pastraipa (ne paveikslėlis) rodoma pradiniame puslapyje, kai pasaka yra naujausia. Skaitymo trukmė apskaičiuojama automatiškai.

### Pokalbiui

Kiekvieno skaitymo failo gale gali būti skiltis tėvams. Viskas, kas po antrašte `## Pokalbiui`, svetainėje tampa suskleista kortele pasakos pabaigoje:

```md
## Pokalbiui

### Apie ką ši pasaka

Trumpai apie pasakos prasmę.

### Kaip kalbėtis

Tema ir pastabos šio amžiaus vaikui.

### Klausimai

- Pirmas klausimas?
- Antras klausimas?
```

Klausimai sąraše automatiškai tampa atskiromis kortelėmis.

## Kita

- Šriftai (Bricolage Grotesque, Literata) laikomi pačioje svetainėje, ne Google serveriuose.
- Svetainės užrašai: `src/lib/i18n.ts`. Spalvos ir išvaizda: `src/styles/global.css`.
- `public/hero-banner.jpg` naudojamas, kai nuoroda dalinama socialiniuose tinkluose.
- Kontaktinis el. paštas: evi.tale.creator@gmail.com

## Paleisti savo kompiuteryje

```
npm install
npm run dev
```
