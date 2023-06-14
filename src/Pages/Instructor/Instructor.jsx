import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios
      .get("https://acting-fable-server.vercel.app/instructors")
      .then((res) => {
        setInstructors(res.data);
      });
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-2xl uppercase font-bold my-12">
        All our instructors
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
