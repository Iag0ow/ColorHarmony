import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core"; // Importe o MantineProvider
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import "./app.css";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import Profile from "./pages/Profile/Profile";
import { QuestionnaireProvider } from "./Provider/QuestionnaireProvider";

export default function App() {
  return (
    <QuestionnaireProvider>
      <MantineProvider>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/questionnaire" element={<Questionnaire />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </MantineProvider>
    </QuestionnaireProvider>
  );
}
