# Notrelė: Gemini promptai visoms iliustracijoms

Naujas stilius: **spalvoti pieštukai ir guašas** (svetainės paletė). Promptai angliškai, nes taip Gemini tiksliau laikosi stiliaus.

## Tvarka

1. **Viršelis** (`cover.jpg`) – sugeneruokite pirmą. Kai patiks, jis taps **stiliaus pavyzdžiu** visoms kitoms.
2. **Mergaitės lapas** – vieną kartą, kad mergaitė visose scenose būtų ta pati.
3. **Scenos 01–06** – kiekvienai pridėkite viršelį (stiliui), o scenoms su mergaite ir mergaitės lapą.
4. Viską darykite **viename Gemini pokalbyje**. Taisykite žodžiais („less detail in the background“, „make the bumblebee bigger“), užuot generavę iš naujo.
5. Paveikslėlius išsaugokite tais pačiais pavadinimais (`cover.jpg`, `img/scene-01.jpg` …), iki 1600 px pločio, ir pakeiskite senuosius aplanke `src/content/stories/notrele/`. Tekstų keisti nereikės.

Viršelis svetainėje apkerpamas skirtingai (pasakoje plačiau, pradiniame puslapyje siauriau), todėl pagrindinis objektas turi būti centre, su laisvu plotu aplink.

---

## Stiliaus blokas

Šis blokas kartojamas kiekviename prompte. Jei paveikslėlis nukrypsta, pirmiausia patikrinkite, ar blokas įklijuotas visas.

```
STYLE: a hand-made children's picture book illustration, painted in opaque gouache and finished with colored pencil on warm off-white paper. Visible colored-pencil strokes and hatching, matte gouache areas with soft dry-brush edges, the paper grain showing through. Simple, gently stylized shapes, slightly naive, like a contemporary award-winning picture book. Calm, even daylight; no dramatic lighting.

PALETTE: build the picture from these colors: graphite blue-grey #2d3142 for the darkest shapes and pencil lines, sage green #8fa58c, poppy red #e2553e as the single bright accent, butter yellow #f3d58a, and the off-white paper #f7f5f0. Other natural colors (leaf greens, earth browns, sky) stay muted and pulled toward this palette. Lots of paper white.

COMPOSITION: one clear main subject, large and readable on a small phone screen. Plenty of calm empty space. The background is simple: a few flat shapes, not a detailed scene.

AVOID: glow, sparkles, fireflies, light rays, mist, vignette, dark moody background, digital fantasy painting, airbrush, glossy 3D, photorealism, text, letters, signatures, frames.
```

---

## Viršelis (`cover.jpg`)

```
[STYLE block]

SCENE: by the stone foundation of an old wooden barn, a clump of tall dark stinging nettles grows next to an old rusty harrow. Among the nettles stands one white dead-nettle plant with small white flowers. At the sunny edge, a single white daisy is in bloom. Quiet summer morning.

MAIN SUBJECT: the white dead-nettle (Lamium album): a straight square stem with pairs of heart-shaped, toothed, wrinkled leaves that look almost exactly like nettle leaves, and rings of small white hooded two-lipped flowers around the stem. No face. It stands slightly in front of the nettles, in the center of the picture.

NETTLES: tall, darker green with graphite shading, pointed toothed leaves, fine hairs on the stems drawn with colored pencil.

FORMAT: horizontal, 4:3. Keep the dead-nettle and the daisy in the central area, with empty space on all sides.
```

---

## Mergaitės lapas

```
Use the attached image as the STYLE REFERENCE: the same gouache and colored-pencil technique, the same palette, the same simplicity.

Create a character sheet of one girl, shown three times on plain off-white paper: standing from the front, crouching from the side, and running. Keep her identical in all three.

GIRL: about 9 to 10 years old, sun-tanned, light freckles, long light-blond loose hair, a simple faded light-blue sleeveless summer dress, bare feet. Simple, kind face with small dot eyes and rosy cheeks, picture-book style, not realistic.

No text, no labels.
```

---

## Scena 01 – kamanė prie notrelės (`img/scene-01.jpg`)

