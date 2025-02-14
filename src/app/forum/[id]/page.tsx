import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Shield } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getPost } from "@/data/post"
import type { Post, Comment } from "@/types/post"

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = getPost(params.id)

  if (!post) {
    redirect("/404")
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <PostHeader post={post} />
            <PostContent post={post} />
            <CommentSection comments={post.comments} />
          </div>

          {/* Sidebar */}
          <Sidebar subreddit={post.subreddit} />
        </div>
      </div>
    </div>
  )
}

/* 📌 POST HEADER */
function PostHeader({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Link href="/forum" className="text-zinc-400 hover:text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <Avatar src={post.author.avatar} fallback="r/" />
      <div className="flex-1">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Link href={`/r/${post.subreddit}`} className="hover:text-white">
            r/{post.subreddit}
          </Link>
          <span>•</span>
          <span>Posted by u/{post.author.username}</span>
          <span>•</span>
          <span>{formatTimeAgo(new Date(post.createdAt))}</span>
        </div>
      </div>
    </div>
  )
}

/* 📌 POST CONTENT */
function PostContent({ post }: { post: Post }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-4 mb-4">
      <div className="flex">
        <VoteButtons upvotes={post.upvotes} />
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

/* 📌 VOTE BUTTONS */
function VoteButtons({ upvotes }: { upvotes: number }) {
  return (
    <div className="flex flex-col items-center mr-4">
      <button className="hover:text-green-500 transition">
        <ArrowBigUp className="h-6 w-6" />
      </button>
      <span className="text-white font-medium">{upvotes}</span>
      <button className="hover:text-red-500 transition">
        <ArrowBigDown className="h-6 w-6" />
      </button>
    </div>
  )
}

/* 📌 POST ACTIONS */
function PostActions({ commentCount }: { commentCount: number }) {
  return (
    <div className="flex items-center gap-4 mt-4 ml-10">
      <button className="hover:text-zinc-100 transition">
        <MessageSquare className="h-4 w-4 mr-2" />
        {commentCount} Comments
      </button>
      <button className="hover:text-zinc-100 transition">
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </button>
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

/* 📌 COMMENT ITEM (NESTED REPLIES) */
function CommentItem({ comment, depth }: { comment: Comment; depth: number }) {
  return (
    <div className={`relative p-4 bg-zinc-800 rounded-lg ${depth > 0 ? "ml-8 border-l-4 border-zinc-700 pl-4" : ""}`}>
      {/* Author */}
      <div className="flex items-center gap-2 mb-2">
        <Avatar src={""} fallback="M" />
        <span className={`font-medium flex items-center gap-1 ${comment.author.isModerator ? "text-green-500" : ""}`}>
          {comment.author.username}
          {comment.author.isModerator && <Shield className="h-4 w-4" />}
        </span>
        <span className="text-zinc-400 text-sm">• {formatTimeAgo(new Date(comment.createdAt))}</span>
      </div>

      {/* Content */}
      <div className="text-zinc-100">{comment.content}</div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-2 text-zinc-400 text-sm">
        <div className="flex items-center gap-1 group">
          <button className="hover:text-green-500 transition">
            <ArrowBigUp className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </button>
          <span className="text-white">{comment.upvotes}</span>
          <button className="hover:text-red-500 transition">
            <ArrowBigDown className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* 📌 SIDEBAR */
function Sidebar({ subreddit }: { subreddit: string }) {
  return (
    <div className="hidden lg:block w-80">
      <div className="bg-zinc-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold">r/{subreddit}</h2>
        <p className="text-zinc-400">A place for discussion and engagement.</p>
      </div>
    </div>
  )
}

/* 📌 AVATAR */
function Avatar({ src, fallback }: { src?: string; fallback: string }) {
  return <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">{src ? <img src={src} alt="Avatar" /> : fallback}</div>
}

/* 📌 TIME FORMATTER */
function formatTimeAgo(date: Date): string {
  const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  return diff < 60 ? `${diff} sec ago` : diff < 3600 ? `${Math.floor(diff / 60)} min ago` : `${Math.floor(diff / 3600)} hrs ago`
}
