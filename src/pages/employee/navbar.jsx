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
import activeBell from '../../assets/activeBell.svg'
import activeGroup from '../../assets/avtiveGroup.svg'


import activehomeIcon from "../../assets/activeHome.svg";
import Notifications from "./Notifications";
import Groups from "./Groups";


const Navbar = ({ setActiveTab, activeTab }) => {
  const pathname = window.location.pathname
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#E43625" : "black",
      // backgroundColor: isActive ? "#05A3A3" : "black",
    };
  };
  const [showNotifications, setShowNotifications] = useState(false)
  const [showGroups, setShowGroups] = useState(false)


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }
  const toggleGroups = () => {
    setShowGroups(!showGroups)
  }
  return (
    <div className="w-full  fixed h-[80px] bg-white border-b flex justify-center z-[9]">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className=" w-[181px] h-[40px]">
          <img src={Logo} className="object-cover h-full w-full" />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="flex items-center gap-24 font-mono">
          <NavLink to="/employee" style={activeStyle}
            onClick={() => {
              setActiveTab('landing_page')
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 ">
              {/* <BiHomeAlt2 /> */}
              <div>
                <img src={pathname === '/employee' && activeTab === 'landing_page' && !showGroups && !showNotifications ? activehomeIcon : homeIcon} alt="icon" />
              </div>
              <p className={`${pathname === '/employee' && activeTab === 'landing_page' && !showGroups && !showNotifications ? '[#E43625]' : "text-[#666]"} text-[12px] font-medium hover:text-[#E43625] transition-all ease-in `}>Home</p>
            </div>
          </NavLink>
          <p className="cursor-pointer" onClick={toggleGroups}>
            <div className="flex flex-col items-center justify-center gap-1 ">
              {/* <CiSaveDown2 />
               */}
              <div>
                <img src={showGroups || pathname.includes('groups') ? activeGroup : groups} alt="icon" />
              </div>
              <p className={`${showGroups || pathname.includes('groups') ? 'text-[#E43625]' : 'text-[#666]'}  text-[12px] font-medium hover:text-[#E43625] transition-all ease-in `}>Groups</p>
            </div>
          </p>
          <div>
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer" onClick={toggleNotifications}>
              {/* <CiSaveDown2 />
               */}
              <div>
                <img src={showNotifications ? activeBell : bell} alt="icon" />
              </div>
              <p className={`${showNotifications ? 'text-[#E43625]' : 'text-[#666]'} text-[12px] font-medium hover:text-[#E43625] transition-all ease-in `}>Notification</p>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center mr-2">
          <IoMdNotificationsOutline />
          <span>Notifications</span>
        </div> */}
        </div>
      </div>
      {showNotifications && <Notifications toggleNotifications={toggleNotifications} />}
      {showGroups && <Groups toggleGroups={toggleGroups} />}


    </div>
  );
};

export default Navbar;
