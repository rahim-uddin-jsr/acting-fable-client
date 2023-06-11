import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => setClasses(res.data));
  }, []);
  return (
    <div>
      manage classes
      <br />
      {classes.length}
    </div>
  );
};

export default ManageClasses;
