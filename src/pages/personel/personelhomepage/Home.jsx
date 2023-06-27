import "./home.scss";
import Sidebar from "../../../components/personelcomponent/sidebar/Sidebar";
import Navbar from "../../../components/personelcomponent/navbar/Navbar";

import Widget2 from "../../../components/personelcomponent/widgets/Widget2"
/*import NewEmployee from "../../components/newEmployee/NewEmployee";
import Tables from "../../components/table/Tables";
import BarCharts from "../../components/bar/BarCharts";
import AverageWork from "../../components/averagework/AverageWork";
import withAuth from "../../withAuth";
import PercentArea from "../../components/percentarea/PercentArea";*/
import MainImages from "../../../components/personelcomponent/mainresimler/MainImages";
import Footer from "../../../components/personelcomponent/footer/Footer";
import Main from "../../../components/personelcomponent/mainresimler/Main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
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
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/*widget1 ile kar zarar ödenecek paralar gibi ekranlar tutulup widget 2 ile yine sayılar listeler tuutlabilir*/}
        {/*<Main/>*/}
        
        <div className="widgets">
          <Widget2 type="total" />
          <Widget2 type="retired" />
          <Widget2 type="active" />
          <Widget2 type="laik" />
        </div>
       
      <div className="circfooter">
       {/*} <Footer/>*/}
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
