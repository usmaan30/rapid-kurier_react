import React from "react";
import reg_certificate from "../assets/reg_certificate.jpg";
import hellman_certificate from "../assets/hellman_cert.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      img: reg_certificate,
      title: t("about.certificates.pq.title"),
      subtitle: t("about.certificates.pq.subtitle"),
    },
    {
      img: hellman_certificate,
      title: t("about.certificates.hellmann.title"),
      subtitle: t("about.certificates.hellmann.subtitle"),
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#384D3A] text-center mb-12">
          {t("about.title")}
        </h1>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-4 border-[#f39c12] pl-6">
              {t("about.description")}
            </p>
          </div>

          {/* Certificates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="max-h-[260px] object-contain mx-auto mb-4"
                />

                <h3 className="text-base font-semibold text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
