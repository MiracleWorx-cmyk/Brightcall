import { PageShell } from '../components/PageShell'
import { energies } from '../content/lore'

export function Energies() {
  return (
    <PageShell
      kicker="Two energies · four applications"
      title="Chroma & Bright"
      lede="Chroma is the leak of torn reality. Bright energy is what the Core puts out at close range. They are not the same substance."
    >
      <section className="section split split-2">
        <div className="panel panel--tear">
          <h3>{energies.chroma.name}</h3>
          <p className="meta">Street: {energies.chroma.street}</p>
          <p>{energies.chroma.blurb}</p>
        </div>
        <div className="panel panel--core">
          <h3>{energies.brightEnergy.name}</h3>
          <p>{energies.brightEnergy.blurb}</p>
        </div>
      </section>

      <section className="section">
        <h2>Applications</h2>
        <ul className="list-clean">
          {energies.applications.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              {item.blurb}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Hardware &amp; the Vessel</h2>
        <ul className="list-clean">
          {energies.hardware.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              {item.blurb}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
