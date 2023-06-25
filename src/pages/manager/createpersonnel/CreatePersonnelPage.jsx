import "./createpersonnelpage.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import CreatePersonnel from "../../../components/managercomponent/createpersonnel/CreatePersonnel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/*import NewEmployee from "../../components/newEmployee/NewEmployee";
import Tables from "../../components/table/Tables";
import BarCharts from "../../components/bar/BarCharts";
import AverageWork from "../../components/averagework/AverageWork";
import withAuth from "../../withAuth";
import PercentArea from "../../components/percentarea/PercentArea";*/
const CreatePersonnelPage = () => {
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
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <CreatePersonnel/>
        
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

export default CreatePersonnelPage;
