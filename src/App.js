import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/loginregisterpages/usercompanyloginregister/LoginPage';
import RegisterUserPage from './pages/loginregisterpages/usercompanyloginregister/RegisterUserPage';
import RegisterCompanyPage from './pages/loginregisterpages/usercompanyloginregister/RegisterCompanyPage';
import AdminLoginPage from './pages/loginregisterpages/adminloginregister/LoginAdminPage'
import AdminRegisterPage from './pages/loginregisterpages/adminloginregister/AdminRegisterPage';
import AdminHomePage from './pages/homepages/adminhomepage/AdminHomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterUserPage />} />
      <Route path="/registercompany" element={<RegisterCompanyPage />} />
      <Route path="/adminlogin" element={<AdminLoginPage />} />
      <Route path="/adminregister" element={<AdminRegisterPage />} />
      <Route path="/adminhomepage" element={<AdminHomePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
