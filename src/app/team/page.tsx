/* eslint-disable */
"use client"

import type React from "react"
import type { ReactNode, ButtonHTMLAttributes, ImgHTMLAttributes, HTMLAttributes } from "react"

// Type definitions
type CardProps = {
  className?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

type AvatarProps = {
  className?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

type AvatarImageProps = {
  className?: string
  src: string
  alt?: string
} & ImgHTMLAttributes<HTMLImageElement>

type AvatarFallbackProps = {
  className?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  initials: string
}

// Card components
const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

const CardHeader: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || ""}`} {...props}>
      {children}
    </h3>
  )
}

const CardDescription: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className || ""}`} {...props}>
      {children}
    </p>
  )
}

const CardContent: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

const CardFooter: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

// Avatar components
const Avatar: React.FC<AvatarProps> = ({ className, children, ...props }) => {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

const AvatarImage: React.FC<AvatarImageProps> = ({ className, src, alt = "", ...props }) => {
  return (
    <img
      className={`aspect-square h-full w-full ${className || ""}`}
      src={src || "/placeholder.svg"}
      alt={alt}
      {...props}
    />
  )
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Button component
const SocialButton: React.FC<ButtonProps> = ({ children }) => {

  return (
    <button
    className="rounded-full flex justify-center items-center w-9 h-9 text-green-500 hover:text-white hover:bg-green-500"
    >
      {children}
    </button>
  )
}

// SVG Icons
const TwitterIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const LinkedinIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const GithubIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const MailIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

// Main TeamUI component
const TeamUI: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Misha Patel",
      role: "President",
      image: "/images/people/placeholder.png",
      bio: "Leading our organization with vision and strategic direction to achieve our goals.",
      initials: "MP",
    },
    {
      name: "Jiya Patel",
      role: "Vice President",
      image: "/images/people/placeholder.png",
      bio: "Supporting our president and overseeing day-to-day operations with dedication.",
      initials: "JV",
    },
    {
      name: "Hemit Patel",
      role: "Technology Analyst",
      image: "/images/people/hemit.png",
      bio: "Analyzing and implementing technological solutions to drive innovation.",
      initials: "HT",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl md:text-5xl">
          Our Leadership Team
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated professionals who lead our organization with passion and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-green-500"
          >
            <div className="aspect-square bg-green-50 flex items-center justify-center">
              <Avatar className="h-48 w-48 border-4 border-green-500">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="text-4xl bg-green-100 text-green-700">{member.initials}</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-green-700">{member.name}</CardTitle>
              <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{member.bio}</p>
            </CardContent>
            <CardFooter className="flex gap-2 border-t pt-4">
              <SocialButton>
                <TwitterIcon />
                <span className="sr-only">X</span>
              </SocialButton>
              <SocialButton>
                <LinkedinIcon />
                <span className="sr-only">LinkedIn</span>
              </SocialButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TeamUI

