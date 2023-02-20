import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/WelcomePage/WelcomePage.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WelcomePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
