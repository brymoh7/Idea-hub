import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import bolt from '../../assets/bolt.svg'
import coin from '../../assets/coin.svg'
// import LandingPage from './landingPage'
// import Posts from './Posts'

const handleLogout = () => {
    navigate("/");
};

const Layout = ({ children, setActiveTab, activeTab }) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const [initials, setInitials] = useState("");
    useEffect(() => {
        const _initials = user?.name
            .split(" ")
            .map((word) => word[0].toUpperCase())
            .join("");
        setInitials(_initials);

    }, []);
    const [postCount, setPostCount] = useState(0);
    const [voteCount, setVoteCount] = useState(0);


    return (
        <div>
            <Navbar onLogout={handleLogout} setActiveTab={setActiveTab} activeTab={activeTab} />
            <div className="bg-[#F2F3F5] w-full py-[130px]">
                <div className="  w-[90%] mx-auto">
                    <div className="w-full h-screen grid grid-cols-12 gap-8">
                        <div className="col-span-3 h-[600px] bg-white rounded-xl  flex flex-col items-center justify-center gap-10 p-7">
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-[83px] h-[83px] rounded-full bg-[#E43625] text-white text-[38px] flex items-center justify-center font-semibold">
                                    {initials ?? 'AN'}
                                </div>
                                <p className="py-2 font-semibold text-[18.11px] text-[#232323]">{user?.name ?? 'Amaka Nwanze'}</p>
                                <p className="text-[#76777E] font-medium font-avenir text-[10.63px] mb-6">{user?.role ?? 'Group head of Digital Branding'}</p>
                                <div className="border border-primary rounded-[5px] text-primary text-[12.68px] font-medium px-8 text-center py-3 mb-4">
                                    User
                                </div>
                                <div className="flex items-center justify-between my-4 w-full">
                                    <div className="cursor-pointer"
                                        onClick={() => {
                                            setActiveTab('posts')
                                        }}
                                    >
                                        <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                                        <p className="text-center text-[10.87px] font-medium text-[#232323]">Posts</p>
                                    </div>
                                    <div className='h-[3.62px] w-[3.62px] bg-[#6D6C76] rounded-full' />
                                    <div className="cursor-pointer"
                                        onClick={() => {
                                            setActiveTab('votes')
                                        }}>
                                        <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                                        <p className="text-center text-[10.87px] font-medium text-[#232323]">Votes</p>
                                    </div>
                                </div>
                                <div className="text-center my-3">
                                    <p className="text-[#666] text-[10.63px] font-normal">Phone number: 08118130114</p>
                                    <p className="text-[#338DF6] text-[10.63px] font-normal my-3">Amaka.Nwanze@Premiumtrustbank.com</p>
                                    <p className="text-[#338DF6] text-[10.63px] font-normal underline">Contact center</p>

                                </div>
                                <div className="flex items-center justify-between my-3 w-full">
                                    <div className="cursor-pointer" onClick={() => {
                                        setActiveTab('posts')
                                    }}>
                                        <div>
                                            <img src={coin} alt='icon' />
                                        </div>
                                        <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                                        {/* <p className="text-center text-[10.87px] font-medium text-[#232323]">Posts</p> */}
                                    </div>
                                    <div className='h-[3.62px] w-[3.62px] bg-[#6D6C76] rounded-full' />
                                    <div onClick={() => {
                                        setActiveTab('posts')
                                    }}>
                                        <div>
                                            <img src={bolt} alt='icon' />
                                        </div>
                                        <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                                        {/* <p className="text-center text-[10.87px] font-medium text-[#232323]">Votes</p> */}
                                    </div>
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
                            <button
                                className=" px-4 py-3 bg-primary text-white rounded w-full text-[14.17px] font-semibold"
                                onClick={() => navigate("/employee-leaderboard")}
                            >
                                My Leaderboard
                            </button>
                        </div>
                        <div className='col-span-9 flex flex-col'>
                            {children}


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Layout