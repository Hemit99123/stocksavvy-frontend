import { toast } from 'react-toastify'
 
export const handleUnauthenticatedUser = () => {
  return toast.error('Not authenticated, automatically redirecting...', {
    onClose: () => {
      // Redirect after toast disappears
      window.location.href = "/login"
    }
  });
}