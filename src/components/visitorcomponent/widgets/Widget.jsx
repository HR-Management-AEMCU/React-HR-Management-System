import "./widget.scss";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState, useEffect } from "react";
/*import withAuth from "../../withAuth";*/
import Expenses from "../../../assets/adminassets/assets/expenses.png";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import TabOutlinedIcon from "@mui/icons-material/TabOutlined";
import ProjectImage from "../../../assets/adminassets/assets/3d-casual-life-sheets-of-documents.png";
import WalletImage from "../../../assets/adminassets/assets/3d-casual-life-wallet-with-banknots-credit-card-and-coins.png";
import MoneyImage from "../../../assets/adminassets/assets/3d-casual-life-open-safe-box-blue.png";
import SickImage from "../../../assets/adminassets/assets/3d-casual-life-medical-history-pills.png";
/*import WorkerService from "../../service/WorkerService";*/
/*import PermissionService from "../../service/PermissionService";*/
/*import AdvanceService from "../../service/AdvanceService";*/
/*import ExpenseService from "../../service/ExpenseService";*/
import Gold from "../../../assets/adminassets/assets/casual-life-3d-yellow-dollar-coin-1.png";
/*import ManagerService from "../../service/ManagerService";*/
/*import CompanyService from "../../service/CompanyService";*/
import AdminIcon from "../../../assets/adminassets/assets/man.png";
import ManagerIcon from "../../../assets/adminassets/assets/assets/3d-casual-life-young-man-in-headphones-sitting-with-laptop-and-waving.png";

/*const useFetchData = (token) => {
  const [worker, setWorker] = useState();
  const [listPermission, setListPermission] = useState(0);
  const [listAdvance, setListAdvances] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    fetch.get("http://localhost/manager/get-all-summary").then((response) => {
      setListAdvances([...response.data]);
    });
    return () => {};
  }, []);

  useEffect(() => {
    fetch.get("http://localhost/company/get-all-summary").then((response) => {
      setListPermission([...response.data]);
    });
    return () => {};
  }, []);

  const fetchData = async () => {
    const source = fetch.CancelToken.source();

    try {
      const workerResponse = await WorkerService.getAllWorker({
        cancelToken: source.token,
      });
    } catch (error) {
      if (!fetch.isCancel(error)) {
        // Handle the error here
      }
    } finally {
      source.cancel();
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return { worker, listPermission, listAdvance, expense };
};*/

const Widget = ({ type }) => {
  const token = localStorage.getItem("token");
  /*const { worker, listPermission, listAdvance, expense } = useFetchData(token);*/

  let data;
  switch (type) {
    case "total":
      data = {
        title: "TOTAL EMPLOYEE",
        link: "See all manager",
        class: "total",
        count: 15,
        icon: <img className="widgetadmin-imga" src={ProjectImage} alt="" />,
        background: "#dad7f4",
      };
      break;

    case "retired":
      data = {
        title: "TOTAL MANAGER",
        link: "See all employee",
        class: "active",
        count: 10,
        /*count: listAdvance.length,*/
        icon: <img src={ManagerIcon} className="widgetadmin-img" />,
        background: "#fcd4c8",
      };
      break;
    case "laik":
      data = {
        title: "TOTAL COMPANY",
        link: "See all employee",
        class: "active",
        count: 150,
        /*count: listPermission.length,*/
        icon: <img src={MoneyImage} className="widgetadmin-img" />,
        background: "#fef4de",
      };
      break;
    case "active":
      data = {
        title: "TOTAL ADMIN",
        link: "See all total company",
        count: 1,
        class: "active",
        icon: <img src={AdminIcon} className="widgetadmin-img" alt="" />,
        background: "#d1eeea",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widgetadmin" style={{ backgroundColor: data.background }}>
      <div className="widget__rightadmin">{data.icon}</div>
      <div className="widget__leftadmin">
        <span className="widget__counteradmin">{data.count}</span>
        <span className="widget__titleadmin">{data.title}</span>
      </div>
    </div>
  );
};

export default Widget;
