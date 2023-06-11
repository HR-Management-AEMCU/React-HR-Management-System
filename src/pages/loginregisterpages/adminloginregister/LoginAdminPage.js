import  './adminloginregisterpage.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLoginPage = () => {



    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
 
      const email = data.get("email");
      const password = data.get("password");
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Lütfen geçerli bir email adresi girin.', { autoClose: 2000 });
        return;
      }
      
      if (email.length > 20) {
        toast.error('Email adresi maksimum 20 karakter olmalıdır.', { autoClose: 2000 });
        return;
      }
  
      const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=*!])(?=\S+$).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Şifreniz doğru değildir.",
        { autoClose: 3000 }
      );
      return;
    }
  
  
      fetch("http://localhost:8090/api/v1/auth/login-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Login Başarılı! Anasayfaya Yönlendiriliyorsunuz...", { autoClose: 2000 });
            return response.json(); 
          } else {
            throw new Error("Giriş başarısız"); 
          }
        })
        .then((data) => {
          console.log(data.token); 
          localStorage.setItem('token', data.token)
          
          setTimeout(() => {
            navigate("/adminhomepage"); 
          }, 3000);
        })
        .catch((error) => {
          toast.error("Oturum açma başarısız.Lütfen daha sonra deneyiniz...", { autoClose: 3000 });
          console.error(error);
        });
    };




  return (
   <div className="engeneladmin">
    <ToastContainer />
     <div className="backgroundadmin">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form className='formadmin' onSubmit={handleSubmit}>
        <h3>Admin Login</h3>

        <label className="labeladmin" htmlFor="username">Email</label>
        <input className="inputadmin" type="text" placeholder="Email" id="email" name="email" />

        <label className="labeladmin" htmlFor="password">Password</label>
        <input className="inputadmin" type="password" placeholder="Password" id="password" name="password"/>

        <button className="buttonadmin">Log In</button>
        
        <div className="buttonadmin1"><a href="/adminregister" className='forgotb'>Sign Up</a></div>
        
    </form>
   </div>
  )
}
export default AdminLoginPage