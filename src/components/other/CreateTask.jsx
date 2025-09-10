import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  // Local state for form fields
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  // Access context data and updater
  const { userData, setUserData } = useContext(AuthContext);

  // Helper to recalculate taskCounts from tasks array
  const getTaskCounts = (tasks) => ({
    active: tasks.filter(t => t.active).length,
    newTask: tasks.filter(t => t.newTask).length,
    completed: tasks.filter(t => t.completed).length,
    failed: tasks.filter(t => t.failed).length,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      date,
      assignedTo,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Update tasks and counts for the assigned employee
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.firstName === assignedTo) {
        const updatedTasks = [...emp.tasks, newTask];
        const updatedTaskCounts = getTaskCounts(updatedTasks);
        return { ...emp, tasks: updatedTasks, taskCounts: updatedTaskCounts };
      }
      return emp;
    });

    // Update localStorage and context state
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setUserData({
      ...userData,
      employees: updatedEmployees
    });

    // Clear form fields
    setTaskTitle('');
    setDate('');
    setAssignedTo('');
    setCategory('');
    setDescription('');

    console.log('Updated employees:', updatedEmployees);
  };

  return (
    <div className="w-full flex justify-center items-start mt-8">
      <form
        onSubmit={submitHandler}
        className="w-[98%] max-w-6xl bg-neutral-900 rounded-xl p-8 flex flex-row gap-8"
      >
        <div className="w-1/2 flex flex-col gap-6">
          <div>
            <h3 className="text-white mb-2">Task Title</h3>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-white mb-2">Date</h3>
            <input
              type="date"
              className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-white mb-2">Assign to</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-white mb-2">Category</h3>
            <input
              type="text"
              placeholder="Design, dev, etc"
              className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start gap-6">
          <div>
            <h3 className="text-white mb-2">Description</h3>
            <textarea
              className="w-full h-40 px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-3 text-lg font-semibold bg-green-500 text-white rounded"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
