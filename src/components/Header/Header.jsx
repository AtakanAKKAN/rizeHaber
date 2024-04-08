import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full md:py-4 py-2 flex justify-between items-center bg-black/20 md:px-8 px-4">
      <div className="md:pl-10 max-md:pl-0">
        <img
          src={require("../../images/Logo.png")}
          alt=""
          className="w-full scale-125 h-20 object-cover max-md:h-12 bg-black/30 rounded-full"
        />
      </div>
      <h1 className="text-5xl text-white md:block hidden lg:text-4xl font-bold tracking-wide">
        Alem Sanal Haber Gerçek
      </h1>
      <div className="flex gap-4 md:text-2xl text-sm cursor-pointer">
        <Link to="/hakkımızda" className="">Hakkımızda</Link>
        <Link to="/hizmetlerimiz" className="">Hizmetlerimiz</Link>
        <Link className="cursor-pointer">İletişim</Link>
      </div>
    </div>
  );
};

export default Header;
