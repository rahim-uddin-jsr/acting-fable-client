import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const StudentDashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center mx-auto mt-5 w-full">
      <div className="avatar">
        <div className="w-60 rounded-xl">
          <img src={user.photoURL} />
        </div>
      </div>
      <h2 className="text-5xl">Welcome {user.displayName}</h2>
      <h2 className="text-2xl">your email address {user.email}</h2>
    </div>
  );
};

export default StudentDashBoard;
