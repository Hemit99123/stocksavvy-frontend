import { Header } from "@/components/forum/Header"
import { Sidebar } from "@/components/forum/Sidebar"
import { posts } from "@/data/post"
import { Post } from "@/components/forum/Post"

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <div className="container mx-auto py-8">
        <div className="flex">
          <div className="w-64 hidden md:block">
            <Sidebar />
          </div>
          <main className="flex-1 px-4">
            <h1 className="text-2xl font-bold text-green-800 mb-6">Popular Posts</h1>
            <div className="space-y-4">
              {posts.map((post) => (
                <Post
                  post={post}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  return `${Math.floor(diffInSeconds / 86400)} days ago`
}

