'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const title = searchParams.get('title')

  return (
    <div>
        title: {title}
    </div>
  )
}