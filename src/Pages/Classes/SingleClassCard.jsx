import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useSelectedClaeess from "../../hooks/useSelectedClaeess";

const SingleClassCard = ({ singleClass }) => {
  const { selectedClasses, refetch } = useSelectedClaeess();

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
  const [disabled, setDisabled] = useState(false);
  const [studentInfo, setStudentInfo] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const userEmail = user?.email;
  const userPhoto = user?.photoURL;

  useEffect(() => {
    if (!availableSeats) {
      setDisabled(true);
    }

    if (!user && !loading) {
      setDisabled(false);
    }
  }, [user]);
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
    axios
      .post("http://localhost:5000/selected", body)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "selected success!",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`block rounded-lg p-4 text-left shadow-md shadow-black-200 ${
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

            <dd className="text-sm text-gray-500">${price}</dd>
          </div>

          <div>
            <dd className="font-medium">{name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
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
              className="btn btn-sm btn-neutral"
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
