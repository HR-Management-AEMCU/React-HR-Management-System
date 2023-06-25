import "./visitorprofilepage.scss";
import Sidebar from "../../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../../components/visitorcomponent/navbar/Navbar";
import Widget from "../../../components/visitorcomponent/widgets/Widget";
import VisitorProfile from "../../../components/visitorcomponent/profilevisitor/VisitorProfile";

import { useContext, useEffect } from "react";
import Welcome from "../../../components/visitorcomponent/welcome/Welcome";
import { useNavigate } from "react-router-dom";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const VisitorProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'den role verisini alın
    const roles = localStorage.getItem("roles");
    if (!roles || roles.length === 0) {
      navigate("/login");
      return;
    }
    console.log(roles)
    console.log(roles.includes("VISITOR"))
    // Eğer role "PERSONNEL" değilse, login sayfasına yönlendir
    if (roles.includes("VISITOR")) {
      
    }else{
      navigate("/login");
    }
  }, [navigate]);
 /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <VisitorProfile />
      </div>
    </div>
  );
};

export default VisitorProfilePage;
