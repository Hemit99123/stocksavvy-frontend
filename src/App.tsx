// Where all the routes are served

import { Route, Routes } from "react-router"
import Home from "./routes/home/main"
import Questions from "./routes/questions/main"
import Login from "./routes/login/main"
import LogoutSuccess from "./routes/logout/Success"
import LogoutError from "./routes/logout/Error"
import Logout from "./routes/logout/main"
import PrivacyPolicy from "./routes/privacy-policy/main"
import Team from "./routes/team/main"
import WorkShopInfo from "./routes/workshop/page"

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="questions" element={<Questions />} />
      <Route path="login" element={<Login />} />

      {/* All logout routes */}
      <Route path="logout/success" element={<LogoutSuccess />} />
      <Route path="logout/error" element={<LogoutError />} />
      <Route path="logout" element={<Logout />} />

      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="team" element={<Team />} />
      <Route path="workshop" element={<WorkShopInfo />} />
    </Routes>
  )
}

export default App