# Game design

**Brightcall** is a tableau builder played on a hex board inside **The Bright** on **Oros**. The match is short, the builds get strange, and the board is there so those builds have to touch each other.

The inspiration is mid-match Enhancement chaos in the spirit of ARAM Mayhem, plus hex movement in the family of a skirmish game. Mechanics are free to reuse. Names, art, lore, and exact text from those games are not. The setting is Oros. It is not a tournament.

## What a match feels like

The game is fast chaos with real choices. Luck and weirdness are part of the charm. A player can aim a build and still be surprised. They cannot goldfish: the power has to survive contact with the other players.

Early on, people mostly cannot reach each other. The first contact is a positioning scuffle. Later, the same characters throw each other, jump, and cash in combo pieces. The thinking players enjoy is “what did I build, and what does this event reward,” not “which hex hides my shoulder.”

A finished combo resolves. Missing because someone stepped one hex away on a lower priority is the failure this design is built to avoid. A whiff is allowed only when the player picked an effect that says it can whiff.

## Players, time, and winning

Modes are 1v1, 2v2, 3v3, and free-for-all up to six. Both kills and objectives score. A tank who never gets a kill and holds the map has a real way to win. The race shape is first to 15 victory points — a playtest value, not a tuned one.

When you hit 0 health you come back. The build stays. Dying is time and a payout for the killer, then you are in the game again. The build is meant to be finished around round 15. A match can still be going at round 16 or 17 if nobody has 15 points. The round count is the build clock. The score is the match clock.

Team modes share one score. Free-for-all is personal. A kill pays the player who landed it. On your next activation after dying, the standee returns to your Umbra at full health. Temporary marks and shields clear. Splintered cards and unlocked ability levels stay.

Still settling: assist credit; the exact points for a kill versus an objective; whether respawn waits until the next round instead of the next activation; spawn protection on a small board.

## The board

Hexes. The match is a **patch** inside The Bright’s maze — not the whole cube. The arena shape is a **hex-patch** (roughly hexagonal cluster), not a mandatory rectangle. **Missing hexes (voids)** are legal design: no standing, no walking through — maze gaps that force branches and flanks.

The team map is symmetrical. Players start far enough apart that reaching someone on turn 1 takes an extreme range build plus a movement build. Range 6 is already extreme. Walk distance and ability range count along **floor hexes only**; voids break paths.

Free-for-all needs its own layout. The working plan is a double-sided board: one face for team games, one face for free-for-all. Free-for-all is aimed at odd counts (3 and 5). Four players might use it too.

Terrain lives as voids (structure), spliced paint in hex middles, and tokens — especially fleeting Seam curtains on floor hexes. Printed arcane / physical hex-edge borders are gone. Cover, line of sight, and “is the miniature’s shoulder hidden” are out.

The real team arena keeps about **11–12 walk-steps** between opposing Umbras on the shortest **legal** route (spine). A step is one hex of walking, counted until you would enter the other figure’s hex. Flank branches are longer on purpose. Range 1 is adjacent floor hexes.

Test kit feel (unchanged): slow move 2, normal move 3, fast move 4, melee range 1, short range 2, standard range 3, long range 4. Range 6 only exists as an Enhancement. A normal pair (move 3, range 3) who take the spine do not hit in round 1; they meet in round 2. Voids make “walk around” a real cost.

**Playtest v0 layout:** [playtest/hex-patch-arena-v0.md](playtest/hex-patch-arena-v0.md) — hex-patch with spine, flank branches, voids, Umbra / hill / wing objectives. The old 9×13 open rectangle is retired for playtesting.

Still settling: exact Umbra→Umbra step count on the printed patch; whether forced movement into a void stops or punishes; whether events can open/close a void for a round; FFA face; how a 3-player game uses the team face.

## Objectives and the event deck

An event deck is the volatility engine. The lead should swing. The ideal is that every turn, or at least every few turns, someone else can believe this round is theirs. If every star aligns, one player can still just win. That is allowed.

The deck decides what scores right now. The menu: zones, about three of them; king of the hill; an oddball you pick up and run with, which pays movement; a window where kills pay extra; a stall, where being hard to push is the point.

