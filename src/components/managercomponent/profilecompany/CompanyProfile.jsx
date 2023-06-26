import { useEffect, useState } from 'react';
import './companyprofile.css';

const CompanyProfile = () => {

  const [manager, setManager] = useState([
    { 
      companyName: "",
      taxNumber: "",
      companyDistrict: "",
      companyProvince: "",
      companyCountry: "",
      companyBuildingNumber: "",
      companyApartmentNumber: "",
      companyPostalCode: "",
      companyBalanceStatus :"",
      income: "",
      outcome: "",
      companyLogoUrl: "",
    },
  ]);


  useEffect(()=>{
    fetch('http://localhost:8070/api/v1/company/info-company',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
    }),
    }).then(data => data.json())
    .then(data =>{
        setManager(data);
        console.log(data);
    });
},[]);

    return (
         <div className="user-profile">
      <div className="left-card">
        
        <img
          className="profile-picture"
          src={manager.companyLogoUrl}
          alt="Profile Picture"
        />
        <h2 className="profile-name">{manager.companyName}</h2>
        <div className='leftinfo-card'>


          <div className='name-container'>
        {/*profil resminin altında zaten isim soyisim yazdığı için ekstra gerek yok
        <div className="line">
          <span className='first-name'>Name</span>
          <span className='second-name'>{manager.name}</span>
        </div>
      <hr />
        <div className="line">
          <span className='first-name'>Surname </span>
          <span className='second-name'>{manager.surname}</span>
        </div>
    <hr />*/}
        <div className="line">
          <span className='first-name'>Tax Number</span>
          <span className='second-name'>{manager.taxNumber}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Income</span>
          <span className='second-name'>{manager.income}</span>
        </div>
      <hr />
      <div className="line">
          <span className='first-name'>Outcome</span>
          <span className='second-name'>{manager.outcome}</span>
        </div>
        <hr />
        </div>
        </div>
      </div>
      <div className="right-card">

      <div className='name-container'>
      <div className="line">
          <span className='first-name'>Company District</span>
          <span className='second-name'>{manager.companyDistrict}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Company Province</span>
          <span className='second-name'>{manager.companyProvince}</span>
        </div>
        <hr />
       
        <div className="line">
          <span className='first-name'>CompanyCountry</span>
          <span className='second-name'>{manager.companyCountry}</span>
        </div>
        <hr />
       {/* <div className="line">
          <span className='first-name'>Building Number</span>
          <span className='second-name'>{manager.buildingNumber}</span>
  </div>
        <hr />*/}
        <div className="line">
          <span className='first-name'>Company Building Number</span>
          <span className='second-name'>{manager.companyBuildingNumber}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Company Apartment Number</span>
          <span className='second-name'>{manager.companyApartmentNumber}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Company Postal Code</span>
          <span className='second-name'>{manager.companyPostalCode}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Company Balance Status</span>
          <span className='second-name'>{manager.companyBalanceStatus}</span>
        </div>
        <hr />
        {/*
       {manager.jobStartingDate && (
        <div>
          <div className="line">
           <span className='first-name'>Job Starting Date</span>
           <span className='second-name'>{manager.jobStartingDate}</span>
         </div>
          <hr /> 
        </div>)}
        {manager.jobEndingDate && (
         <div>
          <div className="line">
            <span className='first-name'>Job Ending Date</span>
            <span className='second-name'>{manager.jobEndingDate}</span>
          </div>
          <hr /> 
         </div>)}
        */}

        </div>

      </div>
     
    </div>
      );
}
export default CompanyProfile