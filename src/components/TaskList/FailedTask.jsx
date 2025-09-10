import React from 'react'

const FailedTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[400px] p-5 bg-yellow-400 rounded-xl flex flex-col'>
                <div className='flex justify-between items-start'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4>7 July 2025</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold'>Update the Database</h2>
                <p className='text-sm mt-15 '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='mt-2'>
                    <button className='w-full'>Failed</button>
                </div>
            </div> 
    )
}

export default FailedTask