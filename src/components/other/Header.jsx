import React from 'react';

const Header = (props) => {
  const { username = "Admin", changeUser } = props; // Destructure changeUser prop too

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    // If changeUser prop is a function, call it with null or undefined to clear user state
    if (typeof changeUser === 'function') {
      changeUser(null);
    }
    // Optionally, reload page if needed
    // window.location.reload();
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-med'>
        Hello <br /> <span className='text-3xl font-semibold'>{username}</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
