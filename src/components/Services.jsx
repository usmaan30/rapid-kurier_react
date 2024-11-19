import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#384D3A] text-center p-8 min-h-[82vh]">
      <h1 className="text-4xl text-[#ffffff] p-4 font-bold">
        {t("services.title")}
      </h1>
      <div className="flex justify-around flex-wrap py-6">
        <div className="bg-[#333] text-[#ffffff] w-72 h-72 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md overflow-auto">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            {t("services.s1")}
          </h3>
          <p>{t("services.s1description")}</p>
        </div>
        <div className="bg-[#333] text-[#ffffff] w-72 h-72 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md ">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            {t("services.s2")}
          </h3>
          <p>{t("services.s2description")}</p>
        </div>
        <div className="bg-[#333] text-[#ffffff] w-72 h-72 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md ">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            {t("services.s3")}
          </h3>
          <p>{t("services.s3description")}</p>
        </div>
        <div className="bg-[#333] text-[#ffffff] w-72 h-72 rounded-xl m-3 p-5 text-center border-2 border-solid border-[#f39c12] shadow-md ">
          <h3 className="text-xl mb-3 text-[#f39c12] font-semibold">
            {t("services.s4")}
          </h3>
          <p>{t("services.s4description")}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
