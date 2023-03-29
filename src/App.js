import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import NewTravel from "./components/NewTravel/NewTravel.jsx";
import TravelHistory from "./components/TravelHistory/TravelHistory.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import Information from "./components/Information/Information.jsx";
import { Helmet } from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="European Border Control" />
      </Helmet>
      <Routes>
        <Route element={<WelcomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<MyAccount />} path="/myAccount/:userId" />
        <Route element={<NewTravel />} path="/newTravel/:userId" />
        <Route element={<TravelHistory />} path="/travelHistory/:userId" />
        <Route element={<AdminPage />} path="/adminPage" />
        <Route element={<Information />} path="/info/:userId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
