import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
const SelectedClassRow = ({ classItem, idx, handleDelete }) => {
  const {
    _id,
    availableSeats,
    name,
    instructorEmail,
    instructorName,
    img,
    price,
  } = classItem;
  const [isDisabled, serIsDisabled] = useState(false);

  return (
    <tr className="bg-white shadow-lg shadow-slate-800 rounded-3xl my-3">
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
      <th className="flex flex-col justify-between items-center gap-3 h-full">
        <div className="flex justify-around w-full mt-3">
          <button
            disabled={isDisabled}
            onClick={() => handleDelete(_id)}
            className="btn rounded-full btn-md bg-red-400 text-white "
          >
            <FaTrash />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default SelectedClassRow;
