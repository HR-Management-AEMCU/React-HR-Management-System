import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
/*import AdminService from "../../service/AdminService";*/
import { useEffect, useState, useContext } from "react";
import Logout from "../logout/Logout";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import arasımorb from "../../../assets/logo/arasımorb.png"
const Sidebar = () => {
  const [admin, setAdmin] = useState({});
  const token = localStorage.getItem("token");
  /*useEffect(() => {
    AdminService.getAllAdminInfo(token).then((response) => {
      setAdmin((admin) => ({
        ...admin,
        ...response.data,
      }));
    });
  }, []);*/

  return (
    <div className="sidebarmanager">
    {/* <div className="top">
        <Link to="/visitorhome" style={{ textDecoration: "none" }}>
          <h4 className="logovisitor">HRGenius</h4>
        </Link>
      </div>
      <hr />*/}

      <div className="center">
        <div className="item">
          <Link to="/managerhome" style={{ textDecoration: "none"}}>
            <img
              src={arasımorb}
              className="avatar"
            />
          </Link>
        </div>
        <ul>
          <p className="titlemanager">MANAGER MAIN</p>
          <Link to="/managerhome" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Dashboard</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Calendar</span>
            </li>
          </Link>
          <Link to="/managerhome/tatilgunler" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Tatil Günleri</span>
            </li>
          </Link>
          <Link to="/inbox" style={{ textDecoration: "none" }}>
            <li>
              <MailOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Inbox</span>
            </li>
          </Link>
          <p className="titlemanager">EMPLOYEE LIST</p>
        
          {/* <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link> */}
          <Link to="/manager" style={{ textDecoration: "none" }}>
            <li>
              <EngineeringOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Employee List</span>
            </li>
          </Link>
          <Link to="/managerhome/createpersonnel" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Employee Add</span>
            </li>
          </Link>
          <p className="titlemanager">APPROVALS</p>
          <Link to="/comments-to-approve" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartOutlinedSharpIcon className="iconmanager" />
            <span className="spnmanager">Comments</span>
          </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="iconmanager" />
            <span className="spnmanager">Complaints</span>
          </li>
          {/*<p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
        </li>*/}
          <p className="titlemanager">USER</p>
          <Link to="/managerprofile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Profile</span>
            </li>
          </Link>
          <Link to="/managerupdateprofile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Update Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="iconmanager" />
            <Logout />
          </li>

          {/*<p className="title">SERVICE</p>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
      </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
