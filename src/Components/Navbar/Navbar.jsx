import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

//nav items array to avoid repeating code
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#project" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  // Responsive logic for nav items
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/gowri-v-gopal-2332a9213/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/GowriVG",
      icon: <FaGithub />,
      label: "Github",
    },
    {
      href: "https://www.instagram.com/gx.wri__/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://x.com/GowriVGopa48552",
      icon: <FaSquareXTwitter />,
      label: "Twitter",
    },
  ];

  const moveIndicator = (el) => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!el || !nav || !indicator) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    indicator.style.left = `${elRect.left - navRect.left}px`;
    indicator.style.width = `${elRect.width}px`;
  };

  // 1. Move indicator when activeMenu changes
  useEffect(() => {
    const activeEl = navRef.current?.querySelector(".active");
    if (activeEl) moveIndicator(activeEl);
  }, [activeMenu]);

  // 2. Update activeMenu based on which section is in view
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = navItems.find(
              (item) => item.href === `#${entry.target.id}`,
            );
            if (matched) setActiveMenu(matched.name);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // triggers when section is ~middle of screen
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mr-4" width={150} height={70} alt="Logo" />
        </a>
      </div>

      {/* Desktop nav */}
      <ul
        ref={navRef}
        className="nav-list-desktop hidden lg:flex gap-3 xl:gap-6 text-sm xl:text-base font-medium text-white"
        onMouseLeave={() => {
          const activeEl = navRef.current?.querySelector(".active");
          if (activeEl) moveIndicator(activeEl);
        }}
      >
        <li style={{ position: "static", padding: 0, listStyle: "none" }}>
          <div ref={indicatorRef} className="nav-indicator" />
        </li>
        {navItems.map((item, key) => (
          <li
            key={key}
            onMouseEnter={(e) =>
              moveIndicator(e.currentTarget.querySelector("a"))
            }
          >
            <a
              href={item.href}
              onClick={(e) => {
                setActiveMenu(item.name);
                moveIndicator(e.currentTarget);
              }}
              className={`nav-link ${activeMenu === item.name ? "active" : ""}`}
            >
              {item.name}
            </a>
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
      <div className="m-8 hidden lg:flex items-center justify-center gap-3 text-xl">
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

export default Navbar;
