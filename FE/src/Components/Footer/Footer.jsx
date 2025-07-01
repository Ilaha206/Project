import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import '../Footer/Footer.css'
function Footer() {
  return (
    <>
   <div className='footer_section'>
    <h2>
        Bizimlə əlaqə 
    </h2>
    <div className="footer_icons">
       <div className="phone_number"> Əlaqə nömrəsi:+994551234564 </div>
       <a href=""><FaInstagram /></a>
       <a href=""><FaTwitter /></a>
       <a href=""><FaFacebookF /></a>
    </div>
   </div>
    </>
  )
}

export default Footer