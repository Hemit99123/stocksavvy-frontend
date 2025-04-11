import httpHeader from '@/services/httpHeader'
import { toast } from 'react-toastify'
 
const handleUnauthenticatedUser = async () => {
        // in case user not logged in (401 error) give them option to log in
        toast.error('Not authenticated, automatically redirecting...', {
          onClose: () => {
            // Redirect after toast disappears
            window.location.href = "/login"
          }
        });
}

export const handleAuthCheck = async (isAdmin = false) => {
  const apiURL = isAdmin ? "/admin/get-session" : "/auth/get-session"

  const response = await httpHeader.get(apiURL)

  if (response.data.auth) {
    return handleUnauthenticatedUser()
  }
}

export const handleGetSession = async () => {
  const response = await httpHeader.get("/auth/get-session")

  return {
      session: response.data.session,
  }
}