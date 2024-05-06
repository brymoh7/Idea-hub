import React from 'react'

const Vote = () => {
    return (
        <div className='rounded h-[250px] flex flex-col justify-center items-center bg-white p-4 '>
            <h3 className="w-[84px] h-[84px] bg-[#7F7F7F] rounded-full flex items-center justify-center text-white font-semibold text-[31.67px] mb-3">
                MB
            </h3>
            <p className='text-[#2E2E5D] font-medium text-[16.01px] mb-1'>Mariam A.O Bennard</p>
            <p className='text-[#2E2E5D] font-light text-[12.45px]'>MariamBen01@gmail.com</p>
            <p className='text-[#2E2E5D] font-light text-[12.45px] mb-2'>08118130114</p>
            <div className='text-primary border border-primary px-5 py-2 rounded text-[12px] font-normal'>
                View Votes
            </div>

        </div>
    )

}

const Votes = () => {
    const votes = [1, 2, 3, 4, 5, 6]
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                votes?.map((el) => (<Vote key={el} />))
            }
        </div>
    )
}

export default Votes