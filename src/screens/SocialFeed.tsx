import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignalWave } from '../components/SignalWave'

type Tab = 'for-you' | 'trending'

export function SocialFeed() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('for-you')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            {/* Logo icon */}
            <div className="w-9 h-9 border-[2px] border-black rounded-full flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="2">
                <circle cx="9" cy="9" r="3" />
                <path d="M1 9h3m8 0h3M9 1v3m0 8v3" />
              </svg>
            </div>
            <h1 className="text-lg font-black italic tracking-tight uppercase">Signal Alpha</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="cursor-pointer">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth="2.5">
                <circle cx="10" cy="10" r="7" />
                <path d="M15 15l5 5" />
              </svg>
            </button>
            <button className="cursor-pointer">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth="2.5">
                <circle cx="11" cy="8" r="4" />
                <path d="M4 20c0-3.87 3.13-7 7-7s7 3.13 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-0 border-[2px] border-black">
          <div className="px-3 py-2.5 text-[9px] font-bold tracking-[0.12em] uppercase border-r-[2px] border-black bg-white">
            Program your algorithm:
          </div>
          <button
            onClick={() => setTab('for-you')}
            className={`flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase cursor-pointer text-center border-r-[2px] border-black transition-colors
              ${tab === 'for-you' ? 'bg-accent-green text-black' : 'bg-white text-black'}
            `}
          >
            For You
          </button>
          <button
            onClick={() => setTab('trending')}
            className={`flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase cursor-pointer text-center transition-colors
              ${tab === 'trending' ? 'bg-accent-green text-black' : 'bg-white text-black'}
            `}
          >
            Trending
          </button>
        </div>
      </div>

      {/* Feed content */}
      <div className="px-6 pt-6 pb-24 flex-1 space-y-6">

        {/* Card 1: Your Network - Top Books */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-black text-white text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
              Your Network
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">2m ago</span>
          </div>
          <div
            className="border-[2.5px] border-black cursor-pointer hover:shadow-[4px_4px_0px_0px_#000] transition-shadow"
            onClick={() => navigate('/stack/top-books-2024')}
          >
            <div className="p-4 pb-3">
              <h3 className="font-black text-lg italic uppercase tracking-tight mb-4">
                Top Books of 2024
              </h3>
              {/* Three signal wave thumbnails */}
              <div className="flex gap-2 mb-4">
                <SignalWave className="h-28 flex-1" label={undefined} />
                <SignalWave className="h-28 flex-1" label={undefined} />
                <SignalWave className="h-28 flex-1" label={undefined} />
              </div>
            </div>
            <div className="border-t-[2px] border-black px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-accent-green">✅</span>
                <span className="font-bold text-sm tracking-wide uppercase">14.2K Trust Backing</span>
              </div>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>

        {/* Card 2: Signal Spike */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="border-[2px] border-accent-green text-black text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
              Signal Spike
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">Real-time</span>
          </div>
          <div className="border-[2.5px] border-black bg-black text-white p-5">
            <p className="text-[9px] font-mono text-white/40 tracking-wider uppercase mb-2">
              Movement Detected
            </p>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-base uppercase tracking-wide leading-tight">
                  The Alchemist overtook
                  <br />
                  1984
                </h3>
              </div>
              <span className="text-accent-green text-2xl">📈</span>
            </div>
            <div className="flex items-end gap-3">
              <div>
                <span className="text-[2.2rem] font-black italic leading-none">#04</span>
                <span className="text-[10px] font-mono text-white/40 tracking-wider ml-1">PREV</span>
              </div>
              <div className="flex-1 border-t border-white/20 mb-3 mx-2" />
              <div className="text-right">
                <span className="text-[2.2rem] font-black italic text-accent-green leading-none">#01</span>
                <span className="text-[10px] font-mono text-white/40 tracking-wider ml-1">NOW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Hot Activity */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-black text-white text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
              Hot Activity
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">14m ago</span>
          </div>
          <div className="border-[2.5px] border-black p-4">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-11 h-11 bg-gray-200 rounded-full shrink-0 flex items-center justify-center overflow-hidden border-[2px] border-black">
                <span className="text-lg">👩</span>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-snug">
                  <span className="font-black uppercase">@Sarah</span>{' '}
                  just added{' '}
                  <span className="font-black italic uppercase bg-black text-white px-1">Atomic Habits</span>
                  <br />
                  to{' '}
                  <span className="font-bold uppercase bg-accent-green text-black px-1">Non-Fiction Experts</span>
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer hover:text-black">
                    <span>♥</span>
                    <span className="font-mono">422</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer hover:text-black">
                    <span>💬</span>
                    <span className="font-mono">18</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer hover:text-black">
                    <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Council Update */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-accent-blue text-white text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
              Council Update
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">32m ago</span>
          </div>
          <div className="border-[2.5px] border-black p-4">
            <p className="text-sm">
              <span className="font-black uppercase">@James</span>{' '}
              vouched for{' '}
              <span className="font-black italic uppercase">Brave New World</span>{' '}
              in your circle.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-accent-green text-black text-[8px] font-bold tracking-wider px-1.5 py-0.5 uppercase">
                +Signal
              </span>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                TRUST SCORE: 94.2
              </span>
            </div>
          </div>
        </div>

        {/* Card 5: Your Signal */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="border-[2px] border-black text-black text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
              Your Signal
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">1h ago</span>
          </div>
          <div
            className="border-[2.5px] border-black cursor-pointer hover:shadow-[4px_4px_0px_0px_#000] transition-shadow"
            onClick={() => navigate('/stack/top-books-2024')}
          >
            <div className="p-4">
              <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase mb-2">
                Collection Performance
              </p>
              <h3 className="font-black text-base uppercase tracking-wide mb-1">
                My Favorite Books
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Your collection gained 12 new supporters today.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-accent-green" />
                  <span className="text-[10px] font-mono font-bold tracking-wider">+0.042 SIGNAL/HR</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-accent-blue" />
                  <span className="text-[10px] font-mono tracking-wider text-gray-500">RANK #87</span>
                </div>
              </div>
            </div>
            <SignalWave className="h-20" label={undefined} />
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t-[2px] border-black px-6 py-3">
        <div className="flex justify-around">
          {[
            { label: 'FEED', active: true, icon: '◉' },
            { label: 'EXPLORE', active: false, icon: '◎' },
            { label: 'CREATE', active: false, icon: '+' },
            { label: 'SIGNAL', active: false, icon: '◇' },
            { label: 'PROFILE', active: false, icon: '●' },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-0.5 cursor-pointer
                ${item.active ? 'text-black' : 'text-gray-400'}
              `}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-[8px] font-bold tracking-[0.1em] uppercase">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
