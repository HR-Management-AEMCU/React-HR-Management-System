import "./home.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import Widget from "../../../components/managercomponent/widgets/Widget";
import Widget2 from "../../../components/managercomponent/widgets/Widget2"
/*import NewEmployee from "../../components/newEmployee/NewEmployee";
import Tables from "../../components/table/Tables";
import BarCharts from "../../components/bar/BarCharts";
import AverageWork from "../../components/averagework/AverageWork";
import withAuth from "../../withAuth";
import PercentArea from "../../components/percentarea/PercentArea";*/
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/*widget1 ile kar zarar ödenecek paralar gibi ekranlar tutulup widget 2 ile yine sayılar listeler tuutlabilir*/}
        <div className="widgets">
          <Widget type="total" />
          <Widget type="retired" />
          <Widget type="active" />
          <Widget type="laik" />
        </div>
        <div className="widgets">
          <Widget2 type="total" />
          <Widget2 type="retired" />
          <Widget2 type="active" />
          <Widget2 type="laik" />
        </div>
      <div className="circ">
          {/* <div className="circ_left">
            <NewEmployee />
          </div> */}
          {/*<div className="circ_right">
            <NewEmployee />
            <BarCharts />
          </div>
        </div>
        <div className="charts">*/}
          {/* <NewEmployee /> */}
          {/*
          <div className="tablearea">
            <Tables />
          </div>*/}
      </div>
      </div>
    </div>
  );
};

export default Home;
