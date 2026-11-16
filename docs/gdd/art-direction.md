# Art direction

**Brightcall.** World: Oros. Genre: Bright-punk.

The look below is settled. The table still has to read at a glance. Words: [terminology](../terminology.md). Lorebook: [The Bright](../lore/02-the-bright.md). Table physics: [board glossary](board-glossary.md).

Leading visual truth:

1. [`site/public/art/hero-harvester.png`](../../site/public/art/hero-harvester.png) — character / close action north star
2. [`site/public/art/seam-curtain.jpg`](../../site/public/art/seam-curtain.jpg) — Seam / Chroma north star (also [`references/seam-curtain.jpg`](references/seam-curtain.jpg))

`the-bright.png` (cube exterior) is **culled** until a new scarce-Chroma SD3 pass. Do not restore old miss plates. Culled list: [website-art.md](website-art.md).

## Style lock (website & marketing stills)

**Master plates.** Character stills match plate 1. Any Seam or Chroma still must match plate 2: one transparent shattered satin / cracked-glass curtain draped across an opening; Magenta + Cyan + Searing Gold as liquid neon on and through that sheet — never paint splatters on bare concrete with no curtain.

**Chroma is scarce and dangerous.** Fortiche contrast still wins — but neon is a *hazard accent*, not wallpaper. Most of every frame stays Bone / Ash / Greige (and Bright-white Core light). Magenta / Cyan / Gold appear only where Tears actually are: Seam cracks, weapon scratches, contained vials/fuel lines, vent exhaust. Not graffiti on walls. Not ambient paint rain. Hero north star: `hero-harvester.png` (magenta lives on the glaive scratch, not the city). Logo vibe reference: `docs/gdd/references/brightcall-logomark-inspiration-a.png` (color concentrated, bone field dominant). Contrast vibe reference (Lovable, design only): `docs/gdd/references/lovable-chroma-splash-inspiration.jpg` — dead bone field, one violent Magenta/Cyan/Gold splash; not a site still, not character or place lock.

**One pipeline.** Stability **SD3 only** (`scripts/generate-brightcall-art.mjs`, model `sd3-large`). Mixing SD3 with Cursor GenerateImage or any other model breaks the look. If SD3 has no credits or the API fails, **stop and tell Dirk** — do not generate substitutes on another model.

**Locked finish.** Studio Fortiche / Arcane neighborhood: stylized realism, thick confident brushstrokes, sharp silhouette edges, graphic high-contrast lighting, blown rim light, sparse Magenta/Cyan/Gold Chroma against Bone–Ash–Greige. Painterly blocks of color, not soft airbrush fog. Not photoreal. Not hyperreal 3D. Not soft painterly concept art. Not anime cel.

**Prompt block (paste every time).**

```text
Digital 2D painting, Studio Fortiche style, Arcane TV, Brightcall Bright-punk.
Match the style of the Brightcall harvester plate: thick confident brush strokes, sharp graphic silhouettes,
high-contrast cinematic rim light, Bone Ash Greige ground dominant, sparse Magenta Cyan Gold Chroma only at
Seam cracks / weapon Tears / fuel vents — rare dangerous neon, not ambient paint splatters.
Stylized realism, painterly blocks, no photorealism, no 3D render, no soft generic concept art, no anime.
```

**Negative block.**

```text
photorealistic, 3d render, unreal engine, soft airbrush concept art, anime, cartoon chibi,
generic fantasy oil painting, muddy grimdark, blood, gore, text, watermark, logo,
neon paint graffiti on concrete without a Seam curtain, solid colored energy wall,
chroma as ambient spray with no transparent shattered satin sheet,
chroma splattered everywhere, rainbow paint rain, walls covered in neon drips
```

**QA.** Hold the new still next to `hero-harvester.png`. If brush language, edge sharpness, or lighting family do not match at a glance, regenerate. If Magenta/Cyan/Gold cover more than a minority of the frame with no Seam/fuel/weapon source, regenerate. Subject accuracy never beats style match.

