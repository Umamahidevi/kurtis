import { useState } from 'react'
import { Reveal, Arrow, Logo } from './ui'

export default function GameCode() {
  const [code, setCode] = useState('')
  return (
    <>
      {/* heading sits on white, above the yellow block */}
      <section className="bg-white px-5 pb-12 pt-4 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Do you have a game code?</h2>
          <p className="mt-2 text-lg font-semibold text-ink/70">Let's play for a while!</p>
        </Reveal>
      </section>

      {/* tall yellow block: logo + input only */}
      <section className="bg-sun py-44 lg:py-56">
        <Reveal className="mx-auto max-w-md px-5 text-center">
          <Logo variant="light" size="md" className="justify-center drop-shadow-sm" />

          <div className="mx-auto mt-12 flex max-w-sm items-center rounded-full bg-white p-2 shadow-card">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write the code here"
              className="w-full rounded-full bg-transparent px-5 py-3 text-ink placeholder:text-slatey/70 focus:outline-none"
            />
            <button
              aria-label="Submit code"
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-full transition-all duration-300 active:scale-95
                ${code
                  ? 'bg-brand text-white shadow-btn animate-pulseRing'
                  : 'bg-mist text-slatey hover:bg-ink/10'}`}
            >
              <Arrow className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-5 text-sm font-medium text-white/65">Or try with 1234</p>
        </Reveal>
      </section>
    </>
  )
}
