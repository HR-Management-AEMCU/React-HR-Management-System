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
    <div className="sidebaradmin">
    {/* <div className="top">
        <Link to="/visitorhome" style={{ textDecoration: "none" }}>
          <h4 className="logovisitor">HRGenius</h4>
        </Link>
      </div>
      <hr />*/}

      <div className="center">
        <div className="item">
          <Link to="/adminhome" style={{ textDecoration: "none"}}>
            <img
              src={arasımorb}
              className="avatar"
            />
          </Link>
        </div>
        <ul>
          <p className="titleadmin">ADMIN MAIN</p>
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="iconadmin" />
              <span className="spnadmin">Dashboard</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="iconadmin" />
              <span className="spnadmin">Calendar</span>
            </li>
          </Link>
          <Link to="/inbox" style={{ textDecoration: "none" }}>
            <li>
              <MailOutlinedIcon className="iconadmin" />
              <span className="spnadmin">Inbox</span>
            </li>
          </Link>
          <p className="titleadmin">LIST</p>
        
          {/* <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link> */}
          <Link to="/adminhome/managercheck" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsOutlinedIcon className="iconadmin" />
              <span className="spnadmin">Manager Check</span>
            </li>
          </Link>
          <Link to="/company" style={{ textDecoration: "none" }}>
            <li>
              <ApartmentIcon className="iconadmin" />
              <span className="spnadmin">Company</span>
            </li>
          </Link>
          <p className="titleadmin">APPROVALS</p>
          <Link to="/comments-to-approve" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartOutlinedSharpIcon className="iconadmin" />
            <span className="spnadmin">Comments</span>
          </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="iconadmin" />
            <span className="spnadmin">Complaints</span>
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
          <p className="titleadmin">USER</p>
          <Link to="/adminprofile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconadmin" />
              <span className="spnadmin">Profile</span>
            </li>
          </Link>
          <Link to="/adminupdateprofile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconadmin" />
              <span className="spnadmin">Update Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="iconadmin" />
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
