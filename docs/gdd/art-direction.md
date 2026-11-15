# Art direction

**Brightcall.** World: Aethora. Genre: Bright-punk Fantasy.

The look below is settled. The table still has to read at a glance. Words: [terminology](../terminology.md). Physics: [board glossary](../lore/pocket-and-core.md).

Leading visual truth for Seams and Chroma:

- [Box art — Seam as draping curtain](references/brightcall-box-art.webp)
- [Knife — Seam enveloping an object](references/seam-knife.webp)

Kardia / Vesper civic-modern lean (prefer the proud civic plate over grim survivor):

- [Vesper civic-modern](references/vesper-civic-modern.jpg)
- [Vesper grim lean — avoid as default mood](references/vesper-grim-lean.jpg)

## Style lock (website & marketing stills)

**Master plates.** Every new still must match these two first:

1. [`site/public/art/hero-harvester.png`](../../site/public/art/hero-harvester.png) — character / close action north star
2. [`site/public/art/the-bright.png`](../../site/public/art/the-bright.png) — world / landscape north star

**One pipeline.** Stability **SD3 only** (`scripts/generate-brightcall-art.mjs`, model `sd3-large`). Mixing SD3 with Cursor GenerateImage or any other model breaks the look. If SD3 has no credits or the API fails, **stop and tell Dirk** — do not generate substitutes on another model.

**Locked finish.** Studio Fortiche / Arcane neighborhood: stylized realism, thick confident brushstrokes, sharp silhouette edges, graphic high-contrast lighting, blown rim light, limited neon palette (cyan / magenta / gold) against Bone–Ash–Greige. Painterly blocks of color, not soft airbrush fog. Not photoreal. Not hyperreal 3D. Not soft painterly concept art. Not anime cel.

**Prompt block (paste every time).**

```text
Digital 2D painting, Studio Fortiche style, Arcane TV, Brightcall Bright-punk Fantasy.
Match the style of the Brightcall harvester plate: thick confident brush strokes, sharp graphic silhouettes,
high-contrast cinematic rim light, cyan magenta gold neon against Bone Ash Greige and bruised plum shadows.
Stylized realism, painterly blocks, no photorealism, no 3D render, no soft generic concept art, no anime.
```

**Negative block.**

```text
photorealistic, 3d render, unreal engine, soft airbrush concept art, anime, cartoon chibi,
generic fantasy oil painting, muddy grimdark, blood, gore, text, watermark, logo
```

**QA.** Hold the new still next to `hero-harvester.png`. If brush language, edge sharpness, or lighting family do not match at a glance, regenerate. Subject accuracy never beats style match.

## Core aesthetic

Genre: **Bright-punk Fantasy**. Stylized realism, painterly finish, sharp brushstrokes, rich texture, light cartoon exaggeration for standee read. Beautiful and lethal. Arcane / Altered neighborhood as reference, made unique through Aethora. Master plates above win when a still drifts.

Resting Light Kardia may read **civic-modern magitech** (trenchcoats, compact pearl Brightforged, lit cells) — Bright-punk grit with a modern silhouette — without becoming Earth sci-fi. Guns and lasers are infant tech; computers do not exist. Aureate stay dirtier-industrial; Refract stay hazardous lab.

The physical world is heavy: **Bone, Ash, and Greige**. Magic is toxic pressurized neon against that grit. Shadows are **bruised** (plum, olive, charcoal), never strip-book flat black. The Bright remains spectacular, not murky.

No grimdark mud as the whole mood. No soft organic landscape as the default ground. No blood, fleshy gore, or wound imagery in the Bright’s visual language. No hyper-realistic 3D renders as the finish. The board is not a factory floor. The board is the chaotic, surreal interior of **The Bright**.

## Color system

### Physical world — Bone, Ash & Greige

**Alabaster Bone** carries brutalist architecture and Oru skin — it shows scratches and fight damage. **Brightforged** gear sits a step brighter: pearl white with a faint radiance, so Kardia craft reads as living Core light rather than stone. Fiction lock: that metal handles Chroma safely — useful on tools that meet weeping Tears. **Heavy Ash** is weathered concrete, dust, raw stone, war-torn ruin weight. **Gritty Greige** is weathered leather, canvas, Kho'Lan cloth — it bridges light and dark without soft sand.

