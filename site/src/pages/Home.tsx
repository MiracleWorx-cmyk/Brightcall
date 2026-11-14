import { Link } from 'react-router-dom'
import { BrightField } from '../components/BrightField'
import { brand } from '../content/lore'

export function Home() {
  return (
    <section className="hero">
      <BrightField variant="hero" />
      <div className="hero-copy">
        <p className="hero-genre">{brand.genre}</p>
        <h1 className="hero-brand">{brand.game}</h1>
        <p className="hero-world">{brand.world}</p>
        <p className="hero-line">{brand.tagline}</p>
        <p className="hero-support">{brand.support}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/bright">
            Enter The Bright
          </Link>
          <Link className="btn btn-ghost" to="/factions">
            Meet the factions
          </Link>
        </div>
      </div>
    </section>
  )
}
