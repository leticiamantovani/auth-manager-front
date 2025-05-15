import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Success from "./pages/Success.tsx";
import EmailSent from "./pages/EmailSent.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success" element={<Success />} />
      <Route path="/sent" element={<EmailSent />} />
    </Routes>
  );
}
