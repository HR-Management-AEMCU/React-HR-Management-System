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
      <div className="top">
        <Link to="/adminhome" style={{ textDecoration: "none" }}>
          <span className="logo">HRGenius-Admin</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <div className="item">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={
                admin.image
                  ? admin.image
                  : "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=740&t=st=1686683447~exp=1686684047~hmac=00cbe99cc22a9e3863bf10587e2ad55e1d53a9b3b6e9bc96d49cab86cc129417"
              }
              className="avatar"
            />
          </Link>
        </div>
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
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
          <Link to="/inbox" style={{ textDecoration: "none" }}>
            <li>
              <MailOutlinedIcon className="icon" />
              <span>Inbox</span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <Link to="/manager" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsOutlinedIcon className="icon" />
              <span>Manager</span>
            </li>
          </Link>
          {/* <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link> */}
          <Link to="/company" style={{ textDecoration: "none" }}>
            <li>
              <ApartmentIcon className="icon" />
              <span>Company</span>
            </li>
          </Link>
          <p className="title">APPROVALS</p>
          <Link to="/comments-to-approve" style={{ textDecoration: "none" }}>
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

          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
