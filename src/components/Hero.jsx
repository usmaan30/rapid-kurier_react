import bgImage from "../assets/pexels2.jpg";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

import { IoMdArrowDropright } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-[82vh] h-auto text-white justify-center items-center text-center p-4 md:flex-row md:p-0 2xl:pl-12">
      <div className="flex flex-col justify-center items-center md:items-start md:p-8 md:w-[50%]">
        <h1 className="text-4xl font-bold bg-[#384D3A] text-center md:text-left p-4 rounded-lg 2xl:text-6xl">
          Welcome to <span className="text-[#f39c12]">Rapid Kurier</span>
        </h1>
        <p className="text-lg text-black py-8 xl:text-2xl text-left md:py-4">
          Reliable, Fast, and Affordable Delivery Solutions
        </p>
        <ul className="text-black self-start py-4 text-left">
          <li>Customer first</li>
          <li>People led</li>
          <li>Innovation driven</li>
        </ul>
        <Link
          to="/services"
          className="absolute top-[70%] md:static flex items-center bg-[#f39c12] text-lg xl:text-xl py-2 px-4 rounded-md group hover:bg-[#e67e22] cursor-pointer"
        >
          OUR SERVICES
          <IoMdArrowDropright className="text-2xl transition-transform duration-300 group-hover:rotate-90" />
        </Link>
      </div>
      <img
        src={banner}
        alt=""
        className="md:w-[50%] h-auto max-h-full xl:right-0"
      />
    </section>
  );
};

export default Hero;
