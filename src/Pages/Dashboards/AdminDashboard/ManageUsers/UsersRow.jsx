import React, { useEffect, useState } from "react";

const UsersRow = ({ user, idx, updateRole }) => {
  const { _id, name, email, role, photo } = user;
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  useEffect(() => {
    if (role === "admin") {
      setIsAdmin(true);
      setIsInstructor(false);
    }
    if (role === "instructor") {
      setIsAdmin(false);
      setIsInstructor(true);
    }
  }, [role]);
  return (
    <tr className="bg-white shadow-lg shadow-slate-800 rounded-3xl my-3">
      <th>{idx}</th>
      <td>
        <div className="avatar">
          <div className="rounded-md  w-20 h-20">
            <img src={photo} alt="user image" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td className="text-xl font-semibold">{role}</td>
      <td className="">
        <div className="flex gap-3 justify-center">
          <button
            disabled={isAdmin}
            onClick={() => updateRole("admin", _id)}
            className="btn btn-outline rounded-none btn-xs"
          >
            Make Admin
          </button>
          <button
            disabled={isInstructor}
            onClick={() => updateRole("instructor", _id)}
            className="btn btn-outline rounded-none btn-xs"
          >
            Make Instructor
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersRow;
