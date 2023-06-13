import { BrowserRouter, Routes, Route } from "react-router-dom";
/*Manager Imports*/
import LoginPage from './pages/manager/visitormanagerloginregister/LoginPage';
import RegisterUserPage from './pages/manager/visitormanagerloginregister/RegisterUserPage';
import RegisterCompanyPage from './pages/manager/visitormanagerloginregister/RegisterCompanyPage';
import ManagerHome from './pages/manager/managerhomepage/Home';


/*Admin imports*/ 
import AdminLoginPage from './pages/admin/adminloginregister/LoginAdminPage'
import AdminRegisterPage from './pages/admin/adminloginregister/AdminRegisterPage';
import AdminHome from './pages/admin/adminhomepage/Home';



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
            <Route index element={<ManagerHome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterUserPage />} />
            <Route path="/registercompany" element={<RegisterCompanyPage />} />
            <Route path="/adminlogin" element={<AdminLoginPage />} />
            <Route path="/adminregister" element={<AdminRegisterPage />} />
            <Route path="/adminhomepage" element={<AdminHome />} />
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
