import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from '@mantine/core'; // Importe o MantineProvider
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import "./app.css";

export default function App() {
  return (
    <MantineProvider> {/* Envolve o aplicativo com MantineProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
