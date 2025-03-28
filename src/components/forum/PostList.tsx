import { useEffect, useState } from "react"
import { Post } from "./Post"
import NoPostBanner from "./NoPostBanner"
import Loading  from "@/components/common/Loading"
import httpHeader from "@/services/httpHeader"
import { handleUnauthenticatedUser } from "@/lib/auth"
import { Forum } from "@/types/forum"

export function PostList() {
  const [posts, setPosts] = useState<Forum[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        const response = await httpHeader.get("/forum/all-questions")
        setPosts(response.data.questions)
      } catch (error) {
        handleUnauthenticatedUser(error)
      } finally {
        setLoading(false)
      }
    }

    handleGetPosts()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="space-y-4">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <NoPostBanner />
      )}
    </div>
  )
}
