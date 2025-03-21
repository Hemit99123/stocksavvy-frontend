import type { Post } from "@/types/post-dummy"

export const posts: Post[] = [
  {
    id: "1",
    title: "AITA: i (28F) want my dad (61M) to stop texting me goodnight",
    content: `Im going to be vague, But im an adult and my dad will text me every day, multiple times a day. He has really good intentions and cares about me but he texts me "goodnight" every night. Which sounds like awww nice your dad loves you. But when youre getting like 8 different texts a day, it feels different

He is married and makes it KNOWN that i am his favorite child, even though i have a plethora of siblings. He has said verbatim that i am his favorite.

I truly dont know how to go about this. Hes a sensitive man and i would feel broken if i hurt him`,
    author: {
      username: "throwaway_dad_texts",
      avatar: "/placeholder.svg",
    },
    createdAt: "2024-02-13T22:15:00Z",
    commentCount: 48,
    subreddit: "AmItheAsshole",
    comments: [
      {
        id: "c1",
        content: "Welcome to r/AmITheAsshole. Please view our voting guide here, and remember to use only one judgement in your comment.\n\nOP has offered the following explanation for why they think they might be the asshole:\n\nI feel like im an asshole for not letting my dad show his love for me on the regular basis that he does. Even typing this out sounds bad, but i just dont want to worry about always responding to his texts",
        author: {
          username: "Judgement_Bot_AITA",
          avatar: "/placeholder.svg",
          isModerator: true,
        },
        createdAt: "2024-02-13T22:16:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "AITA for not wanting to share my lottery winnings with my family?",
    content: `I (34M) recently won $50,000 in the lottery. It's not a huge amount, but it would help me pay off my student loans. My family found out and now they're all asking for a share, saying family should help family.

I've always been independent and worked hard for what I have. They've never helped me financially before. AITA for wanting to keep the money for myself?`,
    author: {
      username: "lotteryThrowaway123",
      avatar: "/placeholder.svg",
    },
    createdAt: "2024-02-13T20:30:00Z",
    commentCount: 342,
    subreddit: "AmItheAsshole",
    comments: [],
  },
  {
    id: "3",
    title: "AITA for asking my roommate to stop cooking fish at 3AM?",
    content: `My roommate (25F) has a weird sleep schedule and often cooks fish in the middle of the night. The smell wakes me up and lingers for hours. I've tried talking to her about it but she says that's the only time she can eat due to her work schedule.

I suggested she meal prep or eat something else, but she says I'm being controlling. AITA?`,
    author: {
      username: "sleeplessinSeattle",
      avatar: "/placeholder.svg",
    },
    createdAt: "2024-02-13T18:45:00Z",
    commentCount: 156,
    subreddit: "AmItheAsshole",
    comments: [],
  },
]

export function getPost(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}

