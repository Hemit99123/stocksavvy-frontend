import Home from '@/components/landing-page/Home'
import { useGetMenuItems } from '@/hooks/useGetMenuItems'
import React from 'react'

const page = async () => {
  const menuItems = await useGetMenuItems()
  return (
    <Home menuItems={menuItems}/>
  )
}

export default page