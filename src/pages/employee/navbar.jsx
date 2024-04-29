/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiAlertCircle } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MdOutlineFilterAltOff,
  MdOutlineHelpOutline,
  MdRealEstateAgent,
  MdOutlinePersonRemoveAlt1,
} from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";

import Logo from "../../assets/logo.svg";
import homeIcon from "../../assets/home.svg";
import groups from '../../assets/groups.svg'
import bell from '../../assets/bell.svg'

import activehomeIcon from "../../assets/activeHome.svg";


const Navbar = () => {
  const pathname = window.location.pathname
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#E43625" : "black",
      // backgroundColor: isActive ? "#05A3A3" : "black",
    };
  };

  return (
    <div className="w-full  fixed h-[80px] bg-white border-b flex justify-center z-[9]">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className=" w-[181px] h-[40px]">
          <img src={Logo} className="object-cover h-full w-full" />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="flex items-center gap-24 font-mono">
          <NavLink to="/employee" style={activeStyle}>
            <div className="flex flex-col items-center justify-center gap-1 ">
              {/* <BiHomeAlt2 /> */}
              <div>
                <img src={pathname === '/employee' ? activehomeIcon : homeIcon} alt="icon" />
              </div>
              <p className={`${pathname === '/employee' ? '[#E43625]' : "text-[#666]"} text-[12px] font-medium hover:text-[#E43625] transition-all ease-in `}>Home</p>
            </div>
          </NavLink>
          <NavLink to="/myCampaigns" style={activeStyle}>
            <div className="flex flex-col items-center justify-center gap-1 ">
              {/* <CiSaveDown2 />
               */}
              <div>
                <img src={groups} alt="icon" />
              </div>
              <p className="text-[#666] text-[12px] font-medium hover:text-[#E43625] transition-all ease-in ">My Campaigns</p>
            </div>
          </NavLink>
          <div>
            <div className="flex flex-col items-center justify-center gap-1 ">
              {/* <CiSaveDown2 />
               */}
              <div>
                <img src={bell} alt="icon" />
              </div>
              <p className="text-[#666] text-[12px] font-medium hover:text-[#E43625] transition-all ease-in ">Notification</p>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center mr-2">
          <IoMdNotificationsOutline />
          <span>Notifications</span>
        </div> */}
        </div>
      </div>

    </div>
  );
};

export default Navbar;
