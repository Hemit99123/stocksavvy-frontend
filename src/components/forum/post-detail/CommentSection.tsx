import { useEffect, useState } from "react";
import type { Comment } from "@/types/forum";
import { handleGetSession } from "@/lib/auth";
import { Session } from "@/types/session";
import httpHeader from "@/services/httpHeader";
import { Trash } from "lucide-react";

/* 📌 COMMENT SECTION */
function CommentSection({ comments: initialComments }: { comments: Comment[] | undefined }) {
  const [session, setSession] = useState<Session>();
  const [comments, setComments] = useState<Comment[]>(initialComments ?? []);

  useEffect(() => {
    async function fetchSession() {
      const userSession = await handleGetSession();
      setSession(userSession.session);
    }
    fetchSession();
  }, []);

  const handleDeleteComment = async (id: string) => {
    const response = await httpHeader.delete("/forum/delete-comment", {
      data: { id }
    });

    if (response.status === 200) {
      setComments((prevComments) => prevComments.filter(comment => comment.id !== id));
    }
  };

  return (
    <div className="space-y-6 mt-6">
      <h2 className="text-lg font-semibold">Discussion ({comments.length})</h2>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className={"relative p-4 bg-zinc-800 rounded-lg"}
        >
          {/* Author */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium flex items-center gap-1">
              {comment.email}
            </span>
            {session?.email === comment.email && (
              <div>
                <span className="text-green-400 text-sm"> (You) </span>
                <button className="bg-red-500 px-2 py-2 rounded-full" onClick={() => handleDeleteComment(comment.id)}>
                  <Trash size={15} />
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="text-zinc-100">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
