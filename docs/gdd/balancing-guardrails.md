# Balancing guardrails

Values are the hard part of this game, and they are still open. A digital kit can move damage from 100 to 95. Here, +1 is already a different card. These guardrails are the rules for writing numbers, so a fun idea gets rejected when it would make the table slow, solved, or unfair.

If a card idea breaks one of these, change the card. Do not add a second system to catch it.

## The pace

**Locked.**

- Everyone develops on the same clock. Kills, zones, and the oddball pay victory points. They do not pay stats, levels, or augments.
- Augments are drafted on rounds 1, 3, 6, 9, and 12. Five drafts, on those rounds only. Round 1 already contains an augment and an ability unlock. The unlock works, because base stats clear every level-1 threshold.
- Ultimates arrive around round 4 or 5 for everyone, unless that character's design says otherwise.
- The build is complete around round 15, so the mutated kit gets several rounds of real use. The match may run to 16 or 17.
- The match ends at 15 victory points, not at a fixed round.

**Guardrail.** Power that shows up only after the game is usually over is wasted design. If a line on a card needs round 14 to matter, it is a late-game line and the earlier levels have to be the card.

**Guardrail.** The gaps are part of the sequence. After round 1 the waits are two rounds, then three, then three, then three. Do not deal an extra augment because a player is behind. The catch-up is the shared clock, not a bonus draft.

**Open.** How many stat points the clock pays. Whether that is one point, or one point on every stat.

## The number scale

**Locked.** Flat damage. Health. Typed shields that absorb before health. No armor math, no magic-resist math. Thresholds replace formulas.

Your only fully worked example is small: 10 health, a magic shield of 7, 12 incoming damage, 5 left on health. Use that as the prototype scale until play says it is too swingy. A larger pool (the 20 to 30 range that was suggested) is a later test, not the default.

**Guardrail.** Stay in small integers. If a player needs a calculator, the card is wrong.

**Guardrail.** A threshold should add a behavior more often than it adds a point of damage. Extra range, a stun, a repeat, a push, a mark. Damage steps of +1 are legal and expensive. Two of them on the same ability is already a different character.

**Guardrail.** Geometry has a ceiling. Range, taunt radius, and area size stop at a printed maximum. Stacking cannot grow a taunt until it hits the whole map, especially if that taunt also applies crowd control. Range 6 is the "this is absurd" line until playtesting moves it.

**Guardrail.** A shield catches its own damage type. Writing "reduce all damage by X" recreates armor under another name.

## Thresholds, the Quick Shot pattern

This is the template, not a finished card. It is the clearest version of what you described.

| Level | What the card does |
| --- | --- |
| 1, the unlock | Range 2, a small amount of physical damage |
| 2 | 3 physical damage if physical power is 3 or more |
| 3 | 4 physical damage if physical power is 4 or more, and stun if ability power is 2 or more |
| 4 | The level 3 effect, and the shot repeats if movement speed is 3 or more |

**Guardrail.** Every level is readable on its own. A player should be able to point at one exposed line and know what changed.

**Guardrail.** Missing a threshold does something quiet, not something punitive. If your physical power is 2, the level-2 line simply does not upgrade the shot. The level-1 shot still happens.

**Guardrail.** The same ability is allowed to care about two stats. That is how a physical kit grows a magical trick without becoming a second character. It is also how an augment that swaps "physical" and "ability" suddenly completes a line the player thought they could never reach.

**Open.** Five printed levels versus four, once the base unlock is counted. Three levels on the ultimate versus a single unlock at round 4 or 5. Write the card blank until that budget is one sentence: "In 15 turns I unlock exactly these lines."

## Augments

**Locked.**

- One shared deck. Draw 3, keep 1.
- Drafts land on rounds 1, 3, 6, 9, and 12. The round-1 card is allowed to suggest the build. The later four are the mutations.
- Later unlocks and stat points exist so the player can steer toward that card. A build that can only be good if the deck cooperates again is too linear.
- Some augments belong to one ability. Some change the whole character, in the spirit of a global swap such as "ability power counts as physical power."
- An augment may be the wrong pick. An archer who forces a melee build is allowed to be bad at it. The game does not rescue every combination.
- Universal cards do not name a character's private resource. They say "your resource," or they ignore resources.

**Guardrail.** Prefer "when this hits, apply a mark" and "when a marked enemy is pushed, they take 1" over "+1 damage" stacked three times. The attack value can stay at 2 while the turn becomes a chain. That is the escalation you asked for: if this, then that.

**Guardrail.** A global augment changes which dial a card reads, or adds a trigger that any qualifying ability can trip. It does not rewrite four cards into the same blank bolt. After the mutation, the character is still recognizable.