### Shadows — Bruised Darkness

**Deep Plum** lives in the deepest shadows, ravines, Umbra wells — bruised contrast under neon. **Industrial Olive** sits on metal, copper, Aureate and Refract gear shadows — toxic and old. **Charcoal** marks explosion edges, soot around Seams, where light dies.

### Volatile Chroma — toxic neon

**Pressurized Magenta** flows and levitates on Seam glass — oil-slick glow on bone stone. **Electric Cyan** is radioactive blue on reality tears and active Splinter tech. **Searing Gold** is liquid sun / hot plasma — raw Call of the Bright hunger.

Chroma is not soft fairy magic. It is overpressurized chemical heat against a grey world.

### Interface — flat and clean

**Rich Cream** for text panels, ability cards, tableaus — soft contrast under black type. **Structural Gold** for vector lines, icon frames, card edges — premium read. **Chroma Gradients** (cyan → magenta) for energy meters, level strips, Splinter augments only — a clean graphic of board chaos.

Costume and ground stay in Bone / Ash / Greige / faction accents. Tears on the board stay Magenta, Cyan, and Searing Gold. If they share one dominant color, standees disappear.

## The arena: inside the anomaly

Matches take place entirely inside The Bright — vast, monolithic, brighter toward the Core.

### Outside vs inside

From outside, The Bright is a huge luminous mass. The Eclipse looks bright; you can see into a fractured Seam-thick interior.

From inside, the Eclipse is a dark smoky wall. Aethora is gone. The bowl is a brutalist maze of gates, walls, and towering concrete — the Bright’s defense, built to protect the Core and trap those the calling lured in.

### The Eclipse and Umbras

The Eclipse expands as the Core grows. **Umbras** are the darkest weak spots — entry and mid-match Stitching return. Deep Plum lives here. Exit is the brightest stretch of the Eclipse, intermittent — not the Umbra door you used.

### Terrain and light gradient

Hex middles show splice, monolith, and bleach. Rim near the inner Eclipse reads darker and greyer. Center overexposes toward the Core — bleached Bone, denser Seams, stronger Bright energy. Seams are curtain tokens, not printed hex borders. Brief Seam residue can haze a path after a curtain ends.

Outside the Bright, Aureate districts lean darker industry under ivory towers. Kardia Brightforges work in optimistic civic light. Inside, those atmospheres arrive only as torn pieces mashed into the anomaly’s maze.

### The Bright Core

A reverse black hole of light at dead center. Enormous Bright emission. No Chroma spray from the Core itself — Chroma only from the Seam abundance around it. Interior look unknown. Faction accents still win over Seam flood and Core bleach.

## Seams and Chroma

A Seam is a paper-thin **satin sheet** that erupts out of reality and drapes over an object, a body, or a stretch of landscape. The sheet itself is transparent glass-satin — looking through it is like peering through a shattered window. Fracture lines run through the sheet. Everything trapped inside is rewritten while the Seam lasts — steel becomes clockwork and crystal; rock becomes alien ice.

The Seam sheet is not a cyan curtain or a magenta curtain. Color lives in the **Chroma**, not in the sheet. Magenta, Cyan, and Searing Gold Tears move **together** through the cracks: dripping, oozing, and crawling along the shattered lines and the edges where the sheet meets the unaltered world. Chroma is toxic neon liquid light on clear fractured satin — never a solid colored wall of one Tear hue.

Every Seam is Bright energy fracturing reality. Inside the Bright this happens constantly. Splinters are Bright-powered Null-Flint and are a primary way crews cast Seams in a match. Players can cast Seams. Whether the event deck casts Seams is still open.

Seams always weep. The Bright does not eject Chroma. Chroma does not spew from the earth as a fountain.

A Seam is fleeting, like Splinter power. When it ends, the original attributes return. There is no permanent scar token. Kho'Lan and Adumbra can cleanse / pinch Seams. Lumari may work the weeping Chroma.

