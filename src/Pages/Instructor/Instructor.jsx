import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/instructors").then((res) => {
      setInstructors(res.data);
    });
  }, []);

  return (
    <div>
      Instructor
      <br />
      <br />
      <br />
      <div className="grid grid-cols-3 gap-3">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
