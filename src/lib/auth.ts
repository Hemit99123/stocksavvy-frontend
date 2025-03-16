// this checks for the session-id cookie for frontend rendering 
// backend checks the session-id cookie for validity w/ the redis cache set up

"use server"

import { cookies } from 'next/headers'

export const getSessionCookie = async () => {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session-id')

    return sessionCookie ? true : false
}