import { PageShell } from '../components/PageShell'
import { eras } from '../content/lore'

export function Timeline() {
  return (
    <PageShell
      kicker="Ages of light"
      title="Timeline"
      lede="Three ages of light on Aethora. First Strike belongs to the First Light. First Harvest ends the Traveling Light. The Resting Light is now."
    >
      <section className="section era-rail">
        {eras.map((era, index) => (
          <div className="era" key={era.title}>
            <span className="era-index">0{index + 1}</span>
            <h3>{era.title}</h3>
            <p>{era.blurb}</p>
          </div>
        ))}
      </section>
    </PageShell>
  )
}
