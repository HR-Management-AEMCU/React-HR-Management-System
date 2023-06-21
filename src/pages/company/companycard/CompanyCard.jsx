import "./companycard.scss";
import Sidebar from "../../../components/companycomponent/sidebar/Sidebar";
import Navbar from "../../../components/companycomponent/navbar/Navbar";
import Widget from "../../../components/companycomponent/widgets/Widget";
import CompanyCard from "../../../components/companycomponent/profilevisitor/VisitorProfile copy";

import { useContext } from "react";
import Welcome from "../../../components/companycomponent/welcome/Welcome";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const CompanyCardPage = () => {
 /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <CompanyCard />
      </div>
    </div>
  );
};

export default CompanyCardPage;
