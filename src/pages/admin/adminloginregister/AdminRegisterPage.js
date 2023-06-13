import  './adminloginregisterpage.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminRegisterPage = () => {


    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
  
      const name = data.get("firstname");
      const surname = data.get("lastname");
      const password = data.get("password");
      const repassword = data.get("repassword");
      const email = data.get("email");
  
      if (name.trim() === "") {
        toast.error("İsim boş olamaz.", { autoClose: 2000 });
        return;
      }
      if (name.length > 20) {
        toast.error("İsim maksimum 20 karakter olmalıdır.", { autoClose: 2000 });
        return;
      }
      if (surname.trim() === "") {
        toast.error("Soyisim boş olamaz.", { autoClose: 2000 });
        return;
      }
    
      if (surname.length > 20) {
        toast.error("Soyisim maksimum 20 karakter olmalıdır.", { autoClose: 2000 });
        return;
      }
  
      // Email formatını kontrol et
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Lütfen geçerli bir email adresi girin.', { autoClose: 2000 });
        return;
      }
      
      if (email.length > 20) {
        toast.error('Email adresi maksimum 20 karakter olmalıdır.', { autoClose: 2000 });
        return;
      }
      if (password.trim() === "") {
        toast.error("Password boş olamaz.", { autoClose: 2000 });
        return;
      }
      if (repassword.trim() === "") {
        toast.error("REPassword boş olamaz.", { autoClose: 2000 });
        return;
      }
      if (password !== repassword) {
        toast.error("Şifreler eşleşmiyor.", { autoClose: 2000 });
        return;
      }
  
      const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=*!])(?=\S+$).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Şifre en az 8 karakter uzunluğunda olmalı ve en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir.",
        { autoClose: 5000 }
      );
      return;
    }
    
    
      fetch("http://localhost:8090/api/v1/auth/register-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("firstname"),
          surname: data.get("lastname"),
          email: data.get("email"),
          password: data.get("password"),
          repassword: data.get("repassword"),
        }),
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Kayıt başarılı! Login Sayfasına Yönlendiriliyorsunuz...", { autoClose: 2000 });
            setTimeout(() => {
              navigate("/adminlogin"); 
            }, 4000);
          } else {
            throw new Error("Kayit başarisiz"); // İstek başarısızsa hata fırlat
          }
        })
        .catch((error) => {
          toast.error("Kayıt başarısız.Lütfen daha sonra tekrar deneyiniz...", { autoClose: 5000 });
          console.error(error);
        });
    
      console.log({
        name: data.get("firstname"),
        surname: data.get("lastname"),
        email: data.get("email"),
        password: data.get("password"),
        repassword: data.get("repassword"),
      });
    };




  return (
    <div className="engeneladmin">
        <ToastContainer />
     <div class="backgroundadminregister">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className='formadminregister' onSubmit={handleSubmit} noValidate>
        <h3>Admin Register</h3>

        <label className="labeladmin" for="firstname">First Name</label>
        <input className="inputadmin" type="text" placeholder="First Name" id="firstname" name="firstname"/>

        <label className="labeladmin" for="lastname">Last Name</label>
        <input className="inputadmin" type="text" placeholder="Last Name" id="lastname" name="lastname"/>

        <label className="labeladmin" for="email">Email</label>
        <input className="inputadmin" type="text" placeholder="Email" id="email" name="email"/>

        <label className="labeladmin" for="password">Password</label>
        <input className="inputadmin" type="password" placeholder="Password" id="password" name="password"/>

        <label className="labeladmin" for="repassword">RePassword</label>
        <input className="inputadmin" type="password" placeholder="Enter Password Again" id="repassword" name="repassword"/>

        <button className="buttonadmin">Register</button>
        
        <div class="buttonadmin1"><a href="/adminlogin" className='forgotb'>Sign In</a></div>
        
    </form>
   </div>
  )
}
export default AdminRegisterPage