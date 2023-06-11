import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import ClassRow from "./ClassRow";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedItem, setEditedItem] = useState("");
  const feedbackRef = useRef("");
  const [isUpdate, setIsUpdate] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => setClasses(res.data));
  }, [isUpdate]);

  const handleModal = (id) => {
    setShowModal(true);
    console.log(id);
    const editedItem = classes.find((classItem) => classItem._id === id);
    setEditedItem(editedItem);
  };
  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = feedbackRef.current.value;
    console.log(feedback);
    axios
      .put(`http://localhost:5000/classes/${editedItem._id}/?feedback="true"`, {
        feedback: feedback,
      })
      .then((res) => {
        res.data.acknowledged &&
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Feedback send successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        setShowModal(false);
        setIsUpdate(!isUpdate);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateStatus = (newStatus, _id) => {
    axios
      .put(`http://localhost:5000/classes/${_id}`, { newStatus })
      .then((res) => {
        res.data.acknowledged &&
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status Updated Done!",
            showConfirmButton: false,
            timer: 1500,
          });
        setIsUpdate(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Class Title</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, idx) => (
              <ClassRow
                key={idx}
                classItem={classItem}
                idx={idx}
                handleModal={handleModal}
                updateStatus={updateStatus}
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
                    onSubmit={handleFeedback}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
                  >
                    <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                      Send Feedback To for this class user!
                    </h1>

                    <form>
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
                    </form>
                    {/* <div className="grid md:grid-cols-2 gap-5 ">
                      <div className="relative">
                        <input
                          name="seller_name"
                          type="text"
                          defaultValue={sellerName}
                          placeholder="Enter seller full name"
                        />
                      </div>{" "}
                      <div className="relative">
                        <input
                          defaultValue={email}
                          name="seller_email"
                          type="email"
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className="relative">
                        <input
                          defaultValue={productName}
                          name="name"
                          type="text"
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter toy name here"
                        />
                      </div>
                      <div className="relative">
                        <input
                          defaultValue={photoURL}
                          name="photoUrl"
                          required
                          type="url"
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter toy photo url"
                        />
                      </div>
                      <div>
                        <div className="relative">
                          <select
                            name="subCategory"
                            className="select w-full max-w-xs"
                            defaultValue={subCategory}
                          >
                            <option disabled value={1}>
                              Select Sub category
                            </option>
                            <option value="Teddy Bear">Teddy Bear</option>
                            <option value={"Unicorn"}>Unicorn</option>
                            <option value={"Dinosaur"}>Dinosaur</option>
                          </select>
                        </div>
                      </div>
                      <div className="Enter Toy price here">
                        <input
                          name="price"
                          defaultValue={price}
                          required
                          type="text"
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter price"
                        />
                      </div>
                      <div className="Enter Rating">
                        <input
                          defaultValue={rating}
                          name="rating"
                          required
                          type="text"
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Rating here in number"
                        />
                      </div>
                      <div className="Available quantity">
                        <input
                          defaultValue={quantity}
                          name="quantity"
                          required
                          type="text"
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Available quantity in number"
                        />
                      </div>
                    </div>
                    <div className="Detail description">
                      <textarea
                        defaultValue={description}
                        rows={5}
                        ref={descriptionRef}
                        required
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter detail description"
                      />
                    </div> */}
                    <button
                      type="submit"
                      className="block w-full rounded-lg btn-primary px-5 py-3 text-sm font-medium text-white"
                    >
                      Send
                    </button>
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

export default ManageClasses;
