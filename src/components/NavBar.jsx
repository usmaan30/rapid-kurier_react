import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo-removebg.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navRef = useRef(null); // Ref for the nav

  const handleNav = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(false); // Close the nav when a link is clicked
  };
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0); // Scroll to the top
    }
  };

  // Close nav menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <nav className="sticky top-0 w-full flex justify-between z-10 bg-[#f0f0f0] shadow-md items-center px-4 md:px-6  lg:px-12 h-[18vh] 2xl:px-16 xl:text-xl 2xl:text-2xl">
      <Link to="/" onClick={handleLogoClick}>
        <img className="cursor-pointer h-28 w-32" src={logo} alt="logo image" />
      </Link>

      <ul className="md:flex hidden">
        <li className="px-1 py-1 mx-8 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          <Link to="/">Home</Link>
        </li>
        <li className="px-1 py-1 mx-8 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          <Link to="/services">Services</Link>
        </li>
        <li className="px-1 py-1 mx-8 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          <Link to="/team">Team</Link>
        </li>
        <li className="px-1 py-1 mx-8 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="md:hidden z-20 cursor-pointer" onClick={handleNav}>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        ref={navRef}
        className={`p-2 absolute top-[18vh] left-0 w-full z-10 bg-gray-100 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <li
          className="p-4 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150"
          onClick={handleClose}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="p-4 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150"
          onClick={handleClose}
        >
          <Link to="/services">Services</Link>
        </li>
        <li
          className="p-4 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150"
          onClick={handleClose}
        >
          <Link to="/team">Team</Link>
        </li>
        <li
          className="p-4 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150"
          onClick={handleClose}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
