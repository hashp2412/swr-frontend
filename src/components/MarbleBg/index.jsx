import React from "react";

const MarbleBg = () => {
  return (
    <>
      <div className="w-full h-[3rem] bg-white drop-shadow-[10px_10px_2px_rgba(0,0,0,0.25)] shadow-2xl text-white">
        l
      </div>
      <div className="bg-marblebg w-full h-[60rem] bg-cover relative">
        <div className="w-[30rem] h-[30rem] top-[10rem] left-[20rem] relative">
          <img src="/pic5.jpg" alt="" className="w-full h-full object-cover" data-entrance="fade" data-delay="3000"/>
          <div className="absolute border-2 border-white w-[95%] h-[95%] top-[0.8rem] left-[0.8rem] z-[7] " />
        </div>

        <div className="w-[32rem] h-[32rem] top-[9rem] left-[19rem] absolute z-[5] border-[4px] border-[#004e89] rounded-full"></div>

        <div className="w-[8rem] h-[8rem] top-[14.5rem] left-[45.5rem] absolute z-10 opacity-40">
          <img
            src="/quotes.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[28rem] h-[12rem] top-[17rem] left-[47rem] absolute z-[9] bg-white z-1"></div>

        <div className="w-[12rem] h-[12rem] top-[37rem] left-[55rem] absolute ">
          <img src="/pic2.jpg" alt="" className="w-full h-full object-cover" data-entrance="from-right" />
        </div>

        <div className="w-[5rem] h-[5rem] top-[19rem] right-10 absolute ">
          <img src="/pic3.jpg" alt="" className="w-full h-full object-cover" data-entrance="from-right" />
        </div>

        <div className="w-[15rem] h-[15rem] top-[34rem] left-[69rem] absolute " data-entrance="from-right">
          <img src="/pic1.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[5rem] h-[5rem] top-[10rem] left-[14rem] absolute " data-entrance="from-left">
          <img src="/pic1.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[5rem] h-[5rem] top-[4rem] left-[20rem] absolute " data-entrance="from-left">
          <img src="/pic2.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[5rem] h-[5rem] top-[10rem] left-[52rem] absolute " data-entrance="from-right">
          <img src="/pic3.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[5rem] h-[5rem] top-[41rem] left-[24rem] absolute " data-entrance="from-left">
          <img src="/pic4.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[10rem] h-[10rem] top-[25rem] left-[8rem] absolute "data-entrance="from-left">
          <img src="/pic3.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[12rem] h-[12rem] top-[3rem] left-[59rem] absolute " data-entrance="from-right">
          <img src="/pic4.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default MarbleBg;
