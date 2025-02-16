"use client"

import { MessageSquare, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatTimeAgo } from '@/lib/formatTime';
import {Post as PostType} from "@/types/post"


interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/forum/${post.id}`);
  };

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4 cursor-pointer" 
      onClick={handleClick}
    >
      <div className="flex">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">
            <span className="text-green-800 hover:text-green-600">{post.title}</span>
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Posted by {post.author.username} • {formatTimeAgo(new Date(post.createdAt))}
          </p>
        </div>
      </div>
    </div>
  );
}