## Core aesthetic

Genre: **Bright-punk** — between fantasy and sci-fi; modern-gloomy steampunk cousin; extreme high contrast; Sin City read (Bone/Ash/Greige ground + sparse Magenta/Cyan/Gold Chroma hazard accents). Stylized realism, painterly finish, sharp brushstrokes, rich texture, light cartoon exaggeration for standee read. Beautiful and lethal. Master plate `hero-harvester.png` wins when a still drifts.

Resting Light Kardia may read **civic-modern magitech** (varied civic coats and tailored fashion, compact pearl Brilliance, Bright cells of bright-white charge) — Bright-punk grit with a modern silhouette — without becoming Earth sci-fi. **Vesper’s trenchcoat is unique to her**, not a faction uniform. No digital tech, screens, LEDs, internet, or modern firearms. Power is Bright energy or Chroma. Aureate stay dirtier-industrial; Refract stay hazardous lab.

The physical world is heavy: **Bone, Ash, and Greige**. That is the default frame. **Chroma** is rareish toxic neon — pressurized, dangerous, never casual décor. When it appears it hits hard against the grit; most of the image stays grey. Shadows are **bruised** (plum, olive, charcoal), never strip-book flat black. The Bright’s white Core light can dominate a landscape plate without needing Tears everywhere.

No grimdark mud as the whole mood. No soft organic landscape as the default ground. No blood, fleshy gore, or wound imagery in the Bright’s visual language. No hyper-realistic 3D renders as the finish. The board is not a factory floor. The board is the chaotic, surreal interior of **The Bright**.

## Color system

### Physical world — Bone, Ash & Greige

**Alabaster Bone** carries brutalist architecture and bleached stone — it shows scratches and fight damage. **Humans** are the common city race — pale to varied human skin, ordinary stature. **Oru** skin is black with a faint stone glimmer: very large bodies, durable like carved rock; leading plate `site/public/art/hero-harvester.png`. **Brilliance** gear sits brighter than Bone: pearl white with a faint radiance, so Kardia craft reads as living Core light rather than stone. Fiction lock: that metal handles Chroma safely — useful on tools that meet weeping Tears. **Bright cells** hold bright-white Bright energy in Brilliance shells. **Heavy Ash** is weathered concrete, dust, raw stone, war-torn ruin weight. **Gritty Greige** is weathered leather, canvas, Oru field cloth — it bridges light and dark without soft sand.

### Shadows — Bruised Darkness

**Deep Plum** lives in the deepest shadows, ravines, Umbra wells — bruised contrast under neon. **Industrial Olive** sits on metal, copper, Aureate and Refract gear shadows — toxic and old. **Charcoal** marks explosion edges, soot around Seams, where light dies.

### Volatile Chroma — toxic neon

**Pressurized Magenta** flows and levitates on Seam glass — oil-slick glow on bone stone. **Electric Cyan** is radioactive blue on reality tears and active Splinter tech. **Searing Gold** is liquid sun / hot plasma — raw Call of the Bright hunger.

Chroma is not soft fairy magic. It is overpressurized chemical heat against a grey world — scarce enough that a weep or vial reads as a crisis, not a texture pass.

### Interface — flat and clean

**Rich Cream** for text panels, ability cards, tableaus — soft contrast under black type. **Structural Gold** for vector lines, icon frames, card edges — premium read. **Chroma Gradients** (cyan → magenta) for energy meters, level strips, Splinter Enhancements only — a clean graphic of board chaos.

Costume and ground stay in Bone / Ash / Greige / faction accents. Tears on the board stay Magenta, Cyan, and Searing Gold. If they share one dominant color, standees disappear.

## The arena: inside the anomaly

Matches take place entirely inside The Bright — a cubic volume, peristaltic brutalist maze inside, brighter toward a spherical Core.

