import { useEffect, useState } from 'react';
import './managerprofilecopy.css';

const ManagerProfile = () => {

  const [manager, setManager] = useState([
    { 
    name: "",
    surname: "",
    photo: "",
    email: "",
    birthDate: "",
    birthPlace: "",
    identificationNumber: "",
    gender: "",
    neighbourhood :"",
    district: "",
    province: "",
    country: "",
    apartmentNumber: "",
    postalCode: "",
    salary: "",
    companyName: "",
    phone: "",
    department: "",
    jobStartingDate: "",
    jobEndingDate: "",
    },
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  useEffect(()=>{
    fetch('http://localhost:8060/api/v1/user-profile/info-personel',{
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
          src={manager.photo}
          alt="Profile Picture"
        />
        <h2 className="profile-name">{manager.name} {manager.surname}</h2>
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
          <span className='first-name'>Email</span>
          <span className='second-name'>{manager.email}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Birth Day</span>
          <span className='second-name'>{formatDate(manager.birthDate)}</span>
        </div>
      <hr />
      <div className="line">
          <span className='first-name'>Birth Place</span>
          <span className='second-name'>{manager.birthPlace}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Phone</span>
          <span className='second-name'>{manager.phone}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Gender</span>
          <span className='second-name'>{manager.gender}</span>
        </div>
        <hr />
        </div>
        </div>
      </div>
      <div className="right-card">

      <div className='name-container'>
      <div className="line">
          <span className='first-name'>Identification Number</span>
          <span className='second-name'>{manager.identificationNumber}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Neighbourhood</span>
          <span className='second-name'>{manager.neighbourhood}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>District</span>
          <span className='second-name'>{manager.district}</span>
        </div>
      <hr />
        <div className="line">
          <span className='first-name'>Province</span>
          <span className='second-name'>{manager.province}</span>
        </div>
        <hr />
       {/* <div className="line">
          <span className='first-name'>Building Number</span>
          <span className='second-name'>{manager.buildingNumber}</span>
  </div>
        <hr />*/}
        <div className="line">
          <span className='first-name'>Apartment Number</span>
          <span className='second-name'>{manager.apartmentNumber}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Postal Code</span>
          <span className='second-name'>{manager.postalCode}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Province</span>
          <span className='second-name'>{manager.province}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Salary</span>
          <span className='second-name'>{manager.salary}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Company Name</span>
          <span className='second-name'>{manager.companyName}</span>
        </div>
        <hr />
        <div className="line">
          <span className='first-name'>Department</span>
          <span className='second-name'>{manager.department}</span>
        </div>
        <hr />
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


        </div>

      </div>
     
    </div>
      );
}
export default ManagerProfile