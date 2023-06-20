import { useState } from "react";
import "./createpersonnel.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePersonnel = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobStartingDate, setJobStartingDate] = useState('');
    const [salary, setSalary] = useState('');
    const [salaryDate, setSalaryDate] = useState('');
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
    const [department, setDepartment] = useState('');
    const [denemeTarihi, setDenemeTarihi] = useState('');
    const token=localStorage.getItem('token');



    const handleSave = () => {

        //gg.aa.yyyy şeklinde alından date long tipine çevirme
        const selectedDate = new Date(birthDate);
        const unixTimestamp = selectedDate.getTime();
        console.log(unixTimestamp);
        console.log(token)

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
      fetch('http://localhost:8060/api/v1/user-profile/save-employee', {
        method: 'POST',
        body: JSON.stringify({ token,photo, phone, gender,identificationNumber,
             unixTimestamp,birthPlace,neighbourhood,district,province,country,apartmentNumber,postalCode,
            name,surname, email , password,companyName, jobStartingDate, salary, salaryDate,department,denemeTarihi }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        /*response.status=== 200*/
        if (response.ok) {
          toast.success("Employee Add Success...", { autoClose: 2000 });
          setTimeout(() => {
            navigate("/managerhome/personellist"); 
          }, 4000);
        } else {
          toast.error("Employee Add dont Success", { autoClose: 2000 });
          throw new Error(Error); // İstek başarısızsa hata fırlat
          
        }
      })
      .catch((error) => {
        toast.error("Employee Add başarısız.Lütfen daha sonra tekrar deneyiniz...", { autoClose: 2000 });
        console.error(error);
      });
      console.log(phone,province)
    };

    const handleCancel = () => {
        // Değişiklikleri iptal etmek için state'i sıfırlayabilirsiniz
        setSalaryDate('');
        setName('');
        setSurname('');
        setPassword('');
        setEmail('');
        setCompanyName('');
        setJobStartingDate('');
        setSalary('');
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
        setDepartment('');
      };

   


  return (
    <div className="containerupdateemployeeadd">
      <div className="baslikdiv">
      <h1 className="employeregisterbaslik">Employee Register</h1>
      </div>
      
        <ToastContainer />
    <form className="updateprofileemployeeadd">
      <div className="genelupdateemployeeadd">
      <div className="leftemployeeadd">
      <label className="updatelabelemployeeadd" htmlFor="birthday">Deneme Tarihi:</label>
      <input type="date" className="updateinputemployeeadd"
      id="denemetarihi" 
      value={denemeTarihi} 
      onChange={(e) =>  setDenemeTarihi(e.target.value)} 
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Name:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Email:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Company Name:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Salary:</label>
      <input
        className="updateinputemployeeadd"
        type="number"
        id="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Photo Url:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="gender">Cinsiyet:</label>
      <select className="updateselectemployeeadd" id="gender" value={gender} onChange={(e) =>  setGender(e.target.value)}>
        <option value="">Seçiniz</option>
        <option value="MALE">Erkek</option>
        <option value="FEMALE">Kadın</option>
        <option value="OTHER">Diğer</option>
      </select>
      <label className="updatelabelemployeeadd" htmlFor="birthday">Birth Day:</label>
      <input type="date" className="updateinputemployeeadd"
      id="birthday" 
      value={birthDate} 
      onChange={(e) =>  setBirthDate(e.target.value)} 
      />
   <label className="updatelabelemployeeadd" htmlFor="name">Neighbourhood:</label>
      <input className="updateinputemployeeadd"
        type="text"
        id="neighbourhood"
        value={neighbourhood}
        onChange={(e) => setNeighbourhood(e.target.value)}
        required
      />
       <label className="updatelabelemployeeadd" htmlFor="provience">Province:</label>
      <input className="updateinputemployeeadd"
        type="text"
        id="province"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        required
      />
       <label className="updatelabelemployeeadd" htmlFor="name">ApartmentNumber:</label>
      <input className="updateinputemployeeadd"
        type="number"
        id="apartmentNumber"
        value={apartmentNumber}
        onChange={(e) => setApartmentNumber(e.target.value)}
        required
      />
        </div>









        <div className="rightemployeeadd">
        <label className="updatelabelemployeeadd" htmlFor="name">Surname:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Password</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Job Starting Date:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="jobStartingDate"
        value={jobStartingDate}
        onChange={(e) => setJobStartingDate(e.target.value)}
        required
      />
       <label className="updatelabelemployeeadd" htmlFor="name">Phone:</label>
      <input className="updateinputemployeeadd"
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Salary Date:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="salaryDate"
        value={salaryDate}
        onChange={(e) => setSalaryDate(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Department:</label>
      <input
        className="updateinputemployeeadd"
        type="text"
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">IdentificationNumber:</label>
      <input className="updateinputemployeeadd"
        type="number"
        id="identificationNumber"
        value={identificationNumber}
        onChange={(e) => setIdentificationNumber(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">BirthPlace:</label>
      <input className="updateinputemployeeadd"
        type="text"
        id="birthPlace"
        value={birthPlace}
        onChange={(e) => setBirthPlace(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">District:</label>
      <input className="updateinputemployeeadd"
        type="text"
        id="district"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">Country:</label>
      <input className="updateinputemployeeadd"
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      <label className="updatelabelemployeeadd" htmlFor="name">PostalCode:</label>
      <input className="updateinputemployeeadd"
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
        <button type="button" className="saveemployeeadd updatebuttonemployeeadd" onClick={handleSave}>ADD</button>
        <button type="button" className="cancelemployeeadd updatebuttonemployeeadd" onClick={handleCancel}>CANCEL</button>
      </div>
    </form>
  </div>
);
}
export default CreatePersonnel