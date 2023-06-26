import { useState } from "react";
import "./updateprofilecompany.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfileCompany = () => {
  /*
  "buildingNumber": 0,
  "salary": 0,
  "companyName": "string",
  "department": "string",
  "jobStartingDate": 0
  */ 
    const navigate = useNavigate();
    const filteredData = {};
    const [companyName, setCompanyName] = useState('');
    const [taxNumber, setTaxNumber] = useState('');
    const [companyDistrict, setCompanyDistrict] = useState('');
    const [companyProvince, setCompanyProvince] = useState('');
    const [companyCountry, setCompanyCountry] = useState('');
    const [companyBuildingNumber, setCompanyBuildingNumber] = useState('');
    const [companyApartmentNumber, setCompanyApartmentNumber] = useState('');
    const [companyPostalCode, setCompanyPostalCode] = useState('');
    const [companyBalanceStatus, setCompanyBalanceStatus] = useState('');
    const [income, setIncome] = useState('');
    const [outcome, setOutcome] = useState('');
    const [companyLogoUrl, setCompanyLogoUrl] = useState('');
    const token=localStorage.getItem('token');


    const handleSave = () => {
      filteredData.token = token;
      if (companyName) {
        filteredData.companyName = companyName;
      }
      if (taxNumber) {
        filteredData.taxNumber = taxNumber;
      }
      if (companyDistrict) {
        filteredData.companyDistrict = companyDistrict;
      }
      if (companyProvince) {
        filteredData.companyProvince = companyProvince;
      }
      if (companyCountry) {
        filteredData.companyCountry = companyCountry;
      }
      if (companyBuildingNumber) {
        filteredData.companyBuildingNumber = companyBuildingNumber;
      }
      if (companyApartmentNumber) {
        filteredData.companyApartmentNumber = companyApartmentNumber;
      }
      if (companyPostalCode) {
        filteredData.companyPostalCode = companyPostalCode;
      }
      if (income) {
        filteredData.income = income;
      }
      if (outcome) {
        filteredData.outcome = outcome;
      }
      if (companyLogoUrl) {
        filteredData.companyLogoUrl = companyLogoUrl;
      }

      fetch('http://localhost:8070/api/v1/company/update', {
        method: 'POST',
        body: JSON.stringify(filteredData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        if (response.ok) {
          toast.success("UpdateCompany başarılı...", { autoClose: 2000 });
          setTimeout(() => {
            /*navigate("/personelhome/personelupdatepage"); */
           window.location.reload();
          }, 4000);
        } else {
          toast.error("UpdateCompany başarısız.", { autoClose: 5000 });
          throw new Error("UpdateCompany başarisiz"); // İstek başarısızsa hata fırlat
          
        }
      })
      .catch((error) => {
        toast.error("UpdateCompany başarısız.Lütfen daha sonra tekrar deneyiniz...", { autoClose: 5000 });
        console.error(error);
      });
      console.log(companyName,taxNumber,filteredData)
    };

    const handleCancel = () => {
        // Değişiklikleri iptal etmek için state'i sıfırlayabilirsiniz
        setCompanyName('');
        setTaxNumber('');
        setCompanyDistrict('');
        setCompanyProvince('');
        setCompanyCountry('');
        setCompanyBuildingNumber('');
        setCompanyApartmentNumber('');
        setCompanyPostalCode('');
        setCompanyBalanceStatus('');
        setIncome('');
        setOutcome('');
        setCompanyLogoUrl('');
      };
   
  return (
    <div className="containerupdate">
        <ToastContainer />
       {/*} <div className="baslikdiv">
      <h1 className="employeregisterbaslik">Employee Edit</h1>
      </div>*/}
    <form className="updateprofile">
      <div className="genelupdate">
      <div className="left">
      <label className="updatelabel" htmlFor="name">Company Name:</label>
      <input
        className="updateinput"
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">Company Logo URL:</label>
      <input
        className="updateinput"
        type="text"
        id="companyLogoUrl"
        value={companyLogoUrl}
        onChange={(e) => setCompanyLogoUrl(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">Company District:</label>
      <input
        className="updateinput"
        type="text"
        id="companyDistrict"
        value={companyDistrict}
        onChange={(e) => setCompanyDistrict(e.target.value)}
        required
      />
     <label className="updatelabel" htmlFor="name">Company Country:</label>
      <input
        className="updateinput"
        type="text"
        id="companyCountry"
        value={companyCountry}
        onChange={(e) => setCompanyCountry(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">Company Apartment Number:</label>
      <input
        className="updateinput"
        type="number"
        id="companyApartmentNumber"
        value={companyApartmentNumber}
        onChange={(e) => setCompanyApartmentNumber(e.target.value)}
        required
      />
     
      <label className="updatelabel" htmlFor="name">Income:</label>
      <input
        className="updateinput"
        type="number"
        id="income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        required
      />
      
        </div>
        <div className="right">
       <label className="updatelabel" htmlFor="name">Tax Number:</label>
      <input className="updateinput"
        type="text"
        id="taxNumber"
        value={taxNumber}
        onChange={(e) => setTaxNumber(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">Company Province:</label>
      <input className="updateinput"
        type="text"
        id="companyProvince"
        value={companyProvince}
        onChange={(e) => setCompanyProvince(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">Company Building Number:</label>
      <input className="updateinput"
        type="number"
        id="companyBuildingNumber"
        value={companyBuildingNumber}
        onChange={(e) => setCompanyBuildingNumber(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">Company Postal Code:</label>
      <input className="updateinput"
        type="number"
        id="companyPostalCode"
        value={companyPostalCode}
        onChange={(e) => setCompanyPostalCode(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">Company Balance Status:</label>
      <input
        className="updateinput"
        type="number"
        id="companyBalanceStatus"
        value={companyBalanceStatus}
        onChange={(e) => setCompanyBalanceStatus(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">Outcome:</label>
      <input className="updateinput"
        type="number"
        id="outcome"
        value={outcome}
        onChange={(e) => setOutcome(e.target.value)}
        required
      />

      {/*<label htmlFor="bio">Comment:</label>
      <textarea
      className="updatetextarea"
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>*/}


        </div>
      </div>
     
    

      <div className="button-container">
        <button type="button" className="save updatebutton" onClick={handleSave}>SAVE</button>
        <button type="button" className="cancel updatebutton" onClick={handleCancel}>CANCEL</button>
      </div>
    </form>
  </div>
);
}
export default UpdateProfileCompany