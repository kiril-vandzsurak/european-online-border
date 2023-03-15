import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import NewTravel from "./components/NewTravel/NewTravel.jsx";
import TravelHistory from "./components/TravelHistory/TravelHistory.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import PdfFile from "./components/PdfFile/PfdFile.jsx";
import { useSelector } from "react-redux";

function App() {
  const userId = useSelector((state) => state.userIdInfo.userId);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WelcomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<MyAccount />} path="/myAccount/:userId" />
        <Route element={<NewTravel />} path="/newTravel/:userId" />
        <Route element={<TravelHistory />} path="/travelHistory/:userId" />
        <Route element={<AdminPage />} path="/adminPage" />
        <Route element={<PdfFile userId={userId} />} path="/pdfFileGenerator" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
