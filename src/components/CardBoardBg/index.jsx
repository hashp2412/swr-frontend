import React from "react";

const CardBoardBg = () => {
  return (
    <>
      <div className="bg-cardboardbg w-full h-[55rem] bg-cover flex justify-center ">
        <div className="w-[80%] h-[80%]  my-auto flex-col">
          <div className="w-full h-[70%] relative">
            <img
              src="/tricolor-img.JPG"
              alt=""
              className="w-[55%] h-[90%] object-cover ml-[10%] my-6"
            />
            <div className="absolute border-[3px] border-[#68ace5] w-[60%] h-[80%] left-[7.5%] top-[6%]" />
            <div className="absolute bg-white w-[35%] h-[65%] right-[5%] top-[12%] drop-shadow-[-7px_7px_#001e3d]" />
          </div>
          <div className="w-[80%] mx-auto h-[25%] mt-[3%] flex justify-between">
            <div className="w-[29%] h-full bg-white "></div>
            <div className="w-[29%] h-full bg-white "></div>
            <div className="w-[29%] h-full bg-white "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBoardBg;
