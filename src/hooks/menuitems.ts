import { useState, useEffect } from "react";
import { getSessionCookie } from "@/lib/auth";
import { MenuItem } from "@/types/navbar";

export function useGetMenuItems(): MenuItem[] {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const authStatus = await getSessionCookie();
      setMenuItems([
        { display: "Platform", pathname: "/platform" },
        { display: authStatus ? "Logout" : "Login", pathname: authStatus ? "/logout" : "/login" },
      ]);
    };

    fetchMenuItems();
  }, []);

  return menuItems;
}
