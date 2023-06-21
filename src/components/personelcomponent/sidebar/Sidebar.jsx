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
    <div className="sidebar">
    {/* <div className="top">
        <Link to="/visitorhome" style={{ textDecoration: "none" }}>
          <h4 className="logovisitor">HRGenius</h4>
        </Link>
      </div>
      <hr />*/}

      <div className="center">
        <div className="item">
          <Link to="/personelhome" style={{ textDecoration: "none"}}>
            <img
              src={arasımorb}
              className="avatar"
            />
          </Link>
        </div>
        <ul>
          <p className="title">PERSONNEL MAIN</p>
          <Link to="/personelhome" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="icon" />
              <span>Calendar</span>
            </li>
          </Link>
          <Link to="/personelhome/tatilgunler" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="icon" />
              <span>Tatil Günleri</span>
            </li>
          </Link>
          <Link to="/inbox" style={{ textDecoration: "none" }}>
            <li>
              <MailOutlinedIcon className="icon" />
              <span>Inbox</span>
            </li>
          </Link>
          <p className="title">LIST</p>
        
          {/* <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link> */}
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              <EngineeringOutlinedIcon className="icon" />
              <span>Employee List</span>
            </li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddOutlinedIcon className="icon" />
              <span>Employee Add</span>
            </li>
          </Link>
          <p className="title">APPROVALS</p>
          <Link to="#" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartOutlinedSharpIcon className="icon" />
            <span>Comments</span>
          </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Complaints</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">USER</p>
          <Link to="/personelhome/personelprofilepage" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/personelhome/personelupdatepage" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Update Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <Logout />
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
