import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleClassCard from "./SingleClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/classes?role=approved").then((res) => {
      setClasses(res.data);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {classes.map((singleClass) => (
          <SingleClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
