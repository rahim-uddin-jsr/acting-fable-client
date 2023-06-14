import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleClassCard from "./SingleClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("https://acting-fable-server.vercel.app/classes?role=approved")
      .then((res) => {
        setClasses(res.data);
      });
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-2xl uppercase font-bold my-12">
        Get your favorite Acting class!
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {classes.map((singleClass) => (
          <SingleClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
