export interface IUserAuth {
  username: string;
  password: string;
}

export interface IAuthProvider {
    user: any;
    authLogin: (user: IUserAuth) => Promise<any>;
    logout: () => void;
    isLogged: boolean;
}

export interface IAuth {
  username: string;
  token: string;
}
