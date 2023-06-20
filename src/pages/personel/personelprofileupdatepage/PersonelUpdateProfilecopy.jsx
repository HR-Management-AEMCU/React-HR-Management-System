import React, { useState, useEffect } from "react";

/*import ManagerService from "../../service/ManagerService";*/
import "./visitorupdateprofilecopy.scss";
import Sidebar from "../../../components/visitorcomponent/sidebar/Sidebar";
import Navbar from "../../../components/visitorcomponent/navbar/Navbar";
import Updateprofile from "../../../components/visitorcomponent/updateprofilevisitor/Updateprofile";
/*import withAuth from "../../withAuth";*/
/*import CompanyService from "../../service/CompanyService";*/


const VisitorUpdateProfile = () => {
  const [manager, setManager] = useState({});
  const [managerFormData, setManagerFormData] = useState({});
  const token = localStorage.getItem("token");

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
