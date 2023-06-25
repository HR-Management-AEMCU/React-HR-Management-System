import "./tatilgunler.scss";
import Sidebar from "../../../components/personelcomponent/sidebar/Sidebar";
import Navbar from "../../../components/personelcomponent/navbar/Navbar";
import Tatil from "../../../components/personelcomponent/tatil/Tatil";
/*import withAuth from "../../withAuth";*/
/*import { SidebarContext } from "../../context/SidebarContext";*/
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TatilGunler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'den role verisini alın
    const roles = JSON.parse(localStorage.getItem("roles"));
    if (!roles || roles.length === 0) {
      navigate("/login");
      return;
    }
    console.log(roles)
    console.log(roles[1])
    console.log(roles[1]===("PERSONNEL"))
    // Eğer role "PERSONNEL" değilse, login sayfasına yönlendir
    if (roles[0]===("PERSONNEL")) {
      
    }else if(roles[0]===("MANAGER") && roles[1]=== ("PERSONNEL")){

    }
    else{
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
