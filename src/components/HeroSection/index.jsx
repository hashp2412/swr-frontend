"use client";
import React, { useState,useEffect } from "react";
import Navbar from "../NavBar"
import FullPageLoading from "../LoadingAnims/FullPageLoading";
import { sofia } from "../../app/fonts";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  // 
  const handleVideoLoad = () => {
    setVideoLoaded(true);

  };
  return (
    <>
      <div className="relative h-auto w-full ">
        <div className="video-container h-auto z--2 ">
          {/* <div className="absolute z-50 top-0"> */}
            {/* <Navbar/> */}
          {/* </div> */}

          <div className="absolute z-10 top-[20rem] left-[10%]">
            <img src="/bird-logo.svg" alt="" className="w-full h-full" />
          </div>

           <video autoPlay muted loop className={``} onLoadedData={handleVideoLoad}
        onCanPlayThrough={handleVideoLoad}>
            <source src="/HomePage1.mp4" type="video/mp4" />
          </video>
          {/* {videoLoaded?null:<FullPageLoading/>} */}
        </div>
       
      </div>
    </>
  );
};

export default HeroSection;
