# Iliustracijos

## Taisyklės

- Vienas stilius visai svetainei: spalvoti pieštukai ir guašas (svetainės paletė). Kol nauji paveikslėliai dar nesukurti, stiliaus pavyzdžiu naudok naują Notrelės viršelį. Visi Notrelės promptai: [notrele-promptai.md](notrele-promptai.md).
- Proporcijos 4:3, horizontalūs. Į repozitoriją kelk iki 1600 px pločio JPG (Astro pats paverčia WebP ir sumažina).
- Pagrindinė iliustracija: `src/content/stories/<adresas>/cover.jpg`, aprašymas `coverAlt` faile `story.yaml`.
- Papildomos: `src/content/stories/<adresas>/img/scene-01.jpg`, `scene-02.jpg` ir t. t. Aplankas bendras visiems skaitymams.
- Į tekstą įterpiamos atskira eilute po norimos pastraipos: `![Ką vaizduoja paveikslėlis](../img/scene-01.jpg)`. Kiekvienas skaitymas pats pasirenka, kurias scenas rodyti.
- Didelius originalus laikyk ne čia, o diske.
- Kai veikėjas jau nupieštas, vėlesnėms scenoms pridėk du paveikslėlius: stiliaus pavyzdį ir veikėjo iliustraciją, su prierašu „keep the main character exactly as in the second image".

## Universalus promptas (Gemini)

Pakeisk laužtinių skliaustų vietas.

```
Use the attached image as the STYLE REFERENCE: the same technique, palette and simplicity, but a completely new scene.

STYLE: a hand-made children's picture book illustration, painted in opaque gouache and finished with colored pencil on warm off-white paper. Visible colored-pencil strokes and hatching, matte gouache areas with soft dry-brush edges, the paper grain showing through. Simple, gently stylized shapes, slightly naive, like a contemporary award-winning picture book. Calm, even daylight; no dramatic lighting.

PALETTE: build the picture from these colors: graphite blue-grey #2d3142 for the darkest shapes and pencil lines, sage green #8fa58c, poppy red #e2553e as the single bright accent, butter yellow #f3d58a, and the off-white paper #f7f5f0. Other natural colors stay muted and pulled toward this palette. Lots of paper white.

MOOD: safe and warm, never scary. Faces are simple and kind. For the whole family.

SCENE: [kas vyksta: kas, kur, ką daro, 1–3 sakiniai]

MAIN CHARACTER: [išvaizda, kuri turi būti vienoda visose iliustracijose]

COMPOSITION: one clear main subject, large and readable on a small phone screen. Plenty of calm empty space. The background is simple: a few flat shapes, not a detailed scene.

FORMAT: horizontal, 4:3.

AVOID: glow, sparkles, fireflies, light rays, mist, vignette, dark moody background, digital fantasy painting, airbrush, glossy 3D, photorealism, text, letters, signatures, frames.
```

## Veikėjai

### Raudona gija gudobelių krūme

- Čiūta: small male common chaffinch (Fringilla coelebs): blue-grey cap and nape, warm rusty-pink cheeks and breast, chestnut-brown back, dark wings with two bold white wing bars, short conical beak, big round shining dark eyes. Slightly fluffed up, child-friendly proportions.
- Guoda: female chaffinch: soft olive-brown and buff plumage, the same white wing bars, lively bright eyes, a little slimmer than Čiūta.
- Scenos: 01 Čiūta randa siūlą, 02 visi išskrenda, Čiūta apkabina siūlą, 03 Guoda priglaudžia sparnu (lietus), 04 skrydis virš debesų, 05 audra, Guoda kapoja siūlą nuo Čiūtos kojelės, 06 audra, Čiūta vienas bando pakilti su pririšta kojele, 07 rytas po audros: tuščias lizdas, plunksnelė, siūlas į tamsą (be paukščių), 08 Čiūta vienas virš audros į saulę. Mažyliams: 01, 02, 03, 04. Vaikams: 01, 02, 05, 04. Vyresniems: 02, 07.
- Daiktai: raudonas vilnonis siūlas, gintariniai sakų lašeliai ant lizdo krašto (šviečia kaip jonvabaliai), tamsiai raudonos gudobelės uogos.

### Pušies žievės laivelis

- Alanta: lėta upė, be veido. Jos nuotaiką rodo šviesa ir vanduo: rami ir auksinė, kai gera; puta, kai lekia; blyški ir rūke, kai liūdi.
- Žvelsa: greita upė už kalvos, šokinėja per pilkus akmenis, balta puta.
- Mergaitė: little girl about 4 years old, round rosy face with red cheeks, big bright happy eyes, light brown hair in two short braids with loose strands, a simple light linen dress and a knitted mustard-yellow cardigan with buttons, bare feet. Pavyzdys: `img/scene-04.jpg`.
- Laiveliai: flat piece of pine bark shaped like a little boat, a thin twig mast, a bird feather as a sail. Mergaitės laivelis kreivas, su tamsiai raudonu siūlu ant stiebo.
- Vieta: lėtas vingis per pievą, senas medinis lieptelis, didelis gluosnis (viršelis).
- Scenos: 01 dvi upės (Alanta ir Žvelsa), 02 Alanta lekia nuo kalno, 03 tuščia upė rūke, 04 mergaitė bėga paskui laivelį, 05 rudenį berniukas ant lieptelio, laivelis įstrigęs nendrėse, 06 sausas lieptelis virš išdžiūvusios vagos (be žmonių), 07 du keliautojai prie lieptelio rodo į Žvelsą. Mažyliams: 01, 07, 02, 03, 04. Vaikams: 01, 07, 05, 02, 04, 06. Vyresniems: 07, 05, 06.
- Berniukas: about 6 to 7 years old, short brown hair, a beige knitted cardigan over a collared shirt, blue trousers rolled up, bare feet. Pavyzdys: `img/scene-05.jpg`.

### Notrelė

- Notrelė: white dead-nettle (Lamium album): square stem, pairs of heart-shaped, toothed, wrinkled leaves very similar to nettle leaves, whorls of small white two-lipped hooded flowers around the stem. Žiedai visada balti. Be veido.
- Dilgėlės: tall, dark green, toothed pointed leaves, fine hairs on stems, thin hanging flower strings. Ramunėlė: viena balta ramunė saulėtame dilgyno pakraštyje. Kamanė: stora, rudai dryžuota.
- Vieta: dilgynas prie senos medinės daržinės akmeniniu pamatu, surūdijusios akėčios (viršelis).
- Mergaitė: about 9 to 10 years old, sun-tanned, freckles, long light blond loose hair, a simple faded light blue sleeveless summer dress, bare feet. Pavyzdys: `img/scene-02.jpg`. Svarbu nurodyti mastelį: notrelė jai iki kelių, dilgėlės iki juosmens.
- Scenos: 01 kamanė prie notrelės žiedų, 02 mergaitė pritūpusi randa baltus žiedus, 03 mergaitė su vainikėliu ir raudonu siūlu bėga per pievą, 04 lietus, notrelė ir ramunėlė palinkusios viena link kitos, 05 sausra, ožka nukanda ramunėlę, 06 raudonas kaspinėlis ant stiebo, kamanė grįžta, naujas ramunėlės pumpuras. Mažyliams: 01, 02, 03. Vaikams: 01, 04, 05, 02, 06. Vyresniems: 04, 05, 03.
- Ožka: calm curious white farm goat with a little beard. Sausrą rodyti tik suskilinėjusia žeme ir suglebusiais lapais, ne išblukusiomis spalvomis.
