import { handleCheckAuth } from "@/lib/auth"; // assuming you have a function for this

export async function getMenuItems() {
  const authStatus = await handleCheckAuth() as boolean;
  return [
    {
      display: "Platform",
      pathname: "/platform",
    },
    {
      display: "Questions",
      pathname: "/questions",
    },
    {
      display: "Team",
      pathname: "/team",
    },
    {
      display: authStatus ? "Logout" : "Login",
      pathname: authStatus ? "/logout" : "/login",
    },
  ];
}
