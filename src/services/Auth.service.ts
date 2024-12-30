import { IUserAuth } from "../models/IAuth";
import {
  loginLocalStorage,
  logoutLocalStorage,
  isLoggedLocalStorage,
  getTokenLocalStorage,
} from "../utilities/authLocal.utility";

export const authService = {
  async login(user: IUserAuth) {
    if (user.username === "admin" && user.password === "admin") {
      const payload = {
        ...user,
        token: "1234token-clean",
      };
      await loginLocalStorage(payload);
      return payload;
    }
    return null;
  },
  logout() {
    logoutLocalStorage();
  },
  isLogged(): boolean {
    return isLoggedLocalStorage();
  },
  getToken() {
    return getTokenLocalStorage();
  },
};
