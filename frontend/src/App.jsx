import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Quiz from "./components/EntryTest";
import NotificationSender from "./components/send_notification/NotificationSender";
import GenarateIdCard from "./components/GenerateIdCard";
import UserLayout from "./layout/UserLayout";
import NotFound from "./components/NotFound"
import { Toaster } from "react-hot-toast"
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/dashboard" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="generate-id-card" element={<GenarateIdCard />} />
        </Route>
        <Route path="/admin/send-notification" element={<NotificationSender />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />


      </Routes>

      <Toaster />
    </Router>

  )
}

export default App