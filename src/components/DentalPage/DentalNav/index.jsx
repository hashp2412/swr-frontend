import React from "react";

const DentalNav = () => {
  return (
    <>
      <div className="h-[7rem] w-full flex justify-between">
        <div>
          <img src="/dental-logo.png" alt="" className="w-[30%] ml-[10%]" />
        </div>

        <div className="flex w-[60%] whitespace-nowrap items-center gap-12 font-bold text-white text-lg font-raleway ml-[30%] ">
          <div className="hover:bg-blue-300 bg-[#4da9ff] py-[2%] px-[3%] rounded-[2rem] transition-all duration-[450ms]">
            HOME
          </div>
          <div className="hover:bg-blue-300 bg-[#4da9ff] py-[2%] px-[3%] rounded-[2rem] transition-all duration-[450ms]">
            ABOUT US
          </div>
          <div className="hover:bg-blue-300 bg-[#4da9ff] py-[2%] px-[3%] rounded-[2rem] transition-all duration-[450ms]">
            CAMPUS LIFE
          </div>
          <div className="hover:bg-blue-300 bg-[#4da9ff] py-[2%] px-[3%] rounded-[2rem] transition-all duration-[450ms] ">
          MENU
          </div>
        </div>
      </div>
    </>
  );
};

export default DentalNav;