import { createContext, ReactNode, useState } from "react";
import { IAuth, IUserAuth, IAuthProvider } from "../models/IAuth";
import { authService } from "../services/Auth.service";

export const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IAuth | null>(null);

  const authLogin = async (userData: IUserAuth) => {
    const result = await authService.login(userData);
    setUser(result);
    return result;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authLogin,
        logout,
        isLogged: !!user || authService.isLogged(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
