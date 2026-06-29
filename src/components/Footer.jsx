import { StoreBadge, Social, Logo } from './ui'

const columns = [
  { title: 'About', links: ['Company', 'Leadership', 'Jobs - HIRING!', 'Pricing', 'Press', 'Investors'] },
  { title: 'Solutions', links: ['At School', 'At Work', 'At Home'] },
  { title: 'Resources', links: ['Study with Kurtis', 'Blog', 'Kurtis Certified', 'Help Center', 'Library', 'Shop', 'Safety center'] },
  { title: 'Terms and conditions', links: ['Terms and Conditions', 'Privacy Policy', 'US Privacy Laws', "Children's Privacy Policy", 'Inclusion and Accessibility policy'] },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,repeat(4,1fr)]">
          {/* brand + apps + social */}
          <div>
            <Logo variant="light" size="sm" />

            <p className="mt-6 text-xs font-bold uppercase tracking-wide text-white/80">Get the app:</p>
            <div className="mt-3 grid w-fit grid-cols-2 gap-2">
              <StoreBadge store="apple" size="sm" />
              <StoreBadge store="google" size="sm" />
              <StoreBadge store="huawei" size="sm" />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-wide text-white/80">Follow us:</p>
            <div className="mt-3 flex gap-2.5">
              {['linkedin', 'facebook', 'instagram', 'twitter', 'tiktok'].map((s) => (
                <Social key={s} name={s} />
              ))}
            </div>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="relative inline-block text-white/80 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full">{l}</a>
                  </li>
                ))}
              </ul>
              {col.title === 'Terms and conditions' && (
                <div className="mt-5 flex items-center gap-1.5">
                  <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded bg-white px-2 py-1 text-[9px] font-semibold text-ink">
                    <svg viewBox="0 0 24 24" className="h-3 w-3"><path fill="#F25022" d="M3 3h8v8H3z"/><path fill="#7FBA00" d="M13 3h8v8h-8z"/><path fill="#00A4EF" d="M3 13h8v8H3z"/><path fill="#FFB900" d="M13 13h8v8h-8z"/></svg>
                    Microsoft Partner
                  </span>
                  <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded bg-white px-2 py-1 text-[9px] font-semibold text-ink">
                    Google for Education
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/70 lg:px-8">
          Copyright © 2020, Kurtis. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
