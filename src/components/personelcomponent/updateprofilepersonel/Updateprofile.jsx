import { useState } from "react";
import "./updateprofile.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updateprofile = () => {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');

    
    const token=localStorage.getItem('token');



    const handleSave = () => {

        //gg.aa.yyyy şeklinde alından date long tipine çevirme
        const selectedDate = new Date(birthDate);
        const unixTimestamp = selectedDate.getTime();
        console.log(unixTimestamp);

        if (gender.trim() === "") {
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
          }

      // Burada fetch isteği yaparak değişiklikleri backend'e kaydedebilirsiniz
      // Örnek olarak:
      fetch('http://localhost:8060/api/v1/user-profile/update-visitor', {
        method: 'POST',
        body: JSON.stringify({ token,photo, phone, gender,identificationNumber,
             unixTimestamp,birthPlace,neighbourhood,district,province,country,apartmentNumber,postalCode }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.ok) {
          toast.success("Update başarılı...", { autoClose: 2000 });
          setTimeout(() => {
            navigate("/visitorhome"); 
          }, 4000);
        } else {
          toast.error("Update başarısız.", { autoClose: 5000 });
          throw new Error("Kayit başarisiz"); // İstek başarısızsa hata fırlat
          
        }
      })
      .catch((error) => {
        toast.error("Update başarısız.Lütfen daha sonra tekrar deneyiniz...", { autoClose: 5000 });
        console.error(error);
      });
      console.log(phone,province)
    };

    const handleCancel = () => {
        // Değişiklikleri iptal etmek için state'i sıfırlayabilirsiniz
        setPhoto('');
        setPhone('');
        setGender('');
        setBirthDate('');
        setBirthPlace('');
        setIdentificationNumber('');
        setNeighbourhood('');
        setDistrict('');
        setProvince('');
        setCountry('');
        setApartmentNumber('');
        setPostalCode('');
      };

   


  return (
    <div className="containerupdate">
        <ToastContainer />
    <form className="updateprofile">
      <div className="genelupdate">
      <div className="left">
            <label className="updatelabel" htmlFor="name">Photo Url:</label>
      <input
        className="updateinput"
        type="text"
        id="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="gender">Cinsiyet:</label>
      <select className="updateselect" id="gender" value={gender} onChange={(e) =>  setGender(e.target.value)}>
        <option value="">Seçiniz</option>
        <option value="MALE">Erkek</option>
        <option value="FEMALE">Kadın</option>
        <option value="OTHER">Diğer</option>
      </select>
      <label className="updatelabel" htmlFor="birthday">Birth Day:</label>
      <input type="date" className="updateinput"
      id="birthday" 
      value={birthDate} 
      onChange={(e) =>  setBirthDate(e.target.value)} 
      />
   <label className="updatelabel" htmlFor="name">Neighbourhood:</label>
      <input className="updateinput"
        type="text"
        id="neighbourhood"
        value={neighbourhood}
        onChange={(e) => setNeighbourhood(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="provience">Province:</label>
      <input className="updateinput"
        type="text"
        id="province"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        required
      />
       <label className="updatelabel" htmlFor="name">ApartmentNumber:</label>
      <input className="updateinput"
        type="number"
        id="apartmentNumber"
        value={apartmentNumber}
        onChange={(e) => setApartmentNumber(e.target.value)}
        required
      />
        </div>
        <div className="right">
       <label className="updatelabel" htmlFor="name">Phone:</label>
      <input className="updateinput"
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">IdentificationNumber:</label>
      <input className="updateinput"
        type="number"
        id="identificationNumber"
        value={identificationNumber}
        onChange={(e) => setIdentificationNumber(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">BirthPlace:</label>
      <input className="updateinput"
        type="text"
        id="birthPlace"
        value={birthPlace}
        onChange={(e) => setBirthPlace(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">District:</label>
      <input className="updateinput"
        type="text"
        id="district"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">Country:</label>
      <input className="updateinput"
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      <label className="updatelabel" htmlFor="name">PostalCode:</label>
      <input className="updateinput"
        type="number"
        id="postalCode"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
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
export default Updateprofile