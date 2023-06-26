
import React from "react";
import { useNavigate } from "react-router-dom";
import "./logout.scss";

function Logout() {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    history("/adminlogin");
  };

  return (
    <span className="logout" onClick={handleLogout}>
      <div className="log">Logout</div>
    </span>
  );
}

export default Logout;
