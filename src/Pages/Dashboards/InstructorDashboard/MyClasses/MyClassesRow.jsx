import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
const MyClassesRow = ({ classItem, idx, handleModal, updateStatus }) => {
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
  } = classItem;
  const [isDisabled, serIsDisabled] = useState(false);

  useEffect(() => {
    if (status === "denied") {
      serIsDisabled(true);
    }
    if (status !== "denied") {
      serIsDisabled(false);
    }
  }, [status]);
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
      <td>{price}</td>
      <td>{status}</td>
      <td>{feedback || "---"}</td>
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
