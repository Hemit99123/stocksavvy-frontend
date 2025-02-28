"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { topics } from "@/data/topics"
import type { Topic } from "@/types/topic"

// Utility function for merging class names
const cn = (...inputs: (string | undefined)[]) => {
  return inputs.filter(Boolean).join(" ")
}

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"


// Badge Component
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
Badge.displayName = "Badge"

const Sidebar = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const handleTopicClick = (newTopic: Topic) => {
    setSelectedTopic(newTopic)
  }

  return (
    <div className="w-full md:w-1/3 md:pl-8 flex-shrink-0 flex flex-col gap-4">
      {/* Search and filter */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Filter options */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-wrap gap-2 mb-2"
        >
          {["All", "Recent", "Popular", "Bookmarked"].map((filter) => (
            <Badge key={filter} variant="outline" className="cursor-pointer hover:bg-primary/10">
              {filter}
            </Badge>
          ))}
        </motion.div>
      )}

      {/* Topics List */}
      <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
        {topics.map((topic) => {
          return (
            <motion.div
              key={topic.id}
              className={`relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-200 ${
                selectedTopic?.id === topic.id ? "bg-primary/10 shadow-md" : "bg-card hover:bg-primary/5"
              }`}
              onClick={() => handleTopicClick(topic)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {selectedTopic?.id === topic.id && (
                <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" layoutId="activeIndicator" />
              )}
              <div className="py-4 px-4 flex items-start gap-3">
                <div className="p-2 rounded-md bg-muted text-muted-foreground text-green-500">
                  <topic.icon size={24} className="text-primary" /> {/* Render as JSX with props */}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {topic.description}
                  </p>
                  <p className="text-base font-semibold mt-1">{topic.name}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
