import { redirect } from "next/navigation"
import { getPost } from "@/data/post"
import SharePopUp from '@/components/forum/SharePopUp'
import PostHeader from '@/components/forum/post-detail/PostHeader'
import PostContent from '@/components/forum/post-detail/PostContent'
import CommentSection from '@/components/forum/post-detail/CommentSection'

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(id)

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
            <SharePopUp />
          </div>
        </div>
      </div>
    </div>
  )
}
