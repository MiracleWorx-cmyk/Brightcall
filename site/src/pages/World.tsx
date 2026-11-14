import { PageShell } from '../components/PageShell'
import { brand, worldBits } from '../content/lore'

export function World() {
  return (
    <PageShell
      kicker="The world"
      title={brand.world}
      lede={`A Bright-punk Fantasy world of anomalies, temporal shifts, and civic power built on contained light. Matches of ${brand.game} take place inside one Bright — not across the planet.`}
    >
      <section className="section split split-2">
        {worldBits.map((bit) => (
          <div className="panel" key={bit.title}>
            <span className="accent-bar" />
            <h3>{bit.title}</h3>
            <p>{bit.blurb}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Why crews walk in</h2>
        <ul className="list-clean">
          <li>
            <strong>Extract or hijack</strong>
            Walk a containment unit out through an Umbra — or steal one already nearly full.
          </li>
          <li>
            <strong>Pinch a Seam</strong>
            Shut the weeping before the dump finishes. Kho&apos;Lan still score that way.
          </li>
          <li>
            <strong>Bloom, Splinter, or steer</strong>
            Rewrite the body, spike the gear, or suppress someone already opened by Chroma.
          </li>
        </ul>
      </section>
    </PageShell>
  )
}
