import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { SignalWave } from '../components/SignalWave'

export function CollectionCreated() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col px-6 pt-8 pb-6">
      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <span className="inline-block bg-accent-green text-black text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
          Onboarding: Success
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-[2.2rem] font-black uppercase leading-[1.0] tracking-tight mb-4">
        Collection
        <br />
        <span className="text-accent-green">Created!</span>
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        You&rsquo;re all set.
      </p>

      {/* Signal wave celebration */}
      <div className="relative mb-4">
        <SignalWave className="h-44" label={undefined} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-accent-green text-black font-black text-lg tracking-wider px-4 py-2 uppercase">
            Awesome
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-2">4.0 SIGNAL</p>

      <p className="text-sm font-semibold mb-6">
        You&rsquo;re an early supporter of these books.
      </p>

      {/* Stats */}
      <div className="border-[2.5px] border-black divide-y-[2px] divide-black mb-6">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Books Added
          </span>
          <span className="font-black text-lg">3</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Starting Rank
          </span>
          <span className="font-black text-lg">#100</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
            Growth
          </span>
          <div className="flex items-center gap-2">
            <div className="w-20 h-2 bg-gray-200">
              <div className="h-full bg-accent-green w-1/3" />
            </div>
            <span className="bg-accent-green text-black text-[8px] font-bold tracking-wider px-1.5 py-0.5 uppercase">
              Starting Now!
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1" />

      {/* CTA */}
      <Button variant="blue" arrow onClick={() => navigate('/onboarding/feed-view')}>
        See the Feed
      </Button>
    </div>
  )
}
