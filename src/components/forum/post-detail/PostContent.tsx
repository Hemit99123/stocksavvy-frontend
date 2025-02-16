"use client"

import useSharePopupStore from "@/store/sharepopup"
import { Post } from "@/types/post"
import { MessageSquare, Share2 } from "lucide-react"

/* 📌 POST ACTIONS */
function PostActions({ commentCount }: { commentCount: number }) {
    const togglePopupStatus = useSharePopupStore((state) => state.toggleStatus)
  
    return (
      <div className="flex items-center gap-4 mt-4 ml-px">
        <button className="flex items-center hover:text-zinc-100 transition">
          <MessageSquare className="h-4 w-4 mr-2" />
          {commentCount} Comments
        </button>
        <button className="flex items-center hover:text-zinc-100 transition" onClick={togglePopupStatus}>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </button>
      </div>
    )
}
/* 📌 POST CONTENT */
function PostContent({ post }: { post: Post }) {
    return (
      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
        <div className="flex">
          <div className="flex-1 space-y-4">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <PostActions commentCount={post.commentCount} />
      </div>
    )
  }

export default PostContent