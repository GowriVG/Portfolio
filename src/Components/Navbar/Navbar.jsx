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
        rootMargin: "-40% 0px -55% 0px",
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
          <img
            src={logo}
            className="mr-4 w-24 h-auto sm:w-28 md:w-32 lg:w-[150px]"
            alt="Logo"
          />
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
        {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
         <Menu size={24} />
      </button>

      {/* Backdrop */}
<div
  className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300
  ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
  onClick={() => setIsMenuOpen(false)}
/>

{/* Slide-in drawer */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-[#0e0c14] border-l border-white/10 z-50 flex flex-col py-8 px-6 lg:hidden
  transition-transform duration-300 ease-in-out
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <button
    onClick={() => setIsMenuOpen(false)}
    className="self-end mb-8 text-white/60 hover:text-white transition-colors"
  >
    <X size={20} />
  </button>

  <div className="flex flex-col gap-1">
    {navItems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        className={`px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200
          ${activeMenu === item.name
            ? "text-white bg-white/10"
            : "text-gray-400 hover:text-white hover:bg-white/5"}`}
        onClick={() => { setIsMenuOpen(false); setActiveMenu(item.name); }}
      >
        {item.name}
      </a>
    ))}
  </div>

  <div className="mt-auto flex items-center gap-4 text-lg text-gray-400">
    {socialLinks.map((link, idx) => (
      <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
        className="hover:text-white transition-colors">
        {link.icon}
      </a>
    ))}
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
