# Iliustracijos

## Taisyklės

- Vienas stilius visai svetainei: kaip `public/hero-banner.jpg`. Generuojant visada pridėk jį kaip stiliaus pavyzdį.
- Proporcijos 4:3, horizontalūs. Į repozitoriją kelk iki 1600 px pločio JPG (Astro pats paverčia WebP ir sumažina).
- Pagrindinė iliustracija: `src/content/stories/<adresas>/cover.jpg`, aprašymas `coverAlt` faile `story.yaml`.
- Papildomos: `src/content/stories/<adresas>/img/scene-01.jpg`, `scene-02.jpg` ir t. t. Aplankas bendras visoms kalboms ir sluoksniams.
- Į tekstą įterpiamos atskira eilute po norimos pastraipos: `![Ką vaizduoja paveikslėlis](../img/scene-01.jpg)`. Kiekvienas sluoksnis pats pasirenka, kurias scenas rodyti.
- Didelius originalus laikyk ne čia, o diske.
- Kai veikėjas jau nupieštas, vėlesnėms scenoms pridėk du paveikslėlius: hero (stilius) ir veikėjo iliustraciją, su prierašu „keep the main character exactly as in the second image".

## Universalus promptas (Gemini)

Pakeisk laužtinių skliaustų vietas.

```
Use the attached image as the STYLE REFERENCE. Match its art style, color palette, lighting and level of detail exactly, but create a completely new scene. Do not copy the tree, the face in the tree or the people from the reference.

STYLE: digital fantasy painting, painterly brushwork with soft edges, semi-realistic but storybook-like, rich mossy and bark textures, magical and cozy atmosphere.

PALETTE: deep teal and emerald green shadows, misty blue-green background, warm amber and golden glowing lights as the main accents. Warm light always falls on the main character so it stands out from the cool background.

LIGHTING: soft cinematic glow, light mist, gentle vignette darkening the edges.

MOOD: magical, safe and warm, never scary. Faces are kind and expressive. Suitable for children aged 2 to 12.

SCENE: [kas vyksta: kas, kur, ką daro, 1–3 sakiniai]

MAIN CHARACTER: [išvaizda, kuri turi būti vienoda visose iliustracijose]

COMPOSITION: main character clearly visible in the center or lower third, readable at small size on a phone screen, uncluttered background behind the character.

FORMAT: horizontal, 4:3 aspect ratio.

AVOID: any text, letters, signatures, watermarks, frames; photorealistic photo look; glossy 3D/plastic cartoon look; horror elements, sharp teeth, dark threatening shadows.
```

## Veikėjai

### Raudona gija gudobelių krūme

- Čiūta: small male common chaffinch (Fringilla coelebs): blue-grey cap and nape, warm rusty-pink cheeks and breast, chestnut-brown back, dark wings with two bold white wing bars, short conical beak, big round shining dark eyes. Slightly fluffed up, child-friendly proportions.
- Guoda: female chaffinch: soft olive-brown and buff plumage, the same white wing bars, lively bright eyes, a little slimmer than Čiūta.
- Scenos: 01 Čiūta randa siūlą, 02 visi išskrenda, Čiūta apkabina siūlą, 03 Guoda priglaudžia sparnu (lietus), 04 skrydis virš debesų, 05 audra, Guoda kapoja siūlą nuo Čiūtos kojelės, 06 audra, Čiūta vienas bando pakilti su pririšta kojele, 07 rytas po audros: tuščias lizdas, plunksnelė, siūlas į tamsą (be paukščių). 2–4 m.: 01, 02, 03, 04. 5–8 m.: 01, 02, 05, 04. 9–12 m.: 01, 02, 06 (trūksta Čiūtos vieno skrydžio virš audros). Vyresniems: 02, 07.
- Daiktai: raudonas vilnonis siūlas, gintariniai sakų lašeliai ant lizdo krašto (šviečia kaip jonvabaliai), tamsiai raudonos gudobelės uogos.
