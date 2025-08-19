import React from "react"

const TaskListNumbers = () => {
    return(
        <div className='flex mt-10 justify-between gap-3 w-full'>
            <div className='rounded-xl w-1/4 py-6 bg-red-400 flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl w-1/4 py-6 bg-blue-400 flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl w-1/4 py-6 bg-green-400 flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl w-1/4 py-6 bg-yellow-400 flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
