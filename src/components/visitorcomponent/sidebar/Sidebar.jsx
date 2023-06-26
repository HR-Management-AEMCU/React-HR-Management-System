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
/*import AdminService from "../../service/AdminService";*/
import { useEffect, useState, useContext } from "react";
import Logout from "../logout/Logout";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import arasımor from "../../../assets/logo/arasımor.png"
import arasımorb from "../../../assets/logo/arasımorb.png"
import arasımorc from "../../../assets/logo/arasımorc.png"
import arasımorsari from "../../../assets/logo/arasımorsari.png"
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
    <div className="sidebarvisitor">
    {/* <div className="top">
        <Link to="/visitorhome" style={{ textDecoration: "none" }}>
          <h4 className="logovisitor">HRGenius</h4>
        </Link>
      </div>
      <hr />*/}

      <div className="center">
        <div className="item">
          <Link to="/" style={{ textDecoration: "none"}}>
            <img
              src={arasımorb}
              className="avatar"
            />
          </Link>
        </div>
        <ul>
          <p className="titlevisitor">VISITOR MAIN</p>
          <Link to="/visitorhome" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="iconvisitor" />
              <span className="spnvisitor">Dashboard</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="iconvisitor" />
              <span className="spnvisitor">Calendar</span>
            </li>
          </Link>
          <Link to="/inbox" style={{ textDecoration: "none" }}>
            <li>
              <MailOutlinedIcon className="iconvisitor" />
              <span className="spnvisitor">Inbox</span>
            </li>
          </Link>
          <p className="titlevisitor">LIST</p>
        
          {/* <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link> */}
          <Link to="/visitorcompanylist" style={{ textDecoration: "none" }}>
            <li>
              <ApartmentIcon className="iconvisitor" />
              <span className="spnvisitor">Company</span>
            </li>
          </Link>
          <p className="titlevisitor">APPROVALS</p>
          <Link to="#" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartOutlinedSharpIcon className="iconvisitor" />
            <span className="spnvisitor">Comments</span>
          </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="iconvisitor" />
            <span className="spnvisitor">Complaints</span>
          </li>
          {/*
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
        </li>*/}
          <p className="titlevisitor">USER</p>
          <Link to="/visitorprofile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconvisitor" />
              <span className="spnvisitor">Profile</span>
            </li>
          </Link>
          <Link to="/visitorupdateprofile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconvisitor" />
              <span className="spnvisitor">Update Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="iconvisitor" />
            <Logout />
          </li>
{/*}
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
      </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
