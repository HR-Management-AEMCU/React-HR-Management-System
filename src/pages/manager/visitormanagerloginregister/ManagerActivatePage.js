import './loginregisterpage.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagerActivatePage = () => {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
 
      const email = data.get("email");
      
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Lütfen geçerli bir email adresi girin.', { autoClose: 2000 });
        return;
      }
      
      if (email.length > 29) {
        toast.error('Email adresi maksimum 29 karakter olmalıdır.', { autoClose: 2000 });
        return;
      }
  
    
  
  
      fetch("http://localhost:8090/api/v1/auth/activate-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.get("email"),
          activationCode: data.get("activationCode"),
        }),
      })
        .then((response) => {
          if (response.ok) {
           
            return response.json(); 
          } else {
            throw new Error("Giriş başarısız"); 
          }
        })
        .then(()=>{
          console.log("ççalisti")
          
            toast.success("Activate Başarılı! Admin onayından sonra Login işlemini yapabilirsiniz...", { autoClose: 2000 });
             setTimeout(() => {
            navigate("/login"); 
          }, 3000);
         
        })
        .catch((error) => {
          toast.error("Activate başarısız.Lütfen daha sonra deneyiniz...", { autoClose: 3000 });
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
					<input type="password" className="login__input" placeholder="Activation Code"
                    required
                    name="activationCode"
                    label="activationCode"
                    id="activationCode"/>
                    
				</div>
                    <div className="forgot">
                     <a href="#" className='forgota'>Didn't you get a code?</a>
                        </div>
				<button className="button login__submit">
					<span className="button__text">ACTIVATE</span>
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
export default ManagerActivatePage