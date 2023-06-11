import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      manage users
      <br />
      {users.length}
    </div>
  );
};

export default ManageUsers;
