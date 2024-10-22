import bgImage from "../assets/pexels2.jpg";

import { IoMdArrowDropright } from "react-icons/io";

const Hero = () => {
  return (
    <section
      className="flex flex-col text-white justify-center items-center text-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold bg-[#384D3A] p-4 rounded-lg">
          Welcome to <span className="text-[#f39c12]">Rapid Kurier</span>
        </h1>
        <p className="text-lg p-3">
          Reliable, Fast, and Affordable Delivery Solutions
        </p>
        <button className="flex items-center bg-[#f39c12] text-lg py-2 px-4 m-2 rounded-md group hover:bg-[#e67e22] cursor-pointer">
          Our Services
          <IoMdArrowDropright className="text-2xl transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
