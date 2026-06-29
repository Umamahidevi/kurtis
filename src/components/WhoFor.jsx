import { Reveal, TitleRule } from './ui'

const items = [
  {
    title: 'At School',
    color: 'bg-brand',
    body: 'Engaging group and distance learning for teachers and students.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5A2.5 2.5 0 016.5 3H12v16H6.5A2.5 2.5 0 014 16.5z" />
        <path d="M20 5.5A2.5 2.5 0 0017.5 3H12v16h5.5A2.5 2.5 0 0020 16.5z" />
      </svg>
    ),
  },
  {
    title: 'At work',
    color: 'bg-sun',
    body: 'For training, e-learning, interactive presentations and more.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    title: 'At home',
    color: 'bg-sky',
    body: 'Apps and games for family fun or home study.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    title: 'Learning apps',
    color: 'bg-coral',
    body: 'Engage kids with the Kahoot! family of learning apps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
  },
]

export default function WhoFor() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Who is Kurtis for?
          </h2>
          <TitleRule />
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90} className="text-center sm:text-left">
              <div className="group cursor-default">
                <div className={`mx-auto sm:mx-0 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-soft transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 ${it.color}`}>
                  <span className="h-7 w-7">{it.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{it.title}</h3>
                <p className="mt-2 mx-auto sm:mx-0 max-w-[9.5rem] text-sm leading-relaxed text-slatey">{it.body}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand transition-all duration-200 hover:gap-2.5 hover:underline">
                  Learn more <span aria-hidden="true">›</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#" className="pill-btn btn-shine bg-brand px-8 py-3.5 text-sm uppercase tracking-wide text-white shadow-btn hover:bg-brandDark">
            Sign up now
          </a>
        </Reveal>
      </div>
    </section>
  )
}
