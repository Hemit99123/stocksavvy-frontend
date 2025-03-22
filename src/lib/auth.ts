import httpHeader from '@/services/httpHeader'
import { toast } from 'react-toastify'

export const handleCheckAuth = async () => {
    const response = await httpHeader.get("/auth/get-session")

    // either a true (authenticated) or false (unauthentcated) response
    return response.data.auth
}
 
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const handleUnauthenticatedUser = async (error: any) => {
    if (error.response?.status === 401) {
        // in case user not logged in (401 error) give them option to log in
        toast.error('Not authenticated, automatically redirecting...', {
          onClose: () => {
            // Redirect after toast disappears
            window.location.href = "/login"
          }
        });
        
      } else {
        toast.info("Something went wrong, please try again later.");
      }
}