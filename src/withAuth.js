import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      const roles = localStorage.getItem("roles");

      if (token) {
        const decodedToken = jwtDecode(token);
        const current_time = Date.now().valueOf() / 1000;

        // Token'ın süresi dolmuşsa çerezi sil
        if (decodedToken.exp < current_time) {
          localStorage.removeItem("token");
          localStorage.removeItem("roles");
          navigate("/login");
        } else if (roles !== "ADMIN") {
          // Role kontrolü
          localStorage.removeItem("token");
          localStorage.removeItem("roles");
          navigate("/login");
        }
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        navigate("/login");
      }
    }, [navigate]);

    return <ComponentToProtect {...props} />;
  };
}
/*npm install jwt-decode
*/ 