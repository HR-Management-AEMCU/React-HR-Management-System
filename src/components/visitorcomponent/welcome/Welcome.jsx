import "./welcome.scss";
import Person from "../../../assets/adminassets/assets/business-3d-happy-robot-assistant-waving-hello.png";
/*import WorkerService from "../../service/WorkerService";*/
import { useState, useEffect } from "react";

/*
import AdminService from "../../service/AdminService";*/

const Welcome = () => {
  const token = localStorage.getItem("token");
  const [worker, setWorker] = useState({});
  
  /*useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchWorkerInfo = async () => {
      try {
        const response = await AdminService.getAllAdminInfo(token, {
          cancelToken: source.token,
        });
        setWorker(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
        }
      }
    };

    fetchWorkerInfo();

    return () => {
      source.cancel();
    };
  }, [token]);
*/
  return (
    <div className="welcome">
      <div className="welcome-info">
        <div className="welcome-left-side">
          <h2>
            Hey <span>{worker.firstName}</span> Welcome to the Dashboard
          </h2>
          <p className="welcome-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit asperiores tempore quo assumenda, deleniti rem dolore.
            Iusto numquam ad libero rerum doloribus facere odio sapiente nihil,
            commodi at incidunt?
          </p>
        </div>
        <div className="welcome-right-side">
          <img src="https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1571.jpg?w=740&t=st=1686684064~exp=1686684664~hmac=eebe291b4539a9855754656724b38a5e26febd284d193d3a07d02a4c4e8b7d38" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