One event is live at a time. It names the zone, the carrier, or the payout, and it expires when the next event says so. Objectives and kills live in the same points band, so a defensive plan is not a consolation prize.

The fiction for that menu is the interior of The Bright on Oros — a cube of light filled with a peristaltic brutalist maze under fractured gravity, guiding organics toward a spherical white Core. The Eclipse is the faces of that cube. Umbras on those faces are deployment entry. Crews leave only when the Core ends (Null-Flint harvest or destroy). Seams erupt as razor-thin satin / fractured-glass curtains caused by Bright energy — cast synthetically when a Splinter is crushed, and cast by the Bright itself while it tries to consume Harvesters. At eruption Chroma bursts from the cracks; while active it weeps at the edges. Terrain and objects restore when a curtain ends. A Harvester or weapon wrap is an **Enhancement**. An active Seam is a zone. A containment unit in transit is the oddball. A shove into a Seam is a stall hazard. Violence near objectives is the kill window. Pinching a Seam (name still open) is a Discharge. So is harvesting a containment unit. The Oru and Penumbra cleanse. Lumari drink the weep. Bright energy causes Seams; Chroma is the ooze.

**Enhancements** are Seam wraps — temporary new combat power. In the world they vary a great deal. On the table, draft tiers (Weak / Moderate / Ultimate) are game language only — not lore nouns. Appetite wraps on Harvesters draft on rounds 1, 3, 6, 9, and 12. **Splintered** cards are the synthetic path: draw 3, keep 1 — Splinter-Crush chambers that smash Bright-powered Null-Flint and wrap a weapon in a fabricated Seam Enhancement. Refract pioneered that armory. **Bloom** requires Chroma taken internally.

Two homes on the tableau, two design paths — not a third card type:

- **Path A — Global / Structural.** Card beside the tableau. Rewrites rules the whole body obeys: dial conversions, baseline geometry, “whenever you [tag]…” riders. Soft map control across every qualifying action.
- **Path B — Slot / Trigger.** Strip tucked under one ability. Rewrites what that button does when pressed: “when you use this ability…,” repeats, local hazards, post-hit steps. Dense payoff, narrow window.

Prototype deck mix leans fun over glue: about half Path B triggers, about three-tenths Path A triggers and conversions, about one-fifth Path A flat dial bumps (Weak-tier glue). Dial-swap heists stay rare. Enhancements are modifiers — never a fifth ability with its own cube track.

Banked victory points stay banked. A push empties an unfinished container. No per-player fill meter.

Still settling: how often the deck flips; exact payouts; whether events also rewrite a rule for a round (forced movement, silenced terrain, a sudden long lane) or only move the objective.

## What each player brings

One character, with a fixed identity. A personal tableau — building happens there. Four ability slots: one passive, two actives, one ultimate. Before the match, those four slots are chosen from that character’s cards. The first roster target is about three cards per slot. Later sets add characters and more ability cards.

There is no character deck during play. Drawing your kit mid-game was considered and cut. One shared Enhancement deck for the whole table. Acrylic standees, because they set up faster, take less room, and stay readable while people get shoved around.

The first roster is 12 characters: two per faction. A smaller core of one per faction was suggested as a production step. The lean is toward 12 because faction pairs are interesting, either as something you play together or as a bonus when two of the same faction share a team. That pairing rule is not chosen yet.

## Development clock

Everyone grows on the same schedule. Kills and objectives do not buy power. That was rejected because the first winner would buy the next win.

At the start of your turn, including round 1, you unlock an ability or raise one of its levels. The base level is itself an unlock. Base stats are high enough to meet the level-1 threshold of every ability. The first unlock always does something.

The ultimate comes online for everyone around round 4 or 5. A character can break that on purpose. Players do not spend their early unlocks to “buy” the ultimate. If they did, someone would sit in a corner charging it.

