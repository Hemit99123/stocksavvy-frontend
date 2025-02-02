import Home from '@/components/landing-page/Home'
import { getMenuItems } from '@/lib/menuItems'
import React from 'react'

const page = async () => {
  const menuItems = await getMenuItems()
  return (
    <Home menuItems={menuItems}/>
  )
}

export default page