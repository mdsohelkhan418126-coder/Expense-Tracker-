import { useState, createContext } from 'react';

 export const AuthStore = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => {
  setUser(user)
  
  
  }
  return <AuthStore.Provider value={{ user,login }}>{children}</AuthStore.Provider>;
};

export default AuthContext;
