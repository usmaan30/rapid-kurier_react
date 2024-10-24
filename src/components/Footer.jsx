import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-[#333] text-[#ffffff] px-8 py-6">
      <div className="flex mb-4 md:mb-0 md:pl-8 justify-center md:justify-start">
        <FaFacebookF className="mx-3 text-2xl" />
        <FaInstagram className="mx-3 text-2xl" />
        <FaLinkedinIn className="mx-3 text-2xl" />
        <FaXTwitter className="mx-3 text-2xl" />
      </div>
      <div className="md:pr-8 text-center md:text-right">
        © 2024 Rapid Kurier. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
