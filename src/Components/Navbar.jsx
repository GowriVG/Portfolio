import './Navbar.css'
import logo from '../assets/logo.png'
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-10" width={150} height={80} alt="Logo"/>
        </a>
      </div>

      {/* Center - Menu */}
      <ul className="hidden md:flex gap-6 text-lg font-medium text-white">

        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
      </ul>

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/gowri-v-gopal-2332a9213/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
            <FaLinkedin/>
        </a>
        <a 
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github">
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <FaInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <FaSquareXTwitter/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar





// const Navbar = () => {
//   return (
//     <div className = 'navbar'>
//       <img src={logo} alt="" /> 
//       <ul className= "nav-menu">
//         <li className="nav-item">Home</li>
//         <li className="nav-item">About</li> 
//         <li className="nav-item">Services</li>
//         <li className="nav-item">Contact</li>
//         <li className="nav-item">Blog</li>
//       </ul>
//       <div className="nav-connect">Connect With Me</div>
//     </div>
//   )
// }