import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { SignalWave } from '../components/SignalWave'

const BOOK_DATABASE = [
  { id: '1984', title: '1984', author: 'GEORGE ORWELL' },
  { id: 'dune', title: 'DUNE', author: 'FRANK HERBERT' },
  { id: 'hitchhiker', title: "THE HITCHHIKER'S GUIDE", author: 'DOUGLAS ADAMS' },
  { id: 'brave-new', title: 'BRAVE NEW WORLD', author: 'ALDOUS HUXLEY' },
  { id: 'fahrenheit', title: 'FAHRENHEIT 451', author: 'RAY BRADBURY' },
  { id: 'gatsby', title: 'THE GREAT GATSBY', author: 'F. SCOTT FITZGERALD' },
  { id: 'alchemist', title: 'THE ALCHEMIST', author: 'PAULO COELHO' },
  { id: 'atomic', title: 'ATOMIC HABITS', author: 'JAMES CLEAR' },
]

export function AddFavorites() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [added, setAdded] = useState<typeof BOOK_DATABASE>([])

  const filteredBooks = search.trim()
    ? BOOK_DATABASE.filter(
        (b) =>
          !added.find((a) => a.id === b.id) &&
          (b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.author.toLowerCase().includes(search.toLowerCase())),
      )
    : BOOK_DATABASE.filter((b) => !added.find((a) => a.id === b.id)).slice(0, 4)

  const addBook = (book: (typeof BOOK_DATABASE)[0]) => {
    setAdded((prev) => [...prev, book])
    setSearch('')
  }

  const removeBook = (id: string) => {
    setAdded((prev) => prev.filter((b) => b.id !== id))
  }

  return (
    <div className="flex-1 flex flex-col px-6 pt-8 pb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider">STEP 03 / 04</span>
        <span className="text-[9px] font-mono text-gray-400 tracking-wider">
          RETURN TO: BUILDING YOUR LIBRARY
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-[2rem] font-black uppercase leading-[1.0] tracking-tight mb-2">
        Add your
        <br />
        favorites<span className="text-accent-green">.</span>
      </h2>

      <p className="text-xs text-gray-500 mb-4">
        What do you love in this category? Add at least 3 to continue.
      </p>

      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for any book..."
          className="w-full border-[2.5px] border-black px-4 py-3 pr-12 text-sm font-mono
            placeholder:text-gray-400 focus:outline-none focus:border-accent-green"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="black" strokeWidth="2">
            <circle cx="9" cy="9" r="6" />
            <path d="M14 14l4 4" />
          </svg>
        </div>
      </div>

      {/* Search results */}
      <div className="space-y-2 mb-4 flex-1 overflow-y-auto">
        {filteredBooks.map((book) => (
          <div key={book.id} className="flex items-center gap-3">
            {/* Book cover placeholder */}
            <div className="w-12 h-16 bg-black shrink-0 flex items-center justify-center">
              <span className="text-white/40 text-[8px] font-mono">{book.title.slice(0, 4)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm tracking-wide uppercase truncate">{book.title}</p>
              <p className="text-[10px] font-mono text-gray-400 tracking-wider">{book.author}</p>
            </div>
            <button
              onClick={() => addBook(book)}
              className="w-9 h-9 border-[2px] border-black flex items-center justify-center
                hover:bg-accent-green hover:border-accent-green cursor-pointer shrink-0 text-lg transition-colors"
            >
              +
            </button>
          </div>
        ))}
        {filteredBooks.length === 0 && search.trim() && (
          <p className="text-xs font-mono text-gray-400 text-center py-4">No results found</p>
        )}
      </div>

      {/* Signal wave divider */}
      <SignalWave className="h-24 mb-4" label="CURATION_01" />

      {/* Added books strip */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-mono text-gray-500 tracking-wider">
            YOUR LIST ({added.length}/3)
          </span>
          <span className="text-[9px] font-mono text-gray-400 tracking-wider">
            SIGNAL...
          </span>
        </div>
        <div className="flex gap-2">
          {added.map((book) => (
            <button
              key={book.id}
              onClick={() => removeBook(book.id)}
              className="w-14 h-18 bg-black flex items-center justify-center shrink-0 cursor-pointer
                hover:opacity-80 relative group"
            >
              <span className="text-white/40 text-[7px] font-mono text-center px-1 leading-tight">
                {book.title}
              </span>
              <div className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100
                flex items-center justify-center transition-opacity">
                <span className="text-white text-xs">✕</span>
              </div>
            </button>
          ))}
          {Array.from({ length: Math.max(0, 3 - added.length) }, (_, i) => (
            <div
              key={`empty-${i}`}
              className="w-14 h-18 border-[2px] border-dashed border-gray-300 flex items-center justify-center"
            >
              <span className="text-gray-300 text-lg">+</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Button
        variant="blue"
        disabled={added.length < 3}
        onClick={() => navigate('/onboarding/collection-created')}
      >
        Review List
      </Button>
    </div>
  )
}
