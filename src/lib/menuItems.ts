import { getSessionCookie } from "@/lib/auth"; // assuming you have a function for this

export async function getMenuItems() {
  const authStatus = await getSessionCookie();
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
}
