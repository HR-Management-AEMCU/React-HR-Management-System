import "./footer.css";
import arasımor from '../../../assets/logo/arasımor.png'

const Footer = () => {
  return (
    <div>
 <footer className="footer">
  <div className="footer-content">
    <div className="logo-container">
      <img src={arasımor} alt="Logo" className="logo" />
    </div>
    <div className="text-container">
      <p className="contact-info">İletişim Bilgileri:</p>
      <p className="contact-details">Telefon: 123-456-7890</p>
      <p className="contact-details">E-posta: info@example.com</p>
      <p className="contact-details">Adres: Örnek Sokak, Örnek Şehir</p>
    </div>
  </div>
</footer>

    </div>
  )
}
export default Footer