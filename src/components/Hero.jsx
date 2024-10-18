import bgImage from "../assets/pexels2.jpg";

const Hero = () => {
  return (
    <section
      className="flex flex-col text-white justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold bg-[#384D3A] p-4 m-4 rounded-lg">
          Welcome to <span className="text-[#f39c12]">Rapid Kurier</span>
        </h1>
        <p className="text-lg py-2">
          Reliable, Fast, and Affordable Delivery Solutions
        </p>
        <button className="bg-[#f39c12] p-2 m-2 rounded-md">
          Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
