// Where all the routes are served

import { Route, Routes } from "react-router"
import Home from "./routes/home/main"
import Questions from "./routes/questions/main"
import Login from "./routes/login/main"
import LogoutSuccess from "./routes/logout/success/main"
import LogoutError from "./routes/logout/error/main"
import Logout from "./routes/logout/main"
import PrivacyPolicy from "./routes/privacy-policy/main"
import Team from "./routes/team/main"
import WorkShopInfo from "./routes/workshop/page"
import Forum from "./routes/forum/main"
import ID from "./routes/forum/id/main"
import Me from "./components/forum/Me"
import NotFound from "./routes/not-found"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="questions" element={<Questions />} />
        <Route path="login" element={<Login />} />
        <Route path="forum" element={<Forum />} />
        <Route path="forum/:id" element={<ID />} />
        <Route path="forum/me" element={<Me />} />

        {/* All logout routes */}
        <Route path="logout/success" element={<LogoutSuccess />} />
        <Route path="logout/error" element={<LogoutError />} />
        <Route path="logout" element={<Logout />} />

        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="team" element={<Team />} />
        <Route path="workshop/:slug" element={<WorkShopInfo />} />

        {/* Not found render */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App