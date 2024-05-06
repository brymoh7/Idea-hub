import React from "react";
import { useNavigate } from "react-router-dom";
import BGIMAGE from "../assets/background.png";
import Logo from "../assets/logo.png";
import Person from "../assets/person.png";
import Icon1 from "../assets/Circle Layer.png";
import Icon2 from "../assets/Bag.png";
import Icon3 from "../assets/Cube.png";
import Icon4 from "../assets/User Arrows.png";
import HDU from "../assets/HDU.png";
import Employee from "../assets/employee.png";
import Moderator from "../assets/moderator.png";
import IT from "../assets/it-team.png";
import Innovation from "../assets/team.png";
import Management from "../assets/management.png";
import Footer from "../assets/footer.png";
import Copyrights from "../assets/Copyrights.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const ideas = [
    {
      icon: <img src={Icon1} />,
      title: "Collaboration",
      message: "",
    },
    {
      icon: <img src={Icon2} />,
      title: "Corporate",
      message: "",
    },
    {
      icon: <img src={Icon3} />,
      title: "Digital",
      message: "",
    },
    {
      icon: <img src={Icon4} />,
      title: "Teamwork",
      message: "",
    },
  ];
  const users = [
    {
      image: <img src={Employee} />,
      title: "premium employees",
    },
    {
      image: <img src={Moderator} />,
      title: "moderators",
    },
    {
      image: <img src={Innovation} />,
      title: "innovation team",
    },
    {
      image: <img src={IT} />,
      title: "it support team",
    },
    {
      image: <img src={Management} />,
      title: "management",
    },
  ];
  return (
    <div className="w-full h-full font-mono">
      <div
        className="w-full relative bg-cover"
        style={{
          backgroundImage: `url(${BGIMAGE})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#111111]/80 to-[#111111]/[0.32] z-[2]"></div>
        <div className="flex items-center justify-between px-10 relative z-[3] pt-6">
          <div className="w-[227.85px]">
            <img src={Logo} />
          </div>
          <p className="text-white"></p>
        </div>
        <div className="w-full flex items-center justify-around relative z-[3] p-4">
          <div className="w-[533px] text-white flex flex-col">
            <p className="font-semibold text-5xl">
              Our growth is incomplete without you.
            </p>
            <p className="py-6">
              Your ideas are the missing link between where we are now and where we want to be.
            </p>
            <div
              className="w-[170px] h-[50px] border hover:bg-white hover:text-black transition-all ease-in-out duration-300 border-white rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Start Writing
            </div>
          </div>
          <div className="w-[818.29px]">
            <img src={Person} />
          </div>
        </div>
      </div>
      {/* ideas grid */}
      <div className="py-10 flex flex-col items-center justify-center">
        <p className="font-semibold text-4xl"></p>
        <p className="font-normal text-black/40 text-center py-2"></p>
        <div className="grid grid-cols-4 gap-4 my-6">
          {ideas.map((idea) => (
            <div className="w-[259px]">
              <p>{idea.icon}</p>
              <p className="py-2 font-bold text-xl">{idea.title}</p>
              <p className="text-black/40">{idea.message}</p>
            </div>
          ))}
        </div>
      </div>
      {/* light-bulb */}
      <div className="w-full bg-[#FEF5F5] flex items-center justify-around px-10 py-4 my-10">
        <div className="w-[538.64px]">
          <img src={HDU} />
        </div>
        <div className="w-[619.67px]">
          <p className="font-bold text-4xl text-[#434343]">
            Provide ideas, Contribute and Collaborate with your Premium colleagues
          </p>
          <p className="py-4 text-[#232323] text-xl font-normal"></p>
        </div>
      </div>
      {/* user's category */}
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-4xl">User Categories</p>
        <p className="font-normal text-black/40 text-center py-2"></p>
        <div className="grid grid-cols-5 my-6">
          {users.map((user) => (
            <div className="w-[259px]">
              <div>{user.image}</div>
              <p className="py-2 font-medium text-lg uppercase text-[#363940]">
                {user.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={Footer} />
      </div>
      <div>
        <img src={Copyrights} />
      </div>
    </div>
  );
};

export default LandingPage;
