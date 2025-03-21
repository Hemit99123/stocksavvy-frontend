export interface Post {
    id: string
    title: string
    content: string
    createdAt: string
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
  }
  
  