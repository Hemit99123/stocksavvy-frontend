import httpHeader from '@/services/httpHeader'
import { toast } from 'react-toastify'
 
export const handleCheckAuth = async (role: "user" | "admin" = "user") => {
  const apiURL = role == "admin" ? "/admin/get-session" : "/auth/get-session"
  const response = await httpHeader.get(apiURL)

  if (!response.data.auth) {
    return toast.error('Not authenticated, automatically redirecting...', {
      onClose: () => {
        // Redirect after toast disappears
        window.location.href = "/login"
      }
    });
  }
}

export const handleGetSession = async () => {
  const response = await httpHeader.get("/auth/get-session")

  return {
      session: response.data.session,
  }
}