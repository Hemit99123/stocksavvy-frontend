import { Home, Bookmark } from "lucide-react"

export function Sidebar() {
  return (
    <div className="bg-white p-4 space-y-4 border-r border-green-200">
      <a href="/" className="flex items-center space-x-2 text-green-800 hover:bg-green-100 p-2 rounded-lg">
        <Home size={20} />
        <span>Home</span>
      </a>
      <a href="/saved" className="flex items-center space-x-2 text-green-800 hover:bg-green-100 p-2 rounded-lg">
        <Bookmark size={20} />
        <span>Saved</span>
      </a>
    </div>
  )
}

