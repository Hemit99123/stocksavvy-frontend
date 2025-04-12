import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import App from '@/App.tsx'
import { handleCheckAuth, handleUnauthenticatedUser } from '@/lib/auth.ts'
import unauthenticatedRoutes from '@/data/unauthenticatedRoutes'

const Root: React.FC = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  const currentRoute = location.pathname

  // turns those routes that start with /workshop/ such as /workshop/deca into the normalized route of /workshop

  const normalizedRoute = currentRoute.startsWith("/workshop/")
    ? "/workshop"
    : currentRoute;

  useEffect(() => {
    const checkAuth = async () => {
      // If it's an unauthenticated route, skip auth
      if (unauthenticatedRoutes.includes(normalizedRoute)) {
        return <App />;
      }

      const auth = await handleCheckAuth(currentRoute === "/admin" ? "admin" : "user");

      if (!auth) {
        await handleUnauthenticatedUser()
      }
    };

    checkAuth();
  }, [currentRoute, navigate]);


  return <App />;
};

export default Root