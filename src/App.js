import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/loginregister/LoginPage';
import RegisterUserPage from './pages/loginregister/RegisterUserPage';
import RegisterCompanyPage from './pages/loginregister/RegisterCompanyPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterUserPage />} />
      <Route path="/registercompany" element={<RegisterCompanyPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
