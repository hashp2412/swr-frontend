import React, { useState } from "react";


const ExpandedNavbar = ({closingfunction}) => {

  return (
    <div className="w-full h-screen  z-[100] fixed " >
      <div className="w-full h-[15%] flex justify-between bg-black shadow-2xl">
        <div className="w-[80%]">
          <img src="/mainlogo.png" alt="" className="w-[15%] mt-6 ml-[5%]" />
        </div>

        <button className="w-[20%] flex justify-end mt-6 mr-4" onClick={closingfunction}>
          <img
            src="/cross.png"
            alt=""
            className="w-[15%] p-2 border-2 rounded-full"
          />
        </button>
      </div>
      <div className="w-full h-[85%] flex bg-black bg-cover bg-center ">
        <div className="h-full w-[25%] mt-[2%] ml-[2%] flex-col border-r-2 border-r-gray-200" >
          <div className="text-[3.3rem] text-white font-serif font-bold underline  w-fit mb-4">
          Academics
          </div>
          <div className="text-[3.3rem] text-white font-serif font-bold underline w-fit mb-4">
            Campus
          </div>
          <div className="text-[3.3rem] text-white font-serif font-bold underline w-fit mb-4">
            In Focus
          </div>
          <div className="text-[3.3rem] text-white font-serif font-bold underline w-fit mb-4">
            Courses
          </div>
          
          <div className="text-[3.3rem] text-white font-serif font-bold underline w-fit mb-4">
            Fee Payment
          </div>
        </div>
        <div className="h-full w-[75%] mt-[3%]">
          <div className="text-white text-3xl font-sans font-semibold ml-10">Dentistry</div>
          <div className="text-white text-3xl font-sans font-semibold ml-10 mt-6">Engineering</div>
          <div className="text-white text-3xl font-sans font-semibold ml-10 mt-6">Nursing</div>
          <div className="text-white text-3xl font-sans font-semibold ml-10 mt-6">Pharmacy</div>
          <div className="text-white text-3xl font-sans font-semibold ml-10 mt-6">Management</div>
        </div>
      </div>
      
    </div>
  );
};

export default ExpandedNavbar;
