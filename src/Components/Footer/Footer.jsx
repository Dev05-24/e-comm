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
        {/* <div className="flex items-center justify-around">
          <img className="h-20" src={logo} alt="logo" />
      </div> */}
        <div className="flex gap-8 text-highlight text-3xl text-[#20718a]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            
          >
            <FaInstagram className="transition hover:scale-125 duration-300 ease-in-out" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaFacebookF className="transition hover:scale-125 duration-300 ease-in-out" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaTwitter className="transition hover:scale-125 duration-300 ease-in-out" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaYoutube className="transition hover:scale-125 duration-300 ease-in-out" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaWhatsapp className="transition hover:scale-125 duration-300 ease-in-out" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaPinterestP className="transition hover:scale-125 duration-300 ease-in-out" />
          </a>
        </div>
      </div>
       <div className="text-center">
          <p className="text-[#20718a] text-lg font-bold">
            Copyright {year} page by Devashish
          </p>
        </div>
    </div>
  );
};

export default Footer;
