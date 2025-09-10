import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext);

  // Load logged-in user from localStorage on authData load
  useEffect(() => {
    if (!userData.employees.length) return; // wait until employees loaded

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userDataLS = JSON.parse(loggedInUser);
      setUser({ role: userDataLS.role });

      if (userDataLS.role === 'employee') {
        // ensure employee info matches current employees list
        const employee = userData.employees.find(e => e.email === userDataLS.data?.email);
        setLoggedInUserData(employee || null);
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else {
      const employee = userData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser({ role: 'employee' });
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid credentials');
      }
    }
  };

  if (!userData.employees.length || !userData.admin.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
