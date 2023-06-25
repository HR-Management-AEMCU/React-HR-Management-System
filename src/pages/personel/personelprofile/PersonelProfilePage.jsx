import "./personelprofilepage.scss";
import Sidebar from "../../../components/personelcomponent/sidebar/Sidebar";
import Navbar from "../../../components/personelcomponent/navbar/Navbar";
import Widget from "../../../components/personelcomponent/widgets/Widget";
import PersonelProfile from "../../../components/personelcomponent/profilepersonel/PersonelProfile copy";

/*import { useContext } from "react";*/
import Welcome from "../../../components/visitorcomponent/welcome/Welcome";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const PersonelProfilePage = () => {
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
