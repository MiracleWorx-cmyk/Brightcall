import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { factions } from '../content/lore'

export function Factions() {
  return (
    <PageShell
      kicker="Six names"
      title="Factions"
      lede="House Kardia and the Aureate face each other as nations. Refract Labs, Kho'Lan, Lumari, and Penumbra refuse both nations' terms in their own ways."
    >
      <div className="faction-grid">
        {factions.map((faction) => (
          <Link
            key={faction.id}
            to={`/factions/${faction.id}`}
            className="faction-tile"
            style={{ ['--faction-accent' as string]: faction.accentVars }}
          >
            <div className="faction-tile__glow" />
            <div className="accent">{faction.accent}</div>
            <h3>{faction.name}</h3>
            <p>{faction.motif}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}
