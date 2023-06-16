import "./visitorprofilepage.scss";
import Sidebar from "../../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../../components/visitorcomponent/navbar/Navbar";
import Widget from "../../../components/visitorcomponent/widgets/Widget";
import VisitorProfile from "../../../components/visitorcomponent/profilevisitor/VisitorProfile copy";

import { useContext } from "react";
import Welcome from "../../../components/visitorcomponent/welcome/Welcome";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const VisitorProfilePage = () => {
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
