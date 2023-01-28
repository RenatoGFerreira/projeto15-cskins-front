import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const persistToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(persistToken);

    return (
      <AuthContext.Provider value={{ token, setToken }}>
        {children}
      </AuthContext.Provider>
    )
  }

export default AuthContext;