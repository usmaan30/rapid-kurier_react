import React from "react";
import DumyImg from "../assets/d.jpg";

const Team = () => {
  return (
    <section className="bg-[#ffffff] text-center py-8 min-h-[82vh]">
      <h1 className="text-4xl text-[#384D3A] p-4 font-bold">Meet Our Team</h1>
      <div className="flex flex-wrap justify-center items-center text-center p-4">
        <div className="my-4 mx-8 text-center">
          <img
            src={DumyImg}
            alt=""
            className="rounded-full border-4 border-solid border-[#333] w-[180px] h-[180px]"
          />
          <h4 className="mt-[10px] mb-[5px] font-semibold">John Doe</h4>
          <p>CEO</p>
        </div>
        <div className="my-4 mx-8 text-center">
          <img
            src={DumyImg}
            alt=""
            className="rounded-full border-4 border-solid border-[#333] w-[180px] h-[180px]"
          />
          <h4 className="mt-[10px] mb-[5px] font-semibold">John Doe</h4>
          <p>CEO</p>
        </div>
        <div className="my-4 mx-8 text-center">
          <img
            src={DumyImg}
            alt=""
            className="rounded-full border-4 border-solid border-[#333] w-[180px] h-[180px]"
          />
          <h4 className="mt-[10px] mb-[5px] font-semibold">John Doe</h4>
          <p>CEO</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
