import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

const WORLD_TOP = [
  { rank: 1, title: "THE HITCHHIKER'S GUIDE", author: 'DOUGLAS ADAMS', supporters: '12.5K' },
  { rank: 2, title: 'BRAVE NEW WORLD', author: 'ALDOUS HUXLEY', supporters: '8.5K' },
  { rank: 3, title: '1984', author: 'GEORGE ORWELL', supporters: '6.1K' },
]

const YOUR_TOP = [
  { rank: 1, title: 'DUNE', author: 'FRANK HERBERT', tag: 'FIRST MOVER!!!' },
  { rank: 2, title: '1984', author: 'GEORGE ORWELL', tag: null },
  { rank: 3, title: 'THE GREAT GATSBY', author: 'F. SCOTT FITZGERALD', tag: null },
]

export function WorldTop() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col pb-6">
      {/* Header */}
      <div className="px-6 pt-6 pb-3 border-b-[2px] border-black">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-black uppercase tracking-tight">World Top 3</h1>
          <span className="text-[9px] font-mono text-gray-400 tracking-wider border border-gray-300 px-2 py-0.5">
            GLOBAL STACK
          </span>
        </div>
      </div>

      <div className="px-6 pt-4 flex-1 overflow-y-auto">
        {/* World rankings */}
        <div className="space-y-3 mb-6">
          {WORLD_TOP.map((book) => (
            <div key={book.title} className="flex items-center gap-3 border-[2.5px] border-black p-3">
              <div className={`w-8 h-8 flex items-center justify-center font-black text-sm shrink-0
                ${book.rank === 1 ? 'bg-accent-green text-black' : 'bg-black text-white'}
              `}>
                {book.rank}
              </div>
              <div className="w-10 h-14 bg-black shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-xs tracking-wide uppercase truncate">{book.title}</h3>
                <p className="text-[9px] font-mono text-gray-400 tracking-wider">{book.author}</p>
                <p className="text-[8px] font-mono text-gray-400 mt-0.5">👥 {book.supporters} SUPPORTERS</p>
              </div>
              <div className="flex flex-col gap-0.5 shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-1 h-2.5 ${i <= 3 - book.rank + 2 ? 'bg-black' : 'bg-gray-200'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison section */}
        <div className="border-t-[2px] border-black pt-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-accent-green text-lg">⚡</span>
            <h3 className="font-black text-sm uppercase tracking-wide">How do you compare?</h3>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 bg-accent-green shrink-0" />
              <span>You both agree on <span className="bg-accent-green text-black font-bold px-1">1984</span> — a shared reality anchor.</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 bg-accent-blue shrink-0" />
              <span><span className="bg-accent-blue text-white font-bold px-1">DUNE</span> is your unique signal. You see the future early.</span>
            </div>
          </div>
        </div>

        {/* Your Top 3 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-black text-sm uppercase tracking-wide">Your Top 3</h3>
            <span className="text-[9px] font-mono text-gray-400 tracking-wider border border-gray-300 px-2 py-0.5">
              PERSONAL SIGNAL
            </span>
          </div>

          <div className="space-y-2">
            {YOUR_TOP.map((book) => (
              <div key={book.title} className="flex items-center gap-3 border-[2px] border-black p-2.5">
                <div className={`w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0
                  ${book.rank === 1 ? 'bg-accent-green text-black' : 'bg-black text-white'}
                `}>
                  {book.rank}
                </div>
                <div className="w-8 h-11 bg-black shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs tracking-wide uppercase truncate">{book.title}</h4>
                  <p className="text-[9px] font-mono text-gray-400 tracking-wider">{book.author}</p>
                </div>
                {book.tag && (
                  <span className="bg-accent-green text-black text-[7px] font-bold tracking-wider px-1.5 py-0.5 uppercase shrink-0">
                    {book.tag}
                  </span>
                )}
                <div className="flex flex-col gap-0.5 shrink-0">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-1 h-2 ${i <= book.rank ? 'bg-black' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6">
        <Button onClick={() => navigate('/onboarding/social')}>
          Lock Perspective
        </Button>
      </div>
    </div>
  )
}
