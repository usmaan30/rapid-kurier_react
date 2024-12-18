import React from "react";
import DumyImg from "../assets/d.jpg";
import CEO from "../assets/CEO.jpg";
import COO from "../assets/COO.jpg";
import { FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#ffffff] text-center py-8 min-h-[82vh]">
      <h1 className="text-4xl text-[#384D3A] p-4 font-bold">
        {t("team.title")}
      </h1>
      <div className="flex flex-wrap justify-center items-center text-center p-4">
        <div className="my-4 mx-8 text-center">
          <img
            src={CEO}
            alt=""
            className="rounded-full border-4 border-solid border-[#333] w-[180px] h-[180px]"
          />
          <h4 className="mt-[10px] mb-[5px] font-semibold">Ali Khalid</h4>
          <p>{t("team.member1")}</p>
          <a
            href="tel:+4917680305910"
            className="inline-flex items-center mb-3 leading-normal"
          >
            <FaPhone className="text-[#f39c12] mr-2 text-xl" /> +4917680305910
          </a>
        </div>
        <div className="my-4 mx-8 text-center">
          <img
            src={COO}
            alt=""
            className="rounded-full border-4 border-solid border-[#333] w-[180px] h-[180px]"
          />
          <h4 className="mt-[10px] mb-[5px] font-semibold">Waleed Khalid</h4>
          <p>{t("team.member2")}</p>
          <a
            href="tel:+4917624097567"
            className="inline-flex items-center mb-3 leading-normal"
          >
            <FaPhone className="text-[#f39c12] mr-2 text-xl" /> +4917624097567
          </a>
        </div>
        <div className="my-4 mx-8 text-center">
          <img
            src={DumyImg}
            alt=""
            className="rounded-full border-4 border-solid border-[#333] w-[180px] h-[180px]"
          />
          <h4 className="mt-[10px] mb-[5px] font-semibold">Matteo Martin</h4>
          <p>{t("team.member3")}</p>
          <a href="" className="inline-flex items-center mb-3 leading-normal">
            <FaPhone className="text-[#f39c12] mr-2 text-xl" /> ###
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
