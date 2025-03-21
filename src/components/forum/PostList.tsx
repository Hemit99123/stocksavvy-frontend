"use client"

import { useEffect } from "react"
import { Post } from "./Post"
import {posts} from "@/data/post"
import httpHeader from "@/services/httpHeader"
import { handleUnauthenticatedUser } from "@/lib/auth"
export function PostList() {

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        await httpHeader.get("/forum/all-questions");
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

