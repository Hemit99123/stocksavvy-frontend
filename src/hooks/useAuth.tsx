import { useState, useEffect } from 'react';
import httpHeader from '@/services/httpHeader';
import { toast } from 'react-toastify';

type roleTypes = 'user' | 'admin';

interface UseAuthProps {
  role: roleTypes;
}

const useAuth: React.FC<UseAuthProps> = ({ role }) => {
  const [authStatus, setAuthStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>( 'loading' );

  const handleCheckAuth = async (role: roleTypes) => {
    const apiURL = role === 'admin' ? '/admin/get-session' : '/auth/get-session';
    try {
      const response = await httpHeader.get(apiURL);
      if (!response.data.auth) {
        toast.error('Not authenticated, automatically redirecting...', {
          onClose: () => {
            // Redirect after toast disappears
            window.location.href = '/login';
          },
        });
        setAuthStatus('unauthenticated');
      } else {
        setAuthStatus('authenticated');
      }
    } catch (error) {
      toast.error('Error checking authentication');
      setAuthStatus('unauthenticated');
    }
  };

  useEffect(() => {
    handleCheckAuth(role);
  }, [role]);

  return authStatus;
};

export default useAuth;
