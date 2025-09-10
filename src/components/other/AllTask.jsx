import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  if (!userData || !userData.employees) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-10 flex flex-col gap-1 h-50 ">
      <div className='bg-green-400 py-2 px-4 flex justify-between rounded items-center mb-4'>
          <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
          <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
          <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
          <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
          <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
      <div className='h-[80%] overflow-y-auto'>
        {userData.employees.map(function(elem,idx){
        return (
          <div key={idx} className='border-2 border-emerald-500 py-2 px-4 flex justify-between rounded items-center mb-4'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white-600'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default AllTask;
