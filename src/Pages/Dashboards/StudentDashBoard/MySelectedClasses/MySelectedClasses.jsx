import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useSelectedClaeess from "../../../../hooks/useSelectedClaeess";
import SelectedClassRow from "./SelectedClassRow";

const MySelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedItem, setEditedItem] = useState("");
  const feedbackRef = useRef("");
  const [isUpdate, setIsUpdate] = useState(false);
  const { user } = useContext(AuthContext);
  const { selectedClasses, refetch } = useSelectedClaeess();

  const handleModal = (id) => {
    setShowModal(true);
    console.log(id);
    const editedItem = classes.find((classItem) => classItem._id === id);
    setEditedItem(editedItem);
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/selected/${_id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
              setIsUpdate(true);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const total = selectedClasses.reduce(
    (sum, singleClass) => singleClass.price + sum,
    0
  );
  return (
    <div>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center my-3">
        <h3 className="text-3xl">Total Items: {selectedClasses.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning rounded-sm btn-md text-xl">
            Pay Now
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center text-xl">
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Class Title</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((classItem, idx) => (
              <SelectedClassRow
                key={idx}
                classItem={classItem}
                idx={idx}
                handleModal={handleModal}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
