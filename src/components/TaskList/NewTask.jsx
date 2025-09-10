import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] p-5 bg-purple-400 rounded-xl flex flex-col'>
      <div className='flex justify-between items-start'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-3xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-15'>
        {data.taskDescription}
      </p>
      <div className='mt-4'>
        <button>Accept task</button>
      </div>
    </div>
  );
};

export default NewTask;
