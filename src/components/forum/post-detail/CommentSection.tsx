import { Shield } from "lucide-react";
import { Avatar } from "./PostHeader";
import type { Comment } from "@/types/post"



/* 📌 TIME FORMATTER */
function formatTimeAgo(date: Date): string {
    const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    return diff < 60 ? `${diff} sec ago` : diff < 3600 ? `${Math.floor(diff / 60)} min ago` : `${Math.floor(diff / 3600)} hrs ago`
  }
  
/* 📌 COMMENT ITEM (NESTED REPLIES) */
function CommentItem({ comment, depth }: { comment: Comment; depth: number }) {

    return (
      <div className={`relative p-4 bg-zinc-800 rounded-lg ${depth > 0 ? "ml-8 border-l-4 border-zinc-700 pl-4" : ""}`}>
        {/* Author */}
        <div className="flex items-center gap-2 mb-2">
          <Avatar src={"https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"} fallback="M" />
          <span className={`font-medium flex items-center gap-1 ${comment.author.isModerator ? "text-green-500" : ""}`}>
            {comment.author.username}
            {comment.author.isModerator && <Shield className="h-4 w-4" />}
          </span>
          <span className="text-zinc-400 text-sm">• {formatTimeAgo(new Date(comment.createdAt))}</span>
        </div>
  
        {/* Content */}
        <div className="text-zinc-100">{comment.content}</div>
      </div>
    )
  }

/* 📌 COMMENT SECTION */
function CommentSection({ comments }: { comments: Comment[] }) {
    return (
      <div className="space-y-6 mt-6">
        <h2 className="text-lg font-semibold">Discussion ({comments.length})</h2>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} depth={0} />
        ))}
      </div>
    )
  }

export default CommentSection