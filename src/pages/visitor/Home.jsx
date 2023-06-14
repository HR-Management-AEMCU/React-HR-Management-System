import "./home.scss";
import Sidebar from "../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../components/visitorcomponent/navbar/Navbar";
import Widget from "../../components/visitorcomponent/widgets/Widget";

import { useContext } from "react";
import Welcome from "../../components/visitorcomponent/welcome/Welcome";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const Home = () => {
 /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <Welcome />
        <div className="widgetvisitor">
          <Widget type="active" />
          <Widget type="retired" />
          <Widget type="total" />
          <Widget type="laik" />
        </div>
        
       
        
      </div>
    </div>
  );
};

export default Home;
