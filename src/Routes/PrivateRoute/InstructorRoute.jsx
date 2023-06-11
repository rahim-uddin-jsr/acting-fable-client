import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useUserRole from "../../hooks/useUserRole";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isRole, isRoleLoading] = useUserRole();
  if (loading || isRoleLoading) {
    return <ScaleLoader className="" color="#36d7b7" />;
  }

  if (user && isRole === "instructor") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
