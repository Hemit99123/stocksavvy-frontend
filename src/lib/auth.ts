import httpHeader from '@/services/httpHeader'

export const handleCheckAuth = async () => {
    const response = await httpHeader.get("/auth/get-session")

    // either a true (authenticated) or false (unauthentcated) response
    return response.data.auth
}