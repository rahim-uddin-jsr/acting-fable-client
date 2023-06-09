import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log({ loading });
  if (loading) {
    return (
      <div className="w-full mx-auto mt-24">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
