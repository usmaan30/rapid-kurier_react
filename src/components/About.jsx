import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#ffffff] text-center p-8">
      <h1 className="text-4xl text-[#384D3A] p-4 font-bold">
        {t("about.title")}
      </h1>
      <p className="text-lg text-left md:text-xl lg:text-2xl text-gray-800 leading-relaxed tracking-wide p-4 md:p-6 lg:p-8 border-l-4 border-[#f39c12] rounded-lg">
        {t("about.description")}
      </p>
    </section>
  );
};
export default About;