### Outside vs inside

From outside, The Bright is a huge luminous **cube**. Each Eclipse face looks bright; you can see into a fractured Seam-thick interior.

From inside, an Eclipse face is a dark smoky wall. Oros is gone. The cube interior is a brutalist maze of gates, walls, and towering square concrete — the Bright’s defense, built to protect the Core and trap those the calling lured in. The maze moves in peristaltic waves that guide organic matter toward the Core. Fractured gravity favors parkour leaps. Torn Kardia and Aureate structures appear as poor reflections of outside reality fused into the cage.

### The Eclipse and Umbras

The Eclipse is the six faces of the cube. It expands as the Core grows. **Umbras** are the darkest weak spots on a face — dark doorways in a wall of light; entry and mid-match Stitching return. Deep Plum lives here. There is no walk-out while the Bright stands — Core Null-Flint harvest or destroy ends it.

### Terrain and light gradient

Hex middles show splice, monolith, and bleach. Edge near the inner Eclipse reads darker and greyer. Center overexposes toward the Core — bleached Bone, denser Seams, stronger Bright energy. Seams are curtain tokens, not printed hex borders. Brief Seam residue can haze a path after a curtain ends. Combat stress and organic presence escalate Seam violence in a zone.

Outside the Bright, Aureate districts lean darker industry under ivory towers. Kardia Brilliance forges and Zenith Relays work in optimistic civic light. Inside, those atmospheres arrive as torn civic pieces mashed into the anomaly’s maze — the Bright’s poor attempt to resemble reality.

### The Bright Core

A perfectly smooth blinding-white **sphere** of liquid light at dead center — reverse black hole of light. Enormous Bright emission. No Chroma spray from the Core itself — Chroma only from the Seam abundance around it. What the inside of a Core looks like is unknown. Faction accents still win over Seam flood and Core bleach.

## Seams and Chroma

A Seam is a paper-thin **satin sheet** that erupts out of reality and drapes over an object, a body, or a stretch of landscape. The sheet itself is transparent glass-satin — looking through it is like peering through a shattered window. Fracture lines run through the sheet. Everything trapped inside is rewritten while the Seam lasts — steel becomes fused civic lattice and Bright-scarred glass; rock becomes bleached anomaly stone. A Harvester wrap reads as an **Enhancement**.

The Seam sheet is not a cyan curtain or a magenta curtain. Color lives in the **Chroma**, not in the sheet. At eruption, Tears burst violently from the cracks and linger at the origin. While the Seam lasts, Magenta, Cyan, and Searing Gold also weep **together** through the cracks and edges. Chroma is toxic neon liquid light on clear fractured satin — never a solid colored wall of one Tear hue. External contact is damage hazard; Bloom only if Chroma enters the body internally.

Every Seam is Bright energy fracturing reality. Inside the Bright this happens constantly. Splinters are Bright-powered Null-Flint; crushing one casts a synthetic Seam — Splinter-Crush chambers on Bright-punk rifles and melee wrap the weapon as an Enhancement. Whether the event deck casts Seams is still open.

Seams always weep, and they burst Chroma at eruption. The Bright does not eject Chroma from the Core. Chroma does not spew from the earth as a fountain — it leaves through Seam cracks.

A Seam is fleeting, like Splinter power. When it ends, the original attributes return. There is no permanent scar token. The Oru and Penumbra can cleanse / pinch Seams. Lumari may work the weeping Chroma.

On the table, an active Seam reads as an upright acrylic curtain token with a duration. When it ends, remove it. Touch / exposure effects live only while the Seam (or its immediate weep) is relevant to the card.

Street says Tears / Bright-Tears. Refract Labs coined Chroma. Same liquid. Only Magenta, Cyan, and Searing Gold — always present together in the weep, not as separate monochrome sheets.

