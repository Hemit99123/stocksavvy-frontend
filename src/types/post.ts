export interface Post {
    id: string
    title: string
    content: string
    author: {
      username: string
      avatar?: string
    }
    createdAt: string
    upvotes: number
    commentCount: number
    subreddit: string
    comments: Comment[]
  }
  
  export interface Comment {
    id: string
    content: string
    author: {
      username: string
      avatar?: string
      isModerator?: boolean
      flair?: string
    }
    createdAt: string
    upvotes: number
  }
  
  