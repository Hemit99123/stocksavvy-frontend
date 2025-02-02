import LoginView from '@/components/auth/LoginView'
import WiseQuotes from '@/components/auth/WiseQuotes'
import React from 'react'

const page = () => {
  return (
    <div className="flex ">
      <WiseQuotes />
      <LoginView />
    </div>
  )
}

export default page