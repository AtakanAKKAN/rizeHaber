import React from "react";
import Horizontal from "../../Layout/Horizontal/Horizontal";
import SubHeader from "../SubHeader/SubHeader";
import WeatherWidget from "../SubHeader/WeatherW";

import { FaPhoneAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black/50 p-4 cursor-default pb-6" id="footer">
      <div className=" flex flex-col gap-4 mb-5">
        <SubHeader />
        <WeatherWidget />
      </div>

      <div className="w-full flex items-center lg:px-8 px-4 justify-between max-md:flex-col max-md:gap-10 ">
        <div className="text-4xl text-white">
          <span className="lg:block hidden">Alem Sanal <br /> Haber Gerçek</span>
          <span className="lg:hidden block">Alem Sanal Haber Gerçek</span>
        </div>

        <div className="flex flex-col justify-between gap-4 text-white  ">
          <div className="flex items-center gap-4 ">
            <span>
              <FaMap className="text-white text-4xl" />
            </span>
            <span>Küçük çayır köyü Rize</span>
          </div>

          <div className="flex items-center gap-4">
            <span>
              <FaWhatsapp className="text-white text-4xl" />
            </span>
            <span>+90 530 443 46 53</span>
          </div>

          <div className="flex items-center gap-4">
            <span>
              <FaPhoneAlt className="text-white text-4xl" />
            </span>
            <a href="tel:+905519077053">+90 551 907 70 53</a>
          </div>

          <div className="flex items-center gap-4 ">
            <span>
              <IoMdMail className="text-white text-4xl" />
            </span>
            <span>muhammetdelal@hotmail.com</span>
          </div>
        </div>

        <div className="flex gap-4 items-center ">
          <FaFacebookF className="border p-2 rounded-full text-white text-7xl  max-md:text-4xl hover:bg-black/50 hover:text-[#fff2e1] transition-all duration-500 cursor-pointer " />
          <FaXTwitter className="border p-2  rounded-full text-white text-7xl max-md:text-4xl hover:bg-black/50 hover:text-[#fff2e1] transition-all duration-500 cursor-pointer" />
          <FaYoutube className="border p-2 rounded-full text-white text-7xl max-md:text-4xl hover:bg-black/50 hover:text-[#fff2e1] transition-all duration-500 cursor-pointer" />
        </div>
      </div>
      <Horizontal />
      <div className="w-full flex gap-4 text-3xl text-white max-md:text-xl justify-center">
        <div className="text-sm">Muhabir53.com.tr © 2024</div>
      </div>
    </div>
  );
};

export default Footer;
