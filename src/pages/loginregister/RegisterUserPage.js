import './loginregisterpage.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginpage = () => {
   
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
  
  
    fetch("http://localhost:8090/api/v1/auth/register-visitor", {
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
            navigate("/login"); // 2 saniye sonra login sayfasına yönlendir
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
   <div className='engenel'>

<div class="container">
<ToastContainer />
<div className="abc">
     <h1 style={{color: 'hsl(218, 81%, 95%)'}}>
       The best offer <br />
       <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
     </h1>
   </div>
	<div class="screen">
		<div class="screen__content">
			<form class="loginuser" onSubmit={handleSubmit} noValidate>

      <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="First Name" required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoFocus/>
                    
				</div>
        <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Last Name" required
                    fullWidth
                    id="lastname"
                    label="LastName"
                    name="lastname"
                    autoFocus/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Email" required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                    
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"/>
                    
				</div>
        <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Enter Password Again"
                    required
                    fullWidth
                    name="repassword"
                    label="rePassword"
                    type="password"
                    id="repassword"
                    autoComplete="current-password"/>
                    
				</div>

				<button class="button login__submit">
					<span class="button__text">Sign In</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>		
        <div className='link'>
        <div className="signup-link">
         Already have an account? <a href="/login">Sign In</a>
       </div>
       <div className="signup-link">
       Are you a Company Manager? <a href="/registercompany">Sign Up</a>
       </div>
        </div>
			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1user"></span>
		</div>		
	</div>
</div>
   </div>




  )
}
export default Loginpage