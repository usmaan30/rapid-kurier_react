import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex justify-between items-center bg-[#333] text-[#ffffff] px-8 py-6">
      <div className="flex pl-8">
        <FaFacebookF className="mx-3 text-2xl" />
        <FaInstagram className="mx-3 text-2xl" />
        <FaLinkedinIn className="mx-3 text-2xl" />
        <FaXTwitter className="mx-3 text-2xl" />
      </div>
      <div className="pr-8">© 2024 Courier Company. All rights reserved.</div>
    </section>
  );
};

export default Footer;
