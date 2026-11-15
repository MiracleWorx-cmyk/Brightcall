/** Public primer copy. Leading lock: docs/terminology.md */

export const brand = {
  game: 'Brightcall',
  world: 'Aethora',
  genre: 'Bright-punk',
  tagline: 'Walk an Umbra. Survive the Core.',
  support:
    'A fast hex brawler played entirely inside a cube of The Bright — civic-modern magitech against Bone, Ash, and Greige ground where Seams erupt with a Chroma burst and keep weeping at the edges.',
}

export const energies = {
  chroma: {
    name: 'Chroma',
    street: 'Bright-Tears / Tears',
    blurb:
      'Torn reality made liquid — the Bright-Tears that ooze from Seam edges. Pressurized Magenta, Electric Cyan, Searing Gold only. Street says Tears. Refract Labs coined Chroma. The Bright drinks it to grow.',
  },
  brightEnergy: {
    name: 'Bright energy',
    blurb:
      'Core emission. Massive pressure on a third quantum field triggers Seams. Ambient light across the cube is generally survivable; Core proximity is lethal. Splinters are Bright-powered Null-Flint — crush one to cast a synthetic Seam. Only Kardia containment holds a Core without dumping the charge into Splinters.',
  },
  applications: [
    {
      name: 'Bloom',
      blurb:
        'Permanent mutation only when Chroma enters the body internally — eaten, drunk, or injected. External contact damages; it does not Bloom. Lumari drink Tears. Aureate Altered Humans are injected.',
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
        'House Kardia craft: machined pearl-white Brilliance. Bright cells glow cyan with refined stable charge. Brilliance lets you handle Chroma safely.',
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
    'From the inside: a brutalist monolithic maze filling the cube. The Bright tries to eat Harvesters over time; Seams that wrap them grant volatile Enhancements. Once in, you leave only by ending the Core.',
  eclipse:
    'The Eclipse is the six faces of the cube. It expands as the Core grows stronger and consumes more of Aethora. Umbras — the darkest weak spots on a face — are entry, deployment, and mid-match Stitching return. Once inside, you leave only by ending the Core.',
  seams:
    'Bright energy pressures a third quantum field until a Seam shoots out — appetite or Splinter-Crush synthetic. Razor-thin satin with fractured-glass texture. Chroma bursts at eruption and weeps Magenta, Cyan, and Gold. A wrap on a Harvester or weapon is an Enhancement. Kho\'Lan and Penumbra cleanse them.',
  core:
    'The Bright Core sits at the dead center. Call of the Bright pulls living matter toward it — street mouths say the calling. The Bright quiets on organic material and turns violent while consuming Harvesters. Ambient Bright energy across the cube is generally survivable. Proximity is lethal. Harvest takes the Core with Null-Flint containment; destroy shatters it into Splinters.',
}

export const eras = [
  {
    title: 'The First Light',
    blurb:
      "One known Bright. Kho'Lan divinity. First Survivor. Lumari coalesce. Kardia begin to branch. Rath's First Strike ends that Bright and births Splinters.",
  },
  {
    title: 'The Traveling Light',
    blurb:
      'Peoples follow reseeding Brights. Roads and camps. First Harvest: Kardia contain a Bright Core with Null-Flint vacuum. Brilliance civic power begins. The age ends.',
  },
  {
    title: 'The Resting Light',
    blurb:
      'The present. Fixed sites. Refract Labs coins Chroma and invents Chroma-fuel. The Aureate steal Cores and rule as gilded barons. House Kardia Brightsmiths remain skilled and oppressed under that rule. Penumbra pull strings in the walls.',
  },
]

export type FactionId =
  | 'kardia'
  | 'aureate'
  | 'refract'
  | 'lumari'
  | 'kholan'
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
    id: 'aureate',
    name: 'the Aureate',
    accent: 'Purple, white, and gold',
    accentVars: 'var(--aureate)',
    motif:
      'Gilded barons. Current powerholders with stolen wealth and no innate Brightsmith skill.',
    origin:
      'Core theft made them a rival nation. They hijack Kardia containment. Defectors weaponized Chroma-fuel. Barons stay in ivory towers.',
    society:
      'Debonair tip over poor laborers. Altered Humans — Chroma-injected Bloom infantry — run crude overheating cast-iron and copper exosuits. Penumbra can Voice those Bloomed soldiers.',
    play: 'Hold the board. Late hijack. Mass. Chroma-fuel overclock. Death that breaches fuel lines.',
  },
  {
    id: 'kardia',
    name: 'House Kardia',
    accent: 'Blue and silver hard-light',
    accentVars: 'var(--kardia)',
    motif:
      'Oppressed Brightsmiths. Superior Brilliance craft, cyan Bright cells, Zenith Relays — pride held under Aureate rule.',
    origin:
      "Branched from Kho'Lan after the First Survivor. First Harvest belongs to them. They alone forge Brilliance and containment. Fake-stoic elegance; coats over exo.",
    society:
      'Original anomaly masters, marginalized by the Aureate. Skill remains. Wealth and Core custody do not.',
    play: 'Finite cyan Bright cells. Adaptable pressure. Readable brace. Civic craft in the storm.',
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
    id: 'kholan',
    name: "Kho'Lan",
    accent: 'White, red, and green',
    accentVars: 'var(--kholan)',
    motif:
      'Indigenous Wardens. Kho is the living world that does not weep. Lan is the promise to leave it whole. Apex predator doctrine — opposite of Penumbra.',
    origin:
      'Lived in harsh harmony until the First Strike. Defend the anomaly from industry. Raw Null-Flint only — reject Bright cells, Chroma, and Splinters.',
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
    id: 'penumbra',
    name: 'Penumbra',
    accent: 'Black, purple, and orange',
    accentVars: 'var(--penumbra)',
    motif:
      'Shadow purists. The Bright and Chroma are alien corruption. Anyone dependent on them is pathetic.',
    origin:
      'The Voice manipulates anyone who has Bloomed — including Aureate Altered soldiers. They also suppress Bloom and cleanse Seams.',
    play: 'Voice Bloomed enemies. Push, pull, cleanse. Never permanently steal a Splintered card.',
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
    'Enhancement drafts on rounds 1, 3, 6, 9, and 12 — fiction: appetite Seam wraps the Harvester.',
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
  'Design order starts with Kardia (Vesper as measuring stick), then the Aureate as hold-objective contrast. Vesper is the first locked brief: Oru Harvester, Brilliance exo under trench, Bright cell, Resonance Glaive.'

export const worldBits = [
  {
    title: 'Resting Light present',
    blurb:
      'Fixed Bright sites are mapped. Cities rise on the safe ring. Mood language is calendar: Glimmer, Radiance, Sature, the Glare. Stitching returns patterned bodies to their Umbra. Splintered gear stays.',
  },
  {
    title: 'Two nations under pressure',
    blurb:
      'House Kardia forge Brilliance under Aureate oppression. The Aureate rule with stolen Cores, Chroma-fuel, and Altered Bloom infantry. Penumbra Voice those Bloomed strings. Everyone else refuses one or both nations’ terms.',
  },
]
