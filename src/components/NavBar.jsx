import { useState } from "react";
import logo from "../assets/logo-removebg.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between bg-[#f0f0f0] shadow-md items-center px-4 md:px-6  lg:px-12 h-[18vh]">
      <img className="cursor-pointer h-28 w-32" src={logo} alt="logo image" />

      <ul className="md:flex hidden">
        <li className="px-4 py-2 mx-4 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 mx-4 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 mx-4 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 mx-4 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 mx-4 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
      </ul>

      <div className="md:hidden z-10 cursor-pointer" onClick={handleNav}>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <li className="px-4 py-2 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 text-4xl cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
