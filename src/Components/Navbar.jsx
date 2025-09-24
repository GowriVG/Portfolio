import './Navbar.css'
import logo from '../assets/logo.png'
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Menu, X } from "lucide-react";
import { useState } from "react";

//nav items array to avoid repeating code
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-6">
       {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-10" width={150} height={80} alt="Logo"/>
        </a>
      </div>

      {/* Desktop nav (visible on md and above) */}
      <ul className="hidden md:flex gap-6 text-lg font-medium text-white">
        {navItems.map((item, key) => (
          <li key={key}>
            <a href={item.href} className="hover:text-blue-400">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile nav toggle button (visible only on small screens) */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-white z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu (overlay) */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center 
        transition-all duration-300 md:hidden
        ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-8 text-xl text-white">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // close menu on click
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

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





