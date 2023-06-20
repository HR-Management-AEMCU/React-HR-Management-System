import "./personelprofilepage.scss";
import Sidebar from "../../../components/personelcomponent/sidebar/Sidebar";
import Navbar from "../../../components/personelcomponent/navbar/Navbar";
import Widget from "../../../components/personelcomponent/widgets/Widget";
import PersonelProfile from "../../../components/personelcomponent/profilepersonel/PersonelProfile copy";

/*import { useContext } from "react";*/
import Welcome from "../../../components/visitorcomponent/welcome/Welcome";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const PersonelProfilePage = () => {
 /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <PersonelProfile />
      </div>
    </div>
  );
};

export default PersonelProfilePage;
