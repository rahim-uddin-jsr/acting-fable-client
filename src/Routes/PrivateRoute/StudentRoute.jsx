import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useUserRole from "../../hooks/useUserRole";
const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isRole, isLoading] = useUserRole();
  if (loading || isLoading) {
    return <ScaleLoader className="" color="#36d7b7" />;
  }

  if (user && isRole === "student") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