On the table, an active Seam reads as an upright acrylic curtain token with a duration. When it ends, remove it. Touch / exposure effects live only while the Seam (or its immediate weep) is relevant to the card.

Street says Tears / Bright-Tears. Refract Labs coined Chroma. Same liquid. Only Magenta, Cyan, and Searing Gold — always present together in the weep, not as separate monochrome sheets.

Reference: the knife half-normal, half-rewritten behind shattered satin glass; the box art Seam draping a monolithic ruin with mixed Chroma weeping from the cracks.

## Characters: acrylic standees

Characters are acrylic standees, not miniatures. Silhouette first. Slightly exaggerated proportions — larger weapons, obvious shoulders and cloaks — so the outline reads across a crowded fight inside the anomaly.

Detail inside the silhouette belongs on the card portrait. The standee carries outline, faction accent, and one prop that supports the loyal fantasy. One pose. Full body. Thick enough to cut from acrylic and still be recognized from the scrap.

The standee does not change when augments are tucked. Tucked strips on the tableau show what the character became this match.

These figures are gladiators for silhouette brief only: fighters built to read across a table. Fiction remains people who walked an Umbra into a Bright to harvest, contain, pinch, or seize power. Courage under a hard job. Asymmetry and Splinter housing show the toll of the work. The art does not sell PTSD ruin as the default face of a crew. Kardia faces read open, proud, and almost static — performed composure — with feeling breaking through in posture and eyes, not in collapse.

The world is original. Silhouettes, symbols, and costumes do not quote League of Legends champions or Aristeia teams.

## Faction shape language and accents

Each faction has a distinct shape language and a dedicated accent that pops against Bone / Ash / Greige and Seam light. Two characters in one faction share the accent, never the exact same pose or silhouette.

**Kardia** lean **civic-modern magitech**, not medieval. Blue and silver hard-light on tailored coats, braces, and tool fittings — Resting Light high fashion under ash: crests, etiquette, clean silhouettes held in the mud. Brightforged is **hazard gear under cloth**: about **20–30%** compact pearl appliances (braces, batteries, gauntlets, weapon housings) and **70–80%** coat and field cloth — coats worn over exo frames with cutouts for mounts. Never sealed plate shells, never chrome cyberlimbs as identity: **pearl white, faintly radiant**. Lit charge cells and tube work are fine if they read as Bright-battery / safe Chroma-handling craft, not Aureate Chroma-fuel tanks. Majestic containment units with golden Core-vault hearts on pearl frames. Optimistic civic craft in the storm.

**The Aureate** wear purple, white, and gold on industrial mass — cutthroat wealth, stolen Kardia frames with hissing chromatic fuel tanks, vents, failsafes, and canisters running hot. Still cloth-first where the body shows; the loud tech is the pressurized fuel line, not a sealed mecha shell. Polished display over grit.

Full hazard-gear rules: [armor and exosuits](armor-and-exosuits.md).

**Refract Labs** wear green and orange heat glow — unhinged experimental tech, brass, glass, hazard gear, glowing cables, Splinter and Chroma hardware ready to fail loud.

**Lumari** wear cyan and magenta — zealots of Bloom hunger, tattered rags over bodies rewriting under Tears. Body parts may sit inside localized Seams.

**Kho'Lan** wear white, red, and green on Gritty Greige — earthbound ritual tools, Null-Flint, organic structured fabrics, stone or metal adornments. The catch in the name.

**Adumbra** wear black, purple, and orange — sleek, sharp, calm. Intricate silhouettes that pass until detail betrays them. Disguised tech that suppresses and steers Chroma exposure.

## Device types

Containment units and chromatic fuel tanks must read as different objects at a glance.

**Containment units** (Kardia): pearl Brightforged frames with beautiful golden Core-vaults. Stable. Civic craftsmanship. Faint radiance.

**Chromatic fuel tanks** (the Aureate): erratic, pressurized Chroma canisters. Volatile. Cutthroat modification.

Proper model names remain open in [terminology](../terminology.md).

