
import React from "react";
import { useNavigate } from "react-router-dom";
import "./logout.scss";

function Logout() {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  return (
    <span className="logout" onClick={handleLogout}>
      Logout
    </span>
  );
}

export default Logout;