**North star:** [`seam-curtain.jpg`](../../site/public/art/seam-curtain.jpg) — translucent fractured curtain across a brutalist void; Chroma blobs and drips only on the sheet. Also: the knife half-normal, half-rewritten behind shattered satin glass; the box art Seam draping a monolithic ruin with mixed Chroma weeping from the cracks.

**Reject as Seam art:** neon paint on walls/floor with no satin sheet; solid colored energy walls; Chroma as ambient graffiti; Chroma covering most of a frame with no Seam/fuel/weapon source; white void “rewrite” halves with no curtain.

## Characters: acrylic standees

Characters are acrylic standees, not miniatures. Silhouette first. Slightly exaggerated proportions — larger weapons, obvious shoulders and coats — so the outline reads across a crowded fight inside the anomaly.

Detail inside the silhouette belongs on the card portrait. The standee carries outline, faction accent, and one prop that supports the loyal build. One pose. Full body. Thick enough to cut from acrylic and still be recognized from the scrap.

The standee does not change when Enhancements are tucked. Tucked strips on the tableau show what the character became this match.

These figures are Harvesters for silhouette brief only: crews built to read across a table. Fiction remains people who walked an Umbra into a Bright to harvest, contain, pinch, or seize power. Courage under a hard job. Asymmetry and Splinter housing show the toll of the work. The art does not sell PTSD ruin as the default face of a crew. Kardia faces read open, proud, and almost static — performed composure — with feeling breaking through in posture and eyes, not in collapse.

The world is original. Silhouettes, symbols, and costumes do not quote League of Legends champions or Aristeia teams.

## Faction shape language and accents

Each faction has a distinct shape language and a dedicated accent that pops against Bone / Ash / Greige and Seam light. Two characters in one faction share the accent, never the exact same pose or silhouette.

**Kardia** lean **civic-modern magitech**, not medieval. Blue and silver hard-light on tailored coats, braces, and tool fittings — Resting Light high fashion under ash: crests, etiquette, clean silhouettes held in the mud. Brilliance is **scarce civic craft under cloth**: Vesper’s body budget is about **one full arm and shoulder** plus **one glove** on the other hand — rare **organic** cast-to-fit pearl sleeve (very light blue gleam on the metal), **cube** Bright cell on the weapon shoulder for fast swap, coat cutouts framing the metal. Brilliance conducts Bright only in part — cells stay replaceable. Never sealed exosuits, never hazard-suit mechs, never chrome cyberlimbs as identity. Charge in the glass is **bright white / off-white**; cyan is Chroma, not cell light. Bright energy through craft: calm white stream at rest, stronger white wind in motion, faint white smoke-cloud on impact — extremely subtle. Zenith Relays are civic energy substations (appearance open). Majestic containment units with golden Core-vault hearts on pearl frames. Proud civic craft under Aureate pressure. Arm study: `docs/gdd/references/vesper-brilliance-arm-inspiration.jpg`. Cell refs: `docs/gdd/references/vesper-full-bright-cell.png`, `docs/gdd/references/vesper-shoulder-mount.png`.

**The Aureate** wear purple, white, and gold on industrial mass — cutthroat wealth, stolen Kardia frames with hissing chromatic fuel tanks, vents, failsafes, and canisters running hot. Controlled-Bloom infantry mass. Baron leaders stay out of The Bright. Still cloth-first where the body shows; the loud tech is the pressurized fuel line, not a sealed mecha shell. Polished display over grit. Chroma exhaust is thick and lingering: about **60% Magenta**, **35% Cyan**, **15% Gold** sparks — corrosive steam that clings and stains — same law for Architect and grunt; only the *delivery* changes.

