import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/WelcomePage/WelcomePage.css";
import "./components/RegisterPage/RegisterPage.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WelcomePage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
