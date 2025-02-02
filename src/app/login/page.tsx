import LoginView from '@/components/auth/LoginView'
import GetStarted from '@/components/auth/GetStarted'
import React from 'react'

const page = () => {
  return (
    <div className="flex ">
      <GetStarted />
      <LoginView />
    </div>
  )
}

export default page