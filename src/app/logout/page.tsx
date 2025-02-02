"use client"

import httpHeader from '@/services/httpHeader'
import React from 'react'

const page = () => {
  
  const handleLogout = async () => {
    await httpHeader.get("http://localhost:3001/auth/logout")
  }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default page