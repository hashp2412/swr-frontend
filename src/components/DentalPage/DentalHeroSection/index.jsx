import React from "react";
import DentalNav from "../DentalNav";

const DentalHeroSection = () => {
  return (
    <>
      <div className="w-full h-[50rem] relative ">
        <div className="bg-dentalbg w-full h-full z--2 bg-cover flex justify-center"></div>
        <div className="absolute z-10 top-4 w-full">
          <DentalNav />
        </div>
        <div className="bg-blue-300/75 absolute z-10 top-[87%] w-full h-[25rem] ">
          <div className="my-auto mt-[3%] w-full h-[30%] flex gap-12 justify-end pr-8">
            <div className="w-[10%] h-[40%] bg-blue-300 border-[1px] text-white uppercase font-bold text-lg text-center pt-2 rounded-md cursor-pointer">
              apply
            </div>
            <div className="w-[10%] h-[40%] bg-blue-300 border-[1px] text-white uppercase font-bold text-lg text-center pt-2 rounded-md cursor-pointer">
              Visit
            </div>
            <div className="w-[17%] h-[40%] bg-blue-300 border-[1px] text-white uppercase font-bold text-lg text-center pt-2 rounded-md cursor-pointer">
            request information
            </div>
          </div>
          <div className="w-full h-[50%]  flex ">
            {/* <div className="w-[30%] h-[50%] border-[1px] border-blue-200 rounded-[1rem] bg-blue-300">
              <div className="uppercase text-[2rem] text-center text-white font-bold">
                course
              </div>
            </div> */}
            <div className="uppercase font-[800] leading-[3rem] text-[3.5rem] text-white ml-[10%] w-[40%] ">
            A UNIVERSITY <br/>OF THE  FIRST<br/> CLASS
            </div>
            <div className="font-[600] leading-[3rem] text-4xl text-white w-[50%] mr-[5%]">
            SDCRI is consistently recognized as one of the best values in education.
            </div>
   
          </div>
        </div>
      </div>
      <div className="w-full h-[18rem] bg-greypattern bg-cover">ll</div>
    </>
  );
};

export default DentalHeroSection;
