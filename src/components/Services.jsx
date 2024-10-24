import React from "react";

const Services = () => {
  return (
    <section className="bg-[#384D3A] text-center p-8 min-h-[82vh]">
      <h1 className="text-4xl text-[#ffffff] p-4 font-bold">Our Services</h1>
      <div className="flex justify-around flex-wrap py-6">
        <div className="bg-[#333] text-[#ffffff] w-80 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md ">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            Same Day Delivery
          </h3>
          <p>
            For urgent deliveries, our Same-Day Shipping service is the perfect
            solution. We pick up and deliver your parcels on the same day,
            ensuring speed and reliability for your time-sensitive needs.
          </p>
        </div>
        <div className="bg-[#333] text-[#ffffff] w-80 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md ">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            International Shipping
          </h3>
          <p>
            Expand your business beyond borders with our International Shipping
            service. We handle customs, provide global tracking, and ensure that
            your goods arrive safely at any destination around the world.
          </p>
        </div>
        <div className="bg-[#333] text-[#ffffff] w-80 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md ">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            Express Delivery
          </h3>
          <p>
            Need your package delivered in record time? Our Express Delivery
            service ensures that your shipments reach their destination as
            quickly as possible, with real-time tracking and guaranteed delivery
            times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
