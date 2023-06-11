import React from "react";
import useSelectedClaeess from "../../../../hooks/useSelectedClaeess";

const MySelectedClasses = () => {
  const { selectedClasses } = useSelectedClaeess();
  return (
    <div>
      MySelectedClasses
      {selectedClasses.length}
    </div>
  );
};

export default MySelectedClasses;
