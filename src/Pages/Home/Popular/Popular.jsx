import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleClassCard from "../../Classes/SingleClassCard";

const Popular = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    axios
      .get(`https://acting-fable-server.vercel.app/classes?popular=1`)
      .then((res) => setPopular(res.data));
  }, [popular]);
  console.log();
  return (
    <div className=" mt-0 xl:mt-64 xl:container mx-auto px-4 sm:px-6 md:px-0">
      <h1 className="text-5xl uppercase font-bold mb-20 text-orange-1">
        Popular Classes
      </h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {popular?.map((singleClass) => (
          <SingleClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
