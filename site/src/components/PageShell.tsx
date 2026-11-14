import type { ReactNode } from 'react'
import { BrightField } from './BrightField'

type PageShellProps = {
  kicker: ReactNode
  title: string
  lede?: string
  children: ReactNode
  accent?: string
}

export function PageShell({ kicker, title, lede, children, accent }: PageShellProps) {
  return (
    <article className="page">
      <BrightField variant="page" />
      <div className="page-inner">
        <p className="page-kicker">{kicker}</p>
        <h1 className="page-title" style={accent ? { color: accent } : undefined}>
          {title}
        </h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </article>
  )
}
