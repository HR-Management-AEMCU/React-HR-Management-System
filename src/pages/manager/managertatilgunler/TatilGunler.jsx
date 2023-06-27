import "./tatilgunler.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import Tatil from "../../../components/managercomponent/tatil/Tatil";
import jwtDecode from "jwt-decode";
/*import withAuth from "../../withAuth";*/
/*import { SidebarContext } from "../../context/SidebarContext";*/
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TatilGunler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const current_time = Date.now().valueOf() / 1000;
      console.log(decodedToken);
      console.log(current_time);

      // Token'ın süresi dolmuşsa çerezi sil
      if (decodedToken.exp < current_time) {
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        navigate("/login");
      }
    }
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
    if (roles[0]===("MANAGER")) {
      
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
