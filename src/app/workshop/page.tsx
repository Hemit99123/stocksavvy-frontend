'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const slug = searchParams.get('slug')

  return (
    <div>
        slug: {slug}
    </div>
  )
}