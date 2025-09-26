import './Navbar.css'
import logo from '../assets/logo.png'
import underline from '../assets/nav_underline.svg';
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
  const [activeMenu, setActiveMenu] = useState("Home");

  // Responsive logic for nav items
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/gowri-v-gopal-2332a9213/",
      icon: <FaLinkedin />,
      label: "LinkedIn"
    },
    {
      href: "https://www.linkedin.com/in/your-linkedin-profile",
      icon: <FaGithub />,
      label: "Github"
    },
    {
      href: "https://www.linkedin.com/in/your-linkedin-profile",
      icon: <FaInstagram />,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/your-linkedin-profile",
      icon: <FaSquareXTwitter />,
      label: "Twitter"
    }
  ];

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-10" width={150} height={80} alt="Logo" />
        </a>
      </div>

      {/* Desktop nav (visible on lg and above) */}
      <ul className="hidden lg:flex gap-6 text-lg font-medium text-white">
        {navItems.map((item, key) => (
          <li key={key} className="flex flex-col items-center" onClick={() => setActiveMenu(item.name)}>
            <a 
              href={item.href} 
              className={`hover:text-blue-400${activeMenu === item.name ? ' nav-active-up' : ''}`}
            >
              {item.name}
            </a>
            {activeMenu === item.name ? (
              <img src={underline} alt="underline" className="nav-underline-img" />
            ) : null}
          </li>
        ))}
      </ul>

      {/* Medium screens: show nothing, everything in hamburger */}
      <ul className="hidden sm:hidden md:hidden gap-6 text-lg font-medium text-white"></ul>

      {/* Small screens: show nothing, everything in hamburger */}
      <ul className="hidden sm:flex md:hidden gap-6 text-lg font-medium text-white"></ul>

      {/* Hamburger menu button (visible on md and below) */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex lg:hidden p-2 text-white z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Hamburger menu overlay: visible on lg and below */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden
        ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-8 text-xl text-white">
          {/* All nav items in hamburger menu on md and below */}
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* Social Links in hamburger menu */}
          <div className="flex items-center justify-center gap-4 text-2xl mt-8">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links - visible only on md and above */}
      <div className="m-8 hidden lg:flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar





