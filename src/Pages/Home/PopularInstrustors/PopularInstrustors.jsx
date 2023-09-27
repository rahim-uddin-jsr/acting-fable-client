import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "../../Instructor/InstructorCard";

const PopularInstrustors = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    axios
      .get(`https://acting-fable-server.vercel.app/instructors?popular=1`)
      .then((res) => setPopular(res.data));
  }, []);
  console.log();
  return (
    <div className="mt-24 mb-20 lg:container mx-auto px-4 sm:px-6 md:px-0">
      <h1 className="text-5xl uppercase font-bold mb-20 text-orange-1">
        Popular Instructors
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {popular?.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstrustors;
