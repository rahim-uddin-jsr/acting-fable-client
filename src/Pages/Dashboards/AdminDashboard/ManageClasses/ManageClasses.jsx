import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassRow from "./ClassRow";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => setClasses(res.data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Class Title</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, idx) => (
              <ClassRow key={idx} classItem={classItem} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
