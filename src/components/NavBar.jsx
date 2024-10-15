import { useState } from "react";
import logo from "../assets/logo-removebg.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    
  return (

    <div>
      <nav>
        <img className="h-20 w-24" src={logo} alt="" />
        <ul></ul>
      </nav>
    </div>
  );
};

export default NavBar;
