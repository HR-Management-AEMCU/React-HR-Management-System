import "./widget.scss";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PercentIcon from '@mui/icons-material/Percent';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useEffect, useState } from "react";
/*import withAuth from "../../withAuth";*/
const Widget = ({ type }) => {
 
  const [adminCount, setAdminCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  
  const [money, setMoney] = useState(0);

  useEffect(()=>{
    fetch('http://localhost:8070/api/v1/company/company-money-operation',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
    }),
    }).then(data => data.json())
    .then(data =>{
        setMoney(data);
        console.log(data);
    });
},[]);
  
  let data;
  const pl=money.profitLoss;
  const plWithTwoDecimals = pl.toFixed(2); // Virgülden sonra 2 basamak al
  console.log(plWithTwoDecimals); // Sonucu konsola yazdır (örneğin)

  switch (type) {
    case "total":
      data = {
        title: "Company Outcome",
        link: "See all outcome",
        count: money.outcome ? "-" + money.outcome + " $" : "- 200.000 $",
        icon: (
          <RemoveCircleIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)", fontSize: "35px" }}/>),
            icon2: (
              <MoneyOffIcon
                className="percentagemanager "
                style={{
                  fontSize: "35px"}}/>),
      };
      break;

    case "retired":
      data = {
        title: "Company Income",
        link: "See all income",
        count: money.income ? "+" + money.income + " $" : "+ 400.000 $",
        icon: (
          <AddCircleIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
              fontSize: "35px"}}/>),
              icon2: (
                <AttachMoneyIcon
                  className="percentagemanager "
                  style={{
                    fontSize: "35px"}}/>),
      };
      break;
    case "laik":
      data = {
        title: "Company Profit / Loss",
        link: "See all Profit/Loss",
        count: plWithTwoDecimals ? "% "+plWithTwoDecimals + " $" : "+ % 100 Profit",
        icon: (
          <BusinessIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
              fontSize: "35px"}}/>),
        icon2: (
          <PercentIcon
            className="percentagemanager "
            style={{
              fontSize: "35px"}}/>),
      };
      break;
    case "active":
      data = {
        title: "Payments",
        link: "See all total payments",
        count: money.payments ? money.payments + " $" : "50.000$",
        icon: (
          <PaymentsIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green"
              , fontSize: "35px"
            }}
          />
        ),
        icon2: (
          <AccountBalanceIcon
            className="percentagemanager "
            style={{
              fontSize: "35px"}}/>),
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
        <div className="percentagemanager" >
        {data.icon2}
        </div>
        <div className="percentagemanager positivemanager">
        
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
