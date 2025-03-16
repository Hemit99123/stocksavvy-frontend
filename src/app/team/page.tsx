"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const TeamUI = () => {
  const teamMembers = [
    {
      name: "Misha",
      role: "President",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading our organization with vision and strategic direction to achieve our goals.",
      initials: "MP",
    },
    {
      name: "Jiya",
      role: "Vice President",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Supporting our president and overseeing day-to-day operations with dedication.",
      initials: "JV",
    },
    {
      name: "Hemit",
      role: "Technology Analyst",
      image: "/placeholder.svg?height=400&width=400",
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
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 text-green-500 hover:text-white hover:bg-green-500"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 text-green-500 hover:text-white hover:bg-green-500"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 text-green-500 hover:text-white hover:bg-green-500"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 text-green-500 hover:text-white hover:bg-green-500"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TeamUI

