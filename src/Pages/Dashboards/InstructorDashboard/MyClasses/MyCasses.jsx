import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import MyClassesRow from "./MyClassesRow";

const MyCasses = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axiosSecure
      .get(`http://localhost:5000/classes/${user.email}`)
      .then((res) => setClasses(res.data));
  }, []);

  const handleModal = (id) => {
    setShowModal(true);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-3 text-indigo-600 sm:text-3xl">
        All classes you'r added!
      </h1>
      <div className="overflow-x-auto ">
        <table className="table text-base">
          {/* head */}
          <thead>
            <tr className="text-center text-base">
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Class Title</th>
              <th>Available seats</th>
              <th>Total Student</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, idx) => (
              <MyClassesRow
                key={idx}
                classItem={classItem}
                idx={idx}
                handleModal={handleModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal for update toys data  */}
      {showModal && (
        <>
          <div className="justify-center items-center bg-black bg-opacity-50 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto ">
              {/*content*/}
              {/*body*/}
              <>
                <button
                  className="text-red-500 absolute top-0 right-0 background-transparent font-bold outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <div className="mx-auto bg-base-200 rounded-md py-5">
                  <form
                    // onSubmit={}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
                  >
                    <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                      This feature will be added soon!
                    </h1>

                    {/* <form>
                      <label htmlFor="feedback"></label>
                      <textarea
                        ref={feedbackRef}
                        className="w-full rounded-lg shadow-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        name=""
                        id="feedback"
                        cols="30"
                        rows="10"
                        placeholder="write feedback for user"
                      ></textarea>
                    </form> */}
                    {/* <button
                      type="submit"
                      className="block w-full rounded-lg btn-primary px-5 py-3 text-sm font-medium text-white"
                    >
                      Send
                    </button> */}
                  </form>
                </div>
              </>
              <div className="relative flex flex-col">{/*footer*/}</div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default MyCasses;
