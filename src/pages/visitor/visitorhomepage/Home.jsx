import "./home.scss";
import Sidebar from "../../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../../components/visitorcomponent/navbar/Navbar";
import Widget from "../../../components/visitorcomponent/widgets/Widget";
import Main from "../../../components/visitorcomponent/mainresimler/Main"
import Footer from "../../../components/visitorcomponent/footer/Footer";

import { useContext, useEffect } from "react";
import Welcome from "../../../components/visitorcomponent/welcome/Welcome";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const Home = () => {
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
 /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        { /*<Welcome />
       <div className="widgetvisitor">
          <Widget type="active" />
          <Widget type="retired" />
          <Widget type="total" />
          <Widget type="laik" />
        </div>*/}
        <Main/>
        <Footer/>
        
       
        
      </div>
    </div>
  );
};

export default Home;
