import { Link, Navigate, useParams } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { factions } from '../content/lore'

export function FactionDetail() {
  const { id } = useParams()
  const faction = factions.find((entry) => entry.id === id)

  if (!faction) {
    return <Navigate to="/factions" replace />
  }

  return (
    <PageShell
      kicker={
        <>
          <Link to="/factions">Factions</Link>
          {` · ${faction.accent}`}
        </>
      }
      title={faction.name}
      lede={faction.motif}
      accent={faction.accentVars}
    >
      <section className="section split split-2">
        <div className="panel" style={{ ['--panel-accent' as string]: faction.accentVars }}>
          <h3>Origin</h3>
          <p>{faction.origin}</p>
        </div>
        <div className="panel" style={{ ['--panel-accent' as string]: faction.accentVars }}>
          <h3>At the table</h3>
          <p>{faction.play}</p>
        </div>
      </section>

      {faction.society ? (
        <section className="section">
          <h2>Society</h2>
          <p>{faction.society}</p>
        </section>
      ) : null}

      <p className="note">
        Roster drafts live in the design docs. Design order currently starts with the Aureate.
      </p>
    </PageShell>
  )
}
