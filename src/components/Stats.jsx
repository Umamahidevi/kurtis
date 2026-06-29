import { Reveal } from './ui'

const stats = [
  { t: 'More than 50% of US teachers use Kurtis', bar: 'border-[#3D5AFE]' },
  { t: 'Players in more than 200 countries',      bar: 'border-[#2DC7F4]' },
  { t: 'Over 30 million public games available',  bar: 'border-[#FF8A3D]' },
  { t: '97% of the Fortune 500 use Kurtis',       bar: 'border-[#FFC629]' },
]

export function Stats() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.t} delay={i * 80} className={`cursor-default border-l-4 pl-4 transition duration-300 hover:translate-x-1 ${s.bar}`}>
            <p className="text-sm font-bold leading-snug text-ink">{s.t}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ReadyCTA() {
  return (
    <section className="pb-20 pt-6 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="flex justify-center">
          <img
            src="/assets/ready.png"
            alt="A doodled face beside a paintbrush bursting with shapes"
            className="w-full max-w-md animate-floaty lg:max-w-lg"
          />
        </Reveal>
        <Reveal delay={120} className="text-center lg:text-left">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            <span className="block">Ready for make</span>
            <span className="mt-4 block">learning fun!</span>
          </h2>
          <a href="#" className="pill-btn btn-shine mt-8 bg-brand px-10 py-4 text-lg text-white shadow-btn hover:bg-brandDark">
            Sign up for free
          </a>
        </Reveal>
      </div>
    </section>
  )
}
