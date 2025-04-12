import httpHeader from '@/services/httpHeader'
import { toast } from 'react-toastify'
 

export const handleUnauthenticatedUser = () => {
  return toast.error('Not authenticated, automatically redirecting...', {
    onClose: () => {
      // Redirect after toast disappears
      window.location.href = "/login"
    }
  });
}

export const handleGetSession = async () => {
  const response = await httpHeader.get("/auth/get-session")

  return {
      session: response.data.session,
  }
}