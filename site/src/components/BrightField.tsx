type BrightFieldProps = {
  variant?: 'hero' | 'page'
}

export function BrightField({ variant = 'page' }: BrightFieldProps) {
  return (
    <div className={`bright-field bright-field--${variant}`} aria-hidden="true">
      <div className="bright-field__void" />
      <div className="bright-field__cube" />
      <div className="bright-field__core" />
      <div className="bright-field__seams">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="bright-field__splice">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="bright-field__vignette" />
    </div>
  )
}
