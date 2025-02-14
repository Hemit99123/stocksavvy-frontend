import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Shield } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getPost } from "@/data/post"
import type { Post, Comment } from "@/types/post"
import type React from "react" // Import React

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = getPost(params.id)

  if (!post) {
    redirect("/404")
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="container mx-auto py-4 px-4">
        <div className="flex gap-8">
          <div className="flex-1">
            <PostHeader post={post} />
            <PostContent post={post} />
            <CommentSection comments={post.comments} />
          </div>
          <Sidebar subreddit={post.subreddit} />
        </div>
      </div>
    </div>
  )
}

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
        <h1 className="text-xl font-semibold text-white">{post.title}</h1>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>Posted by u/{post.author.username}</span>
          <span>•</span>
          <span>{formatTimeAgo(new Date(post.createdAt))}</span>
        </div>
      </div>
    </div>
  )
}

function PostContent({ post }: { post: Post }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-4 mb-4">
      <div className="flex">
        <VoteButtons upvotes={post.upvotes} />
        <div className="flex-1 text-zinc-100 space-y-4">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <PostActions commentCount={post.commentCount} />
    </div>
  )
}

function VoteButtons({ upvotes }: { upvotes: number }) {
  return (
    <div className="flex flex-col items-center mr-4">
      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-green-500">
        <ArrowBigUp className="h-6 w-6" />
      </Button>
      <span className="text-white font-medium">{upvotes}</span>
      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-red-500">
        <ArrowBigDown className="h-6 w-6" />
      </Button>
    </div>
  )
}

function PostActions({ commentCount }: { commentCount: number }) {
  return (
    <div className="flex items-center gap-4 mt-4 ml-10">
      <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">
        <MessageSquare className="h-4 w-4 mr-2" />
        {commentCount} Comments
      </Button>
      <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  )
}

function CommentSection({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <Avatar src={comment.author.avatar} fallback="M" />
        <span
          className={`font-medium flex items-center gap-1 ${
            comment.author.isModerator ? "text-green-500" : "text-zinc-100"
          }`}
        >
          {comment.author.username}
          {comment.author.isModerator && (
            <>
              <Shield className="h-4 w-4" />
              <span className="text-zinc-400 text-sm">MOD</span>
            </>
          )}
        </span>
        <span className="text-zinc-400 text-sm">• {formatTimeAgo(new Date(comment.createdAt))}</span>
      </div>
      <div className="text-zinc-100 ml-8">
        {comment.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

function Sidebar({ subreddit }: { subreddit: string }) {
  return (
    <div className="hidden lg:block w-80">
      <div className="bg-zinc-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-white mb-4">r/{subreddit}</h2>
        <div className="space-y-4">
          <div>
            <p className="text-zinc-400">
              A catharsis for the frustrated moral philosopher in all of us, and a place to finally find out if you were
              wrong in an argument.
            </p>
          </div>
          <div className="border-t border-zinc-700 pt-4">
            <p className="text-sm text-zinc-400">Created Jun 8, 2013</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Avatar({ src, fallback }: { src?: string; fallback: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-sm font-medium overflow-hidden">
      {src ? <img src={src || "/placeholder.svg"} alt="Avatar" className="w-full h-full object-cover" /> : fallback}
    </div>
  )
}

function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost"
  size?: "default" | "icon"
}) {
  const baseStyles = "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
  const variantStyles = {
    default: "bg-zinc-600 text-white hover:bg-zinc-700",
    ghost: "text-zinc-400 hover:bg-zinc-700",
  }
  const sizeStyles = {
    default: "px-4 py-2",
    icon: "p-2",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
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

