import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UsersRow from "./UsersRow";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, [isUpdate]);

  const updateRole = (role, _id) => {
    axios
      .put(`http://localhost:5000/users/${_id}`, { role })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Role Updated Done!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsUpdate(!isUpdate);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>User Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <UsersRow
                key={idx}
                user={user}
                updateRole={updateRole}
                idx={idx}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;