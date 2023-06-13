import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import EnrolledClasesRow from "./EnrolledClasesRow";

const MyEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/payments/${user.email}`)
      .then((res) => setClasses(res.data));
  }, []);
  console.log(classes);
  return (
    <div>
      <h2 className="text-5xl my-3">You Enroll This class!</h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-700 text-white">
            <tr className="text-center text-xl">
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Class Title</th>
              <th>Available seats</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, idx) => (
              <EnrolledClasesRow key={idx} classItem={classItem} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
