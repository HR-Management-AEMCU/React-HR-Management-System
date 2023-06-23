import './loginregisterpage.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordPage = () => {

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
  
      fetch(`http://localhost:8090/api/v1/auth/forgot-password-request/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        /*body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),*/
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); 
          } else {
            throw new Error("Giriş başarısız"); 
          }
        }).then(()=>{
          toast.success("Yeni şifreniz Mail ile Size iletişmiştir.Login sayfasına yönlendiriliyorsunuz...", { autoClose: 2000 });
          setTimeout(() => {
            navigate("/login"); 
          }, 3000);
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
          <p style={{fontSize: "18px", backgroundColor:"#C7C5F4"}}>Enter registered Email</p>
          <br />
          
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Email" required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                    
				</div>   
				<button className="button login__submit">
					<span className="button__text">Send Mail</span>
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
export default ForgotPasswordPage