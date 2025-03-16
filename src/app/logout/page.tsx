"use client"

import httpHeader from '@/services/httpHeader'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Logout = () => {
  const router = useRouter()

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [response, setResponse] = useState<AxiosResponse<any, any>>()
  
  const handleLogout = async () => {
    const response = await httpHeader.get("/auth/logout")
    setResponse(response)
  }

  useEffect(() => {
    handleLogout()

    if (response?.status == 400  || response?.status == 500) {
      router.push("/logout/error")
    } else {
      router.push("/logout/success")
    }
  }, [])

  return null
}

export default Logout