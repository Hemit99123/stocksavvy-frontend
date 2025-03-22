import { Bell, Search } from "lucide-react"

export function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          StockForum
        </a>
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-1 px-3 pr-8 rounded-full bg-green-700 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-300" size={18} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="text-green-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