**Valen (Architect)** — refined tip of the spear. Human slender-muscular sellout in a **white high-collar formal coat-vest** (primary plate) or purple blazer beat — **never** Vesper’s trench, **never** Brilliance. Slender anatomical **Chroma** prosthesis (right): gold plating over dark chassis (Brightsmith *skill*, Aureate metal); **hose-free** — no external wires/fuel lines; **micro Chroma ampules** flush in forearm/wrist behind crystal; jet-engine venting on the 60 / 35 / 15 mix. Left hand: Resonance-inspired Chroma dagger (working name Resonance Dagger). Plates: `docs/gdd/references/valen-line-concept.png` (primary), `docs/gdd/references/valen-chroma-arm-inspiration.jpg` (arm study), `docs/gdd/references/valen-line-concept-b.png` (second).

**Controlled-Bloom infantry** — well-made, robust, heavier metal; not gold showcase, not Brilliance, not rust fantasy. **Oversized Chroma canisters** on back or chest; **long hoses** to weapons and mounts. Same exhaust mix; louder leaks at hose joints.

Full civic kit rules: [civic field kit and Brilliance](armor-and-exosuits.md).

**Refract Labs** wear green and orange heat glow — unhinged experimental tech, brass, glass, field harnesses, glowing cables, Splinter-Crush chambers and Chroma hardware ready to fail loud.

**Lumari** wear cyan and magenta — Bloom extremists, tattered rags over bodies rewriting under Tears. Body parts may sit inside localized Seams.

**The Oru** wear white, red, and green on Gritty Greige — field cloth, raw Null-Flint crystals, structured fabrics, stone adornments. Indigenous Warden silhouette. Race and faction share the name; not every Oru walks with the wardens.

**Penumbra** wear black, purple, and orange — sleek, sharp, calm. Intricate silhouettes that pass until detail betrays them. Shadow order; resent the unnatural Bright; Bloomed leverage for politics (method open).

## Device types

Containment units and chromatic fuel tanks must read as different objects at a glance.

**Containment units** (Kardia): pearl Brilliance frames with beautiful golden Core-vaults. Stable. Civic craftsmanship. Faint radiance.

**Bright cells** (Kardia): Eminence-pattern (VE-3) Brilliance cubes ~Rubik’s-cube scale; bright-white charge; pin receivers; white steam vent on seat/strike. Issued charged; empties discarded.

**Chromatic fuel tanks** (the Aureate infantry / mercenary “vial”): oversized pressurized Chroma canisters on back or chest, long hoses to tools. Well-made robust grit — not gold, not Brilliance. Volatile. Exhaust Magenta-heavy with Cyan and Gold. Full brief: [references/aureate-mercenary-canister-design.md](references/aureate-mercenary-canister-design.md).

**Architect ampules (Valen):** micro-pressurized glass cartridges seated flush in the Chroma prosthesis forearm — refined delivery of the same fuel, not a different substance. Arm study: [references/valen-chroma-arm-inspiration.jpg](references/valen-chroma-arm-inspiration.jpg).

**Chroma vial rack (working plate):** `site/public/art/chroma-vials.png` only. Magenta / Cyan / Gold liquid Tears in glass under valves and fumes — strong Chroma atom. Reads more Refract lab glassware than Aureate infantry tankage; Valen’s forearm ampules sit closer to this *scale* of glass than to grunt kegs.


Proper model names remain open in [terminology](../terminology.md).

## Board and pieces

Hex board, two faces. Team games symmetrical. Free-for-all has its own layout. First playtest arena: hex-patch with voids — [playtest/hex-patch-arena-v0.md](playtest/hex-patch-arena-v0.md). Painted spliced terrain comes after that test.

Ability levels are lines on a card. Enhancement strips stay readable when several hang off one ability. Physical power and ability power never share a color or a shape.

Hex-edge arcane / physical border marks retired with the old Seam-as-border fiction. New terrain read lives in hex middles, Seam tokens, and event cards.

## How the table reads

When someone looks across the table, information arrives in this order.

