import { ReactNode, HTMLAttributes, ImgHTMLAttributes, ButtonHTMLAttributes } from "react"

// Type definitions
export type CardProps = {
    className?: string
    children: ReactNode
  } & HTMLAttributes<HTMLDivElement>
  
export type AvatarProps = {
    className?: string
    children: ReactNode
  } & HTMLAttributes<HTMLDivElement>

export type AvatarImageProps = {
    className?: string
    src: string
    alt?: string
  } & ImgHTMLAttributes<HTMLImageElement>
  
export type AvatarFallbackProps = {
    className?: string
    children: ReactNode
  } & HTMLAttributes<HTMLDivElement>
  
export type ButtonProps = {
    children: ReactNode
  } & ButtonHTMLAttributes<HTMLButtonElement>
  
export type TeamMember = {
    name: string
    role: string
    image: string
    bio: string
    initials: string
  }