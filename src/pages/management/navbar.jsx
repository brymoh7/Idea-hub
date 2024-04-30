/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import posts from "../../assets/message.svg";
import home from "../../assets/home.svg";
import activehomeIcon from "../../assets/activeHome.svg";
import inactivePost from "../../assets/mssg.svg"




const Navbar = () => {
  const pathname = window.location.pathname


  return (
    <div className="w-full  fixed h-[80px] bg-white border-b flex justify-center z-[9]">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <NavLink to='/management'>
          <div className=" w-[181px] h-[40px]">
            <img src={Logo} className="object-cover h-full w-full" />
          </div>
        </NavLink>

        <div className="flex items-center gap-x-10">
          <NavLink to="/management"

          >
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div>
                <img alt="icon" src={pathname === '/management' ? activehomeIcon : home} />
              </div>
            </div>
          </NavLink>

          <NavLink to="/management/posts"

          >
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div>
                <img alt="icon" src={pathname.includes('posts') ? posts : inactivePost} />
              </div>
            </div>
          </NavLink>
        </div>



      </div>

    </div>
  );
};

export default Navbar;
