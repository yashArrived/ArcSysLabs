import { Link } from 'react-router-dom'
import { Home, Sparkles, PenLine } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-[#FFB6A9] text-xl font-bold">
          Logo
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <div className="w-[1px] h-6 bg-gray-700" />
          <nav className="flex items-center space-x-6">
            <Link to="/explore" className="text-[#FFB6A9] font-bold hover:text-white flex items-center gap-2">
              <Home className="w-5 h-5" /> Explore
            </Link>
            <Link to="/create" className="text-gray-300 hover:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Create
            </Link>
            <Link to="/edit" className="text-gray-300 hover:text-white flex items-center gap-2">
              <PenLine className="w-5 h-5" /> Edit
            </Link>
          </nav>
        </div>
      </div>
      <button className="px-6 py-2 bg-[#FFB6A9] text-black rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium">
        Login
      </button>
    </header>
  )
}
