import httpHeader from "@/services/httpHeader";
import { useEffect, useState } from "react";
import { MenuItem } from "@/types/navbar";

export const useMenuItems = (): MenuItem[] => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const getAuthenticationStatus = async () => {
      try {
        const response = await httpHeader.get("/auth/check-session");
        setAuthStatus(response.data.success);
      } catch (error) {
        console.error("Failed to fetch authentication status:", error);
      }
    };

    getAuthenticationStatus();
  }, []);

  return [
    {
      display: "Platform",
      pathname: "/platform",
    },
    {
      display: authStatus ? "Logout" : "Login",
      pathname: authStatus ? "/logout" : "/login",
    },
  ];
};
