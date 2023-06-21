import "./widget.scss";
/*import { useState, useEffect } from "react";*/
/*import withAuth from "../../withAuth";*/
/*
import ProjectImage from "../../../assets/adminassets/assets/3d-casual-life-sheets-of-documents.png";
import MoneyImage from "../../../assets/adminassets/assets/3d-casual-life-open-safe-box-blue.png";*/
/*import WorkerService from "../../service/WorkerService";*/
/*import PermissionService from "../../service/PermissionService";*/
/*import AdvanceService from "../../service/AdvanceService";*/
/*import ExpenseService from "../../service/ExpenseService";*/
/*import ManagerService from "../../service/ManagerService";*/
/*import CompanyService from "../../service/CompanyService";*/
/*import AdminIcon from "../../../assets/adminassets/assets/man.png";*/
/*import ManagerIcon from "../../../assets/adminassets/assets/assets/3d-casual-life-young-man-in-headphones-sitting-with-laptop-and-waving.png";*/

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
