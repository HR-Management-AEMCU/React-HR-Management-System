import "./tatilgunler.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import Tatil from "../../../components/managercomponent/tatil/Tatil";
/*import withAuth from "../../withAuth";*/
/*import { SidebarContext } from "../../context/SidebarContext";*/
import { useContext } from "react";
const TatilGunler = () => {
  /*const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="list">
      {/*isSidebarVisible && */<Sidebar />}
      <div className="listContainer">
        <Navbar />
        <Tatil />
      </div>
    </div>
  );
};

export default TatilGunler;
