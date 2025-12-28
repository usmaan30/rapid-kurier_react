import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("JPkcsduha4um0Ax0Q"); // Initialize EmailJS with your User ID

    const serviceID = "service_eojtu6x";
    const templateID = "template_thg95ts";

    emailjs
      .sendForm(serviceID, templateID, form.current)
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="bg-[#384D3A] text-center p-2 sm:p-8 min-h-[82vh]">
      <h1 className="text-4xl text-[#ffffff] p-4 font-bold">
        {t("contact.title")}
      </h1>
      <p className="text-white">{t("contact.titleline")}</p>
      <div className="flex flex-col md:flex-row justify-around items-center py-10 w-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center w-[90%] md:w-[40%]"
        >
          <input type="hidden" name="to_name" value="Rapid Kurier team" />
          <label className="text-white mb-1 font-semibold text-left">
            {t("contact.namelabel")}
          </label>
          <input
            type="text"
            name="from_name"
            placeholder={t("contact.namefield")}
            required
            className="mb-4 rounded-md w-full py-2 px-3"
          />
          <label className="text-white mb-1 font-semibold text-left">
            {t("contact.emaillabel")}
          </label>
          <input
            type="email"
            name="from_email"
            placeholder={t("contact.emailfield")}
            required
            className="mb-4 rounded-md w-full py-2 px-3"
          />
          <label className="text-white mb-1 font-semibold text-left">
            {t("contact.messagelabel")}
          </label>
          <textarea
            name="message"
            placeholder={t("contact.messagefield")}
            id=""
            required
            className="mb-4 rounded-md w-full py-2 px-3"
          ></textarea>
          <button
            type="submit"
            className="bg-[#f39c12] text-[#ffffff] mb-2 rounded-md w-[30%] min-w-16 p-2 hover:bg-[#e67e22] self-end cursor-pointer"
          >
            {t("contact.submitbutton")}
          </button>
        </form>
        <div className="absolute md:h-[30%] lg:h-[40%] w-0.5 bg-[#f39c12] left-1/2 transform -translate-x-1/2 m-2"></div>
        <div className="flex flex-col justify-center items-start text-white w-[90%] mt-4 md:w-[40%] ">
          <a
            href="mailto:info@rapidkuriergmbh.de"
            className="inline-flex items-center mb-3 leading-normal"
          >
            <MdEmail className="text-[#f39c12] mr-2 text-2xl" />
            info@rapidkuriergmbh.de
          </a>
          <a
            href="tel:+49(0)1764731240"
            className="inline-flex items-center mb-3 leading-normal"
          >
            <FaPhone className="text-[#f39c12] mr-2 text-xl" /> +49(0)1764731240
          </a>
          <p className="inline-flex items-center mb-4 leading-normal">
            <FaLocationDot className="text-[#f39c12] mr-2 text-xl" />
            Stahlstraße 42-44 <br /> 65428 Rüsselsheim
          </p>
          <div className="w-full h-[200px]">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.9048820721014!2d8.422448575749444!3d49.975642321438244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd9eb6d66c63cb%3A0x9bcdada0e8100f89!2sStahlstra%C3%9Fe%2042-44%2C%2065428%20R%C3%BCsselsheim%20am%20Main%2C%20Germany!5e0!3m2!1sen!2s!4v1766934538365!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
