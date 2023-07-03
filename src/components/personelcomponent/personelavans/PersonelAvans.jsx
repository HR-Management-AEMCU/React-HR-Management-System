import { useState } from "react";
import "./personelavans.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonelAvans = () => {
  /*
  "buildingNumber": 0,
  "salary": 0,
  "companyName": "string",
  "department": "string",
  "jobStartingDate": 0
  */ 
    const navigate = useNavigate();
    const filteredData = {};
    const [avansTotal, setAvansTotal] = useState('');
    const [avansDescription, setAvansDescription] = useState('');
    const [avansDate, setAvansDate] = useState('');
    

    const token=localStorage.getItem('token');

    const handleSave = () => {

      filteredData.token = token;
      if (avansTotal) {
        filteredData.avansTotal = avansTotal;
      }
      if (avansDescription) {
        filteredData.avansDescription = avansDescription;
      }
      if (avansDate) {
        filteredData.avansDate = avansDate;
      }
      

        /*if (gender.trim() === "") {
            toast.error("Gender Not Empty.", { autoClose: 2000 });
            return;
          }
          if (phone.trim() === "") {
            toast.error("Phone not Empty.", { autoClose: 2000 });
            return;
          }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error('Lütfen geçerli bir telefon numarası girin.', { autoClose: 2000 });
            return;
          }*/

        /*const formData = new FormData();
        formData.append("selectedImage", selectedImage);
        formData.append("gender", gender);
        formData.append("phone", phone);
        formData.append("provience", province);
        console.log(formData)
        console.log(selectedImage)*/
      // Burada fetch isteği yaparak değişiklikleri backend'e kaydedebilirsiniz
      // Örnek olarak:

      fetch('http://localhost:8060/api/v1/avans/personnel-avans', {
        method: 'POST',
        body: JSON.stringify(filteredData/*{ token,photo, phone, gender,identificationNumber,
             unixTimestamp,birthPlace,neighbourhood,district,province,country,
             apartmentNumber,postalCode,jobStartingDate,department,companyName,salary }*/),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        if (response.ok) {
          toast.success("Avans Talebiniz Yöneticinize iletilmiştir. Onay işleminin ardından avans hesabınıza yatırılacaktır.", { autoClose: 4000 });
          setTimeout(() => {
            /*navigate("/personelhome/personelupdatepage"); */
            window.location.reload();
          }, 4000);
        } else {
          toast.error("PersonnelAvans başarısız.", { autoClose: 5000 });
          throw new Error("PersonnelAvans başarisiz"); // İstek başarısızsa hata fırlat
          
        }
      })
      .catch((error) => {
        toast.error("PersonnelAvans başarısız.Lütfen daha sonra tekrar deneyiniz...", { autoClose: 5000 });
        console.error(error);
      });
      console.log(avansTotal)
    };

    const handleCancel = () => {
        // Değişiklikleri iptal etmek için state'i sıfırlayabilirsiniz
        setAvansTotal('');
        setAvansDescription('');
        setAvansDate('');
        navigate("/personelhome")
        
      };
   
  return (
    <div className="containeravans">
        <ToastContainer />
        <div className="baslikdiv">
      <h1 className="avansbaslik">Avans Request</h1>
      </div>
    <form className="updateprofile">
      <div className="genelupdate">
      <div className="leftavans">
      
      <label className="avanslabel" htmlFor="name">Avans Total:</label>
      <input
        className="avansinput"
        type="number"
        id="avansTotal"
        value={avansTotal}
        onChange={(e) => setAvansTotal(e.target.value)}
        required
      />
      <label className="avanslabel" htmlFor="name">Avans Description:</label>
      <input
        className="avansinput"
        type="text"
        id="avansDescription"
        value={avansDescription}
        onChange={(e) => setAvansDescription(e.target.value)}
        required
      />
      <label className="avanslabel" htmlFor="birthday">Avans Date:</label>
      <input type="date" className="avansinput"
      id="avansDate" 
      value={avansDate} 
      onChange={(e) =>  setAvansDate(e.target.value)} 
      />
       {/*<label className="updatelabel" htmlFor="name">Company Name:</label>
      <input className="updateinput"
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
  />
        <label className="updatelabel" htmlFor="name">Department:</label>
      <input className="updateinput"
        type="text"
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />*/}
        </div>
        
      </div>
     
    

      <div className="button-container">
        <button type="button" className="saveavans avansbutton" onClick={handleSave}>SAVE</button>
        <button type="button" className="cancelavans avansbutton" onClick={handleCancel}>CANCEL</button>
      </div>
    </form>
  </div>
);
}
export default PersonelAvans