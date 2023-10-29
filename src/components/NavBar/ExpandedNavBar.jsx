import React from "react";

const ExpandedNavbar = ({closingfunction}) => {
  return (
    <div className="w-full h-screen z-[100]">
      <div className="w-full h-[15%] flex justify-between bg-[#a4133c] shadow-2xl">
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
      <div className="w-full h-[70%] flex bg-white/70 ">
        <div className="h-full w-[25%] mt-[2%] ml-[2%] flex-col gap-6 border-r-2 border-r-gray-200">
          <div className="text-[3rem] text-[#a4133c] font-serif font-bold hover:border-b-2 border-[#e5383b] w-fit">
            Academics
          </div>
          <div className="text-[3rem] text-[#a4133c] font-serif font-bold hover:border-b-2 border-[#e5383b] w-fit">
            Campus
          </div>
          <div className="text-[3rem] text-[#a4133c] font-serif font-bold hover:border-b-2 border-[#e5383b] w-fit">
            In Focus
          </div>
          <div className="text-[3rem] text-[#a4133c] font-serif font-bold hover:border-b-2 border-[#e5383b] w-fit">
            Courses
          </div>
          <div className="text-[3rem] text-[#a4133c] font-serif font-bold hover:border-b-2 border-[#e5383b] w-fit"></div>
          <div className="text-[3rem] text-[#a4133c] font-serif font-bold hover:border-b-2 border-[#e5383b] w-fit">
            Fee Payment
          </div>
        </div>
        <div className="h-full w-[75%] mt-[3%]">
          <div className="text-[#e5383b] text-3xl font-sans font-semibold ml-10">Dentistry</div>
          <div className="text-[#e5383b] text-3xl font-sans font-semibold ml-10 mt-6">Engineering</div>
          <div className="text-[#e5383b] text-3xl font-sans font-semibold ml-10 mt-6">Nursing</div>
          <div className="text-[#e5383b] text-3xl font-sans font-semibold ml-10 mt-6">Pharmacy</div>
          <div className="text-[#e5383b] text-3xl font-sans font-semibold ml-10 mt-6">Management</div>
        </div>
      </div>
      
    </div>
  );
};

export default ExpandedNavbar;
