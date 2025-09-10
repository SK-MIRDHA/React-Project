import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize with empty arrays to avoid loading block
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    // Initialize localStorage if missing
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({
      employees: employees || [],
      admin: admin || [],
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
