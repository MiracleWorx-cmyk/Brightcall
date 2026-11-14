import { PageShell } from '../components/PageShell'
import { bright } from '../content/lore'

export function Bright() {
  return (
    <PageShell kicker="The anomaly" title={bright.title} lede={bright.outside}>
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
        <p className="omen">
          When the seams are weeping, Tears are in the air. Call of the Light thickens. Harvest weather.
          The Blinding may be near.
        </p>
      </section>
    </PageShell>
  )
}
