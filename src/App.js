import { BrowserRouter, Routes, Route } from "react-router-dom";
/*Manager Imports*/
import LoginPage from "./pages/manager/visitormanagerloginregister/LoginPage";
import RegisterUserPage from "./pages/manager/visitormanagerloginregister/RegisterUserPage";
import RegisterCompanyPage from "./pages/manager/visitormanagerloginregister/RegisterCompanyPage";
import ForgotPasswordPage from "./pages/manager/visitormanagerloginregister/ForgotPasswordPage";
import ManagerHome from "./pages/manager/managerhomepage/Home";
import TatilGunler from "./pages/manager/managertatilgunler/TatilGunler";
import CreatePersonnelPage from "./pages/manager/createpersonnel/CreatePersonnelPage";
import ManagerActivatePage from "./pages/manager/visitormanagerloginregister/ManagerActivatePage";
import ManagerProfilePage from "./pages/manager/managerprofile/ManagerProfilePage";
import ManagerUpdateProfile from "./pages/manager/managerprofileupdatepage/ManagerUpdateProfile";
import CompanyProfilePage from "./pages/manager/companyprofile/CompanyProfilePage";
import CompanyUpdateProfile from "./pages/manager/companyprofileupdatepage/CompanyUpdateProfile";
/*Admin imports*/
import AdminLoginPage from "./pages/admin/adminloginregister/LoginAdminPage";
import AdminRegisterPage from "./pages/admin/adminloginregister/AdminRegisterPage";
import AdminHome from "./pages/admin/adminhomepage/Home";
import List from "./pages/admin/adminmanagerlist/List";
import AdminCommentApproval from "./pages/admin/admincommentapproval/comment";

/*visitor import*/
import VisitorHome from "./pages/visitor/visitorhomepage/Home";
import VisitorProfilePage from "./pages/visitor/visitorprofile/VisitorProfilePage";
import VisitorUpdateProfile from "./pages/visitor/visitorprofileupdatepage/VisitorUpdateProfile";
import VisitorCompanyList from "./pages/visitor/visitorcompanylist/VisitorCompanyList";

/*Personel*/
import PersonelHome from "./pages/personel/personelhomepage/Home";
import TatilGunlerPersonel from "./pages/personel/personeltatilgunler/TatilGunler";
import PersonelProfilePage from "./pages/personel/personelprofile/PersonelProfilePage";
import PersonelAvansPage from "./pages/personel/personelavanspage/PersonelAvansPage";


/*Company*/




import PersonelUpdateProfile from "./pages/personel/personelprofileupdatepage/PersonelUpdateProfile";
import CompanyInfo from "./pages/company/companyinfopage/CompanyInfoPage";
import CompanyCard from "./pages/company/companycard/CompanyCard";

/*import Profile from "./pages/profile/Profile";

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
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="login">
                <Route index element={<LoginPage />} />
                <Route path="forgotpassword" element={<ForgotPasswordPage />} />
                
              </Route>
          <Route path="registercompany">
                <Route index element={<RegisterCompanyPage />} />
                <Route path="activatecode" element={<ManagerActivatePage />} />
                
              </Route>

          <Route path="managerhome">
                <Route index element={<ManagerHome />} />
                <Route path="tatilgunler" element={<TatilGunler />} />
                <Route path="createpersonnel" element={<CreatePersonnelPage />} />
                <Route path="managerprofilepage" element={<ManagerProfilePage />} />
                <Route path="managerupdatepage" element={<ManagerUpdateProfile />} />
                <Route path="companyprofilepage" element={<CompanyProfilePage />} />
                <Route path="companyupdatepage" element={<CompanyUpdateProfile />} />
              </Route>

          <Route path="personelhome">
                <Route index element={<PersonelHome />} />
                <Route path="tatilgunler" element={<TatilGunlerPersonel />} />
                <Route path="personelprofilepage" element={<PersonelProfilePage />} />
                <Route path="personelupdatepage" element={<PersonelUpdateProfile />} />
                <Route path="personelavanspage" element={<PersonelAvansPage />} />
              </Route>

          <Route path="adminhome">
                <Route index element={<AdminHome />} />
                <Route path="managercheck" element={<List />} />
              </Route>

          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/adminregister" element={<AdminRegisterPage />} />
          <Route
            path="/comments-to-approve"
            element={<AdminCommentApproval />}
          />
          <Route path="/visitorhome" element={<VisitorHome />} />
          <Route path="/visitorprofile" element={<VisitorProfilePage />} />
          <Route path="/visitorupdateprofile" element={<VisitorUpdateProfile />} />
          <Route path="/visitorcompanylist" element={<VisitorCompanyList />} />
          <Route path="/companycard" element={<CompanyCard />} />

            {/*company*/}
            <Route path="company">
                {/*<Route index element={<ListCompany />} />*/}
                <Route path=":companyId" element={<CompanyInfo />} />
                
               {/* <Route path="new" element={<NewCompany />} />*/}
              </Route>

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
