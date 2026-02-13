import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { SignalWave } from '../components/SignalWave'

export function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col px-6 pt-12 pb-6">
      {/* Logo */}
      <h1 className="text-[2.2rem] font-black italic tracking-tight mb-8">
        INTUITION
      </h1>

      {/* Signal wave visualization */}
      <SignalWave label="SIGNAL_V.01" className="h-48 mb-8" />

      {/* Headline */}
      <h2 className="text-[1.8rem] font-black uppercase leading-[1.1] tracking-tight mb-8">
        The world&rsquo;s first
        <br />
        human signal
        <br />
        marketplace.
      </h2>

      {/* Feature cards */}
      <div className="space-y-2 mb-8">
        {[
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              </svg>
            ),
            title: 'TRUSTED DISCOVERY',
            subtitle: 'VERIFIED SIGNAL LAYERS',
          },
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="6" y="10" width="3" height="10" rx="0" />
                <rect x="10.5" y="6" width="3" height="14" rx="0" />
                <rect x="15" y="2" width="3" height="18" rx="0" />
              </svg>
            ),
            title: 'COLLECTIVE RANKING',
            subtitle: 'CONSENSUS MECHANISM',
          },
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
              </svg>
            ),
            title: 'CURATION REWARDS',
            subtitle: 'PASSIVE YIELD ENGINE',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 bg-black text-white px-4 py-4"
          >
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="font-bold text-sm tracking-wide">{item.title}</p>
              <p className="text-[10px] font-mono text-white/50 tracking-wider">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <Button onClick={() => navigate('/onboarding/value-props')}>
          Get Started
        </Button>

        {/* Home indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-black rounded-full" />
        </div>
      </div>
    </div>
  )
}
