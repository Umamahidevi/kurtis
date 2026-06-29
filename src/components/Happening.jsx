import { useState } from 'react'

/* ---------- Card faces ---------- */
function Card({ c }) {
  if (c.type === 'dark') {
    return (
      <div className="flex h-full w-full overflow-hidden rounded-3xl shadow-card transition-shadow duration-300 group-hover:shadow-[0_26px_50px_-18px_rgba(22,22,29,0.32)]">
        <div className="flex w-[62%] flex-col justify-center bg-[#2E2A23] p-7 text-white">
          <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-[26px]">{c.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{c.body}</p>
          <a href="#" className="mt-6 text-sm font-bold text-white hover:underline">Learn more</a>
        </div>
        <div className="relative w-[38%] overflow-hidden">
          <img src="/assets/card-dark.png" alt="" className="absolute inset-0 h-full w-full object-cover object-right-bottom" />
        </div>
      </div>
    )
  }

  if (c.type === 'yellow') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#F4B81C] p-7 shadow-card transition-shadow duration-300 group-hover:shadow-[0_26px_50px_-18px_rgba(22,22,29,0.32)]">
        {c.badge && (
          <span className="relative inline-block rounded-full bg-[#1c1814] px-3 py-1 text-xs font-bold text-white">{c.badge}</span>
        )}
        <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-[#241f17] sm:text-[26px]">{c.title}</h3>
        <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-[#3a3328]">{c.body}</p>
        <a href="#" className="mt-5 inline-block text-sm font-bold text-[#241f17] hover:underline">Learn more</a>
      </div>
    )
  }

  /* blue */
  return (
    <div className="relative isolate h-full w-full overflow-hidden rounded-3xl bg-[#bcdcff] shadow-card transition-shadow duration-300 group-hover:shadow-[0_26px_50px_-18px_rgba(22,22,29,0.32)]">
      {/* chevron arrow + light-blue field */}
      <img src="/assets/card-blue-arrow.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      {/* crayons along the bottom — multiply drops the white background out */}
      <img src="/assets/card-blue.png" alt="" className="absolute inset-0 h-full w-full object-cover object-bottom mix-blend-multiply" />
      <div className="relative z-10 p-7 text-white">
        <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-[26px]">{c.title}</h3>
        <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-white/90">{c.body}</p>
        <a href="#" className="mt-5 inline-block text-sm font-bold text-white hover:underline">Learn more</a>
      </div>
    </div>
  )
}

const cards = [
  { type: 'blue',   title: 'Kurtis Classroom',    body: 'A new generation of group learning.' },
  { type: 'dark',   title: 'Kurtis Classroom',    body: 'The next generation of corporate learning.' },
  { type: 'yellow', title: 'Premium for schools', body: 'Create and teach lessons students will love.', badge: 'New' },
  { type: 'blue',   title: 'Kurtis Live',         body: 'Run a live quiz on the big screen.' },
  { type: 'dark',   title: 'Kurtis Trivia',       body: 'Build a trivia quiz in minutes.' },
]

const CARD_H = 220   // px — fixed card height

export default function Happening() {
  const n = cards.length
  const [active, setActive] = useState(1)
  const go = (i) => setActive((i + n) % n)

  /* the three cards on screen — all shown fully, at full strength */
  const visible = [(active - 1 + n) % n, active, (active + 1) % n]

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Amazing things are happening</h2>
          <div className="mx-auto mt-4 h-2 w-24 rounded-full bg-brand" />
        </div>

        {/* 3 cards — fully visible, lift on hover */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visible.map((idx) => (
            <article
              key={idx}
              style={{ height: CARD_H }}
              className="group w-full transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              <Card c={cards[idx]} />
            </article>
          ))}
        </div>

        {/* dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {cards.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-3 w-3 rounded-full ${i === active ? 'scale-110 bg-brand' : 'bg-ink/15 hover:bg-ink/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
