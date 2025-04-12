import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, useLocation, useNavigate } from 'react-router'
import useAuth from './hooks/useAuth' // Assuming useAuth is a custom hook for authentication

const Root: React.FC = () => {
  const location = useLocation(); 
  const router = useNavigate();

  // Define unauthenticated routes
  const unauthenticatedRoutes = ["/login", "/signup", "/public"];  // Add routes that don't require authentication

  // If the pathname matches one of the unauthenticated routes, skip auth checking
  if (unauthenticatedRoutes.some(route => location.pathname.includes(route))) {
    return <App />;  // Skip auth check for unauthenticated routes, render App directly
  }

  // Check if the user is authenticated based on the route
  const isAuthenticated = useAuth({
    role: location.pathname === "/admin" ? "admin" : "user"
  });

  // Redirect to the unauthenticated page if not authenticated
  if (!isAuthenticated) {
    router("/unauthenticated");
    return null;  // Stop further rendering
  }

  return <App />;  // Render the app if the user is authenticated
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />  {/* This component will handle the route actions */}
    </BrowserRouter>
  </StrictMode>
)
