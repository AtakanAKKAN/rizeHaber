import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full p-4 bg-[#FFF2E1] pl-[8%]">
      <div className="flex md:gap-4 gap-2">
        <Link to="/" ><FaHome className="md:text-xl text-base" /></Link>
        <span className="border-l space-x-10 pl-2 border-neutral-600 md:text-base text-sm">Günün Haberleri</span>
        <a href="#sonDakka" className="border-l space-x-10 pl-2 border-neutral-600 md:text-base text-sm">Son Dakika</a>
      </div>
    </div>
  );
};

export default TopBar;
