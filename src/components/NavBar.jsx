import { useState } from "react";
import logo from "../assets/logo-removebg.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center mx-8">
      <img className="cursor-pointer h-28 w-32" src={logo} alt="logo image" />
      <ul className="flex">
        <li className="px-4 py-2 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
        <li className="px-4 py-2 cursor-pointer capitalize font-medium text-[#417c4c] hover:scale-105 hover:text-[#033003] duration-150">
          Home
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
