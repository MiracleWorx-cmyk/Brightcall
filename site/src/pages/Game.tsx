import { PageShell } from '../components/PageShell'
import { game } from '../content/lore'

export function Game() {
  return (
    <PageShell kicker="How it plays" title="The game" lede={game.pitch}>
      <section className="section">
        <h2>Locked feel</h2>
        <ul className="list-clean">
          {game.locks.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Objectives inside The Bright</h2>
        <ul className="list-clean">
          {game.objectives.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
