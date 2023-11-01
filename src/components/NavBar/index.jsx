"use client";
import React, { useState } from "react";
import ExpandedNavbar from "./ExpandedNavBar";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {MdOutlineMenu} from "react-icons/md"
const NavBar = () => {
  const [isopen,setOpen] = useState(false)
  const handleopen = ()=>{
    setOpen(!isopen)
  }
  return (
    <TransitionGroup>
      {isopen? <CSSTransition in={isopen}
            timeout={500} // Animation duration in milliseconds
            classNames="slide" // CSS class prefix for animations
            unmountOnExit
          ><ExpandedNavbar closingfunction ={handleopen}/></CSSTransition>:<div className="fixed mr-2 z-[10] right-0">
      <div onClick={handleopen} className="bg-[#002d72]/80 hover:bg-[#e5383b] text-white text-lg px-4 py-2 mt-1 proximanovablack flex items-center gap-2">
          <spanc className="text-xl"><MdOutlineMenu/></spanc>MENU
          </div>
          <div className=" animate-pulse bg-orange-600 hover:bg-red-400 text-white text-lg px-4 py-2 mt-1 proximanovablack">
            Apply Now
          </div>
      </div>
      
}
    </TransitionGroup>
  );
};

export default NavBar;
