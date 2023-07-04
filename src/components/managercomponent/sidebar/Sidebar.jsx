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
import EditIcon from '@mui/icons-material/Edit';

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
          <Link to="/managerhome/manageravanslist" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartOutlinedSharpIcon className="iconmanager" />
              <span className="spnmanager">Avans Check</span>
            </li>
          </Link>
          <Link to="/managerhome/managerspendlist" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartOutlinedSharpIcon className="iconmanager" />
              <span className="spnmanager">Spend Check</span>
            </li>
          </Link>
          <p className="titlemanager">COMPANY</p>
          <Link to="/managerhome/companyprofilepage" style={{ textDecoration: "none" }}>
          <li>
            <ApartmentIcon className="iconmanager" />
            <span className="spnmanager">Company Profile</span>
          </li>
          </Link>
          <Link to="/managerhome/companyupdatepage" style={{ textDecoration: "none" }}>
          <li>
            <EditIcon className="iconmanager" />
            <span className="spnmanager">Company Edit</span>
          </li>
          </Link>
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
          <Link to="/managerhome/managerprofilepage" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="iconmanager" />
              <span className="spnmanager">Manager Profile</span>
            </li>
          </Link>
          <Link to="/managerhome/managerupdatepage" style={{ textDecoration: "none" }}>
            <li>
              <EditIcon className="iconmanager" />
              <span className="spnmanager">Manager Edit</span>
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
