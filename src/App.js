import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/WelcomePage/WelcomePage.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WelcomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
