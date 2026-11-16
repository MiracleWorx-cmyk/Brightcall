/** Public primer copy. Leading lock: docs/terminology.md */

export const brand = {
  game: 'Brightcall',
  world: 'Oros',
  genre: 'Bright-punk',
  tagline: 'Walk an Umbra. Survive the Core.',
  support:
    'A fast hex brawler played entirely inside a cube of The Bright — civic-modern magitech against Bone, Ash, and Greige, where Seams erupt and scarce Chroma weeps at the cracks.',
}

export const energies = {
  chroma: {
    name: 'Chroma',
    street: 'Bright-Tears / Tears',
    blurb:
      'Torn reality made liquid — rareish, dangerous Bright-Tears that ooze from Seam edges. Pressurized Magenta, Electric Cyan, Searing Gold only — hazard accents, not wall paint. Street says Tears. Refract Labs coined Chroma. The Bright drinks it to grow.',
  },
  brightEnergy: {
    name: 'Bright energy',
    blurb:
      'Core emission and the force that causes Seams. Ambient light across the cube is generally survivable; Core proximity is lethal. Splinters are Bright-powered Null-Flint — crush one to cast a synthetic Seam. Only Kardia containment holds a Core without dumping the charge into Splinters.',
  },
  applications: [
    {
      name: 'Bloom',
      blurb:
        'Permanent mutation only when Chroma enters the body internally — eaten, drunk, or injected. External contact damages; it does not Bloom. Lumari drink Tears. Aureate controlled-Bloom infantry are injected.',
    },
    {
      name: 'Enhancement',
      blurb:
        'Temporary rewrite when a Seam wraps a Harvester or a weapon. Appetite wraps draft mid-match. Synthetic wraps come from Splinter-Crush.',
    },
    {
      name: 'Splintered',
      blurb:
        'Splinter-Crush path: Bright-powered Null-Flint smashed from a Core, crushed in a weapon chamber to cast a synthetic Seam Enhancement. Shared mutation card. Stays through Stitching.',
    },
    {
      name: 'Brilliance',
      blurb:
        'House Kardia craft: machined pearl-white Brilliance. Cube Bright cells glow bright white with refined stable charge and hiss white steam under load. Brilliance lets you handle Chroma safely.',
    },
    {
      name: 'Chroma-fuel',
      blurb:
        'Raw Chroma burned as fuel. Refract Labs concept. Kardia ban it. The Aureate weaponize it. Volatile. Devastating. Resting Light heresy.',
    },
  ],
  hardware: [
    {
      name: 'Containment unit',
      blurb:
        'Kardia Null-Flint vacuum hardware that holds a Bright Core. Golden Core-vault look. Proper name still open.',
    },
    {
      name: 'Chromatic fuel tank',
      blurb:
        'Holds raw Chroma for Aureate weapons. Pressurized canister look. Proper name still open.',
    },
    {
      name: 'Vessel',
      blurb:
        'A person who can absorb a Bright Core and live. Lumari end goal. Nobody has. Final title open.',
    },
  ],
}

export const bright = {
  title: 'The Bright',
  outside:
    'From the outside: a vast cube of glass-like light. Approach a face. Find a dark Umbra. Walk in. The Bright quiets on organic material — and turns violent while it tries to consume you.',
  inside:
    'From the inside: a peristaltic brutalist maze — square gates and concrete grinding organic matter toward the Core. Fractured gravity favors parkour leaps. Torn Kardia and Aureate structures sit fused in as poor reflections of outside reality. Seams wrap Harvesters as volatile Enhancements. Once in, you leave only by ending the Core.',
  eclipse:
    'The Eclipse is the six faces of the cube. It expands as the Core grows stronger and consumes more of Oros. Umbras — the darkest weak spots on a face — are entry, deployment, and mid-match Stitching return. Once inside, you leave only by ending the Core.',
  seams:
    'Every Seam is Bright energy — appetite or Splinter-Crush synthetic. Razor-thin satin with fractured-glass texture. Chroma bursts at eruption and weeps Magenta, Cyan, and Gold. A wrap on a Harvester or weapon is an Enhancement. Combat stress and organics escalate Seam violence. The Oru and Penumbra cleanse them.',
  core:
    'The Bright Core is a blinding white sphere of liquid light at dead center. Call of the Bright, the calling, and Brightcall name the same pull — maze motion and fractured gravity guide living matter inward. The Bright quiets on organic material and turns violent while consuming Harvesters. Ambient Bright energy across the cube is generally survivable. Proximity is lethal. Harvest takes the Core with Null-Flint containment; destroy shatters it into Splinters.',
}

