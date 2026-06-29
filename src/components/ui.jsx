import useReveal from '../hooks/useReveal'

/* ---------- Animated section underline ---------- */
export function TitleRule({ light = false, className = '' }) {
  const [ref, shown] = useReveal({ threshold: 0.8 })
  return (
    <div
      ref={ref}
      className={`mx-auto mt-4 h-2 rounded-full transition-[width] duration-700 ease-out delay-200
        ${shown ? 'w-24' : 'w-0'}
        ${light ? 'bg-white' : 'bg-brand'}
        ${className}`}
    />
  )
}

/* ---------- Brand logo: paper-plane mark + script wordmark ---------- */
export function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const markFill = variant === 'light' ? '#FFFFFF' : '#3D5AFE'
  const wordColor = variant === 'light' ? 'text-white' : 'text-ink'
  const sz = size === 'lg'
    ? { mark: 'h-12 w-12', text: 'text-4xl sm:text-5xl' }
    : size === 'sm'
    ? { mark: 'h-7 w-7', text: 'text-xl' }
    : { mark: 'h-8 w-8 sm:h-9 sm:w-9', text: 'text-2xl sm:text-[1.9rem]' }
  return (
    <a href="#" aria-label="Kurtis Classroom — home" className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 48 48" className={`${sz.mark} shrink-0 transition-transform duration-300 hover:animate-wiggle`} aria-hidden="true">
        <path d="M5 30.5 L40.5 7.5 C41.8 6.7 43.2 8.1 42.4 9.4 L25.8 39.4 C25 40.8 22.9 40.4 22.6 38.8 L20.7 30.2 Z" fill={markFill} />
        <path d="M20.7 30.2 L40.5 7.5 L24.5 25.6 Z" fill={markFill} opacity="0.55" />
      </svg>
      <span className={`whitespace-nowrap font-script ${sz.text} leading-tight ${wordColor}`}>Kurtis Classroom</span>
    </a>
  )
}

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={
        `transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ` +
        (shown ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-7 ') +
        className
      }
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ---------- App-store style badges (generic look-alikes) ---------- */
export function StoreBadge({ store = 'apple', size = 'md', className = '' }) {
  const top = store === 'apple' ? 'Download on the' : 'GET IT ON'
  const main = store === 'apple' ? 'App Store' : store === 'huawei' ? 'AppGallery' : 'Google Play'
  const sm = size === 'sm'
  const gl = sm ? 'h-4 w-4' : 'h-6 w-6'
  const Glyph = () =>
    store === 'apple' ? (
      <svg viewBox="0 0 24 24" className={gl} fill="currentColor"><path d="M16.5 1.4c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.7-.8 1.9-1.4 2.8-1.4zM19.6 17c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9s-2.3.9-3.6.9c-1.5 0-2.7-1.6-3.6-3C1.2 16 1 11.5 2.6 9.1c1-1.5 2.5-2.4 4-2.4 1.5 0 2.5 1 3.7 1 1.2 0 1.9-1 3.7-1 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4 1.9 8.3z"/></svg>
    ) : store === 'huawei' ? (
      <svg viewBox="0 0 24 24" className={gl} fill="currentColor"><path d="M12 2c2 3 2 7 0 10C10 9 10 5 12 2zM5 7c3 1 5 4 5 7-3-1-5-4-5-7zm14 0c0 3-2 6-5 7 0-3 2-6 5-7zM7 16h10v2H7z"/></svg>
    ) : (
      <svg viewBox="0 0 24 24" className={gl}><path fill="#34A853" d="M3 20.5 13 12 3 3.5z" opacity=".9"/><path fill="#4285F4" d="M3 3.5 13 12 3 20.5z"/><path fill="#FBBC04" d="m13 12 4-2.3-2.5-1.4z"/><path fill="#EA4335" d="m13 12 1.5 3.7L17 14.3z"/></svg>
    )
  return (
    <span className={`inline-flex items-center rounded-lg bg-ink text-white transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5 ${sm ? 'gap-1.5 px-2 py-1' : 'gap-2 px-3 py-2'} ${className}`}>
      <Glyph />
      <span className="leading-tight">
        <span className={`block whitespace-nowrap uppercase tracking-wide opacity-80 ${sm ? 'text-[7px]' : 'text-[9px]'}`}>{top}</span>
        <span className={`block whitespace-nowrap font-display font-semibold ${sm ? 'text-[11px]' : 'text-sm'}`}>{main}</span>
      </span>
    </span>
  )
}

/* ---------- tiny social glyphs ---------- */
export function Social({ name, className = '' }) {
  const paths = {
    facebook: 'M13 22v-8h2.7l.4-3H13V9c0-.9.2-1.5 1.5-1.5H16V4.8C15.6 4.8 14.7 4.7 13.7 4.7 11.4 4.7 10 6 10 8.5V11H7.3v3H10v8z',
    linkedin: 'M6.9 8.5H4V20h2.9zM5.4 4a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20 20h-2.9v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20H10.2V8.5H13v1.6h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7z',
    instagram: 'M12 7.3A4.7 4.7 0 1012 16.7 4.7 4.7 0 0012 7.3zm0 7.7a3 3 0 110-6 3 3 0 010 6zm4.9-7.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM20 8c0-1.7-.4-3.2-1.6-4.4S15.7 2 14 2h-4C8.3 2 6.8 2.4 5.6 3.6S4 6.3 4 8v8c0 1.7.4 3.2 1.6 4.4S8.3 22 10 22h4c1.7 0 3.2-.4 4.4-1.6S20 17.7 20 16zm-2 8c0 .9-.2 1.8-.9 2.5s-1.6.9-2.5.9h-5.2c-.9 0-1.8-.2-2.5-.9S6 16.9 6 16v-5.2c0-.9.2-1.8.9-2.5S8.5 7.4 9.4 7.4h5.2c.9 0 1.8.2 2.5.9s.9 1.6.9 2.5z',
    twitter: 'M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.8 3.6A11.3 11.3 0 013.6 4.8a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 003.2 3.9c-.5.1-1 .2-1.6.1a4 4 0 003.7 2.8A8 8 0 012 18.3a11.3 11.3 0 006.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.4-1.3 2-2.1z',
    youtube: 'M22 8.2a2.6 2.6 0 00-1.8-1.8C18.6 6 12 6 12 6s-6.6 0-8.2.4A2.6 2.6 0 002 8.2 27 27 0 002 12a27 27 0 00.4 3.8 2.6 2.6 0 001.8 1.8C5.4 18 12 18 12 18s6.6 0 8.2-.4a2.6 2.6 0 001.8-1.8A27 27 0 0022 12a27 27 0 00-.4-3.8zM10 15V9l5 3z',
    tiktok: 'M16.5 3c.3 2.1 1.9 3.7 4 3.9v2.6c-1.5.1-2.9-.4-4-1.2v5.9a5.4 5.4 0 11-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 102.1 2.6V3z',
  }
  return (
    <a href="#" aria-label={name}
       className={`grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-all duration-200 hover:bg-white hover:text-brand hover:scale-125 active:scale-95 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={paths[name]} /></svg>
    </a>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
