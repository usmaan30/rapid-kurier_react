import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-[#384D3A] text-center p-2 sm:p-8">
      <h1 className="text-4xl text-[#ffffff] p-4 font-bold">Get in Touch</h1>
      <p className="text-white">
        Feel free to reach out to us for any inquiries or support.
      </p>
      <div className="flex flex-col md:flex-row justify-around items-center py-10 w-full">
        <form
          action=""
          className="flex flex-col justify-center w-[90%] md:w-[40%]"
        >
          <label className="text-white mb-1 font-semibold text-left">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="mb-4 rounded-md w-full py-2 px-3"
          />
          <label className="text-white mb-1 font-semibold text-left">
            Email
          </label>
          <input
            type="text"
            placeholder="Your Email"
            required
            className="mb-4 rounded-md w-full py-2 px-3"
          />
          <label className="text-white mb-1 font-semibold text-left">
            Message
          </label>
          <textarea
            name=""
            placeholder="Your message..."
            id=""
            required
            className="mb-4 rounded-md w-full py-2 px-3"
          ></textarea>
          <button className="bg-[#f39c12] text-[#ffffff] mb-2 rounded-md w-[25%] min-w-16 p-2 hover:bg-[#e67e22] self-end cursor-pointer">
            Submit
          </button>
        </form>
        <div className="absolute md:h-[30%] lg:h-[40%] w-0.5 bg-[#f39c12] left-1/2 transform -translate-x-1/2 m-2"></div>
        <div className="flex flex-col justify-center items-start text-white w-[90%] mt-4 md:w-[40%] ">
          <p className="inline-flex items-center mb-3 leading-normal">
            <MdEmail className="text-[#f39c12] mr-2 text-2xl" />
            info@rapidkuriergmbh.de
          </p>
          <p className="inline-flex items-center mb-3 leading-normal">
            <FaPhone className="text-[#f39c12] mr-2 text-xl" /> +49(0)1764731240
          </p>
          <p className="inline-flex items-center mb-4 leading-normal">
            <FaLocationDot className="text-[#f39c12] mr-2 text-xl" />{" "}
            Eisenstrasse 2-4, 65428 Russelsheim
          </p>
          <div className="w-full h-[200px]">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.8564212885294!2d8.4194303!3d49.976551099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd9eb461633c4f%3A0x17f6abd77195df27!2sEisenstra%C3%9Fe%202-4%2C%2065428%20R%C3%BCsselsheim%20am%20Main%2C%20Germany!5e0!3m2!1sen!2s!4v1729530913153!5m2!1sen!2s"
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
