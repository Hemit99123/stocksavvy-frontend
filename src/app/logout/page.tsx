"use client"

import axios from 'axios'
import React from 'react'

const page = () => {
  
  const handleLogout = async () => {
    await axios.post("http://localhost:3001/auth/logout")
  }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default page