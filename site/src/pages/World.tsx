import { PageShell } from '../components/PageShell'
import { brand, worldBits } from '../content/lore'

export function World() {
  return (
    <PageShell
      kicker="The world"
      title={brand.world}
      lede={`A Bright-punk world of anomalies, temporal shifts, and civic-modern power built on contained light. Matches of ${brand.game} take place inside one cube Bright — not across the planet.`}
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
            <strong>Harvest or hijack</strong>
            Null-Flint harvest takes a Core into containment and ends the Bright — or steal a unit already nearly full.
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
