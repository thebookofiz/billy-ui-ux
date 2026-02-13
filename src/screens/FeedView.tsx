import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { SignalWave } from '../components/SignalWave'

const MY_BOOKS = [
  { rank: 1, title: "THE HITCHHIKER'S GUIDE", author: 'DOUGLAS ADAMS', badge: 'TOP CHOICE', supporters: '12.5K' },
  { rank: 2, title: 'BRAVE NEW WORLD', author: 'ALDOUS HUXLEY', badge: null, supporters: '8.5K' },
  { rank: 3, title: '1984', author: 'GEORGE ORWELL', badge: null, supporters: '6.1K' },
]

const MORE_BOOKS = [
  { title: 'FAHRENHEIT 451', author: 'RAY BRADBURY', supporters: '5.1K' },
]

export function FeedView() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col pb-6">
      {/* Header */}
      <div className="px-6 pt-6 pb-3 border-b-[2px] border-black">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => navigate('/onboarding/collection-created')}
            className="w-8 h-8 border-[2px] border-black flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            ←
          </button>
          <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
            Global Community View
          </span>
          <button className="w-8 h-8 border-[2px] border-black flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="black" strokeWidth="1.5">
              <circle cx="7" cy="3" r="1.5" />
              <path d="M12 5.5l-5 2.5M2 5.5l5 2.5M7 8v4" />
              <circle cx="2" cy="5.5" r="1.5" />
              <circle cx="12" cy="5.5" r="1.5" />
            </svg>
          </button>
        </div>
        <h1 className="text-xl font-black uppercase tracking-tight">My Favorite Books</h1>

        {/* View toggle */}
        <div className="flex gap-0 mt-3">
          {['COMMUNITY', 'MINE', 'STATS'].map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-[9px] font-bold tracking-[0.15em] uppercase border-[2px] border-black cursor-pointer
                ${i === 0 ? 'bg-black text-white' : 'bg-white text-black'}
                ${i > 0 ? 'border-l-0' : ''}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Ranked book list */}
      <div className="px-6 pt-4 flex-1">
        <div className="space-y-3">
          {MY_BOOKS.map((book) => (
            <div key={book.title} className="flex items-center gap-3">
              {/* Rank */}
              <div className={`w-8 h-8 flex items-center justify-center font-black text-sm shrink-0
                ${book.rank === 1 ? 'bg-accent-green text-black' : 'bg-black text-white'}
              `}>
                #{book.rank}
              </div>

              {/* Book cover placeholder */}
              <div className="w-12 h-16 bg-black shrink-0" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-sm tracking-wide uppercase truncate">
                    {book.title}
                  </h3>
                  {book.badge && (
                    <span className="bg-accent-green text-black text-[7px] font-bold tracking-wider px-1.5 py-0.5 uppercase shrink-0">
                      {book.badge}
                    </span>
                  )}
                </div>
                <p className="text-[10px] font-mono text-gray-400 tracking-wider mt-0.5">
                  {book.author}
                </p>
                <p className="text-[9px] font-mono text-gray-400 mt-0.5">
                  👥 {book.supporters} SUPPORTERS
                </p>
              </div>

              {/* Signal indicator */}
              <div className="flex flex-col gap-0.5 shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-1 h-3 ${i <= book.rank ? 'bg-black' : 'bg-gray-200'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More books */}
        <div className="mt-6 mb-4">
          {MORE_BOOKS.map((book) => (
            <div key={book.title} className="border-[2px] border-black p-3">
              <div className="flex items-center gap-3">
                <SignalWave className="h-16 w-24 shrink-0" label={undefined} />
                <div>
                  <h3 className="font-bold text-sm tracking-wide uppercase">{book.title}</h3>
                  <p className="text-[9px] font-mono text-gray-400 tracking-wider mt-0.5">
                    👥 {book.supporters} SUPPORTERS
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6">
        <Button arrow onClick={() => navigate('/onboarding/world-top')}>
          Compare Your Stack ↔
        </Button>
      </div>
    </div>
  )
}
