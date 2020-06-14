import React, { createContext, useState, useEffect, useContext } from "react";
import { authService } from "../services/auth";

interface IUser {
  name: string;
}

interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    const storagedUser = localStorage.getItem("user");
    const storagedToken = localStorage.getItem("token");
    
    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
    setLoading(false);
  }, []);
  async function signIn() {
    const response = await authService();

    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", JSON.stringify(response.token));
    setUser(response.user);
  }
  async function signOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
