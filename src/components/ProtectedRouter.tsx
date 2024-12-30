import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRouter = ({ element }: any) => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return element;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRouter;