Enhancements are drafted on rounds 1, 3, 6, 9, and 12. That is the full sequence: five drafts, on those rounds and no others. Fiction: the Bright’s slow consume — Seam wraps landing on the Harvester as Enhancements in steps. You draft before you spend that turn’s unlock, so the card can change the plan. Draft is draw 3, keep 1. A pass-around draft is too slow.

Dial growth is a printed **Growth Track** on each character sheet — per-round bumps, round milestones, or both. The track is public and fixed for that person. It replaces an open “raise any dial” choice for the first prototype. Path A conversions can still hijack the curve (ability power counting as physical power turns an ability-heavy track into a physical monster). Enhancements may add bonus dials on top; they must not be the only way to clear a level-2 line. Write the first roster against sparse tracks. If play feels starved, thicken the tracks — do not hide +1 damage on every Enhancement.

Still settling: whether the ultimate still has its own two or three levels after it unlocks. There is room to play the full build — something like five levels on a normal ability and three on the ultimate, with the base level counting so a step comes off. The cube budget and the 15-round clock have to be reconciled on paper before cards are written. See the guardrails doc.

## A turn

A working sequence, built so the truths above happen in an order that matches them.

1. If you are off the board, Stitching returns you at your Umbra at full health. Clear temporary effects. Keep the build, including every Splintered card, levels, and Growth Track progress.
2. On a Splintered round, draw 3 and keep 1. Tuck a Path B strip under a slot, or place a Path A card beside the tableau if it is global. Fiction: Splinter-Crush — a shard crushed in a chamber, synthetic Seam wrapping the weapon as Enhancement.
3. Unlock or upgrade one ability line (Gate 1 — the cube).
4. Apply this round’s Growth Track bump(s).
5. Activate. Look at the board as it is now. Spend your resource, fire open lines that meet their dial requirements (Gate 2), resolve tucked Path B text, trip Path A “whenever” clauses, deal flat damage.
6. Score anything you just earned.

Activation is alternating, one character at a time. Teams do not write a secret plan and reveal it. You fire at the board in front of you, so a combo in range hits. A team-based turn order was floated and not settled. Alternating activations are the version that answers the fizzle problem without a priority chart.

Movement has two candidates. Everyone has a base speed, and that speed can change. Or movement is printed on abilities, so the dash and the attack are the same choice. Both can exist: a small base step, plus extra movement written on specific abilities. A separate “move phase, then attack phase” makes positioning into the game this design wants to avoid.

Still settling: what a single activation may contain — one ability, or an ability plus its printed move; whether the passive is always on once unlocked; dice. Flat damage is the preference, with a playtest before dice are fully rejected.

## Combat, as the table sees it

Damage is a flat number. Health is a number. There is no armor formula and no magic-resist formula. A shield is a second number that empties first. Example: 10 health, magic shield 7, 12 incoming magic damage, 5 damage reaches health, 5 health remains.

Physical power and ability power are dials. Thresholds on abilities read those dials. Movement speed is also a threshold stat. The Quick Shot sketch uses it.

A magic shield catches magic damage. A physical shield catches physical damage. The other type goes to health. Shields are how a tank answers two ability-power threats, without a percentage.

Still settling: the health band (10 was an example, not a tuned pool); regen; mixed damage on one ability; whether a shield can be raised mid-attack.

## Components the prototype needs

Enough to play one faction pair and a handful of Enhancements. Not a production list.

A hex board with two deployment layouts sketched on paper. A tableau per player with four slots, a Growth Track on the sheet, and a strip where tucked cards stay readable. Ability cards with dual-gate level lines hidden by cubes. An Enhancement deck split between Path B slot strips and Path A global cards. An event deck of the five objective types. Dials for health, physical power, ability power, movement, and the two shields. A personal resource marker, defined by the character. Level cubes. A victory track that can pass 15. Acrylic standees, or labeled tokens until the art exists.

## What this document will not pretend

Values are not solved. Vesper is the first Kardia measuring stick in working prose ([vesper.md](characters/vesper.md)); her numbers are not locked. Oros is locked; open numbers are not. The board distance is a feeling with two candidate numbers. Those live in the other documents on purpose, so a clean turn summary cannot smuggle them in as rules.
