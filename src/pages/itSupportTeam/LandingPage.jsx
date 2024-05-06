import React, { useState } from "react";
import Navbar from './Navbar';

import refresh from '../../assets/refresh.svg'
import arrow_forward from '../../assets/arrow_forward.svg'
import arrow_backward from '../../assets/arrow_back.svg'
import { NavLink } from "react-router-dom";


const Post = () => {
    return (
        <NavLink to='posts' className="flex items-center justify-between border-b border-[#EDEDED] py-2 px-4">
            <p className="text-[#000000B2] ">Amaka Nwaze</p>
            <p className="font-[300] text-[14.58px] text-[#000000B2]"><span className='text-[14px] font-[800]'>Monday vacation for Digital builders </span> <span className="px-3">-</span> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,. Donec non elementum sapien, at t leo...</p>
            <p className="font-normal text-[14.58px] text-[#000000B2]">Aug 15</p>

        </NavLink>
    )
}

const Moderator = () => {

    return (
        <>
            <Navbar />
            <div className="py-[130px] min-h-screen bg-[#F2F3F5] rounded-[17px]">
                <div className="mx-auto w-[90%]">
                    {/* <div className="w-full rounded-xl shadow-lg bg-white p-4"> */}
                    {/* {viewToRender} */}
                    {/* </div> */}
                    <div className='bg-white rounded-[5px]'>
                        <div className=" flex items-center justify-between p-3">
                            <div className="flex gap-x-5 items-center">
                                <input type='checkbox' className="h-[20px] w-[20px] rounded border-[1.5px] border-[#707070B2] cursor-pointer" />
                                <div className="cursor-pointer">
                                    <img src={refresh} alt='icon' />
                                </div>
                            </div>
                            <div className='flex gap-x-3'>
                                <p className="text-[#707070B2] font-normal text-[12.5px]">1-50 of 2,226</p>
                                <div className="flex items-center gap-x-2">
                                    <div className="cursor-pointer">
                                        <img src={arrow_backward} alt='icon' />
                                    </div>
                                    <div className="cursor-pointer">
                                        <img src={arrow_forward} alt='icon' />
                                    </div>
                                </div>
                            </div>


                        </div>
                        {
                            [1, 2, 3, 4, 5, 6, 6, 7, 8, 2, 3, 4, 5].map(el => <Post key={el} />)

                        }
                        <div className="py-5 flex items-center justify-end px-4">
                            <div className="flex items-center gap-4">
                                <p className="text-[12.5px] font-normal text-[#707070B2]">Terms</p>
                                <div className="w-[4.17px] h-[4.17px] rounded-full bg-[#D9D9D9]" />
                                <p className="text-[12.5px] font-normal text-[#707070B2]">Terms</p>
                                <div className="w-[4.17px] h-[4.17px] rounded-full bg-[#D9D9D9]" />

                                <p className="text-[12.5px] font-normal text-[#707070B2]">Program Policies</p>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Moderator;
