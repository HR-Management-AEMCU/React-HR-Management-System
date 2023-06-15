import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
/*import ManagerService from "../../service/ManagerService";*/
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import Logout from "../logout/Logout";
/*import withAuth from "../../withAuth";*/


const Sidebar = () => {

const token = localStorage.getItem("token");
  const [image, setImage] = useState("");

  /*useEffect(() => {
    const source = fetch.CancelToken.source();

    ManagerService.getImage(token, { cancelToken: source.token })
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        if (fetch.isCancel(error)) {
          // istek iptal edildiyse, hata oluştuğunu kontrol eder
          console.log("Axios request cancelled");
        } else {
          console.log("Another error happened: ", error.message);
        }
      });
    return () => {
      source.cancel();
    };
  }, [token]);
*/
    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <Link to="/managerhome" style={{ textDecoration: "none" }}>
              <span className="sidebar__top--logo">HRGenius</span>
            </Link>
          </div>
          <hr />
          <div className="sidebar__center">
            <div className="sidebar__center--avatar">
              <img
                src={
                    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=740&t=st=1686683631~exp=1686684231~hmac=4c005a1a584be365cc846b64f33c8edd1bbf329a29ab0f99171aca5b8a237ec9"
                }
                alt="avatar"
              />
            </div>
            <div className="sidebar__center--menu">
              <div className="menu__dashboard">
                <span className="main_span">MAIN</span>
                <Link to="/managerhome" style={{ textDecoration: "none" }}>
                  <div className="dasboard__item">
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                  </div>
                </Link>
                <Link to="/tatilgunler" style={{ textDecoration: "none" }}>
                  <div className="dasboard__item">
                    <DashboardIcon className="icon" />
                    <span>Tatil Günleri</span>
                  </div>
                </Link>
              </div>
              <div className="menu__list">
                <span className="main_span">EMPLOYEE</span>
                <Link to="/employee" style={{ textDecoration: "none" }}>
                  <div className="list__item">
                    <EngineeringOutlinedIcon className="icon" />
                    <span>Employee List</span>
                  </div>
                </Link>
                <Link to="/employee/add" style={{ textDecoration: "none" }}>
                  <div className="list__item">
                    <PersonAddOutlinedIcon className="icon" />
                    <span>Employee Add</span>
                  </div>
                </Link>
              </div>
              <div className="menu__list">
                <span className="main_span">LIST</span>
                <Link to="/advance" style={{ textDecoration: "none" }}>
                  <div className="list__item">
                    <FormatListNumberedIcon className="icon" />
                    <span>Advance List</span>
                  </div>
                </Link>
                <Link to="/expence" style={{ textDecoration: "none" }}>
                  <div className="list__item">
                    <FormatListNumberedIcon className="icon" />
                    <span>Expense List</span>
                  </div>
                </Link>
                <Link to="/permi" style={{ textDecoration: "none" }}>
                  <div className="list__item">
                    <FormatListNumberedIcon className="icon" />
                    <span>Permission List</span>
                  </div>
                </Link>
              </div>
              <div className="menu__useful">
                <span className="main_span">USEFUL</span>
                <div className="main__useful_list">
                  <div className="useful__item">
                    <InsertChartOutlinedSharpIcon className="icon" />
                    <span>Stats</span>
                  </div>
                  <div className="useful__item">
                    <NotificationsNoneIcon className="icon" />
                    <span>Notification</span>
                  </div>
                </div>
              </div>
              <div className="menu__useful">
                <span className="main_span">SERVICE</span>
                <div className="main__useful_list">
                  <div className="useful__item">
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System Health</span>
                  </div>
                  <div className="useful__item">
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                  </div>
                  <div className="useful__item">
                    <SettingsOutlinedIcon className="icon" />
                    <span>Settings</span>
                  </div>
                </div>
              </div>
              <div className="menu__useful">
                <span className="main_span">USER</span>
                <div className="main__useful_list">
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <div className="useful__item">
                      <AccountCircleOutlinedIcon className="icon" />
                      <span>Profile</span>
                    </div>
                  </Link>
                  <div className="useful__item">
                    <ExitToAppIcon className="icon" />
                    <Logout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Sidebar