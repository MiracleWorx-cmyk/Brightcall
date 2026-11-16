# Playtest arena v0 — Hex-patch (maze slice)

**Status.** Playtest overwrite of the old 9×13 rectangle. Numbers are not lore-locked.  
**Fiction.** One match is fought on a **patch** inside The Bright’s peristaltic maze — not the whole cube. Missing hexes are voids between monoliths: you cannot stand there; you cannot walk through them.

## Rules of the grid

- Cells are **hexes**. Adjacent = shared edge.
- **Void** (`.`) = missing hex. Illegal to enter. Blocks the shortest path; you must branch around.
- **Floor** (`#`) = legal hex.
- **U** = Umbra / deployment (team face: two opposite Umbras).
- **H** = default hill / center objective hex.
- **O** = wing objective hexes.
- Range and move count along **legal floor only** (no flying over voids unless a card says so).

Distance lock to keep: opposing Umbras are about **11–12 walk-steps** apart on the shortest legal route (same meet timing as the old board).

## Team face (1v1 / 2v2) — ASCII

Flat-top hex rows. Odd rows indented. Voids carve a spine + two flank branches.

```
            .  .  #  #  U  #  #  .  .
          .  #  #  #  #  #  #  #  #  .
        #  #  #  .  #  #  #  .  #  #  #
      #  #  .  #  #  O  #  #  .  #  #  #
    .  #  #  #  #  #  #  #  #  #  #  #  .
      #  #  .  #  #  H  #  #  .  #  #  #
        #  #  #  .  #  #  #  .  #  #  #
          .  #  #  #  #  #  #  #  #  .
            .  .  #  #  U  #  #  .  .
```

**Read.**

- Top/bottom **U** = opposing Umbras (deploy on U; 2v2 shares the Umbra row as a pair).
- Center **H** = king-of-the-hill / primary Seam-prone zone.
- **O** = wing objectives (left/right of spine).
- Inner `.` columns = maze gaps — force flank branches or pay to contest the spine.
- Outer `.` = arena edge (beyond the patch).

**Shortest Umbra→Umbra** along the spine is designed to sit near 12 steps; flanks are longer. Measure on the printed sheet before session 1 and note the true count in the session log.

## What voids do in play

| Situation | Ruling (v0) |
| --- | --- |
| Walk into void | Illegal |
| Push / pull into void | Stop in last legal hex (or fall / damage — still open; v0 = **stop**) |
| Seam token on void | Not placed; Seams only on floor hexes |
| Line / arc abilities | Trace through floor; voids break adjacency chains |

## Event hooks (same five types)

- **Hill** → H  
- **Zones** → H + both O (or live Seam curtains on those hexes)  
- **Oddball** → containment token starts on H  
- **Kill window** → when fighting adjacent to H or a live Seam  
- **Stall** → hold a flank pocket (any floor hex with ≤2 exits)

## Still open after first paper session

Exact step count Umbra→Umbra on this ASCII. Whether voids deal damage on forced entry. Whether the patch “breathes” (event adds/removes a void for one round). FFA face layout.

## How to print

Print this page. Mark floor hexes with circles or a hex pad. Black out voids. Label U / H / O. Play with coins as standees until acrylic exists.
