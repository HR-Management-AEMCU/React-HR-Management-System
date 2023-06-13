import "./home.scss";
import Sidebar from "../../../components/admincomponent/sidebar/Sidebar";
import Navbar from "../../../components/admincomponent/navbar/Navbar";
import Widget from "../../../components/admincomponent/widgets/Widget";
import Chart from "../../../components/admincomponent/chart/Chart";
import Table from "../../../components/admincomponent/table/Tables";
import WidgetNewEmployee from "../../../components/admincomponent/widgetNewEmployee/WidgetNewEmployee";
import { useContext } from "react";
import Welcome from "../../../components/admincomponent/welcome/Welcome";
/*import withAuth from "../../withAuth";*/
import Expense from "../../../components/admincomponent/expense/Expense";
import Avarage from "../../../components/admincomponent/avaragestar/Avarage";
import Salary from "../../../components/admincomponent/salary/Salary";
import CircularProgressBar from "../../../components/admincomponent/circular/CircularProgressBar";
/*import Maps from "../../../components/admincomponent/maps/Maps";*/
import BestEmployee from "../../../components/admincomponent/bestEmployee/BestEmployee";
import ProjectTime from "../../../components/admincomponent/project-time/ProjectTime";
import Best from "../../../components/admincomponent/best-list/Best";
/*import { SidebarContext } from "../../../context/SidebarContext";*/
const Home = () => {
 /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="home">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainer">
        <Navbar />
        <Welcome />
        <div className="widgets">
          <Widget type="active" />
          <Widget type="retired" />
          <Widget type="total" />
          <Widget type="laik" />
        </div>
        <div className="widgets">
          <Widget type="active" />
          <Widget type="retired" />
          <Widget type="total" />
          <Widget type="laik" />
        </div>
        <div className="charts">
          <WidgetNewEmployee />
          {/*<Salary className={isSidebarVisible ? "" : "salary-expanded"} />*/}
          {/*<Maps />*/}
        </div>
        <div className="charts">
          {/*<Best />*/}
          {/*<ProjectTime />*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
