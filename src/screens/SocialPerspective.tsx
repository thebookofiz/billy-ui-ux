import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ProgressBar } from '../components/ProgressBar'

const CONNECTIONS = [
  {
    id: 'farcaster',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M3 3h18v18H3V3zm3 3v4.5l3-1.5 3 1.5 3-1.5 3 1.5V6h-2v3l-1-.5-3 1.5-3-1.5-1 .5V6H6z" />
      </svg>
    ),
    label: 'CONNECT FARCASTER',
    result: '↑26 FRIENDS FOUND',
    connected: false,
  },
  {
    id: 'x',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: 'CONNECT X/TWITTER',
    result: null,
    connected: false,
  },
  {
    id: 'instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
      </svg>
    ),
    label: 'CONNECT INSTAGRAM',
    result: null,
    connected: false,
  },
]

export function SocialPerspective() {
  const navigate = useNavigate()
  const [connected, setConnected] = useState<Record<string, boolean>>({})

  const toggleConnect = (id: string) => {
    setConnected((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const connectedCount = Object.values(connected).filter(Boolean).length

  return (
    <div className="flex-1 flex flex-col px-6 pt-6 pb-6">
      {/* Progress */}
      <div className="mb-6">
        <ProgressBar current={4} total={5} color="green" />
        <div className="flex justify-between mt-1">
          <span className="text-[9px] font-mono text-gray-400 tracking-wider">STEP 04: PERSPECTIVE</span>
        </div>
      </div>

      {/* Headline */}
      <h2 className="text-[1.9rem] font-black uppercase leading-[1.05] tracking-tight mb-4">
        Create your
        <br />
        <span className="text-accent-green">Social</span>
        <br />
        Perspective
      </h2>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full border-[2.5px] border-black flex items-center justify-center">
          <span className="text-3xl">❓</span>
        </div>
      </div>

      <h3 className="font-black text-sm uppercase tracking-wide text-center mb-1">
        The world is noisy.
        <br />
        <span className="text-accent-green">Trust your circle.</span>
      </h3>

      <p className="text-xs text-gray-500 text-center mb-6">
        Filtered knowledge through the lens of your connections.
      </p>

      {/* Import social graph header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-accent-green font-bold text-sm">↑</span>
        <span className="font-bold text-sm uppercase tracking-wider">Import Social Graph</span>
      </div>

      {/* Connection options */}
      <div className="space-y-3 flex-1">
        {CONNECTIONS.map((conn) => {
          const isConnected = connected[conn.id]
          return (
            <button
              key={conn.id}
              onClick={() => toggleConnect(conn.id)}
              className={`w-full flex items-center border-[2.5px] p-0 cursor-pointer transition-all
                ${isConnected ? 'border-accent-green' : 'border-black'}
              `}
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                {conn.icon}
              </div>
              <span className="flex-1 font-bold text-xs tracking-[0.1em] uppercase px-3 text-left">
                {conn.label}
              </span>
              {isConnected && conn.result && (
                <span className="text-accent-green text-[8px] font-mono font-bold tracking-wider px-2 shrink-0">
                  {conn.result}
                </span>
              )}
              <div className={`w-12 h-12 flex items-center justify-center border-l-[2.5px] shrink-0
                ${isConnected ? 'border-accent-green bg-accent-green text-black' : 'border-black'}
              `}>
                <span className="text-sm font-bold">{isConnected ? '✓' : '→'}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Social connections status */}
      {connectedCount > 0 && (
        <div className="mt-4 mb-2">
          <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
            SOCIAL CONNECTIONS: {connectedCount}
          </p>
        </div>
      )}

      {/* CTA */}
      <Button
        variant="blue"
        onClick={() => navigate('/onboarding/council')}
        className="mt-4"
      >
        Invite to Your Book Circle →
      </Button>
    </div>
  )
}
