"use client"

import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatTimeAgo } from '@/lib/formatTime';
import {Post as PostType} from "@/types/post"


interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4 cursor-pointer" 
      onClick={handleClick}
    >
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <ArrowBigUp className="text-gray-400 hover:text-green-500 cursor-pointer" />
          <span className="text-green-800 font-bold">{post.upvotes}</span>
          <ArrowBigDown className="text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">
            <span className="text-green-800 hover:text-green-600">{post.title}</span>
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Posted by {post.author.username} • {formatTimeAgo(new Date(post.createdAt))}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <button className="flex items-center space-x-1 hover:bg-green-100 p-1 rounded">
              <MessageSquare size={16} />
              <span>{post.commentCount} Comments</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-green-100 p-1 rounded">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
