import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

const GLOBAL_TOP = [
  { rank: 1, title: "THE HITCHHIKER'S GUIDE", author: 'DOUGLAS ADAMS', vouched: true },
  { rank: 2, title: 'BRAVE NEW WORLD', author: 'ALDOUS HUXLEY', vouched: false },
  { rank: 3, title: '1984', author: 'GEORGE ORWELL', vouched: true },
]

const CIRCLE_TOP = [
  { rank: 1, title: 'THE ALCHEMIST', author: 'PAULO COELHO' },
  { rank: 2, title: 'ATOMIC HABITS', author: 'JAMES CLEAR' },
  { rank: 3, title: '1984', author: 'GEORGE ORWELL' },
]

export function CircleResults() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col pb-6">
      {/* Header */}
      <div className="px-6 pt-6 pb-3 border-b-[2px] border-black">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-mono text-gray-400 tracking-wider">COUNCIL</span>
          <button
            onClick={() => navigate('/onboarding/council')}
            className="w-7 h-7 border-[2px] border-black flex items-center justify-center cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-black uppercase tracking-tight">Global Top 3</h1>
          <span className="text-[9px] font-mono text-gray-400 tracking-wider border border-gray-300 px-2 py-0.5">
            BOOKS / SCI-FI
          </span>
        </div>
      </div>

      <div className="px-6 pt-4 flex-1 overflow-y-auto">
        {/* Global top 3 with vouch indicators */}
        <div className="space-y-2 mb-6">
          {GLOBAL_TOP.map((book) => (
            <div key={book.title} className="flex items-center gap-3 border-[2px] border-black p-2.5">
              <div className={`w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0
                ${book.rank === 1 ? 'bg-accent-green text-black' : 'bg-black text-white'}
              `}>
                {book.rank}
              </div>
              <div className="w-8 h-11 bg-black shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xs tracking-wide uppercase truncate">{book.title}</h3>
                <p className="text-[8px] font-mono text-gray-400 tracking-wider">{book.author}</p>
              </div>
              {book.vouched && (
                <span className="bg-accent-green text-black text-[7px] font-bold tracking-wider px-1.5 py-0.5">
                  ✓ VOUCHED
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Friends ahead banner */}
        <div className="bg-accent-green text-black p-4 mb-6">
          <h3 className="font-black text-sm uppercase tracking-wide mb-2">
            Your friends are ahead of the curve.
          </h3>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black shrink-0" />
              <span><span className="font-bold">1984</span> is the only shared anchor.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black shrink-0" />
              <span>Your circle is <span className="font-bold">80% more</span> into Non-Fiction than the world.</span>
            </div>
          </div>
        </div>

        {/* Circle's Top 3 */}
        <div className="bg-accent-green/10 border-[2.5px] border-accent-green p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-black text-sm uppercase tracking-wide">
              Your Circle&rsquo;s Top 3
            </h3>
            <span className="text-[8px] font-mono tracking-wider border border-black px-1.5 py-0.5">
              SOCIAL SIGNAL
            </span>
          </div>

          <div className="space-y-2">
            {CIRCLE_TOP.map((book) => (
              <div key={book.title} className="flex items-center gap-3 bg-accent-green p-2.5">
                <div className="w-7 h-7 bg-black text-accent-green flex items-center justify-center font-bold text-xs shrink-0">
                  {book.rank}
                </div>
                <div className="w-8 h-11 bg-black shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs tracking-wide uppercase truncate text-black">{book.title}</h4>
                  <p className="text-[8px] font-mono text-black/60 tracking-wider">{book.author}</p>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-1 h-2 ${i <= book.rank ? 'bg-black' : 'bg-black/20'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6">
        <Button onClick={() => navigate('/onboarding/complete')}>
          Lock Social Perspective
        </Button>
      </div>
    </div>
  )
}