## Board and pieces

Hex board, two faces. Team games symmetrical. Free-for-all has its own layout. First playtest arena: the plain 9-by-13 board in the game-design doc. Painted spliced terrain comes after that test.

Ability levels are lines on a card. Augment strips stay readable when several hang off one ability. Physical power and ability power never share a color or a shape.

Hex-edge arcane / physical border marks retired with the old Seam-as-border fiction. New terrain read lives in hex middles, Seam tokens, and event cards.

## How the table reads

When someone looks across the table, information arrives in this order.

1. Which standee is which person, from silhouette and faction accent.
2. Which ability lines are unlocked (wooden cubes on the character card).
3. Which augment is attached to which ability, from the exposed edge alone.
4. Which global augments are changing the person.
5. What the current event wants, from one card left in public view.
6. Which Seam curtains are active, and how long they have left.
7. Device type: golden containment unit versus pressurized chromatic fuel tank.

Facing is not a rule. The standee should not imply that it is.

Anything that loses this order because the painting is more interesting than the icon gets redesigned.

## Cards, icons, and type

The illustration is painterly. The interface is flat, modern, and high-readability on Rich Cream with Structural Gold frames. Information over painterly detail on UI surfaces.

Icons are flat vector marks in the family of MOBA and ARAM skill icons, sitting on top of painterly art so they separate immediately. Threshold icons are identical across the whole game. Exact drawings are open. The two dials never share a color or a shape.

Type for rules and stats is clean, industrial, sans serif. Painterly lettering stays off the level lines.

Ability cards are a column of level lines. Cubes hide unopened lines. The card looks finished at level 1 and finished at full unlock.

Slot augments are strips tucked securely beneath ability cards. The only text that must survive tucking is the mechanical change on the exposed edge. Flavor on a tucked strip is wasted ink. Global augments are normal cards beside the tableau.

Statuses invented by one character live on that character’s tableau in the same type size as a level line.

Deployment / Umbra zones are printed. Respawn uses them. The event is a card, not a board state players must remember.

## Production constraints

Acrylic standees punish illustrations that only work as a full painting. Exaggerated silhouette does the recognition. Active Seam curtains may be upright acrylic with a visible duration. Tucked augment strips punish borders and frames that eat the one line of rules text. Cubes on cards need a margin so a wooden cube does not cover the next line. The team face of the board is symmetrical; the illustration accepts a mirror. Flavor can live on a single line under a character’s name; level lines stay clean. Colored rim light is part of the style; it cannot replace the faction accent.

## Out of bounds

Hyperrealistic 3D renders as the finish. Seams drawn as ground cracks, lava rifts, laser walls, or permanent hex borders. Permanent Altered scars after a Seam ends. Chroma spewing from the earth as the default Seam read. White as a Tear color. A factory as the arena identity. Umbras painted as general cover instead of Eclipse entry and deployment. Miniatures as the default piece. Line-of-sight scenery. A unique frame per character that breaks the shared card grammar. Faction crests more recognizable than the silhouette. A second standee every time an augment is tucked. Any figure a player could name as an existing champion by outline alone. Blood or fleshy gore as Bright, Seam, or Bloom language. PTSD ruin as the default harvester face. Soft fairy-glow Chroma. The rejected graviton sentinel as a visual north star.

## The first art test

Paper prototypes stay flat color and icons. The first painted test is five pieces. A player who has not read the rules should be able to answer:

1. A Kardia standee and a Refract Labs standee. Which one is approachable civic craft (coat, crest, clean battery), and which one is the unstable lab?
2. An ability card at level 1 and the same card at level 4. What got added?
3. Three tucked strips on that card. What do they change, without lifting them?
4. An event card. What should you be doing this round?
5. A golden containment unit beside a pressurized chromatic fuel tank. Which faction owns which device fantasy?
6. An upright Seam curtain mid-duration. What is rewritten inside, and where does the Chroma weep?

Seam light reads Magenta, Cyan, or Searing Gold on shattered satin glass. If the painting wins and the token rule disappears, the Seam fails.
