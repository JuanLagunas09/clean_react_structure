import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";
import { getEntriesForm } from "../utilities/GetEntriesForm.utility";
import { IUserAuth } from "../models/IAuth";

const useLogin = () => {
    const { authLogin, isLogged } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState({
      status: false,
      message: "",
    });
  
    useEffect(() => {
      if (isLogged) {
        navigate("/dashboard");
      }
    }, [isLogged, navigate]);
  
    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      const entries = getEntriesForm(e);
      const userData: IUserAuth = {
        username: entries.username.toString(),
        password: entries.password.toString(),
      };
  
      const result = await authLogin(userData);
      if (result) {
        navigate("/dashboard-test");
      } else {
        setError({
          status: true,
          message: "Usuario o contraseña incorrecta",
        });
      }
    };

    return {
        error,
        handlerSubmit
    }
  
}

export default useLogin;