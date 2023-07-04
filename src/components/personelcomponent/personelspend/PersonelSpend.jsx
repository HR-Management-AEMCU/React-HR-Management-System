import { useState } from "react";
import "./personelspend.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonelSpend = () => {
  /*
  "buildingNumber": 0,
  "salary": 0,
  "companyName": "string",
  "department": "string",
  "jobStartingDate": 0
  */ 
    const navigate = useNavigate();
    const filteredData = {};
    const [spendTotal, setSpendTotal] = useState('');
    const [spendDescription, setSpendDescription] = useState('');
    const [spendDate, setSpendDate] = useState('');
    const [spendPhoto, setSpendPhoto] = useState('');

    const token=localStorage.getItem('token');

    const handleSave = () => {

      filteredData.token = token;
      if (spendTotal) {
        filteredData.spendTotal = spendTotal;
      }
      if (spendDescription) {
        filteredData.spendDescription = spendDescription;
      }
      if (spendDate) {
        filteredData.spendDate = spendDate;
      }
      if (spendPhoto) {
        filteredData.spendPhoto = spendPhoto;
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

      fetch('http://localhost:8060/api/v1/spend/personnel-spend', {
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
          toast.success("Harcama Talebiniz Yöneticinize iletilmiştir. Onay işleminin ardından harcama hesabınıza yatırılacaktır.", { autoClose: 4000 });
          setTimeout(() => {
            /*navigate("/personelhome/personelupdatepage"); */
            window.location.reload();
          }, 4000);
        } else {
          toast.error("PersonnelSpend başarısız.", { autoClose: 5000 });
          throw new Error("PersonnelSpend başarisiz"); // İstek başarısızsa hata fırlat
          
        }
      })
      .catch((error) => {
        toast.error("PersonnelSpend başarısız.Lütfen daha sonra tekrar deneyiniz...", { autoClose: 5000 });
        console.error(error);
      });
      console.log(spendTotal)
    };

    const handleCancel = () => {
        // Değişiklikleri iptal etmek için state'i sıfırlayabilirsiniz
        setSpendTotal('');
        setSpendDescription('');
        setSpendDate('');
        navigate("/personelhome")
        
      };
   
  return (
    <div className="containeravans">
        <ToastContainer />
        <div className="baslikdiv">
      <h1 className="avansbaslik">Entering Expenditure</h1>
      </div>
    <form className="updateprofile">
      <div className="genelupdate">
      <div className="leftavans">
      
      <label className="avanslabel" htmlFor="name">Spend Total:</label>
      <input
        className="avansinput"
        type="number"
        id="spendTotal"
        value={spendTotal}
        onChange={(e) => setSpendTotal(e.target.value)}
        required
      />
      <label className="avanslabel" htmlFor="name">Spend Description:</label>
      <input
        className="avansinput"
        type="text"
        id="spendDescription"
        value={spendDescription}
        onChange={(e) => setSpendDescription(e.target.value)}
        required
      />
      <label className="avanslabel" htmlFor="birthday">Spend Date:</label>
      <input type="date" className="avansinput"
      id="spendDate" 
      value={spendDate} 
      onChange={(e) =>  setSpendDate(e.target.value)} 
      />
      <label className="avanslabel" htmlFor="birthday">Spend Photo:</label>
      <input type="file" className="avansinput"
      id="spendPhoto" 
      value={spendPhoto} 
      onChange={(e) =>  setSpendPhoto(e.target.value)} 
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
export default PersonelSpend