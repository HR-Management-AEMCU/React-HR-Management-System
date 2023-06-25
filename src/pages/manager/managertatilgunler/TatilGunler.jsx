import "./tatilgunler.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import Tatil from "../../../components/managercomponent/tatil/Tatil";

/*import withAuth from "../../withAuth";*/
/*import { SidebarContext } from "../../context/SidebarContext";*/
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TatilGunler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'den role verisini alın
    const roles = localStorage.getItem("roles");
    if (!roles || roles.length === 0) {
      navigate("/login");
      return;
    }
    console.log(roles)
    console.log(roles.includes("PERSONNEL") && roles.includes("MANAGER"))
    // Eğer role "PERSONNEL" değilse, login sayfasına yönlendir
    if (roles.includes("PERSONNEL") && roles.includes("MANAGER")) {
      
    }else{
      navigate("/login");
    }
  }, [navigate]);
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
