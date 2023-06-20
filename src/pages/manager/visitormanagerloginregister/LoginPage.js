import './loginregisterpage.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

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
      
      if (email.length > 30) {
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
  
  
      fetch("http://localhost:8090/api/v1/auth/login", {
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
           
            return response.json(); 
          } else {
            throw new Error("Giriş başarısız"); 
          }
        })
        .then((data) => {
          console.log(data.token); 
          localStorage.setItem('token', data.token)

          const roles = data.roles; 
          const rolesJSON = JSON.stringify(roles); 
          localStorage.setItem('roles', rolesJSON);
          /*setTimeout(() => {
            navigate("/managerhome"); 
          }, 3000);*/
        }).then(()=>{
          const user=localStorage.getItem('roles')
          console.log(user)
          console.log("ççalisti")
          if ( user.includes('MANAGER') && user.includes('PERSONNEL')) {
            toast.success("Login Başarılı! ManagerHome Yönlendiriliyorsunuz...", { autoClose: 2000 });
             setTimeout(() => {
            navigate("/managerhome"); 
          }, 3000);
          } else if ( user.includes('PERSONNEL')) {
            toast.success("Login Başarılı! PersonelHome Yönlendiriliyorsunuz...", { autoClose: 2000 });
             setTimeout(() => {
              navigate('/personelhome');
          }, 3000);
          } else if ( user.includes('VISITOR')) {
            toast.success("Login Başarılı! VisitorHome Yönlendiriliyorsunuz...", { autoClose: 2000 });
            setTimeout(() => {
              navigate('/visitorhome');
         }, 3000);
          }else{
            console.log("yönlendirme yapılamadi")
          }
          
        })
        .catch((error) => {
          toast.error("Kayıt başarısız.Lütfen daha sonra deneyiniz...", { autoClose: 3000 });
          console.error(error);
        });
    };

    
  return (
   <div className='engenel'>

<div className="container">
<ToastContainer />
<div className="abc">
     <h1 style={{color: 'hsl(218, 81%, 95%)'}}>
       The best offer <br />
       <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
     </h1>
   </div>
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Email" required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                    
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"/>
                    
				</div>
                    <div className="forgot">
                     <a href="#" className='forgota'>Forgot password?</a>
                        </div>
				<button className="button login__submit">
					<span className="button__text">Sign In</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	
                <div className='link'>
        <div className="signup-link">
         Don't have an account? <a href="/register">Sign Up</a>
       </div>
        </div>			
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
    
</div>
   </div>
  )
}
export default LoginPage