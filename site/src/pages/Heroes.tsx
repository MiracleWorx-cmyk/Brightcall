import { PageShell } from '../components/PageShell'
import { heroesNote } from '../content/lore'

export function Heroes() {
  return (
    <PageShell
      kicker="Roster"
      title="Heroes"
      lede="Twelve characters is the first roster target — two per faction. Acrylic standees. Silhouette first."
    >
      <p className="body-lead">{heroesNote}</p>
      <p className="note">
        This page will grow character sheets as Kardia anchors and Aureate dreadnoughts leave the draft
        stage.
      </p>
    </PageShell>
  )
}
