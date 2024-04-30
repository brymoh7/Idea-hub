import React from 'react'
import Navbar from './Navbar'
import back from '../../assets/back.svg'
import { useNavigate } from "react-router-dom";
import post from '../../assets/m_p.svg'

const PostDetails = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className=' py-[130px] bg-[#F2F3F5] min-h-screen'>
                <div className=' w-[90%] mx-auto'>
                    <div className='inline-flex items-center gap-x-2 cursor-pointer mb-6' onClick={() => {
                        navigate(-1)
                    }}>
                        <img src={back} alt='icon' />
                        <p className='text-[14px] font-normal text-[#001F54]'>Back</p>

                    </div>
                    <div className='bg-white rounded px-[61px] py-[38px]'>
                        <div className='flex items-center justify-between w-full'>
                            <div className="flex items-center">
                                <p className="w-[64px] h-[64px] bg-[#7F7F7F] rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                                    JL
                                </p>
                                <div className="px-3 flex flex-col">
                                    <p className="text-[#7F7F7F] text-[18px] font-normal ">
                                        {'John Lennon'}
                                    </p>
                                    <p className="text-[#7F7F7F] text-[14px] font-normal underline">
                                        {'to : IT-SupportTeam@Premiumtrustbank.com'}
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#7F7F7F] text-[14px] font-normal ">
                                20 june 2024 : 9:16AM
                            </p>
                        </div>
                        <div >
                            <p className='text-[28px] text-[#7F7F7F] font-normal my-5'>Work form home</p>
                            <div className='w-full mb-5'>
                                <img src={post} alt='post' className='h-[262px] w-full object-cover rounded-[10px]' />

                            </div>
                            <p className='mb-4 text-[14px] text-[#7F7F7F] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium</p>
                            <p className='mb-4 text-[14px] text-[#7F7F7F] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium</p>
                            <p className='mb-4 text-[14px] text-[#7F7F7F] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium</p>

                        </div>

                        <div className='flex items-center gap-x-5 mt-24'>
                            <button className='bg-[#339C18] px-6 py-2 rounded-[8px] text-[16px] font-normal text-white'>
                                Approve
                            </button>
                            <button className='bg-transparent px-6 py-2 rounded-[8px] text-[16px] font-normal text-primary border border-primary text-primary '>
                                Reject
                            </button>

                        </div>
                    </div>


                </div>

            </div>

        </>

    )
}

export default PostDetails