export const eras = [
  {
    title: 'The First Light',
    blurb:
      "One known Bright. Oru divinity. First Survivor. Lumari coalesce. Kardia begin to branch. Rath's First Strike ends that Bright and births Splinters.",
  },
  {
    title: 'The Traveling Light',
    blurb:
      'Peoples follow reseeding Brights before Seed patterns are known. Roads and camps. First Harvest: Kardia contain a Bright Core with Null-Flint vacuum. Brilliance civic power begins. The age ends.',
  },
  {
    title: 'The Resting Light',
    blurb:
      'The present. Seed patterns mapped; cities at Seed intersections. Refract Labs coins Chroma and invents Chroma-fuel. The Aureate — former Kardia — seize the Bright order as barons and crime lords. House Kardia remains skilled. Penumbra pressure Bloomed politics from the walls.',
  },
]

export type FactionId =
  | 'kardia'
  | 'aureate'
  | 'refract'
  | 'lumari'
  | 'oru'
  | 'penumbra'

export const factions: {
  id: FactionId
  name: string
  accent: string
  accentVars: string
  motif: string
  origin: string
  play: string
  society?: string
}[] = [
  {
    id: 'oru',
    name: 'the Oru',
    accent: 'White, red, and green',
    accentVars: 'var(--oru)',
    motif:
      'Indigenous Wardens. Natural harmony. Anti-harvest. Null-Flint craft. Opposite of Penumbra. Not every Oru by blood walks with this faction.',
    origin:
      'Lived in harmony until the First Strike. Null-Flint-reliant — reject Bright cells, Chroma-fuel, and Splinters.',
    play: 'Silence. Denial. Raw Null-Flint vacuum. Empty Discharge.',
  },
  {
    id: 'lumari',
    name: 'Lumari',
    accent: 'Cyan and magenta',
    accentVars: 'var(--lumari)',
    motif:
      'Bloom extremists who drink Tears into the body and hunt a Vessel. They read The Bright as a conscious divine entity. Excess Bloom for extreme mutation and one-way missions.',
    origin:
      'Lineages after the First Survivor. Tear trials killed most and tempered a few. Tolerance is hierarchy. Rags are practical kit. Seams and Chroma are the god’s will.',
    play: 'Health as fuel. Bloom lines. Fast adaptation. Assassination and suicide runs.',
  },
  {
    id: 'kardia',
    name: 'House Kardia',
    accent: 'Blue and silver hard-light',
    accentVars: 'var(--kardia)',
    motif:
      'Oppressed Brightsmiths. Superior Brilliance craft, Bright cells, Zenith Relays — pride held under Aureate rule.',
    origin:
      'Branched from Oru ground after the First Survivor. First Harvest belongs to them. They alone forge Brilliance, containment, and Resonance craft in Core-powered smithies. Fake-stoic elegance; civic coats over sparse Brilliance.',
    society:
      'Large human city-nation with rare Oru. Brightsmith skill remains. Aureate crime lords hold the stolen Cores and the upper hand.',
    play: 'Finite Bright cells. Adaptable pressure. Readable brace. Civic craft in the storm.',
  },
  {
    id: 'refract',
    name: 'Refract Labs',
    accent: 'Green and orange heat',
    accentVars: 'var(--refract)',
    motif:
      'Scientific weapon-makers. The Bright is a volatile resource to exploit, study, and weaponize — not a god, not sacred nature.',
    origin:
      'Split from Kardia after the First Harvest. Coined Chroma. Pioneered Splinter-Crush synthetic Seam armory. Chroma-fuel theory. They do not contain Cores or forge Brilliance.',
    play: 'Spike and flee. Splinter-Crush Enhancements. Honest self-damage.',
  },
  {
    id: 'aureate',
    name: 'the Aureate',
    accent: 'Purple, white, and gold',
    accentVars: 'var(--aureate)',
    motif:
      'Barons and crime lords. Former Kardia who took the Bright order by syndicate methods.',
    origin:
      'They broke from Kardia, unified, and seized power through bribery, theft, extortion, and hijacked containment. Barons stay safe.',
    society:
      'Debonair tip over poor laborers. Controlled-Bloom infantry run robust hot metal frames. Valen — human Chroma-Smith — walks velvet over muscle with a Chroma arm and Resonance-inspired dagger. Penumbra can work those Bloomed soldiers from the shadows.',
    play: 'Hold the board. Late hijack. Mass. Chroma-fuel overclock. Death that breaches fuel lines.',
  },
  {
    id: 'penumbra',
    name: 'Penumbra',
    accent: 'Black, purple, and orange',
    accentVars: 'var(--penumbra)',
    motif:
      'Shadow order. The Bright is unnatural. They look down on Bright and Chroma dependence and greed.',
    origin:
      'They manipulate Bloomed cells and bodies (method still open) to pressure global politics. They also suppress Bloom and cleanse Seams.',
    play: 'Work Bloomed enemies. Push, pull, cleanse. Never permanently steal a Splintered card.',
  },
]

