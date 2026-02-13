import { useNavigate } from 'react-router-dom'
import { SignalWave } from '../components/SignalWave'

const BOOKS = [
  { rank: 1, slug: 'the-alchemist', title: 'THE ALCHEMIST', author: 'P. COELHO', change: '+45%', positive: true },
  { rank: 2, slug: '1984', title: '1984', author: 'G. ORWELL', change: '-12%', positive: false },
  { rank: 3, slug: 'atomic-habits', title: 'ATOMIC HABITS', author: 'J. CLEAR', change: '+28%', positive: true },
  { rank: 4, slug: 'meditations', title: 'MEDITATIONS', author: 'M. AURELIUS', change: '+09%', positive: true },
]

export function StackDetail() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/feed')}
              className="w-10 h-10 border-[2.5px] border-black flex items-center justify-center cursor-pointer hover:bg-gray-100"
            >
              ←
            </button>
            <h1 className="text-base font-black italic uppercase tracking-tight">Stack Detail</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="2">
                <circle cx="9" cy="4" r="1.5" />
                <path d="M15 7l-6 3M3 7l6 3M9 10v5" />
                <circle cx="3" cy="7" r="1.5" />
                <circle cx="15" cy="7" r="1.5" />
              </svg>
            </button>
            <button className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <svg width="4" height="18" viewBox="0 0 4 18" fill="black">
                <circle cx="2" cy="2" r="2" />
                <circle cx="2" cy="9" r="2" />
                <circle cx="2" cy="16" r="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dotted background area */}
      <div className="px-5 pb-4" style={{
        backgroundImage: 'radial-gradient(circle, #D0D0D0 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}>
        {/* Hero card */}
        <div className="border-[2.5px] border-black bg-white p-5">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-[1.8rem] font-black italic uppercase leading-[1.05] tracking-tight">
              Top Books
              <br />
              of 2024
            </h2>
            <span
              className="bg-accent-green text-black text-[9px] font-bold tracking-wider px-3 py-1.5 uppercase -rotate-6 mt-1"
              style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.15)' }}
            >
              Active Stack
            </span>
          </div>

          <div className="border-t-[2px] border-black pt-3">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase mb-1">
                  Total Authority
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent-green">✅</span>
                  <span className="font-black text-sm tracking-wide uppercase">14.2K Trust Backing</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase mb-1">
                  Market Phase
                </p>
                <span className="font-black text-lg tracking-tight uppercase">Expansion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book rankings */}
      <div className="px-5 pt-2 pb-32 flex-1 space-y-3">
        {BOOKS.map((book) => (
          <div
            key={book.rank}
            className="border-[2.5px] border-black flex items-center cursor-pointer hover:shadow-[4px_4px_0px_0px_#000] transition-shadow"
            onClick={() => navigate(`/signal/${book.slug}`)}
          >
            {/* Rank */}
            <div className="w-16 shrink-0 flex items-center justify-center py-4 border-r-[2.5px] border-black">
              <span className="text-xl font-black italic text-gray-300">
                #{String(book.rank).padStart(2, '0')}
              </span>
            </div>

            {/* Book cover */}
            <div className="w-14 h-16 bg-black shrink-0 mx-3 flex items-center justify-center">
              <SignalWave className="h-full w-full" label={undefined} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 py-3">
              <h3 className="font-black text-sm tracking-wide uppercase truncate">{book.title}</h3>
              <p className="text-[10px] font-mono text-gray-400 tracking-wider">{book.author}</p>
            </div>

            {/* Change % */}
            <div className="flex items-center gap-1 pr-3 shrink-0">
              <span className={`font-bold text-sm tracking-wide ${
                book.positive ? 'text-accent-green' : 'text-gray-400'
              }`}>
                {book.change}
              </span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <path d="M2 4l3 3 3-3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-5 pb-6 pt-3 bg-white">
        <button
          className="w-full bg-black text-white py-4 flex items-center justify-center gap-3
            font-bold text-sm tracking-[0.15em] uppercase cursor-pointer hover:bg-gray-800 transition-colors"
        >
          <span className="w-6 h-6 border-[2px] border-white rounded-full flex items-center justify-center text-xs">+</span>
          Add to Stack
        </button>
      </div>
    </div>
  )
}
