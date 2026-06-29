import { Reveal, StoreBadge } from './ui'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-20 lg:pt-16">
        {/* copy */}
        <Reveal className="order-2 lg:order-1">
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Make<br />learning fun!
          </h1>
          <p className="mt-5 max-w-md text-lg text-slatey">
            Any subject, in any language, on any device, for all ages!
          </p>

          <a href="#" className="pill-btn btn-shine mt-7 bg-brand px-7 py-3.5 text-base text-white shadow-btn hover:bg-brandDark">
            Sign up for free
          </a>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-wide text-ink">Or download the app:</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
          </div>
        </Reveal>

        {/* illustration */}
        <Reveal delay={120} className="order-1 flex justify-center lg:order-2">
          <img
            src="/assets/hero.png"
            alt="A laptop sketched in a playful doodle style surrounded by flowers"
            className="w-full max-w-md animate-floaty drop-shadow-xl"
          />
        </Reveal>
      </div>
    </section>
  )
}
