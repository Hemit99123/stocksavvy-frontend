"use client"

import HomeView from '@/components/landing-page/Home'
import { useGetMenuItems } from '@/hooks/menuitems'
import React from 'react'

const Home = () => {
  const menuItems = useGetMenuItems()
  return (
    <HomeView menuItems={menuItems}/>
  )
}

export default Home