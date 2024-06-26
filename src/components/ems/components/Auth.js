import React,{ createContext, useContext, useState } from 'react';


const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const login=user=>{
    setUser(user);
  }
  const logout =()=>{
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth=()=>{
    return useContext(AuthContext);
}
