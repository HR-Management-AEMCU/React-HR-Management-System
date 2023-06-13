import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/loginregisterpages/usercompanyloginregister/LoginPage';
import RegisterUserPage from './pages/loginregisterpages/usercompanyloginregister/RegisterUserPage';
import RegisterCompanyPage from './pages/loginregisterpages/usercompanyloginregister/RegisterCompanyPage';
import AdminLoginPage from './pages/loginregisterpages/adminloginregister/LoginAdminPage'
import AdminRegisterPage from './pages/loginregisterpages/adminloginregister/AdminRegisterPage';
import AdminHomePage from './pages/homepages/adminhomepage/AdminHomePage';
import Home from './pages/homepages/userhomepage/Home';
/*import Profile from "./pages/profile/Profile";
import List from "./pages/list/List";
import Add from "./pages/add/Add";
import Single from "./pages/single/Single";
import AdvanceList from "./pages/advancelist/AdvanceList";
import ExpenceList from "./pages/expenselist/ExpenceList";
import Permission from "./pages/permission/Permission";
import Forgot from "./pages/forgot/Forgot";*/
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterUserPage />} />
            <Route path="/registercompany" element={<RegisterCompanyPage />} />
            <Route path="/adminlogin" element={<AdminLoginPage />} />
            <Route path="/adminregister" element={<AdminRegisterPage />} />
            <Route path="/adminhomepage" element={<AdminHomePage />} />
{/* 
            <Route path="forgot" element={<Forgot />} />
            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>
            <Route path="employee">
              <Route index element={<List />} />
              <Route path="add" element={<Add />} />
              <Route path=":employeeId" element={<Single />} />*/}
              {/* <Route path=":employee" element={<Single />} />
              <Route path="new" element={<New />} /> */}
          {/*  </Route>
            <Route path="advance">
              <Route index element={<AdvanceList />} />
            </Route>
            <Route path="permi">
              <Route index element={<Permission />} />
            </Route>
            <Route path="expence">
              <Route index element={<ExpenceList />} />
            
            </Route>*/}
          </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
