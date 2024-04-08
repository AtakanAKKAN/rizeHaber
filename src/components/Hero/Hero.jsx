import React from "react";

const Hero = () => {
  return (
    <div className="mb-10 flex px-4 justify-around items-center max-md:flex-col gap-4">
      <div className="relative w-6/12 max-md:w-full ">
        <iframe
          src="https://www.olay53.com/service/webmaster/?t=3&c=10&h=1"
          scrolling="no"
          title="a"
          frameborder="0"
          className="w-full h-[480px] "
        ></iframe>
        <div className="absolute h-[38px] top-0 bg-[#a79277] z-10 max-md: w-full"></div>
      </div>

      <div className="relative w-6/12 max-md:w-full ">
        <iframe
          src="https://www.olay53.com/service/webmaster/?t=2&c=10&h=1"
          scrolling="no"
          title="b"
          frameborder="0"
          className="w-full h-[480px] bg-[#FFF2E1] max-md:h-[300px] "
        ></iframe>
        <div className="absolute w-full h-[38px] top-0 bg-[#a79277] z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
