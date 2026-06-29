import { useState, useEffect, useRef } from 'react'
import { Logo } from './ui'

const langs = ['EN', 'ES', 'FR', 'DE']

/* thin line icons for the burger menu */
const Icon = {
  school: <><path d="M4 6.5A2 2 0 016 4.5h5V19H6a2 2 0 01-2-2z"/><path d="M20 6.5A2 2 0 0018 4.5h-5V19h5a2 2 0 002-2z"/></>,
  work: <><rect x="4" y="4" width="16" height="10" rx="1.5"/><path d="M12 14v4M9 21l3-3 3 3"/></>,
  home: <><path d="M5 10V8.5A2 2 0 017 6.5h10a2 2 0 012 2V10"/><rect x="3" y="10" width="18" height="6" rx="2"/><path d="M6 16v2M18 16v2"/></>,
  apps: <><rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/></>,
  study: <><path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4"/></>,
  news: <><path d="M5 4h9l5 5v11a0 0 0 010 0H5z" /><path d="M14 4v5h5"/><path d="M8.5 14.5l3-1 4.5-4.5a1.4 1.4 0 00-2-2L9.5 11.5z"/></>,
}

const menu = [
  { label: 'School', icon: 'school' },
  { label: 'Work', icon: 'work' },
  { label: 'Home', icon: 'home' },
  { label: 'Learning apps', icon: 'apps' },
  { label: 'Self study', icon: 'study' },
  { label: 'News', icon: 'news', badge: 5 },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('EN')
  const [scrolled, setScrolled] = useState(false)
  const langRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const Chevron = (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
  )

  const LangPicker = () => (
    <div className="relative" ref={langRef}>
      <button onClick={() => setLangOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-brand">
        {lang}
        <Chevron className={`h-4 w-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <ul className="absolute right-0 top-8 z-50 w-24 overflow-hidden rounded-xl border border-mist bg-white py-1 shadow-card">
          {langs.map((l) => (
            <li key={l}>
              <button onClick={() => { setLang(l); setLangOpen(false) }}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-mist ${l === lang ? 'font-bold text-brand' : 'text-slatey'}`}>
                {l}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const Burger = ({ active }) => (
    <span className="flex w-6 flex-col items-end gap-[5px]">
      <span className={`h-[3px] rounded-full bg-brand transition-all duration-300 ${active ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`} />
      <span className={`h-[3px] rounded-full bg-brand transition-all duration-300 ${active ? 'w-0 opacity-0' : 'w-4'}`} />
      <span className={`h-[3px] rounded-full bg-brand transition-all duration-300 ${active ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`} />
    </span>
  )

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 animate-slideDown ${scrolled ? 'bg-white/90 backdrop-blur shadow-soft' : 'bg-white'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        <div className="flex items-center gap-4 sm:gap-5">
          <div className="hidden items-center gap-4 md:flex">
            <LangPicker />
            <a href="#" className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-btn transition-all hover:bg-brandDark active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30">Sign up</a>
            <a href="#" className="rounded-lg border border-mist px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand active:scale-[0.97]">Log in</a>
          </div>

          {/* burger + dropdown menu */}
          <div className="relative" ref={menuRef}>
            <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-lg transition hover:bg-mist">
              <Burger active={open} />
            </button>

            <div className={`absolute right-0 top-[calc(100%+14px)] z-50 w-[min(86vw,300px)] origin-top-right rounded-[26px] bg-white p-3 shadow-card transition-all duration-200
              ${open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'}`}>
              <ul className="space-y-1">
                {menu.map((m, i) => (
                  <li
                    key={m.label}
                    style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                    className={`transition-all duration-300 ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  >
                    <a href="#" className="flex items-center gap-4 rounded-2xl px-4 py-2.5 transition hover:bg-mist">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0 text-ink" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{Icon[m.icon]}</svg>
                      <span className="font-display text-[15px] font-bold text-ink">{m.label}</span>
                      {m.badge && (
                        <span className="ml-auto grid h-6 w-6 place-items-center rounded-full bg-sun text-xs font-bold text-white">{m.badge}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* auth shortcuts on small screens */}
              <div className="mt-2 flex gap-2 border-t border-mist px-1 pt-3 md:hidden">
                <a href="#" className="flex-1 rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white">Sign up</a>
                <a href="#" className="flex-1 rounded-lg border border-mist px-4 py-2.5 text-center text-sm font-semibold text-ink">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
