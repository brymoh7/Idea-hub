import React from 'react'
import n1 from '../../assets/n1.svg'
import { NavLink } from "react-router-dom";

const Group = ({ details }) => {
    return (
        <NavLink to='/groups' className='flex items-center justify-between px-[38px]  py-2'>

            <div>
                <p className='text-primary font-medium text-[13.69px] mb-'>{details?.title}</p>
                <p className='text-[#212121] font-light text-[9.13px]'>{details?.post}</p>
            </div>
            <div className='relative flex'>
                <div className='z-[10]'>
                    <img src={n1} alt='user' className='object-cover w-[40px] h-[40px] rounded-full border-r-[3px] border-white ' />
                </div>
                <div className='-ml-5 z-[7]'>
                    <img src={n1} alt='user' className='object-cover w-[40px] h-[40px] rounded-full border-r-[3px]' />
                </div><div className='-ml-5 z-[6]'>
                    <img src={n1} alt='user' className='object-cover w-[40px] h-[40px] rounded-full ' />
                </div>
            </div>
        </NavLink>
    )
}

const Groups = ({ toggleGroups }) => {
    const groups = [{
        title: '#KeyPerformanceposts',
        post: '19,259 post'
    },
    {
        title: '#MoneyLaundering',
        post: '19,259 post'
    }
        , {
        title: '#Workaholics',
        post: '19,259 post'
    },
    {
        title: '#DigitalBankers',
        post: '19,259 post'
    }]
    return (
        <div className="fixed inset-0  bg-gray-900 bg-opacity-40 z-50 transition-all ease-in-out" onClick={() => {
            toggleGroups()
        }}>
            <div className="relative bg-white rounded-lg shadow-lg  ">
                <div className='absolute top-[95px] right-[20px]  w-[485px] rounded-[16px] py-[27px] bg-white'>
                    <h3 className='text-[#212121] text-[16px] font-medium m px-[38px] pb-[27px] border-b border-[#DFDFDF]'>Join discussion</h3>
                    {
                        groups.map((el, i) =>
                            <div>
                                <Group key={el} details={el} />
                                {groups.length - 1 !== i && <div className='border-b border-[#DFDFDF]' />}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Groups