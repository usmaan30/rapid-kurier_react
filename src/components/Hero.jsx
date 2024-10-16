import bgImage from "../assets/pexels2.jpg";

const Hero = () => {
  return (
    <section
      className="flex flex-col text-white justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="">
        <h1>
          Welcome to <span className="text-[#f39c12]">Rapid Kurier</span>
        </h1>
        <p>Reliable, Fast, and Affordable Delivery Solutions</p>
        <button className="bg-yellow-500">Our Services</button>
      </div>
    </section>
  );
};

export default Hero;
