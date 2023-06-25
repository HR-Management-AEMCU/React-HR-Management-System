import "./list.scss";
import Sidebar from "../../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../../components/visitorcomponent/navbar/Navbar";
import Datatable from "../../../components/visitorcomponent/datatable/Datatable";
/*import withAuth from "../../withAuth";*/
/*import { SidebarContext } from "../../context/SidebarContext";*/
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const List = () => {
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
  /*const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="list">
      {/*isSidebarVisible && */<Sidebar />}
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
