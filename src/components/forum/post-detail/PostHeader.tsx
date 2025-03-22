import { Post } from "@/types/post-dummy";
import { FaArrowLeft } from "react-icons/fa";

/* 📌 AVATAR */
export function Avatar({ src, fallback }: { src?: string; fallback: string }) {
    return <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">{src ? <img src={"https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"} alt="Avatar" /> : fallback}</div>
}

/* 📌 POST HEADER */
function PostHeader({ post }: { post: Post }) {
    return (
      <div className="flex items-center gap-2 mb-4">
        <a href="/forum" className="text-zinc-400 hover:text-white">
          <FaArrowLeft />
        </a>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>Posted by u/{post.subreddit}</span>
            <span>•</span>
          </div>
        </div>
      </div>
    )
}

export default PostHeader