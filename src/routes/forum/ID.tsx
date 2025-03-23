import { useNavigate } from "react-router";
import { useParams } from "react-router";
import SharePopUp from "@/components/forum/SharePopUp";
import PostHeader from "@/components/forum/post-detail/PostHeader";
import PostContent from "@/components/forum/post-detail/PostContent";
import CommentSection from "@/components/forum/post-detail/CommentSection";
import { useEffect, useState } from "react";
import { Forum, Comment } from "@/types/forum";
import httpHeader from "@/services/httpHeader";

const ID = () => {
  const params = useParams();
  const [post, setPost] = useState<Forum>();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>();
  const id = params.id;

  useEffect(() => {
    const handleGetPost = async () => {
      const response = await httpHeader.get(`/forum/get?id=${id}`);
      setPost(response.data.question);
      setComments(response.data.comment);
    };

    handleGetPost();
  }, [id]);

  const navigate = useNavigate();

  if (!post) {
    navigate("/404");
  }

  const toggleComments = async () => {
    if (showComments === false) {
        const response = await httpHeader.get(`/forum/get-comments?id=${id}`)
        setComments(response.data.comments)
    }
    
    setShowComments((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <PostHeader post={post} />
            <PostContent post={post} />
            <button onClick={toggleComments} className="my-4">
              {showComments ? "Hide Comments" : "Show Comments"}
            </button>
            {showComments && <CommentSection comments={comments} />}
            <SharePopUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ID;
