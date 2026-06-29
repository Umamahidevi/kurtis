import { useState } from 'react'
import { Reveal, TitleRule } from './ui'

const steps = [
  {
    img: '/assets/create.png',
    alt: 'A doodle of a one-eyed creature above a rolled paper bursting with confetti',
    title: 'Create',
    body: 'It only takes minutes to create a learning game or trivia quiz on any topic, in any language.',
    flip: false,
    cols: 'lg:grid-cols-2',
    imgMax: 'max-w-md lg:max-w-lg',
    imgExtra: '',
    textExtra: 'lg:ml-8 lg:-mt-12',
  },
  {
    img: '/assets/host.png',
    alt: 'Two doodled hands passing a lightning bolt between them',
    title: 'Host or share',
    body: 'Host a live game with questions on a big screen or share a game with remote players.',
    flip: true,
    cols: 'lg:grid-cols-[0.85fr_1.55fr]',
    imgMax: 'max-w-2xl lg:max-w-none',
    imgExtra: 'lg:-ml-10',
    textExtra: '',
  },
  {
    img: '/assets/play.png',
    alt: 'A doodled hand and a party popper bursting with shapes',
    title: 'Play',
    body: 'Game on! Join a kahoot with a PIN provided by the host and answer questions on your device.',
    flip: false,
    cols: 'lg:grid-cols-2',
    imgMax: 'max-w-md lg:max-w-lg',
    imgExtra: '',
    textExtra: 'lg:-mt-8',
  },
]

export default function HowItWorks() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* "Still more" strip */}
        <Reveal className="mb-16 text-center">
          <p className="text-lg text-slatey">
            Still more?{' '}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="font-bold text-brand underline decoration-2 underline-offset-4 hover:text-brandDark"
            >
              Take a look to our features games
            </button>
          </p>
        </Reveal>

        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            How does Kurtis work?
          </h2>
          <TitleRule />
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-20">
          {steps.map((s) => (
            <div key={s.title} className={`grid items-center gap-6 lg:gap-8 ${s.cols}`}>
              <Reveal
                delay={60}
                className={`flex justify-center ${s.flip ? 'lg:order-2 lg:justify-start' : 'lg:order-1 lg:justify-end'}`}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  className={`w-full ${s.imgMax} ${s.imgExtra} transition-transform duration-500 hover:-rotate-2 hover:scale-105`}
                />
              </Reveal>
              <Reveal
                delay={140}
                className={`text-center lg:text-left ${s.flip ? 'lg:order-1' : 'lg:order-2'} ${s.textExtra}`}
              >
                <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{s.title}</h3>
                <p className="mx-auto mt-4 max-w-[22rem] text-lg leading-relaxed text-slatey lg:mx-0">{s.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Featured games popup */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-5 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Featured games"
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="animate-fadeUp relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="flex items-center justify-between px-6 pt-5">
              <h3 className="text-xl font-extrabold text-ink">Featured games</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full bg-mist text-ink transition hover:bg-ink/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="px-6 pb-6 pt-4">
              <div className="overflow-hidden rounded-2xl">
                <img src="/assets/feature-game.png" alt="The Cube Challenge" className="w-full" />
              </div>
              <h4 className="mt-4 text-lg font-extrabold text-ink">The Cube Challenge</h4>
              <p className="mt-1 text-sm leading-relaxed text-slatey">
                Match every side before the timer runs out — a quick puzzle game to warm up the class.
              </p>
              <a
                href="#"
                className="pill-btn mt-5 w-full justify-center bg-brand py-3 text-base text-white shadow-btn hover:bg-brandDark"
              >
                Play now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
