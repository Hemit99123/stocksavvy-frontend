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
            <h1 className="text-2xl font-bold text-green-800 mb-6">Recent Posts</h1>
            <div className="space-y-4">
              {posts.map((post) => (
                <Post
                  key={post.id}
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