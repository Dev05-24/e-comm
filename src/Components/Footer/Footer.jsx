import React from "react";
import logo from "../../assets/images/logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaWhatsapp, } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-5 gap-20">
        <div className="flex gap-8 text-highlight text-4xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="transition transform hover:scale-125 duration-300 ease-in-out  text-white border p-1 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="transition transform hover:scale-125 duration-300 ease-in-out text-blue-600" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="transition transform hover:scale-125 duration-300 ease-in-out text-red-500" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="transition transform hover:scale-125 duration-300 ease-in-out text-green-600" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP className="transition hover:scale-125 duration-300 ease-in-out text-white border rounded-full p-1 bg-red-500" />
          </a>
        </div>
      </div>
       <div className="text-center p-3">
          <p className="text-black text-xl font-bold">
             © {new Date().getFullYear()} <span className="text-white">Devashish Kunwar</span> All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;
