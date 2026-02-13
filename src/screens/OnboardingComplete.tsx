import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { SignalWave } from '../components/SignalWave'

export function OnboardingComplete() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col px-6 pt-10 pb-6">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-block bg-accent-green text-black text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
          Onboarding Complete
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-[2.4rem] font-black uppercase leading-[1.0] tracking-tight mb-3 italic">
        You&rsquo;re
        <br />
        <span className="text-accent-green">In.</span>
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Your signal is live. Your perspective is locked.
        <br />
        Welcome to the network.
      </p>

      {/* Signal wave celebration */}
      <SignalWave className="h-44 mb-6" label="IDENTITY_LOCKED" />

      {/* Stats summary */}
      <div className="border-[2.5px] border-black divide-y-[2px] divide-black mb-6">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Collection
          </span>
          <span className="font-bold text-sm">MY FAVORITE BOOKS</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Signal Strength
          </span>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-1.5 h-4 ${i <= 4 ? 'bg-accent-green' : 'bg-gray-200'}`} />
              ))}
            </div>
            <span className="font-bold text-sm">4.0</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Council
          </span>
          <span className="font-bold text-sm">2 VOUCHED</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Status
          </span>
          <span className="bg-accent-green text-black text-[9px] font-bold tracking-wider px-2 py-0.5 uppercase">
            Active
          </span>
        </div>
      </div>

      <div className="flex-1" />

      {/* Protocol footer */}
      <p className="text-[9px] font-mono text-gray-400 tracking-wider text-center mb-4">
        YOUR ALGORITHM IS NOW HUMAN-POWERED.
      </p>

      {/* CTA */}
      <Button variant="blue" arrow onClick={() => navigate('/feed')}>
        Enter the Feed
      </Button>

      {/* Home bar */}
      <div className="flex justify-center mt-4">
        <div className="w-32 h-1 bg-black rounded-full" />
      </div>
    </div>
  )
}
