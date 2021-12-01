import { createContext, useContext, useEffect, useState } from "react";
import { UserResponse } from "../api/users";

const providerValue = {
  user: null,
  setUser: () => {},
};

type AuthContextType = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
};

const AuthContext = createContext<AuthContextType>(providerValue);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    const ls = localStorage.getItem("auth");
    const storageAuth = ls ? JSON.parse(ls) : null;
    setUser(storageAuth);
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
