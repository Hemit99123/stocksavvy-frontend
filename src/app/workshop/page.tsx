'use client'

import { useSearchParams } from 'next/navigation'
import { workshopItems } from '@/data/workshop'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')

  // Filter workshopItems based on the slug
  const filteredItems = slug ? workshopItems.filter(item => item.slug === slug) : workshopItems

  const item = filteredItems[0]

  return (
    <>
        {slug ? (
          <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
            <div className="w-full lg:w-1/2 h-full relative">
                <img 
                    src={item.img}
                    className="rounded-r-3xl w-full h-full object-cover hidden lg:block"
                />
                <div className="absolute bottom-4 left-4 bg-lime-200 px-11 py-2 rounded-xl font-medium">
                    {item.date}
                </div>
            </div>
            <div className="lg:mt-0 lg:ml-8 w-full lg:w-1/2">
                <h1 className="mt-7 text-4xl lg:text-6xl font-custom">
                    {item.title}
                </h1>
                <div className="mt-5 max-w-full lg:max-w-xl">
                    <p className="text-lg break-words">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nec enim eget hendrerit. Fusce nisi nisi, ullamcorper quis ante non, malesuada blandit odio. Vestibulum a felis ornare, venenatis enim quis, suscipit quam. Maecenas fringilla congue est, ac pellentesque tortor vehicula sit amet. Nam rutrum, mauris in auctor convallis, lacus mi malesuada neque, et congue turpis tortor ac odio. Praesent euismod lobortis quam id vestibulum. Nullam lobortis tellus vel malesuada interdum.                    
                    </p>
                </div>
            </div>
          </div>
        ) : (
          <div>No slug provided.</div>
        )}
    </>
  )
}
