import React from 'react'

const AcceptTask = ({data}) => {
    console.log();
    return (
        <div className='flex-shrink-0 h-full w-[400px] p-5 bg-red-400 rounded-xl flex flex-col'>
                <div className='flex justify-between items-start'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4> {data.taskDate} </h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-15 '>
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
                </div>
            </div>
    )
}

export default AcceptTask