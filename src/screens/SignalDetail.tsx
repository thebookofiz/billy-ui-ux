import { useNavigate, useParams } from 'react-router-dom'
import { SignalWave } from '../components/SignalWave'

const BOOKS: Record<string, { title: string; author: string; rank: number; communityTrust: number; expertVouch: number }> = {
  'the-alchemist': { title: 'THE\nALCHEMIST', author: 'P. COELHO', rank: 1, communityTrust: 88, expertVouch: 64 },
  '1984': { title: '1984', author: 'G. ORWELL', rank: 2, communityTrust: 82, expertVouch: 71 },
  'atomic-habits': { title: 'ATOMIC\nHABITS', author: 'J. CLEAR', rank: 3, communityTrust: 76, expertVouch: 58 },
  'meditations': { title: 'MEDITATIONS', author: 'M. AURELIUS', rank: 4, communityTrust: 69, expertVouch: 52 },
}

const MUTUAL_FRIENDS = [
  { name: '@JAMES', avatar: 'J' },
  { name: '@SARAH_K', avatar: 'S' },
  { name: '@MARC', avatar: 'M' },
  { name: '@ELENA', avatar: 'E' },
]

const TOP_SUPPORTERS = [
  { name: '0X71...4A21', avatar: null, avatarImg: true, trust: 840 },
  { name: 'SCHOLAR_A', avatar: null, avatarImg: true, trust: 420 },
  { name: 'L-NODE', avatar: 'LN', avatarImg: false, trust: 310 },
  { name: 'Z-ALPHA', avatar: 'Z', avatarImg: false, trust: 195 },
]

export function SignalDetail() {
  const navigate = useNavigate()
  const { itemId } = useParams()
  const book = BOOKS[itemId || 'the-alchemist'] || BOOKS['the-alchemist']

  // Bar chart data (mock signal history)
  const bars = [4, 6, 3, 8, 5, 9, 7, 6, 10, 8, 5, 12, 9, 7, 11]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 border-[2.5px] border-black flex items-center justify-center cursor-pointer hover:bg-gray-100"
            >
              ←
            </button>
            <h1 className="text-base font-black italic uppercase tracking-tight">Signal Detail</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="black" strokeWidth="2.5">
                <path d="M2 2h12v16l-6-4-6 4V2z" />
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

      {/* Content */}
      <div className="px-6 pb-8" style={{
        backgroundImage: 'radial-gradient(circle, #D0D0D0 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}>
        {/* Signal wave hero with rank badge */}
        <div className="relative mb-6">
          <SignalWave className="h-44" label={undefined} />
          <span
            className="absolute bottom-2 right-2 bg-accent-green text-black text-sm font-black tracking-wider px-3 py-1.5 -rotate-3"
            style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.15)' }}
          >
            #{String(book.rank).padStart(2, '0')}
          </span>
        </div>

        {/* Title + Author */}
        <h2 className="text-[2.4rem] font-black italic uppercase leading-[1.0] tracking-tight mb-1 whitespace-pre-line">
          {book.title}
        </h2>
        <p className="text-sm font-mono text-gray-500 tracking-wider uppercase mb-6">
          {book.author}
        </p>

        {/* Signal Breakdown */}
        <div className="border-t-[2px] border-black pt-4 mb-6">
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Signal Breakdown</h3>

          <div className="border-[2.5px] border-black p-4 space-y-4">
            {/* Community Trust */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase">Community Trust</span>
                <span className="text-[10px] font-mono font-bold">{book.communityTrust}%</span>
              </div>
              <div className="h-3 bg-gray-200 w-full">
                <div
                  className="h-full bg-accent-green"
                  style={{ width: `${book.communityTrust}%` }}
                />
              </div>
            </div>

            {/* Expert Vouch */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase">Expert Vouch</span>
                <span className="text-[10px] font-mono font-bold">{book.expertVouch}%</span>
              </div>
              <div className="h-3 bg-gray-200 w-full">
                <div
                  className="h-full bg-black"
                  style={{ width: `${book.expertVouch}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mutual Friends */}
        <div className="border-t-[2px] border-black pt-4 mb-6">
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Mutual Friends</h3>
          <div className="flex items-center gap-3 mb-4">
            {MUTUAL_FRIENDS.map((friend) => (
              <div key={friend.name} className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 bg-gray-200 rounded-full border-[2px] border-black flex items-center justify-center">
                  <span className="text-sm font-bold">{friend.avatar}</span>
                </div>
                <span className="text-[8px] font-mono text-gray-500 tracking-wider">{friend.name}</span>
              </div>
            ))}
          </div>

          {/* Stake Trust CTA */}
          <button className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 font-bold text-sm tracking-[0.15em] uppercase cursor-pointer hover:bg-gray-800 transition-colors">
            <span className="text-accent-green text-lg">⚡</span>
            Stake Trust
          </button>
        </div>

        {/* Signal History bar chart */}
        <div className="border-[2.5px] border-black p-4 mb-6">
          <div className="flex items-end justify-between gap-1 h-20">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-black"
                style={{ height: `${(h / 12) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Top Supporters - single column */}
        <div className="border-t-[2px] border-black pt-4">
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Top Supporters</h3>

          <div className="space-y-2">
            {TOP_SUPPORTERS.map((supporter) => (
              <div
                key={supporter.name}
                className="flex items-center gap-3 border-[2px] border-black p-3"
              >
                <div className={`w-9 h-9 shrink-0 flex items-center justify-center border-[2px] border-black ${
                  supporter.avatarImg ? 'bg-gray-200 rounded-full' : 'bg-accent-green'
                }`}>
                  {supporter.avatar ? (
                    <span className="text-xs font-bold text-black">{supporter.avatar}</span>
                  ) : (
                    <span className="text-sm">👤</span>
                  )}
                </div>
                <span className="flex-1 font-bold text-xs tracking-[0.1em] uppercase">{supporter.name}</span>
                <span className="font-black text-sm tracking-wide">{supporter.trust} TRUST</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
