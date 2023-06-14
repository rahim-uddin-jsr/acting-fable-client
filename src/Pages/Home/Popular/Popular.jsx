import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleClassCard from "../../Classes/SingleClassCard";

const Popular = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/classes?popular=1`)
      .then((res) => setPopular(res.data));
  }, [popular]);
  console.log();
  return (
    <div className="mt-24">
      <h1 className="text-5xl uppercase font-bold mb-20">Popular Classes</h1>
      <div className="grid grid-cols-3 gap-5">
        {popular?.map((singleClass) => (
          <SingleClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
