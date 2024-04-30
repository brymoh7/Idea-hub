import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { RiLogoutBoxLine } from 'react-icons/ri'; // Import the logout icon
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import arrowDown from '../../assets/arrow-down.svg'


const Management = () => {
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_REACT_APP_GET_IDEA_HUB_MANAGEMENT;
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [initials, setInitials] = useState("");
  const [management, setManagement] = useState([]);
  const [summary, setSummary] = useState({});

  const GetInteractionSummary = () => {
    const url = `${apiURL}/GetInteractionSummary`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setSummary(response.data);
      })
      .catch((err) => console.log(err));
  };

  const infoCards = [
    {
      icon: "icon",
      figure: summary.totalUsers,
      description: "Total users",
    },
    {
      icon: "icon",
      figure: summary?.totalInteractions?.totalCampaignLikes,
      description: "Total votes",
    },
    {
      icon: "icon",
      figure: summary?.totalInteractions?.totalApprovedPosts,
      description: "Total posts approved",
    },
    {
      icon: "icon",
      figure:
        summary?.totalInteractions?.totalDeclinedPosts === 0
          ? "0"
          : summary?.totalInteractions?.totalDeclinedPosts?.toString() ?? "0",
      description: "Total posts declined",
    },
  ];

  const GetMyCampaigns = () => {
    const url = `${apiURL}/GetTopInnovationLeaderboard`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.responseValue);
        setManagement(response.data.responseValue);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const _initials = user?.name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
    setInitials(_initials);
    GetMyCampaigns();
    GetInteractionSummary();
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="py-[130px] bg-[#F2F3F5] min-h-screen ">
        <div className=" flex mx-auto w-[90%] h-full">
          {/* User Profile Card */}
          <div className="w-full h-screen grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className=' h-[484px] bg-white rounded-xl  flex flex-col items-center justify-center gap-10 p-7 mb-9'>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[83px] h-[83px] rounded-full bg-[#E43625] text-white text-[38px] flex items-center justify-center font-semibold">
                    {initials ?? 'AN'}
                  </div>
                  <p className="py-2 font-semibold text-[18.11px] text-[#232323]">{user?.name ?? 'Amaka Nwanze'}</p>
                  <p className="text-[#76777E] font-medium font-avenir text-[10.63px] mb-6">{user?.role ?? 'Group head of Digital Branding'}</p>
                  <div className="border border-primary rounded-[5px] text-primary text-[12.68px] font-medium px-8 text-center py-3 mb-4">
                    Management
                  </div>

                  <div className="text-center my-3">
                    <p className="text-[#666] text-[10.63px] font-normal">Phone number: 08118130114</p>
                    <p className="text-[#338DF6] text-[10.63px] font-normal my-3">Amaka.Nwanze@Premiumtrustbank.com</p>
                    <p className="text-[#338DF6] text-[10.63px] font-normal underline">Contact center</p>

                  </div>


                  {/* <span className="flex-grow"></span> */}
                  {/* <button
                  className="mr-6 flex items-center text-black"
                  onClick={handleLogout}
                >
                  <RiLogoutBoxLine className="mr-2" />
                  Logout
                </button> */}
                </div>
                <NavLink
                  to='/'
                  className=" px-4 py-3 bg-transparent border-primary border text-primary rounded w-full text-[14.17px] font-semibold text-center"
                  onClick={() => navigate("/employee-leaderboard")}
                >
                  Logout
                </NavLink>
              </div>
              <div className=' h-[363px] bg-white rounded-xl  gap-10 p-7'>
                <p className="text-[18px] font-medium text-[#001F54] mb-7">
                  Top Ideas
                </p>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className='text-[#001F54] text-[14px] font-medium'>Amaka Nwanze</p>
                    <p className='text-[#8F8F8F] text-[12px] font-normal'>Moderator</p>
                  </div>
                  <div>
                    <div className='bg-[#FAFAFA] p-[6px] rounded-[8px] flex text-[#001F54B2]'>
                      Moderator

                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className='text-[#001F54] text-[14px] font-medium'>Amaka Nwanze</p>
                    <p className='text-[#8F8F8F] text-[12px] font-normal'>Moderator</p>
                  </div>
                  <div>
                    <div className='bg-[#FAFAFA] p-[6px] rounded-[8px] flex text-[#001F54B2]'>
                      Moderator

                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className='text-[#001F54] text-[14px] font-medium'>Amaka Nwanze</p>
                    <p className='text-[#8F8F8F] text-[12px] font-normal'>Moderator</p>
                  </div>
                  <div>
                    <div className='bg-[#FAFAFA] p-[6px] rounded-[8px] flex text-[#001F54B2]'>
                      Moderator

                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className='text-[#001F54] text-[14px] font-medium'>Amaka Nwanze</p>
                    <p className='text-[#8F8F8F] text-[12px] font-normal'>Moderator</p>
                  </div>
                  <div>
                    <div className='bg-[#FAFAFA] p-[6px] rounded-[8px] flex text-[#001F54B2]'>
                      Moderator

                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className='text-[#001F54] text-[14px] font-medium'>Amaka Nwanze</p>
                    <p className='text-[#8F8F8F] text-[12px] font-normal'>Moderator</p>
                  </div>
                  <div>
                    <div className='bg-[#FAFAFA] p-[6px] rounded-[8px] flex text-[#001F54B2]'>
                      Moderator

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-span-9 flex flex-col'>
              {/* Campaign section:- Post Input and List */}
              <div className=" flex flex-col bg-purple-60">
                {/* info card */}
                <div className="grid grid-cols-4 gap-5">
                  {infoCards?.map((card, index) => (
                    <div key={index} className="bg-white rounded-xl  h-[94.39px] border shadow-lg flex items-center px-6 gap-x-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#DB1600] flex-shrink-0 ">
                        {card?.icon}
                      </div>
                      <div className="">
                        <p className="font-bold font-sans text-[18.88px] font-semibold">{card?.figure ?? 0}</p>
                        <p className="font-medium text-[#001F54] font-mono text-[12.59px]">
                          {card?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* table */}
                <div className="w-full p-4 bg-white rounded-xl flex flex-col items-center shadow-lg border my-10">
                  <div className="w-full flex items-center justify-between mb-10">
                    <p className="text-[18px] font-medium text-[#001F54] ">
                      Leadership board
                    </p>
                    <div className='flex items-center gap-x-6'>
                      <h3 className='text-[14px] text-black font-medium'>
                        Showing:
                      </h3>
                      <div className='bg-[#e8e8e8] flex items-center gap-x-4 rounded-[10px] py-2 px-3'>
                        <p className='text-[12.42px] text-black font-normal '>Top innovation dashboard</p>
                        <div>
                          <img src={arrowDown} alt='icon' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="w-full table bg-white text-sm text-left t px-4">
                    <thead className="text-[#5A5A5A] text-[13px] font-light bg-[#FAFAFA] tracking-widest uppercase">
                      <tr>
                        <th className="p-4">Employee Name</th>
                        <th className="p-4">Rank</th>
                        <th className="p-4">Coin</th>
                        <th className="p-4">Strikes</th>
                        <th className="p-4">Status</th>
                        {/* <th className="p-4"></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {['management', 2, 3, 5, 6]?.length > 0 &&
                        ['management', 2, 3, 5, 6]?.map((user, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-6 whitespace-nowrap text-[14px] py-5 font-normal text-[#001F54] ">
                                {`${user?.StaffName ?? 'Amaka Nwanze'}`}
                              </td>
                              <td className="p-4 whitespace-nowrap text-[14px] py-5 font-normal text-[#001F54] ">
                                {user?.Rank ?? "First"}
                              </td>
                              <td className="p-4 whitespace-nowrap text-[14px] py-5 font-normal text-[#001F54] ">
                                {user?.TotalCoins ?? "20,000"}
                              </td>
                              <td className="p-4 whitespace-nowrap text-[14px] py-5 font-normal text-[#001F54] ">
                                {user?.branch ?? "20,000"}
                              </td>
                              <td
                                className={`p-4 whitespace-nowrap text-[14px] py-5 font-normal text-[#001F54] flex `}
                              >
                                <div className='bg-[#FAFAFA] p-[6px] rounded-[8px] flex'>
                                  Moderator

                                </div>
                                {/* {user?.isActive ? "Active" : "Inactive"} */}
                              </td>

                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>


            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default Management;
