import { useState } from "react"
import useSharePopupStore from "@/store/sharepopup"
import { Forum } from "@/types/forum"
import { MessageSquare, Share2, X } from "lucide-react"
import httpHeader from "@/services/httpHeader"
import { useParams } from "react-router"

/* 📌 POST ACTIONS */
function PostActions() {
  const params = useParams()
  const id = params.id
  const togglePopupStatus = useSharePopupStore((state) => state.toggleStatus)
  const [isFormOpen, setFormOpen] = useState(false)
  const [content, setContent] = useState("")

  const handlePostComment = async () => {
    await httpHeader.post("/forum/create-comment", {
      content,
      forumID: id
    })
  }

  return (
    <>
      <div className="flex items-center gap-4 mt-4 ml-px">
        <button className="flex items-center hover:text-zinc-100 transition" onClick={() => setFormOpen(true)}>
          <MessageSquare className="h-4 w-4 mr-2" />
        </button>
        <button className="flex items-center hover:text-zinc-100 transition" onClick={togglePopupStatus}>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </button>
      </div>

      {/* 📌 FORM MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-zinc-900 p-6 rounded-lg w-[90%] max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Leave a Comment</h2>
              <button onClick={() => setFormOpen(false)} className="text-zinc-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <textarea
              className="w-full p-3 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-white resize-none"
              placeholder="Write your message here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setFormOpen(false)}
                className="px-4 py-2 text-sm bg-zinc-700 rounded-md hover:bg-zinc-600 transition"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm bg-blue-600 rounded-md hover:bg-blue-500 transition"
                onClick={handlePostComment}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* 📌 POST CONTENT */
function PostContent({ post }: { post: Forum | undefined }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-4 mb-4">
      <div className="flex">
        <div className="flex-1 space-y-4">
          {post?.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <PostActions />
    </div>
  )
}

export default PostContent
