/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import posts from "../../assets/posts.svg";


const Navbar = () => {

  return (
    <div className="w-full  fixed h-[80px] bg-white border-b flex justify-center z-[9]">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className=" w-[181px] h-[40px]">
          <img src={Logo} className="object-cover h-full w-full" />
        </div>

        {/* <NavLink to="/moderator"

        >
          <div className="flex flex-col items-center justify-center gap-1 ">
            <div>
              <img alt="icon" src={posts} />
            </div>
            <p className={`text-[#E43625] text-[12px] font-medium hover:text-[#E43625] transition-all ease-in`}>Posts</p>
          </div>
        </NavLink> */}

      </div>

    </div>
  );
};

export default Navbar;
