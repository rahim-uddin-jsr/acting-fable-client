import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    //   TODO: (optional) See Classes button to show classes by this Instructor. This will take you to a new link
    <Link className="group relative block bg-black rounded-md">
      <img
        alt="instructors"
        src={instructor?.photo}
        className="absolute inset-0 rounded-md h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 ">
        <div className="mt-32 sm:mt-48 lg:mt-64 ">
          <p className=" font-medium uppercase tracking-widest text--500 text-white">
            {instructor?.name}
          </p>
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{instructor?.email}</p>
            <p className="text-sm text-white">{instructor?.phone}</p>
          </div>
          {/* TODO: (optional) Name of the Classes taken by the Instructor.
          (optional) See Classes button to show classes by this Instructor. This
          will take you to a new link */}
        </div>
      </div>
    </Link>
  );
};

export default InstructorCard;
