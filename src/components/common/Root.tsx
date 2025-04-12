import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import App from '@/App.tsx'
import { handleAuthenticatedUser, handleCheckAuth, handleUnauthenticatedUser } from '@/lib/auth.ts'
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
      const auth = await handleCheckAuth(currentRoute === "/admin" ? "admin" : "user");

      // If it's an unauthenticated route, skip auth
      if (unauthenticatedRoutes.includes(normalizedRoute)) {
        return <App />;
      }

      else if (normalizedRoute == "/login" && auth) {
        await handleAuthenticatedUser()
      } 

      else if (!auth) {
        await handleUnauthenticatedUser()
      }
    };

    checkAuth();
  }, [currentRoute, navigate]);

  // if all if statements are not met, then just render the contents from the route (given by RouterManager)
  return <App />;
};

export default Root