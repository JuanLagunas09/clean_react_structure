import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import "../styles/global.css";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRouter from "./ProtectedRouter";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRouter element={<Dashboard />} />}
          />
          <Route path="/dashboard-test" element={<Dashboard />} />
          <Route
            path="/"
            element={<ProtectedRouter element={<Navigate to="/dashboard" />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