export const game = {
  pitch:
    'A tableau-builder hex brawler. Short matches. Strange builds. The board forces those builds to touch — inside The Bright, on spliced hexes, under Call of the Bright.',
  locks: [
    'Modes: 1v1, 2v2, 3v3, free-for-all up to six.',
    'Kills and objectives score. First to 15 victory points.',
    'Death is Stitching: return to your Umbra with the build intact.',
    'Shared Splintered deck: draw 3, keep 1 on mutation rounds — Splinter-Crush synthetic Seam weapon Enhancements.',
    'Enhancement drafts on rounds 1, 3, 6, 9, and 12 — fiction: appetite Seam wraps the Harvester. Path A (global) and Path B (slot) are table homes only.',
    'Printed Growth Track per character feeds dials; dual-gate ability lines need unlock cubes and dial requirements.',
    'Acrylic standees. Spliced terrain lives in hex middles. Seams are curtain tokens, not hex-edge borders.',
  ],
  objectives: [
    'Weeping Seam zones and king of the hill',
    'Containment unit oddball — pick up and secure',
    'Kill windows on live borders',
    'Stall Seams that shove',
    'Discharge: Null-Flint harvest a Core into containment (Bright ends), or pinch a weeping Seam',
  ],
}

export const heroesNote =
  'Design order starts with Kardia (Vesper as measuring stick), then the Aureate as hold-objective contrast. Vesper is the first locked brief: Oru among humans, signature trench, Brilliance sleeve, cube Bright cell Tithe, Resonance Glaive (Valen). Valen is human muscular sellout, slender Chroma arm, Resonance-inspired Chroma dagger.'

export const worldBits = [
  {
    title: 'Seeds and cities',
    blurb:
      'When a Bright ends, another must rise from a Seed. Resting Light scientists mapped those spawning zones; civilization sits at their intersections. Faith may call every cube one reincarnated Bright. Industry counts many instances under one law.',
  },
  {
    title: 'Resting Light present',
    blurb:
      'Fixed Bright sites are mapped. Cities rise on the safe ring outside whichever Eclipse stands. Mood language is calendar: Glimmer, Radiance, Sature, the Glare. Stitching returns patterned bodies to their Umbra. Splintered gear stays.',
  },
  {
    title: 'Two nations under pressure',
    blurb:
      'House Kardia forge Brilliance after losing Bright-order supremacy. The Aureate rule with stolen Cores, Chroma-fuel, and controlled-Bloom infantry. Penumbra work Bloomed politics from the shadows. Everyone else refuses one or both nations’ terms.',
  },
]
