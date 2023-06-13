import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
const MyClassesRow = ({ classItem, idx, handleModal }) => {
  const {
    _id,
    availableSeats,
    name,
    instructorEmail,
    instructorName,
    img,
    price,
    status,
    feedback,
    totalStudent,
  } = classItem;
  const [newFeedback, setNewFeedback] = useState("");
  useEffect(() => {
    if (status === "denied") {
      setNewFeedback(feedback);
    } else {
      setNewFeedback("");
    }
  }, [status, feedback]);
  return (
    <tr className="text-center">
      <th>{idx}</th>
      <td>
        <div className="avatar">
          <div className="rounded-md  w-20 h-20">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{instructorName}</td>
      <td>{instructorEmail}</td>
      <td>{name}</td>
      <td>{availableSeats}</td>
      <td>{totalStudent || 0}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td>{newFeedback}</td>
      <td>
        <button
          onClick={() => handleModal(_id)}
          className="btn btn-info rounded-none btn-md text-xl"
        >
          <FaRegEdit />
        </button>
      </td>
    </tr>
  );
};

export default MyClassesRow;
