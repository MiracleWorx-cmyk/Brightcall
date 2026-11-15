import { Link } from 'react-router-dom'
import { brand } from '../content/lore'

export function Home() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img
          className="hero-media__img"
          src="/art/hero-harvester.png"
          alt=""
          width={1344}
          height={768}
        />
        <div className="hero-media__veil" />
      </div>
      <div className="hero-copy">
        <h1 className="hero-brand">{brand.game}</h1>
        <p className="hero-line">{brand.tagline}</p>
        <p className="hero-support">
          A fast hex brawler inside The Bright — where Seams burst and weep neon Chroma.
        </p>
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
