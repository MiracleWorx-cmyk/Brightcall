import { NavLink, Outlet } from 'react-router-dom'
import { brand } from '../content/lore'
import { BrightcallWordmark } from './BrightcallWordmark'

const links = [
  { to: '/world', label: 'World' },
  { to: '/bright', label: 'Bright' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/energies', label: 'Energies' },
  { to: '/factions', label: 'Factions' },
  { to: '/heroes', label: 'Heroes' },
  { to: '/game', label: 'Game' },
]

export function Layout() {
  return (
    <div className="shell">
      <header className="nav">
        <NavLink to="/" className="nav-brand" end aria-label="Brightcall home">
          <BrightcallWordmark size="nav" />
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <BrightcallWordmark size="footer" />
          <span>{brand.world}</span>
          <span>{brand.genre}</span>
        </div>
      </footer>
    </div>
  )
}
