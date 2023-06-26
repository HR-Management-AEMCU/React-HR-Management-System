import "./companyprofilepage.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import Widget from "../../../components/personelcomponent/widgets/Widget";
import CompanyProfile from "../../../components/managercomponent/profilecompany/CompanyProfile";

/*import { useContext } from "react";*/
import Welcome from "../../../components/visitorcomponent/welcome/Welcome";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const CompanyProfilePage = () => {
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
        <CompanyProfile />
      </div>
    </div>
  );
};

export default CompanyProfilePage;