Naudojama: Mažyliams, Vaikams.

```
Use the attached image as the STYLE REFERENCE. Keep the dead-nettle exactly as in it.

[STYLE block]

SCENE: close-up of the white dead-nettle among the dark nettles by the old barn. A fat, round bumblebee with brown and butter-yellow stripes flies to its small white flowers to drink the nectar. Morning.

COMPOSITION: the dead-nettle flowers and the bumblebee large in the center; the barn wall only as a simple flat shape behind.

FORMAT: horizontal, 4:3.
```

## Scena 02 – mergaitė randa baltus žiedus (`img/scene-02.jpg`)

Naudojama: Mažyliams, Vaikams.

```
Use the FIRST attached image as the STYLE REFERENCE and the SECOND attached image as the CHARACTER REFERENCE. Keep the girl exactly as in the second image.

[STYLE block]

SCENE: the barefoot girl crouches by the nettles near the old barn, holding a small bunch of daisies and cornflowers. She has just found the white dead-nettle flowers hidden among the nettles and gently touches one, delighted.

SCALE: the dead-nettle reaches only to her knees, the nettles to her waist.

COMPOSITION: the girl and the dead-nettle together in the lower two thirds; simple flat barn wall behind.

FORMAT: horizontal, 4:3.
```

## Scena 03 – mergaitė su vainikėliu bėga per pievą (`img/scene-03.jpg`)

Naudojama: Mažyliams, Vyresniems.

```
Use the FIRST attached image as the STYLE REFERENCE and the SECOND attached image as the CHARACTER REFERENCE. Keep the girl exactly as in the second image.

[STYLE block]

SCENE: the girl runs and laughs across a summer meadow, away from the old barn in the distance. On her head is a small wreath of daisies, cornflowers and white dead-nettle flowers, tied with a thin poppy-red woollen thread whose ends flutter behind her.

COMPOSITION: the girl large, slightly left of center, running to the right; the meadow as one soft sage shape, the barn small and simple in the background.

FORMAT: horizontal, 4:3.
```

## Scena 04 – lietus, notrelė pridengia ramunėlę (`img/scene-04.jpg`)

Naudojama: Vaikams, Vyresniems.

```
Use the attached image as the STYLE REFERENCE. Keep the dead-nettle exactly as in it.

[STYLE block]

SCENE: summer rain. The white dead-nettle bends one of its heart-shaped leaves over a small white daisy beside it, and the raindrops roll off the leaf and fall right next to the daisy's flower. The rain is drawn as short, light colored-pencil lines.

COMPOSITION: the bent leaf and the daisy large in the center; the nettles as darker shapes at the sides.

FORMAT: horizontal, 4:3.
```

## Scena 05 – sausra, ožka nukanda ramunėlę (`img/scene-05.jpg`)

Naudojama: Vaikams, Vyresniems.

```
Use the attached image as the STYLE REFERENCE. Keep the dead-nettle exactly as in it.

[STYLE block]

SCENE: a dry, hot summer day. The ground is cracked (drawn with fine graphite pencil lines), the leaves droop. A calm, curious white farm goat with a little beard bites off the daisy's flower. The white dead-nettle stands right next to it and does not cover it. Not scary: the goat looks gentle, just hungry.

COLOR NOTE: show the drought only through the cracked ground and drooping leaves, not with faded or brown colors; keep the palette.

FORMAT: horizontal, 4:3.
```

## Scena 06 – raudonas siūlas, kamanė grįžta (`img/scene-06.jpg`)

Naudojama: Vaikams.

```
Use the attached image as the STYLE REFERENCE. Keep the dead-nettle exactly as in it.

[STYLE block]

SCENE: early morning. The white dead-nettle stands tall and proudly lifts its white flowers. A thin poppy-red woollen thread is tied in a small bow around its stem. The fat striped bumblebee flies back to the flowers. Beside it, on the bitten daisy stem, a tiny new green bud is just opening.

COMPOSITION: the dead-nettle with the red bow in the center, the bumblebee above, the small bud low in the foreground.

FORMAT: horizontal, 4:3.
```
