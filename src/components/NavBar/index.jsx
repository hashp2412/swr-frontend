"use client";
import React, { useState } from "react";
import ExpandedNavbar from "./ExpandedNavBar";

const NavBar = () => {
  const [isopen,setOpen] = useState(false)
  const handleopen = ()=>{
    setOpen(!isopen)
  }
  return (
    <>
      {isopen?<ExpandedNavbar closingfunction ={handleopen}/>:<div className="mt-4 h-[7rem] w-full flex justify-between  ">
        <div>
          <img src="/mainlogo.png" alt="" className="w-[20%] mt-8 ml-[10%]" />
        </div>

        <div className="flex w-[60%] whitespace-nowrap items-center gap-6 mr-[15%] font-bold text-white text-lg font-raleway ">
          <div className="hover:bg-[#e5383b] hover:py-[3%] px-[5%] rounded-[2rem] transition-all duration-[450ms]">
            HOME
          </div>
          <div className="hover:bg-[#e5383b] hover:py-[3%] px-[5%] hover:rounded-[2rem] transition-all duration-[450ms]">
            ABOUT US
          </div>
          <div className="hover:bg-[#e5383b] hover:py-[3%] px-[5%] hover:rounded-[2rem] transition-all duration-[450ms]">
            CAMPUS LIFE
          </div>
          <div onClick={handleopen} className="bg-[#a4133c] hover:bg-[#e5383b] py-[3%] px-[5%] rounded-[2rem] transition-all duration-[450ms] ">
          MENU
          </div>
        </div>
      </div>
}
    </>
  );
};

export default NavBar;
