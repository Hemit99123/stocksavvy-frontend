"use client"

import { useEffect, useState } from "react"
import { Post } from "./Post"
import httpHeader from "@/services/httpHeader"
import { handleUnauthenticatedUser } from "@/lib/auth"
import { Post as PostType } from "@/types/post"
export function PostList() {

  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        const response = await httpHeader.get("/forum/all-questions");
        setPosts(response.data.questions)
        /* eslint-disable  @typescript-eslint/no-explicit-any */
      } catch (error: any) {
        handleUnauthenticatedUser(error)
      }
    };   

    handleGetPosts()
  }, [])
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

