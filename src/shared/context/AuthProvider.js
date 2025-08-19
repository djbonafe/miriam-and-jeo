import { createContext, useState } from "react";


export const AuthContext = createContext();  
// AuthContext.js
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);

  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token);
    if (userId) localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
