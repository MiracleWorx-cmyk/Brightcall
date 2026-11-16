# Website art pack (Lovable)

Generated Bright-punk stills for the public landing. Files live in `site/public/art/`.

**Style north stars:** `hero-harvester.png` (character) and `seam-curtain.jpg` (Seam / Chroma). Full lock + **scarce Chroma** rule: [art-direction.md](art-direction.md) → Style lock.

## Marketing keepers (only these)

| File | Use |
| --- | --- |
| `hero-harvester.png` | Home hero — full-bleed. Oru Vesper north star. Magenta on the glaive scratch only. **Style master.** |
| `seam-curtain.jpg` | Bright / Seams section — one transparent shattered satin sheet; Magenta + Cyan + Gold only on/through the curtain. **Seam / Chroma master.** |
| `chroma-vials.png` | Energies — contained Chroma in glass. Scarce dangerous liquid, not ambient splatter. |
| `seam-diagram.png` | Optional diagram aid for Seam structure (not a style master). |

Logomark inspiration (design reference, not a locked SVG): `docs/gdd/references/brightcall-logomark-inspiration-a.png` — bone field dominant, color concentrated.

Scarce-Chroma contrast inspiration (Lovable, design reference only — not a marketing keeper): `docs/gdd/references/lovable-chroma-splash-inspiration.jpg`.

## Site ↔ lorebook map

| Site route | Lorebook / source |
| --- | --- |
| `/` | Brand + harvester plate |
| `/world` | I. The World |
| `/bright` | II. The Bright (+ Seam curtain art; cube plate pending → BrightField stand-in) |
| `/timeline` | III. The Timeline |
| `/energies` | II energies / applications (terminology Appendix) |
| `/factions` · `/factions/:id` | IV–X faction chapters |
| `/heroes` | GDD character briefs |
| `/game` | GDD board glossary / game design |

Public primer copy lives in `site/src/content/lore.ts`. Leading lock remains `docs/terminology.md` + `docs/lore/`.

## Rejected / culled — do not use

These stay **out** of the pack and out of site pages. Do not re-add from merge, cloud worker, or Explorer restore without a new Dirk-approved SD3 pass:

- `the-bright.png` (cube exterior — culled; Bright page uses BrightField until regen)
- `seam-eruption*.png`
- `chroma-liquid*.png`
- `vesper-bright-cell.png`, `vesper-cell-remove*.png`
- Duplicate vial aliases (`aureate-fuel-rig-f.png`, `refract-chroma-vials.png`) — use `chroma-vials.png` only
- ambient Chroma wall / failed cell / glove / tank / cube-variant miss plates
- `brightcall-logomark-inspiration-c.png`

Root copies of culled plates are gitignored.

## Lovable wiring (paste)

1. **Home hero** — full-bleed `hero-harvester.png`. Brand **Brightcall** dominant. Tagline: *Walk an Umbra. Survive the Core.* CTAs: Enter The Bright / How it plays.
2. **Bright** — no missing cube file; Seam section uses `seam-curtain.jpg`.
3. **Energies** — `chroma-vials.png` only.
4. World / Timeline / Factions / Heroes / Game — copy from lore.ts aligned to the lorebook; no orphan art paths.

Aesthetic lock stays in [art-direction.md](art-direction.md). English only.
