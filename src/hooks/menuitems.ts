"use client"

import { useState, useEffect } from "react";
import { getSessionCookie } from "@/lib/auth";
import { MenuItem } from "@/types/navbar";

export function useGetMenuItems(): MenuItem[] {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);


  useEffect(() => { 
    const fetchMenuItems = async () => {
      const authStatus = await getSessionCookie();

      const handleAuthCheck = (pathname: string) => {
        return authStatus ? pathname : "/"
      }

      setMenuItems([
        { display: "Platform", pathname: handleAuthCheck("/platform")},
        { display: authStatus ? "Logout" : "Login", pathname: authStatus ? "/logout" : "/login" },
        { display: "Forum", pathname: handleAuthCheck("/forum") },
      ]);
    };

    fetchMenuItems();
  }, []);

  return menuItems;
}
