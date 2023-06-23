import "./footer.scss";
import arasımor from '../../../assets/logo/arasımor.png'

const Footer = () => {
  return (
    <div className="footergenel">
<footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">About Me</h4></li>
    {/*<li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW US</a></li>*/}
    {/*<li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>*/}
    {/*<li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">BECOME A RETAILER</a></li>*/}

    {/*<li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>*/}

    {/*<li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTS</a></li>*/}
  </ul>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">The Gift Selection</h4></li>


    {/*<li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>*/}
    {/*<li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">HOME DECOR</a></li>*/}
    {/*<li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">MUGS</a></li>*/}
    {/*<li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">PET LOVER</a></li>*/}
    {/*<li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>*/}
  </ul>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">Please Help Me</h4></li>
    {/*<li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a></li>*/}
    {/*<li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>*/}
    {/*<li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">STORE LOCATOR</a></li>*/}
    {/*<li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">NEW USERS</a></li>*/}
    {/*<li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">ORDER STATUS</a></li>*/}
  </ul>
  <section class="footer-social-section flex-rw">
      <span class="footer-social-overlap footer-social-connect">
      CONNECT <span class="footer-social-small">with</span> US
      </span>
      <span class="footer-social-overlap footer-social-icons-wrapper">
      <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"><img className="foti" src="https://cdn-icons-png.flaticon.com/128/145/145808.png" alt="" /></i></a>
      <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"><img className="foti" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" /></i></a>
      <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"><img className="foti" src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" /></i></a>
      <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"><img className="foti" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" /></i></a>
      <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"><img className="foti" src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="" /></i></a>
      <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"><img className="foti" src="https://cdn-icons-png.flaticon.com/128/10829/10829197.png" alt="" /></i></a>
      </span>
  </section>
  <section class="footer-bottom-section flex-rw">
<div class="footer-bottom-wrapper">   
<i class="fa fa-copyright" role="copyright">
 
</i>HRManagement AEMCU <address class="footer-address" role="company address"> 2023 BilgeAdam</address><span class="footer-bottom-rights"></span>
    </div>
    <div class="footer-bottom-wrapper">
    <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>




























 {/*<footer className="footer">
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
  </footer>*/}

    </div>
  )
}
export default Footer