1. Which standee is which person, from silhouette and faction accent.
2. Which ability lines are unlocked (wooden cubes on the character card).
3. Where the Growth Track sits this round (public dial curve on the sheet).
4. Which Path B Enhancement is attached to which ability, from the exposed edge alone — verb still readable.
5. Which Path A (global) Enhancements are changing the person.
6. What the current event wants, from one card left in public view.
7. Which Seam curtains are active, and how long they have left.
8. Device type: golden containment unit versus pressurized chromatic fuel tank.

Facing is not a rule. The standee should not imply that it is.

Anything that loses this order because the painting is more interesting than the icon gets redesigned.

## Cards, icons, and type

The illustration is painterly. The interface is flat, modern, and high-readability on Rich Cream with Structural Gold frames. Information over painterly detail on UI surfaces.

Icons are flat vector marks in the family of MOBA and ARAM skill icons, sitting on top of painterly art so they separate immediately. Threshold icons are identical across the whole game. Exact drawings are open. The two dials never share a color or a shape.

Type for rules and stats is clean, industrial, sans serif. Painterly lettering stays off the level lines.

Ability cards are a column of dual-gate level lines. Cubes hide unopened lines. Dial requirements stay visible on unlocked lines. The card looks finished at level 1 and finished at full unlock.

The Growth Track prints on the character sheet as a short public strip — round marks and dial bumps readable without lifting cards.

Path B (slot) Enhancements are strips tucked securely beneath ability cards. The only text that must survive tucking is the mechanical change on the exposed edge, and it must leave the ability verb recognizable. Flavor on a tucked strip is wasted ink. Path A (global) Enhancements are normal cards beside the tableau.

Statuses invented by one character live on that character’s tableau in the same type size as a level line.

Deployment / Umbra zones are printed. Respawn uses them. The event is a card, not a board state players must remember.

## Production constraints

Acrylic standees punish illustrations that only work as a full painting. Exaggerated silhouette does the recognition. Active Seam curtains may be upright acrylic with a visible duration. Tucked Enhancement strips punish borders and frames that eat the one line of rules text. Cubes on cards need a margin so a wooden cube does not cover the next line. The team face of the board is symmetrical; the illustration accepts a mirror. Flavor can live on a single line under a character’s name; level lines stay clean. Colored rim light is part of the style; it cannot replace the faction accent.

## Out of bounds

Hyperrealistic 3D renders as the finish. Seams drawn as ground cracks, lava rifts, laser walls, or permanent hex borders. Permanent Altered scars after a Seam ends. Chroma spewing from the earth as the default Seam read. White as a Tear color. A factory as the arena identity. Umbras painted as general cover instead of Eclipse entry and deployment. Miniatures as the default piece. Line-of-sight scenery. A unique frame per character that breaks the shared card grammar. Faction crests more recognizable than the silhouette. A second standee every time an Enhancement is tucked. Any figure a player could name as an existing champion by outline alone. Blood or fleshy gore as Bright, Seam, or Bloom language. PTSD ruin as the default harvester face. Soft fairy-glow Chroma. The rejected graviton sentinel as a visual north star.

## The first art test

Paper prototypes stay flat color and icons. The first painted test is five pieces. A player who has not read the rules should be able to answer:

1. A Kardia standee and a Refract Labs standee. Which one is approachable civic craft (coat, crest, clean Bright cell), and which one is the unstable lab?
2. An ability card at level 1 and the same card at level 4. What got added, and which dial gates the new lines?
3. Three tucked Path B strips on that card. What do they change, without lifting them — and is the ability verb still readable?
4. A Growth Track strip beside the dials. What rises this round?
5. An event card. What should you be doing this round?
6. A golden containment unit beside a pressurized chromatic fuel tank. Which faction owns which device fantasy?
7. An upright Seam curtain mid-duration. What is rewritten inside, and where does the Chroma weep?

Seam light reads Magenta, Cyan, or Searing Gold on shattered satin glass. If the painting wins and the token rule disappears, the Seam fails.
