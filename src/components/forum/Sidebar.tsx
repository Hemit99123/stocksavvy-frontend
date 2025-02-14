import { Home, TrendingUpIcon as Trending, Bookmark, Settings } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="bg-white p-4 space-y-4 border-r border-green-200">
      <Link href="/" className="flex items-center space-x-2 text-green-800 hover:bg-green-100 p-2 rounded-lg">
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link href="/trending" className="flex items-center space-x-2 text-green-800 hover:bg-green-100 p-2 rounded-lg">
        <Trending size={20} />
        <span>Trending</span>
      </Link>
      <Link href="/saved" className="flex items-center space-x-2 text-green-800 hover:bg-green-100 p-2 rounded-lg">
        <Bookmark size={20} />
        <span>Saved</span>
      </Link>
      <Link href="/settings" className="flex items-center space-x-2 text-green-800 hover:bg-green-100 p-2 rounded-lg">
        <Settings size={20} />
        <span>Settings</span>
      </Link>
      <div className="pt-4 border-t border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Top Communities</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/r/gardening" className="text-green-700 hover:text-green-900">
              r/gardening
            </Link>
          </li>
          <li>
            <Link href="/r/sustainability" className="text-green-700 hover:text-green-900">
              r/sustainability
            </Link>
          </li>
          <li>
            <Link href="/r/nature" className="text-green-700 hover:text-green-900">
              r/nature
            </Link>
          </li>
          <li>
            <Link href="/r/environment" className="text-green-700 hover:text-green-900">
              r/environment
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

