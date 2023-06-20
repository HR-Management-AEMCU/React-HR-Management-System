import React, { useEffect, useState } from "react";
import "./CompanyInfo.scss";
import { useParams } from "react-router-dom";
import CompanyService from "../../../service/company/CompanyService";

const CompanyInfo = () => {
   const {companyId} = useParams();
  const [company, setCompany] = useState(null);
  const [error,setError] = useState(null);

  useEffect(() => {
    if (companyId) {
      CompanyService.getCompanyName(companyId)
        .then((response) => {
          setCompany({ ...response.data });
          setError(null);
        })
        .catch((error) => {
          setError("Failed to fetch company data.");
          console.log(error);
         
        });
    }
    else{
      setError("No companyId provided")
    }
  }, [companyId]);

  if(error){
    return <div>Error :{error}</div>
  }
  if(!company){
    return <div> loading ...</div>
  }

  return (
    <div className="company-info">
      <h1>{company.companyName}</h1>
      <img src={company.companyLogoUrl} alt={company.companyName} />
      {/* Diğer şirket bilgilerini burada görüntüleyebilirsiniz */}
    </div>
  );
};

export default CompanyInfo;