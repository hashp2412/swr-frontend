import React from "react";
import Image from "next/image";
const Intro = () => {
  return (
    <>
      <div className="w-full h-[70rem] bg-white flex justify-center mb-[8%] ">
        <div className="flex-col">
          <div className="bg-introstripes w-screen h-16 mt-[18.5rem] bg-cover " />
          <div className="flex p-12 w-full mt-14">
            <div className="flex-col w-[40%] m-10 ml-20">
              <div className="font-bold text-xl font-sans flex">
                <div>THE SGI DIFFERENCE</div>
                <div>
                  <img
                    src="/slantg.png"
                    alt=""
                    className="w-8 h-[1.1rem] ml-4 mt-[0.3rem] "
                  />
                </div>
              </div>
              <div className="font-bold text-[3.5rem] text-[#e5383b] tracking-tighter leading-[3rem] mt-10">
                MORE THAN READY.
                <br /> WE ARE READY.
              </div>
              <div className="mt-14 font-poppins text-md text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariaturnisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit{" "}
                <span className="text-black font-semibold">
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  n voluptate velit esse cillum dolore eu fugiat nulla
                  pariaturvoluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </span>
              </div>
              <div>
                <button className="py-4 px-16 bg-[#a4133c] text-white mt-[12%] rounded-md">
                  Explore More
                </button>
              </div>
            </div>
            <div className=" w-[45%] mt-6 h-[10rem] ml-10">
              <img src="/collage-2.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-auto pt-[20%] z-50">
        <div className="w-[80%] h-[35%] bg-white absolute z-[60] top-0 shadow-2xl flex ml-[10%] ">
          <img
            src="/card-stripes.svg"
            alt=""
            className="w-10 h-full overflow-hidden "
          />
          <div className="flex-col w-full h-full">
            <img
              src="/grey-card-stripes.svg"
              alt=""
              className="w-[90%] h-[0.7rem] overflow-hidden rounded-md ml-[5%] mt-[4%]"
            />
            <div className="flex border-b-2 w-[90%] h-[50%] mx-auto mt-4 ">
              <div className="uppercase text-md text-[#A4133C] font-bold tracking-tighter leading-4 mt-6 mr-8">
                values & <br /> outcomes
              </div>
              <div className="w-[30%]">
                <div className="font-sans text-[3.5rem] font-bold text-[#eb4245] uppercase tracking-tighter">
                  top 2%
                </div>
                <div className="text-gray-600">
                  in the nation for long-term return on investment out of 4,500
                  universities
                </div>
              </div>

              <div className="w-[30%]">
                <div className="font-sans text-[3.5rem] font-bold text-[#eb4245] uppercase tracking-tighter">
                  98%
                </div>
                <div className="text-gray-600">
                  in the nation for long-term return on investment out of 4,500
                  universities in the nation for long-term return on investment
                  out of 4,500 universities
                </div>
              </div>

              <div className="w-[30%]">
                <div className="font-sans text-[3.5rem] font-bold text-[#eb4245] uppercase tracking-tighter">
                  top 2%
                </div>
                <div className="text-gray-600">
                  in the nation for long-term return on investment out of 4,500
                  universities
                </div>
              </div>
            </div>
            <div className="flex mx-auto w-[90%] mt-10">
              <div className="w-12 h-12 rounded-full bg-[#a4133c] flex justify-center">
                <img src="/link.png" alt="" className=" w-6 h-6 mt-[25%]" />
              </div>
              <div className="text-[#a4133c] hover:border-b-2 hover:border-[#a4133c] h-6 font-semibold font-sans mx-6 mt-2">
                Learn more about the value of SGI degree
              </div>
              <div>
              <img src="/slant-gray.png" alt="" className=" w-8 h-8 mt-[27%]" />
              </div>
              <div className="text-[#a4133c] hover:border-b-2 hover:border-[#a4133c] h-6 font-semibold font-sans mx-6 mt-2">
                Learn more about the value of SGI degree
              </div>

            </div>
          </div>
        </div>
        <div className="absolute z-50  top-[9%] h-[12rem]  w-full bg-waves" />
        <div className="w-full h-[60rem] bg-[#a4133c] flex ">
          <div className="flex mt-[20%] gap-[4%] justify-center  w-full h-full">
            <div className="w-[25%] h-[55%] bg-white shadow-2xl rounded-md ">
              <div className="uppercase text-xl font-semibold font-sans text-white rounded-t-md pl-[29%] pt-[1%] w-full h-[7%] bg-[#891032]">
                NOTICE BOARD
              </div>
              <div className="w-full h-[93%] mt-4">
                {/* Notices */}
                <div className="flex w-full h-[17%] border-t-2 pt-2">
                  {/* calender */}
                  <div className=" w-[15%] h-[80%] border-2 border-[#6e0d28] mt-1 ml-2">
                    <div className="w-full h-[35%] bg-[#6e0d28] text-sm text-white font-bold text-center">
                      Oct 23
                    </div>
                    <div className="text-2xl font-bold text-center mt-1">
                      11
                    </div>
                  </div>
                  <div className="w-[80%] ml-4">
                    <div>
                      Notice regarding Teaching post in the Department of
                      Engineering
                    </div>
                    <div className="text-[#a4133c]">View Details</div>
                  </div>
                </div>
                <div className="flex w-full h-[17%] border-t-2 pt-2">
                  {/* calender */}
                  <div className=" w-[15%] h-[80%] border-2 border-[#6e0d28] mt-1 ml-2">
                    <div className="w-full h-[35%] bg-[#6e0d28] text-sm text-white font-bold text-center">
                      Oct 23
                    </div>
                    <div className="text-2xl font-bold text-center mt-1">
                      11
                    </div>
                  </div>
                  <div className="w-[80%] ml-4">
                    <div>
                      Notice regarding Teaching post in the Department of
                      Engineering
                    </div>
                    <div className="text-[#a4133c]">View Details</div>
                  </div>
                </div>
                <div className="flex w-full h-[17%] border-t-2 pt-2">
                  {/* calender */}
                  <div className=" w-[15%] h-[80%] border-2 border-[#6e0d28] mt-1 ml-2">
                    <div className="w-full h-[35%] bg-[#6e0d28] text-sm text-white font-bold text-center">
                      Oct 23
                    </div>
                    <div className="text-2xl font-bold text-center mt-1">
                      11
                    </div>
                  </div>
                  <div className="w-[80%] ml-4">
                    <div>
                      Notice regarding Teaching post in the Department of
                      Engineering
                    </div>
                    <div className="text-[#a4133c]">View Details</div>
                  </div>
                </div>
                <div className="flex w-full h-[17%] border-t-2 pt-2">
                  {/* calender */}
                  <div className=" w-[15%] h-[80%] border-2 border-[#6e0d28] mt-1 ml-2">
                    <div className="w-full h-[35%] bg-[#6e0d28] text-sm text-white font-bold text-center">
                      Oct 23
                    </div>
                    <div className="text-2xl font-bold text-center mt-1">
                      11
                    </div>
                  </div>
                  <div className="w-[80%] ml-4">
                    <div>
                      Notice regarding Teaching post in the Department of
                      Engineering
                    </div>
                    <div className="text-[#a4133c]">View Details</div>
                  </div>
                </div>
                <div className="flex w-full h-[17%] border-t-2 pt-2">
                  {/* calender */}
                  <div className=" w-[15%] h-[80%] border-2 border-[#6e0d28] mt-1 ml-2">
                    <div className="w-full h-[35%] bg-[#6e0d28] text-sm text-white font-bold text-center">
                      Oct 23
                    </div>
                    <div className="text-2xl font-bold text-center mt-1">
                      11
                    </div>
                  </div>
                  <div className="w-[80%] ml-4">
                    <div>
                      Notice regarding Teaching post in the Department of
                      Engineering
                    </div>
                    <div className="text-[#a4133c]">View Details</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] h-[55%] bg-white shadow-2xl rounded-md">
              <div className="uppercase text-xl font-semibold font-sans text-white rounded-t-md pl-[20%] pt-[1%] w-full h-[7%] bg-[#891032]">
                Chairman&apos;s message
              </div>
              <img
                src="/chairman.jpg"
                alt=""
                className="w-[70%] h-[60%] mx-auto mt-4"
              />
              <div className="w-[80%] mx-auto text-sm mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                hendrerit tincidunt ligula. Nullam vel dapibus dolor.
                Suspendisse malesuada ultrices nunc. Vestibulum eu odio eget
                velit vulputate eleifend.
              </div>
            </div>
            <div className="w-[25%] h-[55%] bg-white shadow-2xl rounded-md">
              <div className="uppercase text-xl font-semibold font-sans text-white rounded-t-md pl-[37%] pt-[1%] w-full h-[7%] bg-[#891032]">
                Events
              </div>
            </div>
          </div>
        </div>
        <div className="w-[42%] h-[35%] bg-white z-[120] absolute top-[120%] left-[7%] flex">
          <img
            src="/card-stripes.svg"
            alt=""
            className="w-10 h-full overflow-hidden "
          />
          <div className="flex-col">
            <div className=" w-full ">
              <img
                src="/nation-text.svg"
                alt=""
                className=" w-[70%] h-[50%] mt-10 ml-[10%]"
              />
            </div>
            <div className="ml-[10%]  w-[70%] text-md border-b-[1px] border-gray-300 py-4">
              Our diverse, vibrant, close-knit community. Our spirit,
              traditions, and campus culture. All of these aspects define the
              SGI experience.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-collage h-[60rem] w-full z--10 bg-fixed brightness-90"></div>

      <div className="w-full h-[45rem] bg-reviewbg flex">
        <div className=" flex justify-center pt-[12%] w-[20%]">
          <img src="/quotes.png" alt="" className=" w-[30%] h-[20%] ml-[45%]" />
        </div>
        <div className=" flex-col w-[40%]">
          <div className="flex font-sans tracking-tight font-semibold text-white text-lg uppercase mt-[17%]">
            <span>Hear From Students</span>
            <img
              src="/slantg.png"
              alt=""
              className="w-8 h-[1.1rem] ml-2 mt-[0.4rem]"
            />
          </div>
          <div className="w-[80%] text-[1.7rem] font-semibold text-white mt-[10%]">
            I have made lifelong friendships and relationships that I would have
            never imagined before coming to SGI. The university and the people
            here have helped shape me into the person I am now.
          </div>
          <div className="text-lg text-white font-sans mt-[5%]">
            -{" "}
            <span className="text-[#e5383b] font-semibold text-xl font-serif">
              Sabrina,’22,
            </span>{" "}
            Dental Major
          </div>
          <div>
            <button className="py-4 px-16 bg-white text-[#a4133c] mt-[12%] rounded-md">
              Explore More
            </button>
          </div>
        </div>
        <div className=" mt-[10%]  w-[40%]">
          <img src="/student.png" alt="" className="w-[70%]" />
        </div>
      </div>
    </>
  );
};

export default Intro;
