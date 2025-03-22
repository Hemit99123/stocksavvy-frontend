import { handleCheckAuth } from "@/lib/auth"; // assuming you have a function for this

export async function getMenuItems() {
  const authStatus = await handleCheckAuth() as boolean;
  return [
    {
      display: "Forum",
      pathname: "/forum",
    },
    {
      display: "Question bank",
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
