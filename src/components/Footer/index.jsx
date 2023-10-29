import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[30rem] bg-[#6e0d28] overflow-hidden flex-col">
        <div className="flex h-full w-full">
          <div className=" mt-[5%] w-[30%] pl-[5%] border-r-[#8a495a] border-r-[1px] h-[50%] mr-[5%]" data-entrance="from-left">
            <img
              src="/mainlogo.png"
              alt=""
              className="w-[70%] mt-[7%] ml-[10%]"
            />
            <button className="py-2 px-10 bg-white text-[#6e0d28]  font-semibold text-lg rounded-md mt-[10%] ml-[15%]">
              Contact Us
            </button>
          </div>

          <div className="w-[30%] pt-6 h-[50%] mr-[5%] mt-[5%]" data-entrance="fade">
            <div className="text-md text-[#eb4245]  ">MAIN CAMPUS</div>
            <div className="text-lg uppercase text-white font-semibold font-serif">
              H.H. Gardens, Power House Road,
              <br /> Sri Ganganagar <br />{" "}
              <span className="lowercase font-sans">
                0154-2443412 or 2440072 or 2440071
              </span>
            </div>
          </div>

          <div className="w-[60%] h-full ml-4 border-t-[#8a495a] border-t-[1px] mt-[5%] mr-[4%] "data-entrance="from-right">
            <div className=" flex mt-4">
              <div className="uppercase text-xl text-white tracking-tighter font-thin">follow Surendra group of institutions</div>
              <img
                src="/slantg.png"
                alt=""
                className="w-8 h-[1.1rem] ml-4 mt-[0.4rem]"
              />
            </div>
            <div className="w-full flex gap-4 mt-8">
                <div className="border-[1px] border-[#8a495a] p-4 rounded-full hover:bg-[#eb4245] transition-all">
                    <img src="/facebook-logo.png " alt="" className="w-8 h-8"/>
                </div>

                <div className="border-[1px] border-[#8a495a] px-4 pt-[1.2rem] rounded-full hover:bg-[#eb4245] transition-all">
                    <img src="/youtube-logo.png " alt="" className="w-8 h-8"/>
                </div>

                <div className="border-[1px] border-[#8a495a] p-4 rounded-full hover:bg-[#eb4245] transition-all">
                    <img src="/instagram-logo.png " alt="" className="w-8 h-8"/>
                </div>

                <div className="border-[1px] border-[#8a495a] p-4 rounded-full hover:bg-[#eb4245] transition-all">
                    <img src="/twitter-logo.png " alt="" className="w-8 h-8"/>
                </div>

                <div className="border-[1px] border-[#8a495a] px-4 pt-[0.7rem] rounded-full hover:bg-[#eb4245] transition-all">
                    <img src="/linkedin-logo.png " alt="" className="w-8 h-8"/>
                </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#a4133c] w-full h-[10rem]">
ll
        </div>
      </div>
    </>
  );
};

export default Footer;
