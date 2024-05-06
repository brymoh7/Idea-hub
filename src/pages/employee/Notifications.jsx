import React from 'react'
import n1 from '../../assets/n1.svg'
const Notification = ({ details }) => {
    return (
        <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-x-3'>
                <div>
                    <img src={n1} alt='user' className='object-cover w-[40px] h-[40px] rounded-full' />
                </div>
                <div>
                    <p className='text-[#212121] font-medium text-[12px] mb-2'>Blessing Ogbonna</p>
                    <p className='text-[#212121] font-light text-[11px]'>Commented on your post. 10w</p>
                </div>

            </div>
            <div>
                {
                    details !== 5 ? <button className='text-primary border-primary border rounded-[8px] font-medium text-[12px] px-3 py-2'>
                        See
                    </button> :
                        <button disabled className='text-[#232323] border-none border rounded-[8px] font-medium text-[12px] px-3 py-2'>
                            Seen
                        </button>
                }

            </div>
        </div>
    )
}

const Notifications = ({ toggleNotifications }) => {
    const notifications = [1, 2, 3, 4, 5, 6]
    return (
        <div className="fixed inset-0  bg-gray-900 bg-opacity-40 z-50" onClick={() => {
            toggleNotifications()
        }}>
            <div className="relative bg-white rounded-lg shadow-lg  ">
                <div className='absolute top-[95px] right-[20px]  w-[369px] rounded-[16px] p-[24px] bg-white'>
                    <h3 className='text-[#212121] text-[16px] font-medium mb-4'>Notifications</h3>
                    {
                        notifications.map((el) => <Notification key={el} details={el} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications