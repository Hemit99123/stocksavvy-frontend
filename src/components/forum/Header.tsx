import { Plus } from "lucide-react"

export function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          StockForum
        </a>
        
        <div className="flex items-center space-x-4">
          <Plus className="text-green-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

