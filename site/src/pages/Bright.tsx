import { PageShell } from '../components/PageShell'
import { bright } from '../content/lore'

export function Bright() {
  return (
    <PageShell kicker="The anomaly" title={bright.title} lede={bright.outside}>
      <figure className="art-bleed">
        <img
          src="/art/the-bright.png"
          alt="The Bright — a luminous cube of light over Aethora"
          width={1344}
          height={768}
        />
        <figcaption>The Bright from outside — a cube of glass-like light on Aethora.</figcaption>
      </figure>

      <p className="body-lead">{bright.inside}</p>

      <section className="section split split-2">
        <div className="panel">
          <h3>The Eclipse</h3>
          <p>{bright.eclipse}</p>
        </div>
        <div className="panel">
          <h3>The Bright Core</h3>
          <p>{bright.core}</p>
        </div>
      </section>

      <section className="section">
        <h2>Seams &amp; spliced terrain</h2>
        <p>{bright.seams}</p>
        <figure className="art-bleed art-bleed--tight">
          <img
            src="/art/seam-curtain.jpg"
            alt="A Seam curtain weeping magenta, cyan, and gold Chroma"
            width={1344}
            height={768}
          />
          <figcaption>A Seam — shattered satin glass, always weeping Chroma at the edges.</figcaption>
        </figure>
        <p className="omen">
          When the seams are weeping, Tears are in the air. Call of the Bright thickens — the calling is
          loud. Harvest weather. The Blinding may be near.
        </p>
      </section>
    </PageShell>
  )
}
