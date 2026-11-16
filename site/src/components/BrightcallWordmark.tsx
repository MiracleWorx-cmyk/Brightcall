type BrightcallWordmarkProps = {
  size?: 'nav' | 'hero' | 'footer'
  className?: string
}

/** Locked minimalist Brightcall wordmark — cube tittle + Magenta/Cyan/Gold hairlines. */
export function BrightcallWordmark({
  size = 'nav',
  className = '',
}: BrightcallWordmarkProps) {
  return (
    <span className={`wordmark wordmark--${size} ${className}`.trim()} aria-label="Brightcall">
      <span className="wordmark__type" aria-hidden="true">
        <span className="wordmark__letters">Br</span>
        <span className="wordmark__i">
          <span className="wordmark__stem">i</span>
          <span className="wordmark__cube" />
        </span>
        <span className="wordmark__letters">ghtcall</span>
      </span>
      <span className="wordmark__accents" aria-hidden="true">
        <span className="wordmark__hair wordmark__hair--magenta" />
        <span className="wordmark__hair wordmark__hair--cyan" />
        <span className="wordmark__hair wordmark__hair--gold" />
      </span>
    </span>
  )
}
