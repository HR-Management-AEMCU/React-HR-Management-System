import { useEffect, useState } from 'react';
import './visitorprofilecopy.css';

const VisitorProfile = () => {

  const [manager, setManager] = useState([
    { 
      name: "",
      surname:"",
      photo: "",
      email: "",
      birthDate:"",
      birthPlace:"",
      identificationNumber:"",
      gender:"",
      neighbourhood:"",
      district:"",
      province:"",
      country:"",
      buildingNumber:"",
      apartmentNumber:"",
      postalCode: "",
    },
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  
{/*buraya axios ile sirketin gelmesini saglayacagiz */}
    return (
         <div className="user-profile">
      <div className="left-card">
        
        <img
          className="profile-picture"
          src={manager.photo}
          alt="company logo"
        />
        <h2 className="profile-name">{manager.name} {manager.surname}</h2>
        <div className='leftinfo-card'>


          <div className='name-container'>
        <div className="line">
          <span className='first-name'>Company Name</span>
          <span className='second-name'>{manager.email}</span>
        </div>
      <hr />
        <div className="line">
          <span className='first-name'>Phone </span>
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
          <span className='first-name'>İdentify Number</span>
          <span className='second-name'>{manager.identificationNumber}</span>
        </div>
        <hr />
        
      
        <div className="line">
          <span className='first-name'>Country</span>
          <span className='second-name'>{manager.country}</span>
        </div>
        <hr />
        
       
        <div className="line">
          <span className='first-name'>Province</span>
          <span className='second-name'>{manager.province}</span>
        </div>
        
        </div>

      </div>
     
    </div>
      );
}
export default VisitorProfile