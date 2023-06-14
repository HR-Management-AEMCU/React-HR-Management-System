import "./widget.scss";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
/*import withAuth from "../../withAuth";*/
const Widget = ({ type }) => {
  const [companyIncome, setCompanyIncome] = useState(0);

  const [adminCount, setAdminCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  
  useEffect(()=>{
    fetch('http://localhost:8060/api/v1/user-profile/role-manager-status-inactive',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
    .then(data =>{
        setCompanyIncome(data);
        console.log(data);
        const userIds = data.map(x => x.userId); // Tüm kullanıcı profillerinden userId'leri alın
        localStorage.setItem('userIds', JSON.stringify(userIds)); // userIds'yi localStorage'e JSON formatında kaydedin
    });
},[]);
  
  let data;

  switch (type) {
    case "total":
      data = {
        title: "Company Expense",
        link: "See all expense",
        count: 22,
        icon: (
          <ManageAccountsOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)", fontSize: "35px" }}
          />
        ),
      };
      break;

    case "retired":
      data = {
        title: "Company Income",
        link: "See all income",
        count: 20,
        icon: (
          <BadgeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
              fontSize: "35px"
            }}
          />
        ),
      };
      break;
    case "laik":
      data = {
        title: "Company Profit / Loss",
        link: "See all Profit/Loss",
        count: 10,
        icon: (
          <BadgeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
              fontSize: "35px"
            }}
          />
        ),
      };
      break;
    case "active":
      data = {
        title: "Payments",
        link: "See all total payments",
        count: 15,
        icon: (
          <AccessibilityNewOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green"
              , fontSize: "35px"
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widgetmanager">
      <div className="widget__leftmanager">
        <span className="widget__titlemanager">{data.title}</span>
        <span className="widget__countermanager">{data.count}</span>
        <span className="widget__linkmanager">{data.link}</span>
      </div>
      <div className="widget__rightmanager">
        <div className="percentagemanager positivemanager">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
