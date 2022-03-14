import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";
const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticate, loading } = authContext;

  if (isAuthenticate) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
