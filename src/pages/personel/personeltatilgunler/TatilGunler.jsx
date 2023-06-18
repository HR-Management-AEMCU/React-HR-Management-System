import "./tatilgunler.scss";
import Sidebar from "../../../components/personelcomponent/sidebar/Sidebar";
import Navbar from "../../../components/personelcomponent/navbar/Navbar";
import Tatil from "../../../components/personelcomponent/tatil/Tatil";
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
