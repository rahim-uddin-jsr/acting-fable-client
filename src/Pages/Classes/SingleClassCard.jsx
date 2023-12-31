import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSelectedClaeess from "../../hooks/useSelectedClaeess";
import useUserRole from "../../hooks/useUserRole";

const SingleClassCard = ({ singleClass }) => {
  const { selectedClasses, refetch } = useSelectedClaeess();
  const [axiosSecure] = useAxiosSecure();
  const {
    img,
    price,
    name,
    instructorName,
    instructorEmail,
    insId,
    availableSeats,
    _id,
  } = singleClass;
  const [disabled, setDisabled] = useState(true);
  const [addedClasses, setAddedClasses] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const userEmail = user?.email;
  const userPhoto = user?.photoURL;

  const [isRole] = useUserRole();
  useEffect(() => {
    if (user) {
      if (isRole === "student") {
        setDisabled(false);
      }
      const ids = selectedClasses.map((items) => {
        if (items.classId === _id) {
          setDisabled(true);
        }
      });
    }
    if (!user && availableSeats) {
      setDisabled(false);
    }
    if (user && availableSeats == 0) {
      setDisabled(true);
    }
  }, [user, selectedClasses, isRole]);
  const handleSelectClass = () => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please log in first for select class!",
        showConfirmButton: false,
        timer: 2500,
      });
      return;
    }

    const body = {
      classId: _id,
      img,
      price,
      name,
      instructorName,
      insId,
      availableSeats,
      email: user.email,
      instructorEmail,
    };

    axiosSecure
      .post("/selected", body)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "selected success!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`block rounded-lg p-6 text-left bg-base-200 shadow-md shadow-black-200 ${
        availableSeats == 0 && "bg-red-300"
      }`}
    >
      <img
        alt="class"
        src={img}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500 mb-2">${price}</dd>
          </div>

          <div>
            <dd className="font-medium">{name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center justify-between text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Instructor Name</p>

              <p className="font-medium">{instructorName}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">AvailableSeats</p>

              <p className="font-medium">{availableSeats}</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <button
              onClick={handleSelectClass}
              disabled={disabled}
              className="btn btn-sm btn-primary rounded-full capitalize shadow-md"
            >
              select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClassCard;
