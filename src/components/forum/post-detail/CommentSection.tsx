import type { Comment } from "@/types/forum"

/* 📌 COMMENT SECTION */
function CommentSection({ comments }: { comments: Comment[] | undefined}) {
    return (
      <div className="space-y-6 mt-6">
        <h2 className="text-lg font-semibold">Discussion ({comments?.length})</h2>
        {comments?.map((comment) => (
      <div className={`relative p-4 bg-zinc-800 rounded-lg ${0 > 0 ? "ml-8 border-l-4 border-zinc-700 pl-4" : ""}`}>
      {/* Author */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium flex items-center gap-1">
          {comment.email}
        </span>
        <span className="text-zinc-400 text-sm"></span>
      </div>

      {/* Content */}
      <div className="text-zinc-100">{comment.content}</div>
    </div>        
  ))}
      </div>
    )
  }

export default CommentSection