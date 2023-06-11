import axios from "axios";
import React from "react";

const ClassRow = ({ classItem, idx }) => {
  const {
    _id,
    availableSeats,
    name,
    instructorEmail,
    instructorName,
    img,
    price,
    status,
  } = classItem;
  const handleFeedback = () => {};
  const updateStatus = (newStatus) => {
    axios
      .put(`http://localhost:5000/classes/${_id}`, { newStatus })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <tr>
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
        {status}
        <div className="flex justify-around w-full mt-3">
          <button
            onClick={() => updateStatus("approved")}
            className="btn btn-outline rounded-none btn-xs"
          >
            approved
          </button>
          <button
            onClick={() => updateStatus("denied")}
            className="btn btn-outline rounded-none btn-xs"
          >
            denied
          </button>
          <button
            onClick={handleFeedback}
            className="btn btn-outline rounded-none btn-xs"
          >
            feedback
          </button>
        </div>
      </th>
    </tr>
  );
};

export default ClassRow;
