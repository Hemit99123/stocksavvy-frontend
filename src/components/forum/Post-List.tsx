import { Post } from "./Post"
import {posts} from "@/data/post"
export function PostList() {

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={[post.id]} post={post} />
      ))}
    </div>
  )
}