**Guardrail.** One disgusting reach augment is the turn-1 exception. It is rare in the deck, and it still needs the movement to match. It is not a reason to print range 6 on basic kits.

**Working.** Two physical homes. Slot cards tuck under one ability, with the new text on the exposed edge, so five modifiers become a readable tail. Global cards sit beside the tableau. Overlays were considered and set aside as fiddly for a fast game.

## Luck, swings, and the thing you cannot do

**Locked.** Randomness stays. The charm is that the perfect script fails and a stranger script appears. Strategic choices stay inside that: which of the three cards, which ability to unlock, which stat to feed.

**Locked.** You cannot goldfish. A build that never has to enter a zone, carry the oddball, or hit a person is not a build in this game.

**Guardrail.** The event deck is how the lead changes hands. If the same player is the favorite from round 3 to round 15 in most playtests, the events are paying too little, or kills are paying too much, or Stitching is too slow.

**Guardrail.** One event cannot be worth the match. A single objective larger than a few kills makes the deck the winner. Points stay in a band around the kill reward until you have played both plans.

**Guardrail.** Dying does not delete the combo. The killer gets points and a tempo window. The dead player returns with Splintered cards, levels, and stats. Stripping the build on death punishes the experiment the game is for.

**Open.** Dice on attacks. Leave them out of the first prototype. Add them only if flat damage makes defense boring, and only on a choice the tank opts into. A mandatory roll on every hit will stall six players.

## Bookkeeping budget

Each player may track:

- Health, physical power, ability power, movement, physical shield, magic shield, on dials
- One personal resource
- Cubes on unopened ability lines
- A tucked tail of slot augments and a short row of global augments
- Status that the character's own tableau defines

**Guardrail.** A new status is legal when its reminder fits on that character's tableau. Silence blocking one ability for a turn is the model. A status that needs a table-wide reference card is a rulebook status, and this game wants almost none of those.

**Guardrail.** Cooldowns as a stack of tokens on every strong card will eat the early game. Gating is the level cubes. Denial is Silence, or an effect written on one character. If one ultimate truly needs a cooldown, it is a single cube on that card, with the rule printed under it.

**Guardrail.** Regen is on by default for health, and resource regen is part of the character. The rate has to lose to a committed attacker. If a tank regens as fast as two people can hit them, kills stop mattering and the objective plan becomes the only plan. That is a number to playtest, not a reason to delete regen.

## Identity

**Locked.** A large roster exists so that changing a character feels like changing someone. A blank sheet who drafts a lightning bolt is a different game. You wanted the first version of that feeling to be strong, which is why the kit is chosen before the match and then broken on purpose.

**Guardrail.** Every character needs one thing they do before any augment, and one fantasy for how an augment betrays that thing. If both the loyal build and the traitor build are the same cards with different dials, the character is a costume.

**Guardrail.** Two characters in the same faction should share a motive and a table habit, and should not share a kit. The Kardia pair can both be approachable without both being "shields and a shove."

## Fizzle and time

**Locked.** A combo the player spent the match building has to work when they are in range and they spend it. Priority systems that cancel a fired ability are out.

**Working.** Because you act on the board as it is, range is checked at the moment of the action. The hit lands. An augment may offer a delayed or aimed effect that enemies can leave. That risk is printed on the card and paid for with a bigger result.

**Guardrail.** Any decision that routinely takes longer than the effect gets cut. Line of sight, simultaneous planning, and passing a draft around the table already failed this test.

## Red flags on a new card

Stop and rewrite when a card does any of these:

- Adds a percentage, a subtraction from incoming damage, or a second formula
- Raises a range, radius, or duration with no printed cap
- Names mana, rage, or any other private resource
- Grants an augment, a level, or a stat point for scoring
- Creates a status the opponent cannot see on the tableau or the tucked edge
- Makes every character who takes it play the same turn
- Is only impressive after the 15-point race is usually finished
- Needs dice, a tape measure, or a debate about a hex edge
- Removes the build when the character falls
- Lets one player take their whole turn without ever being answerable on the board

## What to playtest first

One board: the playtest arena, 9 hexes wide and 13 rows deep, 12 steps between the two start hexes. The candidate real distance is 11. One health band, starting from the 10-point example. One kill value and one objective value that feel similar. Four characters, not twelve. Twenty augments, half slot and half global. Rounds 1, 3, 6, 9, 12. Unlock every turn. Ultimate at round 4. Test kit for movement and range: move 2, 3, or 4, and range 1, 2, 3, or 4, with range 6 only on an augment.

The questions for that session are narrow. Can turn 1 reach happen only with the disgusting augment? Does a missed threshold feel like a quiet miss or a dead turn? Does the tucked tail stay readable at five cards? Does the tank's objective plan score in the same afternoon as the killer's plan? Does anyone do math?
