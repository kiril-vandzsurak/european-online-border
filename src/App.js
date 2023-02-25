import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

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
