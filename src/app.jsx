import { ChakraProvider } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core"; // Importe o MantineProvider
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QuestionnaireProvider } from "./Provider/QuestionnaireProvider";
import "./app.css";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import Profile from "./pages/Profile/Profile";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import RegisterPage from "./pages/Register/RegisterPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Settings from "./pages/settings/settings";

export default function App() {
  function ProtectedRoute({ outlet }) {
    const access_token = localStorage.getItem("token");
    if (!access_token) {
      return <Navigate to="/login" />;
    }
    return outlet;
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <QuestionnaireProvider>
      <MantineProvider>
        <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<ProtectedRoute outlet={<HomePage />} />}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/questionnaire"
                element={<ProtectedRoute outlet={<Questionnaire />} />}
              />
              <Route path="/profile" element={<ProtectedRoute outlet={<Profile />} />} />
              <Route path="/settings" element={<ProtectedRoute outlet={<Settings />} />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
        </ChakraProvider>
      </MantineProvider>
    </QuestionnaireProvider>
  );
}
