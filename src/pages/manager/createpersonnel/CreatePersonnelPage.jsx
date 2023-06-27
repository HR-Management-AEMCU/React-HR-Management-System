import "./createpersonnelpage.scss";
import Sidebar from "../../../components/managercomponent/sidebar/Sidebar";
import Navbar from "../../../components/managercomponent/navbar/Navbar";
import CreatePersonnel from "../../../components/managercomponent/createpersonnel/CreatePersonnel";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
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
