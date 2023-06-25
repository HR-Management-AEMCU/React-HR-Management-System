import React, { useState, useEffect } from "react";

/*import ManagerService from "../../service/ManagerService";*/
import "./visitorupdateprofile.scss";
import Sidebar from "../../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../../components/visitorcomponent/navbar/Navbar";
import Updateprofile from "../../../components/visitorcomponent/updateprofilevisitor/Updateprofile";
import { useNavigate } from "react-router-dom";
/*import withAuth from "../../withAuth";*/
/*import CompanyService from "../../service/CompanyService";*/


const VisitorUpdateProfile = () => {
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

  const [manager, setManager] = useState({});
  const [managerFormData, setManagerFormData] = useState({});
  

  /*useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await ManagerService.getInfoForAdmin(token, {
          cancelToken: source.token,
        });
        console.log(response);
        setManager({ ...response.data });
        setManagerFormData({ ...response.data });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          // handle error
          console.log(error);
        }
      }
    };*

    fetchInfo();
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);
*/
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
       <Updateprofile/>



        
      </div>
    </div>
  );
};

export default VisitorUpdateProfile;
