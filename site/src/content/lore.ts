/** Public primer copy. Leading lock: docs/terminology.md */

export const brand = {
  game: 'Brightcall',
  world: 'Aethora',
  genre: 'Bright-punk Fantasy',
  tagline: 'Walk an Umbra. Survive the Core.',
  support:
    'A fast hex brawler played entirely inside a cube of The Bright — civic-modern magitech against Bone, Ash, and Greige ground where Seams erupt as shattered satin curtains and Chroma weeps at the edges.',
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
      'Core emission and the force that causes Seams. Ambient light across the cube interior is generally survivable. Proximity to the Core is lethal. Splinters are Bright-powered Null-Flint that cast Seams. Only Kardia containment holds a Core without dumping the charge into Splinters.',
  },
  applications: [
    {
      name: 'Bloom',
      blurb: 'Chroma bound into living tissue. Lumari path. They still call the liquid Tears.',
    },
    {
      name: 'Splintered',
      blurb:
        'Null-Flint shards that touched a Bright Core, driven into gear or body. The shared mutation card. Stays through Stitching.',
    },
    {
      name: 'Brilliance',
      blurb:
        'Kardia craft powered by a contained Bright Core, or built to store and emit Bright energy. Stable. Pearl white, faintly radiant. Bright cells hold bright-white charge. Brilliance lets you handle Chroma safely.',
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
    'From the outside: a vast cube of glass-like light. Approach a face. Find a dark doorway. Walk in.',
  inside:
    'From the inside: a brutalist monolithic maze filling the cube — vast, unpredictable, temporally distorted. Matches happen entirely here — a chaotic splice of overwritten realities, not a factory floor.',
  eclipse:
    'The Eclipse is the six faces of the cube. It expands as the Core grows stronger and consumes more of Aethora. Umbras — the darkest weak spots on a face — are safe entry, deployment, and Stitching return.',
  seams:
    'Every Seam is Bright energy. Paper-thin shattered satin curtains erupt like a cast net, rewrite what they wrap, and always weep Magenta, Cyan, and Gold at the edges. They are fleeting — when they end, the original returns. Splinters cast them. Kho\'Lan and Adumbra cleanse them.',
  core:
    'The Bright Core sits at the dead center. Call of the Bright pulls living matter toward it — street mouths say the calling. Ambient Bright energy across the cube is generally survivable. Proximity is lethal.',
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
      'The present. Fixed sites. Refract Labs coins Chroma and invents Chroma-fuel. The Aureate steal Cores and rule as cutthroat wealth. Kardia remain larger and happier under pressure. Adumbra move in the walls.',
  },
]

export type FactionId =
  | 'kardia'
  | 'aureate'
  | 'refract'
  | 'lumari'
  | 'kholan'
  | 'adumbra'

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
      'Wealthiest power of the Resting Light: vicious, cutthroat, short on craft knowledge, long on opportunity.',
    origin:
      'Kardia who craved more. Successful Core theft made them a rival nation. They still cannot forge containment units, so they keep hijacking Kardia hardware. Defected smiths brought them Chroma-fuel. Baron leaders rarely enter The Bright.',
    society:
      'Few extremely rich. Many extremely poor laborers held by the dream of infinite wealth. Foot soldiers take controlled Bloom to survive fuel lines. Fewer people, less happiness than Kardia.',
    play: 'Hold the board. Late hijack of containment. Mass. Chroma-fuel overclock. Death that breaches fuel lines.',
  },
  {
    id: 'kardia',
    name: 'Kardia',
    accent: 'Blue and silver hard-light',
    accentVars: 'var(--kardia)',
    motif:
      'The civic heart. Larger nation. Brilliance craft, Bright cells, Zenith Relays. Containment skill. Working prosperity under Aureate pressure.',
    origin:
      "Branched from Kho'Lan after the First Survivor. First Harvest belongs to them. They alone house Bright Cores, forge Brilliance and containment units, and refuse Chroma-fuel.",
    society:
      'More people than the Aureate. Strong working economy. Happier. Not as rich. They prosper, yet Aureate theft holds them back.',
    play: 'Numbers. Coordination. Adaptable pressure. Readable brace. Optimistic civic military in the storm.',
  },
  {
    id: 'refract',
    name: 'Refract Labs',
    accent: 'Green and orange heat',
    accentVars: 'var(--refract)',
    motif:
      'The firm that renamed Bright-Tears. Science without the civic leash.',
    origin:
      'Split from Kardia after the First Harvest. Coined Chroma. Invented Chroma-fuel. They work the leak and scavenged Splinters. They do not contain Cores or forge Brilliance.',
    play: 'Spike and flee. Splintered tails that break loud. Honest self-damage.',
  },
  {
    id: 'kholan',
    name: "Kho'Lan",
    accent: 'White, red, and green',
    accentVars: 'var(--kholan)',
    motif:
      'The held ground. Kho is the living world that does not weep. Lan is the promise to leave it whole.',
    origin:
      'Oldest temper. First Light conservation. The catch in the name keeps Aethora and the Bright from being one word. They pinch Seams with Null-Flint, field procedure, and other Aethorian materials.',
    play: 'Silence. Denial. Empty Discharge. Material craft silhouette.',
  },
  {
    id: 'lumari',
    name: 'Lumari',
    accent: 'Cyan and magenta',
    accentVars: 'var(--lumari)',
    motif:
      'Bloom extremists who take Tears into the body and hunt a Vessel — a person who can absorb a Bright Core and live. Nobody has. Excess Bloom for extreme mutation and one-way missions.',
    origin:
      'Lineages after the First Survivor. Tear trials killed most and tempered a few. Tolerance is hierarchy. Rags are practical kit.',
    play: 'Health as fuel. Bloom lines. Fast adaptation. Assassination and suicide runs.',
  },
  {
    id: 'adumbra',
    name: 'Adumbra',
    accent: 'Black, purple, and orange',
    accentVars: 'var(--adumbra)',
    motif:
      'Secret order in every wall: pity for the amplified, hands on the Chroma-exposed.',
    origin:
      'Last into the Resting Light. Can suppress or cure Bloom and steer anyone Chroma has opened. Few can do it.',
    play: 'Push, pull, steer. Leverage. Never permanently steal a Splintered card.',
  },
]

export const game = {
  pitch:
    'A tableau-builder hex brawler. Short matches. Strange builds. The board forces those builds to touch — inside The Bright, on spliced hexes, under Call of the Bright.',
  locks: [
    'Modes: 1v1, 2v2, 3v3, free-for-all up to six.',
    'Kills and objectives score. First to 15 victory points.',
    'Death is Stitching: return to your Umbra with the build intact.',
    'Shared Splintered deck: draw 3, keep 1 on mutation rounds.',
    'Four ability slots per character. Shared augment drafts on rounds 1, 3, 6, 9, and 12.',
    'Acrylic standees. Spliced terrain lives in hex middles. Seams are curtain tokens, not hex-edge borders.',
  ],
  objectives: [
    'Weeping Seam zones and king of the hill',
    'Containment unit oddball — pick up and secure',
    'Kill windows on live borders',
    'Stall Seams that shove',
    'Discharge: harvest a containment unit (Bright ends), or pinch a weeping Seam',
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
      'Kardia house Bright Cores and forge Brilliance for happier working lives. The Aureate stole those Cores into wealth supremacy, burn banned Chroma-fuel, and Bloom infantry under control. Everyone else refuses one or both nations’ terms.',
  },
]
