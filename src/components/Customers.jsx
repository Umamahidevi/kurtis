import { useState } from 'react'
import { Reveal, TitleRule } from './ui'

const quotes = [
  {
    bubble: 'I love these games!',
    name: 'Martha',
    role: 'Norwegian Air',
    text: 'Recusandae sunt voluptate repellat velit dolorem eos nostrum cupiditate. Labore porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus dignissimos repellat.',
    text2: 'Sit et aut minus quod vitae. Aut occaecati cupiditate neque dolore amet beatae quasi aliquam.',
    brand: 'norwegian',
  },
  {
    bubble: 'A total game changer.',
    name: 'David',
    role: 'Microsoft',
    text: 'Sit aut minus quod vitae. Aut occaecati cupiditate neque dolore amet beatae quasi aliquam. Voluptate repellat velit dolorem eos nostrum cupiditate labore.',
    text2: 'Labore porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus dignissimos.',
    brand: 'microsoft',
  },
  {
    bubble: 'My students adore it.',
    name: 'Lena',
    role: 'Oxford School',
    text: 'Porro cupiditate reiciendis enim neque modi eos autem expedita. Voluptatibus dignissimos repellat recusandae sunt voluptate repellat velit dolorem.',
    text2: 'Aut occaecati cupiditate neque dolore amet beatae quasi aliquam sit et aut minus quod vitae.',
    brand: 'oxford',
  },
]

export default function Customers() {
  const [active, setActive] = useState(0)

  const q = quotes[active]

  return (
    <section className="bg-brand py-28 text-white lg:py-36">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Our best customers</h2>
          <TitleRule light />
        </Reveal>

        <Reveal delay={120} className="mt-12 grid items-center gap-10 md:grid-cols-[24rem,1fr]">
          {/* speech bubble with avatar tucked into the bottom-right */}
          <div className="mx-auto w-full max-w-[22rem] md:mx-0 md:-ml-16 lg:-ml-24">
            <div key={`bubble-${active}`} className="relative rounded-[28px] bg-white px-8 py-7 text-center text-lg font-display font-bold text-ink shadow-card">
              {q.bubble}
              {/* tail pointing down toward the avatar */}
              <span className="absolute -bottom-2 right-20 h-5 w-5 rotate-45 rounded-br-[6px] bg-white" />
            </div>
            <img
              key={q.name}
              src="/assets/avatar.png"
              alt={q.name}
              className="ml-auto mr-2 mt-6 block h-36 w-36 rounded-full object-cover shadow-card ring-4 ring-white/15"
            />
          </div>

          {/* testimonial text with divider */}
          <div key={active} className="text-center md:border-l-2 md:border-white/60 md:pl-12 md:text-left">
            <p className="font-display text-base font-bold">
              {q.name} <span className="font-normal opacity-75">| {q.role}</span>
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">{q.text}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">{q.text2}</p>

            {/* brand badge */}
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-white/12 px-4 py-2">
              <span className="font-display text-lg font-bold lowercase tracking-tight text-white">{q.brand}</span>
              <svg viewBox="0 0 26 12" className="h-3 w-6" aria-hidden="true">
                <path d="M2 8 C 9 2, 17 2, 24 6" stroke="#FF3D5A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* round dots, active = sun */}
        <div className="mt-12 flex justify-center gap-3">
          {quotes.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition-all ${i === active ? 'scale-110 bg-sun' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
